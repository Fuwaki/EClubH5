<script setup lang="ts">
// @ts-ignore: JoinForm/JoinGlow 仅在模板中使用
import JoinForm from './JoinForm.vue'
import JoinGlow from './JoinGlow.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
// 新增：部门介绍卡片数据 & 详情状态
const featureCards = [
  { icon: '🧑‍🏫', title: '软硬件教学', brief: '基础知识分享，循序渐进', full: '在这里你可以从零开始接触编程、电子电路、工具链与协作流程。我们提供循序渐进的教学活动、知识分享会以及答疑支持，帮助你扎实打好技术底座。\n\n示例内容：\n• 每周主题讲解（如：Git、C 语言、Python 基础、焊接实践）\n• 小作业驱动式巩固\n• 老成员 Code Review 与经验分享。'},
  { icon: '🔌', title: '焊接培训', brief: '实操练习，掌握基本技能', full: '配备基础焊接工具，学长学姐现场示范，从最基础的焊点、排针、贴片，到小模块装配。通过动手练习建立对硬件的亲手感知。\n\n示例内容：\n• 安全规范与常见问题避免\n• 练习板焊接打磨手感\n• 小作品：呼吸灯 / 温湿度模块快速接线。'},
  { icon: '🏆', title: '科技比赛', brief: '组队参与，积累项目经验', full: '我们会组织或协助同学参与多类竞赛（电子设计、编程、创客、AI 创新等），提供队伍匹配、方向建议、材料准备经验 & 复盘。\n\n示例内容：\n• 赛题拆解工作坊\n• 历届项目展示与反思\n• 团队协作与时间管理技巧。'},
  { icon: '🛠️', title: '嵌入式工程', brief: '一起动手，完成小项目', full: '从单片机 / MCU 基础开始，逐步延伸到传感器读取、通信协议、低功耗与物联网联动实践。小项目驱动学习，强化“做得成” mindset。\n\n示例内容：\n• 串口/ I2C / SPI 快速实验\n• 组件抽象与模块化\n• 与 Web / 云端服务联动展示。'},
  { icon: '📝', title: 'PCB设计', brief: '学习电路设计基础知识', full: '学习原理图与 PCB 设计流程，熟悉 EDA 工具（如：EasyEDA / KiCad），了解基本器件封装、电源与信号走线规则，完成个人或团队小板。\n\n示例内容：\n• 原理图 -> PCB -> 打板全流程\n• 常见布线与审核要点\n• 调试与改版经验分享。'},
  { icon: '🎉', title: '团队活动', brief: '认识朋友，交流分享', full: '不仅是技术，更是人与人之间的支持。我们会举办茶话交流、灵感闪电分享、复盘夜谈与不定期联动活动，形成持续正向循环。\n\n示例内容：\n• Lightning Talk 分享\n• 头脑风暴工作坊\n• 成员 Show & Tell 作品展示。'}
]
const joinRef = ref<HTMLElement | null>(null)
const joinInView = ref(false)
const burstKey = ref(0)
let observer: IntersectionObserver | null = null
const selectedCard = ref<number|null>(null)
function toggleCard(i:number){ selectedCard.value = selectedCard.value===i ? null : i }

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
          <div
            v-for="(f,i) in featureCards"
            :key="f.title"
            role="button"
            tabindex="0"
            :aria-expanded="selectedCard===i"
            @click="toggleCard(i)"
            @keydown.enter.prevent="toggleCard(i)"
            class="group relative rounded-xl border border-white/10 bg-white/5 p-4 transition overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400/50 cursor-pointer flex flex-col"
            :class="[
              selectedCard===i ? 'sm:col-span-3 col-span-2 border-emerald-400/40 bg-gradient-to-br from-emerald-900/40 to-cyan-900/30 shadow-[0_0_0_1px_rgba(16,185,129,0.3),0_6px_28px_-8px_rgba(16,185,129,0.35)]' : ''
            ]"
          >
            <!-- 提示角标 -->
            <div v-if="selectedCard!==i" class="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-200 tracking-wider opacity-80 group-hover:opacity-100">点击</div>
            <div class="text-2xl">{{ f.icon }}</div>
            <div class="mt-2 font-semibold flex items-center gap-2">
              <span>{{ f.title }}</span>
              <span class="text-xs text-emerald-300/70 transition-transform" :class="selectedCard===i ? 'rotate-45' : ''">➕</span>
            </div>
            <div class="text-xs text-emerald-100/80 mt-1" v-if="selectedCard!==i">{{ f.brief }}</div>
            <!-- 展开内容 -->
            <div
              class="mt-3 text-xs sm:text-sm leading-relaxed text-emerald-50/90 space-y-2 pr-1 overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out"
              :class="selectedCard===i ? 'opacity-100 max-h-[420px]' : 'opacity-0 max-h-0'"
            >
              <p class="whitespace-pre-line">{{ f.full }}</p>
              <div class="pt-1 flex justify-end text-[10px] text-emerald-300/70">再次点击收起</div>
            </div>
            <!-- 渐变遮罩（未展开时） -->
            <div v-if="selectedCard!==i" class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-400/5 to-cyan-400/5"></div>
          </div>
        </div>
        <!-- 移除原全屏详情浮层 -->
        
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
                <div class="flex flex-col items-center">
                  <div class="relative group">
                  <!-- 外框：改为白色系柔和发光，轻微冷暖渐变保持与整体色调和谐 -->
                  <div class="p-[2px] rounded-2xl bg-[linear-gradient(140deg,rgba(255,255,255,0.85),rgba(255,255,255,0.55),rgba(255,255,255,0.78))] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_0_22px_4px_rgba(255,255,255,0.55),0_6px_28px_-8px_rgba(16,185,129,0.25)]">
                    <div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative">
                    <img
                      src="/group_qr.jpg"
                      alt="官方迎新群二维码"
                      class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.015]"
                      decoding="async"
                      loading="lazy"
                    />
                    <div class="pointer-events-none absolute inset-0 ring-1 ring-black/5"></div>
                    <!-- 轻微内发光，加一点和页面呼应的细彩色雾化 -->
                    <div class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-60 bg-[radial-gradient(circle_at_25%_30%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(34,211,238,0.16),transparent_60%)]"></div>
                    </div>
                  </div>
                  <!-- 悬停时外圈柔光扩散 -->
                  <div class="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.45),transparent_70%)]"></div>
                  </div>
                  <div class="mt-2 text-[10px] sm:text-xs text-emerald-100/80 tracking-wide">
                  官方迎新群
                  </div>
                </div>
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
/* 淡入动画仍可复用其它区 */
.fade-enter-active,.fade-leave-active{transition:opacity .22s ease}
.fade-enter-from,.fade-leave-to{opacity:0}
/* 卡片展开过渡自定义（已用 utility） */
</style>
