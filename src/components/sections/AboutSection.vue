<script setup lang="ts">
import { ref } from 'vue'

interface FeatureCard { icon:string; title:string; brief:string; full:string; img?:string; images?:string[] }

const featureCards: FeatureCard[] = [
  { icon:'🔌', title:'焊接实训', brief:'专业设备，深入教学，体验乐趣', full:`优秀的设计搭配一流的焊工，让你的设计落地生根。\n在这里，我们有专业的设备和深入的教学，快人一步，体验焊接的乐趣，收获成功的喜悦。`},
  { icon:'🏆', title:'科技比赛', brief:'备赛成长，完赛收获，平台支持', full:`在备赛中学习，在比赛时成长，在完赛后收获。\n我们为你搭建比赛的平台，帮你你在比赛中提高，让你拿得了奖评得了优！` },
  { icon:'🧑‍🏫', title:'软硬件教学', brief:'C语言、电路入门，乐趣与成长', full:`C语言乏力、电路吃力？别怕，我们来\nC语言教学、pcb设计教学……我们带你入门，帮你找回乐趣，找到提高的方向` },
  { icon:'📝', title:'PCB设计', brief:'想法落地，收获你的第一块板', full:`声控灯？遥控车？你的千奇百怪的想法，PCB来帮你解决\n了解PCB的渊源，掌握PCB的简单设计，学习基础的应用电路。收获你的第一块印刷电路板` },
  { icon:'🛠️', title:'嵌入式工程', brief:'单片机入门，项目驱动成长', full:`入了嵌入式，一天饿两顿（不是）\n你是否听过学长学姐告诉你学学51单片机，嵌入入门不是梦？学吧，学完51玩32，苦海无涯岸无边啊！如果你对未来有更进一步的相法，期待与你共会` ,img:'/features/a.jpg'},
  { icon:'🎉', title:'团队活动', brief:'劳逸结合，丰富团建，温暖团队', full:`劳逸结合是我们的追求，合格的部门必须要丰富的团活！\n初见时羞涩的我们，团建时燃烧的热情（还挺应景，第一次吃的烤肉），男生节女生节蓄谋已久的惊喜，都是我们团队的注脚！` }
]

const slideIdx = ref<number[]>(featureCards.map(()=>0))
function nextSlide(i:number){ const c = featureCards[i].images; if(!c) return; slideIdx.value[i] = (slideIdx.value[i]+1)%c.length }
function prevSlide(i:number){ const c = featureCards[i].images; if(!c) return; slideIdx.value[i] = (slideIdx.value[i]-1+c.length)%c.length }
function goSlide(i:number, idx:number){ const c = featureCards[i].images; if(!c) return; slideIdx.value[i] = idx }

const touchStartX = ref(0)
const touchDeltaX = ref(0)
function onTouchStart(e:TouchEvent){ touchStartX.value = e.touches[0].clientX; touchDeltaX.value = 0 }
function onTouchMove(e:TouchEvent){ touchDeltaX.value = e.touches[0].clientX - touchStartX.value }
function onTouchEnd(i:number){ const c = featureCards[i].images; if(!c) return; const dx = touchDeltaX.value; if(Math.abs(dx)>40){ dx<0?nextSlide(i):prevSlide(i) }; touchStartX.value=0; touchDeltaX.value=0 }

const selectedCard = ref<number | null>(null)
function toggleCard(i: number) { selectedCard.value = selectedCard.value === i ? null : i }

// 展开/收起平滑动画（高度自适应 + 缩放 + 透明 + 改进缓动）
function enter(el: Element) {
  const e = el as HTMLElement
  e.style.willChange = 'height, opacity, transform'
  e.style.overflow = 'hidden'
  e.style.height = '0px'
  e.style.opacity = '0'
  e.style.transformOrigin = 'top center'
  e.style.transform = 'scale(0.98)'
  // 触发回流
  void e.offsetHeight
  const h = e.scrollHeight
  // 使用更自然的缓动曲线
  e.style.transition = 'height .48s cubic-bezier(.34,.64,.36,1), opacity .36s cubic-bezier(.25,.46,.45,.94), transform .48s cubic-bezier(.34,.64,.36,1)'
  e.style.height = h + 'px'
  e.style.opacity = '1'
  e.style.transform = 'scale(1)'
}

function afterEnter(el: Element){
  const e = el as HTMLElement
  e.style.height = 'auto'
  e.style.overflow = ''
  e.style.willChange = ''
  e.style.transition = ''
}

function leave(el: Element){
  const e = el as HTMLElement
  e.style.willChange = 'height, opacity, transform'
  e.style.overflow = 'hidden'
  const h = e.scrollHeight
  e.style.height = h + 'px'
  e.style.opacity = '1'
  e.style.transformOrigin = 'top center'
  // 强制回流
  void e.offsetHeight
  // 收起使用稍快但有回弹感的曲线
  e.style.transition = 'height .36s cubic-bezier(.68,.12,.47,.98), opacity .28s cubic-bezier(.76,.04,.46,.75), transform .36s cubic-bezier(.68,.12,.47,.98)'
  e.style.height = '0px'
  e.style.opacity = '0'
  e.style.transform = 'scale(.985)'
}

