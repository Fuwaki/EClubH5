<script setup lang="ts">
</script>
<template>
  <div class="relative px-4 sm:px-5 py-14 sm:py-16 bg-black/30 cv-auto" v-reveal>
    <div class="w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-6 sm:gap-10">
      <div v-reveal:"pop">
        <h3 class="text-xl sm:text-2xl font-bold">我们希望你</h3>
        <ul class="mt-3 sm:mt-4 space-y-2 text-emerald-100/85 text-[15px] leading-relaxed" v-reveal:"up" :reveal="{delay:120}">
          <li>• 对技术或设计保持好奇心，愿意动手探索</li>
          <li>• 愿意为学校工作出力（我们可是正经的学生会哦）</li>
          <li>• 乐于沟通、保持开放</li>
          <li>• 不设门槛，零基础亦可，只要愿意持续学习</li>
        </ul>
      </div>
      <div v-reveal:"pop" :reveal="{delay:160}">
        <h3 class="text-xl sm:text-2xl font-bold">我们的小部门</h3>
        <div class="mt-4 grid grid-cols-2 gap-3 text-sm" v-reveal:"fade" :reveal="{delay:240}">
          <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">技术部</div>
          <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">团支部</div>
          <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">常务部</div>
          <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">外联部</div>
          <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">部长部</div>
          <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 relative overflow-hidden">
            <span class="relative z-10">隐藏款</span>
            <span class="absolute inset-0 flex items-center justify-center text-xl font-bold text-cyan-400/10 select-none">MEG</span>
          </div>
        </div>
        <div class="mt-5" v-reveal:"pop" :reveal="{delay:340}">
          <a href="#join" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold active:scale-[0.99]">
            现在报名
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
