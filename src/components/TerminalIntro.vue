<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'

const emit = defineEmits<{ (e: 'done'): void }>()

// 可调参数
const BASE_CHAR_DELAY = 10          // 基础字间隔
const EXTRA_PUNCTUATION_DELAY = 100 // 标点额外停顿
const LINE_END_DELAY = 200          // 每行完后的停顿
const FAST_MODE_MULTIPLIER = 0.35   // 减少动画或跳过后速度倍率

const output = ref<string[]>([])
const isTyping = ref(true)
const showEnter = ref(false)
const skipped = ref(false)
const scroller = ref<HTMLElement | null>(null)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const beginAudio = new Audio('/sounds/begin.mp3')
beginAudio.loop = false
beginAudio.preload = 'auto'
const tickAudio = new Audio('/sounds/tick.mp3')
tickAudio.loop = false
tickAudio.preload = 'auto'

// 音频解锁状态（为绕过浏览器自动播放策略）
const audioUnlocked = ref(false)
const allowAudio = ref(false)
// 适当控制音量（可按需调整）
beginAudio.volume = 0.7
tickAudio.volume = 1.0

async function unlockAudio() {
  if (audioUnlocked.value) return
  try {
    // 通过一次静默播放+暂停来解锁
    tickAudio.muted = true
    await tickAudio.play()
    tickAudio.pause()
    tickAudio.currentTime = 0
    tickAudio.muted = false

    beginAudio.muted = true
    await beginAudio.play()
    beginAudio.pause()
    beginAudio.currentTime = 0
    beginAudio.muted = false

    audioUnlocked.value = true
    allowAudio.value = true
  } catch (e) {
    // 解锁失败也不阻塞，后续用户再次交互可能成功
    console.warn('Audio unlock failed (will retry on next interaction)', e)
  }
}

// 开屏（Splash）控制
const showSplash = ref(true)

function startOS() {
  if (!showSplash.value) return
  unlockAudio()
  showSplash.value = false
  // 启动后才绑定跳过键监听
  window.addEventListener('keydown', onKey)
  nextTick(() => {
    startTyping()
  })
}

function startOnKeyOnce(_e: KeyboardEvent) {
  startOS()
}

// 终端内容
const lines: string[] = [
  "// === ElectronicClub BOOT SEQUENCE v2.1 ===",
  "",
  "[SYSTEM] 时间线归档: 「高中故事线」 HIGH_SCHOOL_ERA (2022-2025)",
  "[STATUS] 成就解锁: 「我的大学」 UNIVERSITY_ACCESS_KEY",
  "",
  "[LOADING] 新世界模块: 「无尽世界」 UNLIMITED_POSSIBILITIES",
  "  - 可用技能点: ∞ (自由分配模式)",
  "  - 核心规则: 允许失败 | 鼓励探索 | 支持重构",
  "",
  "[DISCOVERY] 发现关键地点: ",
  "  MAKERSPACE_S514 [电子俱乐部]",
  "  特征验证: ",
  "    ████████ 技能孵化指数 100%",
  "    ██████████ 同伴支持等级 114%",
  "",
  "[USER_PROFILE] 检测到新身份:",
  "  用户类别: FRESHMAN_2025",
  "  建议路径: JOIN_CREATOR_COMMUNITY",
  "",
  "[AUTO_LOG] 系统记录片段:",
  "  > \"凌晨3点的调试是最好成长礼 - 2024级学长\"",
  "  > \"我的第一个LED在这里点亮 - 2023级学姐\"",
  "  > \". . .\"",
  "  > \"我们做到了，这是属于电子俱乐部的荣耀！-2006年学长\"",
  "  > \". . .\"",
  "  > \"我们创建一个电子俱乐部吧，为了我们的那份热爱。-1982年学长\"",
  "",
  "[RESOURCE] 可用工具包:",
  "  1. BEGINNER_FRIENDLY_STARTER_KIT 「新手保护期」",
  "  2. PROJECT_BASED_LEARNING_PATH 「学习路径」",
  "  3. MENTOR_SUPPORT_NETWORK 「社交支持网络」",
  "",
  "[NOTICE] 不需要预先装备全部技能",
  "  CORE_REQUIREMENT: 好奇心与坚持",
  "",
  "[COUNTDOWN] 主线任务触发",
  "  > 【新手村】：加入电子俱乐部",
  "  > 【渐入佳境】：让你的智能车在学校赛道驰骋",
  "  > 【获得传承】：成为国赛大佬",
  "",
  "> // === 终端交互就绪 ===",
  "> [INPUT REQUIRED] 执行 ./open_poster 查看新世界地图",
  "> 等待用户指令: █",
  "",
  "",
  "",
  ""
]

let stop = false
let rafId: number | null = null

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms))
}

function scrollToBottom() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    const el = scroller.value
    if (!el) return
    el.scrollTop = el.scrollHeight
  })
}

