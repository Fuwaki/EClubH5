<script setup lang="ts">
</script>
<template>
  <div class="relative px-4 sm:px-5 py-14 sm:py-16 bg-black/30" v-reveal>
    <div class="w-full max-w-screen-lg mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center" v-reveal:"pop">活动与荣誉</h2>
      <div class="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3" v-reveal:"fade" :reveal="{delay:140}">
        <div class="rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition" v-reveal:"pop" :reveal="{delay:200}">
          <div class="text-3xl">🎉</div>
          <div class="mt-2 text-sm">快乐团建时光</div>
        </div>
        <div class="rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition" v-reveal:"pop" :reveal="{delay:260}">
          <div class="text-3xl">🧪</div>
          <div class="mt-2 text-sm">大佬云集</div>
        </div>
        <div class="rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition" v-reveal:"pop" :reveal="{delay:320}">
          <div class="text-3xl">📢</div>
          <div class="mt-2 text-sm">院内教学</div>
        </div>
        <div class="rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition" v-reveal:"pop" :reveal="{delay:380}">
          <div class="text-3xl">🌟</div>
          <div class="mt-2 text-sm">十佳社团</div>
        </div>
      </div>
    </div>
  </div>
</template>
