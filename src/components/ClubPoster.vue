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
  <section class="bg-gradient-to-b from-emerald-950 via-slate-950 to-black text-white scroll-smooth">
    <FloatingUI />
    <HeroSection />
    <AboutSection />
    <AdvantagesSection />
    <ExpectSection />
    <ProjectsSection />
    <LearningPathSection />
    <EventsHonorsSection />
    <JoinUsSection />
  </section>
</template>

<style scoped>
/* 保留可能需要的共享过渡 */
.fade-enter-active,
.fade-leave-active { transition: opacity .22s ease }
.fade-enter-from,
.fade-leave-to { opacity: 0 }
</style>