function charDelayFor(ch: string) {
  if (reduceMotion) return 0
  if (skipped.value) return 0
  let base = BASE_CHAR_DELAY
  if (/[，。、“”‘’…：:;,.!?！？]/.test(ch)) base += EXTRA_PUNCTUATION_DELAY
  return base * (skipped.value ? FAST_MODE_MULTIPLIER : 1)
}

async function typeLine(full: string) {
  tickAudio.currentTime = 0
  if (allowAudio.value) {
    tickAudio.play().catch(() => {})
  }

  // 空行直接推入
  if (full.trim() === '' && full !== '') {
    output.value.push('')
    await nextTick()
    scrollToBottom()
    return
  }

  let current = ''
  // 先占位，减少 push 次数
  output.value.push('')
  const idx = output.value.length - 1

  for (let i = 0; i < full.length; i++) {
    if (stop) return
    const ch = full[i]
    current += ch
    output.value[idx] = current
    if (!reduceMotion && !skipped.value) {
      await nextTick()
      scrollToBottom()
      const delay = charDelayFor(ch)
      if (delay > 0) await sleep(delay * (0.6 + Math.random() * 0.5))
    }
  }

  if (!reduceMotion && !skipped.value) {
    await sleep(LINE_END_DELAY * (0.7 + Math.random() * 0.4))
  }
  scrollToBottom()
}

async function startTyping() {
  output.value = []
  isTyping.value = true
  for (let i = 0; i < lines.length; i++) {
    if (stop) return
    const prefix = lines[i].startsWith('> ') ? '' : '> '
    await typeLine(prefix + lines[i])
  }
  isTyping.value = false
  showEnter.value = true
  await nextTick()
  scrollToBottom()
  if (allowAudio.value) {
    beginAudio.play().catch(() => {})
  }
}

function finish() {
  stop = true
  skipped.value = true
  emit('done')
}

function skipToEnd() {
  stop = true
  skipped.value = true
  output.value = lines.map(l => (l.startsWith('> ') ? l : '> ' + l))
  isTyping.value = false
  showEnter.value = true
  nextTick(scrollToBottom)
}

function handleUserContinue() {
  if (isTyping.value) {
    skipToEnd()
  } else {
    finish()
  }
}

function onKey(e: KeyboardEvent) {
  if (["Enter", " ", "ArrowDown"].includes(e.key)) {
    e.preventDefault()
    handleUserContinue()
  }
}

