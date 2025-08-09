<script setup lang="ts">
// @ts-ignore: JoinForm/JoinGlow 仅在模板中使用
import JoinForm from './JoinForm.vue'
// @ts-ignore: JoinForm/JoinGlow 仅在模板中使用
import JoinGlow from './JoinGlow.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const joinRef = ref<HTMLElement | null>(null)
const joinInView = ref(false)
const burstKey = ref(0)
let observer: IntersectionObserver | null = null

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
                    <img src="/logo.svg" alt="学校 logo" class="h-10 sm:h-14 w-auto object-contain select-none" decoding="async" loading="eager" fetchpriority="high" />
                </div>
            </div>
            <div class="flex items-center justify-center">
                <img 
                    src="/eclub_logo.jpg" 
                    alt="电子俱乐部 logo" 
                    class="h-16 w-16 sm:h-24 sm:w-24 rounded-full object-cover ring-1 ring-white/20 bg-white/5 select-none shadow-lg" 
                    decoding="async" 
                    loading="eager"
                    fetchpriority="high"
                />
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
          <span class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">好奇</span>
          <span class="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition">协作</span>
          <span class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">责任心</span>
          <span class="px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition">发展</span>
        </div>

        <div class="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          <div class="rounded-xl border border-white/10 bg-white/5 p-4 active:scale-[0.99] transition">
            <div class="text-2xl">🧑‍🏫</div>
            <div class="mt-2 font-semibold">软硬件教学</div>
            <div class="text-xs text-emerald-100/80 mt-1">基础知识分享，循序渐进</div>
          </div>
          <div class="rounded-xl border border-white/10 bg-white/5 p-4 active:scale-[0.99] transition">
            <div class="text-2xl">🔌</div>
            <div class="mt-2 font-semibold">焊接培训</div>
            <div class="text-xs text-emerald-100/80 mt-1">实操练习，掌握基本技能</div>
          </div>
          <div class="rounded-xl border border-white/10 bg-white/5 p-4 active:scale-[0.99] transition">
            <div class="text-2xl">🏆</div>
            <div class="mt-2 font-semibold">科技比赛</div>
            <div class="text-xs text-emerald-100/80 mt-1">组队参与，积累项目经验</div>
          </div>
          <div class="rounded-xl border border-white/10 bg-white/5 p-4 active:scale-[0.99] transition">
            <div class="text-2xl">🛠️</div>
            <div class="mt-2 font-semibold">嵌入式工程</div>
            <div class="text-xs text-emerald-100/80 mt-1">一起动手，完成小项目</div>
          </div>
          <div class="rounded-xl border border-white/10 bg-white/5 p-4 active:scale-[0.99] transition">
            <div class="text-2xl">📝</div>
            <div class="mt-2 font-semibold">PCB设计</div>
            <div class="text-xs text-emerald-100/80 mt-1">学习电路设计基础知识</div>
          </div>
          <div class="rounded-xl border border-white/10 bg-white/5 p-4 active:scale-[0.99] transition">
            <div class="text-2xl">🎉</div>
            <div class="mt-2 font-semibold">团队活动</div>
            <div class="text-xs text-emerald-100/80 mt-1">认识朋友，交流分享</div>
          </div>
          </div>
        
      </div>
    </div>

    <!-- 3. 部门优势 -->
    <div class="relative px-4 sm:px-5 py-14 sm:py-16 bg-black/20 border-t border-white/5">
      <div class="w-full max-w-screen-lg mx-auto">
        <div class="inline-block relative">
          <h2 class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">我们的优势</h2>
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
              <div class="flex-1 bg-gradient-to-br from-emerald-900/30 to-slate-900/30 rounded-xl border border-white/10 p-5 md:p-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0 p-3 bg-emerald-400/15 rounded-lg">
                    <span class="text-2xl">🚀</span>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-bold text-lg text-emerald-200">项目落地与实战协作</h3>
                  </div>
                </div>
              </div>
              
              <div class="flex-1 bg-gradient-to-br from-cyan-900/30 to-slate-900/30 rounded-xl border border-white/10 p-5 flex items-center justify-center">
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
              <div class="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition">
                <div class="text-2xl mb-2">🧭</div>
                <div class="font-semibold">有我们在</div>
                <div class="text-xs text-emerald-100/80 mt-1">学长学姐 1v1 指导</div>
              </div>
              
              <div class="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition">
                <div class="text-2xl mb-2">🔌</div>
                <div class="font-semibold">设备与场地</div>
                <div class="text-xs text-emerald-100/80 mt-1">部门仓库&办公室</div>
              </div>
              
              <div class="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition">
                <div class="text-2xl mb-2">📣</div>
                <div class="font-semibold">校园影响力</div>
                <div class="text-xs text-emerald-100/80 mt-1">作品展示与传播</div>
              </div>
            </div>
            
            <!-- 第三行：突出显示 -->
            <div class="bg-gradient-to-r from-emerald-900/40 via-cyan-900/40 to-emerald-900/40 rounded-xl border border-white/10 p-4 sm:p-5">
              <div class="flex flex-col sm:flex-row items-center gap-4">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-black text-3xl">
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
              <span class="absolute inset-0 flex items-center justify-center text-xl font-bold text-cyan-400/10 select-none">MEG</span>
            </div>
          </div>
          <div class="mt-5">
            <a href="#join" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold active:scale-[0.99]">
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
            从 0 到 1 完整经历：需求调研、方案设计、开发协作、部署上线。学的不止是技术，更是把事情做成的能力。
          </p>
          <ul class="mt-4 sm:mt-6 space-y-2 text-emerald-100/80 text-sm list-disc list-inside">
            <li>社团官网 / 活动报名 / 校园服务工具</li>
            <li>硬件 + 云服务的 IoT 体验</li>
            <li>AI 创意应用与 AIGC 视觉</li>
          </ul>
        </div>
        <div class="order-1 md:order-2">
          <div class="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/70 border border-white/10">
            <div class="absolute inset-0 grid grid-cols-3 gap-2 p-2">
              <div class="rounded-lg bg-emerald-400/20"></div>
              <div class="rounded-lg bg-cyan-400/20"></div>
              <div class="rounded-lg bg-emerald-400/20"></div>
              <div class="rounded-lg bg-cyan-400/20"></div>
              <div class="rounded-lg bg-emerald-400/20"></div>
              <div class="rounded-lg bg-cyan-400/20"></div>
              <div class="rounded-lg bg-emerald-400/20"></div>
              <div class="rounded-lg bg-cyan-400/20"></div>
              <div class="rounded-lg bg-emerald-400/20"></div>
            </div>
            <div class="absolute inset-x-0 bottom-0 p-3 text-center text-emerald-100/90 text-xs sm:text-sm bg-gradient-to-t from-black/60">项目墙（示意）</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6. 学习路径与生态 -->
    <div class="relative px-4 sm:px-5 py-14 sm:py-16">
      <div class="w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
        <div>
          <div class="relative aspect-video rounded-xl overflow-hidden bg-slate-900/70 border border-white/10 flex items-center justify-center">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_60%)]"></div>
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.2),transparent_60%)]"></div>
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
    <div id="join" ref="joinRef" class="relative px-4 sm:px-5 py-16 sm:py-20 bg-gradient-to-b from-black/40 to-black overflow-hidden">
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
          <div class="size-24 sm:size-28 rounded-xl bg-white/90 flex items-center justify-center text-black font-bold shadow-[0_0_30px_rgba(255,255,255,0.35)]">QR 1</div>
          <div class="size-24 sm:size-28 rounded-xl bg-white/90 flex items-center justify-center text-black font-bold shadow-[0_0_30px_rgba(255,255,255,0.35)]">QR 2</div>
        </div>
      </div>

      <div class="relative z-10 mt-9 sm:mt-12">
        <JoinForm />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 去除全局闪光，转为局部粒子光效 */
</style>
