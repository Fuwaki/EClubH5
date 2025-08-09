<script setup lang="ts">
import { ref } from 'vue'
import TerminalIntro from './components/TerminalIntro.vue'
import ClubPoster from './components/ClubPoster.vue'

const showIntro = ref(true)
function onIntroDone() {
  showIntro.value = false
}
</script>

<template>
  <main class="bg-black text-white min-h-[100dvh] relative overflow-hidden">
    <Transition name="art" mode="out-in">
      <template v-if="showIntro">
        <TerminalIntro @done="onIntroDone" />
      </template>
      <template v-else>
        <ClubPoster />
      </template>
    </Transition>
  </main>
</template>

<style scoped>
/* Artistic transition: CRT power-off (leave) -> iris reveal (enter) */
:deep(.art-enter-active), :deep(.art-leave-active) {
  transition:
    clip-path 700ms cubic-bezier(.22,.75,.25,1),
    transform 700ms cubic-bezier(.22,.75,.25,1),
    filter 700ms ease,
    opacity 500ms ease;
}

/* Leave (TerminalIntro): flicker + squash to a horizontal line */
@keyframes crt-flicker { 0%,19%,21%,23%,100% { opacity: 1 } 20%,22% { opacity: .7 } }
:deep(.art-leave-active) { animation: crt-flicker 250ms linear 1; transform-origin: center; }
:deep(.art-leave-from) { opacity: 1; clip-path: inset(0% 0 0% 0); transform: none; filter: none; }
:deep(.art-leave-to) {
  opacity: 0;
  clip-path: inset(48% 0 48% 0 round 6px); /* shrink to a thin band */
  transform: scaleY(0.02);
  filter: brightness(1.6) contrast(1.2);
}

/* Enter (ClubPoster): radial iris reveal with soft focus */
:deep(.art-enter-from) {
  opacity: 0;
  clip-path: circle(0% at 50% 50%);
  transform: scale(0.98);
  filter: blur(12px) saturate(0.6);
}
:deep(.art-enter-to) {
  opacity: 1;
  clip-path: circle(150% at 50% 50%);
  transform: none;
  filter: none;
}

/* Motion safety */
@media (prefers-reduced-motion: reduce) {
  :deep(.art-enter-active), :deep(.art-leave-active) { transition: opacity .3s ease !important; }
  :deep(.art-leave-to), :deep(.art-leave-from), :deep(.art-enter-from), :deep(.art-enter-to) {
    clip-path: none !important; transform: none !important; filter: none !important;
  }
}
</style>
