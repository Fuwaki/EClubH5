<script setup lang="ts">
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center px-4 sm:px-5 py-14 sm:py-16">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -left-20 size-[40rem] rounded-full bg-emerald-400/10 blur-3xl"></div>
      <div class="absolute -bottom-40 -right-20 size-[40rem] rounded-full bg-cyan-400/10 blur-3xl"></div>
    </div>
    <div class="w-full max-w-screen-md mx-auto text-center">
      <div class="mb-8 sm:mb-10 flex items-center justify-center gap-4 sm:gap-6">
        <div class="flex items-center justify-center">
          <div class="inline-flex items-center rounded-md ring-1 ring-white/20 bg-white/5 px-3 py-2 shadow-sm">
            <img src="/logo.svg" alt="学校 logo" class="h-10 sm:h-14 w-auto object-contain select-none" decoding="async" loading="eager" fetchpriority="high" />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img src="/eclub_logo.jpg" alt="电子俱乐部 logo" class="h-16 w-16 sm:h-24 sm:w-24 rounded-full object-cover ring-1 ring-white/20 bg-white/5 select-none shadow-lg" decoding="async" loading="eager" fetchpriority="high" />
        </div>
      </div>
      <h1 class="text-[9.5vw] leading-[1.06] sm:text-5xl md:text-6xl font-extrabold tracking-tight">
        电子俱乐部
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">探索·创造·连接</span>
      </h1>
      <p class="mt-3 sm:mt-6 text-emerald-100/90 text-[15px] sm:text-lg leading-relaxed px-1 sm:px-2">
        在这里，我们把点子变成作品：硬件黑客、AI 应用、Web 全栈、小程序、嵌入式……
        一起组队做有趣的项目，参加挑战赛，用技术照亮校园生活。
      </p>
      <div class="mt-7 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
        <span class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">院级部门</span>
        <span class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">跨学科</span>
        <span class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">传播知识</span>
        <span class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">成长互助</span>
      </div>
    </div>
    <div class="absolute left-1/2 -translate-x-1/2 text-emerald-200/80 text-xs sm:text-sm animate-bounce bottom-[calc(env(safe-area-inset-bottom)+1rem)]">向下滚动</div>
  </div>
</template>
