<script setup lang="ts">
import { reactive, computed, ref, onMounted, onUnmounted } from 'vue'

// ===== 配置（使用本地 /api/join 代理，不再在前端保留 token） =====
const JDY_CFG = {
  APP_ID: '68969e6eec4390dbe1ba9505',
  ENTRY_ID: '68969e72acae91d21941e7fe'
}
const SUBMIT_ENDPOINT = false
  ? '/api/join'
  : 'https://1300133642-9f4mek0dbz.ap-guangzhou.tencentscf.com/api/join'

interface FormState {
  majorClass: string
  studentId: string
  name: string
  stack: string
  message: string
  customStack?: string
}

const form = reactive<FormState>({
  majorClass: '',
  studentId: '',
  name: '',
  stack: '',
  message: '',
  customStack: ''
})

const touched = reactive<Record<keyof FormState, boolean>>({
  majorClass: false,
  studentId: false,
  name: false,
  stack: false,
  message: false,
  customStack: false
})

const maxLen = 200
const sending = ref(false)
const success = ref(false)
const failMsg = ref('')

// 轻量防护
const COOLDOWN_SEC = 30
const lastSubmitRef = ref<number>(Number(localStorage.getItem('join_last_submit') || 0))
// 新增：用于触发冷却倒计时重算
const nowRef = ref(Date.now())
let cooldownTimer: number | undefined
onMounted(() => {
  cooldownTimer = window.setInterval(() => { nowRef.value = Date.now() }, 1000) as unknown as number
})
onUnmounted(() => { if (cooldownTimer) clearInterval(cooldownTimer) })
const cooldownLeft = computed(() => {
  const diff = nowRef.value - lastSubmitRef.value
  const remain = COOLDOWN_SEC*1000 - diff
  return remain > 0 ? Math.ceil(remain/1000) : 0
})
const honeypot = ref('')
function buildMeta() { const ts=Date.now(); const nonce=Math.random().toString(36).slice(2,10); const sig=btoa(`${ts}-${nonce}-${(form.message||'').length}`); return { ts, nonce, sig } }

const errors = computed(() => ({
  majorClass: !form.majorClass ? '请输入你的专业与班级' : '',
  studentId: !form.studentId ? '请输入学号' : '',
  name: !form.name ? '请输入姓名' : '',
  stack: !form.stack ? '请选择优势' : (form.stack === '其他' && !form.customStack?.trim() ? '请输入自定义优势' : ''),
  message: form.message.length > maxLen ? `最多 ${maxLen} 字` : ''
}))
const valid = computed(() => Object.values(errors.value).every(e=>!e))

async function submit() {
  if (cooldownLeft.value > 0) { failMsg.value = `请稍后 ${cooldownLeft.value}s 再提交`; return }
  if (honeypot.value.trim()) { success.value = true; setTimeout(()=>success.value=false,1500); return }
  Object.keys(touched).forEach(k => touched[k as keyof FormState] = true)
  if (!valid.value) return
  sending.value = true; failMsg.value=''
  try {
    const stackValue = form.stack === '其他' ? form.customStack?.trim() : form.stack
    const meta = buildMeta()
    const payload = {
      app_id: JDY_CFG.APP_ID,
      entry_id: JDY_CFG.ENTRY_ID,
      data: {
        _widget_1754701427540: { value: form.majorClass },
        _widget_1754701427541: { value: form.studentId },
        _widget_1754701427544: { value: form.message },
        _widget_1754701427545: { value: stackValue },
        _widget_1754701427542: { value: form.name },
        _meta_ts: { value: meta.ts },
        _meta_nonce: { value: meta.nonce },
        _meta_sig: { value: meta.sig }
      }
    }
    await new Promise(r=>setTimeout(r,150+Math.random()*300))
    const res = await fetch(SUBMIT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!res.ok) { const txt = await res.text().catch(()=>'' ); throw new Error(`提交失败(${res.status}) ${txt}`) }
    lastSubmitRef.value = Date.now(); localStorage.setItem('join_last_submit', String(lastSubmitRef.value))
    success.value = true; setTimeout(()=>success.value=false,2500)
    form.majorClass=''; form.studentId=''; form.name=''; form.stack=''; form.customStack=''; form.message=''
    Object.keys(touched).forEach(k => touched[k as keyof FormState] = false)
  } catch (e:any) { failMsg.value = e?.message || '提交出错，请稍后再试' }
  finally { sending.value = false }
}

function mark<K extends keyof FormState>(k: K) { touched[k] = true }
</script>

