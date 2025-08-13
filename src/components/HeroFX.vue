<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const cRef = ref<HTMLCanvasElement|null>(null)
let ctx: CanvasRenderingContext2D | null = null
let w = 0, h = 0, dpr = Math.min(2, window.devicePixelRatio || 1)
let raf = 0
let t = 0

// 低开销“线框网格波”+“粒子星屑”效果，移动端友好
function resize(){
  const c = cRef.value!
  const rect = c.getBoundingClientRect()
  w = Math.max(1, Math.floor(rect.width))
  h = Math.max(1, Math.floor(rect.height))
  dpr = Math.min(2, window.devicePixelRatio || 1)
  c.width = Math.floor(w * dpr)
  c.height = Math.floor(h * dpr)
  ctx = c.getContext('2d')
  ctx?.setTransform(dpr,0,0,dpr,0,0)
}

function waveY(x: number, y: number){
  // 简单双正弦干涉，时间 t 推动
  return Math.sin(x*0.08 + t*0.9) * 6 + Math.cos(y*0.06 + t*0.6) * 4
}

function draw(){
  if (!ctx) return
  t += 0.016
  ctx.clearRect(0,0,w,h)

  // 背景渐变
  const g = ctx.createLinearGradient(0,0,0,h)
  g.addColorStop(0, 'rgba(16,185,129,0.10)')
  g.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = g
  ctx.fillRect(0,0,w,h)

  // 线框网格（步长较大，降低像素填充）
  ctx.strokeStyle = 'rgba(34,211,238,0.18)'
  ctx.lineWidth = 1
  const step = Math.max(18, Math.floor(w/22))
  for (let y = Math.floor(h*0.35); y < h; y += step) {
    ctx.beginPath()
    for (let x = 0; x <= w; x += step) {
      const yy = y + waveY(x,y)
      if (x===0) ctx.moveTo(x, yy)
      else ctx.lineTo(x, yy)
    }
    ctx.stroke()
  }

  // 星屑（稀疏、低透明度）
  const starCount = Math.floor(w*h / 48000)
  for (let i=0;i<starCount;i++){
    const x = (i*73 + (t*60)%w) % w
    const y = 30 + (i*97 % Math.floor(h*0.5))
    ctx.fillStyle = 'rgba(255,255,255,0.15)'
    ctx.fillRect(x, y, 1, 1)
  }

  raf = requestAnimationFrame(draw)
}

onMounted(()=>{
  resize()
  const ro = new ResizeObserver(()=>resize())
  ro.observe(cRef.value!)
  ;(cRef.value as any).__ro = ro
  raf = requestAnimationFrame(draw)
})

onBeforeUnmount(()=>{
  cancelAnimationFrame(raf)
  const ro = (cRef.value as any)?.__ro as ResizeObserver | undefined
  ro?.disconnect()
})
</script>

<template>
  <div class="absolute inset-0 pointer-events-none select-none">
    <canvas ref="cRef" class="w-full h-full"></canvas>
  </div>
</template>

<style scoped>
</style>
