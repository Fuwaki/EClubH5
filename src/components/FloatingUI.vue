<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showTop = ref(false)
const hasBgm = ref(false)
const playing = ref(false)
let audio: HTMLAudioElement | null = null

function update() {
  const y = document.documentElement.scrollTop || document.body.scrollTop
  showTop.value = y > 240
}

function toggleBgm() {
  audio = (window as any).__bgm || null
  if (!audio) { hasBgm.value = false; return }
  hasBgm.value = true
  if (audio.paused) {
    audio.play().then(() => { playing.value = true }).catch(() => {})
  } else {
    audio.pause();
    playing.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', update, { passive: true })
  update()
  audio = (window as any).__bgm || null
  hasBgm.value = !!audio
  playing.value = !!audio && !audio.paused
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', update)
})

function toTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
</script>

<template>
  <div class="fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 z-50 flex flex-col items-end gap-3">
    <button v-if="hasBgm" @click="toggleBgm" class="relative p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white shadow-lg active:scale-95 transition">
      <span v-if="playing">🔊</span>
      <span v-else>🔈</span>
    </button>
    <button v-show="showTop" @click="toTop" class="relative p-3 rounded-full bg-gradient-to-tr from-emerald-400/90 to-cyan-400/90 text-black font-bold shadow-lg active:scale-95 transition border border-white/20">
      ↑
    </button>
  </div>
</template>

<style scoped>
</style>
