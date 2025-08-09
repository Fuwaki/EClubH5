'use strict'
// Express 版本服务：本地或云主机运行：node scf_index.js
const express = require('express')
const fetch = global.fetch // Node 18+ 自带
const app = express()
const port = process.env.PORT || 9000

// ===== 配置 =====
const JDY_TOKEN = 't3DuFme3k7seb68u3Jf8GCLAUOTlOEvZ'
const UPSTREAM = 'https://api.jiandaoyun.com/api/v5/app/entry/data/create'
const MAX_LEN = 50 * 1024
const TIMEOUT_MS = 8000
const ALLOWED_ORIGINS = [
  'https://eclub.fuwaki.xyz',
  'https://e-club-h5.vercel.app'
]

// CORS + 预检
app.use((req, res, next) => {
  const origin = req.headers.origin
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Vary', 'Origin')
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Max-Age', '600')
  if (req.method === 'OPTIONS') return res.status(204).end()
  next()
})

app.use(express.json({ limit: MAX_LEN }))

app.get('/', (req, res) => { res.send('OK') })
app.get('/health', (req, res) => { res.json({ ok: true, ts: Date.now() }) })

app.post('/api/join', async (req, res) => {
  try {
    const data = req.body
    if (!data || typeof data !== 'object') {
      return res.status(400).json({ error: 'invalid json' })
    }
    if (data.data && typeof data.data === 'object' && !data.data._server_ts) {
      data.data._server_ts = { value: Date.now() }
    }
    const jsonStr = JSON.stringify(data)
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
    let upstream
    try {
      upstream = await fetch(UPSTREAM, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${JDY_TOKEN}` },
        body: jsonStr,
        signal: ctrl.signal
      })
    } catch (e) {
      clearTimeout(timer)
      return res.status(502).json({ error: 'upstream request failed', detail: String(e && e.message || e) })
    }
    clearTimeout(timer)
    const text = await upstream.text()
    res.status(upstream.status)
      .set({ 'Content-Type': upstream.headers.get('content-type') || 'application/json; charset=utf-8', 'Cache-Control': 'no-store' })
      .send(text)
  } catch (err) {
    res.status(500).json({ error: 'internal error', detail: String(err && err.message || err) })
  }
})

// 未匹配
app.use((req, res) => { res.status(404).json({ error: 'not found' }) })

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})
