<script setup lang="ts">
import { ref } from 'vue'

interface FeatureCard { icon:string; title:string; brief:string; full:string; img?:string; images?:string[] }

const featureCards: FeatureCard[] = [
  { icon:'🔌', title:'焊接实训', brief:'专业设备，深入教学，体验乐趣', full:`优秀的设计搭配一流的焊工，让你的设计落地生根。\n在这里，我们有专业的设备和深入的教学，快人一步，体验焊接的乐趣，收获成功的喜悦。`},
  { icon:'🏆', title:'科技比赛', brief:'备赛成长，完赛收获，平台支持', full:`在备赛中学习，在比赛时成长，在完赛后收获。\n我们为你搭建比赛的平台，帮你你在比赛中提高，让你拿得了奖评得了优！` },
  { icon:'🧑‍🏫', title:'软硬件教学', brief:'C语言、电路入门，乐趣与成长', full:`C语言乏力、电路吃力？别怕，我们来\nC语言教学、pcb设计教学……我们带你入门，帮你找回乐趣，找到提高的方向` },
  { icon:'📝', title:'PCB设计', brief:'想法落地，收获你的第一块板', full:`声控灯？遥控车？你的千奇百怪的想法，PCB来帮你解决\n了解PCB的渊源，掌握PCB的简单设计，学习基础的应用电路。收获你的第一块印刷电路板` },
  { icon:'🛠️', title:'嵌入式工程', brief:'单片机入门，项目驱动成长', full:`入了嵌入式，一天饿两顿（不是）\n你是否听过学长学姐告诉你学学51单片机，嵌入入门不是梦？学吧，学完51玩32，苦海无涯岸无边啊！如果你对未来有更进一步的相法，期待与你共会`, img:'/features/a.jpg' },
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
    <div class="w-full max-w-screen-lg mx-auto" v-reveal>
      <h2 class="text-2xl sm:text-3xl font-bold text-center" v-reveal:"pop">关于电子俱乐部</h2>
      <p class="mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0" v-reveal:"up" :reveal="{delay:80}">
        我们是校园里的技术共同体：我们可以让灵感变成作品，可以让知识得以传递，让成长默默发生
      </p>
      <p class="mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0" v-reveal:"up" :reveal="{delay:140}">
        这里有工程视角，也有人际交往；有代码与电路，也有内容与组织。
      </p>
      <div class="mt-5 sm:mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm" v-reveal:"fade" :reveal="{delay:180}">
        <span class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">好奇</span>
        <span class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">协作</span>
        <span class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">责任心</span>
        <span class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">发展</span>
      </div>
      <div class="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        <div
          v-for="(c,i) in featureCards"
          :key="c.title"
          class="group relative rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-3 sm:p-4 cursor-pointer select-none hover:border-emerald-400/30 hover:bg-slate-800/40 transition"
          @click="toggleCard(i)"
          :aria-expanded="selectedCard===i"
          role="button"
          v-reveal:"pop"
          :reveal="{delay: 220 + i*70}"
        >
          <div class="flex items-start gap-2 sm:gap-3">
            <div class="text-xl sm:text-2xl leading-none">{{ c.icon }}</div>
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-sm sm:text-base flex items-center gap-1">
                {{ c.title }}
                <span class="text-emerald-300/80 text-xs" v-if="selectedCard===i">▲</span>
                <span class="text-emerald-300/50 text-xs" v-else>▼</span>
              </h3>
              <p class="mt-1 text-[11px] sm:text-xs text-emerald-100/70 line-clamp-2 group-hover:text-emerald-100/90 transition" :class="{'opacity-0': selectedCard===i}">
                {{ c.brief }}
              </p>
            </div>
          </div>
          <Transition @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
            <div v-if="selectedCard===i" class="mt-3 text-[11px] sm:text-xs leading-relaxed text-emerald-100/85">
              <div v-if="c.img" class="mb-2 overflow-hidden rounded-lg border border-white/10">
                <img :src="c.img" :alt="c.title" class="w-full h-28 object-cover opacity-90 group-hover:opacity-100 transition" loading="lazy" decoding="async" />
              </div>
              <pre class="whitespace-pre-wrap font-sans">{{ c.full }}</pre>
            </div>
          </Transition>
          <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-emerald-400/30 transition" />
          <div class="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.18),transparent_60%)]" />
        </div>
      </div>
    </div>
  </div>
</template>