onMounted(async () => {
  await nextTick()
  // 开屏阶段：任意键开始
  window.addEventListener('keydown', startOnKeyOnce, { once: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('keydown', startOnKeyOnce)
})
</script>

<template>
  <!-- 开屏动画 / Splash -->
  <section
    v-if="showSplash"
    class="fixed inset-0 z-50 min-h-[100svh] bg-black text-emerald-200 font-mono overflow-hidden select-none grid place-items-center"
    @click="startOS"
  >
    <div class="relative w-full max-w-[820px] px-6 text-center">
      <div class=" overflow-clip mx-auto w-30 h-30 rounded-full border border-emerald-500/40 grid place-items-center shadow-[0_0_40px_-10px_rgba(16,255,128,0.5)] animate-crt">
        <img src="/eclub_logo2.jpg" alt="E-Club" class=" opacity-90 h-full" />
      </div>
      <h1 class="mt-6 text-2xl font-semibold text-emerald-300">ElectronicClub OS</h1>
      <p class="mt-2 text-emerald-300/80">是否启动系统？</p>
      <p class="mt-1 text-xs text-emerald-300/60">点击或按任意键开始</p>
      <p class="mt-1 text-xs text-emerald-300/60">Click / Press any key to start</p>
      <div class="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          class="px-4 py-2 rounded border border-emerald-500/40 hover:bg-emerald-500/10 active:scale-95 transition flex items-center justify-center font-semibold text-base text-emerald-300 shadow-md"
          @click.stop="startOS"
        >启动</button>
        <button
          type="button"
          class="px-4 py-2 rounded border border-emerald-500/20 text-emerald-300/70 hover:bg-white/5 active:scale-95 transition flex items-center justify-center font-semibold text-base shadow"
          @click.stop="finish"
        >直接进入</button>
      </div>
    </div>
    <!-- 背景装饰 -->
    <div class="absolute inset-0 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(16,255,128,0.08),rgba(0,0,0,0)_70%)]"></div>
    <div class="absolute inset-0 pointer-events-none scanline"></div>
  </section>

  <!-- 终端动画 / Terminal -->
  <section
    v-else
    class="fixed inset-0 z-50 min-h-[100svh] bg-black text-emerald-200 font-mono overflow-hidden select-none overscroll-y-none"
    @click="handleUserContinue"
    @touchstart.passive="handleUserContinue"
  >
    <!-- 叠加层 -->
    <div class="absolute inset-0 pointer-events-none crt-grid opacity-30"></div>
    <div class="absolute inset-0 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(16,255,128,0.07),rgba(0,0,0,0)_70%)]"></div>
    <div class="absolute inset-0 pointer-events-none scanline"></div>
    <div class="absolute inset-x-0 top-0 h-16 fade-top pointer-events-none"></div>
    <div class="absolute inset-x-0 bottom-0 h-20 fade-bottom pointer-events-none"></div>

    <div class="relative h-full w-full flex items-center justify-center p-4 sm:p-5">
      <!-- 改为flex列布局，避免内容与顶部栏重叠 -->
      <div class="w-full max-w-[820px] h-[70svh] min-h-[380px] max-h-[760px] bg-black/40 border border-emerald-500/40 rounded-xl shadow-[0_0_40px_-10px_rgba(16,255,128,0.5)] backdrop-blur-sm overflow-hidden ring-1 ring-emerald-400/10 relative animate-crt flex flex-col">
        <!-- 顶部栏（不再 absolute） -->
        <div class="flex items-center justify-between px-4 py-2 text-xs text-emerald-300/80 shrink-0 relative z-20">
          <div class="flex items-center gap-2 relative">
            <span class="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="relative z-10">E-Club Terminal</span>
            <!-- 毛玻璃圆形背景 -->
            <span class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-10 bg-emerald-300/20 backdrop-blur-md rounded-full blur-md z-0 pointer-events-none"></span>
          </div>
          <button
            type="button"
            class="px-2 py-1 rounded border border-emerald-500/40 hover:bg-emerald-500/10 active:scale-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
            @click.stop="finish"
            aria-label="跳过"
          >跳过</button>
        </div>

        <!-- 输出区 -->
        <div
          ref="scroller"
          class="flex-1 w-full px-4 pb-20 pt-1 sm:px-6 sm:pb-24 md:px-8 md:pb-24 overflow-y-auto terminal-mask no-scrollbar text-[13px] sm:text-sm leading-[1.4] tracking-wide relative"
        >
          <div>
            <template v-for="(line, idx) in output" :key="idx">
              <div
                class="whitespace-pre-wrap transition-opacity duration-300 will-change-transform"
                :class="[
                  line.trim() === '' ? 'opacity-40 h-5' : 'glow-text',
                  idx === output.length - 1 && isTyping ? 'pr-2' : ''
                ]"
              >
                {{ line }}
                <span
                  v-if="idx === output.length - 1 && isTyping"
                  class="inline-block w-2 bg-emerald-300 animate-cursor align-baseline ml-[1px]"
                ></span>
              </div>
            </template>
          </div>
        </div>

        <!-- 进入提示 -->
        <div
          v-if="showEnter"
          class="pointer-events-none absolute bottom-4 inset-x-0 flex flex-col items-center gap-1 text-emerald-300/80 z-30"
        >
          <span class="text-[11px] uppercase tracking-widest">轻触继续 / Press to continue</span>
          <span class="animate-bounce text-emerald-300 text-lg">↓</span>
        </div>

        <!-- 角标微光 -->
        <div class="pointer-events-none absolute -inset-px rounded-xl border border-emerald-400/10 shadow-[0_0_20px_2px_rgba(16,255,128,0.08)_inset]"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:root {
  --term-accent: #10ff80;
}

.terminal-mask {
  mask-image: radial-gradient(ellipse at center, black 74%, transparent 130%);
}

/* 滚动条隐藏 */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar { display: none; }

/* 光标 */
@keyframes cursorBlink { 0%,49% {opacity:1} 50%,100% {opacity:0} }
.animate-cursor { animation: cursorBlink 1s steps(1,end) infinite; }

/* CRT 网格 */
.crt-grid {
  background:
    repeating-linear-gradient(to bottom, rgba(16,255,128,0.05) 0px, rgba(16,255,128,0.05) 1px, transparent 2px, transparent 4px),
    repeating-linear-gradient(to right, rgba(16,255,128,0.025) 0px, rgba(16,255,128,0.025) 1px, transparent 2px, transparent 4px);
  filter: drop-shadow(0 0 12px rgba(16,255,128,0.25));
}

/* 扫描亮带 */
.scanline {
  background: linear-gradient(rgba(16,255,128,0.15), rgba(16,255,128,0) 65%);
  mix-blend-mode: screen;
  animation: scan 6s linear infinite;
  opacity: 0.3;
}
@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* CRT 微闪烁/色偏 */
@keyframes crtFlicker {
  0%, 100% { filter: brightness(1) saturate(1); }
  50% { filter: brightness(1.05) saturate(1.05); }
}
.animate-crt {
  animation: crtFlicker 4.5s linear infinite;
}

/* 文本微光 */
.glow-text {
  text-shadow:
    0 0 2px rgba(16,255,128,0.4),
    0 0 6px rgba(16,255,128,0.15);
}

/* 上下渐隐 */
.fade-top {
  background: linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0));
}
.fade-bottom {
  background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0));
}

/* 减少动画模式 */
@media (prefers-reduced-motion: reduce) {
  .animate-crt, .scanline, .animate-cursor { animation: none !important; }
}
</style>
