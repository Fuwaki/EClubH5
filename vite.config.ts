// @ts-nocheck
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginImageTools from 'vite-plugin-image-tools'
// 可选：开发时把 /api 代理到你独立部署的后端
// 配置示例：在 .env.development 中设置 VITE_DEV_API=http://localhost:9000
const DEV_API = process.env.VITE_DEV_API

function proxyToBackend() {
  return async (req, res, next) => {
    if (!DEV_API) return next()
    if (!req.url || !req.url.startsWith('/api/')) return next()
    const url = DEV_API.replace(/\/$/, '') + req.url
    try {
      const r = await fetch(url, {
        method: req.method,
        headers: { 'Content-Type': req.headers['content-type'] || 'application/json' },
        body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined
      })
      const txt = await r.text()
      res.statusCode = r.status
        ;['content-type', 'cache-control'].forEach(h => { const v = r.headers.get(h); if (v) res.setHeader(h, v) })
      res.end(txt)
    } catch (e) {
      res.statusCode = 502
      res.end(JSON.stringify({ error: 'dev proxy failed', detail: String(e) }))
    }
  }
}

function devProxyPlugin() {
  return {
    name: 'dev-backend-proxy',
    configureServer(server) { server.middlewares.use(proxyToBackend()) },
    configurePreviewServer(server) { server.middlewares.use(proxyToBackend()) }
  }
}

export default defineConfig({
  // base: '/EClubH5/',
  plugins: [vue(), devProxyPlugin(), VitePluginImageTools({
    quality: 10,
    enableWebp: true,
    enableDev: true,
    enableDevWebp: true,
    include: /\.jpg$/i,
  })],
  server: { allowedHosts: ['72901681.r35.cpolar.top'] }
})
