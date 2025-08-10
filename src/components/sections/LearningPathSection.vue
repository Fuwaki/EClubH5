<script setup lang="ts">
</script>
<template>
  <div class="relative px-4 sm:px-5 py-14 sm:py-16" v-reveal>
    <div class="w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
      <div v-reveal:"pop">
        <div class="relative aspect-video rounded-xl overflow-hidden bg-slate-900/70 border border-white/10 flex items-center justify-center">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_60%)]"></div>
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.2),transparent_60%)]"></div>
            <div class="relative z-10 text-center">
              <div class="text-5xl font-black tracking-tight">0 → 1 → ∞</div>
              <div class="mt-3 text-xs sm:text-sm text-emerald-100/80">每周例会 / 部长带队</div>
            </div>
        </div>
      </div>
      <div v-reveal:"pop" :reveal="{delay:140}">
        <h2 class="text-2xl sm:text-3xl font-bold">别担心起点，我们一起出发</h2>
        <p class="mt-3 sm:mt-4 text-emerald-100/80 leading-relaxed text-[15px] sm:text-base" v-reveal:"up" :reveal="{delay:220}">每位新成员会得到学习路径建议与 mentor 指导，前期也会提供项目模板与工具链，快速上手并构建自信。</p>
        <div class="mt-4 sm:mt-6 grid grid-cols-2 gap-3 text-sm" v-reveal:"fade" :reveal="{delay:300}">
          <div class="px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20"> / 小程序</div>
          <div class="px-3 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">AI / CV / NLP</div>
          <div class="px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20">嵌入式 / IoT</div>
          <div class="px-3 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">宣发 / 运营</div>
        </div>
      </div>
    </div>
  </div>
</template>
