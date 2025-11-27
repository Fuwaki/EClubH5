<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  name: '',
  studentId: '',
  contact: '',
  teamName: '',
  note: ''
})

const step = ref(1)
const isVisible = ref(false)

function submitForm() {
  if (!form.value.name || !form.value.contact) {
    alert('请填写必要信息')
    return
  }
  step.value = 2
}

function goBack() {
  router.push('/')
}

// 简化的返回顶部功能（移除音乐播放）
const showTop = ref(false)

function updateScroll() {
  const y = document.documentElement.scrollTop || document.body.scrollTop
  showTop.value = y > 240
}

function toTop() { 
  window.scrollTo({ top: 0, behavior: 'smooth' }) 
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  window.addEventListener('scroll', updateScroll, { passive: true })
  updateScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 font-sans overflow-hidden">
    <!-- Light Tech Background -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <!-- Subtle Grid Background -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-20 grid-rows-20 h-full w-full">
          <div v-for="i in 400" :key="i" 
               class="border border-slate-300/20 relative overflow-hidden">
            <div class="absolute inset-0 bg-slate-200/10 animate-pulse" 
                 :style="`animation-delay: ${Math.random() * 3}s; animation-duration: ${2 + Math.random() * 4}s`">
            </div>
          </div>
        </div>
      </div>
      
      <!-- Minimal Circuit Patterns -->
      <div class="absolute top-1/4 left-1/4 w-64 h-64 opacity-3">
        <svg class="w-full h-full" viewBox="0 0 200 200">
          <path d="M20,20 L180,20 L180,180 L20,180 Z" 
                stroke="url(#circuit-gradient-light)" stroke-width="1" fill="none"/>
          <circle cx="50" cy="50" r="2" fill="#0ea5e9" class="animate-pulse"/>
          <circle cx="150" cy="150" r="2" fill="#10b981" class="animate-pulse"/>
          <path d="M50,50 L100,100 L150,150" 
                stroke="url(#circuit-gradient-light)" stroke-width="0.5" fill="none"/>
          <defs>
            <linearGradient id="circuit-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0ea5e9"/>
              <stop offset="100%" stop-color="#10b981"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <!-- Soft Light Spheres -->
      <div class="absolute top-1/3 right-1/4 w-32 h-32 bg-sky-200/20 blur-[60px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/4 left-1/3 w-40 h-40 bg-emerald-200/15 blur-[80px] rounded-full animate-pulse" style="animation-delay: 2s"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 py-6 sm:py-8 max-w-6xl">
      <!-- Simplified Floating UI without music player -->
      <div class="fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 z-50">
        <button
          v-show="showTop"
          @click="toTop"
          class="relative w-12 h-12 flex items-center justify-center p-0 rounded-full bg-gradient-to-tr from-sky-400/90 to-emerald-400/90 text-white font-bold shadow-lg active:scale-95 transition border border-white/20 backdrop-blur-md"
        >
          ↑
        </button>
      </div>
      
      <!-- Header -->
      <header class="flex justify-between items-center mb-8 sm:mb-16">
        <button @click="goBack" class="group text-sky-600 hover:text-sky-700 flex items-center gap-2 transition-all duration-300 backdrop-blur-sm bg-white/80 px-4 py-2 rounded-full border border-slate-200 hover:border-sky-300 cursor-pointer shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回首页
        </button>
        <div class="text-lg sm:text-xl font-bold tracking-wider bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
          电子俱乐部·比赛专区
        </div>
      </header>

      <!-- Hero Section with LED Matrix Title -->
      <section class="mb-12 sm:mb-20 text-center relative">
        <div class="relative inline-block">
          <!-- LED Matrix Effect Behind Title -->
          <div class="absolute -inset-8 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-2xl rounded-full"></div>
          
          <h1 class="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 relative">
            <span class="block transform hover:scale-105 transition-transform duration-500 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              LED 创意大赛
            </span>
            <span class="block text-xl sm:text-2xl md:text-5xl mt-1 sm:mt-2 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              无限创意 点亮未来
            </span>
          </h1>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <p class="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-300">
            这不是普通的点亮实验！我们邀请你用最经典的51单片机，驾驭那些看似简单的LED小灯，创造出令人惊叹的光之舞蹈。
          </p>
          
          <!-- LED Strip Visual -->
          <div class="flex justify-center mb-6 sm:mb-8">
            <div class="flex gap-1 p-3 sm:p-4 bg-white/70 rounded-full border border-slate-200 backdrop-blur-sm shadow-sm">
              <div v-for="i in 12" :key="i" 
                   class="w-2 h-6 sm:w-3 sm:h-8 rounded-full animate-pulse"
                   :class="i % 3 === 0 ? 'bg-emerald-500' : i % 3 === 1 ? 'bg-cyan-500' : 'bg-blue-500'"
                   :style="`animation-delay: ${i * 0.1}s`">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Competition Highlights -->
      <section class="mb-12 sm:mb-20">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div class="group bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-sky-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-sky-200 transition-colors">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-sky-700 mb-1 sm:mb-2">技术挑战</h3>
            <p class="text-slate-600 text-sm">用51单片机创造LED艺术，展现你的编程实力</p>
          </div>
          
          <div class="group bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-amber-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-amber-700 mb-1 sm:mb-2">创意无限</h3>
            <p class="text-slate-600 text-sm">心跳呼吸、星辰流光，你的想象力是唯一的边界</p>
          </div>
          
          <div class="group bg-gradient-to-br from-violet-50 to-white border border-violet-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-violet-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-violet-200 transition-colors">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-violet-700 mb-1 sm:mb-2">丰厚奖品</h3>
            <p class="text-slate-600 text-sm">超多奖品奖状等你来拿，技术实力换真金白银</p>
          </div>
        </div>
      </section>

      <!-- Competition Details & Topics -->
      <div class="grid md:grid-cols-2 gap-8 mb-20">
        <!-- Competition Info -->
        <div class="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 backdrop-blur-md hover:border-sky-300 transition-all duration-500 shadow-sm">
          <div class="flex items-center mb-6">
            <div class="w-1 h-10 bg-gradient-to-b from-sky-500 to-emerald-500 rounded-full mr-4"></div>
            <h2 class="text-3xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              赛事详情
            </h2>
          </div>
          
          <div class="space-y-6">
            <div class="relative pl-6 border-l-2 border-emerald-500/30">
              <div class="absolute -left-2 top-2 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <p class="text-slate-600 leading-relaxed">无论是心跳般的呼吸闪烁，还是星辰般的随机流光，你的想象力是唯一的边界。</p>
            </div>
            
            <div class="relative pl-6 border-l-2 border-cyan-500/30">
              <div class="absolute -left-2 top-2 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
              <p class="text-slate-600 leading-relaxed">按下电源键，让代码在灯光中流淌。这不仅是技术比拼，更是一场关于光与美的创作盛宴。</p>
            </div>
            
            <div class="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 border border-sky-200 mt-6">
              <p class="text-sky-800 font-semibold text-lg mb-2">期待你用51单片机，写出最动人的光影诗篇！</p>
              <p class="text-sm text-sky-700">本次比赛赛制简单，有多大想象力就拿多大奖，我们已经准备好超多奖品奖状等你来拿!</p>
            </div>
          </div>
        </div>

        <!-- Topics -->
        <div class="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 backdrop-blur-md hover:border-emerald-300 transition-all duration-500 shadow-sm">
          <div class="flex items-center mb-6">
            <div class="w-1 h-10 bg-gradient-to-b from-emerald-500 to-sky-500 rounded-full mr-4"></div>
            <h2 class="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              赛题专栏
            </h2>
          </div>
          
          <div class="space-y-6">
            <div class="group/item bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl p-5 border border-emerald-200 hover:border-emerald-300 transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="bg-gradient-to-br from-emerald-500 to-sky-500 text-white px-3 py-1 rounded-lg font-mono text-sm font-bold">
                  TOPIC 01
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-slate-800 text-lg mb-2">自由创意</h3>
                  <p class="text-slate-600 text-sm leading-relaxed">不限形式，不限逻辑，只要是用51单片机控制LED即可。让你的创意在光影中绽放！</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-5 border border-slate-300 opacity-60">
              <div class="flex items-start gap-4">
                <div class="bg-slate-400 text-slate-600 px-3 py-1 rounded-lg font-mono text-sm font-bold">
                  TOPIC 02
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-slate-500 text-lg mb-2">敬请期待</h3>
                  <p class="text-slate-400 text-sm leading-relaxed">更多赛题即将解锁，关注我们的最新动态...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Gallery Section -->
      <section class="mb-12 sm:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
          往届精彩瞬间
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <!-- Mobile scroll hint -->
          <div class="sm:hidden text-center mb-4">
            <p class="text-slate-500 text-sm flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
              </svg>
              左右滑动查看更多图片
            </p>
          </div>
          <div class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-sky-300 transition-all duration-300 shadow-sm">
            <div class="aspect-video bg-gradient-to-br from-sky-50 to-slate-50 flex items-center justify-center overflow-hidden">
              <img 
                src="/led1.jpg" 
                alt="LED创意作品展示" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              >
              <div class="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 right-4">
                <p class="text-white font-semibold">LED创意作品展示</p>
                <p class="text-slate-300 text-sm">参赛者们的精彩创意</p>
              </div>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 transition-all duration-300 shadow-sm">
            <div class="aspect-video bg-gradient-to-br from-emerald-50 to-slate-50 flex items-center justify-center overflow-hidden">
              <img 
                src="/led2.jpg" 
                alt="作品制作过程" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              >
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 right-4">
                <p class="text-white font-semibold">技术制作过程</p>
                <p class="text-slate-300 text-sm">从代码到实物的蜕变</p>
              </div>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-violet-300 transition-all duration-300 shadow-sm">
            <div class="aspect-video bg-gradient-to-br from-violet-50 to-slate-50 flex items-center justify-center overflow-hidden">
              <img 
                src="/led3.jpg" 
                alt="获奖作品展示" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              >
              <div class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 right-4">
                <p class="text-white font-semibold">获奖作品</p>
                <p class="text-slate-300 text-sm">最具创意奖作品</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Registration Section -->
      <section class="mb-12 sm:mb-16" id="register">
        <div class="bg-gradient-to-br from-white via-slate-50 to-sky-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-lg">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-3">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, #0ea5e9 1px, transparent 1px), radial-gradient(circle at 75% 75%, #10b981 1px, transparent 1px); background-size: 40px 40px;"></div>
          </div>
          
          <div class="relative z-10">
            <div class="text-center mb-6 sm:mb-10">
              <h2 class="text-2xl sm:text-4xl font-bold text-slate-800 mb-2 sm:mb-4">立即报名</h2>
              <p class="text-slate-600 text-sm sm:text-base">加入这场光影与代码的盛宴</p>
            </div>

            <div v-if="step === 1" class="max-w-lg mx-auto space-y-4 sm:space-y-6">
              <div class="space-y-3 sm:space-y-4">
                <div class="space-y-1 sm:space-y-2">
                  <label class="text-sm text-sky-700 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                    姓名
                  </label>
                  <input v-model="form.name" type="text" class="w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg placeholder-slate-400" placeholder="请输入你的姓名">
                </div>
                
                <div class="space-y-2">
                  <label class="text-sm text-sky-700 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full animate-pulse" style="animation-delay: 0.2s"></span>
                    学号
                  </label>
                  <input v-model="form.studentId" type="text" class="w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg placeholder-slate-400" placeholder="请输入你的学号">
                </div>
                
                <div class="space-y-2">
                  <label class="text-sm text-sky-700 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full animate-pulse" style="animation-delay: 0.4s"></span>
                    联系方式 (QQ/微信/手机)
                  </label>
                  <input v-model="form.contact" type="text" class="w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg placeholder-slate-400" placeholder="方便我们联系你">
                </div>
                
                <div class="space-y-2">
                  <label class="text-sm text-sky-700 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full animate-pulse" style="animation-delay: 0.6s"></span>
                    备注 (选填)
                  </label>
                  <textarea v-model="form.note" class="w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm h-20 sm:h-24 resize-none text-base sm:text-lg placeholder-slate-400" placeholder="有什么想说的..."></textarea>
                </div>
              </div>
              
              <button @click="submitForm" class="w-full bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-500 active:from-sky-400 active:via-blue-400 active:to-emerald-400 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-lg shadow-sky-500/20 transform transition-all duration-300 active:scale-[0.98] cursor-pointer relative overflow-hidden group touch-manipulation">
                <span class="relative z-10">下一步：支付报名费</span>
                <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-opacity duration-300"></div>
              </button>
            </div>

            <div v-else class="text-center max-w-md mx-auto animate-fade-in">
              <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-slate-200">
                <!-- QR Code Placeholder -->
                <div class="w-56 h-56 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-slate-600 text-sm mx-auto border-4 border-white/70 shadow-xl">
                  <div class="text-center">
                    <svg class="w-16 h-16 mx-auto mb-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                    </svg>
                    <p>收款二维码</p>
                  </div>
                </div>
              </div>
              
              <p class="text-xl font-bold text-slate-800 mb-4">请扫描上方二维码支付</p>
              <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 mb-6 border border-amber-200">
                <p class="text-base text-amber-700 mb-2">
                  <span class="inline-block w-6 h-6 bg-amber-500 rounded-full text-white font-bold mr-2 text-center">⚠</span>
                  重要提醒
                </p>
                <p class="text-sm text-amber-600">
                  支付时请务必在<span class="font-bold text-slate-800 underline mx-1">备注</span>中填写你的<span class="font-bold text-slate-800 mx-1">姓名+学号</span>，否则无法确认报名！
                </p>
              </div>
              
              <button @click="step = 1" class="group text-slate-500 hover:text-sky-600 text-sm underline cursor-pointer transition-colors">
                <span class="flex items-center gap-2">
                  <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                  </svg>
                  返回修改信息
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Floating Light Particles -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div v-for="i in 15" :key="i" 
             class="absolute w-1 h-1 rounded-full animate-ping opacity-30"
             :class="Math.random() > 0.5 ? 'bg-sky-400' : 'bg-emerald-400'"
             :style="`
               left: ${Math.random() * 100}%;
               top: ${Math.random() * 100}%;
               animation-delay: ${Math.random() * 5}s;
               animation-duration: ${4 + Math.random() * 6}s;
             `">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* LED Grid Layout */
.grid-cols-20 {
  grid-template-columns: repeat(20, minmax(0, 1fr));
}
.grid-rows-20 {
  grid-template-rows: repeat(20, minmax(0, 1fr));
}

/* Image hover effects */
.group:hover img {
  transform: scale(1.05);
}

/* Mobile touch optimizations */
@media (max-width: 768px) {
  /* Prevent text selection on interactive elements */
  button, input, textarea, select {
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  /* Ensure proper touch targets */
  button {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Improve scrolling performance */
  .overflow-hidden {
    -webkit-overflow-scrolling: touch;
  }
  
  /* Prevent double-tap zoom on iOS */
  input, textarea, button {
    touch-action: manipulation;
  }
}

/* WeChat H5 specific optimizations */
@media screen and (max-width: 768px) {
  /* Prevent bounce scroll in WeChat */
  body {
    overscroll-behavior: contain;
  }
  
  /* Optimize for one-hand operation */
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  /* WeChat specific: ensure proper font rendering */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* WeChat: prevent long press menu on images */
  img {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
  
  /* WeChat: better button feedback */
  button:active {
    transform: scale(0.98);
    opacity: 0.8;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #0ea5e9, #10b981);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #0284c7, #059669);
}
</style>