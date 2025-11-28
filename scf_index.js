'use strict'
// 独立后端服务：node scf_index.js
// 功能：接收前端报名数据 -> 插入 PostgreSQL；首启自动建表

const express = require('express')
const { Client } = require('pg')
const app = express()
const port = process.env.PORT || 9000

// ===== PostgreSQL 连接配置（请在部署环境设置这些变量）=====
// 标准连接字符串（优先）：DATABASE_URL=postgres://user:pass@host:5432/dbname
// 或分别设置：PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD, PGSSLMODE
const DB_URL = process.env.DATABASE_URL
const PG_CFG = DB_URL ? { connectionString: DB_URL, ssl: envSsl() } : {
  host: process.env.PGHOST || '127.0.0.1',
  port: Number(process.env.PGPORT || 5432),
  database: process.env.PGDATABASE || 'eclub',
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
  ssl: envSsl()
}

function envSsl() {
  const mode = (process.env.PGSSLMODE || '').toLowerCase()
  if (mode === 'disable' || mode === 'false' || mode === 'off') return false
  if (!mode) return false
  return { rejectUnauthorized: false }
}

// CORS（前端将部署在 Vercel，按需放行）
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://e-club-h5.vercel.app').split(',').map(s => s.trim()).filter(Boolean)
app.use((req, res, next) => {
  const origin = req.headers.origin
  // 支持通配符 *.fuwaki.xyz
  const isAllowed = ALLOWED_ORIGINS.includes(origin) ||
    /^https?:\/\/([a-zA-Z0-9-]+\.)?fuwaki\.xyz$/.test(origin || '')
  if (origin && isAllowed) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Vary', 'Origin')
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Max-Age', '600')
  if (req.method === 'OPTIONS') return res.status(204).end()
  next()
})
app.use(express.json({ limit: 64 * 1024 }))

// ===== 数据表定义 =====
function sanitizeTableName(name) {
  const v = (name || '').replace(/[^a-zA-Z0-9_]/g, '')
  return v || 'join_submissions'
}
const TABLE = sanitizeTableName(process.env.JOIN_TABLE)
const CREATE_SQL = `
CREATE TABLE IF NOT EXISTS ${TABLE} (
  id BIGSERIAL PRIMARY KEY,
  -- 旧字段：社团通用报名
  major_class TEXT,
  student_id TEXT,
  name TEXT,
  stack TEXT,
  message TEXT DEFAULT '' NOT NULL,

  -- 新增：LED 比赛队伍报名字段（可为空）
  is_led BOOLEAN DEFAULT FALSE,
  team_name TEXT,
  leader_name TEXT,
  leader_student_id TEXT,
  leader_grade TEXT,
  leader_major_class TEXT,
  member1_name TEXT,
  member1_student_id TEXT,
  member2_name TEXT,
  member2_student_id TEXT,
  contact TEXT,

  meta JSONB,
  ip TEXT,
  ua TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_${TABLE}_created_at ON ${TABLE}(created_at DESC);
`

let db
async function initDb() {
  db = new Client(PG_CFG)
  await db.connect()
  await db.query(CREATE_SQL)
  console.log('[DB] connected and ensured table exists')
}

// 健康检查
app.get('/', (req, res) => { res.send('OK') })
app.get('/health', async (req, res) => {
  try {
    await db?.query('SELECT 1')
    res.json({ ok: true, ts: Date.now() })
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e?.message || e) })
  }
})

