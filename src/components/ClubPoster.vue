<script setup lang="ts">
// 拆分后的区块组件
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import AdvantagesSection from './sections/AdvantagesSection.vue'
import ExpectSection from './sections/ExpectSection.vue'
import ProjectsSection from './sections/ProjectsSection.vue'
import LearningPathSection from './sections/LearningPathSection.vue'
import EventsHonorsSection from './sections/EventsHonorsSection.vue'
import JoinUsSection from './sections/JoinUsSection.vue'
import FloatingUI from './FloatingUI.vue'
</script>

<template>
  <section class="relative text-white scroll-smooth overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-950 to-black">
    <!-- 全局环境光背景（不依赖页面精确高度） -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0">
      <!-- 大范围柔光斑 -->
      <div class="absolute -top-[60vh] -left-[50vw] w-[160vw] h-[160vh] rounded-full bg-emerald-400/35 blur-[200px] opacity-40" style="will-change: transform, opacity;"></div>
      <div class="absolute top-[20vh] -right-[60vw] w-[140vw] h-[140vh] rounded-full bg-cyan-400/35 blur-[200px] opacity-30" style="will-change: transform, opacity;"></div>
      <div class="absolute bottom-[-50vh] left-[-20vw] w-[130vw] h-[130vh] rounded-full bg-emerald-300/30 blur-[200px] opacity-50" style="will-change: transform, opacity;"></div>
      <!-- 条纹光影 -->
      <div class="absolute inset-x-0 top-[-10vh] h-[100vh] bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(16,185,129,0.45)_40%,rgba(34,211,238,0.45)_60%,rgba(34,211,238,0)_100%)] opacity-20 blur-2xl" style="will-change: transform, opacity;"></div>
      <div class="absolute inset-x-0 top-[60vh] h-[100vh] bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(34,211,238,0.4)_50%,rgba(16,185,129,0)_100%)] opacity-15 blur-2xl" style="will-change: transform, opacity;"></div>
      <div class="absolute inset-x-0 top-[140vh] h-[100vh] bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(34,211,238,0.35)_50%,rgba(16,185,129,0)_100%)] opacity-10 blur-2xl" style="will-change: transform, opacity;"></div>
    </div>

    <!-- 内容容器：统一无分界背景 -->
    <div class="relative z-20 text-white">
      <FloatingUI />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <ExpectSection />
      <ProjectsSection />
      <LearningPathSection />
      <EventsHonorsSection />
      <JoinUsSection />
    </div>
  </section>
</template>

<style scoped>
/**** 共享淡入过渡 ****/
.fade-enter-active,
.fade-leave-active { transition: opacity .22s ease }
.fade-enter-from,
.fade-leave-to { opacity: 0 }
</style>
