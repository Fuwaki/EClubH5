<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, watchEffect } from 'vue'

const props = defineProps<{
  active: boolean
  burstKey: number
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
let rafId = 0
let ctx: CanvasRenderingContext2D | null = null
let width = 0
let height = 0
let dpr = Math.min(window.devicePixelRatio || 1, 2)
let running = false

// 背景缓慢粒子
type Dot = { x: number; y: number; vx: number; vy: number; r: number; hue: number; alpha: number }
let dots: Dot[] = []
const DOT_COUNT_BASE = 24

// 瞬时爆裂粒子
type Burst = { x: number; y: number; vx: number; vy: number; r: number; hue: number; life: number; maxLife: number }
let bursts: Burst[] = []

function rnd(min: number, max: number) { return Math.random() * (max - min) + min }

function resize() {
  const c = canvasRef.value!
  const rect = c.getBoundingClientRect()
  width = Math.floor(rect.width)
  height = Math.floor(rect.height)
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  c.width = Math.max(1, Math.floor(width * dpr))
  c.height = Math.max(1, Math.floor(height * dpr))
  ctx = c.getContext('2d')
  if (!ctx) return
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function initDots() {
  const count = Math.floor(DOT_COUNT_BASE * Math.min(1.5, Math.max(0.8, width * height / (390 * 780))))
  dots = Array.from({ length: count }, () => ({
    x: rnd(0, width),
    y: rnd(0, height),
    vx: rnd(-0.12, 0.12),
    vy: rnd(-0.12, 0.12),
    r: rnd(0.6, 1.8),
    hue: rnd(150, 210), // 绿-青色域
    alpha: rnd(0.25, 0.6)
  }))
}

function spawnBurst() {
  const cx = width / 2
  const cy = Math.min(height * 0.45, height - 80)
  const n = 90
  bursts.push(
    ...Array.from({ length: n }, () => {
      const angle = rnd(0, Math.PI * 2)
      const speed = rnd(0.6, 2.2)
      return {
        x: cx + rnd(-10, 10),
        y: cy + rnd(-10, 10),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - rnd(0.2, 0.6),
        r: rnd(1.2, 2.6),
        hue: rnd(140, 220), // 绿到青偏向，含少量蓝紫
        life: 0,
        maxLife: rnd(42, 70)
      } as Burst
    })
  )
}

function drawBackgroundGlow() {
  if (!ctx) return
  const grd = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height) * 0.7)
  grd.addColorStop(0, 'rgba(16,255,192,0.04)')
  grd.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = grd
  ctx.fillRect(0, 0, width, height)
}

function loop() {
  if (!ctx) return
  // 清屏，保留微弱拖影
  ctx.fillStyle = 'rgba(0,0,0,0.35)'
  ctx.fillRect(0, 0, width, height)

  // 背景光
  drawBackgroundGlow()

  // 背景点
  for (const d of dots) {
    d.x += d.vx
    d.y += d.vy
    if (d.x < -10) d.x = width + 10
    if (d.x > width + 10) d.x = -10
    if (d.y < -10) d.y = height + 10
    if (d.y > height + 10) d.y = -10

    ctx.beginPath()
    ctx.fillStyle = `hsla(${d.hue}, 80%, 70%, ${d.alpha})`
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
    ctx.fill()
  }

  // 爆裂粒子
  for (let i = bursts.length - 1; i >= 0; i--) {
    const b = bursts[i]
    b.life += 1
    b.x += b.vx
    b.y += b.vy
    b.vy += 0.02 // 重力
    const fade = 1 - b.life / b.maxLife

    ctx.beginPath()
    ctx.fillStyle = `hsla(${b.hue}, 90%, 70%, ${Math.max(0, fade)})`
    ctx.arc(b.x, b.y, b.r * (0.8 + 0.4 * fade), 0, Math.PI * 2)
    ctx.fill()

    if (b.life >= b.maxLife) {
      bursts.splice(i, 1)
    }
  }

  if (running) rafId = requestAnimationFrame(loop)
}

function start() {
  if (running) return
  running = true
  resize()
  initDots()
  ctx?.clearRect(0, 0, width, height)
  rafId = requestAnimationFrame(loop)
}

function stop() {
  running = false
  cancelAnimationFrame(rafId)
}

onMounted(() => {
  const onResize = () => { resize(); initDots() }
  window.addEventListener('resize', onResize)
  // 自动根据 active 启停
  watchEffect(() => {
    if (props.active) start()
    else stop()
  })
  watch(() => props.burstKey, () => {
    if (props.active) {
      // 清掉旧爆裂并触发新一轮
      bursts.splice(0, bursts.length)
      spawnBurst()
    }
  })
})

onBeforeUnmount(() => {
  stop()
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none select-none"></canvas>
</template>

<style scoped>
</style>
