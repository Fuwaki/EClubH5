// @ts-nocheck
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 本地 & preview 轻量代理：/api/join -> 简道云，避免浏览器跨域
const JDY_TOKEN = 't3DuFme3k7seb68u3Jf8GCLAUOTlOEvZ'
const UPSTREAM = 'https://api.jiandaoyun.com/api/v5/app/entry/data/create'

function createHandler() {
  return async (req, res, next) => {
    if (!req.url || !req.url.startsWith('/api/join')) return next()
    if (req.method !== 'POST') { res.statusCode = 405; res.end('Method Not Allowed'); return }
    try {
      let raw = ''
      req.on('data', c => raw += c)
      req.on('end', async () => {
        try {
          const r = await fetch(UPSTREAM, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${JDY_TOKEN}` },
            body: raw
          })
          const txt = await r.text()
          res.statusCode = r.status
            ;['content-type'].forEach(h => { const v = r.headers.get(h); if (v) res.setHeader(h, v) })
          res.setHeader('Cache-Control', 'no-store')
          res.end(txt)
        } catch (e) {
          res.statusCode = 500
          res.end(JSON.stringify({ error: 'upstream error', detail: String(e) }))
        }
      })
    } catch (e) {
      res.statusCode = 500
      res.end(JSON.stringify({ error: 'proxy error', detail: String(e) }))
    }
  }
}

function joinProxyPlugin() {
  return {
    name: 'local-join-proxy',
    configureServer(server) { server.middlewares.use(createHandler()) },
    configurePreviewServer(server) { server.middlewares.use(createHandler()) }
  }
}

export default defineConfig({
  plugins: [vue(), joinProxyPlugin()],
  server: { allowedHosts: ['117df81b.r35.cpolar.top'] }
})