<template>
  <div class="w-full max-w-screen-sm mx-auto">
    <form @submit.prevent="submit" class="space-y-5">
      <!-- 蜜罐：屏幕阅读器隐藏 / 不可见 -->
      <div class="sr-only" aria-hidden="true">
        <label>请不要填写此字段<input autocomplete="off" tabindex="-1" v-model="honeypot" class="pointer-events-none opacity-0" /></label>
      </div>

      <!-- 专业班级 -->
      <div>
        <div class="relative">
          <input
            v-model.trim="form.majorClass"
            @focus="mark('majorClass')"
            @blur="mark('majorClass')"
            :aria-invalid="!!(touched.majorClass && errors.majorClass)"
            placeholder="专业与班级"
            inputmode="text"
            autocomplete="organization-title"
            enterkeyhint="next"
            class="peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"
          />
          <label class="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none
            peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200
            peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs">
            专业与班级
          </label>
        </div>
        <p v-if="touched.majorClass && errors.majorClass" class="mt-1 text-xs text-rose-400">{{ errors.majorClass }}</p>
      </div>

      <!-- 学号 姓名 -->
      <div class="grid grid-cols-2 gap-3">
        <div>
          <div class="relative">
            <input
              v-model.trim="form.studentId"
              @focus="mark('studentId')"
              @blur="mark('studentId')"
              inputmode="numeric"
              pattern="[0-9]*"
              autocomplete="on"
              enterkeyhint="next"
              placeholder="学号"
              class="peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"
            />
            <label class="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none
              peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs">
              学号
            </label>
          </div>
          <p v-if="touched.studentId && errors.studentId" class="mt-1 text-xs text-rose-400">{{ errors.studentId }}</p>
        </div>
        <div>
          <div class="relative">
            <input
              v-model.trim="form.name"
              @focus="mark('name')"
              @blur="mark('name')"
              inputmode="text"
              autocomplete="name"
              autocapitalize="off"
              enterkeyhint="next"
              placeholder="姓名"
              class="peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"
            />
            <label class="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none
              peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs">
              姓名
            </label>
          </div>
          <p v-if="touched.name && errors.name" class="mt-1 text-xs text-rose-400">{{ errors.name }}</p>
        </div>
      </div>

      <!-- 技术栈 Segmented 自定义输入修正 -->
      <div>
        <div class="text-sm text-emerald-100/80 mb-2">优势点</div>
        <div class="grid grid-cols-3 gap-2 items-start">
          <button type="button" @click="form.stack = '硬件'; form.customStack=''; mark('stack')"
            :class="['px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm', form.stack==='硬件' ? 'border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]' : 'border-white/10 bg-white/5 hover:border-emerald-400/30']">
            硬件
          </button>
          <button type="button" @click="form.stack = '软件'; form.customStack=''; mark('stack')"
            :class="['px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm', form.stack==='软件' ? 'border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]' : 'border-white/10 bg-white/5 hover:border-emerald-400/30']">
            软件
          </button>
          <button type="button" @click="form.stack = '管理'; form.customStack=''; mark('stack')"
            :class="['px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm', form.stack==='管理' ? 'border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]' : 'border-white/10 bg-white/5 hover:border-emerald-400/30']">
            管理
          </button>
            <button type="button" @click="form.stack = '其他'; mark('stack')"
            :class="['px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm col-span-3', form.stack==='其他' ? 'border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]' : 'border-white/10 bg-white/5 hover:border-emerald-400/30']"
            v-if="form.stack !== '其他'">
            其他（点击填写）
            </button>
            <template v-if="form.stack === '其他'">
            <div class="col-span-3 relative">
              <input
              v-model.trim="form.customStack"
              @focus="mark('stack'); touched.customStack=true"
              @blur="mark('stack')"
              maxlength="20"
              placeholder="请输入你的自定义优势 (20字内)"
              class="peer w-full rounded-xl bg-white/5 border border-emerald-400/60 text-white focus:outline-none focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/30 transition text-base pl-4 pr-14 py-3 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"
              />
              <button type="button" aria-label="取消自定义" @click="form.stack=''; form.customStack=''; mark('stack')"
              class="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-md bg-white/10 hover:bg-white/15 flex items-center justify-center text-emerald-100/80 leading-none active:scale-[0.95]">
              ✕
              </button>
              <div class="absolute -bottom-4 right-0 text-[10px] text-emerald-100/50">{{ form.customStack?.length || 0 }}/20</div>
            </div>
            </template>
        </div>
        <p v-if="touched.stack && errors.stack" class="mt-1 text-xs text-rose-400">{{ errors.stack }}</p>
      </div>

      <!-- 想说的话 textarea 浮动标签修正 -->
      <div>
        <div class="relative">
          <textarea
            v-model="form.message"
            @focus="mark('message')"
            @blur="mark('message')"
            :maxlength="maxLen + 20"
            rows="5"
            inputmode="text"
            enterkeyhint="send"
            placeholder="想说的话"
            class="peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/40 transition text-base px-4 pt-7 pb-3 resize-none placeholder-transparent"
          ></textarea>
          <label class="absolute left-4 top-4 text-emerald-100/60 transition-all pointer-events-none
            peer-focus:top-2 peer-focus:text-xs peer-focus:text-emerald-200
            peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs">
            想说的话
          </label>
          <div class="mt-2 flex items-center justify-between text-xs">
            <div class="h-1 flex-1 rounded bg-white/10 mr-3 overflow-hidden">
              <div class="h-full bg-gradient-to-r from-emerald-400 to-cyan-400" :style="{ width: Math.min(100, Math.round((form.message.length / maxLen) * 100)) + '%' }"></div>
            </div>
            <span class="text-emerald-100/70">{{ form.message.length }} / {{ maxLen }}</span>
          </div>
        </div>
        <p v-if="touched.message && errors.message" class="mt-1 text-xs text-rose-400">{{ errors.message }}</p>
      </div>

      <button
        :disabled="sending || !valid || cooldownLeft>0"
        @click.prevent="submit"
        class="w-full py-4 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] active:scale-[0.99]"
        style="margin-bottom: calc(env(safe-area-inset-bottom) + 8px)"
      >
        <span v-if="cooldownLeft>0">冷却 {{ cooldownLeft }}s…</span>
        <span v-else>{{ sending ? '提交中…' : '提交报名' }}</span>
      </button>

      <p class="text-center text-xs text-emerald-100/60">提交后请耐心等待 静候开学后相关通知</p>
      <p v-if="failMsg" class="text-center text-xs text-rose-400 mt-1">{{ failMsg }}</p>
    </form>

    <!-- 成功提示 -->
    <div v-if="success" class="fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+16px)] mx-auto w-[90%] max-w-sm px-4 py-3 rounded-xl bg-emerald-500 text-black text-center shadow-lg">
      提交成功，感谢支持！
    </div>
  </div>
</template>

<style scoped>
/* 可在此加入与“其他”输入框相关的细微调整 */
</style>
