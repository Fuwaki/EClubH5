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

app.mount('#app');

// 手机端自动播放背景音乐（放置于 public/bgm.mp3）
// 注意：若首次播放被浏览器策略拦截，会在首次触摸或点击后再尝试播放
(function setupMobileBGM() {
  const ua = navigator.userAgent
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Phone/i.test(ua)
  if (!isMobile) return
  const src = import.meta.env.BASE_URL + 'bgm.m4a'
  const audio = new Audio(src)
  audio.loop = true
  audio.preload = 'auto'
  // 若需要静音再淡入，可先 audio.volume = 0 再渐变
  const tryPlay = () => {
    audio.play().catch(() => {
      // 失败则等待一次用户交互解锁音频
      const unlock = () => {
        audio.play().catch(() => {/* still blocked */})
      }
      window.addEventListener('touchstart', unlock, { once: true, passive: true })
      window.addEventListener('click', unlock, { once: true })
    })
  }
  // 部分浏览器需要稍等渲染
  setTimeout(tryPlay, 120)
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
