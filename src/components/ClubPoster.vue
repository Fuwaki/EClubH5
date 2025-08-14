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
      <div class="absolute -top-[20vh] -left-[15vw] w-[80vw] h-[80vw] rounded-full bg-emerald-400/10 blur-[100px]"></div>
      <div class="absolute top-[30vh] -right-[10vw] w-[70vw] h-[70vw] rounded-full bg-cyan-400/10 blur-[110px]"></div>
      <div class="absolute bottom-[-10vh] left-[20vw] w-[65vw] h-[65vw] rounded-full bg-emerald-300/8 blur-[120px]"></div>
      <!-- 条纹光影 -->
      <div class="absolute inset-x-0 top-[45vh] h-40 bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(16,185,129,0.25)_40%,rgba(34,211,238,0.25)_60%,rgba(34,211,238,0)_100%)] opacity-40 blur-2xl"></div>
      <div class="absolute inset-x-0 top-[120vh] h-40 bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(34,211,238,0.2)_50%,rgba(16,185,129,0)_100%)] opacity-40 blur-2xl"></div>
    </div>

    <!-- 内容容器：统一无分界背景 -->
    <div class="relative z-10">
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
