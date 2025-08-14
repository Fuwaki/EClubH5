<script setup lang="ts">
import { ref, computed } from 'vue'
const lightbox = ref<string | null>(null)
const open = (src: string) => lightbox.value = src
const close = () => { lightbox.value = null; offset.value = 0; dragging.value = false }

// 资源列表
const works = ['/works/a.jpg', '/works/b.jpg', '/works/c.jpg', '/works/d.jpg', '/works/e.jpg', '/works/f.jpg', '/works/g.jpg', '/works/h.jpg', '/works/i.jpg']

// 灯箱：下滑关闭（移动端手势）
const startY = ref(0)
const offset = ref(0)
const dragging = ref(false)
const bgAlpha = computed(() => Math.max(0.3, 0.85 - Math.min(0.55, offset.value / 600)))
function onTs(e: TouchEvent) { if (!lightbox.value) return; dragging.value = true; startY.value = e.touches[0].clientY; offset.value = 0 }
function onTm(e: TouchEvent) { if (!dragging.value) return; const dy = e.touches[0].clientY - startY.value; if (dy > 0) offset.value = dy }
function onTe() { if (!dragging.value) return; dragging.value = false; if (offset.value > 90) close(); else offset.value = 0 }
</script>
<template>
  <div class="relative px-4 sm:px-5 py-14 sm:py-16 cv-auto" v-reveal:"up" :reveal="{ delay: 380 }">
    <div class="w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
      <div class="order-2 md:order-1">
        <h2 class="text-2xl sm:text-3xl font-bold">去实践，就是最好的学习</h2>
        <p class="mt-3 sm:mt-4 text-emerald-100/80 leading-relaxed text-[15px] sm:text-base">
          从 0 到 1 完整经历：需求调研、方案设计、开发协作。学的不止是技术，更是把事情做成的能力。
        </p>
        <ul class="mt-4 sm:mt-6 space-y-2 text-emerald-100/80 text-sm list-disc list-inside">
          <li>硬件小制作</li>
          <li>LED创新大赛</li>
          <li>技术创意应用</li>
        </ul>
        <p class="mt-4 sm:mt-6 text-emerald-100/80 text-sm italic">
          让电子俱乐部成为你大放异彩的舞台
        </p>
      </div>

      <div class="order-1 md:order-2 reveal-in" style="opacity:1; transform:none; filter:none;">
        <!-- Mobile: 横向滑动影廊 -->
        <div class="md:hidden">
          <div class="flex gap-3 overflow-x-auto w-full max-w-[100vw] py-1 scroll-hint no-scrollbar"
            style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; overflow-x: auto !important;">
            <div v-for="src in works" :key="src"
              class="relative snap-center flex-shrink-0 w-[85vw] sm:w-[70vw] aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/70 border border-white/10 transition">
              <img :src="src" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
                loading="lazy" decoding="async" :sizes="'(max-width: 768px) 85vw, 400px'" @click="open(src)" />
            </div>
          </div>
        </div>

        <!-- Desktop: 3x3 九宫格（无 3D 倾斜，稳定呈现） -->
        <div class="hidden md:block">
          <div class="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/70 border border-white/10">
            <div class="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-2">
              <div v-for="src in works" :key="src" class="relative rounded-lg bg-emerald-400/20 overflow-hidden">
                <img :src="src" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
                  loading="lazy" decoding="async" :sizes="'(max-width: 1024px) 33vw, 320px'" @click="open(src)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 灯箱（支持下滑关闭） -->
    <teleport to="body">
      <div v-if="lightbox" class="fixed inset-0 z-[60] backdrop-blur-sm flex items-center justify-center p-4"
        @click="close" :style="{ backgroundColor: `rgba(0,0,0,${bgAlpha})` }" @touchstart.passive="onTs"
        @touchmove.prevent="onTm" @touchend.passive="onTe">
        <div class="relative" :style="{ transform: offset ? `translateY(${offset}px)` : '' }" @click.stop>
          <img :src="lightbox" alt="preview"
            class="max-w-[95vw] max-h-[85vh] rounded-lg shadow-xl border border-white/10" />
          <button
            class="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg flex items-center justify-center backdrop-blur-sm border border-white/20"
            @click="close">×</button>
        </div>
      </div>
    </teleport>
  </div>
</template>
