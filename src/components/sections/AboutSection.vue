<script setup lang="ts">
import { ref } from 'vue'

interface FeatureCard { icon:string; title:string; brief:string; full:string; img?:string; images?:string[] }

const featureCards: FeatureCard[] = [
  { icon:'🔌', title:'焊接实训', brief:'专业设备，深入教学，体验乐趣', full:`优秀的设计搭配一流的焊工，让你的设计落地生根。\n在这里，我们有专业的设备和深入的教学，快人一步，体验焊接的乐趣，收获成功的喜悦。`,img:'/features/b.jpg'},
  { icon:'🏆', title:'科技比赛', brief:'备赛成长，完赛收获，平台支持', full:`在备赛中学习，在比赛时成长，在完赛后收获。\n我们为你搭建比赛的平台，帮你你在比赛中提高，让你拿得了奖评得了优！`,images:['/features/c.jpg','/features/d.jpg'] },
  { icon:'🧑‍🏫', title:'软硬件教学', brief:'C语言、电路入门，乐趣与成长', full:`C语言乏力、电路吃力？别怕，我们来\nC语言教学、pcb设计教学……我们带你入门，帮你找回乐趣，找到提高的方向`,images:['/features/e.jpg','/features/i.jpg'] },
  { icon:'📝', title:'PCB设计', brief:'想法落地，收获你的第一块板', full:`声控灯？遥控车？你的千奇百怪的想法，PCB来帮你解决\n了解PCB的渊源，掌握PCB的简单设计，学习基础的应用电路。收获你的第一块印刷电路板`,images:['/features/f.jpg','/features/g.jpg']  },
  { icon:'🛠️', title:'嵌入式工程', brief:'单片机入门，项目驱动成长', full:`入了嵌入式，一天饿两顿（不是）\n你是否听过学长学姐告诉你学学51单片机，嵌入入门不是梦？学吧，学完51玩32，苦海无涯岸无边啊！如果你对未来有更进一步的相法，期待与你共会`, img:'/features/a.jpg' },
  { icon:'🎉', title:'团队活动', brief:'劳逸结合，丰富团建，温暖团队', full:`劳逸结合是我们的追求，合格的部门必须要丰富的团活！\n初见时羞涩的我们，团建时燃烧的热情（还挺应景，第一次吃的烤肉），男生节女生节"蓄谋已久"的惊喜，都是我们团队的注脚！`,images:['/features/h.jpg','/features/j.jpg','/features/k.jpg','/features/l.jpg'] }
]

const selectedCard = ref<number | null>(null)
function toggleCard(i: number) { selectedCard.value = selectedCard.value === i ? null : i }

// 图片灯箱
const lightbox = ref<string|null>(null)
function openImg(src:string){ lightbox.value = src }
function closeImg(){ lightbox.value = null }

// 展开/收起动画
function enter(el: Element) { const e = el as HTMLElement; e.style.overflow='hidden'; e.style.height='0'; e.style.opacity='0'; void e.offsetHeight; const h=e.scrollHeight; e.style.transition='height .42s cubic-bezier(.34,.64,.36,1), opacity .3s ease'; e.style.height=h+'px'; e.style.opacity='1' }
function afterEnter(el: Element){ const e=el as HTMLElement; e.style.height='auto'; e.style.overflow='' }
function leave(el: Element){ const e=el as HTMLElement; e.style.overflow='hidden'; const h=e.scrollHeight; e.style.height=h+'px'; void e.offsetHeight; e.style.transition='height .32s cubic-bezier(.68,.12,.47,.98), opacity .24s ease'; e.style.height='0'; e.style.opacity='0' }
function afterLeave(el: Element){ const e=el as HTMLElement; e.style.overflow='' }
</script>

<template>
  <div class="relative px-4 sm:px-5 py-14 sm:py-16">
    <div class="w-full max-w-screen-lg mx-auto" v-reveal>
      <h2 class="text-2xl sm:text-3xl font-bold text-center" v-reveal:"pop">关于电子俱乐部</h2>
      <p class="mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0" v-reveal:"up" :reveal="{delay:80}">我们是校园里的技术共同体：我们可以让灵感变成作品，可以让知识得以传递，让成长默默发生</p>
      <p class="mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0" v-reveal:"up" :reveal="{delay:140}">这里有工程视角，也有人际交往；有代码与电路，也有内容与组织。</p>
      <div class="mt-5 sm:mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm" v-reveal:"fade" :reveal="{delay:180}">
        <span class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30">好奇</span>
        <span class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30">协作</span>
        <span class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30">责任心</span>
        <span class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30">发展</span>
      </div>
      <div class="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        <div
          v-for="(c,i) in featureCards"
          :key="c.title"
          class="group relative rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-3 sm:p-4 hover:border-emerald-400/30 hover:bg-slate-800/40 transition cursor-pointer"
          :aria-expanded="selectedCard===i"
          role="group"
          v-reveal:"pop"
          :reveal="{delay: 220 + i*70}"
          @click="toggleCard(i)"
        >
          <div class="flex items-start gap-2 sm:gap-3">
            <span class="text-xl sm:text-2xl leading-none">{{ c.icon }}</span>
            <span class="flex-1 min-w-0">
              <span class="font-semibold text-sm sm:text-base flex items-center gap-1">
                {{ c.title }}
                <span class="text-emerald-300/80 text-xs" v-if="selectedCard===i">▲</span>
                <span class="text-emerald-300/50 text-xs" v-else>▼</span>
              </span>
              <span class="block mt-1 text-[11px] sm:text-xs text-emerald-100/70 line-clamp-2 group-hover:text-emerald-100/90 transition" :class="{'opacity-0': selectedCard===i}">{{ c.brief }}</span>
            </span>
          </div>
          <Transition @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
            <div v-if="selectedCard===i" class="mt-3 text-[11px] sm:text-xs leading-relaxed text-emerald-100/85" @click.stop>
              <div v-if="c.images && c.images.length" class="mb-2 grid grid-cols-2 gap-1.5">
                <img
                  v-for="(img, idx) in c.images"
                  :key="idx"
                  :src="img"
                  :alt="c.title + ' 图 ' + (idx+1)"
                  class="h-24 w-full object-cover rounded-md border border-white/10 hover:border-emerald-400/40 hover:brightness-110 active:scale-[0.97] transition cursor-pointer"
                  loading="lazy"
                  decoding="async"
                  @click.stop="openImg(img)"
                />
              </div>
              <div v-else-if="c.img" class="mb-2 overflow-hidden rounded-lg border border-white/10">
                <img :src="c.img" :alt="c.title" class="w-full h-28 object-cover hover:brightness-110 transition" loading="lazy" decoding="async" @click.stop="openImg(c.img)" />
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
  <!-- 灯箱 -->
  <teleport to="body">
    <div v-if="lightbox" class="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4" @click="closeImg">
      <img :src="lightbox" alt="preview" class="max-w-full max-h-full rounded-lg shadow-xl border border-white/10" @click.stop />
      <button class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg flex items-center justify-center backdrop-blur-sm border border-white/20" @click.stop="closeImg">×</button>
    </div>
  </teleport>
</template>

<style scoped>
/* 过渡优化：防止布局抖动 */
</style>
