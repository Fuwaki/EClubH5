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

app.mount('#app')

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
