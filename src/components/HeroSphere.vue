<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const wrapRef = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let points: THREE.Points | null = null
let lines: THREE.LineSegments | null = null
let group: THREE.Group | null = null
let raf = 0
let intersecting = true
// 指针视差交互（桌面端）
let targetRX = 0, targetRY = 0
let onPointerMove: ((e: PointerEvent) => void) | null = null

// 移除复杂贴图，使用简单实心粒子

function setupScene(width: number, height: number) {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(55, width/height, 0.1, 100)
  camera.position.z = 28 // 稍微后退适应更大球体

  const pr = Math.min(2, window.devicePixelRatio || 1)
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
  renderer.setPixelRatio(pr)
  renderer.setSize(width, height)
  renderer.setClearColor(0x000000, 0)

  const el = wrapRef.value!
  el.innerHTML = ''
  el.appendChild(renderer.domElement)

  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Phone/i.test(navigator.userAgent)
  const count = isMobile ? 300 : 450 // 减少粒子数量，让每个小球更明显
  
  // 桌面端调整相机位置，以适应更小的球体
  if (!isMobile) {
    camera.position.z = 26
  }

  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const gld = (1 + Math.sqrt(5)) / 2
  // 调整到合适的球体大小
  const radius = isMobile ? 21.5 : 14.5
  const tmp = new THREE.Color()
  const pointsArray: THREE.Vector3[] = []
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1)
    const theta = 2 * Math.PI * i / gld
    const y = 1 - 2 * t
    const r = Math.sqrt(1 - y*y)
    const x = Math.cos(theta) * r
    const z = Math.sin(theta) * r
    const px = x * radius
    const py = y * radius
    const pz = z * radius
    positions[i*3]   = px
    positions[i*3+1] = py
    positions[i*3+2] = pz
    pointsArray.push(new THREE.Vector3(px, py, pz))
    // 更鲜艳的渐变色，增加亮度突显小球效果
    tmp.setHSL(0.47 + 0.12*y, 0.95, 0.72)
    colors[i*3]   = tmp.r
    colors[i*3+1] = tmp.g
    colors[i*3+2] = tmp.b
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  // 创建一个圆形纹理
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (ctx) {
    const size = 64
    canvas.width = size
    canvas.height = size
    ctx.beginPath()
    ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2)
    ctx.fillStyle = 'white'
    ctx.fill()
  }
  const circleTexture = new THREE.CanvasTexture(canvas)

  const mat = new THREE.PointsMaterial({
    size: isMobile ? 1.3 : 0.4, // 手机端维持，桌面端稍微增大一点以显示圆形效果
    sizeAttenuation: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending, // 发光混合
    opacity: 0.85,
    vertexColors: true,
    map: circleTexture // 使用圆形纹理
  })

  points = new THREE.Points(geo, mat)
  group = new THREE.Group()
  group.add(points)
  // 调整位置：手机端不要过于居中，避免满屏
  if (isMobile) {
    group.position.set(-radius * 0.6, radius * 0.45, 0)
  } else {
    group.position.set(-radius * 0.8, radius * 0.6, 0)
  }

  // 连线参数 - 增强震撼感
  const linePositions: number[] = []
  const lineColors: number[] = []
  const maxDistance = radius * 0.3 // 稍微减少连线范围，让小球更突出
  const maxDegree = 5 // 减少每个点的连线数量，让小球更突出
  const degree = new Array(pointsArray.length).fill(0)
  for (let i = 0; i < pointsArray.length; i++) {
    for (let j = i + 1; j < pointsArray.length; j++) {
      if (degree[i] >= maxDegree || degree[j] >= maxDegree) continue
      const dist = pointsArray[i].distanceTo(pointsArray[j])
      if (dist < maxDistance && Math.random() < 0.5) {
        linePositions.push(
          pointsArray[i].x, pointsArray[i].y, pointsArray[i].z,
          pointsArray[j].x, pointsArray[j].y, pointsArray[j].z
        )
        lineColors.push(0.15, 0.85, 0.95, 0.15, 0.85, 0.95) // 更亮的青色
        degree[i]++; degree[j]++
      }
    }
  }
  if (linePositions.length > 0) {
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3))
    const lineMat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.12, vertexColors: true, blending: THREE.AdditiveBlending })
    lines = new THREE.LineSegments(lineGeo, lineMat)
    group.add(lines)
  }

  scene.add(group)
  const amb = new THREE.AmbientLight(0xffffff, 0.2)
  scene.add(amb)

  // 桌面端视差更轻
  if (!isMobile) {
    const k = 0.06
    onPointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      targetRY = nx * k
      targetRX = -ny * k * 0.4
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
  }
}

function loop() {
  if (!renderer || !scene || !camera || !group) return
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduceMotion) {
    group.rotation.y += 0.0009 // 稍微快一点的旋转
    if (onPointerMove) {
      group.rotation.x += (targetRX - group.rotation.x) * 0.04
      group.rotation.y += (targetRY - group.rotation.y) * 0.04
    }
  }
  renderer.render(scene, camera)
  if (intersecting) raf = requestAnimationFrame(loop)
}

function resize() {
  if (!renderer || !camera || !wrapRef.value) return
  const rect = wrapRef.value.getBoundingClientRect()
  const w = Math.max(1, Math.floor(rect.width))
  const h = Math.max(1, Math.floor(rect.height))
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

onMounted(() => {
  const el = wrapRef.value!
  const rect = el.getBoundingClientRect()
  setupScene(rect.width, rect.height)

  const io = new IntersectionObserver((ents) => {
    intersecting = ents[0]?.isIntersecting ?? true
    if (intersecting) { cancelAnimationFrame(raf); raf = requestAnimationFrame(loop) }
    else { cancelAnimationFrame(raf) }
  }, { threshold: 0.1 })
  io.observe(el)
  ;(el as any).__io = io

  const ro = new ResizeObserver(() => resize())
  ro.observe(el)
  ;(el as any).__ro = ro

  raf = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  if (onPointerMove) window.removeEventListener('pointermove', onPointerMove)
  cancelAnimationFrame(raf)
  const el = wrapRef.value
  const io = (el as any)?.__io as IntersectionObserver | undefined
  io?.disconnect()
  const ro = (el as any)?.__ro as ResizeObserver | undefined
  ro?.disconnect()

  if (points) {
    (points.geometry as THREE.BufferGeometry).dispose()
    ;(points.material as THREE.PointsMaterial).dispose()
  }
  if (lines) {
    (lines.geometry as THREE.BufferGeometry).dispose()
    ;(lines.material as THREE.LineBasicMaterial).dispose()
  }
  renderer?.dispose()
  scene = null
  camera = null
  points = null
  lines = null
  group = null
  renderer = null
})
</script>

<template>
  <div ref="wrapRef" class="absolute left-[-10vw] top-[-8vw] w-[95vw] aspect-square md:left-[-8vw] md:top-[-5vw] md:w-[95vw] md:aspect-square pointer-events-none select-none opacity-50 z-10"></div>
</template>

<style scoped>
</style>
