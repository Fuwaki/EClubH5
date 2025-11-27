<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import TerminalIntro from './components/TerminalIntro.vue'
import { Analytics } from '@vercel/analytics/vue';

const route = useRoute()
const showIntro = ref(false)
const introShown = ref(false) // 确保只显示一次

// 计算是否应该显示开场动画
const shouldShowIntro = computed(() => {
  // 只有在主页且还没显示过开场动画时才显示
  return route.path === '/' && !introShown.value
})

function onIntroDone() {
  showIntro.value = false
  introShown.value = true
}

// 监听路由变化
watch(() => route.path, (newPath) => {
  if (newPath === '/' && !introShown.value) {
    showIntro.value = true
  }
}, { immediate: true })
</script>

<template>
  <Analytics />
  <main class="bg-black text-white min-h-[100dvh] relative overflow-hidden">
    <!-- 路由内容始终渲染 -->
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
    
    <!-- 只在主页显示开场动画，覆盖在路由内容之上 -->
    <Transition v-if="shouldShowIntro && showIntro" name="art" mode="out-in" appear>
      <div class="fixed inset-0 z-50">
        <TerminalIntro @done="onIntroDone" />
      </div>
    </Transition>
  </main>
</template>

<style scoped>
/* Route content transition */
:deep(.fade-enter-active), :deep(.fade-leave-active) {
  transition: opacity 300ms ease;
}
:deep(.fade-enter-from), :deep(.fade-leave-to) {
  opacity: 0;
}

/* Artistic transition: CRT power-off (leave) -> iris reveal (enter) */
.art-enter-active, .art-leave-active {
  transition:
    clip-path 700ms cubic-bezier(.22,.75,.25,1),
    transform 700ms cubic-bezier(.22,.75,.25,1),
    filter 700ms ease,
    opacity 500ms ease;
}

/* Leave (TerminalIntro): flicker + squash to a horizontal line */
@keyframes crt-flicker { 0%,19%,21%,23%,100% { opacity: 1 } 20%,22% { opacity: .7 } }
.art-leave-active { animation: crt-flicker 250ms linear 1; transform-origin: center; }
.art-leave-from { opacity: 1; clip-path: inset(0% 0 0% 0); transform: none; filter: none; }
.art-leave-to {
  opacity: 0;
  clip-path: inset(48% 0 48% 0 round 6px); /* shrink to a thin band */
  transform: scaleY(0.02);
  filter: brightness(1.6) contrast(1.2);
}

/* Enter (ClubPoster): radial iris reveal with soft focus */
.art-enter-from {
  opacity: 0;
  clip-path: circle(0% at 50% 50%);
  transform: scale(0.98);
  filter: blur(12px) saturate(0.6);
}
.art-enter-to {
  opacity: 1;
  clip-path: circle(150% at 50% 50%);
  transform: none;
  filter: none;
}

/* Motion safety */
@media (prefers-reduced-motion: reduce) {
  .art-enter-active, .art-leave-active { transition: opacity .3s ease !important; }
  .art-leave-to, .art-leave-from, .art-enter-from, .art-enter-to {
    clip-path: none !important; transform: none !important; filter: none !important;
  }
}
</style>
