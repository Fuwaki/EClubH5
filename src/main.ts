import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// IntersectionObserver 复用
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target as HTMLElement
      el.classList.add('reveal-in')
      // 只执行一次
      io.unobserve(el)
    }
  })
}, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' })

app.directive('reveal', {
  mounted(el: HTMLElement, binding) {
    // 初始类
    el.classList.add('reveal-init', 'reveal-anim')
    // 变体 e.g. v-reveal:"up" 或 :reveal="{delay:100, variant:'left'}"
    const opt = (typeof binding.value === 'object' && binding.value) ? binding.value : {}
    const variant = binding.arg || opt.variant
    if (variant) el.classList.add('reveal-' + variant)
    const delay = opt.delay || 0
    if (delay) el.style.transitionDelay = delay + 'ms'
    // 观察
    io.observe(el)
  }
})

// 3D 轻微倾斜指令 v-tilt（桌面端）
app.directive('tilt', {
  mounted(el: HTMLElement, binding) {
    const ua = navigator.userAgent
    const isTouch = /Mobi|Android|iPhone|iPad|iPod|Phone/i.test(ua)
    if (isTouch) return // 移动端禁用

    const opt = (typeof binding.value === 'object' && binding.value) ? binding.value : {}
    const max = Number(opt.max || binding.value || 10) // 最大倾斜角度
    const scale = Number(opt.scale || 1.02)
    const perspective = Number(opt.perspective || 800)

    let frame = 0
    let entered = false

    const onEnter = () => {
      entered = true
      el.style.willChange = 'transform'
      el.style.transition = 'transform 180ms ease'
      el.classList.add('tilt-active')
    }

    const onLeave = () => {
      entered = false
      cancelAnimationFrame(frame)
      el.style.transform = `perspective(${perspective}px)`
      el.style.transition = 'transform 220ms cubic-bezier(.2,.6,.2,1)'
      el.classList.remove('tilt-active')
    }

    const onMove = (ev: MouseEvent) => {
      if (!entered) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (ev.clientX - cx) / (rect.width / 2)
        const dy = (ev.clientY - cy) / (rect.height / 2)
        const rx = (-dy * max).toFixed(2)
        const ry = (dx * max).toFixed(2)
        el.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`
      })
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    ;(el as any).__tiltCleanup = () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  },
  unmounted(el: HTMLElement) {
    ;(el as any).__tiltCleanup?.()
  }
})

app.mount('#app');

// 移动端背景音乐：仅创建与暴露，不主动播放，避免打扰
;(function setupMobileBGM() {
  const ua = navigator.userAgent
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Phone/i.test(ua)
  if (!isMobile) return
  const src = import.meta.env.BASE_URL + 'bgm.m4a'
  const audio = new Audio(src)
  ;(window as any).__bgm = audio
  audio.loop = true
  audio.preload = 'auto'
})()

// 滚动进度条
;(function setupScrollProgress(){
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  const bar = document.createElement('div')
  bar.className = 'scroll-progress'
  const inner = document.createElement('div')
  inner.className = 'scroll-progress__bar'
  bar.appendChild(inner)
  document.body.appendChild(bar)

  let raf: number | null = null
  const update = () => {
    raf = null
    const doc = document.documentElement
    const body = document.body
    const scrollTop = doc.scrollTop || body.scrollTop
    const max = (doc.scrollHeight || body.scrollHeight) - doc.clientHeight
    const p = max > 0 ? Math.min(1, scrollTop / max) : 0
    inner.style.transform = `scaleX(${p})`
  }
  const onScroll = () => {
    if (raf != null) return
    raf = requestAnimationFrame(update)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  update()
})()

console.log("咦 竟然是个会看终端的聪明宝宝")
console.log("那我在这里加点私货应该也没事吧QwQ")
console.log(`
       　  　▃▆█▇▄▖
　 　 　 ▟◤▖　　　◥█▎
  　 ◢◤　 ▐　　　 　▐▉
　 ▗◤　　　▂　▗▖　　▕█▎
　◤　▗▅▖◥▄　▀◣　　█▊
▐　▕▎◥▖◣◤　　　　◢██
█◣　◥▅█▀　　　　▐██◤
▐█▙▂　　     　◢██◤
◥██◣　　　　◢▄◤
 　　▀██▅▇▀
`);
