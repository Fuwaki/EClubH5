<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  teamName: '',
  leaderName: '',
  leaderStudentId: '',
  leaderGrade: '',
  leaderMajorClass: '',
  contact: '',
  note: '',
  members: [] as { name: string; studentId: string; grade: string; majorClass: string }[]
})

const step = ref(1)
const isVisible = ref(false)
const isSubmitting = ref(false)
const isSuccess = ref(false)
const submitError = ref('')

const errors = ref({
  teamName: '',
  leaderName: '',
  leaderStudentId: '',
  leaderGrade: '',
  leaderMajorClass: '',
  contact: '',
  members: [] as { name: string; studentId: string; grade: string; majorClass: string }[]
})

function submitForm() {
  // 重置错误信息
  errors.value = {
    teamName: '',
    leaderName: '',
    leaderStudentId: '',
    leaderGrade: '',
    leaderMajorClass: '',
    contact: '',
    members: form.value.members.map(() => ({ name: '', studentId: '', grade: '', majorClass: '' }))
  }

  let hasError = false

  if (!form.value.teamName) {
    errors.value.teamName = '请输入队伍名称'
    hasError = true
  }
  if (!form.value.leaderName) {
    errors.value.leaderName = '请输入队长姓名'
    hasError = true
  }

  const isNumeric = (val: string) => /^\d+$/.test(val)
  const isChineseOrNumeric = (val: string) => /^[\u4e00-\u9fa5\d\s-]+$/.test(val)

  if (!form.value.leaderStudentId) {
    errors.value.leaderStudentId = '请输入队长学号'
    hasError = true
  } else if (!isNumeric(form.value.leaderStudentId)) {
    errors.value.leaderStudentId = '队长学号必须为纯数字'
    hasError = true
  }

  if (!form.value.leaderGrade) {
    errors.value.leaderGrade = '请选择队长年级'
    hasError = true
  }

  if (!form.value.leaderMajorClass) {
    errors.value.leaderMajorClass = '请输入队长专业与班级'
    hasError = true
  } else if (!isChineseOrNumeric(form.value.leaderMajorClass)) {
    errors.value.leaderMajorClass = '专业班级应为中文、数字或 - 的组合'
    hasError = true
  }

  if (!form.value.contact) {
    errors.value.contact = '请输入联系方式'
    hasError = true
  } else if (!isNumeric(form.value.contact)) {
    errors.value.contact = '联系方式必须为纯数字'
    hasError = true
  }

  // 校验队友
  form.value.members.forEach((m, index) => {
    const filledAny = m.name || m.studentId || m.grade || m.majorClass
    const allFilled = m.name && m.studentId && m.grade && m.majorClass

    if (filledAny && !allFilled) {
      if (!m.name) errors.value.members[index].name = '请补全姓名'
      if (!m.studentId) errors.value.members[index].studentId = '请补全学号'
      if (!m.grade) errors.value.members[index].grade = '请选择年级'
      if (!m.majorClass) errors.value.members[index].majorClass = '请补全专业班级'
      hasError = true
    }

    if (allFilled) {
      if (!isNumeric(m.studentId)) {
        errors.value.members[index].studentId = '学号必须为纯数字'
        hasError = true
      }
      if (!isChineseOrNumeric(m.majorClass)) {
        errors.value.members[index].majorClass = '专业班级应为中文、数字或 - 的组合'
        hasError = true
      }
    }
  })

  if (hasError) {
    // 滚动到错误位置
    setTimeout(() => {
      const firstError = document.querySelector('.text-red-500')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
    return
  }

  // 进入支付步骤
  step.value = 2
}

async function confirmPayment() {
  if (isSubmitting.value || step.value !== 2) return

  isSubmitting.value = true
  submitError.value = ''

  try {
    // 构建提交数据
    const submitData = {
      isLed: true, // 标识为LED比赛报名
      teamName: form.value.teamName,
      leaderName: form.value.leaderName,
      leaderStudentId: form.value.leaderStudentId,
      leaderGrade: form.value.leaderGrade,
      leaderMajorClass: form.value.leaderMajorClass,
      contact: form.value.contact,
      members: form.value.members.filter(m => m.name && m.studentId), // 只提交有效的队友
      note: form.value.note || '',
      // 添加元数据
      meta: {
        timestamp: new Date().toISOString(),
        status: 'paid',
        submitFrom: 'led-competition-view'
      }
    }

    // 模拟后端上传 - 实际使用时替换为真实的API端点
    // 例如：const response = await fetch('https://your-api.com/api/led-competition/register', {
    const response = await fetch('https://eclubapi.kitramgp.cn/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitData)
    })

    if (response.ok) {
      isSuccess.value = true
      // 3秒后自动返回首页
      setTimeout(() => {
        goBack()
      }, 3000)
    } else {
      const errorData = await response.json().catch(() => ({ message: '未知错误' }))
      throw new Error(errorData.message || '提交失败')
    }
  } catch (error: any) {
    console.error('上传失败：', error)
    submitError.value = error.message || '网络错误，请稍后重试'
  } finally {
    isSubmitting.value = false
  }
}

function addMember() {
  if (form.value.members.length >= 2) return
  form.value.members.push({ name: '', studentId: '', grade: '', majorClass: '' })
  errors.value.members.push({ name: '', studentId: '', grade: '', majorClass: '' })
}

function removeMember(index: number) {
  form.value.members.splice(index, 1)
  errors.value.members.splice(index, 1)
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
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 font-sans overflow-hidden">
    <!-- Light Tech Background -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <!-- Subtle Grid Background -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-20 grid-rows-20 h-full w-full">
          <div v-for="i in 400" :key="i" class="border border-slate-300/20 relative overflow-hidden">
            <div class="absolute inset-0 bg-slate-200/10 animate-pulse"
              :style="`animation-delay: ${Math.random() * 3}s; animation-duration: ${2 + Math.random() * 4}s`">
            </div>
          </div>
        </div>
      </div>

      <!-- Minimal Circuit Patterns -->
      <div class="absolute top-1/4 left-1/4 w-64 h-64 opacity-3">
        <svg class="w-full h-full" viewBox="0 0 200 200">
          <path d="M20,20 L180,20 L180,180 L20,180 Z" stroke="url(#circuit-gradient-light)" stroke-width="1"
            fill="none" />
          <circle cx="50" cy="50" r="2" fill="#0ea5e9" class="animate-pulse" />
          <circle cx="150" cy="150" r="2" fill="#10b981" class="animate-pulse" />
          <path d="M50,50 L100,100 L150,150" stroke="url(#circuit-gradient-light)" stroke-width="0.5" fill="none" />
          <defs>
            <linearGradient id="circuit-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0ea5e9" />
              <stop offset="100%" stop-color="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Soft Light Spheres -->
      <div class="absolute top-1/3 right-1/4 w-32 h-32 bg-sky-200/20 blur-[60px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/4 left-1/3 w-40 h-40 bg-emerald-200/15 blur-[80px] rounded-full animate-pulse"
        style="animation-delay: 2s"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 py-6 sm:py-8 max-w-6xl">
      <!-- Simplified Floating UI without music player -->
      <div class="fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 z-50">
        <button v-show="showTop" @click="toTop"
          class="relative w-12 h-12 flex items-center justify-center p-0 rounded-full bg-gradient-to-tr from-sky-400/90 to-emerald-400/90 text-white font-bold shadow-lg active:scale-95 transition border border-white/20 backdrop-blur-md">
          ↑
        </button>
      </div>

      <!-- Header -->
      <header class="flex justify-between items-center mb-8 sm:mb-16">
        <button @click="goBack"
          class="group text-sky-600 hover:text-sky-700 flex items-center gap-2 transition-all duration-300 backdrop-blur-sm bg-white/80 px-4 py-2 rounded-full border border-slate-200 hover:border-sky-300 cursor-pointer shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-transform"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回首页
        </button>
        <div
          class="text-lg sm:text-xl font-bold tracking-wider bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
          电子俱乐部·比赛专区
        </div>
      </header>

      <!-- Hero Section with LED Matrix Title -->
      <section class="mb-12 sm:mb-20 text-center relative">
        <div class="relative inline-block">
          <!-- LED Matrix Effect Behind Title -->
          <div class="absolute -inset-8 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-2xl rounded-full">
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 relative">
            <span
              class="block transform hover:scale-105 transition-transform duration-500 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              LED 创意大赛
            </span>
            <span
              class="block text-xl sm:text-2xl md:text-5xl mt-1 sm:mt-2 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              技术实战 创意比拼
            </span>
          </h1>
        </div>

        <div class="max-w-3xl mx-auto">
          <p
            class="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-300">
            一场校级认证的创意盛宴，无需深厚背景。点亮你的第一个LED作品，即可轻松赢取丰厚大奖与官方荣誉。我们提供全面的赛前培训，0基础也能快速上手！
          </p>

          <!-- LED Strip Visual -->
          <div class="flex justify-center mb-6 sm:mb-8">
            <div
              class="flex gap-1 p-3 sm:p-4 bg-white/70 rounded-full border border-slate-200 backdrop-blur-sm shadow-sm">
              <div v-for="i in 12" :key="i" class="w-2 h-6 sm:w-3 sm:h-8 rounded-full animate-pulse"
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
          <div
            class="group bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-sky-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-sky-200 transition-colors">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-sky-700 mb-1 sm:mb-2">零基础友好</h3>
            <p class="text-slate-600 text-sm">无需复杂背景，我们提供“重量级”赛前培训，带你从0到1亲手实践，体验点亮LED的纯粹乐趣。</p>
          </div>

          <div
            class="group bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-amber-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-amber-700 mb-1 sm:mb-2">创意至上</h3>
            <p class="text-slate-600 text-sm">现场焊接，当场编码，让LED作品肆意闪烁。评分核心是“创意”，你的想象力是唯一限制。</p>
          </div>

          <div
            class="group bg-gradient-to-br from-violet-50 to-white border border-violet-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-violet-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-violet-200 transition-colors">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-violet-700 mb-1 sm:mb-2">校级荣誉</h3>
            <p class="text-slate-600 text-sm">校级证书为你的履历加分！更有无人机、精美水杯等重磅奖品等你赢取，满载而归。</p>
          </div>
        </div>
      </section>

      <!-- Competition Details & Topics -->
      <div class="grid md:grid-cols-2 gap-8 mb-20">
        <!-- Competition Info -->
        <div
          class="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 backdrop-blur-md hover:border-sky-300 transition-all duration-500 shadow-sm">
          <div class="flex items-center mb-6">
            <div class="w-1 h-10 bg-gradient-to-b from-sky-500 to-emerald-500 rounded-full mr-4"></div>
            <h2 class="text-3xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              比赛规则
            </h2>
          </div>

          <div class="space-y-6">
            <div class="relative pl-6 border-l-2 border-emerald-500/30">
              <div class="absolute -left-2 top-2 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <p class="text-slate-600 leading-relaxed">就像学习任何技能一样，我们从基础开始。第一部分用51单片机完成指定效果，打好扎实基础；第二部分放手创新，让想象力自由飞翔。
              </p>
            </div>

            <div class="relative pl-6 border-l-2 border-cyan-500/30">
              <div class="absolute -left-2 top-2 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"
                style="animation-delay: 0.5s"></div>
              <p class="text-slate-600 leading-relaxed">从规范要求到自由创作，每一步都是对技术的理解深化。这不仅是一场比赛，更是一次完整的学习旅程。</p>
            </div>

            <div class="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 border border-sky-200 mt-6">
              <p class="text-sky-800 font-semibold text-lg mb-2">掌握基础，勇于创新，在比赛中提升技术实力！</p>
              <p class="text-sm text-sky-700">从基础到创新，从规范到自由，完整的比赛体验。丰厚奖品等你来拿，更重要的是收获成长！</p>
            </div>
          </div>
        </div>

        <!-- Topics -->
        <div
          class="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 backdrop-blur-md hover:border-emerald-300 transition-all duration-500 shadow-sm">
          <div class="flex items-center mb-6">
            <div class="w-1 h-10 bg-gradient-to-b from-emerald-500 to-sky-500 rounded-full mr-4"></div>
            <h2 class="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              比赛内容
            </h2>
          </div>

          <div class="space-y-6">
            <div
              class="group/item bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl p-5 border border-emerald-200 hover:border-emerald-300 transition-all duration-300">
              <div class="flex items-start gap-4">
                <div
                  class="bg-gradient-to-br from-emerald-500 to-sky-500 text-white px-3 py-1 rounded-lg font-mono text-sm font-bold">
                  第一部分
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-slate-800 text-lg mb-2">公共赛题（强制要求）</h3>
                  <p class="text-slate-600 text-sm leading-relaxed mb-3">必须使用51单片机完成指定的LED效果，考验基础编程能力。</p>
                  <div class="text-xs text-emerald-700 bg-emerald-100 rounded-lg p-2">
                    <strong>要求：</strong>51单片机 + 基础LED控制电路
                  </div>
                </div>
              </div>
            </div>

            <div
              class="group/item bg-gradient-to-r from-sky-50 to-violet-50 rounded-xl p-5 border border-sky-200 hover:border-sky-300 transition-all duration-300">
              <div class="flex items-start gap-4">
                <div
                  class="bg-gradient-to-br from-sky-500 to-violet-500 text-white px-3 py-1 rounded-lg font-mono text-sm font-bold">
                  第二部分
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-slate-800 text-lg mb-2">自由发挥（创意展示）</h3>
                  <p class="text-slate-600 text-sm leading-relaxed mb-3">自由选择单片机类型和实现方式，展现技术深度和创意能力。</p>
                  <div class="text-xs text-sky-700 bg-sky-100 rounded-lg p-2">
                    <strong>选项：</strong>万能板、任意单片机、EDA设计PCB、其他创新方案
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Gallery Section -->
      <section class="mb-12 sm:mb-20">
        <h2
          class="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
          往届精彩瞬间
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div
            class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-sky-300 transition-all duration-300 shadow-sm">
            <div
              class="aspect-video bg-gradient-to-br from-sky-50 to-slate-50 flex items-center justify-center overflow-hidden">
              <img src="/led1.jpg" alt="LED创意作品展示"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy">
              <div
                class="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>

          </div>

          <div
            class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 transition-all duration-300 shadow-sm">
            <div
              class="aspect-video bg-gradient-to-br from-emerald-50 to-slate-50 flex items-center justify-center overflow-hidden">
              <img src="/led2.jpg" alt="作品制作过程"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy">
              <div
                class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>

          </div>

          <div
            class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-violet-300 transition-all duration-300 shadow-sm">
            <div
              class="aspect-video bg-gradient-to-br from-violet-50 to-slate-50 flex items-center justify-center overflow-hidden">
              <img src="/led3.jpg" alt="获奖作品展示"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy">
              <div
                class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Registration Section -->
      <section class="mb-12 sm:mb-16" id="register">
        <div
          class="bg-gradient-to-br from-white via-slate-50 to-sky-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-lg">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-3">
            <div class="absolute inset-0"
              style="background-image: radial-gradient(circle at 25% 25%, #0ea5e9 1px, transparent 1px), radial-gradient(circle at 75% 75%, #10b981 1px, transparent 1px); background-size: 40px 40px;">
            </div>
          </div>

          <div class="relative z-10">
            <div v-if="step === 1" class="text-center mb-6 sm:mb-10">
              <h2 class="text-2xl sm:text-4xl font-bold text-slate-800 mb-2 sm:mb-4">比赛队伍报名 - 步骤1/2</h2>
              <p class="text-slate-600 text-sm sm:text-base">填写队伍信息，完成后进入支付环节</p>
            </div>

            <div v-if="step === 1" class="max-w-2xl mx-auto space-y-6">
              <!-- 队伍信息 -->
              <div class="space-y-3 sm:space-y-4">
                <div class="space-y-2">
                  <label class="text-sm text-sky-700 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                    队伍名称
                  </label>
                  <input v-model="form.teamName" @input="errors.teamName = ''" type="text"
                    class="w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg placeholder-slate-400"
                    :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/50': errors.teamName }"
                    placeholder="给你们的队伍起个响亮的名字" />
                  <span v-if="errors.teamName" class="text-red-500 text-xs mt-1 block ml-1">{{ errors.teamName }}</span>
                </div>
              </div>

              <!-- 队长信息 -->
              <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div class="space-y-2">
                  <label class="text-sm text-sky-700 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full animate-pulse" style="animation-delay: 0.1s"></span>
                    队长姓名
                  </label>
                  <input v-model="form.leaderName" @input="errors.leaderName = ''" type="text"
                    class="w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm placeholder-slate-400"
                    :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/50': errors.leaderName }"
                    placeholder="请输入队长姓名" />
                  <span v-if="errors.leaderName" class="text-red-500 text-xs mt-1 block ml-1">{{ errors.leaderName
                  }}</span>
                </div>

                <div class="space-y-2">
                  <label class="text-sm text-sky-700 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full animate-pulse" style="animation-delay: 0.2s"></span>
                    队长学号
                  </label>
                  <input v-model="form.leaderStudentId" @input="errors.leaderStudentId = ''" type="text"
                    class="w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm placeholder-slate-400"
                    :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/50': errors.leaderStudentId }"
                    placeholder="请输入队长学号" />
                  <span v-if="errors.leaderStudentId" class="text-red-500 text-xs mt-1 block ml-1">{{
                    errors.leaderStudentId }}</span>
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <!-- 年级复选框组（单选效果） -->
                <div class="space-y-2">
                  <label class="text-sm text-sky-700 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full animate-pulse" style="animation-delay: 0.25s"></span>
                    队长年级
                  </label>
                  <div class="grid grid-cols-4 gap-2">
                    <button v-for="grade in ['25', '24', '23', '22']" :key="grade" type="button"
                      @click="form.leaderGrade = grade; errors.leaderGrade = ''" :class="[
                        'px-2 py-2 rounded-lg border text-sm transition active:scale-95',
                        form.leaderGrade === grade
                          ? 'bg-sky-500 text-white border-sky-500 shadow-sm'
                          : 'bg-white/80 text-slate-700 border-slate-300 hover:border-sky-400',
                        errors.leaderGrade ? 'border-red-500' : ''
                      ]">
                      {{ grade }} 级
                    </button>
                  </div>
                  <span v-if="errors.leaderGrade" class="text-red-500 text-xs mt-1 block ml-1">{{ errors.leaderGrade
                  }}</span>
                </div>

                <!-- 专业 + 班级 -->
                <div class="space-y-2">
                  <label class="text-sm text-sky-700 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full animate-pulse" style="animation-delay: 0.3s"></span>
                    队长专业与班级
                  </label>
                  <input v-model="form.leaderMajorClass" @input="errors.leaderMajorClass = ''" type="text"
                    class="w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm placeholder-slate-400"
                    :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/50': errors.leaderMajorClass }"
                    placeholder="例如：电子三班" />
                  <span v-if="errors.leaderMajorClass" class="text-red-500 text-xs mt-1 block ml-1">{{
                    errors.leaderMajorClass }}</span>
                </div>
              </div>

              <!-- 队友信息（可选，最多 2 名） -->
              <div class="space-y-4">
                <div class="flex items-center justify-between gap-2 text-sm text-slate-700">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                      style="animation-delay: 0.4s"></span>
                    队友信息（选填，最多 2 名）
                  </div>
                  <button type="button" @click="addMember"
                    class="px-3 py-1.5 rounded-full text-xs bg-emerald-500 text-white shadow-sm active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                    :disabled="form.members.length >= 2">
                    添加队友
                  </button>
                </div>

                <div class="space-y-3">
                  <div v-for="(member, idx) in form.members" :key="idx"
                    class="rounded-2xl border border-emerald-200 bg-emerald-50/60 px-4 py-3 space-y-3 relative">
                    <div class="flex items-center justify-between text-xs text-emerald-700">
                      <span>队友 {{ idx + 1 }}</span>
                      <button type="button" class="text-emerald-700/70 hover:text-emerald-900 active:scale-95"
                        @click="removeMember(idx)">
                        删除
                      </button>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-3">
                      <div class="space-y-1.5">
                        <label class="text-xs text-slate-600">姓名</label>
                        <input v-model="member.name" @input="errors.members[idx].name = ''" type="text"
                          class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 text-sm placeholder-slate-400"
                          :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/40': errors.members[idx]?.name }"
                          placeholder="队友姓名" />
                        <span v-if="errors.members[idx]?.name" class="text-red-500 text-xs mt-1 block ml-1">{{
                          errors.members[idx].name }}</span>
                      </div>
                      <div class="space-y-1.5">
                        <label class="text-xs text-slate-600">学号</label>
                        <input v-model="member.studentId" @input="errors.members[idx].studentId = ''" type="text"
                          class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 text-sm placeholder-slate-400"
                          :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/40': errors.members[idx]?.studentId }"
                          placeholder="队友学号" />
                        <span v-if="errors.members[idx]?.studentId" class="text-red-500 text-xs mt-1 block ml-1">{{
                          errors.members[idx].studentId }}</span>
                      </div>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-3">
                      <div class="space-y-1.5">
                        <label class="text-xs text-slate-600">年级</label>
                        <div class="grid grid-cols-4 gap-1.5">
                          <button v-for="grade in ['25', '24', '23', '22']" :key="grade" type="button"
                            @click="member.grade = grade; errors.members[idx].grade = ''" :class="[
                              'px-2 py-1.5 rounded-lg border text-[11px] leading-none transition active:scale-95',
                              member.grade === grade
                                ? 'bg-emerald-500 text-white border-emerald-500'
                                : 'bg-white text-slate-700 border-slate-300 hover:border-emerald-400',
                              errors.members[idx]?.grade ? 'border-red-500' : ''
                            ]">
                            {{ grade }} 级
                          </button>
                        </div>
                        <span v-if="errors.members[idx]?.grade" class="text-red-500 text-xs mt-1 block ml-1">{{
                          errors.members[idx].grade }}</span>
                      </div>
                      <div class="space-y-1.5">
                        <label class="text-xs text-slate-600">专业与班级</label>
                        <input v-model="member.majorClass" @input="errors.members[idx].majorClass = ''" type="text"
                          class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 text-sm placeholder-slate-400"
                          :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/40': errors.members[idx]?.majorClass }"
                          placeholder="例如：机器人一班" />
                        <span v-if="errors.members[idx]?.majorClass" class="text-red-500 text-xs mt-1 block ml-1">{{
                          errors.members[idx].majorClass }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 联系方式 -->
              <div class="space-y-3 sm:space-y-4">
                <div class="space-y-2">
                  <label class="text-sm text-sky-700 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 bg-sky-500 rounded-full animate-pulse" style="animation-delay: 0.45s"></span>
                    联系方式（队长 QQ / 微信 / 手机）
                  </label>
                  <input v-model="form.contact" @input="errors.contact = ''" type="text"
                    class="w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg placeholder-slate-400"
                    :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/50': errors.contact }"
                    placeholder="方便我们与队长取得联系" />
                  <span v-if="errors.contact" class="text-red-500 text-xs mt-1 block ml-1">{{ errors.contact }}</span>
                </div>

              </div>

              <button @click="submitForm"
                class="w-full bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-500 active:from-sky-400 active:via-blue-400 active:to-emerald-400 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-lg shadow-sky-500/20 transform transition-all duration-300 active:scale-[0.98] cursor-pointer relative overflow-hidden group touch-manipulation">
                <span class="relative z-10">下一步：支付报名费</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-opacity duration-300">
                </div>
              </button>
            </div>

            <!-- 步骤2：支付页面 -->
            <div v-else-if="step === 2" class="max-w-4xl mx-auto animate-fade-in">
              <div class="text-center mb-8">
                <h2 class="text-2xl sm:text-4xl font-bold text-slate-800 mb-2">支付报名费 - 步骤2/2</h2>
                <p class="text-slate-600 text-sm sm:text-base">完成支付以确认报名</p>
              </div>

              <!-- 支付成功状态 -->
              <div v-if="isSuccess" class="text-center max-w-md mx-auto mb-8">
                <div
                  class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-8 mb-6">
                  <div class="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-emerald-700 mb-2">报名成功！</h3>
                  <p class="text-emerald-600 mb-4">我们已收到您的报名信息</p>
                  <p class="text-sm text-emerald-500">3秒后自动返回首页...</p>
                </div>
              </div>

              <!-- 支付确认状态 -->
              <div v-else class="text-center max-w-4xl mx-auto">
                <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl mb-6 border border-slate-200">
                  <h2 class="text-2xl font-bold text-slate-800 mb-6">完成支付确认报名</h2>

                  <!-- 图片区域 - 响应式布局 -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <!-- 收款二维码 -->
                    <div class="text-center">
                      <h3 class="text-lg font-semibold text-slate-800 mb-3">扫描下方二维码支付</h3>
                      <div
                        class="w-48 h-64 sm:w-56 sm:h-72 mx-auto bg-white rounded-xl border-4 border-slate-200 shadow-lg overflow-hidden">
                        <img src="/purchase.jpg" alt="收款二维码" class="w-full h-full object-cover">
                      </div>
                    </div>

                    <!-- 备注示例 -->
                    <div class="text-center">
                      <h3 class="text-lg font-semibold text-slate-800 mb-3">支付备注填写示例</h3>
                      <div
                        class="w-48 h-64 sm:w-56 sm:h-72 mx-auto bg-white rounded-xl border-4 border-slate-200 shadow-lg overflow-hidden">
                        <img src="/example.jpg" alt="备注示例" class="w-full h-full object-cover">
                      </div>
                    </div>
                  </div>

                </div>

                <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 mb-6 border border-amber-200">
                  <p class="text-base text-amber-700 mb-2">
                    <span
                      class="inline-block w-6 h-6 bg-amber-500 rounded-full text-white font-bold mr-2 text-center">⚠</span>
                    重要提醒
                  </p>
                  <p class="text-sm text-amber-600">
                    支付时请务必在<span class="font-bold text-slate-800 underline mx-1">备注</span>中填写你的<span
                      class="font-bold text-slate-800 mx-1">年级+班级+姓名</span>，否则无法确认报名！
                  </p>
                  <p class="text-xs text-amber-500 mt-2">参考右侧示例图片，确保备注格式正确</p>
                </div>

                <div class="flex flex-col gap-4">
                  <!-- 错误提示 -->
                  <div v-if="submitError"
                    class="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm flex items-start gap-2 animate-fade-in">
                    <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p class="font-bold">提交失败</p>
                      <p>{{ submitError }}</p>
                      <p class="mt-1 text-xs opacity-80">如已支付成功，请勿重复支付，我们会人工核对信息后联系您。</p>
                    </div>
                  </div>

                  <!-- 确认支付按钮 -->
                  <button @click="confirmPayment" :disabled="isSubmitting"
                    class="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 active:from-emerald-400 active:via-green-400 active:to-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/20 transform transition-all duration-300 active:scale-[0.98] cursor-pointer relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed">
                    <span class="relative z-10" v-if="!isSubmitting">我已确认支付，提交信息</span>
                    <span class="relative z-10" v-else>
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                      </svg>
                      正在提交...
                    </span>
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-opacity duration-300">
                    </div>
                  </button>

                  <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button @click="step = 1"
                      class="group text-slate-500 hover:text-sky-600 text-sm underline cursor-pointer transition-colors">
                      <span class="flex items-center gap-2">
                        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none"
                          stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        返回上一步修改信息
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Floating Light Particles -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div v-for="i in 15" :key="i" class="absolute w-1 h-1 rounded-full animate-ping opacity-30"
          :class="Math.random() > 0.5 ? 'bg-sky-400' : 'bg-emerald-400'" :style="`
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
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
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
  button,
  input,
  textarea,
  select {
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
  input,
  textarea,
  button {
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
