<script setup lang="ts">
// @ts-ignore: JoinForm/JoinGlow 仅在模板中使用
import JoinForm from './JoinForm.vue'
import JoinGlow from './JoinGlow.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface FeatureCard { icon:string; title:string; brief:string; full:string; img?:string; images?:string[] }
const featureCards: FeatureCard[] = [
  { icon:'🔌', title:'焊接实训', brief:'专业设备，深入教学，体验乐趣', full:`优秀的设计搭配一流的焊工，让你的设计落地生根。\n在这里，我们有专业的设备和深入的教学，快人一步，体验焊接的乐趣，收获成功的喜悦。`},
  { icon:'🏆', title:'科技比赛', brief:'备赛成长，完赛收获，平台支持', full:`在备赛中学习，在比赛时成长，在完赛后收获。\n我们为你搭建比赛的平台，帮你你在比赛中提高，让你拿得了奖评得了优！` },
  { icon:'🧑‍🏫', title:'软硬件教学', brief:'C语言、电路入门，乐趣与成长', full:`C语言乏力、电路吃力？别怕，我们来\nC语言教学、pcb设计教学……我们带你入门，帮你找回乐趣，找到提高的方向` },
  { icon:'📝', title:'PCB设计', brief:'想法落地，收获你的第一块板', full:`声控灯？遥控车？你的千奇百怪的想法，PCB来帮你解决\n了解PCB的渊源，掌握PCB的简单设计，学习基础的应用电路。收获你的第一块印刷电路板` },
  { icon:'🛠️', title:'嵌入式工程', brief:'单片机入门，项目驱动成长', full:`入了嵌入式，一天饿两顿（不是）\n你是否听过学长学姐告诉你学学51单片机，嵌入入门不是梦？学吧，学完51玩32，苦海无涯岸无边啊！如果你对未来有更进一步的相法，期待与你共会` ,img:'/features/a.jpg'},
  { icon:'🎉', title:'团队活动', brief:'劳逸结合，丰富团建，温暖团队', full:`劳逸结合是我们的追求，合格的部门必须要丰富的团活！\n初见时羞涩的我们，团建时燃烧的热情（还挺应景，第一次吃的烤肉），男生节女生节蓄谋已久的惊喜，都是我们团队的注脚！` }
]
// 轮播索引数组
const slideIdx = ref<number[]>(featureCards.map(()=>0))
function nextSlide(i:number){ const c = featureCards[i].images; if(!c) return; slideIdx.value[i] = (slideIdx.value[i]+1)%c.length }
function prevSlide(i:number){ const c = featureCards[i].images; if(!c) return; slideIdx.value[i] = (slideIdx.value[i]-1+c.length)%c.length }
function goSlide(i:number, idx:number){ const c = featureCards[i].images; if(!c) return; slideIdx.value[i] = idx }
// 触摸滑动
const touchStartX = ref(0)
const touchDeltaX = ref(0)
function onTouchStart(e:TouchEvent){ touchStartX.value = e.touches[0].clientX; touchDeltaX.value = 0 }
function onTouchMove(e:TouchEvent){ touchDeltaX.value = e.touches[0].clientX - touchStartX.value }
function onTouchEnd(i:number){ const c = featureCards[i].images; if(!c) return; const dx = touchDeltaX.value; if(Math.abs(dx)>40){ dx<0?nextSlide(i):prevSlide(i) }; touchStartX.value=0; touchDeltaX.value=0 }