function afterLeave(el: Element){
  const e = el as HTMLElement
  e.style.willChange = ''
  e.style.transition = ''
  e.style.transform = ''
}
</script>

<template>
  <div class="relative px-4 sm:px-5 py-14 sm:py-16">
    <div class="w-full max-w-screen-lg mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center">关于电子俱乐部</h2>
      <p class="mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0">
        我们是校园里的技术共同体：我们可以让灵感变成作品，可以让知识得以传递，让成长默默发生
      </p>
      <p class="mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0">
        这里有工程视角，也有人际交往；有代码与电路，也有内容与组织。
      </p>
      <div class="mt-5 sm:mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
        <span class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">好奇</span>
        <span class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">协作</span>
        <span class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">责任心</span>
        <span class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">发展</span>
      </div>
      <div class="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        <div v-for="(f, i) in featureCards" :key="f.title" role="button" tabindex="0" :aria-expanded="selectedCard === i" @click="toggleCard(i)" @keydown.enter.prevent="toggleCard(i)"
          class="group relative rounded-xl border border-white/10 bg-white/5 p-4 transition overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400/50 cursor-pointer flex flex-col" :class="[ selectedCard === i ? 'sm:col-span-3 col-span-2 border-emerald-400/40 bg-gradient-to-br from-emerald-900/40 to-cyan-900/30 shadow-[0_0_0_1px_rgba(16,185,129,0.3),0_6px_28px_-8px_rgba(16,185,129,0.35)]' : '' ]">
          <div v-if="selectedCard !== i" class="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-200 tracking-wider opacity-80 group-hover:opacity-100">点击</div>
          <div class="text-2xl">{{ f.icon }}</div>
          <div class="mt-2 font-semibold flex items-center gap-2">
            <span>{{ f.title }}</span>
            <span class="text-xs text-emerald-300/70 transition-transform" :class="selectedCard === i ? 'rotate-45' : ''">➕</span>
          </div>
          <div class="text-xs text-emerald-100/80 mt-1" v-if="selectedCard !== i">{{ f.brief }}</div>
          <!-- 使用 Transition 包裹可展开区域，替换原来的 max-height 过渡 -->
          <Transition @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
            <div v-show="selectedCard === i" class="mt-3 text-xs sm:text-sm leading-relaxed text-emerald-50/90 space-y-2 pr-1">
              <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div class="flex-1 whitespace-pre-line">{{ f.full }}</div>
                <div v-if="f.img && !f.images" class="w-full sm:w-40 md:w-48 aspect-video sm:aspect-[3/4] relative rounded-lg overflow-hidden border border-white/10 bg-white/5">
                  <img :src="f.img" :alt="f.title + ' 展示图'" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 mix-blend-overlay"></div>
                </div>
                <div v-else-if="f.images" class="relative w-full sm:w-56 md:w-60 aspect-[5/4] sm:aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-white/5 select-none" @touchstart.passive="onTouchStart($event)" @touchmove.passive="onTouchMove($event)" @touchend.passive="onTouchEnd(i)">
                  <div class="absolute inset-0 flex transition-transform duration-400 ease-out" :style="{ transform: `translateX(calc(-${slideIdx[i]}*100% + ${touchDeltaX}px))` }">
                    <div v-for="(img,si) in f.images" :key="img" class="shrink-0 w-full h-full relative">
                      <img :src="img" :alt="f.title + ' 图' + (si+1)" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                      <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 mix-blend-overlay"></div>
                    </div>
                  </div>
                  <button type="button" @click.stop="prevSlide(i)" aria-label="上一张" class="absolute top-1/2 -translate-y-1/2 left-1.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-emerald-100/80 hover:bg-black/55 active:scale-95">
                    <span class="text-xl leading-none mb-0.5">‹</span>
                  </button>
                  <button type="button" @click.stop="nextSlide(i)" aria-label="下一张" class="absolute top-1/2 -translate-y-1/2 right-1.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-emerald-100/80 hover:bg-black/55 active:scale-95">
                    <span class="text-xl leading-none mb-0.5">›</span>
                  </button>
                  <div class="absolute bottom-1.5 left-0 right-0 flex justify-center gap-1">
                    <button v-for="(_,si) in f.images" :key="'dot'+si" type="button" @click.stop="goSlide(i,si)" class="h-1.5 rounded-full transition-all" :class="slideIdx[i]===si ? 'w-5 bg-gradient-to-r from-emerald-400 to-cyan-400' : 'w-2 bg-white/30 hover:bg-white/50'" />
                  </div>
                </div>
              </div>
              <div class="pt-1 flex justify-end text-[10px] text-emerald-300/70">再次点击收起</div>
            </div>
          </Transition>
          <div v-if="selectedCard !== i" class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-400/5 to-cyan-400/5"></div>
        </div>
      </div>
    </div>
  </div>
</template>
