<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import JoinForm from '../JoinForm.vue'
import JoinGlow from '../JoinGlow.vue'

const joinRef = ref<HTMLElement | null>(null)
const joinInView = ref(false)
const burstKey = ref(0)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const e = entries[0]
      if (!e) return
      if (e.isIntersecting) {
        joinInView.value = true
        burstKey.value++
      } else {
        joinInView.value = false
      }
    },
    { threshold: 0.35 }
  )
  if (joinRef.value) observer.observe(joinRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>
<template>
  <div id="join" ref="joinRef" class="relative px-4 sm:px-5 py-16 sm:py-20 bg-gradient-to-b from-black/40 to-black overflow-hidden">
    <JoinGlow :active="joinInView" :burst-key="burstKey" />
    <div class="relative z-10 w-full max-w-screen-md mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
        加入我们，<span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">一起</span>把灵感上线
      </h2>
      <p class="text-lg sm:text-xl mt-3 text-white font-semibold">让知识开花</p>
      <p class="mt-3 sm:mt-4 text-sm sm:text-base text-emerald-100/80 max-w-md mx-auto px-1">扫码进群 / 关注学校官方通知 / 直接填写报名表</p>
      <div class="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6">
        <div class="flex flex-col items-center">
          <div class="relative group">
            <div class="p-[2px] rounded-2xl bg-[linear-gradient(140deg,rgba(255,255,255,0.85),rgba(255,255,255,0.55),rgba(255,255,255,0.78))] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_0_22px_4px_rgba(255,255,255,0.55),0_6px_28px_-8px_rgba(16,185,129,0.25)]">
              <div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative">
                <img src="/group_qr.jpg" alt="官方迎新群二维码" class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.015]" decoding="async" loading="lazy" />
                <div class="pointer-events-none absolute inset-0 ring-1 ring-black/5"></div>
                <div class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-60 bg-[radial-gradient(circle_at_25%_30%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(34,211,238,0.16),transparent_60%)]"></div>
              </div>
            </div>
            <div class="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.45),transparent_70%)]"></div>
          </div>
          <div class="mt-2 text-[10px] sm:text-xs text-emerald-100/80 tracking-wide">官方迎新群</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="relative group">
            <div class="p-[2.5px] rounded-2xl bg-gradient-to-tr from-cyan-400/80 via-emerald-400/60 to-white/70 shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_0_22px_4px_rgba(34,211,238,0.18),0_6px_28px_-8px_rgba(16,185,129,0.18)]">
              <div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative">
                <img src="/qq_qr.jpg" alt="官Q二维码" class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]" decoding="async" loading="lazy" />
                <div class="pointer-events-none absolute inset-0 ring-1 ring-cyan-400/10"></div>
                <div class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-70 bg-[radial-gradient(circle_at_25%_30%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(16,185,129,0.14),transparent_60%)]"></div>
              </div>
            </div>
            <div class="pointer-events-none absolute -inset-3 rounded-2xl opacity-80 group-hover:opacity-100 transition duration-500 blur-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.55),rgba(16,185,129,0.25),transparent_80%)]"></div>
          </div>
          <div class="mt-2 text-[10px] sm:text-xs text-cyan-200/80 tracking-wide font-semibold">电子俱乐部官方QQ</div>
        </div>
      </div>
    </div>
    <div class="relative z-10 mt-9 sm:mt-12">
      <JoinForm />
    </div>
  </div>
</template>
