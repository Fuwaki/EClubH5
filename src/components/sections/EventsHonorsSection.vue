<script setup lang="ts">
</script>
<template>
  <div class="relative px-4 sm:px-5 py-14 sm:py-16 cv-auto" v-reveal>
    <div class="w-full max-w-screen-lg mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center" v-reveal:"pop">活动与荣誉</h2>
      <div class="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" v-reveal:"fade" :reveal="{delay:140}">
        <!-- Mobile: two-column grid (visible only on <sm) -->
        <div class="grid grid-cols-2 gap-4 sm:hidden" v-reveal:"fade" :reveal="{delay:140}">
          <div class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform" v-reveal:"pop" :reveal="{delay:200}">
            <img src="/honors/1.jpg" alt="快乐团建时光" class="w-full h-35 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-3">
              <div class="text-white font-medium text-sm">运动这一块</div>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform" v-reveal:"pop" :reveal="{delay:260}">
            <img src="/honors/2.jpg" alt="大佬云集" class="w-full h-35 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-3">
              <div class="text-white font-medium text-sm">科普这一块</div>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform" v-reveal:"pop" :reveal="{delay:320}">
            <img src="/honors/3.jpg" alt="院内教学" class="w-full h-35 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-3">
              <div class="text-white font-medium text-sm">社团这一块</div>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform" v-reveal:"pop" :reveal="{delay:380}">
            <img src="/honors/4.jpg" alt="十佳社团" class="w-full h-35 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-3">
              <div class="text-white font-medium text-sm">配音这一块</div>
            </div>
          </div>
        </div>

        <!-- Desktop / tablet: grid layout using existing grid classes (hidden on <sm, visible on sm+) -->
        <div class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block" v-reveal:"pop" :reveal="{delay:200}">
          <img src="/honors/1.jpg" alt="快乐团建时光" class="h-40 sm:h-56 w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div class="text-white font-medium text-lg">运动这一块</div>
          </div>
        </div>

        <div class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block" v-reveal:"pop" :reveal="{delay:260}">
          <img src="/honors/2.jpg" alt="大佬云集" class="h-40 sm:h-56 w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div class="text-white font-medium text-lg">科普这一块</div>
          </div>
        </div>

        <div class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block" v-reveal:"pop" :reveal="{delay:320}">
          <img src="/honors/3.jpg" alt="院内教学" class="h-40 sm:h-56 w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div class="text-white font-medium text-lg">社团这一块</div>
          </div>
        </div>

        <div class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block" v-reveal:"pop" :reveal="{delay:380}">
          <img src="/honors/4.jpg" alt="十佳社团" class="h-40 sm:h-56 w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div class="text-white font-medium text-lg">配音这一块</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