const joinRef = ref<HTMLElement | null>(null)
const joinInView = ref(false)
const burstKey = ref(0)
let observer: IntersectionObserver | null = null
const selectedCard = ref<number | null>(null)
function toggleCard(i: number) { selectedCard.value = selectedCard.value === i ? null : i }

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const e = entries[0]
      if (!e) return
      if (e.isIntersecting) {
        joinInView.value = true
        burstKey.value++ // 每次进入触发一次爆裂
      } else {
        joinInView.value = false
      }
    },
    { threshold: 0.35 }
  )
  if (joinRef.value) observer.observe(joinRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <section class="bg-gradient-to-b from-emerald-950 via-slate-950 to-black text-white">
    <!-- 1. Hero -->
    <div class="relative min-h-screen flex items-center justify-center px-4 sm:px-5 py-14 sm:py-16">

      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -left-20 size-[40rem] rounded-full bg-emerald-400/10 blur-3xl"></div>
        <div class="absolute -bottom-40 -right-20 size-[40rem] rounded-full bg-cyan-400/10 blur-3xl"></div>
      </div>

      <div class="w-full max-w-screen-md mx-auto text-center">
        <div class="mb-8 sm:mb-10 flex items-center justify-center gap-4 sm:gap-6">
          <div class="flex items-center justify-center">
            <div class="inline-flex items-center rounded-md ring-1 ring-white/20 bg-white/5 px-3 py-2 shadow-sm">
              <img src="/logo.svg" alt="学校 logo" class="h-10 sm:h-14 w-auto object-contain select-none" decoding="async"
                loading="eager" fetchpriority="high" />
            </div>
          </div>
          <div class="flex items-center justify-center">
            <img src="/eclub_logo.jpg" alt="电子俱乐部 logo"
              class="h-16 w-16 sm:h-24 sm:w-24 rounded-full object-cover ring-1 ring-white/20 bg-white/5 select-none shadow-lg"
              decoding="async" loading="eager" fetchpriority="high" />
          </div>
        </div>
        <h1 class="text-[9.5vw] leading-[1.06] sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          电子俱乐部
          <span
            class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">探索·创造·连接</span>
        </h1>
        <p class="mt-3 sm:mt-6 text-emerald-100/90 text-[15px] sm:text-lg leading-relaxed px-1 sm:px-2">
          在这里，我们把点子变成作品：硬件黑客、AI 应用、Web 全栈、小程序、嵌入式……
          一起组队做有趣的项目，参加挑战赛，用技术照亮校园生活。
        </p>
        <div class="mt-7 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span
            class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">院级部门</span>
          <span
            class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">跨学科</span>
          <span
            class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">传播知识</span>
          <span
            class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">成长互助</span>
        </div>
      </div>

      <div
        class="absolute left-1/2 -translate-x-1/2 text-emerald-200/80 text-xs sm:text-sm animate-bounce bottom-[calc(env(safe-area-inset-bottom)+1rem)]">
        向下滚动</div>
    </div>

    <!-- 2. 部门介绍 -->
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
          <span
            class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">好奇</span>
          <span
            class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">协作</span>
          <span
            class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">责任心</span>
          <span
            class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">发展</span>
        </div>

        <div class="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          <div v-for="(f, i) in featureCards" :key="f.title" role="button" tabindex="0"
            :aria-expanded="selectedCard === i" @click="toggleCard(i)" @keydown.enter.prevent="toggleCard(i)"
            class="group relative rounded-xl border border-white/10 bg-white/5 p-4 transition overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400/50 cursor-pointer flex flex-col"
            :class="[
              selectedCard === i ? 'sm:col-span-3 col-span-2 border-emerald-400/40 bg-gradient-to-br from-emerald-900/40 to-cyan-900/30 shadow-[0_0_0_1px_rgba(16,185,129,0.3),0_6px_28px_-8px_rgba(16,185,129,0.35)]' : ''
            ]">
            <!-- 提示角标 -->
            <div v-if="selectedCard !== i"
              class="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-200 tracking-wider opacity-80 group-hover:opacity-100">
              点击</div>
            <div class="text-2xl">{{ f.icon }}</div>
            <div class="mt-2 font-semibold flex items-center gap-2">
              <span>{{ f.title }}</span>
              <span class="text-xs text-emerald-300/70 transition-transform"
                :class="selectedCard === i ? 'rotate-45' : ''">➕</span>
            </div>
            <div class="text-xs text-emerald-100/80 mt-1" v-if="selectedCard !== i">{{ f.brief }}</div>
            <!-- 展开内容 -->
            <div
              class="mt-3 text-xs sm:text-sm leading-relaxed text-emerald-50/90 space-y-2 pr-1 overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out"
              :class="selectedCard === i ? 'opacity-100 max-h-[560px] sm:max-h-[500px]' : 'opacity-0 max-h-0'"
            >
              <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div class="flex-1 whitespace-pre-line">{{ f.full }}</div>
                <div v-if="f.img && !f.images" class="w-full sm:w-40 md:w-48 aspect-video sm:aspect-[3/4] relative rounded-lg overflow-hidden border border-white/10 bg-white/5">
                  <img :src="f.img" :alt="f.title + ' 展示图'" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 mix-blend-overlay"></div>
                </div>
                <div v-else-if="f.images" class="relative w-full sm:w-56 md:w-60 aspect-[5/4] sm:aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-white/5 select-none"
                  @touchstart.passive="onTouchStart($event)" @touchmove.passive="onTouchMove($event)" @touchend.passive="onTouchEnd(i)">
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
            <!-- 渐变遮罩（未展开时） -->
            <div v-if="selectedCard !== i"
              class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-400/5 to-cyan-400/5">
            </div>
          </div>
        </div>
        <!-- 移除原全屏详情浮层 -->

      </div>
    </div>

    <!-- 3. 部门优势 -->
    <div class="relative px-4 sm:px-5 py-14 sm:py-16 bg-black/20 border-t border-white/5">
      <div class="w-full max-w-screen-lg mx-auto">
        <div class="inline-block relative">
          <h2
            class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            我们的优势</h2>
          <div class="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
        </div>
        <p class="mt-4 sm:mt-5 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed px-1 sm:px-0">
          老牌部门+社团，助你快速成长
        </p>

        <div class="mt-8 relative">
          <!-- 背景装饰 -->
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-1/3 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 right-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>

          <div class="flex flex-col gap-5">
            <!-- 第一行：左文右图 -->
            <div class="flex flex-col md:flex-row gap-4 md:gap-6">
              <div
                class="flex-1 bg-gradient-to-br from-emerald-900/30 to-slate-900/30 rounded-xl border border-white/10 p-5 md:p-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0 p-3 bg-emerald-400/15 rounded-lg">
                    <span class="text-2xl">🚀</span>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-bold text-lg text-emerald-200">项目落地与实战协作</h3>
                  </div>
                </div>
              </div>

              <div
                class="flex-1 bg-gradient-to-br from-cyan-900/30 to-slate-900/30 rounded-xl border border-white/10 p-5 flex items-center justify-center">
                <div class="text-center">
                  <div class="inline-block p-4 rounded-full bg-cyan-400/15 mb-3">
                    <span class="text-3xl">🏆</span>
                  </div>
                  <h3 class="font-bold text-cyan-200">竞赛支持</h3>
                  <p class="mt-1 text-xs text-cyan-100/80">资料/报名指导</p>
                </div>
              </div>
            </div>

            <!-- 第二行：卡片栅格 -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div
                class="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition">
                <div class="text-2xl mb-2">🧭</div>
                <div class="font-semibold">有我们在</div>
                <div class="text-xs text-emerald-100/80 mt-1">学长学姐 1v1 指导</div>
              </div>

              <div
                class="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition">
                <div class="text-2xl mb-2">🔌</div>
                <div class="font-semibold">设备与场地</div>
                <div class="text-xs text-emerald-100/80 mt-1">部门仓库&办公室</div>
              </div>

              <div
                class="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition">
                <div class="text-2xl mb-2">📣</div>
                <div class="font-semibold">校园影响力</div>
                <div class="text-xs text-emerald-100/80 mt-1">作品展示与传播</div>
              </div>
            </div>

            <!-- 第三行：突出显示 -->
            <div
              class="bg-gradient-to-r from-emerald-900/40 via-cyan-900/40 to-emerald-900/40 rounded-xl border border-white/10 p-4 sm:p-5">
              <div class="flex flex-col sm:flex-row items-center gap-4">
                <div
                  class="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-black text-3xl">
                  💡
                </div>
                <div class="flex-1 text-center sm:text-left">
                  <h3 class="font-bold text-lg">创新氛围与成长环境</h3>
                  <p class="mt-1 text-sm text-emerald-100/90">我们相信每位成员都有无限潜力，电子俱乐部提供探索与实践的平台，让创意不断碰撞，让知识开花结果。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. 我们对新成员的希望与需求 -->
    <div class="relative px-4 sm:px-5 py-14 sm:py-16 bg-black/30">
      <div class="w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-6 sm:gap-10">
        <div>
          <h3 class="text-xl sm:text-2xl font-bold">我们希望你</h3>
          <ul class="mt-3 sm:mt-4 space-y-2 text-emerald-100/85 text-[15px] leading-relaxed">
            <li>• 对技术或设计保持好奇心，愿意动手探索</li>
            <li>• 愿意为学校工作出力（我们可是正经的学生会哦）</li>
            <li>• 乐于沟通、保持开放</li>
            <li>• 不设门槛，零基础亦可，只要愿意持续学习</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl sm:text-2xl font-bold">我们的小部门</h3>
          <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">技术部</div>
            <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">团支部</div>
            <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">常务部</div>
            <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">外联部</div>
            <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">部长部
            </div>
            <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 relative overflow-hidden">
              <span class="relative z-10">隐藏款</span>
              <span
                class="absolute inset-0 flex items-center justify-center text-xl font-bold text-cyan-400/10 select-none">MEG</span>
            </div>
          </div>
          <div class="mt-5">
            <a href="#join"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold active:scale-[0.99]">
              现在报名
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. 我们做什么（项目墙） -->
    <div class="relative px-4 sm:px-5 py-14 sm:py-16 bg-black/40 border-t border-white/5">
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
        </div>
        <div class="order-1 md:order-2">
          <div class="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/70 border border-white/10">
            <div class="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-2">
              <div class="relative rounded-lg bg-emerald-400/20 overflow-hidden">
                <img src="/works/e.jpg" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover" loading="lazy"
                  decoding="async" />
              </div>

              <div class="relative rounded-lg bg-cyan-400/20 overflow-hidden">
                <img src="/works/b.jpg" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover" loading="lazy"
                  decoding="async" />
              </div>
              <div class="relative rounded-lg bg-emerald-400/20 overflow-hidden">
                <img src="/works/c.jpg" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover" loading="lazy"
                  decoding="async" />
              </div>
              <div class="relative rounded-lg bg-cyan-400/20 overflow-hidden">
                <img src="/works/d.jpg" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover" loading="lazy"
                  decoding="async" />
              </div>
              <div class="relative rounded-lg bg-emerald-400/20 overflow-hidden">
                <img src="/works/a.jpg" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover" loading="lazy"
                  decoding="async" />
              </div>
              <div class="relative rounded-lg bg-cyan-400/20 overflow-hidden">
                <img src="/works/f.jpg" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div class="relative rounded-lg bg-emerald-400/20 overflow-hidden">
                <img src="/works/g.jpg" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <!-- <div class="relative rounded-lg bg-cyan-400/20 overflow-hidden">
                <img src="/works/h.jpg" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div class="relative rounded-lg bg-emerald-400/20 overflow-hidden">
                <img src="/works/i.jpg" alt="项目作品展示" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                </div> -->
            </div>
          </div>
        </div>
 


      </div>
    </div>

    <!-- 6. 学习路径与生态 -->
    <div class="relative px-4 sm:px-5 py-14 sm:py-16">
      <div class="w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
        <div>
          <div
            class="relative aspect-video rounded-xl overflow-hidden bg-slate-900/70 border border-white/10 flex items-center justify-center">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_60%)]">
            </div>
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.2),transparent_60%)]">
            </div>
            <div class="relative z-10 text-center">
              <div class="text-5xl font-black tracking-tight">
                0 → 1 → ∞
              </div>
              <div class="mt-3 text-xs sm:text-sm text-emerald-100/80">每周例会 / 部长带队</div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold">别担心起点，我们一起出发</h2>
          <p class="mt-3 sm:mt-4 text-emerald-100/80 leading-relaxed text-[15px] sm:text-base">
            每位新成员会得到学习路径建议与 mentor 指导，前期也会提供项目模板与工具链，快速上手并构建自信。
          </p>
          <div class="mt-4 sm:mt-6 grid grid-cols-2 gap-3 text-sm">
            <div class="px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20"> / 小程序</div>
            <div class="px-3 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">AI / CV / NLP</div>
            <div class="px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20">嵌入式 / IoT</div>
            <div class="px-3 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">宣发 / 运营</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 7. 活动与荣誉（时间线/徽章） -->
    <div class="relative px-4 sm:px-5 py-14 sm:py-16 bg-black/30">
      <div class="w-full max-w-screen-lg mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold text-center">活动与荣誉</h2>
        <div class="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition">
            <div class="text-3xl">🎉</div>
            <div class="mt-2 text-sm">快乐团建时光</div>
          </div>
          <div class="rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition">
            <div class="text-3xl">🧪</div>
            <div class="mt-2 text-sm">大佬云集</div>
          </div>
          <div class="rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition">
            <div class="text-3xl">📢</div>
            <div class="mt-2 text-sm">院内教学</div>
          </div>
          <div class="rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition">
            <div class="text-3xl">🌟</div>
            <div class="mt-2 text-sm">十佳社团</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 8. 加入我们（表单预告与二维码） -->
    <div id="join" ref="joinRef"
      class="relative px-4 sm:px-5 py-16 sm:py-20 bg-gradient-to-b from-black/40 to-black overflow-hidden">
      <!-- 五彩粒子特效层（仅在该区显示） -->
      <JoinGlow :active="joinInView" :burst-key="burstKey" />

      <div class="relative z-10 w-full max-w-screen-md mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
          加入我们，<span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">一起</span>把灵感上线
        </h2>
        <p class="text-lg sm:text-xl mt-3 text-white font-semibold">
          让知识开花
        </p>
        <p class="mt-3 sm:mt-4 text-sm sm:text-base text-emerald-100/80 max-w-md mx-auto px-1">
          扫码进群 / 关注学校官方通知 / 直接填写报名表
        </p>
        <div class="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6">
          <div class="flex flex-col items-center">
            <div class="relative group">
              <!-- 外框：改为白色系柔和发光，轻微冷暖渐变保持与整体色调和谐 -->
              <div
                class="p-[2px] rounded-2xl bg-[linear-gradient(140deg,rgba(255,255,255,0.85),rgba(255,255,255,0.55),rgba(255,255,255,0.78))] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_0_22px_4px_rgba(255,255,255,0.55),0_6px_28px_-8px_rgba(16,185,129,0.25)]">
                <div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative">
                  <img src="/group_qr.jpg" alt="官方迎新群二维码"
                    class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.015]"
                    decoding="async" loading="lazy" />
                  <div class="pointer-events-none absolute inset-0 ring-1 ring-black/5"></div>
                  <!-- 轻微内发光，加一点和页面呼应的细彩色雾化 -->
                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-60 bg-[radial-gradient(circle_at_25%_30%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(34,211,238,0.16),transparent_60%)]">
                  </div>
                </div>
              </div>
              <!-- 悬停时外圈柔光扩散 -->
              <div
                class="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.45),transparent_70%)]">
              </div>
            </div>
            <div class="mt-2 text-[10px] sm:text-xs text-emerald-100/80 tracking-wide">
              官方迎新群
            </div>
          </div>
            <div class="flex flex-col items-center">
              <div class="relative group">
              <!-- 外框：QQ二维码用蓝青渐变，更有辨识度 -->
              <div
                class="p-[2.5px] rounded-2xl bg-gradient-to-tr from-cyan-400/80 via-emerald-400/60 to-white/70 shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_0_22px_4px_rgba(34,211,238,0.18),0_6px_28px_-8px_rgba(16,185,129,0.18)]">
                <div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative">
                <img src="/qq_qr.jpg" alt="官Q二维码"
                  class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  decoding="async" loading="lazy" />
                <div class="pointer-events-none absolute inset-0 ring-1 ring-cyan-400/10"></div>
                <!-- 内发光：蓝青色呼应QQ主题 -->
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-70 bg-[radial-gradient(circle_at_25%_30%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(16,185,129,0.14),transparent_60%)]">
                </div>
                </div>
              </div>
                <!-- 外发光：蓝青色，常驻且悬停时增强（更强烈） -->
                <div
                class="pointer-events-none absolute -inset-3 rounded-2xl opacity-80 group-hover:opacity-100 transition duration-500 blur-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.55),rgba(16,185,129,0.25),transparent_80%)]">
              </div>
              </div>
              <div class="mt-2 text-[10px] sm:text-xs text-cyan-200/80 tracking-wide font-semibold">
              电子俱乐部官方QQ
              </div>
            </div>
        </div>
      </div>

      <div class="relative z-10 mt-9 sm:mt-12">
        <JoinForm />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 淡入动画仍可复用其它区 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .22s ease
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0
}

/* 卡片展开过渡自定义（已用 utility） */
</style>