// LED比赛报名接口 - 适配前端数据结构
app.post('/api/register', async (req, res) => {
  try {
    const body = req.body || {}
    
    // LED比赛报名数据验证
    const {
      isLed = true,
      teamName,
      leaderName,
      leaderStudentId,
      leaderGrade,
      leaderMajorClass,
      contact,
      members = [],
      note = '',
      meta = {}
    } = body

    // 必填字段验证
    if (!teamName || !leaderName || !leaderStudentId || !leaderGrade || !leaderMajorClass || !contact) {
      return res.status(400).json({ error: '请完整填写队伍名、队长信息和联系方式' })
    }

    // 将前端members数组转换为后端的member字段
    const validMembers = members.filter(m => m.name && m.studentId)
    const member1Name = validMembers[0]?.name || ''
    const member1StudentId = validMembers[0]?.studentId || ''
    const member2Name = validMembers[1]?.name || ''
    const member2StudentId = validMembers[1]?.studentId || ''

    const ip = req.headers['x-forwarded-for']?.toString().split(',')[0].trim() || req.socket.remoteAddress || ''
    const ua = req.headers['user-agent'] || ''

    const sql = `
      INSERT INTO ${TABLE} (
        is_led, team_name, leader_name, leader_student_id, leader_grade,
        leader_major_class, member1_name, member1_student_id,
        member2_name, member2_student_id, contact, message,
        meta, ip, ua
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
      RETURNING id, created_at
    `
    
    const values = [
      true, // is_led
      teamName,
      leaderName,
      leaderStudentId,
      leaderGrade,
      leaderMajorClass,
      member1Name,
      member1StudentId,
      member2Name,
      member2StudentId,
      contact,
      note, // message字段存储备注
      meta ? JSON.stringify(meta) : null,
      ip,
      ua
    ]

    const result = await db.query(sql, values)
    return res.status(201).json({ 
      ok: true, 
      id: result.rows[0].id, 
      createdAt: result.rows[0].created_at,
      message: '报名成功！我们会尽快与队长联系。'
    })
    
  } catch (err) {
    console.error('LED比赛报名错误:', err)
    return res.status(500).json({ error: '服务器内部错误，请稍后重试' })
  }
})

// 保留原有的社团报名接口
app.post('/api/join', async (req, res) => {
  try {
    const body = req.body || {}

    // 判断是否为 LED 比赛报名：前端会传 isLed: true
    const isLed = !!body.isLed

    let sql, values

    if (isLed) {
      const {
        teamName,
        leaderName,
        leaderStudentId,
        leaderGrade,
        leaderMajorClass,
        contact,
        member1Name = '',
        member1StudentId = '',
        member2Name = '',
        member2StudentId = '',
        note = '',
        meta
      } = body

      if (!teamName || !leaderName || !leaderStudentId || !leaderGrade || !leaderMajorClass || !contact) {
        return res.status(400).json({ error: 'missing required led fields' })
      }

      const ip = req.headers['x-forwarded-for']?.toString().split(',')[0].trim() || req.socket.remoteAddress || ''
      const ua = req.headers['user-agent'] || ''

      sql = `
        INSERT INTO ${TABLE} (
          is_led, team_name, leader_name, leader_student_id, leader_grade,
          leader_major_class, member1_name, member1_student_id,
          member2_name, member2_student_id, contact, message,
          meta, ip, ua
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
        RETURNING id, created_at
      `
      values = [
        true,
        teamName,
        leaderName,
        leaderStudentId,
        leaderGrade,
        leaderMajorClass,
        member1Name,
        member1StudentId,
        member2Name,
        member2StudentId,
        contact,
        note,
        meta ? JSON.stringify(meta) : null,
        ip,
        ua
      ]
    } else {
      // 兼容旧的社团报名结构
      const { majorClass, studentId, name, stack, message = '', meta } = body
      if (!majorClass || !studentId || !name || !stack) {
        return res.status(400).json({ error: 'missing required fields' })
      }

      const ip = req.headers['x-forwarded-for']?.toString().split(',')[0].trim() || req.socket.remoteAddress || ''
      const ua = req.headers['user-agent'] || ''

      sql = `
        INSERT INTO ${TABLE} (major_class, student_id, name, stack, message, meta, ip, ua)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, created_at
      `
      values = [majorClass, studentId, name, stack, message, meta ? JSON.stringify(meta) : null, ip, ua]
    }
    const r = await db.query(sql, values)
    return res.status(201).json({ ok: true, id: r.rows[0].id, createdAt: r.rows[0].created_at })
  } catch (err) {
    console.error('insert error:', err)
    return res.status(500).json({ error: 'internal error' })
  }
})

// 未匹配
app.use((req, res) => { res.status(404).json({ error: 'not found' }) })

// 启动
initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening at http://0.0.0.0:${port}`)
    })
  })
  .catch((e) => {
    console.error('DB init failed:', e)
    process.exit(1)
  })
