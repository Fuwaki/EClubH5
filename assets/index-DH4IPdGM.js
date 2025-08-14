(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},mr=[],Pn=()=>{},ch=()=>!1,Co=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),zl=n=>n.startsWith("onUpdate:"),Rt=Object.assign,Hl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},uh=Object.prototype.hasOwnProperty,rt=(n,e)=>uh.call(n,e),Ge=Array.isArray,gr=n=>Po(n)==="[object Map]",ff=n=>Po(n)==="[object Set]",Ye=n=>typeof n=="function",Mt=n=>typeof n=="string",Mi=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",df=n=>(gt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),hf=Object.prototype.toString,Po=n=>hf.call(n),fh=n=>Po(n).slice(8,-1),pf=n=>Po(n)==="[object Object]",kl=n=>Mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$r=Bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Do=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},dh=/-(\w)/g,Ln=Do(n=>n.replace(dh,(e,t)=>t?t.toUpperCase():"")),hh=/\B([A-Z])/g,qi=Do(n=>n.replace(hh,"-$1").toLowerCase()),Vl=Do(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xo=Do(n=>n?`on${Vl(n)}`:""),pi=(n,e)=>!Object.is(n,e),io=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Na=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Fa=n=>{const e=parseFloat(n);return isNaN(e)?n:e},ph=n=>{const e=Mt(n)?Number(n):NaN;return isNaN(e)?n:e};let Mc;const Lo=()=>Mc||(Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function br(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Mt(i)?vh(i):br(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Mt(n)||gt(n))return n}const mh=/;(?![^(]*\))/g,gh=/:([^]+)/,_h=/\/\*[^]*?\*\//g;function vh(n){const e={};return n.replace(_h,"").split(mh).forEach(t=>{if(t){const i=t.split(gh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function $n(n){let e="";if(Mt(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=$n(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const xh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sh=Bl(xh);function mf(n){return!!n||n===""}const gf=n=>!!(n&&n.__v_isRef===!0),Ct=n=>Mt(n)?n:n==null?"":Ge(n)||gt(n)&&(n.toString===hf||!Ye(n.toString))?gf(n)?Ct(n.value):JSON.stringify(n,_f,2):String(n),_f=(n,e)=>gf(e)?_f(n,e.value):gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[$o(i,s)+" =>"]=r,t),{})}:ff(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$o(t))}:Mi(e)?$o(e):gt(e)&&!Ge(e)&&!pf(e)?String(e):e,$o=(n,e="")=>{var t;return Mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class Mh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){++this._on===1&&(this.prevScope=Yt,Yt=this)}off(){this._on>0&&--this._on===0&&(Yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function yh(){return Yt}let ht;const qo=new WeakSet;class vf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qo.has(this)&&(qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yc(this),Mf(this);const e=ht,t=vn;ht=this,vn=!0;try{return this.fn()}finally{yf(this),ht=e,vn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xl(e);this.deps=this.depsTail=void 0,yc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oa(this)&&this.run()}get dirty(){return Oa(this)}}let xf=0,qr,Yr;function Sf(n,e=!1){if(n.flags|=8,e){n.next=Yr,Yr=n;return}n.next=qr,qr=n}function Gl(){xf++}function Wl(){if(--xf>0)return;if(Yr){let e=Yr;for(Yr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qr;){let e=qr;for(qr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Mf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Xl(i),bh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Oa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function bf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===is)||(n.globalVersion=is,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Oa(n))))return;n.flags|=2;const e=n.dep,t=ht,i=vn;ht=n,vn=!0;try{Mf(n);const r=n.fn(n._value);(e.version===0||pi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=t,vn=i,yf(n),n.flags&=-3}}function Xl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Xl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function bh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let vn=!0;const Ef=[];function Kn(){Ef.push(vn),vn=!1}function Zn(){const n=Ef.pop();vn=n===void 0?!0:n}function yc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let is=0;class Eh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $l{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!vn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new Eh(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,Tf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,is++,this.notify(e)}notify(e){Gl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Wl()}}}function Tf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Tf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ba=new WeakMap,Wi=Symbol(""),za=Symbol(""),rs=Symbol("");function Nt(n,e,t){if(vn&&ht){let i=Ba.get(n);i||Ba.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new $l),r.map=i,r.key=t),r.track()}}function Gn(n,e,t,i,r,s){const o=Ba.get(n);if(!o){is++;return}const a=l=>{l&&l.trigger()};if(Gl(),e==="clear")o.forEach(a);else{const l=Ge(n),c=l&&kl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===rs||!Mi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(rs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Wi)),gr(n)&&a(o.get(za)));break;case"delete":l||(a(o.get(Wi)),gr(n)&&a(o.get(za)));break;case"set":gr(n)&&a(o.get(Wi));break}}Wl()}function Ki(n){const e=nt(n);return e===n?e:(Nt(e,"iterate",rs),un(n)?e:e.map(Pt))}function Io(n){return Nt(n=nt(n),"iterate",rs),n}const Th={__proto__:null,[Symbol.iterator](){return Yo(this,Symbol.iterator,Pt)},concat(...n){return Ki(this).concat(...n.map(e=>Ge(e)?Ki(e):e))},entries(){return Yo(this,"entries",n=>(n[1]=Pt(n[1]),n))},every(n,e){return Un(this,"every",n,e,void 0,arguments)},filter(n,e){return Un(this,"filter",n,e,t=>t.map(Pt),arguments)},find(n,e){return Un(this,"find",n,e,Pt,arguments)},findIndex(n,e){return Un(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Un(this,"findLast",n,e,Pt,arguments)},findLastIndex(n,e){return Un(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Un(this,"forEach",n,e,void 0,arguments)},includes(...n){return jo(this,"includes",n)},indexOf(...n){return jo(this,"indexOf",n)},join(n){return Ki(this).join(n)},lastIndexOf(...n){return jo(this,"lastIndexOf",n)},map(n,e){return Un(this,"map",n,e,void 0,arguments)},pop(){return Ir(this,"pop")},push(...n){return Ir(this,"push",n)},reduce(n,...e){return bc(this,"reduce",n,e)},reduceRight(n,...e){return bc(this,"reduceRight",n,e)},shift(){return Ir(this,"shift")},some(n,e){return Un(this,"some",n,e,void 0,arguments)},splice(...n){return Ir(this,"splice",n)},toReversed(){return Ki(this).toReversed()},toSorted(n){return Ki(this).toSorted(n)},toSpliced(...n){return Ki(this).toSpliced(...n)},unshift(...n){return Ir(this,"unshift",n)},values(){return Yo(this,"values",Pt)}};function Yo(n,e,t){const i=Io(n),r=i[e]();return i!==n&&!un(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Ah=Array.prototype;function Un(n,e,t,i,r,s){const o=Io(n),a=o!==n&&!un(n),l=o[e];if(l!==Ah[e]){const f=l.apply(n,s);return a?Pt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Pt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function bc(n,e,t,i){const r=Io(n);let s=t;return r!==n&&(un(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Pt(a),l,n)}),r[e](s,...i)}function jo(n,e,t){const i=nt(n);Nt(i,"iterate",rs);const r=i[e](...t);return(r===-1||r===!1)&&jl(t[0])?(t[0]=nt(t[0]),i[e](...t)):r}function Ir(n,e,t=[]){Kn(),Gl();const i=nt(n)[e].apply(n,t);return Wl(),Zn(),i}const wh=Bl("__proto__,__v_isRef,__isVue"),Af=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mi));function Rh(n){Mi(n)||(n=String(n));const e=nt(this);return Nt(e,"has",n),e.hasOwnProperty(n)}class wf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Bh:Df:s?Pf:Cf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!r){let l;if(o&&(l=Th[t]))return l;if(t==="hasOwnProperty")return Rh}const a=Reflect.get(e,t,Ot(e)?e:i);return(Mi(t)?Af.has(t):wh(t))||(r||Nt(e,"get",t),s)?a:Ot(a)?o&&kl(t)?a:a.value:gt(a)?r?Lf(a):ss(a):a}}class Rf extends wf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=_i(s);if(!un(i)&&!_i(i)&&(s=nt(s),i=nt(i)),!Ge(e)&&Ot(s)&&!Ot(i))return l?!1:(s.value=i,!0)}const o=Ge(e)&&kl(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,i,Ot(e)?e:r);return e===nt(r)&&(o?pi(i,s)&&Gn(e,"set",t,i):Gn(e,"add",t,i)),a}deleteProperty(e,t){const i=rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Gn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Mi(t)||!Af.has(t))&&Nt(e,"has",t),i}ownKeys(e){return Nt(e,"iterate",Ge(e)?"length":Wi),Reflect.ownKeys(e)}}class Ch extends wf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ph=new Rf,Dh=new Ch,Lh=new Rf(!0);const Ha=n=>n,ws=n=>Reflect.getPrototypeOf(n);function Ih(n,e,t){return function(...i){const r=this.__v_raw,s=nt(r),o=gr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ha:e?mo:Pt;return!e&&Nt(s,"iterate",l?za:Wi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Rs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Uh(n,e){const t={get(r){const s=this.__v_raw,o=nt(s),a=nt(r);n||(pi(r,a)&&Nt(o,"get",r),Nt(o,"get",a));const{has:l}=ws(o),c=e?Ha:n?mo:Pt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Nt(nt(r),"iterate",Wi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=nt(s),a=nt(r);return n||(pi(r,a)&&Nt(o,"has",r),Nt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=nt(a),c=e?Ha:n?mo:Pt;return!n&&Nt(l,"iterate",Wi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Rt(t,n?{add:Rs("add"),set:Rs("set"),delete:Rs("delete"),clear:Rs("clear")}:{add(r){!e&&!un(r)&&!_i(r)&&(r=nt(r));const s=nt(this);return ws(s).has.call(s,r)||(s.add(r),Gn(s,"add",r,r)),this},set(r,s){!e&&!un(s)&&!_i(s)&&(s=nt(s));const o=nt(this),{has:a,get:l}=ws(o);let c=a.call(o,r);c||(r=nt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?pi(s,u)&&Gn(o,"set",r,s):Gn(o,"add",r,s),this},delete(r){const s=nt(this),{has:o,get:a}=ws(s);let l=o.call(s,r);l||(r=nt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Gn(s,"delete",r,void 0),c},clear(){const r=nt(this),s=r.size!==0,o=r.clear();return s&&Gn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ih(r,n,e)}),t}function ql(n,e){const t=Uh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(rt(t,r)&&r in i?t:i,r,s)}const Nh={get:ql(!1,!1)},Fh={get:ql(!1,!0)},Oh={get:ql(!0,!1)};const Cf=new WeakMap,Pf=new WeakMap,Df=new WeakMap,Bh=new WeakMap;function zh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hh(n){return n.__v_skip||!Object.isExtensible(n)?0:zh(fh(n))}function ss(n){return _i(n)?n:Yl(n,!1,Ph,Nh,Cf)}function kh(n){return Yl(n,!1,Lh,Fh,Pf)}function Lf(n){return Yl(n,!0,Dh,Oh,Df)}function Yl(n,e,t,i,r){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Hh(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function _r(n){return _i(n)?_r(n.__v_raw):!!(n&&n.__v_isReactive)}function _i(n){return!!(n&&n.__v_isReadonly)}function un(n){return!!(n&&n.__v_isShallow)}function jl(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function Vh(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&Na(n,"__v_skip",!0),n}const Pt=n=>gt(n)?ss(n):n,mo=n=>gt(n)?Lf(n):n;function Ot(n){return n?n.__v_isRef===!0:!1}function ot(n){return Gh(n,!1)}function Gh(n,e){return Ot(n)?n:new Wh(n,e)}class Wh{constructor(e,t){this.dep=new $l,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:Pt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||un(e)||_i(e);e=i?e:nt(e),pi(e,t)&&(this._rawValue=e,this._value=i?e:Pt(e),this.dep.trigger())}}function If(n){return Ot(n)?n.value:n}const Xh={get:(n,e,t)=>e==="__v_raw"?n:If(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ot(r)&&!Ot(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Uf(n){return _r(n)?n:new Proxy(n,Xh)}class $h{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new $l(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=is-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return Sf(this,!0),!0}get value(){const e=this.dep.track();return bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qh(n,e,t=!1){let i,r;return Ye(n)?i=n:(i=n.get,r=n.set),new $h(i,r,t)}const Cs={},go=new WeakMap;let Ni;function Yh(n,e=!1,t=Ni){if(t){let i=go.get(t);i||go.set(t,i=[]),i.push(n)}}function jh(n,e,t=ft){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:un(S)||r===!1||r===0?Wn(S,1):Wn(S);let u,f,h,p,x=!1,_=!1;if(Ot(n)?(f=()=>n.value,x=un(n)):_r(n)?(f=()=>c(n),x=!0):Ge(n)?(_=!0,x=n.some(S=>_r(S)||un(S)),f=()=>n.map(S=>{if(Ot(S))return S.value;if(_r(S))return c(S);if(Ye(S))return l?l(S,2):S()})):Ye(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Kn();try{h()}finally{Zn()}}const S=Ni;Ni=u;try{return l?l(n,3,[p]):n(p)}finally{Ni=S}}:f=Pn,e&&r){const S=f,C=r===!0?1/0:r;f=()=>Wn(S(),C)}const m=yh(),d=()=>{u.stop(),m&&m.active&&Hl(m.effects,u)};if(s&&e){const S=e;e=(...C)=>{S(...C),d()}}let A=_?new Array(n.length).fill(Cs):Cs;const T=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const C=u.run();if(r||x||(_?C.some((D,P)=>pi(D,A[P])):pi(C,A))){h&&h();const D=Ni;Ni=u;try{const P=[C,A===Cs?void 0:_&&A[0]===Cs?[]:A,p];A=C,l?l(e,3,P):e(...P)}finally{Ni=D}}}else u.run()};return a&&a(T),u=new vf(f),u.scheduler=o?()=>o(T,!1):T,p=S=>Yh(S,!1,u),h=u.onStop=()=>{const S=go.get(u);if(S){if(l)l(S,4);else for(const C of S)C();go.delete(u)}},e?i?T(!0):A=u.run():o?o(T.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Wn(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ot(n))Wn(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)Wn(n[i],e,t);else if(ff(n)||gr(n))n.forEach(i=>{Wn(i,e,t)});else if(pf(n)){for(const i in n)Wn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Wn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _s(n,e,t,i){try{return i?n(...i):n()}catch(r){Uo(r,e,t)}}function Mn(n,e,t,i){if(Ye(n)){const r=_s(n,e,t,i);return r&&df(r)&&r.catch(s=>{Uo(s,e,t)}),r}if(Ge(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Mn(n[s],e,t,i));return r}}function Uo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Kn(),_s(s,null,10,[n,l,c]),Zn();return}}Kh(n,t,r,i,o)}function Kh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Gt=[];let Tn=-1;const vr=[];let ui=null,dr=0;const Nf=Promise.resolve();let _o=null;function Fi(n){const e=_o||Nf;return n?e.then(this?n.bind(this):n):e}function Zh(n){let e=Tn+1,t=Gt.length;for(;e<t;){const i=e+t>>>1,r=Gt[i],s=os(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Kl(n){if(!(n.flags&1)){const e=os(n),t=Gt[Gt.length-1];!t||!(n.flags&2)&&e>=os(t)?Gt.push(n):Gt.splice(Zh(e),0,n),n.flags|=1,Ff()}}function Ff(){_o||(_o=Nf.then(Bf))}function Jh(n){Ge(n)?vr.push(...n):ui&&n.id===-1?ui.splice(dr+1,0,n):n.flags&1||(vr.push(n),n.flags|=1),Ff()}function Ec(n,e,t=Tn+1){for(;t<Gt.length;t++){const i=Gt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Gt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Of(n){if(vr.length){const e=[...new Set(vr)].sort((t,i)=>os(t)-os(i));if(vr.length=0,ui){ui.push(...e);return}for(ui=e,dr=0;dr<ui.length;dr++){const t=ui[dr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ui=null,dr=0}}const os=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Bf(n){try{for(Tn=0;Tn<Gt.length;Tn++){const e=Gt[Tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_s(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tn<Gt.length;Tn++){const e=Gt[Tn];e&&(e.flags&=-2)}Tn=-1,Gt.length=0,Of(),_o=null,(Gt.length||vr.length)&&Bf()}}let en=null,zf=null;function vo(n){const e=en;return en=n,zf=n&&n.type.__scopeId||null,e}function Zl(n,e=en,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Bc(-1);const s=vo(e);let o;try{o=n(...r)}finally{vo(s),i._d&&Bc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ie(n,e){if(en===null)return n;const t=zo(en),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ft]=e[r];s&&(Ye(s)&&(s={mounted:s,updated:s}),s.deep&&Wn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ti(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Kn(),Mn(l,t,8,[n.el,a,n,e]),Zn())}}const Hf=Symbol("_vte"),kf=n=>n.__isTeleport,jr=n=>n&&(n.disabled||n.disabled===""),Tc=n=>n&&(n.defer||n.defer===""),Ac=n=>typeof SVGElement<"u"&&n instanceof SVGElement,wc=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,ka=(n,e)=>{const t=n&&n.to;return Mt(t)?e?e(t):null:t},Vf={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:p,querySelector:x,createText:_,createComment:m}}=c,d=jr(e.props);let{shapeFlag:A,children:T,dynamicChildren:S}=e;if(n==null){const C=e.el=_(""),D=e.anchor=_("");p(C,t,i),p(D,t,i);const P=(M,E)=>{A&16&&(r&&r.isCE&&(r.ce._teleportTarget=M),u(T,M,E,r,s,o,a,l))},U=()=>{const M=e.target=ka(e.props,x),E=Wf(M,e,_,p);M&&(o!=="svg"&&Ac(M)?o="svg":o!=="mathml"&&wc(M)&&(o="mathml"),d||(P(M,E),ro(e,!1)))};d&&(P(t,D),ro(e,!0)),Tc(e.props)?(e.el.__isMounted=!1,Vt(()=>{U(),delete e.el.__isMounted},s)):U()}else{if(Tc(e.props)&&n.el.__isMounted===!1){Vt(()=>{Vf.process(n,e,t,i,r,s,o,a,l,c)},s);return}e.el=n.el,e.targetStart=n.targetStart;const C=e.anchor=n.anchor,D=e.target=n.target,P=e.targetAnchor=n.targetAnchor,U=jr(n.props),M=U?t:D,E=U?C:P;if(o==="svg"||Ac(D)?o="svg":(o==="mathml"||wc(D))&&(o="mathml"),S?(h(n.dynamicChildren,S,M,r,s,o,a),tc(n,e,!0)):l||f(n,e,M,E,r,s,o,a,!1),d)U?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Ps(e,t,C,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const R=e.target=ka(e.props,x);R&&Ps(e,R,null,c,0)}else U&&Ps(e,D,P,c,1);ro(e,d)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:h}=n;if(f&&(r(c),r(u)),s&&r(l),o&16){const p=s||!jr(h);for(let x=0;x<a.length;x++){const _=a[x];i(_,e,t,p,!!_.dynamicChildren)}}},move:Ps,hydrate:Qh};function Ps(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=s===2;if(f&&i(o,e,t),(!f||jr(u))&&l&16)for(let h=0;h<c.length;h++)r(c[h],e,t,2);f&&i(a,e,t)}function Qh(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){const h=e.target=ka(e.props,l);if(h){const p=jr(e.props),x=h._lpa||h.firstChild;if(e.shapeFlag&16)if(p)e.anchor=f(o(n),e,a(n),t,i,r,s),e.targetStart=x,e.targetAnchor=x&&o(x);else{e.anchor=o(n);let _=x;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}_=o(_)}e.targetAnchor||Wf(h,e,u,c),f(x&&o(x),e,h,t,i,r,s)}ro(e,p)}return e.anchor&&o(e.anchor)}const Gf=Vf;function ro(n,e){const t=n.ctx;if(t&&t.ut){let i,r;for(e?(i=n.el,r=n.anchor):(i=n.targetStart,r=n.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Wf(n,e,t,i){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[Hf]=s,n&&(i(r,n),i(s,n)),s}const fi=Symbol("_leaveCb"),Ds=Symbol("_enterCb");function ep(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yi(()=>{n.isMounted=!0}),Yi(()=>{n.isUnmounting=!0}),n}const sn=[Function,Array],Xf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},$f=n=>{const e=n.subTree;return e.component?$f(e.component):e},tp={name:"BaseTransition",props:Xf,setup(n,{slots:e}){const t=md(),i=ep();return()=>{const r=e.default&&jf(e.default(),!0);if(!r||!r.length)return;const s=qf(r),o=nt(n),{mode:a}=o;if(i.isLeaving)return Ko(s);const l=Rc(s);if(!l)return Ko(s);let c=Va(l,o,i,t,f=>c=f);l.type!==Wt&&as(l,c);let u=t.subTree&&Rc(t.subTree);if(u&&u.type!==Wt&&!zi(l,u)&&$f(t).type!==Wt){let f=Va(u,o,i,t);if(as(u,f),a==="out-in"&&l.type!==Wt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Ko(s);a==="in-out"&&l.type!==Wt?f.delayLeave=(h,p,x)=>{const _=Yf(i,u);_[String(u.key)]=u,h[fi]=()=>{p(),h[fi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function qf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Wt){e=t;break}}return e}const np=tp;function Yf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Va(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:x,onLeaveCancelled:_,onBeforeAppear:m,onAppear:d,onAfterAppear:A,onAppearCancelled:T}=e,S=String(n.key),C=Yf(t,n),D=(M,E)=>{M&&Mn(M,i,9,E)},P=(M,E)=>{const R=E[1];D(M,E),Ge(M)?M.every(F=>F.length<=1)&&R():M.length<=1&&R()},U={mode:o,persisted:a,beforeEnter(M){let E=l;if(!t.isMounted)if(s)E=m||l;else return;M[fi]&&M[fi](!0);const R=C[S];R&&zi(n,R)&&R.el[fi]&&R.el[fi](),D(E,[M])},enter(M){let E=c,R=u,F=f;if(!t.isMounted)if(s)E=d||c,R=A||u,F=T||f;else return;let N=!1;const H=M[Ds]=ie=>{N||(N=!0,ie?D(F,[M]):D(R,[M]),U.delayedLeave&&U.delayedLeave(),M[Ds]=void 0)};E?P(E,[M,H]):H()},leave(M,E){const R=String(n.key);if(M[Ds]&&M[Ds](!0),t.isUnmounting)return E();D(h,[M]);let F=!1;const N=M[fi]=H=>{F||(F=!0,E(),H?D(_,[M]):D(x,[M]),M[fi]=void 0,C[R]===n&&delete C[R])};C[R]=n,p?P(p,[M,N]):N()},clone(M){const E=Va(M,e,t,i,r);return r&&r(E),E}};return U}function Ko(n){if(No(n))return n=vi(n),n.children=null,n}function Rc(n){if(!No(n))return kf(n.type)&&n.children?qf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ye(t.default))return t.default()}}function as(n,e){n.shapeFlag&6&&n.component?(n.transition=e,as(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function jf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Dt?(o.patchFlag&128&&r++,i=i.concat(jf(o.children,e,a))):(e||o.type!==Wt)&&i.push(a!=null?vi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function dn(n,e){return Ye(n)?Rt({name:n.name},e,{setup:n}):n}function Kf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Kr(n,e,t,i,r=!1){if(Ge(n)){n.forEach((x,_)=>Kr(x,e&&(Ge(e)?e[_]:e),t,i,r));return}if(Zr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Kr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?zo(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,f=a.setupState,h=nt(f),p=f===ft?()=>!1:x=>rt(h,x);if(c!=null&&c!==l&&(Mt(c)?(u[c]=null,p(c)&&(f[c]=null)):Ot(c)&&(c.value=null)),Ye(l))_s(l,a,12,[o,u]);else{const x=Mt(l),_=Ot(l);if(x||_){const m=()=>{if(n.f){const d=x?p(l)?f[l]:u[l]:l.value;r?Ge(d)&&Hl(d,s):Ge(d)?d.includes(s)||d.push(s):x?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else x?(u[l]=o,p(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Vt(m,t)):m()}}}Lo().requestIdleCallback;Lo().cancelIdleCallback;const Zr=n=>!!n.type.__asyncLoader,No=n=>n.type.__isKeepAlive;function ip(n,e){Zf(n,"a",e)}function rp(n,e){Zf(n,"da",e)}function Zf(n,e,t=Ft){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Fo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)No(r.parent.vnode)&&sp(i,e,t,r),r=r.parent}}function sp(n,e,t,i){const r=Fo(e,n,i,!0);Jl(()=>{Hl(i[e],r)},t)}function Fo(n,e,t=Ft,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Kn();const a=vs(t),l=Mn(e,t,n,o);return a(),Zn(),l});return i?r.unshift(s):r.push(s),s}}const ti=n=>(e,t=Ft)=>{(!fs||n==="sp")&&Fo(n,(...i)=>e(...i),t)},op=ti("bm"),yi=ti("m"),ap=ti("bu"),lp=ti("u"),Yi=ti("bum"),Jl=ti("um"),cp=ti("sp"),up=ti("rtg"),fp=ti("rtc");function dp(n,e=Ft){Fo("ec",n,e)}const hp="directives",pp=Symbol.for("v-ndc");function Jn(n){return mp(hp,n)}function mp(n,e,t=!0,i=!1){const r=en||Ft;if(r){const s=r.type,o=Cc(r[n]||s[n],e)||Cc(r.appContext[n],e);return!o&&i?s:o}}function Cc(n,e){return n&&(n[e]||n[Ln(e)]||n[Vl(Ln(e))])}function ls(n,e,t,i){let r;const s=t,o=Ge(n);if(o||Mt(n)){const a=o&&_r(n);let l=!1,c=!1;a&&(l=!un(n),c=_i(n),n=Io(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?mo(Pt(n[u])):Pt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(gt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Ga=n=>n?gd(n)?zo(n):Ga(n.parent):null,Jr=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ga(n.parent),$root:n=>Ga(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Qf(n),$forceUpdate:n=>n.f||(n.f=()=>{Kl(n.update)}),$nextTick:n=>n.n||(n.n=Fi.bind(n.proxy)),$watch:n=>Bp.bind(n)}),Zo=(n,e)=>n!==ft&&!n.__isScriptSetup&&rt(n,e),gp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Zo(i,e))return o[e]=1,i[e];if(r!==ft&&rt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(t!==ft&&rt(t,e))return o[e]=4,t[e];Wa&&(o[e]=0)}}const u=Jr[e];let f,h;if(u)return e==="$attrs"&&Nt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ft&&rt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,rt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Zo(r,e)?(r[e]=t,!0):i!==ft&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ft&&rt(n,o)||Zo(e,o)||(a=s[0])&&rt(a,o)||rt(i,o)||rt(Jr,o)||rt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Pc(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Wa=!0;function _p(n){const e=Qf(n),t=n.proxy,i=n.ctx;Wa=!1,e.beforeCreate&&Dc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:x,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:T,unmounted:S,render:C,renderTracked:D,renderTriggered:P,errorCaptured:U,serverPrefetch:M,expose:E,inheritAttrs:R,components:F,directives:N,filters:H}=e;if(c&&vp(c,i,null),o)for(const Q in o){const z=o[Q];Ye(z)&&(i[Q]=z.bind(t))}if(r){const Q=r.call(t,t);gt(Q)&&(n.data=ss(Q))}if(Wa=!0,s)for(const Q in s){const z=s[Q],ge=Ye(z)?z.bind(t,t):Ye(z.get)?z.get.bind(t,t):Pn,xe=!Ye(z)&&Ye(z.set)?z.set.bind(t):Pn,Re=ns({get:ge,set:xe});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Re.value,set:ze=>Re.value=ze})}if(a)for(const Q in a)Jf(a[Q],i,t,Q);if(l){const Q=Ye(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(z=>{Ep(z,Q[z])})}u&&Dc(u,n,"c");function Z(Q,z){Ge(z)?z.forEach(ge=>Q(ge.bind(t))):z&&Q(z.bind(t))}if(Z(op,f),Z(yi,h),Z(ap,p),Z(lp,x),Z(ip,_),Z(rp,m),Z(dp,U),Z(fp,D),Z(up,P),Z(Yi,A),Z(Jl,S),Z(cp,M),Ge(E))if(E.length){const Q=n.exposed||(n.exposed={});E.forEach(z=>{Object.defineProperty(Q,z,{get:()=>t[z],set:ge=>t[z]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Pn&&(n.render=C),R!=null&&(n.inheritAttrs=R),F&&(n.components=F),N&&(n.directives=N),M&&Kf(n)}function vp(n,e,t=Pn){Ge(n)&&(n=Xa(n));for(const i in n){const r=n[i];let s;gt(r)?"default"in r?s=Qr(r.from||i,r.default,!0):s=Qr(r.from||i):s=Qr(r),Ot(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Dc(n,e,t){Mn(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Jf(n,e,t,i){let r=i.includes(".")?ud(t,i):()=>t[i];if(Mt(n)){const s=e[n];Ye(s)&&es(r,s)}else if(Ye(n))es(r,n.bind(t));else if(gt(n))if(Ge(n))n.forEach(s=>Jf(s,e,t,i));else{const s=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(s)&&es(r,s,n)}}function Qf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>xo(l,c,o,!0)),xo(l,e,o)),gt(e)&&s.set(e,l),l}function xo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&xo(n,s,t,!0),r&&r.forEach(o=>xo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=xp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const xp={data:Lc,props:Ic,emits:Ic,methods:Gr,computed:Gr,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:Gr,directives:Gr,watch:Mp,provide:Lc,inject:Sp};function Lc(n,e){return e?n?function(){return Rt(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function Sp(n,e){return Gr(Xa(n),Xa(e))}function Xa(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ht(n,e){return n?[...new Set([].concat(n,e))]:e}function Gr(n,e){return n?Rt(Object.create(null),n,e):e}function Ic(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:Rt(Object.create(null),Pc(n),Pc(e??{})):e}function Mp(n,e){if(!n)return e;if(!e)return n;const t=Rt(Object.create(null),n);for(const i in e)t[i]=Ht(n[i],e[i]);return t}function ed(){return{app:null,config:{isNativeTag:ch,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yp=0;function bp(n,e){return function(i,r=null){Ye(i)||(i=Rt({},i)),r!=null&&!gt(r)&&(r=null);const s=ed(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:yp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:sm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(c,...f)):Ye(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||st(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,zo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Mn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=xr;xr=c;try{return u()}finally{xr=f}}};return c}}let xr=null;function Ep(n,e){if(Ft){let t=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===t&&(t=Ft.provides=Object.create(i)),t[n]=e}}function Qr(n,e,t=!1){const i=md();if(i||xr){let r=xr?xr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const td={},nd=()=>Object.create(td),id=n=>Object.getPrototypeOf(n)===td;function Tp(n,e,t,i=!1){const r={},s=nd();n.propsDefaults=Object.create(null),rd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:kh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ap(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=nt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Oo(n.emitsOptions,h))continue;const p=e[h];if(l)if(rt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const x=Ln(h);r[x]=$a(l,a,x,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{rd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=qi(f))===f||!rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=$a(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&Gn(n.attrs,"set","")}function rd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if($r(l))continue;const c=e[l];let u;r&&rt(r,u=Ln(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Oo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=nt(t),c=a||ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=$a(r,l,f,c[f],n,!rt(c,f))}}return o}function $a(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=vs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===qi(t))&&(i=!0))}return i}const wp=new WeakMap;function sd(n,e,t=!1){const i=t?wp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ye(n)){const u=f=>{l=!0;const[h,p]=sd(f,e,!0);Rt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return gt(n)&&i.set(n,mr),mr;if(Ge(s))for(let u=0;u<s.length;u++){const f=Ln(s[u]);Uc(f)&&(o[f]=ft)}else if(s)for(const u in s){const f=Ln(u);if(Uc(f)){const h=s[u],p=o[f]=Ge(h)||Ye(h)?{type:h}:Rt({},h),x=p.type;let _=!1,m=!0;if(Ge(x))for(let d=0;d<x.length;++d){const A=x[d],T=Ye(A)&&A.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(m=!1)}else _=Ye(x)&&x.name==="Boolean";p[0]=_,p[1]=m,(_||rt(p,"default"))&&a.push(f)}}const c=[o,a];return gt(n)&&i.set(n,c),c}function Uc(n){return n[0]!=="$"&&!$r(n)}const Ql=n=>n==="_"||n==="__"||n==="_ctx"||n==="$stable",ec=n=>Ge(n)?n.map(An):[An(n)],Rp=(n,e,t)=>{if(e._n)return e;const i=Zl((...r)=>ec(e(...r)),t);return i._c=!1,i},od=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ql(r))continue;const s=n[r];if(Ye(s))e[r]=Rp(r,s,i);else if(s!=null){const o=ec(s);e[r]=()=>o}}},ad=(n,e)=>{const t=ec(e);n.slots.default=()=>t},ld=(n,e,t)=>{for(const i in e)(t||!Ql(i))&&(n[i]=e[i])},Cp=(n,e,t)=>{const i=n.slots=nd();if(n.vnode.shapeFlag&32){const r=e.__;r&&Na(i,"__",r,!0);const s=e._;s?(ld(i,e,t),t&&Na(i,"_",s,!0)):od(e,i)}else e&&ad(n,e)},Pp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:ld(r,e,t):(s=!e.$stable,od(e,r)),o=e}else e&&(ad(n,e),o={default:1});if(s)for(const a in r)!Ql(a)&&o[a]==null&&delete r[a]},Vt=Xp;function Dp(n){return Lp(n)}function Lp(n,e){const t=Lo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Pn,insertStaticContent:x}=n,_=(w,v,V,q=null,J=null,W=null,ae=void 0,j=null,ne=!!v.dynamicChildren)=>{if(w===v)return;w&&!zi(w,v)&&(q=he(w),ze(w,J,W,!0),w=null),v.patchFlag===-2&&(ne=!1,v.dynamicChildren=null);const{type:re,ref:Se,shapeFlag:y}=v;switch(re){case Bo:m(w,v,V,q);break;case Wt:d(w,v,V,q);break;case so:w==null&&A(v,V,q,ae);break;case Dt:F(w,v,V,q,J,W,ae,j,ne);break;default:y&1?C(w,v,V,q,J,W,ae,j,ne):y&6?N(w,v,V,q,J,W,ae,j,ne):(y&64||y&128)&&re.process(w,v,V,q,J,W,ae,j,ne,He)}Se!=null&&J?Kr(Se,w&&w.ref,W,v||w,!v):Se==null&&w&&w.ref!=null&&Kr(w.ref,null,W,w,!0)},m=(w,v,V,q)=>{if(w==null)i(v.el=a(v.children),V,q);else{const J=v.el=w.el;v.children!==w.children&&c(J,v.children)}},d=(w,v,V,q)=>{w==null?i(v.el=l(v.children||""),V,q):v.el=w.el},A=(w,v,V,q)=>{[w.el,w.anchor]=x(w.children,v,V,q,w.el,w.anchor)},T=({el:w,anchor:v},V,q)=>{let J;for(;w&&w!==v;)J=h(w),i(w,V,q),w=J;i(v,V,q)},S=({el:w,anchor:v})=>{let V;for(;w&&w!==v;)V=h(w),r(w),w=V;r(v)},C=(w,v,V,q,J,W,ae,j,ne)=>{v.type==="svg"?ae="svg":v.type==="math"&&(ae="mathml"),w==null?D(v,V,q,J,W,ae,j,ne):M(w,v,J,W,ae,j,ne)},D=(w,v,V,q,J,W,ae,j)=>{let ne,re;const{props:Se,shapeFlag:y,transition:g,dirs:L}=w;if(ne=w.el=o(w.type,W,Se&&Se.is,Se),y&8?u(ne,w.children):y&16&&U(w.children,ne,null,q,J,Jo(w,W),ae,j),L&&Ti(w,null,q,"created"),P(ne,w,w.scopeId,ae,q),Se){for(const te in Se)te!=="value"&&!$r(te)&&s(ne,te,null,Se[te],W,q);"value"in Se&&s(ne,"value",null,Se.value,W),(re=Se.onVnodeBeforeMount)&&En(re,q,w)}L&&Ti(w,null,q,"beforeMount");const k=Ip(J,g);k&&g.beforeEnter(ne),i(ne,v,V),((re=Se&&Se.onVnodeMounted)||k||L)&&Vt(()=>{re&&En(re,q,w),k&&g.enter(ne),L&&Ti(w,null,q,"mounted")},J)},P=(w,v,V,q,J)=>{if(V&&p(w,V),q)for(let W=0;W<q.length;W++)p(w,q[W]);if(J){let W=J.subTree;if(v===W||dd(W.type)&&(W.ssContent===v||W.ssFallback===v)){const ae=J.vnode;P(w,ae,ae.scopeId,ae.slotScopeIds,J.parent)}}},U=(w,v,V,q,J,W,ae,j,ne=0)=>{for(let re=ne;re<w.length;re++){const Se=w[re]=j?di(w[re]):An(w[re]);_(null,Se,v,V,q,J,W,ae,j)}},M=(w,v,V,q,J,W,ae)=>{const j=v.el=w.el;let{patchFlag:ne,dynamicChildren:re,dirs:Se}=v;ne|=w.patchFlag&16;const y=w.props||ft,g=v.props||ft;let L;if(V&&Ai(V,!1),(L=g.onVnodeBeforeUpdate)&&En(L,V,v,w),Se&&Ti(v,w,V,"beforeUpdate"),V&&Ai(V,!0),(y.innerHTML&&g.innerHTML==null||y.textContent&&g.textContent==null)&&u(j,""),re?E(w.dynamicChildren,re,j,V,q,Jo(v,J),W):ae||z(w,v,j,null,V,q,Jo(v,J),W,!1),ne>0){if(ne&16)R(j,y,g,V,J);else if(ne&2&&y.class!==g.class&&s(j,"class",null,g.class,J),ne&4&&s(j,"style",y.style,g.style,J),ne&8){const k=v.dynamicProps;for(let te=0;te<k.length;te++){const G=k[te],Ee=y[G],le=g[G];(le!==Ee||G==="value")&&s(j,G,Ee,le,J,V)}}ne&1&&w.children!==v.children&&u(j,v.children)}else!ae&&re==null&&R(j,y,g,V,J);((L=g.onVnodeUpdated)||Se)&&Vt(()=>{L&&En(L,V,v,w),Se&&Ti(v,w,V,"updated")},q)},E=(w,v,V,q,J,W,ae)=>{for(let j=0;j<v.length;j++){const ne=w[j],re=v[j],Se=ne.el&&(ne.type===Dt||!zi(ne,re)||ne.shapeFlag&198)?f(ne.el):V;_(ne,re,Se,null,q,J,W,ae,!0)}},R=(w,v,V,q,J)=>{if(v!==V){if(v!==ft)for(const W in v)!$r(W)&&!(W in V)&&s(w,W,v[W],null,J,q);for(const W in V){if($r(W))continue;const ae=V[W],j=v[W];ae!==j&&W!=="value"&&s(w,W,j,ae,J,q)}"value"in V&&s(w,"value",v.value,V.value,J)}},F=(w,v,V,q,J,W,ae,j,ne)=>{const re=v.el=w?w.el:a(""),Se=v.anchor=w?w.anchor:a("");let{patchFlag:y,dynamicChildren:g,slotScopeIds:L}=v;L&&(j=j?j.concat(L):L),w==null?(i(re,V,q),i(Se,V,q),U(v.children||[],V,Se,J,W,ae,j,ne)):y>0&&y&64&&g&&w.dynamicChildren?(E(w.dynamicChildren,g,V,J,W,ae,j),(v.key!=null||J&&v===J.subTree)&&tc(w,v,!0)):z(w,v,V,Se,J,W,ae,j,ne)},N=(w,v,V,q,J,W,ae,j,ne)=>{v.slotScopeIds=j,w==null?v.shapeFlag&512?J.ctx.activate(v,V,q,ae,ne):H(v,V,q,J,W,ae,ne):ie(w,v,ne)},H=(w,v,V,q,J,W,ae)=>{const j=w.component=Jp(w,q,J);if(No(w)&&(j.ctx.renderer=He),Qp(j,!1,ae),j.asyncDep){if(J&&J.registerDep(j,Z,ae),!w.el){const ne=j.subTree=st(Wt);d(null,ne,v,V),w.placeholder=ne.el}}else Z(j,w,v,V,J,W,ae)},ie=(w,v,V)=>{const q=v.component=w.component;if(Gp(w,v,V))if(q.asyncDep&&!q.asyncResolved){Q(q,v,V);return}else q.next=v,q.update();else v.el=w.el,q.vnode=v},Z=(w,v,V,q,J,W,ae)=>{const j=()=>{if(w.isMounted){let{next:y,bu:g,u:L,parent:k,vnode:te}=w;{const Ae=cd(w);if(Ae){y&&(y.el=te.el,Q(w,y,ae)),Ae.asyncDep.then(()=>{w.isUnmounted||j()});return}}let G=y,Ee;Ai(w,!1),y?(y.el=te.el,Q(w,y,ae)):y=te,g&&io(g),(Ee=y.props&&y.props.onVnodeBeforeUpdate)&&En(Ee,k,y,te),Ai(w,!0);const le=Fc(w),Te=w.subTree;w.subTree=le,_(Te,le,f(Te.el),he(Te),w,J,W),y.el=le.el,G===null&&Wp(w,le.el),L&&Vt(L,J),(Ee=y.props&&y.props.onVnodeUpdated)&&Vt(()=>En(Ee,k,y,te),J)}else{let y;const{el:g,props:L}=v,{bm:k,m:te,parent:G,root:Ee,type:le}=w,Te=Zr(v);Ai(w,!1),k&&io(k),!Te&&(y=L&&L.onVnodeBeforeMount)&&En(y,G,v),Ai(w,!0);{Ee.ce&&Ee.ce._def.shadowRoot!==!1&&Ee.ce._injectChildStyle(le);const Ae=w.subTree=Fc(w);_(null,Ae,V,q,w,J,W),v.el=Ae.el}if(te&&Vt(te,J),!Te&&(y=L&&L.onVnodeMounted)){const Ae=v;Vt(()=>En(y,G,Ae),J)}(v.shapeFlag&256||G&&Zr(G.vnode)&&G.vnode.shapeFlag&256)&&w.a&&Vt(w.a,J),w.isMounted=!0,v=V=q=null}};w.scope.on();const ne=w.effect=new vf(j);w.scope.off();const re=w.update=ne.run.bind(ne),Se=w.job=ne.runIfDirty.bind(ne);Se.i=w,Se.id=w.uid,ne.scheduler=()=>Kl(Se),Ai(w,!0),re()},Q=(w,v,V)=>{v.component=w;const q=w.vnode.props;w.vnode=v,w.next=null,Ap(w,v.props,q,V),Pp(w,v.children,V),Kn(),Ec(w),Zn()},z=(w,v,V,q,J,W,ae,j,ne=!1)=>{const re=w&&w.children,Se=w?w.shapeFlag:0,y=v.children,{patchFlag:g,shapeFlag:L}=v;if(g>0){if(g&128){xe(re,y,V,q,J,W,ae,j,ne);return}else if(g&256){ge(re,y,V,q,J,W,ae,j,ne);return}}L&8?(Se&16&&me(re,J,W),y!==re&&u(V,y)):Se&16?L&16?xe(re,y,V,q,J,W,ae,j,ne):me(re,J,W,!0):(Se&8&&u(V,""),L&16&&U(y,V,q,J,W,ae,j,ne))},ge=(w,v,V,q,J,W,ae,j,ne)=>{w=w||mr,v=v||mr;const re=w.length,Se=v.length,y=Math.min(re,Se);let g;for(g=0;g<y;g++){const L=v[g]=ne?di(v[g]):An(v[g]);_(w[g],L,V,null,J,W,ae,j,ne)}re>Se?me(w,J,W,!0,!1,y):U(v,V,q,J,W,ae,j,ne,y)},xe=(w,v,V,q,J,W,ae,j,ne)=>{let re=0;const Se=v.length;let y=w.length-1,g=Se-1;for(;re<=y&&re<=g;){const L=w[re],k=v[re]=ne?di(v[re]):An(v[re]);if(zi(L,k))_(L,k,V,null,J,W,ae,j,ne);else break;re++}for(;re<=y&&re<=g;){const L=w[y],k=v[g]=ne?di(v[g]):An(v[g]);if(zi(L,k))_(L,k,V,null,J,W,ae,j,ne);else break;y--,g--}if(re>y){if(re<=g){const L=g+1,k=L<Se?v[L].el:q;for(;re<=g;)_(null,v[re]=ne?di(v[re]):An(v[re]),V,k,J,W,ae,j,ne),re++}}else if(re>g)for(;re<=y;)ze(w[re],J,W,!0),re++;else{const L=re,k=re,te=new Map;for(re=k;re<=g;re++){const De=v[re]=ne?di(v[re]):An(v[re]);De.key!=null&&te.set(De.key,re)}let G,Ee=0;const le=g-k+1;let Te=!1,Ae=0;const ce=new Array(le);for(re=0;re<le;re++)ce[re]=0;for(re=L;re<=y;re++){const De=w[re];if(Ee>=le){ze(De,J,W,!0);continue}let we;if(De.key!=null)we=te.get(De.key);else for(G=k;G<=g;G++)if(ce[G-k]===0&&zi(De,v[G])){we=G;break}we===void 0?ze(De,J,W,!0):(ce[we-k]=re+1,we>=Ae?Ae=we:Te=!0,_(De,v[we],V,null,J,W,ae,j,ne),Ee++)}const ye=Te?Up(ce):mr;for(G=ye.length-1,re=le-1;re>=0;re--){const De=k+re,we=v[De],ve=v[De+1],$e=De+1<Se?ve.el||ve.placeholder:q;ce[re]===0?_(null,we,V,$e,J,W,ae,j,ne):Te&&(G<0||re!==ye[G]?Re(we,V,$e,2):G--)}}},Re=(w,v,V,q,J=null)=>{const{el:W,type:ae,transition:j,children:ne,shapeFlag:re}=w;if(re&6){Re(w.component.subTree,v,V,q);return}if(re&128){w.suspense.move(v,V,q);return}if(re&64){ae.move(w,v,V,He);return}if(ae===Dt){i(W,v,V);for(let y=0;y<ne.length;y++)Re(ne[y],v,V,q);i(w.anchor,v,V);return}if(ae===so){T(w,v,V);return}if(q!==2&&re&1&&j)if(q===0)j.beforeEnter(W),i(W,v,V),Vt(()=>j.enter(W),J);else{const{leave:y,delayLeave:g,afterLeave:L}=j,k=()=>{w.ctx.isUnmounted?r(W):i(W,v,V)},te=()=>{y(W,()=>{k(),L&&L()})};g?g(W,k,te):te()}else i(W,v,V)},ze=(w,v,V,q=!1,J=!1)=>{const{type:W,props:ae,ref:j,children:ne,dynamicChildren:re,shapeFlag:Se,patchFlag:y,dirs:g,cacheIndex:L}=w;if(y===-2&&(J=!1),j!=null&&(Kn(),Kr(j,null,V,w,!0),Zn()),L!=null&&(v.renderCache[L]=void 0),Se&256){v.ctx.deactivate(w);return}const k=Se&1&&g,te=!Zr(w);let G;if(te&&(G=ae&&ae.onVnodeBeforeUnmount)&&En(G,v,w),Se&6)ee(w.component,V,q);else{if(Se&128){w.suspense.unmount(V,q);return}k&&Ti(w,null,v,"beforeUnmount"),Se&64?w.type.remove(w,v,V,He,q):re&&!re.hasOnce&&(W!==Dt||y>0&&y&64)?me(re,v,V,!1,!0):(W===Dt&&y&384||!J&&Se&16)&&me(ne,v,V),q&&Fe(w)}(te&&(G=ae&&ae.onVnodeUnmounted)||k)&&Vt(()=>{G&&En(G,v,w),k&&Ti(w,null,v,"unmounted")},V)},Fe=w=>{const{type:v,el:V,anchor:q,transition:J}=w;if(v===Dt){Xe(V,q);return}if(v===so){S(w);return}const W=()=>{r(V),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(w.shapeFlag&1&&J&&!J.persisted){const{leave:ae,delayLeave:j}=J,ne=()=>ae(V,W);j?j(w.el,W,ne):ne()}else W()},Xe=(w,v)=>{let V;for(;w!==v;)V=h(w),r(w),w=V;r(v)},ee=(w,v,V)=>{const{bum:q,scope:J,job:W,subTree:ae,um:j,m:ne,a:re,parent:Se,slots:{__:y}}=w;Nc(ne),Nc(re),q&&io(q),Se&&Ge(y)&&y.forEach(g=>{Se.renderCache[g]=void 0}),J.stop(),W&&(W.flags|=8,ze(ae,w,v,V)),j&&Vt(j,v),Vt(()=>{w.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},me=(w,v,V,q=!1,J=!1,W=0)=>{for(let ae=W;ae<w.length;ae++)ze(w[ae],v,V,q,J)},he=w=>{if(w.shapeFlag&6)return he(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const v=h(w.anchor||w.el),V=v&&v[Hf];return V?h(V):v};let Ne=!1;const Oe=(w,v,V)=>{w==null?v._vnode&&ze(v._vnode,null,null,!0):_(v._vnode||null,w,v,null,null,null,V),v._vnode=w,Ne||(Ne=!0,Ec(),Of(),Ne=!1)},He={p:_,um:ze,m:Re,r:Fe,mt:H,mc:U,pc:z,pbc:E,n:he,o:n};return{render:Oe,hydrate:void 0,createApp:bp(Oe)}}function Jo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ai({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ip(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function tc(n,e,t=!1){const i=n.children,r=e.children;if(Ge(i)&&Ge(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=di(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&tc(o,a)),a.type===Bo&&(a.el=o.el),a.type===Wt&&!a.el&&(a.el=o.el)}}function Up(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function cd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cd(e)}function Nc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Np=Symbol.for("v-scx"),Fp=()=>Qr(Np);function Op(n,e){return nc(n,null,e)}function es(n,e,t){return nc(n,e,t)}function nc(n,e,t=ft){const{immediate:i,deep:r,flush:s,once:o}=t,a=Rt({},t),l=e&&i||!e&&s!=="post";let c;if(fs){if(s==="sync"){const p=Fp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Pn,p.resume=Pn,p.pause=Pn,p}}const u=Ft;a.call=(p,x,_)=>Mn(p,u,x,_);let f=!1;s==="post"?a.scheduler=p=>{Vt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,x)=>{x?p():Kl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=jh(n,e,a);return fs&&(c?c.push(h):l&&h()),h}function Bp(n,e,t){const i=this.proxy,r=Mt(n)?n.includes(".")?ud(i,n):()=>i[n]:n.bind(i,i);let s;Ye(e)?s=e:(s=e.handler,t=e);const o=vs(this),a=nc(r,s.bind(i),t);return o(),a}function ud(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const zp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ln(e)}Modifiers`]||n[`${qi(e)}Modifiers`];function Hp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let r=t;const s=e.startsWith("update:"),o=s&&zp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Mt(u)?u.trim():u)),o.number&&(r=t.map(Fa)));let a,l=i[a=Xo(e)]||i[a=Xo(Ln(e))];!l&&s&&(l=i[a=Xo(qi(e))]),l&&Mn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Mn(c,n,6,r)}}function fd(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ye(n)){const l=c=>{const u=fd(c,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(gt(n)&&i.set(n,null),null):(Ge(s)?s.forEach(l=>o[l]=null):Rt(o,s),gt(n)&&i.set(n,o),o)}function Oo(n,e){return!n||!Co(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,qi(e))||rt(n,e))}function Fc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:x,inheritAttrs:_}=n,m=vo(n);let d,A;try{if(t.shapeFlag&4){const S=r||i,C=S;d=An(c.call(C,S,u,f,p,h,x)),A=a}else{const S=e;d=An(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),A=e.props?a:kp(a)}}catch(S){ts.length=0,Uo(S,n,1),d=st(Wt)}let T=d;if(A&&_!==!1){const S=Object.keys(A),{shapeFlag:C}=T;S.length&&C&7&&(s&&S.some(zl)&&(A=Vp(A,s)),T=vi(T,A,!1,!0))}return t.dirs&&(T=vi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&as(T,t.transition),d=T,vo(m),d}const kp=n=>{let e;for(const t in n)(t==="class"||t==="style"||Co(t))&&((e||(e={}))[t]=n[t]);return e},Vp=(n,e)=>{const t={};for(const i in n)(!zl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Gp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Oc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Oo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Oc(i,o,c):!0:!!o;return!1}function Oc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Oo(t,s))return!0}return!1}function Wp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const dd=n=>n.__isSuspense;function Xp(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):Jh(n)}const Dt=Symbol.for("v-fgt"),Bo=Symbol.for("v-txt"),Wt=Symbol.for("v-cmt"),so=Symbol.for("v-stc"),ts=[];let tn=null;function oe(n=!1){ts.push(tn=n?null:[])}function $p(){ts.pop(),tn=ts[ts.length-1]||null}let cs=1;function Bc(n,e=!1){cs+=n,n<0&&tn&&e&&(tn.hasOnce=!0)}function hd(n){return n.dynamicChildren=cs>0?tn||mr:null,$p(),cs>0&&tn&&tn.push(n),n}function ue(n,e,t,i,r,s){return hd($(n,e,t,i,r,s,!0))}function us(n,e,t,i,r){return hd(st(n,e,t,i,r,!0))}function So(n){return n?n.__v_isVNode===!0:!1}function zi(n,e){return n.type===e.type&&n.key===e.key}const pd=({key:n})=>n??null,oo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mt(n)||Ot(n)||Ye(n)?{i:en,r:n,k:e,f:!!t}:n:null);function $(n,e=null,t=null,i=0,r=null,s=n===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&pd(e),ref:e&&oo(e),scopeId:zf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return a?(ic(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Mt(t)?8:16),cs>0&&!o&&tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tn.push(l),l}const st=qp;function qp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===pp)&&(n=Wt),So(n)){const a=vi(n,e,!0);return t&&ic(a,t),cs>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(n)]=a:tn.push(a)),a.patchFlag=-2,a}if(im(n)&&(n=n.__vccOpts),e){e=Yp(e);let{class:a,style:l}=e;a&&!Mt(a)&&(e.class=$n(a)),gt(l)&&(jl(l)&&!Ge(l)&&(l=Rt({},l)),e.style=br(l))}const o=Mt(n)?1:dd(n)?128:kf(n)?64:gt(n)?4:Ye(n)?2:0;return $(n,e,t,i,r,o,s,!0)}function Yp(n){return n?jl(n)||id(n)?Rt({},n):n:null}function vi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?jp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&pd(c),ref:e&&e.ref?t&&s?Ge(s)?s.concat(oo(e)):[s,oo(e)]:oo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Dt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vi(n.ssContent),ssFallback:n.ssFallback&&vi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&as(u,l.clone(u)),u}function St(n=" ",e=0){return st(Bo,null,n,e)}function Dn(n,e){const t=st(so,null,n);return t.staticCount=e,t}function Ut(n="",e=!1){return e?(oe(),us(Wt,null,n)):st(Wt,null,n)}function An(n){return n==null||typeof n=="boolean"?st(Wt):Ge(n)?st(Dt,null,n.slice()):So(n)?di(n):st(Bo,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vi(n)}function ic(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ic(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!id(e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:en},t=32):(e=String(e),i&64?(t=16,e=[St(e)]):t=8);n.children=e,n.shapeFlag|=t}function jp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=$n([e.class,i.class]));else if(r==="style")e.style=br([e.style,i.style]);else if(Co(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ge(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function En(n,e,t,i=null){Mn(n,e,7,[t,i])}const Kp=ed();let Zp=0;function Jp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Kp,s={uid:Zp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sd(i,r),emitsOptions:fd(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Hp.bind(null,s),n.ce&&n.ce(s),s}let Ft=null;const md=()=>Ft||en;let Mo,qa;{const n=Lo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Mo=e("__VUE_INSTANCE_SETTERS__",t=>Ft=t),qa=e("__VUE_SSR_SETTERS__",t=>fs=t)}const vs=n=>{const e=Ft;return Mo(n),n.scope.on(),()=>{n.scope.off(),Mo(e)}},zc=()=>{Ft&&Ft.scope.off(),Mo(null)};function gd(n){return n.vnode.shapeFlag&4}let fs=!1;function Qp(n,e=!1,t=!1){e&&qa(e);const{props:i,children:r}=n.vnode,s=gd(n);Tp(n,i,s,e),Cp(n,r,t||e);const o=s?em(n,e):void 0;return e&&qa(!1),o}function em(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gp);const{setup:i}=t;if(i){Kn();const r=n.setupContext=i.length>1?nm(n):null,s=vs(n),o=_s(i,n,0,[n.props,r]),a=df(o);if(Zn(),s(),(a||n.sp)&&!Zr(n)&&Kf(n),a){if(o.then(zc,zc),e)return o.then(l=>{Hc(n,l)}).catch(l=>{Uo(l,n,0)});n.asyncDep=o}else Hc(n,o)}else _d(n)}function Hc(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=Uf(e)),_d(n)}function _d(n,e,t){const i=n.type;n.render||(n.render=i.render||Pn);{const r=vs(n);Kn();try{_p(n)}finally{Zn(),r()}}}const tm={get(n,e){return Nt(n,"get",""),n[e]}};function nm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,tm),slots:n.slots,emit:n.emit,expose:e}}function zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Uf(Vh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Jr)return Jr[t](n)},has(e,t){return t in e||t in Jr}})):n.proxy}function im(n){return Ye(n)&&"__vccOpts"in n}const ns=(n,e)=>qh(n,e,fs);function rm(n,e,t){const i=arguments.length;return i===2?gt(e)&&!Ge(e)?So(e)?st(n,null,[e]):st(n,e):st(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&So(t)&&(t=[t]),st(n,e,t))}const sm="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ya;const kc=typeof window<"u"&&window.trustedTypes;if(kc)try{Ya=kc.createPolicy("vue",{createHTML:n=>n})}catch{}const vd=Ya?n=>Ya.createHTML(n):n=>n,om="http://www.w3.org/2000/svg",am="http://www.w3.org/1998/Math/MathML",Vn=typeof document<"u"?document:null,Vc=Vn&&Vn.createElement("template"),lm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Vn.createElementNS(om,n):e==="mathml"?Vn.createElementNS(am,n):t?Vn.createElement(n,{is:t}):Vn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Vn.createTextNode(n),createComment:n=>Vn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Vc.innerHTML=vd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Vc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ii="transition",Ur="animation",ds=Symbol("_vtc"),xd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cm=Rt({},Xf,xd),um=n=>(n.displayName="Transition",n.props=cm,n),Sd=um((n,{slots:e})=>rm(np,fm(n),e)),wi=(n,e=[])=>{Ge(n)?n.forEach(t=>t(...e)):n&&n(...e)},Gc=n=>n?Ge(n)?n.some(e=>e.length>1):n.length>1:!1;function fm(n){const e={};for(const F in n)F in xd||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,x=dm(r),_=x&&x[0],m=x&&x[1],{onBeforeEnter:d,onEnter:A,onEnterCancelled:T,onLeave:S,onLeaveCancelled:C,onBeforeAppear:D=d,onAppear:P=A,onAppearCancelled:U=T}=e,M=(F,N,H,ie)=>{F._enterCancelled=ie,Ri(F,N?u:a),Ri(F,N?c:o),H&&H()},E=(F,N)=>{F._isLeaving=!1,Ri(F,f),Ri(F,p),Ri(F,h),N&&N()},R=F=>(N,H)=>{const ie=F?P:A,Z=()=>M(N,F,H);wi(ie,[N,Z]),Wc(()=>{Ri(N,F?l:s),Nn(N,F?u:a),Gc(ie)||Xc(N,i,_,Z)})};return Rt(e,{onBeforeEnter(F){wi(d,[F]),Nn(F,s),Nn(F,o)},onBeforeAppear(F){wi(D,[F]),Nn(F,l),Nn(F,c)},onEnter:R(!1),onAppear:R(!0),onLeave(F,N){F._isLeaving=!0;const H=()=>E(F,N);Nn(F,f),F._enterCancelled?(Nn(F,h),Yc()):(Yc(),Nn(F,h)),Wc(()=>{F._isLeaving&&(Ri(F,f),Nn(F,p),Gc(S)||Xc(F,i,m,H))}),wi(S,[F,H])},onEnterCancelled(F){M(F,!1,void 0,!0),wi(T,[F])},onAppearCancelled(F){M(F,!0,void 0,!0),wi(U,[F])},onLeaveCancelled(F){E(F),wi(C,[F])}})}function dm(n){if(n==null)return null;if(gt(n))return[Qo(n.enter),Qo(n.leave)];{const e=Qo(n);return[e,e]}}function Qo(n){return ph(n)}function Nn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ds]||(n[ds]=new Set)).add(e)}function Ri(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ds];t&&(t.delete(e),t.size||(n[ds]=void 0))}function Wc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let hm=0;function Xc(n,e,t,i){const r=n._endId=++hm,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=pm(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function pm(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),r=i(`${ii}Delay`),s=i(`${ii}Duration`),o=$c(r,s),a=i(`${Ur}Delay`),l=i(`${Ur}Duration`),c=$c(a,l);let u=null,f=0,h=0;e===ii?o>0&&(u=ii,f=o,h=s.length):e===Ur?c>0&&(u=Ur,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?ii:Ur:null,h=u?u===ii?s.length:l.length:0);const p=u===ii&&/\b(transform|all)(,|$)/.test(i(`${ii}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function $c(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>qc(t)+qc(n[i])))}function qc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Yc(){return document.body.offsetHeight}function mm(n,e,t){const i=n[ds];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const yo=Symbol("_vod"),Md=Symbol("_vsh"),gm={beforeMount(n,{value:e},{transition:t}){n[yo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Nr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Nr(n,!0),i.enter(n)):i.leave(n,()=>{Nr(n,!1)}):Nr(n,e))},beforeUnmount(n,{value:e}){Nr(n,e)}};function Nr(n,e){n.style.display=e?n[yo]:"none",n[Md]=!e}const _m=Symbol(""),vm=/(^|;)\s*display\s*:/;function xm(n,e,t){const i=n.style,r=Mt(t);let s=!1;if(t&&!r){if(e)if(Mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ao(i,a,"")}else for(const o in e)t[o]==null&&ao(i,o,"");for(const o in t)o==="display"&&(s=!0),ao(i,o,t[o])}else if(r){if(e!==t){const o=i[_m];o&&(t+=";"+o),i.cssText=t,s=vm.test(t)}}else e&&n.removeAttribute("style");yo in n&&(n[yo]=s?i.display:"",n[Md]&&(i.display="none"))}const jc=/\s*!important$/;function ao(n,e,t){if(Ge(t))t.forEach(i=>ao(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Sm(n,e);jc.test(t)?n.setProperty(qi(i),t.replace(jc,""),"important"):n[i]=t}}const Kc=["Webkit","Moz","ms"],ea={};function Sm(n,e){const t=ea[e];if(t)return t;let i=Ln(e);if(i!=="filter"&&i in n)return ea[e]=i;i=Vl(i);for(let r=0;r<Kc.length;r++){const s=Kc[r]+i;if(s in n)return ea[e]=s}return e}const Zc="http://www.w3.org/1999/xlink";function Jc(n,e,t,i,r,s=Sh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Zc,e.slice(6,e.length)):n.setAttributeNS(Zc,e,t):t==null||s&&!mf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Mi(t)?String(t):t)}function Qc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?vd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=mf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function hr(n,e,t,i){n.addEventListener(e,t,i)}function Mm(n,e,t,i){n.removeEventListener(e,t,i)}const eu=Symbol("_vei");function ym(n,e,t,i,r=null){const s=n[eu]||(n[eu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=bm(e);if(i){const c=s[e]=Am(i,r);hr(n,a,c,l)}else o&&(Mm(n,a,o,l),s[e]=void 0)}}const tu=/(?:Once|Passive|Capture)$/;function bm(n){let e;if(tu.test(n)){e={};let i;for(;i=n.match(tu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):qi(n.slice(2)),e]}let ta=0;const Em=Promise.resolve(),Tm=()=>ta||(Em.then(()=>ta=0),ta=Date.now());function Am(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Mn(wm(i,t.value),e,5,[i])};return t.value=n,t.attached=Tm(),t}function wm(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const nu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Rm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?mm(n,i,o):e==="style"?xm(n,t,i):Co(e)?zl(e)||ym(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cm(n,e,i,o))?(Qc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Mt(i))?Qc(n,Ln(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Jc(n,e,i,o))};function Cm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&nu(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return nu(e)&&Mt(t)?!1:e in n}const iu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ge(e)?t=>io(e,t):e};function Pm(n){n.target.composing=!0}function ru(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const na=Symbol("_assign"),Zi={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[na]=iu(r);const s=i||r.props&&r.props.type==="number";hr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=Fa(a)),n[na](a)}),t&&hr(n,"change",()=>{n.value=n.value.trim()}),e||(hr(n,"compositionstart",Pm),hr(n,"compositionend",ru),hr(n,"change",ru))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[na]=iu(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Fa(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Dm=["ctrl","shift","alt","meta"],Lm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Dm.some(t=>n[`${t}Key`]&&!e.includes(t))},cn=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Lm[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Im=Rt({patchProp:Rm},lm);let su;function Um(){return su||(su=Dp(Im))}const Nm=(...n)=>{const e=Um().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Om(i);if(!r)return;const s=e._component;!Ye(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Fm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Fm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Om(n){return Mt(n)?document.querySelector(n):n}const Bm="/eclub_logo2.jpg",zm={class:"relative w-full max-w-[820px] px-6 text-center"},Hm={class:"mt-6 flex items-center justify-center gap-3"},km={class:"relative h-full w-full flex items-center justify-center p-4 sm:p-5"},Vm={class:"w-full max-w-[820px] h-[70svh] min-h-[380px] max-h-[760px] bg-black/40 border border-emerald-500/40 rounded-xl shadow-[0_0_40px_-10px_rgba(16,255,128,0.5)] backdrop-blur-sm overflow-hidden ring-1 ring-emerald-400/10 relative animate-crt flex flex-col"},Gm={class:"flex items-center justify-between px-4 py-2 text-xs text-emerald-300/80 shrink-0 relative z-20"},Wm={key:0,class:"inline-block w-2 bg-emerald-300 animate-cursor align-baseline ml-[1px]"},Xm={key:0,class:"pointer-events-none absolute bottom-4 inset-x-0 flex flex-col items-center gap-1 text-emerald-300/80 z-30"},$m=10,qm=100,Ym=200,jm=.35,Km=dn({__name:"TerminalIntro",emits:["done"],setup(n,{emit:e}){const t=e,i=ot([]),r=ot(!0),s=ot(!1),o=ot(!1),a=ot(null),l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=new Audio("/sounds/begin.mp3");c.loop=!1,c.preload="auto";const u=new Audio("/sounds/tick.mp3");u.loop=!1,u.preload="auto";const f=ot(!1),h=ot(!1);c.volume=.7,u.volume=1;async function p(){if(!f.value)try{u.muted=!0,await u.play(),u.pause(),u.currentTime=0,u.muted=!1,c.muted=!0,await c.play(),c.pause(),c.currentTime=0,c.muted=!1,f.value=!0,h.value=!0}catch(N){console.warn("Audio unlock failed (will retry on next interaction)",N)}}const x=ot(!0);function _(){x.value&&(p(),x.value=!1,window.addEventListener("keydown",F),Fi(()=>{U()}))}function m(N){_()}const d=["// === ElectronicClub BOOT SEQUENCE v2.1 ===","","[SYSTEM] 时间线归档: 「高中故事线」 HIGH_SCHOOL_ERA (2022-2025)","[STATUS] 成就解锁: 「我的大学」 UNIVERSITY_ACCESS_KEY","","[LOADING] 新世界模块: 「无尽世界」 UNLIMITED_POSSIBILITIES","  - 可用技能点: ∞ (自由分配模式)","  - 核心规则: 允许失败 | 鼓励探索 | 支持重构","","[DISCOVERY] 发现关键地点: ","  MAKERSPACE_S514 [电子俱乐部]","  特征验证: ","    ████████ 技能孵化指数 100%","    ██████████ 同伴支持等级 114%","","[USER_PROFILE] 检测到新身份:","  用户类别: FRESHMAN_2025","  建议路径: JOIN_CREATOR_COMMUNITY","","[AUTO_LOG] 系统记录片段:",'  > "凌晨3点的调试是最好成长礼 - 2024级学长"','  > "我的第一个LED在这里点亮 - 2023级学姐"','  > ". . ."','  > "我们做到了，这是属于电子俱乐部的荣耀！-2006年学长"','  > ". . ."','  > "我们创建一个电子俱乐部吧，为了我们的那份热爱。-1982年学长"',"","[RESOURCE] 可用工具包:","  1. BEGINNER_FRIENDLY_STARTER_KIT 「新手保护期」","  2. PROJECT_BASED_LEARNING_PATH 「学习路径」","  3. MENTOR_SUPPORT_NETWORK 「社交支持网络」","","[NOTICE] 不需要预先装备全部技能","  CORE_REQUIREMENT: 好奇心与坚持","","[COUNTDOWN] 主线任务触发","  > 【新手村】：加入电子俱乐部","  > 【渐入佳境】：让你的智能车在学校赛道驰骋","  > 【获得传承】：成为国赛大佬","","> // === 终端交互就绪 ===","> [INPUT REQUIRED] 执行 ./open_poster 查看新世界地图","> 等待用户指令: █","","","",""];let A=!1,T=null;function S(N){return new Promise(H=>setTimeout(H,N))}function C(){T&&cancelAnimationFrame(T),T=requestAnimationFrame(()=>{const N=a.value;N&&(N.scrollTop=N.scrollHeight)})}function D(N){if(l||o.value)return 0;let H=$m;return/[，。、“”‘’…：:;,.!?！？]/.test(N)&&(H+=qm),H*(o.value?jm:1)}async function P(N){if(u.currentTime=0,h.value&&u.play().catch(()=>{}),N.trim()===""&&N!==""){i.value.push(""),await Fi(),C();return}let H="";i.value.push("");const ie=i.value.length-1;for(let Z=0;Z<N.length;Z++){if(A)return;const Q=N[Z];if(H+=Q,i.value[ie]=H,!l&&!o.value){await Fi(),C();const z=D(Q);z>0&&await S(z*(.6+Math.random()*.5))}}!l&&!o.value&&await S(Ym*(.7+Math.random()*.4)),C()}async function U(){i.value=[],r.value=!0;for(let N=0;N<d.length;N++){if(A)return;const H=d[N].startsWith("> ")?"":"> ";await P(H+d[N])}r.value=!1,s.value=!0,await Fi(),C(),h.value&&c.play().catch(()=>{})}function M(){A=!0,o.value=!0,t("done")}function E(){A=!0,o.value=!0,i.value=d.map(N=>N.startsWith("> ")?N:"> "+N),r.value=!1,s.value=!0,Fi(C)}function R(){r.value?E():M()}function F(N){["Enter"," ","ArrowDown"].includes(N.key)&&(N.preventDefault(),R())}return yi(async()=>{await Fi(),window.addEventListener("keydown",m,{once:!0})}),Yi(()=>{window.removeEventListener("keydown",F),window.removeEventListener("keydown",m)}),(N,H)=>x.value?(oe(),ue("section",{key:0,class:"fixed inset-0 z-50 min-h-[100svh] bg-black text-emerald-200 font-mono overflow-hidden select-none grid place-items-center",onClick:_},[$("div",zm,[H[0]||(H[0]=Dn('<div class="overflow-clip mx-auto w-30 h-30 rounded-full border border-emerald-500/40 grid place-items-center shadow-[0_0_40px_-10px_rgba(16,255,128,0.5)] animate-crt" data-v-3196e02b><img src="'+Bm+'" alt="E-Club" class="opacity-90 h-full" data-v-3196e02b></div><h1 class="mt-6 text-2xl font-semibold text-emerald-300" data-v-3196e02b>ElectronicClub OS</h1><p class="mt-2 text-emerald-300/80" data-v-3196e02b>是否启动系统？</p><p class="mt-1 text-xs text-emerald-300/60" data-v-3196e02b>点击或按任意键开始</p><p class="mt-1 text-xs text-emerald-300/60" data-v-3196e02b>Click / Press any key to start</p>',5)),$("div",Hm,[$("button",{type:"button",class:"px-4 py-2 rounded border border-emerald-500/40 hover:bg-emerald-500/10 active:scale-95 transition flex items-center justify-center font-semibold text-base text-emerald-300 shadow-md",onClick:cn(_,["stop"])},"启动"),$("button",{type:"button",class:"px-4 py-2 rounded border border-emerald-500/20 text-emerald-300/70 hover:bg-white/5 active:scale-95 transition flex items-center justify-center font-semibold text-base shadow",onClick:cn(M,["stop"])},"直接进入")])]),H[1]||(H[1]=$("div",{class:"absolute inset-0 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(16,255,128,0.08),rgba(0,0,0,0)_70%)]"},null,-1)),H[2]||(H[2]=$("div",{class:"absolute inset-0 pointer-events-none scanline"},null,-1))])):(oe(),ue("section",{key:1,class:"fixed inset-0 z-50 min-h-[100svh] bg-black text-emerald-200 font-mono overflow-hidden select-none overscroll-y-none",onClick:R,onTouchstartPassive:R},[H[6]||(H[6]=Dn('<div class="absolute inset-0 pointer-events-none crt-grid opacity-30" data-v-3196e02b></div><div class="absolute inset-0 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(16,255,128,0.07),rgba(0,0,0,0)_70%)]" data-v-3196e02b></div><div class="absolute inset-0 pointer-events-none scanline" data-v-3196e02b></div><div class="absolute inset-x-0 top-0 h-16 fade-top pointer-events-none" data-v-3196e02b></div><div class="absolute inset-x-0 bottom-0 h-20 fade-bottom pointer-events-none" data-v-3196e02b></div>',5)),$("div",km,[$("div",Vm,[$("div",Gm,[H[3]||(H[3]=$("div",{class:"flex items-center gap-2 relative"},[$("span",{class:"size-2 rounded-full bg-emerald-400 animate-pulse"}),$("span",{class:"relative z-10"},"E-Club Terminal"),$("span",{class:"absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-10 bg-emerald-300/20 backdrop-blur-md rounded-full blur-md z-0 pointer-events-none"})],-1)),$("button",{type:"button",class:"px-2 py-1 rounded border border-emerald-500/40 hover:bg-emerald-500/10 active:scale-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50",onClick:cn(M,["stop"]),"aria-label":"跳过"},"跳过")]),$("div",{ref_key:"scroller",ref:a,class:"flex-1 w-full px-4 pb-20 pt-1 sm:px-6 sm:pb-24 md:px-8 md:pb-24 overflow-y-auto terminal-mask no-scrollbar text-[13px] sm:text-sm leading-[1.4] tracking-wide relative"},[$("div",null,[(oe(!0),ue(Dt,null,ls(i.value,(ie,Z)=>(oe(),ue("div",{key:Z,class:$n(["whitespace-pre-wrap transition-opacity duration-300 will-change-transform",[ie.trim()===""?"opacity-40 h-5":"glow-text",Z===i.value.length-1&&r.value?"pr-2":""]])},[St(Ct(ie)+" ",1),Z===i.value.length-1&&r.value?(oe(),ue("span",Wm)):Ut("",!0)],2))),128))])],512),s.value?(oe(),ue("div",Xm,H[4]||(H[4]=[$("span",{class:"text-[11px] uppercase tracking-widest"},"轻触继续 / Press to continue",-1),$("span",{class:"animate-bounce text-emerald-300 text-lg"},"↓",-1)]))):Ut("",!0),H[5]||(H[5]=$("div",{class:"pointer-events-none absolute -inset-px rounded-xl border border-emerald-400/10 shadow-[0_0_20px_2px_rgba(16,255,128,0.08)_inset]"},null,-1))])])],32))}}),ni=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Zm=ni(Km,[["__scopeId","data-v-3196e02b"]]),Jm="/logo.svg",Qm="/eclub_logo.jpg";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="179",eg=0,ou=1,tg=2,yd=1,ng=2,kn=3,xi=0,jt=1,Xn=2,mi=0,Sr=1,bo=2,au=3,lu=4,ig=5,Hi=100,rg=101,sg=102,og=103,ag=104,lg=200,cg=201,ug=202,fg=203,ja=204,Ka=205,dg=206,hg=207,pg=208,mg=209,gg=210,_g=211,vg=212,xg=213,Sg=214,Za=0,Ja=1,Qa=2,Er=3,el=4,tl=5,nl=6,il=7,bd=0,Mg=1,yg=2,gi=0,bg=1,Eg=2,Tg=3,Ag=4,wg=5,Rg=6,Cg=7,Ed=300,Tr=301,Ar=302,rl=303,sl=304,Ho=306,ol=1e3,Vi=1001,al=1002,xn=1003,Pg=1004,Ls=1005,Rn=1006,ia=1007,Gi=1008,Qn=1009,Td=1010,Ad=1011,hs=1012,sc=1013,Xi=1014,qn=1015,xs=1016,oc=1017,ac=1018,ps=1020,wd=35902,Rd=1021,Cd=1022,_n=1023,ms=1026,gs=1027,Pd=1028,lc=1029,Dd=1030,cc=1031,uc=1033,lo=33776,co=33777,uo=33778,fo=33779,ll=35840,cl=35841,ul=35842,fl=35843,dl=36196,hl=37492,pl=37496,ml=37808,gl=37809,_l=37810,vl=37811,xl=37812,Sl=37813,Ml=37814,yl=37815,bl=37816,El=37817,Tl=37818,Al=37819,wl=37820,Rl=37821,ho=36492,Cl=36494,Pl=36495,Ld=36283,Dl=36284,Ll=36285,Il=36286,Dg=3200,Lg=3201,Ig=0,Ug=1,hi="",an="srgb",wr="srgb-linear",Eo="linear",lt="srgb",Ji=7680,cu=519,Ng=512,Fg=513,Og=514,Id=515,Bg=516,zg=517,Hg=518,kg=519,uu=35044,fu="300 es",Cn=2e3,To=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,Ul=180/Math.PI;function Ss(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function Vg(n,e){return(n%e+e)%e}function sa(n,e,t){return(1-t)*n+t*e}function Fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ms{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(f!==_||l!==h||c!==p||u!==x){let m=1-a;const d=l*h+c*p+u*x+f*_,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const C=Math.sqrt(T),D=Math.atan2(C,d*A);m=Math.sin(m*D)/C,a=Math.sin(a*D)/C}const S=a*A;if(l=l*m+h*S,c=c*m+p*S,u=u*m+x*S,f=f*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+u*f+l*p-c*h,e[t+1]=l*x+u*h+c*f-a*p,e[t+2]=c*x+u*p+a*h-l*f,e[t+3]=u*x-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"YZX":this._x=h*u*f+c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f-h*p*x;break;case"XZY":this._x=h*u*f-c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new X,du=new Ms;class je{constructor(e,t,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],x=i[8],_=r[0],m=r[3],d=r[6],A=r[1],T=r[4],S=r[7],C=r[2],D=r[5],P=r[8];return s[0]=o*_+a*A+l*C,s[3]=o*m+a*T+l*D,s[6]=o*d+a*S+l*P,s[1]=c*_+u*A+f*C,s[4]=c*m+u*T+f*D,s[7]=c*d+u*S+f*P,s[2]=h*_+p*A+x*C,s[5]=h*m+p*T+x*D,s[8]=h*d+p*S+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,x=t*f+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new je;function Ud(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gg(){const n=Ao("canvas");return n.style.display="block",n}const hu={};function Mr(n){n in hu||(hu[n]=!0,console.warn(n))}function Wg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const pu=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xg(){const n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?Eo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:e,whitePoint:i,transfer:Eo,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}const et=Xg();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qi;class $g{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qi===void 0&&(Qi=Ao("canvas")),Qi.width=e.width,Qi.height=e.height;const r=Qi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ao("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jn(t[i]/255)*255):t[i]=jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qg=0;class fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(la(r[o].image)):s.push(la(r[o]))}else s=la(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$g.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yg=0;const ca=new X;class Xt extends Cr{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=Vi,r=Vi,s=Rn,o=Gi,a=_n,l=Qn,c=Xt.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Ss(),this.name="",this.source=new fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ol:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ol:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Ed;Xt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],x=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(p+1)/2,C=(d+1)/2,D=(u+h)/4,P=(f+_)/4,U=(x+m)/4;return T>S&&T>C?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=D/i,s=P/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=D/r,s=U/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=P/s,r=U/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-x)*(m-x)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(f-_)/A,this.z=(h-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jg extends Cr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Xt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new fc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends jg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nd extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kg extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Us.subVectors(this.max,Or),er.subVectors(e.a,Or),tr.subVectors(e.b,Or),nr.subVectors(e.c,Or),ri.subVectors(tr,er),si.subVectors(nr,tr),Ci.subVectors(er,nr);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ci.z,Ci.y,ri.z,0,-ri.x,si.z,0,-si.x,Ci.z,0,-Ci.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ci.y,Ci.x,0];return!ua(t,er,tr,nr,Us)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,er,tr,nr,Us))?!1:(Ns.crossVectors(ri,si),t=[Ns.x,Ns.y,Ns.z],ua(t,er,tr,nr,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new X,new X,new X,new X,new X,new X,new X,new X],hn=new X,Is=new ys,er=new X,tr=new X,nr=new X,ri=new X,si=new X,Ci=new X,Or=new X,Us=new X,Ns=new X,Pi=new X;function ua(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Pi.fromArray(n,s);const a=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Zg=new ys,Br=new X,fa=new X;class bs{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(fa)),this.expandByPoint(Br.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const On=new X,da=new X,Fs=new X,oi=new X,ha=new X,Os=new X,pa=new X;class dc{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){da.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fs),a=oi.dot(this.direction),l=-oi.dot(Fs),c=oi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,x;if(u>0)if(f=o*l-a,h=o*a-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(Fs,h),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,r,s){ha.subVectors(t,e),Os.subVectors(i,e),pa.crossVectors(ha,Os);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(Os.crossVectors(oi,Os));if(l<0)return null;const c=a*this.direction.dot(ha.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,x,_,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,x,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,x,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,x=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,x=c*u,_=c*f;t[0]=h+_*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,x=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,x=a*u,_=a*f;t[0]=l*u,t[4]=x*c-p,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=x*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+x,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*c,x=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,Qg)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ai.crossVectors(i,Jt),ai.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ai.crossVectors(i,Jt)),ai.normalize(),Bs.crossVectors(Jt,ai),r[0]=ai.x,r[4]=Bs.x,r[8]=Jt.x,r[1]=ai.y,r[5]=Bs.y,r[9]=Jt.y,r[2]=ai.z,r[6]=Bs.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],x=i[2],_=i[6],m=i[10],d=i[14],A=i[3],T=i[7],S=i[11],C=i[15],D=r[0],P=r[4],U=r[8],M=r[12],E=r[1],R=r[5],F=r[9],N=r[13],H=r[2],ie=r[6],Z=r[10],Q=r[14],z=r[3],ge=r[7],xe=r[11],Re=r[15];return s[0]=o*D+a*E+l*H+c*z,s[4]=o*P+a*R+l*ie+c*ge,s[8]=o*U+a*F+l*Z+c*xe,s[12]=o*M+a*N+l*Q+c*Re,s[1]=u*D+f*E+h*H+p*z,s[5]=u*P+f*R+h*ie+p*ge,s[9]=u*U+f*F+h*Z+p*xe,s[13]=u*M+f*N+h*Q+p*Re,s[2]=x*D+_*E+m*H+d*z,s[6]=x*P+_*R+m*ie+d*ge,s[10]=x*U+_*F+m*Z+d*xe,s[14]=x*M+_*N+m*Q+d*Re,s[3]=A*D+T*E+S*H+C*z,s[7]=A*P+T*R+S*ie+C*ge,s[11]=A*U+T*F+S*Z+C*xe,s[15]=A*M+T*N+S*Q+C*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],_=e[7],m=e[11],d=e[15];return x*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+_*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],_=e[13],m=e[14],d=e[15],A=f*m*c-_*h*c+_*l*p-a*m*p-f*l*d+a*h*d,T=x*h*c-u*m*c-x*l*p+o*m*p+u*l*d-o*h*d,S=u*_*c-x*f*c+x*a*p-o*_*p-u*a*d+o*f*d,C=x*f*l-u*_*l-x*a*h+o*_*h+u*a*m-o*f*m,D=t*A+i*T+r*S+s*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=A*P,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*P,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=T*P,e[5]=(u*m*s-x*h*s+x*r*p-t*m*p-u*r*d+t*h*d)*P,e[6]=(x*l*s-o*m*s-x*r*c+t*m*c+o*r*d-t*l*d)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*P,e[8]=S*P,e[9]=(x*f*s-u*_*s-x*i*p+t*_*p+u*i*d-t*f*d)*P,e[10]=(o*_*s-x*a*s+x*i*c-t*_*c-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=C*P,e[13]=(u*_*r-x*f*r+x*i*h-t*_*h-u*i*m+t*f*m)*P,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,x=s*f,_=o*u,m=o*f,d=a*f,A=l*c,T=l*u,S=l*f,C=i.x,D=i.y,P=i.z;return r[0]=(1-(_+d))*C,r[1]=(p+S)*C,r[2]=(x-T)*C,r[3]=0,r[4]=(p-S)*D,r[5]=(1-(h+d))*D,r[6]=(m+A)*D,r[7]=0,r[8]=(x+T)*P,r[9]=(m-A)*P,r[10]=(1-(h+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ir.set(r[0],r[1],r[2]).length();const o=ir.set(r[4],r[5],r[6]).length(),a=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const c=1/s,u=1/o,f=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Cn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let x,_;if(l)x=s/(o-s),_=o*s/(o-s);else if(a===Cn)x=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===To)x=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Cn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let x,_;if(l)x=1/(o-s),_=o/(o-s);else if(a===Cn)x=-2/(o-s),_=-(o+s)/(o-s);else if(a===To)x=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ir=new X,pn=new bt,Jg=new X(0,0,0),Qg=new X(1,1,1),ai=new X,Bs=new X,Jt=new X,gu=new bt,_u=new Ms;class ei{constructor(e=0,t=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _u.setFromEuler(this),this.setFromQuaternion(_u,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Fd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e_=0;const vu=new X,rr=new Ms,Bn=new bt,zs=new X,zr=new X,t_=new X,n_=new Ms,xu=new X(1,0,0),Su=new X(0,1,0),Mu=new X(0,0,1),yu={type:"added"},i_={type:"removed"},sr={type:"childadded",child:null},ma={type:"childremoved",child:null};class Bt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new X,t=new ei,i=new Ms,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new je}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return vu.copy(e).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zs.copy(e):zs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(zr,zs,this.up):Bn.lookAt(zs,zr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Bn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yu),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i_),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yu),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,t_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,n_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new X(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new X,zn=new X,ga=new X,Hn=new X,or=new X,ar=new X,bu=new X,_a=new X,va=new X,xa=new X,Sa=new yt,Ma=new yt,ya=new yt;class gn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),mn.subVectors(e,t),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){mn.subVectors(r,t),zn.subVectors(i,t),ga.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(zn),l=mn.dot(ga),c=zn.dot(zn),u=zn.dot(ga),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Sa.setScalar(0),Ma.setScalar(0),ya.setScalar(0),Sa.fromBufferAttribute(e,t),Ma.fromBufferAttribute(e,i),ya.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sa,s.x),o.addScaledVector(Ma,s.y),o.addScaledVector(ya,s.z),o}static isFrontFacing(e,t,i,r){return mn.subVectors(i,t),zn.subVectors(e,t),mn.cross(zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),mn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;or.subVectors(r,i),ar.subVectors(s,i),_a.subVectors(e,i);const l=or.dot(_a),c=ar.dot(_a);if(l<=0&&c<=0)return t.copy(i);va.subVectors(e,r);const u=or.dot(va),f=ar.dot(va);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(or,o);xa.subVectors(e,s);const p=or.dot(xa),x=ar.dot(xa);if(x>=0&&p<=x)return t.copy(s);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(ar,a);const m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return bu.subVectors(s,r),a=(f-u)/(f-u+(p-x)),t.copy(r).addScaledVector(bu,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function ba(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Vg(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ba(o,s,e+1/3),this.g=ba(o,s,e),this.b=ba(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=an){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=Od[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return et.workingToColorSpace(It.copy(this),e),Math.round(Je(It.r*255,0,255))*65536+Math.round(Je(It.g*255,0,255))*256+Math.round(Je(It.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(It.copy(this),t);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=an){et.workingToColorSpace(It.copy(this),e);const t=It.r,i=It.g,r=It.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Hs);const i=sa(li.h,Hs.h,t),r=sa(li.s,Hs.s,t),s=sa(li.l,Hs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new tt;tt.NAMES=Od;let r_=0;class Pr extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Sr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ka,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Ka&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bd extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new X,ks=new ct;let s_=0;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uu,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uu&&(e.usage=this.usage),e}}class zd extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hd extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sn extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let o_=0;const on=new bt,Ea=new Bt,lr=new X,Qt=new ys,Hr=new ys,wt=new X;class yn extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ud(e)?Hd:zd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Sn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Qt.min,Hr.min),Qt.expandByPoint(wt),wt.addVectors(Qt.max,Hr.max),Qt.expandByPoint(wt)):(Qt.expandByPoint(Hr.min),Qt.expandByPoint(Hr.max))}Qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(lr.fromBufferAttribute(e,c),wt.add(lr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new X,l[U]=new X;const c=new X,u=new X,f=new X,h=new ct,p=new ct,x=new ct,_=new X,m=new X;function d(U,M,E){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,U),p.fromBufferAttribute(s,M),x.fromBufferAttribute(s,E),u.sub(c),f.sub(c),p.sub(h),x.sub(h);const R=1/(p.x*x.y-x.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(R),a[U].add(_),a[M].add(_),a[E].add(_),l[U].add(m),l[M].add(m),l[E].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,M=A.length;U<M;++U){const E=A[U],R=E.start,F=E.count;for(let N=R,H=R+F;N<H;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const T=new X,S=new X,C=new X,D=new X;function P(U){C.fromBufferAttribute(r,U),D.copy(C);const M=a[U];T.copy(M),T.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(D,M);const R=S.dot(l[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,R)}for(let U=0,M=A.length;U<M;++U){const E=A[U],R=E.start,F=E.count;for(let N=R,H=R+F;N<H;N+=3)P(e.getX(N+0)),P(e.getX(N+1)),P(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)h[x++]=c[p++]}return new fn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new bt,Di=new dc,Vs=new bs,Tu=new X,Gs=new X,Ws=new X,Xs=new X,Ta=new X,$s=new X,Au=new X,qs=new X;class Yn extends Bt{constructor(e=new yn,t=new Bd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ta.fromBufferAttribute(f,e),o?$s.addScaledVector(Ta,u):$s.addScaledVector(Ta.sub(t),u))}t.add($s)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(Vs.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Vs,Tu)===null||Di.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(Eu.copy(s).invert(),Di.copy(e.ray).applyMatrix4(Eu),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],d=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,C=T;S<C;S+=3){const D=a.getX(S),P=a.getX(S+1),U=a.getX(S+2);r=Ys(this,d,e,i,c,u,f,D,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){const A=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);r=Ys(this,o,e,i,c,u,f,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],d=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,C=T;S<C;S+=3){const D=S,P=S+1,U=S+2;r=Ys(this,d,e,i,c,u,f,D,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){const A=m,T=m+1,S=m+2;r=Ys(this,o,e,i,c,u,f,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function a_(n,e,t,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xi,a),l===null)return null;qs.copy(a),qs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:n}}function Ys(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Gs),n.getVertexPosition(l,Ws),n.getVertexPosition(c,Xs);const u=a_(n,e,t,i,Gs,Ws,Xs,Au);if(u){const f=new X;gn.getBarycoord(Au,Gs,Ws,Xs,f),r&&(u.uv=gn.getInterpolatedAttribute(r,a,l,c,f,new ct)),s&&(u.uv1=gn.getInterpolatedAttribute(s,a,l,c,f,new ct)),o&&(u.normal=gn.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new X,materialIndex:0};gn.getNormal(Gs,Ws,Xs,h.normal),u.face=h,u.barycoord=f}return u}class Es extends yn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(f,2));function x(_,m,d,A,T,S,C,D,P,U,M){const E=S/P,R=C/U,F=S/2,N=C/2,H=D/2,ie=P+1,Z=U+1;let Q=0,z=0;const ge=new X;for(let xe=0;xe<Z;xe++){const Re=xe*R-N;for(let ze=0;ze<ie;ze++){const Fe=ze*E-F;ge[_]=Fe*A,ge[m]=Re*T,ge[d]=H,c.push(ge.x,ge.y,ge.z),ge[_]=0,ge[m]=0,ge[d]=D>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(ze/P),f.push(1-xe/U),Q+=1}}for(let xe=0;xe<U;xe++)for(let Re=0;Re<P;Re++){const ze=h+Re+ie*xe,Fe=h+Re+ie*(xe+1),Xe=h+(Re+1)+ie*(xe+1),ee=h+(Re+1)+ie*xe;l.push(ze,Fe,ee),l.push(Fe,Xe,ee),z+=6}a.addGroup(p,z,M),p+=z,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=Rr(n[t]);for(const r in i)e[r]=i[r]}return e}function l_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const c_={clone:Rr,merge:kt};var u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=l_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vd extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new X,wu=new ct,Ru=new ct;class ln extends Vd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Ru),t.subVectors(Ru,wu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cr=-90,ur=1;class d_ extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(cr,ur,e,t);r.layers=this.layers,this.add(r);const s=new ln(cr,ur,e,t);s.layers=this.layers,this.add(s);const o=new ln(cr,ur,e,t);o.layers=this.layers,this.add(o);const a=new ln(cr,ur,e,t);a.layers=this.layers,this.add(a);const l=new ln(cr,ur,e,t);l.layers=this.layers,this.add(l);const c=new ln(cr,ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Gd extends Xt{constructor(e=[],t=Tr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class h_ extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Es(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:mi});s.uniforms.tEquirect.value=t;const o=new Yn(r,s),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Rn),new d_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Wr extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p_={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class m_ extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wa=new X,g_=new X,__=new je;class Oi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wa.subVectors(i,t).cross(g_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||__.getNormalMatrix(e),r=this.coplanarPoint(wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new bs,v_=new ct(.5,.5),js=new X;class Wd{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],x=s[8],_=s[9],m=s[10],d=s[11],A=s[12],T=s[13],S=s[14],C=s[15];if(r[0].setComponents(c-o,p-u,d-x,C-A).normalize(),r[1].setComponents(c+o,p+u,d+x,C+A).normalize(),r[2].setComponents(c+a,p+f,d+_,C+T).normalize(),r[3].setComponents(c-a,p-f,d-_,C-T).normalize(),i)r[4].setComponents(l,h,m,S).normalize(),r[5].setComponents(c-l,p-h,d-m,C-S).normalize();else if(r[4].setComponents(c-l,p-h,d-m,C-S).normalize(),t===Cn)r[5].setComponents(c+l,p+h,d+m,C+S).normalize();else if(t===To)r[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=v_.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(js.x=r.normal.x>0?e.max.x:e.min.x,js.y=r.normal.y>0?e.max.y:e.min.y,js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xd extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new X,Ro=new X,Cu=new bt,kr=new dc,Ks=new bs,Ra=new X,Pu=new X;class x_ extends Bt{constructor(e=new yn,t=new Xd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)wo.fromBufferAttribute(t,r-1),Ro.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=wo.distanceTo(Ro);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),Ks.radius+=s,e.ray.intersectsSphere(Ks)===!1)return;Cu.copy(r).invert(),kr.copy(e.ray).applyMatrix4(Cu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=c){const d=u.getX(_),A=u.getX(_+1),T=Zs(this,e,kr,l,d,A,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(x-1),m=u.getX(p),d=Zs(this,e,kr,l,_,m,x-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=c){const d=Zs(this,e,kr,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=Zs(this,e,kr,l,x-1,p,x-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zs(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(wo.fromBufferAttribute(a,r),Ro.fromBufferAttribute(a,s),t.distanceSqToSegment(wo,Ro,Ra,Pu)>i)return;Ra.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ra);if(!(c<e.near||c>e.far))return{distance:c,point:Pu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Du=new X,Lu=new X;class S_ extends x_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Du.fromBufferAttribute(t,r),Lu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Du.distanceTo(Lu);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $d extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Iu=new bt,Nl=new dc,Js=new bs,Qs=new X;class M_ extends Bt{constructor(e=new yn,t=new $d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(r),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;Iu.copy(r).invert(),Nl.copy(e.ray).applyMatrix4(Iu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=h,_=p;x<_;x++){const m=c.getX(x);Qs.fromBufferAttribute(f,m),Uu(Qs,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,_=p;x<_;x++)Qs.fromBufferAttribute(f,x),Uu(Qs,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Uu(n,e,t,i,r,s,o){const a=Nl.distanceSqToPoint(n);if(a<t){const l=new X;Nl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class y_ extends Xt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qd extends Xt{constructor(e,t,i=Xi,r,s,o,a=xn,l=xn,c,u=ms,f=1){if(u!==ms&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ko extends yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],x=[],_=[],m=[];for(let d=0;d<u;d++){const A=d*h-o;for(let T=0;T<c;T++){const S=T*f-s;x.push(S,-A,0),_.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const T=A+c*d,S=A+c*(d+1),C=A+1+c*(d+1),D=A+1+c*d;p.push(T,S,D),p.push(S,C,D)}this.setIndex(p),this.setAttribute("position",new Sn(x,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class b_ extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E_ extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class T_ extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class A_ extends Vd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class w_ extends T_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class R_ extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Nu(n,e,t,i){const r=C_(i);switch(t){case Rd:return n*e;case Pd:return n*e/r.components*r.byteLength;case lc:return n*e/r.components*r.byteLength;case Dd:return n*e*2/r.components*r.byteLength;case cc:return n*e*2/r.components*r.byteLength;case Cd:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case uc:return n*e*4/r.components*r.byteLength;case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:case fl:return Math.max(n,16)*Math.max(e,8)/4;case ll:case ul:return Math.max(n,8)*Math.max(e,8)/2;case dl:case hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ho:case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ld:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ll:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C_(n){switch(n){case Qn:case Td:return{byteLength:1,components:1};case hs:case Ad:case xs:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case Xi:case sc:case qn:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function P_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],_=f[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var D_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,B_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,H_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,W_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,e0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,b0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_v=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ov=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ox=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:D_,alphahash_pars_fragment:L_,alphamap_fragment:I_,alphamap_pars_fragment:U_,alphatest_fragment:N_,alphatest_pars_fragment:F_,aomap_fragment:O_,aomap_pars_fragment:B_,batching_pars_vertex:z_,batching_vertex:H_,begin_vertex:k_,beginnormal_vertex:V_,bsdfs:G_,iridescence_fragment:W_,bumpmap_pars_fragment:X_,clipping_planes_fragment:$_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:Y_,clipping_planes_vertex:j_,color_fragment:K_,color_pars_fragment:Z_,color_pars_vertex:J_,color_vertex:Q_,common:e0,cube_uv_reflection_fragment:t0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:r0,emissivemap_fragment:s0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:u0,envmap_pars_fragment:f0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:b0,envmap_vertex:h0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:_0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:x0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:M0,lights_pars_begin:y0,lights_toon_fragment:E0,lights_toon_pars_fragment:T0,lights_phong_fragment:A0,lights_phong_pars_fragment:w0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:P0,lights_fragment_maps:D0,lights_fragment_end:L0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:F0,map_fragment:O0,map_pars_fragment:B0,map_particle_fragment:z0,map_particle_pars_fragment:H0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:W0,morphnormal_vertex:X0,morphtarget_pars_vertex:$0,morphtarget_vertex:q0,normal_fragment_begin:Y0,normal_fragment_maps:j0,normal_pars_fragment:K0,normal_pars_vertex:Z0,normal_vertex:J0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:ev,clearcoat_normal_fragment_maps:tv,clearcoat_pars_fragment:nv,iridescence_pars_fragment:iv,opaque_fragment:rv,packing:sv,premultiplied_alpha_fragment:ov,project_vertex:av,dithering_fragment:lv,dithering_pars_fragment:cv,roughnessmap_fragment:uv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:dv,shadowmap_pars_vertex:hv,shadowmap_vertex:pv,shadowmask_pars_fragment:mv,skinbase_vertex:gv,skinning_pars_vertex:_v,skinning_vertex:vv,skinnormal_vertex:xv,specularmap_fragment:Sv,specularmap_pars_fragment:Mv,tonemapping_fragment:yv,tonemapping_pars_fragment:bv,transmission_fragment:Ev,transmission_pars_fragment:Tv,uv_pars_fragment:Av,uv_pars_vertex:wv,uv_vertex:Rv,worldpos_vertex:Cv,background_vert:Pv,background_frag:Dv,backgroundCube_vert:Lv,backgroundCube_frag:Iv,cube_vert:Uv,cube_frag:Nv,depth_vert:Fv,depth_frag:Ov,distanceRGBA_vert:Bv,distanceRGBA_frag:zv,equirect_vert:Hv,equirect_frag:kv,linedashed_vert:Vv,linedashed_frag:Gv,meshbasic_vert:Wv,meshbasic_frag:Xv,meshlambert_vert:$v,meshlambert_frag:qv,meshmatcap_vert:Yv,meshmatcap_frag:jv,meshnormal_vert:Kv,meshnormal_frag:Zv,meshphong_vert:Jv,meshphong_frag:Qv,meshphysical_vert:ex,meshphysical_frag:tx,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:rx,points_frag:sx,shadow_vert:ox,shadow_frag:ax,sprite_vert:lx,sprite_frag:cx},Me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},wn={basic:{uniforms:kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:kt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:kt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:kt([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:kt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:kt([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:kt([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:kt([Me.common,Me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:kt([Me.lights,Me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};wn.physical={uniforms:kt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const eo={r:0,b:0,g:0},Ii=new ei,ux=new bt;function fx(n,e,t,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function x(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function _(T){let S=!1;const C=x(T);C===null?d(a,l):C&&C.isColor&&(d(C,1),S=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){const C=x(S);C&&(C.isCubeTexture||C.mapping===Ho)?(u===void 0&&(u=new Yn(new Es(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Rr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ii.copy(S.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(Ii)),u.material.toneMapped=et.getTransfer(C.colorSpace)!==lt,(f!==C||h!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Yn(new ko(2,2),new Si({name:"BackgroundMaterial",uniforms:Rr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(C.colorSpace)!==lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,S){T.getRGB(eo,kd(n)),i.buffers.color.setClear(eo.r,eo.g,eo.b,S,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:_,addToRenderList:m,dispose:A}}function dx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,R,F,N,H){let ie=!1;const Z=f(N,F,R);s!==Z&&(s=Z,c(s.object)),ie=p(E,N,F,H),ie&&x(E,N,F,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,S(E,R,F,N),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,R,F){const N=F.wireframe===!0;let H=i[E.id];H===void 0&&(H={},i[E.id]=H);let ie=H[R.id];ie===void 0&&(ie={},H[R.id]=ie);let Z=ie[N];return Z===void 0&&(Z=h(l()),ie[N]=Z),Z}function h(E){const R=[],F=[],N=[];for(let H=0;H<t;H++)R[H]=0,F[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:N,object:E,attributes:{},index:null}}function p(E,R,F,N){const H=s.attributes,ie=R.attributes;let Z=0;const Q=F.getAttributes();for(const z in Q)if(Q[z].location>=0){const xe=H[z];let Re=ie[z];if(Re===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(Re=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(Re=E.instanceColor)),xe===void 0||xe.attribute!==Re||Re&&xe.data!==Re.data)return!0;Z++}return s.attributesNum!==Z||s.index!==N}function x(E,R,F,N){const H={},ie=R.attributes;let Z=0;const Q=F.getAttributes();for(const z in Q)if(Q[z].location>=0){let xe=ie[z];xe===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor));const Re={};Re.attribute=xe,xe&&xe.data&&(Re.data=xe.data),H[z]=Re,Z++}s.attributes=H,s.attributesNum=Z,s.index=N}function _(){const E=s.newAttributes;for(let R=0,F=E.length;R<F;R++)E[R]=0}function m(E){d(E,0)}function d(E,R){const F=s.newAttributes,N=s.enabledAttributes,H=s.attributeDivisors;F[E]=1,N[E]===0&&(n.enableVertexAttribArray(E),N[E]=1),H[E]!==R&&(n.vertexAttribDivisor(E,R),H[E]=R)}function A(){const E=s.newAttributes,R=s.enabledAttributes;for(let F=0,N=R.length;F<N;F++)R[F]!==E[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function T(E,R,F,N,H,ie,Z){Z===!0?n.vertexAttribIPointer(E,R,F,H,ie):n.vertexAttribPointer(E,R,F,N,H,ie)}function S(E,R,F,N){_();const H=N.attributes,ie=F.getAttributes(),Z=R.defaultAttributeValues;for(const Q in ie){const z=ie[Q];if(z.location>=0){let ge=H[Q];if(ge===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ge!==void 0){const xe=ge.normalized,Re=ge.itemSize,ze=e.get(ge);if(ze===void 0)continue;const Fe=ze.buffer,Xe=ze.type,ee=ze.bytesPerElement,me=Xe===n.INT||Xe===n.UNSIGNED_INT||ge.gpuType===sc;if(ge.isInterleavedBufferAttribute){const he=ge.data,Ne=he.stride,Oe=ge.offset;if(he.isInstancedInterleavedBuffer){for(let He=0;He<z.locationSize;He++)d(z.location+He,he.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let He=0;He<z.locationSize;He++)m(z.location+He);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let He=0;He<z.locationSize;He++)T(z.location+He,Re/z.locationSize,Xe,xe,Ne*ee,(Oe+Re/z.locationSize*He)*ee,me)}else{if(ge.isInstancedBufferAttribute){for(let he=0;he<z.locationSize;he++)d(z.location+he,ge.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let he=0;he<z.locationSize;he++)m(z.location+he);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let he=0;he<z.locationSize;he++)T(z.location+he,Re/z.locationSize,Xe,xe,Re*ee,Re/z.locationSize*he*ee,me)}}else if(Z!==void 0){const xe=Z[Q];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(z.location,xe);break;case 3:n.vertexAttrib3fv(z.location,xe);break;case 4:n.vertexAttrib4fv(z.location,xe);break;default:n.vertexAttrib1fv(z.location,xe)}}}}A()}function C(){U();for(const E in i){const R=i[E];for(const F in R){const N=R[F];for(const H in N)u(N[H].object),delete N[H];delete R[F]}delete i[E]}}function D(E){if(i[E.id]===void 0)return;const R=i[E.id];for(const F in R){const N=R[F];for(const H in N)u(N[H].object),delete N[H];delete R[F]}delete i[E.id]}function P(E){for(const R in i){const F=i[R];if(F[E.id]===void 0)continue;const N=F[E.id];for(const H in N)u(N[H].object),delete N[H];delete F[E.id]}}function U(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function hx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let x=0;for(let _=0;_<f;_++)x+=u[_]*h[_];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function px(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==_n&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Qn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==qn&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:C,maxSamples:D}}function mx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Oi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,T=A*4;let S=d.clippingState||null;l.value=S,S=u(x,h,T,p);for(let C=0;C!==T;++C)S[C]=t[C];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,x){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const d=p+_*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,S=p;T!==_;++T,S+=4)o.copy(f[T]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function gx(n){let e=new WeakMap;function t(o,a){return a===rl?o.mapping=Tr:a===sl&&(o.mapping=Ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===rl||a===sl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new h_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const pr=4,Fu=[.125,.215,.35,.446,.526,.582],ki=20,Ca=new A_,Ou=new tt;let Pa=null,Da=0,La=0,Ia=!1;const Bi=(1+Math.sqrt(5))/2,fr=1/Bi,Bu=[new X(-Bi,fr,0),new X(Bi,fr,0),new X(-fr,0,Bi),new X(fr,0,Bi),new X(0,Bi,-fr),new X(0,Bi,fr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],_x=new X;class zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=_x}=s;Pa=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,Da,La),this._renderer.xr.enabled=Ia,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:xs,format:_n,colorSpace:wr,depthBuffer:!1},r=Hu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vx(s)),this._blurMaterial=xx(s,e,t)}return r}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,i,r,s){const l=new ln(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Ou),f.toneMapping=gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new Bd({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),m=new Yn(new Es,_);let d=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,d=!0):(_.color.copy(Ou),d=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):S===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const C=this._cubeSize;to(r,S*C,T>2?C:0,C,C),f.setRenderTarget(r),d&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Tr||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;to(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ca)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bu[(r-s-1)%Bu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Yn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ki-1),_=s/x,m=isFinite(s)?1+Math.floor(u*_):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const d=[];let A=0;for(let P=0;P<ki;++P){const U=P/_,M=Math.exp(-U*U/2);d.push(M),P===0?A+=M:P<m&&(A+=2*M)}for(let P=0;P<d.length;P++)d[P]=d[P]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=x,h.mipInt.value=T-i;const S=this._sizeLods[r],C=3*S*(r>T-pr?r-T+pr:0),D=4*(this._cubeSize-S);to(t,C,D,3*S,2*S),l.setRenderTarget(t),l.render(f,Ca)}}function vx(n){const e=[],t=[],i=[];let r=n;const s=n-pr+1+Fu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-pr?l=Fu[o-n+pr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,_=3,m=2,d=1,A=new Float32Array(_*x*p),T=new Float32Array(m*x*p),S=new Float32Array(d*x*p);for(let D=0;D<p;D++){const P=D%3*2/3-1,U=D>2?0:-1,M=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];A.set(M,_*x*D),T.set(h,m*x*D);const E=[D,D,D,D,D,D];S.set(E,d*x*D)}const C=new yn;C.setAttribute("position",new fn(A,_)),C.setAttribute("uv",new fn(T,m)),C.setAttribute("faceIndex",new fn(S,d)),e.push(C),r>pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hu(n,e,t){const i=new $i(n,e,t);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xx(n,e,t){const i=new Float32Array(ki),r=new X(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ku(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Vu(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===rl||l===sl,u=l===Tr||l===Ar;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new zu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new zu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Mx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Mr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yx(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,x=f.attributes.position;let _=0;if(p!==null){const A=p.array;_=p.version;for(let T=0,S=A.length;T<S;T+=3){const C=A[T+0],D=A[T+1],P=A[T+2];h.push(C,D,D,P,P,C)}}else if(x!==void 0){const A=x.array;_=x.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const C=T+0,D=T+1,P=T+2;h.push(C,D,D,P,P,C)}}else return;const m=new(Ud(h)?Hd:zd)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function bx(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,h*o,x),t.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,i,1)}function f(h,p,x,_){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,x);let d=0;for(let A=0;A<x;A++)d+=p[A]*_[A];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Ex(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Tx(n,e,t){const i=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,D=1;C>e.maxTextureSize&&(D=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*D*4*f),U=new Nd(P,C,D,f);U.type=qn,U.needsUpdate=!0;const M=S*4;for(let R=0;R<f;R++){const F=d[R],N=A[R],H=T[R],ie=C*D*4*R;for(let Z=0;Z<F.count;Z++){const Q=Z*M;x===!0&&(r.fromBufferAttribute(F,Z),P[ie+Q+0]=r.x,P[ie+Q+1]=r.y,P[ie+Q+2]=r.z,P[ie+Q+3]=0),_===!0&&(r.fromBufferAttribute(N,Z),P[ie+Q+4]=r.x,P[ie+Q+5]=r.y,P[ie+Q+6]=r.z,P[ie+Q+7]=0),m===!0&&(r.fromBufferAttribute(H,Z),P[ie+Q+8]=r.x,P[ie+Q+9]=r.y,P[ie+Q+10]=r.z,P[ie+Q+11]=H.itemSize===4?r.w:1)}}h={count:f,texture:U,size:new ct(C,D)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const _=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ax(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const jd=new Xt,Gu=new qd(1,1),Kd=new Nd,Zd=new Kg,Jd=new Gd,Wu=[],Xu=[],$u=new Float32Array(16),qu=new Float32Array(9),Yu=new Float32Array(4);function Dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wu[r];if(s===void 0&&(s=new Float32Array(r),Wu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vo(n,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Yu.set(i),n.uniformMatrix2fv(this.addr,!1,Yu),At(t,i)}}function Lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;qu.set(i),n.uniformMatrix3fv(this.addr,!1,qu),At(t,i)}}function Ix(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;$u.set(i),n.uniformMatrix4fv(this.addr,!1,$u),At(t,i)}}function Ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Vx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gu.compareFunction=Id,s=Gu):s=jd,t.setTexture2D(e||s,r)}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zd,r)}function Wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jd,r)}function Xx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kd,r)}function $x(n){switch(n){case 5126:return wx;case 35664:return Rx;case 35665:return Cx;case 35666:return Px;case 35674:return Dx;case 35675:return Lx;case 35676:return Ix;case 5124:case 35670:return Ux;case 35667:case 35671:return Nx;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return Hx;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function qx(n,e){n.uniform1fv(this.addr,e)}function Yx(n,e){const t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function jx(n,e){const t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function Kx(n,e){const t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function Zx(n,e){const t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jx(n,e){const t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qx(n,e){const t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eS(n,e){n.uniform1iv(this.addr,e)}function tS(n,e){n.uniform2iv(this.addr,e)}function nS(n,e){n.uniform3iv(this.addr,e)}function iS(n,e){n.uniform4iv(this.addr,e)}function rS(n,e){n.uniform1uiv(this.addr,e)}function sS(n,e){n.uniform2uiv(this.addr,e)}function oS(n,e){n.uniform3uiv(this.addr,e)}function aS(n,e){n.uniform4uiv(this.addr,e)}function lS(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||jd,s[o])}function cS(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zd,s[o])}function uS(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jd,s[o])}function fS(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kd,s[o])}function dS(n){switch(n){case 5126:return qx;case 35664:return Yx;case 35665:return jx;case 35666:return Kx;case 35674:return Zx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return rS;case 36294:return sS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return fS}}class hS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$x(t.type)}}class pS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}}class mS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function ju(n,e){n.seq.push(e),n.map[e.id]=e}function gS(n,e,t){const i=n.name,r=i.length;for(Ua.lastIndex=0;;){const s=Ua.exec(i),o=Ua.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ju(t,c===void 0?new hS(a,n,e):new pS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new mS(a),ju(t,f)),t=f}}}class po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);gS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ku(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _S=37297;let vS=0;function xS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Zu=new je;function SS(n){et._getMatrix(Zu,et.workingColorSpace,n);const e=`mat3( ${Zu.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Eo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ju(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+xS(n.getShaderSource(e),a)}else return s}function MS(n,e){const t=SS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yS(n,e){let t;switch(e){case bg:t="Linear";break;case Eg:t="Reinhard";break;case Tg:t="Cineon";break;case Ag:t="ACESFilmic";break;case Rg:t="AgX";break;case Cg:t="Neutral";break;case wg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const no=new X;function bS(){et.getLuminanceCoefficients(no);const n=no.x.toFixed(4),e=no.y.toFixed(4),t=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ES(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function TS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xr(n){return n!==""}function Qu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(n){return n.replace(wS,CS)}const RS=new Map;function CS(n,e){let t=Ke[e];if(t===void 0){const i=RS.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fl(t)}const PS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(n){return n.replace(PS,DS)}function DS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function IS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Tr:case Ar:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function US(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function NS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bd:e="ENVMAP_BLENDING_MULTIPLY";break;case Mg:e="ENVMAP_BLENDING_MIX";break;case yg:e="ENVMAP_BLENDING_ADD";break}return e}function FS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function OS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=LS(t),c=IS(t),u=US(t),f=NS(t),h=FS(t),p=ES(t),x=TS(s),_=r.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Xr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Xr).join(`
`),d.length>0&&(d+=`
`)):(m=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),d=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==gi?yS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),bS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=Fl(o),o=Qu(o,t),o=ef(o,t),a=Fl(a),a=Qu(a,t),a=ef(a,t),o=tf(o),a=tf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=A+m+o,S=A+d+a,C=Ku(r,r.VERTEX_SHADER,T),D=Ku(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(R){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",N=r.getShaderInfoLog(C)||"",H=r.getShaderInfoLog(D)||"",ie=F.trim(),Z=N.trim(),Q=H.trim();let z=!0,ge=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,D);else{const xe=Ju(r,C,"vertex"),Re=Ju(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+ie+`
`+xe+`
`+Re)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Z===""||Q==="")&&(ge=!1);ge&&(R.diagnostics={runnable:z,programLog:ie,vertexShader:{log:Z,prefix:m},fragmentShader:{log:Q,prefix:d}})}r.deleteShader(C),r.deleteShader(D),U=new po(r,_),M=AS(r,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,_S)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=D,this}let BS=0;class zS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HS(e),t.set(e,i)),i}}class HS{constructor(e){this.id=BS++,this.code=e,this.usedTimes=0}}function kS(n,e,t,i,r,s,o){const a=new Fd,l=new zS,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,E,R,F,N){const H=F.fog,ie=N.geometry,Z=M.isMeshStandardMaterial?F.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),z=Q&&Q.mapping===Ho?Q.image.height:null,ge=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const xe=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Re=xe!==void 0?xe.length:0;let ze=0;ie.morphAttributes.position!==void 0&&(ze=1),ie.morphAttributes.normal!==void 0&&(ze=2),ie.morphAttributes.color!==void 0&&(ze=3);let Fe,Xe,ee,me;if(ge){const it=wn[ge];Fe=it.vertexShader,Xe=it.fragmentShader}else Fe=M.vertexShader,Xe=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const he=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Oe=N.isInstancedMesh===!0,He=N.isBatchedMesh===!0,pt=!!M.map,w=!!M.matcap,v=!!Q,V=!!M.aoMap,q=!!M.lightMap,J=!!M.bumpMap,W=!!M.normalMap,ae=!!M.displacementMap,j=!!M.emissiveMap,ne=!!M.metalnessMap,re=!!M.roughnessMap,Se=M.anisotropy>0,y=M.clearcoat>0,g=M.dispersion>0,L=M.iridescence>0,k=M.sheen>0,te=M.transmission>0,G=Se&&!!M.anisotropyMap,Ee=y&&!!M.clearcoatMap,le=y&&!!M.clearcoatNormalMap,Te=y&&!!M.clearcoatRoughnessMap,Ae=L&&!!M.iridescenceMap,ce=L&&!!M.iridescenceThicknessMap,ye=k&&!!M.sheenColorMap,De=k&&!!M.sheenRoughnessMap,we=!!M.specularMap,ve=!!M.specularColorMap,$e=!!M.specularIntensityMap,I=te&&!!M.transmissionMap,pe=te&&!!M.thicknessMap,_e=!!M.gradientMap,Pe=!!M.alphaMap,fe=M.alphaTest>0,se=!!M.alphaHash,Ue=!!M.extensions;let qe=gi;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(qe=n.toneMapping);const dt={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:Fe,fragmentShader:Xe,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:He,batchingColor:He&&N._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&N.instanceColor!==null,instancingMorph:Oe&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:wr,alphaToCoverage:!!M.alphaToCoverage,map:pt,matcap:w,envMap:v,envMapMode:v&&Q.mapping,envMapCubeUVHeight:z,aoMap:V,lightMap:q,bumpMap:J,normalMap:W,displacementMap:h&&ae,emissiveMap:j,normalMapObjectSpace:W&&M.normalMapType===Ug,normalMapTangentSpace:W&&M.normalMapType===Ig,metalnessMap:ne,roughnessMap:re,anisotropy:Se,anisotropyMap:G,clearcoat:y,clearcoatMap:Ee,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:g,iridescence:L,iridescenceMap:Ae,iridescenceThicknessMap:ce,sheen:k,sheenColorMap:ye,sheenRoughnessMap:De,specularMap:we,specularColorMap:ve,specularIntensityMap:$e,transmission:te,transmissionMap:I,thicknessMap:pe,gradientMap:_e,opaque:M.transparent===!1&&M.blending===Sr&&M.alphaToCoverage===!1,alphaMap:Pe,alphaTest:fe,alphaHash:se,combine:M.combine,mapUv:pt&&_(M.map.channel),aoMapUv:V&&_(M.aoMap.channel),lightMapUv:q&&_(M.lightMap.channel),bumpMapUv:J&&_(M.bumpMap.channel),normalMapUv:W&&_(M.normalMap.channel),displacementMapUv:ae&&_(M.displacementMap.channel),emissiveMapUv:j&&_(M.emissiveMap.channel),metalnessMapUv:ne&&_(M.metalnessMap.channel),roughnessMapUv:re&&_(M.roughnessMap.channel),anisotropyMapUv:G&&_(M.anisotropyMap.channel),clearcoatMapUv:Ee&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:ve&&_(M.specularColorMap.channel),specularIntensityMapUv:$e&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:pe&&_(M.thicknessMap.channel),alphaMapUv:Pe&&_(M.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(W||Se),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!ie.attributes.uv&&(pt||Pe),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ne,skinning:N.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:pt&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===lt,decodeVideoTextureEmissive:j&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xn,flipSided:M.side===jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)E.push(R),E.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(A(E,M),T(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function A(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function T(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const E=x[M.type];let R;if(E){const F=wn[E];R=c_.clone(F.uniforms)}else R=M.uniforms;return R}function C(M,E){let R;for(let F=0,N=u.length;F<N;F++){const H=u[F];if(H.cacheKey===E){R=H,++R.usedTimes;break}}return R===void 0&&(R=new OS(n,E,M,s),u.push(R)),R}function D(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function P(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:U}}function VS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function GS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,x,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,x,_,m){const d=o(f,h,p,x,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,x,_,m){const d=o(f,h,p,x,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||GS),i.length>1&&i.sort(h||rf),r.length>1&&r.sort(h||rf)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function WS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new sf,n.set(i,[o])):r>=s.length?(o=new sf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function XS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new tt};break;case"SpotLight":t={position:new X,direction:new X,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function $S(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qS=0;function YS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jS(n){const e=new XS,t=$S(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new bt,o=new bt;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,x=0,_=0,m=0,d=0,A=0,T=0,S=0,C=0,D=0,P=0;c.sort(YS);for(let M=0,E=c.length;M<E;M++){const R=c[M],F=R.color,N=R.intensity,H=R.distance,ie=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*N,f+=F.g*N,h+=F.b*N;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(R.sh.coefficients[Z],N);P++}else if(R.isDirectionalLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,z=t.get(R);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=R.shadow.matrix,A++}i.directional[p]=Z,p++}else if(R.isSpotLight){const Z=e.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(F).multiplyScalar(N),Z.distance=H,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,i.spot[_]=Z;const Q=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,Q.updateMatrices(R),R.castShadow&&D++),i.spotLightMatrix[_]=Q.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=ie,S++}_++}else if(R.isRectAreaLight){const Z=e.get(R);Z.color.copy(F).multiplyScalar(N),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=Z,m++}else if(R.isPointLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){const Q=R.shadow,z=t.get(R);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,i.pointShadow[x]=z,i.pointShadowMap[x]=ie,i.pointShadowMatrix[x]=R.shadow.matrix,T++}i.point[x]=Z,x++}else if(R.isHemisphereLight){const Z=e.get(R);Z.skyColor.copy(R.color).multiplyScalar(N),Z.groundColor.copy(R.groundColor).multiplyScalar(N),i.hemi[d]=Z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==p||U.pointLength!==x||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==C||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+C-D,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,U.directionalLength=p,U.pointLength=x,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=C,U.numLightProbes=P,i.version=qS++)}function l(c,u){let f=0,h=0,p=0,x=0,_=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const T=c[d];if(T.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(T.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function of(n){const e=new jS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new of(n),e.set(r,[a])):s>=o.length?(a=new of(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ZS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QS(n,e,t){let i=new Wd;const r=new ct,s=new ct,o=new yt,a=new b_({depthPacking:Lg}),l=new E_,c={},u=t.maxTextureSize,f={[xi]:jt,[jt]:xi,[Xn]:Xn},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:ZS,fragmentShader:JS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new yn;x.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let d=this.type;this.render=function(D,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const M=n.getRenderTarget(),E=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(mi),F.buffers.depth.getReversed()?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=d!==kn&&this.type===kn,H=d===kn&&this.type!==kn;for(let ie=0,Z=D.length;ie<Z;ie++){const Q=D[ie],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ge=z.getFrameExtents();if(r.multiply(ge),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,z.mapSize.y=s.y)),z.map===null||N===!0||H===!0){const Re=this.type!==kn?{minFilter:xn,magFilter:xn}:{};z.map!==null&&z.map.dispose(),z.map=new $i(r.x,r.y,Re),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const xe=z.getViewportCount();for(let Re=0;Re<xe;Re++){const ze=z.getViewport(Re);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),F.viewport(o),z.updateMatrices(Q,Re),i=z.getFrustum(),S(P,U,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===kn&&A(z,U),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,R)};function A(D,P){const U=e.update(_);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new $i(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,U,h,_,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,U,p,_,null)}function T(D,P,U,M){let E=null;const R=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(R!==void 0)E=R;else if(E=U.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=E.uuid,N=P.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let ie=H[N];ie===void 0&&(ie=E.clone(),H[N]=ie,P.addEventListener("dispose",C)),E=ie}if(E.visible=P.visible,E.wireframe=P.wireframe,M===kn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=n.properties.get(E);F.light=U}return E}function S(D,P,U,M,E){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===kn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);const N=e.update(D),H=D.material;if(Array.isArray(H)){const ie=N.groups;for(let Z=0,Q=ie.length;Z<Q;Z++){const z=ie[Z],ge=H[z.materialIndex];if(ge&&ge.visible){const xe=T(D,ge,M,E);D.onBeforeShadow(n,D,P,U,N,xe,z),n.renderBufferDirect(U,null,N,xe,D,z),D.onAfterShadow(n,D,P,U,N,xe,z)}}}else if(H.visible){const ie=T(D,H,M,E);D.onBeforeShadow(n,D,P,U,N,ie,null),n.renderBufferDirect(U,null,N,ie,D,null),D.onAfterShadow(n,D,P,U,N,ie,null)}}const F=D.children;for(let N=0,H=F.length;N<H;N++)S(F[N],P,U,M,E)}function C(D){D.target.removeEventListener("dispose",C);for(const U in c){const M=c[U],E=D.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const eM={[Za]:Ja,[Qa]:nl,[el]:il,[Er]:tl,[Ja]:Za,[nl]:Qa,[il]:el,[tl]:Er};function tM(n,e){function t(){let I=!1;const pe=new yt;let _e=null;const Pe=new yt(0,0,0,0);return{setMask:function(fe){_e!==fe&&!I&&(n.colorMask(fe,fe,fe,fe),_e=fe)},setLocked:function(fe){I=fe},setClear:function(fe,se,Ue,qe,dt){dt===!0&&(fe*=qe,se*=qe,Ue*=qe),pe.set(fe,se,Ue,qe),Pe.equals(pe)===!1&&(n.clearColor(fe,se,Ue,qe),Pe.copy(pe))},reset:function(){I=!1,_e=null,Pe.set(-1,0,0,0)}}}function i(){let I=!1,pe=!1,_e=null,Pe=null,fe=null;return{setReversed:function(se){if(pe!==se){const Ue=e.get("EXT_clip_control");se?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),pe=se;const qe=fe;fe=null,this.setClear(qe)}},getReversed:function(){return pe},setTest:function(se){se?he(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(se){_e!==se&&!I&&(n.depthMask(se),_e=se)},setFunc:function(se){if(pe&&(se=eM[se]),Pe!==se){switch(se){case Za:n.depthFunc(n.NEVER);break;case Ja:n.depthFunc(n.ALWAYS);break;case Qa:n.depthFunc(n.LESS);break;case Er:n.depthFunc(n.LEQUAL);break;case el:n.depthFunc(n.EQUAL);break;case tl:n.depthFunc(n.GEQUAL);break;case nl:n.depthFunc(n.GREATER);break;case il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=se}},setLocked:function(se){I=se},setClear:function(se){fe!==se&&(pe&&(se=1-se),n.clearDepth(se),fe=se)},reset:function(){I=!1,_e=null,Pe=null,fe=null,pe=!1}}}function r(){let I=!1,pe=null,_e=null,Pe=null,fe=null,se=null,Ue=null,qe=null,dt=null;return{setTest:function(it){I||(it?he(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(it){pe!==it&&!I&&(n.stencilMask(it),pe=it)},setFunc:function(it,In,bn){(_e!==it||Pe!==In||fe!==bn)&&(n.stencilFunc(it,In,bn),_e=it,Pe=In,fe=bn)},setOp:function(it,In,bn){(se!==it||Ue!==In||qe!==bn)&&(n.stencilOp(it,In,bn),se=it,Ue=In,qe=bn)},setLocked:function(it){I=it},setClear:function(it){dt!==it&&(n.clearStencil(it),dt=it)},reset:function(){I=!1,pe=null,_e=null,Pe=null,fe=null,se=null,Ue=null,qe=null,dt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],x=null,_=!1,m=null,d=null,A=null,T=null,S=null,C=null,D=null,P=new tt(0,0,0),U=0,M=!1,E=null,R=null,F=null,N=null,H=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Q=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),Z=Q>=1):z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Z=Q>=2);let ge=null,xe={};const Re=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),Fe=new yt().fromArray(Re),Xe=new yt().fromArray(ze);function ee(I,pe,_e,Pe){const fe=new Uint8Array(4),se=n.createTexture();n.bindTexture(I,se),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<_e;Ue++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(pe+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return se}const me={};me[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(Er),J(!1),W(ou),he(n.CULL_FACE),V(mi);function he(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Ne(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Oe(I,pe){return f[I]!==pe?(n.bindFramebuffer(I,pe),f[I]=pe,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=pe),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function He(I,pe){let _e=p,Pe=!1;if(I){_e=h.get(pe),_e===void 0&&(_e=[],h.set(pe,_e));const fe=I.textures;if(_e.length!==fe.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Ue=fe.length;se<Ue;se++)_e[se]=n.COLOR_ATTACHMENT0+se;_e.length=fe.length,Pe=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(_e)}function pt(I){return x!==I?(n.useProgram(I),x=I,!0):!1}const w={[Hi]:n.FUNC_ADD,[rg]:n.FUNC_SUBTRACT,[sg]:n.FUNC_REVERSE_SUBTRACT};w[og]=n.MIN,w[ag]=n.MAX;const v={[lg]:n.ZERO,[cg]:n.ONE,[ug]:n.SRC_COLOR,[ja]:n.SRC_ALPHA,[gg]:n.SRC_ALPHA_SATURATE,[pg]:n.DST_COLOR,[dg]:n.DST_ALPHA,[fg]:n.ONE_MINUS_SRC_COLOR,[Ka]:n.ONE_MINUS_SRC_ALPHA,[mg]:n.ONE_MINUS_DST_COLOR,[hg]:n.ONE_MINUS_DST_ALPHA,[_g]:n.CONSTANT_COLOR,[vg]:n.ONE_MINUS_CONSTANT_COLOR,[xg]:n.CONSTANT_ALPHA,[Sg]:n.ONE_MINUS_CONSTANT_ALPHA};function V(I,pe,_e,Pe,fe,se,Ue,qe,dt,it){if(I===mi){_===!0&&(Ne(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),I!==ig){if(I!==m||it!==M){if((d!==Hi||S!==Hi)&&(n.blendEquation(n.FUNC_ADD),d=Hi,S=Hi),it)switch(I){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bo:n.blendFunc(n.ONE,n.ONE);break;case au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case au:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,T=null,C=null,D=null,P.set(0,0,0),U=0,m=I,M=it}return}fe=fe||pe,se=se||_e,Ue=Ue||Pe,(pe!==d||fe!==S)&&(n.blendEquationSeparate(w[pe],w[fe]),d=pe,S=fe),(_e!==A||Pe!==T||se!==C||Ue!==D)&&(n.blendFuncSeparate(v[_e],v[Pe],v[se],v[Ue]),A=_e,T=Pe,C=se,D=Ue),(qe.equals(P)===!1||dt!==U)&&(n.blendColor(qe.r,qe.g,qe.b,dt),P.copy(qe),U=dt),m=I,M=!1}function q(I,pe){I.side===Xn?Ne(n.CULL_FACE):he(n.CULL_FACE);let _e=I.side===jt;pe&&(_e=!_e),J(_e),I.blending===Sr&&I.transparent===!1?V(mi):V(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Pe=I.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),j(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(I){E!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),E=I)}function W(I){I!==eg?(he(n.CULL_FACE),I!==R&&(I===ou?n.cullFace(n.BACK):I===tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),R=I}function ae(I){I!==F&&(Z&&n.lineWidth(I),F=I)}function j(I,pe,_e){I?(he(n.POLYGON_OFFSET_FILL),(N!==pe||H!==_e)&&(n.polygonOffset(pe,_e),N=pe,H=_e)):Ne(n.POLYGON_OFFSET_FILL)}function ne(I){I?he(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function re(I){I===void 0&&(I=n.TEXTURE0+ie-1),ge!==I&&(n.activeTexture(I),ge=I)}function Se(I,pe,_e){_e===void 0&&(ge===null?_e=n.TEXTURE0+ie-1:_e=ge);let Pe=xe[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[_e]=Pe),(Pe.type!==I||Pe.texture!==pe)&&(ge!==_e&&(n.activeTexture(_e),ge=_e),n.bindTexture(I,pe||me[I]),Pe.type=I,Pe.texture=pe)}function y(){const I=xe[ge];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(I){Fe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Fe.copy(I))}function De(I){Xe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Xe.copy(I))}function we(I,pe){let _e=c.get(pe);_e===void 0&&(_e=new WeakMap,c.set(pe,_e));let Pe=_e.get(I);Pe===void 0&&(Pe=n.getUniformBlockIndex(pe,I.name),_e.set(I,Pe))}function ve(I,pe){const Pe=c.get(pe).get(I);l.get(pe)!==Pe&&(n.uniformBlockBinding(pe,Pe,I.__bindingPointIndex),l.set(pe,Pe))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,xe={},f={},h=new WeakMap,p=[],x=null,_=!1,m=null,d=null,A=null,T=null,S=null,C=null,D=null,P=new tt(0,0,0),U=0,M=!1,E=null,R=null,F=null,N=null,H=null,Fe.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Ne,bindFramebuffer:Oe,drawBuffers:He,useProgram:pt,setBlending:V,setMaterial:q,setFlipSided:J,setCullFace:W,setLineWidth:ae,setPolygonOffset:j,setScissorTest:ne,activeTexture:re,bindTexture:Se,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ae,texImage3D:ce,updateUBOMapping:we,uniformBlockBinding:ve,texStorage2D:le,texStorage3D:Te,texSubImage2D:k,texSubImage3D:te,compressedTexSubImage2D:G,compressedTexSubImage3D:Ee,scissor:ye,viewport:De,reset:$e}}function nM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,g){return p?new OffscreenCanvas(y,g):Ao("canvas")}function _(y,g,L){let k=1;const te=Se(y);if((te.width>L||te.height>L)&&(k=L/Math.max(te.width,te.height)),k<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const G=Math.floor(k*te.width),Ee=Math.floor(k*te.height);f===void 0&&(f=x(G,Ee));const le=g?x(G,Ee):f;return le.width=G,le.height=Ee,le.getContext("2d").drawImage(y,0,0,G,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+G+"x"+Ee+")."),le}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(y,g,L,k,te=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let G=g;if(g===n.RED&&(L===n.FLOAT&&(G=n.R32F),L===n.HALF_FLOAT&&(G=n.R16F),L===n.UNSIGNED_BYTE&&(G=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.R8UI),L===n.UNSIGNED_SHORT&&(G=n.R16UI),L===n.UNSIGNED_INT&&(G=n.R32UI),L===n.BYTE&&(G=n.R8I),L===n.SHORT&&(G=n.R16I),L===n.INT&&(G=n.R32I)),g===n.RG&&(L===n.FLOAT&&(G=n.RG32F),L===n.HALF_FLOAT&&(G=n.RG16F),L===n.UNSIGNED_BYTE&&(G=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RG8UI),L===n.UNSIGNED_SHORT&&(G=n.RG16UI),L===n.UNSIGNED_INT&&(G=n.RG32UI),L===n.BYTE&&(G=n.RG8I),L===n.SHORT&&(G=n.RG16I),L===n.INT&&(G=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGB8UI),L===n.UNSIGNED_SHORT&&(G=n.RGB16UI),L===n.UNSIGNED_INT&&(G=n.RGB32UI),L===n.BYTE&&(G=n.RGB8I),L===n.SHORT&&(G=n.RGB16I),L===n.INT&&(G=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),L===n.UNSIGNED_INT&&(G=n.RGBA32UI),L===n.BYTE&&(G=n.RGBA8I),L===n.SHORT&&(G=n.RGBA16I),L===n.INT&&(G=n.RGBA32I)),g===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),g===n.RGBA){const Ee=te?Eo:et.getTransfer(k);L===n.FLOAT&&(G=n.RGBA32F),L===n.HALF_FLOAT&&(G=n.RGBA16F),L===n.UNSIGNED_BYTE&&(G=Ee===lt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(y,g){let L;return y?g===null||g===Xi||g===ps?L=n.DEPTH24_STENCIL8:g===qn?L=n.DEPTH32F_STENCIL8:g===hs&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Xi||g===ps?L=n.DEPTH_COMPONENT24:g===qn?L=n.DEPTH_COMPONENT32F:g===hs&&(L=n.DEPTH_COMPONENT16),L}function C(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==xn&&y.minFilter!==Rn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function D(y){const g=y.target;g.removeEventListener("dispose",D),U(g),g.isVideoTexture&&u.delete(g)}function P(y){const g=y.target;g.removeEventListener("dispose",P),E(g)}function U(y){const g=i.get(y);if(g.__webglInit===void 0)return;const L=y.source,k=h.get(L);if(k){const te=k[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(y),Object.keys(k).length===0&&h.delete(L)}i.remove(y)}function M(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const L=y.source,k=h.get(L);delete k[g.__cacheKey],o.memory.textures--}function E(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let te=0;te<g.__webglFramebuffer[k].length;te++)n.deleteFramebuffer(g.__webglFramebuffer[k][te]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=y.textures;for(let k=0,te=L.length;k<te;k++){const G=i.get(L[k]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(L[k])}i.remove(y)}let R=0;function F(){R=0}function N(){const y=R;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),R+=1,y}function H(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function ie(y,g){const L=i.get(y);if(y.isVideoTexture&&ne(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&L.__version!==y.version){const k=y.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(L,y,g);return}}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function Z(y,g){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){me(L,y,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function Q(y,g){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){me(L,y,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function z(y,g){const L=i.get(y);if(y.version>0&&L.__version!==y.version){he(L,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const ge={[ol]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[al]:n.MIRRORED_REPEAT},xe={[xn]:n.NEAREST,[Pg]:n.NEAREST_MIPMAP_NEAREST,[Ls]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},Re={[Ng]:n.NEVER,[kg]:n.ALWAYS,[Fg]:n.LESS,[Id]:n.LEQUAL,[Og]:n.EQUAL,[Hg]:n.GEQUAL,[Bg]:n.GREATER,[zg]:n.NOTEQUAL};function ze(y,g){if(g.type===qn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Rn||g.magFilter===ia||g.magFilter===Ls||g.magFilter===Gi||g.minFilter===Rn||g.minFilter===ia||g.minFilter===Ls||g.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ge[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ge[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ge[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,xe[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===xn||g.minFilter!==Ls&&g.minFilter!==Gi||g.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Fe(y,g){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",D));const k=g.source;let te=h.get(k);te===void 0&&(te={},h.set(k,te));const G=H(g);if(G!==y.__cacheKey){te[G]===void 0&&(te[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),te[G].usedTimes++;const Ee=te[y.__cacheKey];Ee!==void 0&&(te[y.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(g)),y.__cacheKey=G,y.__webglTexture=te[G].texture}return L}function Xe(y,g,L){return Math.floor(Math.floor(y/L)/g)}function ee(y,g,L,k){const G=y.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,k,g.data);else{G.sort((ce,ye)=>ce.start-ye.start);let Ee=0;for(let ce=1;ce<G.length;ce++){const ye=G[Ee],De=G[ce],we=ye.start+ye.count,ve=Xe(De.start,g.width,4),$e=Xe(ye.start,g.width,4);De.start<=we+1&&ve===$e&&Xe(De.start+De.count-1,g.width,4)===ve?ye.count=Math.max(ye.count,De.start+De.count-ye.start):(++Ee,G[Ee]=De)}G.length=Ee+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ce=0,ye=G.length;ce<ye;ce++){const De=G[ce],we=Math.floor(De.start/4),ve=Math.ceil(De.count/4),$e=we%g.width,I=Math.floor(we/g.width),pe=ve,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,$e,I,pe,_e,L,k,g.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function me(y,g,L){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const te=Fe(y,g),G=g.source;t.bindTexture(k,y.__webglTexture,n.TEXTURE0+L);const Ee=i.get(G);if(G.version!==Ee.__version||te===!0){t.activeTexture(n.TEXTURE0+L);const le=et.getPrimaries(et.workingColorSpace),Te=g.colorSpace===hi?null:et.getPrimaries(g.colorSpace),Ae=g.colorSpace===hi||le===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ce=_(g.image,!1,r.maxTextureSize);ce=re(g,ce);const ye=s.convert(g.format,g.colorSpace),De=s.convert(g.type);let we=T(g.internalFormat,ye,De,g.colorSpace,g.isVideoTexture);ze(k,g);let ve;const $e=g.mipmaps,I=g.isVideoTexture!==!0,pe=Ee.__version===void 0||te===!0,_e=G.dataReady,Pe=C(g,ce);if(g.isDepthTexture)we=S(g.format===gs,g.type),pe&&(I?t.texStorage2D(n.TEXTURE_2D,1,we,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,we,ce.width,ce.height,0,ye,De,null));else if(g.isDataTexture)if($e.length>0){I&&pe&&t.texStorage2D(n.TEXTURE_2D,Pe,we,$e[0].width,$e[0].height);for(let fe=0,se=$e.length;fe<se;fe++)ve=$e[fe],I?_e&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ve.width,ve.height,ye,De,ve.data):t.texImage2D(n.TEXTURE_2D,fe,we,ve.width,ve.height,0,ye,De,ve.data);g.generateMipmaps=!1}else I?(pe&&t.texStorage2D(n.TEXTURE_2D,Pe,we,ce.width,ce.height),_e&&ee(g,ce,ye,De)):t.texImage2D(n.TEXTURE_2D,0,we,ce.width,ce.height,0,ye,De,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,we,$e[0].width,$e[0].height,ce.depth);for(let fe=0,se=$e.length;fe<se;fe++)if(ve=$e[fe],g.format!==_n)if(ye!==null)if(I){if(_e)if(g.layerUpdates.size>0){const Ue=Nu(ve.width,ve.height,g.format,g.type);for(const qe of g.layerUpdates){const dt=ve.data.subarray(qe*Ue/ve.data.BYTES_PER_ELEMENT,(qe+1)*Ue/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,qe,ve.width,ve.height,1,ye,dt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,ve.width,ve.height,ce.depth,ye,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,we,ve.width,ve.height,ce.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,ve.width,ve.height,ce.depth,ye,De,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,we,ve.width,ve.height,ce.depth,0,ye,De,ve.data)}else{I&&pe&&t.texStorage2D(n.TEXTURE_2D,Pe,we,$e[0].width,$e[0].height);for(let fe=0,se=$e.length;fe<se;fe++)ve=$e[fe],g.format!==_n?ye!==null?I?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,we,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?_e&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ve.width,ve.height,ye,De,ve.data):t.texImage2D(n.TEXTURE_2D,fe,we,ve.width,ve.height,0,ye,De,ve.data)}else if(g.isDataArrayTexture)if(I){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,we,ce.width,ce.height,ce.depth),_e)if(g.layerUpdates.size>0){const fe=Nu(ce.width,ce.height,g.format,g.type);for(const se of g.layerUpdates){const Ue=ce.data.subarray(se*fe/ce.data.BYTES_PER_ELEMENT,(se+1)*fe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ce.width,ce.height,1,ye,De,Ue)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,De,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ce.width,ce.height,ce.depth,0,ye,De,ce.data);else if(g.isData3DTexture)I?(pe&&t.texStorage3D(n.TEXTURE_3D,Pe,we,ce.width,ce.height,ce.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,De,ce.data)):t.texImage3D(n.TEXTURE_3D,0,we,ce.width,ce.height,ce.depth,0,ye,De,ce.data);else if(g.isFramebufferTexture){if(pe)if(I)t.texStorage2D(n.TEXTURE_2D,Pe,we,ce.width,ce.height);else{let fe=ce.width,se=ce.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,we,fe,se,0,ye,De,null),fe>>=1,se>>=1}}else if($e.length>0){if(I&&pe){const fe=Se($e[0]);t.texStorage2D(n.TEXTURE_2D,Pe,we,fe.width,fe.height)}for(let fe=0,se=$e.length;fe<se;fe++)ve=$e[fe],I?_e&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ye,De,ve):t.texImage2D(n.TEXTURE_2D,fe,we,ye,De,ve);g.generateMipmaps=!1}else if(I){if(pe){const fe=Se(ce);t.texStorage2D(n.TEXTURE_2D,Pe,we,fe.width,fe.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,De,ce)}else t.texImage2D(n.TEXTURE_2D,0,we,ye,De,ce);m(g)&&d(k),Ee.__version=G.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function he(y,g,L){if(g.image.length!==6)return;const k=Fe(y,g),te=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const G=i.get(te);if(te.version!==G.__version||k===!0){t.activeTexture(n.TEXTURE0+L);const Ee=et.getPrimaries(et.workingColorSpace),le=g.colorSpace===hi?null:et.getPrimaries(g.colorSpace),Te=g.colorSpace===hi||Ee===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!Ae&&!ce?ye[se]=_(g.image[se],!0,r.maxCubemapSize):ye[se]=ce?g.image[se].image:g.image[se],ye[se]=re(g,ye[se]);const De=ye[0],we=s.convert(g.format,g.colorSpace),ve=s.convert(g.type),$e=T(g.internalFormat,we,ve,g.colorSpace),I=g.isVideoTexture!==!0,pe=G.__version===void 0||k===!0,_e=te.dataReady;let Pe=C(g,De);ze(n.TEXTURE_CUBE_MAP,g);let fe;if(Ae){I&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,$e,De.width,De.height);for(let se=0;se<6;se++){fe=ye[se].mipmaps;for(let Ue=0;Ue<fe.length;Ue++){const qe=fe[Ue];g.format!==_n?we!==null?I?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,qe.width,qe.height,we,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,$e,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,qe.width,qe.height,we,ve,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,$e,qe.width,qe.height,0,we,ve,qe.data)}}}else{if(fe=g.mipmaps,I&&pe){fe.length>0&&Pe++;const se=Se(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,$e,se.width,se.height)}for(let se=0;se<6;se++)if(ce){I?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,we,ve,ye[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,ye[se].width,ye[se].height,0,we,ve,ye[se].data);for(let Ue=0;Ue<fe.length;Ue++){const dt=fe[Ue].image[se].image;I?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,dt.width,dt.height,we,ve,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,$e,dt.width,dt.height,0,we,ve,dt.data)}}else{I?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we,ve,ye[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,we,ve,ye[se]);for(let Ue=0;Ue<fe.length;Ue++){const qe=fe[Ue];I?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,we,ve,qe.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,$e,we,ve,qe.image[se])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),G.__version=te.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ne(y,g,L,k,te,G){const Ee=s.convert(L.format,L.colorSpace),le=s.convert(L.type),Te=T(L.internalFormat,Ee,le,L.colorSpace),Ae=i.get(g),ce=i.get(L);if(ce.__renderTarget=g,!Ae.__hasExternalTextures){const ye=Math.max(1,g.width>>G),De=Math.max(1,g.height>>G);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,G,Te,ye,De,g.depth,0,Ee,le,null):t.texImage2D(te,G,Te,ye,De,0,Ee,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),j(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,te,ce.__webglTexture,0,ae(g)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,te,ce.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(y,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const k=g.depthTexture,te=k&&k.isDepthTexture?k.type:null,G=S(g.stencilBuffer,te),Ee=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=ae(g);j(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,G,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,G,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,G,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,y)}else{const k=g.textures;for(let te=0;te<k.length;te++){const G=k[te],Ee=s.convert(G.format,G.colorSpace),le=s.convert(G.type),Te=T(G.internalFormat,Ee,le,G.colorSpace),Ae=ae(g);L&&j(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Te,g.width,g.height):j(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Te,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ie(g.depthTexture,0);const te=k.__webglTexture,G=ae(g);if(g.depthTexture.format===ms)j(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(g.depthTexture.format===gs)j(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function pt(y){const g=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const k=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const te=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",te)};k.addEventListener("dispose",te),g.__depthDisposeCallback=te}g.__boundDepthTexture=k}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const k=y.texture.mipmaps;k&&k.length>0?He(g.__webglFramebuffer[0],y):He(g.__webglFramebuffer,y)}else if(L){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=n.createRenderbuffer(),Oe(g.__webglDepthbuffer[k],y,!1);else{const te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,G)}}else{const k=y.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Oe(g.__webglDepthbuffer,y,!1);else{const te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(y,g,L){const k=i.get(y);g!==void 0&&Ne(k.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&pt(y)}function v(y){const g=y.texture,L=i.get(y),k=i.get(g);y.addEventListener("dispose",P);const te=y.textures,G=y.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,o.memory.textures++),G){L.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[le]=[];for(let Te=0;Te<g.mipmaps.length;Te++)L.__webglFramebuffer[le][Te]=n.createFramebuffer()}else L.__webglFramebuffer[le]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)L.__webglFramebuffer[le]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let le=0,Te=te.length;le<Te;le++){const Ae=i.get(te[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&j(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const Te=te[le];L.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[le]);const Ae=s.convert(Te.format,Te.colorSpace),ce=s.convert(Te.type),ye=T(Te.internalFormat,Ae,ce,Te.colorSpace,y.isXRRenderTarget===!0),De=ae(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ye,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,L.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),ze(n.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)Ne(L.__webglFramebuffer[le][Te],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te);else Ne(L.__webglFramebuffer[le],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let le=0,Te=te.length;le<Te;le++){const Ae=te[le],ce=i.get(Ae);let ye=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ye=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,ce.__webglTexture),ze(ye,Ae),Ne(L.__webglFramebuffer,y,Ae,n.COLOR_ATTACHMENT0+le,ye,0),m(Ae)&&d(ye)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(le=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,k.__webglTexture),ze(le,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)Ne(L.__webglFramebuffer[Te],y,g,n.COLOR_ATTACHMENT0,le,Te);else Ne(L.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,le,0);m(g)&&d(le),t.unbindTexture()}y.depthBuffer&&pt(y)}function V(y){const g=y.textures;for(let L=0,k=g.length;L<k;L++){const te=g[L];if(m(te)){const G=A(y),Ee=i.get(te).__webglTexture;t.bindTexture(G,Ee),d(G),t.unbindTexture()}}}const q=[],J=[];function W(y){if(y.samples>0){if(j(y)===!1){const g=y.textures,L=y.width,k=y.height;let te=n.COLOR_BUFFER_BIT;const G=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(y),le=g.length>1;if(le)for(let Ae=0;Ae<g.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Te=y.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ae=0;Ae<g.length;Ae++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);const ce=i.get(g[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,L,k,0,0,L,k,te,n.NEAREST),l===!0&&(q.length=0,J.length=0,q.push(n.COLOR_ATTACHMENT0+Ae),y.depthBuffer&&y.resolveDepthBuffer===!1&&(q.push(G),J.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<g.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);const ce=i.get(g[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ae(y){return Math.min(r.maxSamples,y.samples)}function j(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ne(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function re(y,g){const L=y.colorSpace,k=y.format,te=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==wr&&L!==hi&&(et.getTransfer(L)===lt?(k!==_n||te!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function Se(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=ie,this.setTexture2DArray=Z,this.setTexture3D=Q,this.setTextureCube=z,this.rebindTextures=w,this.setupRenderTarget=v,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=j}function iM(n,e){function t(i,r=hi){let s;const o=et.getTransfer(r);if(i===Qn)return n.UNSIGNED_BYTE;if(i===oc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Td)return n.BYTE;if(i===Ad)return n.SHORT;if(i===hs)return n.UNSIGNED_SHORT;if(i===sc)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===xs)return n.HALF_FLOAT;if(i===Rd)return n.ALPHA;if(i===Cd)return n.RGB;if(i===_n)return n.RGBA;if(i===ms)return n.DEPTH_COMPONENT;if(i===gs)return n.DEPTH_STENCIL;if(i===Pd)return n.RED;if(i===lc)return n.RED_INTEGER;if(i===Dd)return n.RG;if(i===cc)return n.RG_INTEGER;if(i===uc)return n.RGBA_INTEGER;if(i===lo||i===co||i===uo||i===fo)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ll||i===cl||i===ul||i===fl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dl||i===hl||i===pl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dl||i===hl)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===Ml||i===yl||i===bl||i===El||i===Tl||i===Al||i===wl||i===Rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ml)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_l)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===El)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ho||i===Cl||i===Pl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ho)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ld||i===Dl||i===Ll||i===Il)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ho)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Qd extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Qd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Si({vertexShader:rM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new ko(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aM extends Cr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,x=null;const _=new oM,m={},d=t.getContextAttributes();let A=null,T=null;const S=[],C=[],D=new ct;let P=null;const U=new ln;U.viewport=new yt;const M=new ln;M.viewport=new yt;const E=[U,M],R=new R_;let F=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let me=S[ee];return me===void 0&&(me=new Aa,S[ee]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ee){let me=S[ee];return me===void 0&&(me=new Aa,S[ee]=me),me.getGripSpace()},this.getHand=function(ee){let me=S[ee];return me===void 0&&(me=new Aa,S[ee]=me),me.getHandSpace()};function H(ee){const me=C.indexOf(ee.inputSource);if(me===-1)return;const he=S[me];he!==void 0&&(he.update(ee.inputSource,ee.frame,c||o),he.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ie(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",Z);for(let ee=0;ee<S.length;ee++){const me=C[ee];me!==null&&(C[ee]=null,S[ee].disconnect(me))}F=null,N=null,_.reset();for(const ee in m)delete m[ee];e.setRenderTarget(A),p=null,h=null,f=null,r=null,T=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",Z),d.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ne=null,Oe=null;d.depth&&(Oe=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=d.stencil?gs:ms,Ne=d.stencil?ps:Xi);const He={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};h=f.createProjectionLayer(He),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new $i(h.textureWidth,h.textureHeight,{format:_n,type:Qn,depthTexture:new qd(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const he={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new $i(p.framebufferWidth,p.framebufferHeight,{format:_n,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(ee){for(let me=0;me<ee.removed.length;me++){const he=ee.removed[me],Ne=C.indexOf(he);Ne>=0&&(C[Ne]=null,S[Ne].disconnect(he))}for(let me=0;me<ee.added.length;me++){const he=ee.added[me];let Ne=C.indexOf(he);if(Ne===-1){for(let He=0;He<S.length;He++)if(He>=C.length){C.push(he),Ne=He;break}else if(C[He]===null){C[He]=he,Ne=He;break}if(Ne===-1)break}const Oe=S[Ne];Oe&&Oe.connect(he)}}const Q=new X,z=new X;function ge(ee,me,he){Q.setFromMatrixPosition(me.matrixWorld),z.setFromMatrixPosition(he.matrixWorld);const Ne=Q.distanceTo(z),Oe=me.projectionMatrix.elements,He=he.projectionMatrix.elements,pt=Oe[14]/(Oe[10]-1),w=Oe[14]/(Oe[10]+1),v=(Oe[9]+1)/Oe[5],V=(Oe[9]-1)/Oe[5],q=(Oe[8]-1)/Oe[0],J=(He[8]+1)/He[0],W=pt*q,ae=pt*J,j=Ne/(-q+J),ne=j*-q;if(me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ne),ee.translateZ(j),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Oe[10]===-1)ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const re=pt+j,Se=w+j,y=W-ne,g=ae+(Ne-ne),L=v*w/Se*re,k=V*w/Se*re;ee.projectionMatrix.makePerspective(y,g,L,k,re,Se),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function xe(ee,me){me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let me=ee.near,he=ee.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(he=_.depthFar)),R.near=M.near=U.near=me,R.far=M.far=U.far=he,(F!==R.near||N!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,N=R.far),R.layers.mask=ee.layers.mask|6,U.layers.mask=R.layers.mask&3,M.layers.mask=R.layers.mask&5;const Ne=ee.parent,Oe=R.cameras;xe(R,Ne);for(let He=0;He<Oe.length;He++)xe(Oe[He],Ne);Oe.length===2?ge(R,U,M):R.projectionMatrix.copy(U.projectionMatrix),Re(ee,R,Ne)};function Re(ee,me,he){he===null?ee.matrix.copy(me.matrixWorld):(ee.matrix.copy(he.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ul*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(R)},this.getCameraTexture=function(ee){return m[ee]};let ze=null;function Fe(ee,me){if(u=me.getViewerPose(c||o),x=me,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Ne=!1;he.length!==R.cameras.length&&(R.cameras.length=0,Ne=!0);for(let w=0;w<he.length;w++){const v=he[w];let V=null;if(p!==null)V=p.getViewport(v);else{const J=f.getViewSubImage(h,v);V=J.viewport,w===0&&(e.setRenderTargetTextures(T,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(T))}let q=E[w];q===void 0&&(q=new ln,q.layers.enable(w),q.viewport=new yt,E[w]=q),q.matrix.fromArray(v.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(v.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(V.x,V.y,V.width,V.height),w===0&&(R.matrix.copy(q.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ne===!0&&R.cameras.push(q)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const w=f.getDepthInformation(he[0]);w&&w.isValid&&w.texture&&_.init(w,r.renderState)}if(Oe&&Oe.includes("camera-access")&&(e.state.unbindTexture(),f))for(let w=0;w<he.length;w++){const v=he[w].camera;if(v){let V=m[v];V||(V=new Qd,m[v]=V);const q=f.getCameraImage(v);V.sourceTexture=q}}}for(let he=0;he<S.length;he++){const Ne=C[he],Oe=S[he];Ne!==null&&Oe!==void 0&&Oe.update(Ne,me,c||o)}ze&&ze(ee,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),x=null}const Xe=new Yd;Xe.setAnimationLoop(Fe),this.setAnimationLoop=function(ee){ze=ee},this.dispose=function(){}}}const Ui=new ei,lM=new bt;function cM(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,kd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,T,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===jt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===jt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),T=A.envMap,S=A.envMapRotation;T&&(m.envMap.value=T,Ui.copy(S),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(Ui)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===jt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const S=T.program;i.uniformBlockBinding(A,S)}function c(A,T){let S=r[A.id];S===void 0&&(x(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",m));const C=T.program;i.updateUBOMapping(A,C);const D=e.render.frame;s[A.id]!==D&&(h(A),s[A.id]=D)}function u(A){const T=f();A.__bindingPointIndex=T;const S=n.createBuffer(),C=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const T=r[A.id],S=A.uniforms,C=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let D=0,P=S.length;D<P;D++){const U=Array.isArray(S[D])?S[D]:[S[D]];for(let M=0,E=U.length;M<E;M++){const R=U[M];if(p(R,D,M,C)===!0){const F=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let ie=0;ie<N.length;ie++){const Z=N[ie],Q=_(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,F+H,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,S,C){const D=A.value,P=T+"_"+S;if(C[P]===void 0)return typeof D=="number"||typeof D=="boolean"?C[P]=D:C[P]=D.clone(),!0;{const U=C[P];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return C[P]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function x(A){const T=A.uniforms;let S=0;const C=16;for(let P=0,U=T.length;P<U;P++){const M=Array.isArray(T[P])?T[P]:[T[P]];for(let E=0,R=M.length;E<R;E++){const F=M[E],N=Array.isArray(F.value)?F.value:[F.value];for(let H=0,ie=N.length;H<ie;H++){const Z=N[H],Q=_(Z),z=S%C,ge=z%Q.boundary,xe=z+ge;S+=ge,xe!==0&&C-xe<Q.storage&&(S+=C-xe),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=Q.storage}}}const D=S%C;return D>0&&(S+=C-D),A.__size=S,A.__cache={},this}function _(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class fM{constructor(e={}){const{canvas:t=Gg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const x=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=an;let D=0,P=0,U=null,M=-1,E=null;const R=new yt,F=new yt;let N=null;const H=new tt(0);let ie=0,Z=t.width,Q=t.height,z=1,ge=null,xe=null;const Re=new yt(0,0,Z,Q),ze=new yt(0,0,Z,Q);let Fe=!1;const Xe=new Wd;let ee=!1,me=!1;const he=new bt,Ne=new X,Oe=new yt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function w(){return U===null?z:1}let v=i;function V(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),v===null){const O="webgl2";if(v=V(O,b),v===null)throw V(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let q,J,W,ae,j,ne,re,Se,y,g,L,k,te,G,Ee,le,Te,Ae,ce,ye,De,we,ve,$e;function I(){q=new Mx(v),q.init(),we=new iM(v,q),J=new px(v,q,e,we),W=new tM(v,q),J.reversedDepthBuffer&&h&&W.buffers.depth.setReversed(!0),ae=new Ex(v),j=new VS,ne=new nM(v,q,W,j,J,we,ae),re=new gx(S),Se=new Sx(S),y=new P_(v),ve=new dx(v,y),g=new yx(v,y,ae,ve),L=new Ax(v,g,y,ae),ce=new Tx(v,J,ne),le=new mx(j),k=new kS(S,re,Se,q,J,ve,le),te=new cM(S,j),G=new WS,Ee=new KS(q),Ae=new fx(S,re,Se,W,L,p,l),Te=new QS(S,L,J),$e=new uM(v,ae,J,W),ye=new hx(v,q,ae),De=new bx(v,q,ae),ae.programs=k.programs,S.capabilities=J,S.extensions=q,S.properties=j,S.renderLists=G,S.shadowMap=Te,S.state=W,S.info=ae}I();const pe=new aM(S,v);this.xr=pe,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const b=q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(Z,Q,!1))},this.getSize=function(b){return b.set(Z,Q)},this.setSize=function(b,O,Y=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,Q=O,t.width=Math.floor(b*z),t.height=Math.floor(O*z),Y===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Z*z,Q*z).floor()},this.setDrawingBufferSize=function(b,O,Y){Z=b,Q=O,z=Y,t.width=Math.floor(b*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(Re)},this.setViewport=function(b,O,Y,K){b.isVector4?Re.set(b.x,b.y,b.z,b.w):Re.set(b,O,Y,K),W.viewport(R.copy(Re).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(ze)},this.setScissor=function(b,O,Y,K){b.isVector4?ze.set(b.x,b.y,b.z,b.w):ze.set(b,O,Y,K),W.scissor(F.copy(ze).multiplyScalar(z).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(b){W.setScissorTest(Fe=b)},this.setOpaqueSort=function(b){ge=b},this.setTransparentSort=function(b){xe=b},this.getClearColor=function(b){return b.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Y=!0){let K=0;if(b){let B=!1;if(U!==null){const de=U.texture.format;B=de===uc||de===cc||de===lc}if(B){const de=U.texture.type,be=de===Qn||de===Xi||de===hs||de===ps||de===oc||de===ac,Le=Ae.getClearColor(),Ce=Ae.getClearAlpha(),Ve=Le.r,We=Le.g,Be=Le.b;be?(x[0]=Ve,x[1]=We,x[2]=Be,x[3]=Ce,v.clearBufferuiv(v.COLOR,0,x)):(_[0]=Ve,_[1]=We,_[2]=Be,_[3]=Ce,v.clearBufferiv(v.COLOR,0,_))}else K|=v.COLOR_BUFFER_BIT}O&&(K|=v.DEPTH_BUFFER_BIT),Y&&(K|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ae.dispose(),G.dispose(),Ee.dispose(),j.dispose(),re.dispose(),Se.dispose(),L.dispose(),ve.dispose(),$e.dispose(),k.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",bn),pe.removeEventListener("sessionend",mc),bi.stop()};function _e(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=ae.autoReset,O=Te.enabled,Y=Te.autoUpdate,K=Te.needsUpdate,B=Te.type;I(),ae.autoReset=b,Te.enabled=O,Te.autoUpdate=Y,Te.needsUpdate=K,Te.type=B}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){const O=b.target;O.removeEventListener("dispose",se),Ue(O)}function Ue(b){qe(b),j.remove(b)}function qe(b){const O=j.get(b).programs;O!==void 0&&(O.forEach(function(Y){k.releaseProgram(Y)}),b.isShaderMaterial&&k.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,K,B,de){O===null&&(O=He);const be=B.isMesh&&B.matrixWorld.determinant()<0,Le=ih(b,O,Y,K,B);W.setMaterial(K,be);let Ce=Y.index,Ve=1;if(K.wireframe===!0){if(Ce=g.getWireframeAttribute(Y),Ce===void 0)return;Ve=2}const We=Y.drawRange,Be=Y.attributes.position;let Ze=We.start*Ve,at=(We.start+We.count)*Ve;de!==null&&(Ze=Math.max(Ze,de.start*Ve),at=Math.min(at,(de.start+de.count)*Ve)),Ce!==null?(Ze=Math.max(Ze,0),at=Math.min(at,Ce.count)):Be!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,Be.count));const xt=at-Ze;if(xt<0||xt===1/0)return;ve.setup(B,K,Le,Y,Ce);let mt,ut=ye;if(Ce!==null&&(mt=y.get(Ce),ut=De,ut.setIndex(mt)),B.isMesh)K.wireframe===!0?(W.setLineWidth(K.wireframeLinewidth*w()),ut.setMode(v.LINES)):ut.setMode(v.TRIANGLES);else if(B.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),W.setLineWidth(ke*w()),B.isLineSegments?ut.setMode(v.LINES):B.isLineLoop?ut.setMode(v.LINE_LOOP):ut.setMode(v.LINE_STRIP)}else B.isPoints?ut.setMode(v.POINTS):B.isSprite&&ut.setMode(v.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))ut.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ke=B._multiDrawStarts,_t=B._multiDrawCounts,Qe=B._multiDrawCount,Kt=Ce?y.get(Ce).bytesPerElement:1,ji=j.get(K).currentProgram.getUniforms();for(let Zt=0;Zt<Qe;Zt++)ji.setValue(v,"_gl_DrawID",Zt),ut.render(ke[Zt]/Kt,_t[Zt])}else if(B.isInstancedMesh)ut.renderInstances(Ze,xt,B.count);else if(Y.isInstancedBufferGeometry){const ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,_t=Math.min(Y.instanceCount,ke);ut.renderInstances(Ze,xt,_t)}else ut.render(Ze,xt)};function dt(b,O,Y){b.transparent===!0&&b.side===Xn&&b.forceSinglePass===!1?(b.side=jt,b.needsUpdate=!0,As(b,O,Y),b.side=xi,b.needsUpdate=!0,As(b,O,Y),b.side=Xn):As(b,O,Y)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),d=Ee.get(Y),d.init(O),T.push(d),Y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),b!==Y&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const K=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){const Le=de[be];dt(Le,Y,B),K.add(Le)}else dt(de,Y,B),K.add(de)}),d=T.pop(),K},this.compileAsync=function(b,O,Y=null){const K=this.compile(b,O,Y);return new Promise(B=>{function de(){if(K.forEach(function(be){j.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){B(b);return}setTimeout(de,10)}q.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let it=null;function In(b){it&&it(b)}function bn(){bi.stop()}function mc(){bi.start()}const bi=new Yd;bi.setAnimationLoop(In),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(b){it=b,pe.setAnimationLoop(b),b===null?bi.stop():bi.start()},pe.addEventListener("sessionstart",bn),pe.addEventListener("sessionend",mc),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,O,U),d=Ee.get(b,T.length),d.init(O),T.push(d),he.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Xe.setFromProjectionMatrix(he,Cn,O.reversedDepth),me=this.localClippingEnabled,ee=le.init(this.clippingPlanes,me),m=G.get(b,A.length),m.init(),A.push(m),pe.enabled===!0&&pe.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&Go(de,O,-1/0,S.sortObjects)}Go(b,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ge,xe),pt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,pt&&Ae.addToRenderList(m,b),this.info.render.frame++,ee===!0&&le.beginShadows();const Y=d.state.shadowsArray;Te.render(Y,b,O),ee===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,B=m.transmissive;if(d.setupLights(),O.isArrayCamera){const de=O.cameras;if(B.length>0)for(let be=0,Le=de.length;be<Le;be++){const Ce=de[be];_c(K,B,b,Ce)}pt&&Ae.render(b);for(let be=0,Le=de.length;be<Le;be++){const Ce=de[be];gc(m,b,Ce,Ce.viewport)}}else B.length>0&&_c(K,B,b,O),pt&&Ae.render(b),gc(m,b,O);U!==null&&P===0&&(ne.updateMultisampleRenderTarget(U),ne.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(S,b,O),ve.resetDefaultState(),M=-1,E=null,T.pop(),T.length>0?(d=T[T.length-1],ee===!0&&le.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Go(b,O,Y,K){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xe.intersectsSprite(b)){K&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);const be=L.update(b),Le=b.material;Le.visible&&m.push(b,be,Le,Y,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xe.intersectsObject(b))){const be=L.update(b),Le=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Oe.copy(be.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(Le)){const Ce=be.groups;for(let Ve=0,We=Ce.length;Ve<We;Ve++){const Be=Ce[Ve],Ze=Le[Be.materialIndex];Ze&&Ze.visible&&m.push(b,be,Ze,Y,Oe.z,Be)}}else Le.visible&&m.push(b,be,Le,Y,Oe.z,null)}}const de=b.children;for(let be=0,Le=de.length;be<Le;be++)Go(de[be],O,Y,K)}function gc(b,O,Y,K){const B=b.opaque,de=b.transmissive,be=b.transparent;d.setupLightsView(Y),ee===!0&&le.setGlobalState(S.clippingPlanes,Y),K&&W.viewport(R.copy(K)),B.length>0&&Ts(B,O,Y),de.length>0&&Ts(de,O,Y),be.length>0&&Ts(be,O,Y),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function _c(b,O,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[K.id]===void 0&&(d.state.transmissionRenderTarget[K.id]=new $i(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?xs:Qn,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const de=d.state.transmissionRenderTarget[K.id],be=K.viewport||R;de.setSize(be.z*S.transmissionResolutionScale,be.w*S.transmissionResolutionScale);const Le=S.getRenderTarget(),Ce=S.getActiveCubeFace(),Ve=S.getActiveMipmapLevel();S.setRenderTarget(de),S.getClearColor(H),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),pt&&Ae.render(Y);const We=S.toneMapping;S.toneMapping=gi;const Be=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),d.setupLightsView(K),ee===!0&&le.setGlobalState(S.clippingPlanes,K),Ts(b,Y,K),ne.updateMultisampleRenderTarget(de),ne.updateRenderTargetMipmap(de),q.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let at=0,xt=O.length;at<xt;at++){const mt=O[at],ut=mt.object,ke=mt.geometry,_t=mt.material,Qe=mt.group;if(_t.side===Xn&&ut.layers.test(K.layers)){const Kt=_t.side;_t.side=jt,_t.needsUpdate=!0,vc(ut,Y,K,ke,_t,Qe),_t.side=Kt,_t.needsUpdate=!0,Ze=!0}}Ze===!0&&(ne.updateMultisampleRenderTarget(de),ne.updateRenderTargetMipmap(de))}S.setRenderTarget(Le,Ce,Ve),S.setClearColor(H,ie),Be!==void 0&&(K.viewport=Be),S.toneMapping=We}function Ts(b,O,Y){const K=O.isScene===!0?O.overrideMaterial:null;for(let B=0,de=b.length;B<de;B++){const be=b[B],Le=be.object,Ce=be.geometry,Ve=be.group;let We=be.material;We.allowOverride===!0&&K!==null&&(We=K),Le.layers.test(Y.layers)&&vc(Le,O,Y,Ce,We,Ve)}}function vc(b,O,Y,K,B,de){b.onBeforeRender(S,O,Y,K,B,de),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(S,O,Y,K,b,de),B.transparent===!0&&B.side===Xn&&B.forceSinglePass===!1?(B.side=jt,B.needsUpdate=!0,S.renderBufferDirect(Y,O,K,B,b,de),B.side=xi,B.needsUpdate=!0,S.renderBufferDirect(Y,O,K,B,b,de),B.side=Xn):S.renderBufferDirect(Y,O,K,B,b,de),b.onAfterRender(S,O,Y,K,B,de)}function As(b,O,Y){O.isScene!==!0&&(O=He);const K=j.get(b),B=d.state.lights,de=d.state.shadowsArray,be=B.state.version,Le=k.getParameters(b,B.state,de,O,Y),Ce=k.getProgramCacheKey(Le);let Ve=K.programs;K.environment=b.isMeshStandardMaterial?O.environment:null,K.fog=O.fog,K.envMap=(b.isMeshStandardMaterial?Se:re).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",se),Ve=new Map,K.programs=Ve);let We=Ve.get(Ce);if(We!==void 0){if(K.currentProgram===We&&K.lightsStateVersion===be)return Sc(b,Le),We}else Le.uniforms=k.getUniforms(b),b.onBeforeCompile(Le,S),We=k.acquireProgram(Le,Ce),Ve.set(Ce,We),K.uniforms=Le.uniforms;const Be=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=le.uniform),Sc(b,Le),K.needsLights=sh(b),K.lightsStateVersion=be,K.needsLights&&(Be.ambientLightColor.value=B.state.ambient,Be.lightProbe.value=B.state.probe,Be.directionalLights.value=B.state.directional,Be.directionalLightShadows.value=B.state.directionalShadow,Be.spotLights.value=B.state.spot,Be.spotLightShadows.value=B.state.spotShadow,Be.rectAreaLights.value=B.state.rectArea,Be.ltc_1.value=B.state.rectAreaLTC1,Be.ltc_2.value=B.state.rectAreaLTC2,Be.pointLights.value=B.state.point,Be.pointLightShadows.value=B.state.pointShadow,Be.hemisphereLights.value=B.state.hemi,Be.directionalShadowMap.value=B.state.directionalShadowMap,Be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Be.spotShadowMap.value=B.state.spotShadowMap,Be.spotLightMatrix.value=B.state.spotLightMatrix,Be.spotLightMap.value=B.state.spotLightMap,Be.pointShadowMap.value=B.state.pointShadowMap,Be.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=We,K.uniformsList=null,We}function xc(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=po.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Sc(b,O){const Y=j.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function ih(b,O,Y,K,B){O.isScene!==!0&&(O=He),ne.resetTextureUnits();const de=O.fog,be=K.isMeshStandardMaterial?O.environment:null,Le=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:wr,Ce=(K.isMeshStandardMaterial?Se:re).get(K.envMap||be),Ve=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!Y.morphAttributes.position,Ze=!!Y.morphAttributes.normal,at=!!Y.morphAttributes.color;let xt=gi;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xt=S.toneMapping);const mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ut=mt!==void 0?mt.length:0,ke=j.get(K),_t=d.state.lights;if(ee===!0&&(me===!0||b!==E)){const zt=b===E&&K.id===M;le.setState(K,b,zt)}let Qe=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==_t.state.version||ke.outputColorSpace!==Le||B.isBatchedMesh&&ke.batching===!1||!B.isBatchedMesh&&ke.batching===!0||B.isBatchedMesh&&ke.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ke.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ke.instancing===!1||!B.isInstancedMesh&&ke.instancing===!0||B.isSkinnedMesh&&ke.skinning===!1||!B.isSkinnedMesh&&ke.skinning===!0||B.isInstancedMesh&&ke.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ke.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ke.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ke.instancingMorph===!1&&B.morphTexture!==null||ke.envMap!==Ce||K.fog===!0&&ke.fog!==de||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==We||ke.morphTargets!==Be||ke.morphNormals!==Ze||ke.morphColors!==at||ke.toneMapping!==xt||ke.morphTargetsCount!==ut)&&(Qe=!0):(Qe=!0,ke.__version=K.version);let Kt=ke.currentProgram;Qe===!0&&(Kt=As(K,O,B));let ji=!1,Zt=!1,Lr=!1;const vt=Kt.getUniforms(),nn=ke.uniforms;if(W.useProgram(Kt.program)&&(ji=!0,Zt=!0,Lr=!0),K.id!==M&&(M=K.id,Zt=!0),ji||E!==b){W.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(v,"projectionMatrix",b.projectionMatrix),vt.setValue(v,"viewMatrix",b.matrixWorldInverse);const $t=vt.map.cameraPosition;$t!==void 0&&$t.setValue(v,Ne.setFromMatrixPosition(b.matrixWorld)),J.logarithmicDepthBuffer&&vt.setValue(v,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(v,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Zt=!0,Lr=!0)}if(B.isSkinnedMesh){vt.setOptional(v,B,"bindMatrix"),vt.setOptional(v,B,"bindMatrixInverse");const zt=B.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),vt.setValue(v,"boneTexture",zt.boneTexture,ne))}B.isBatchedMesh&&(vt.setOptional(v,B,"batchingTexture"),vt.setValue(v,"batchingTexture",B._matricesTexture,ne),vt.setOptional(v,B,"batchingIdTexture"),vt.setValue(v,"batchingIdTexture",B._indirectTexture,ne),vt.setOptional(v,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(v,"batchingColorTexture",B._colorsTexture,ne));const rn=Y.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&ce.update(B,Y,Kt),(Zt||ke.receiveShadow!==B.receiveShadow)&&(ke.receiveShadow=B.receiveShadow,vt.setValue(v,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(nn.envMap.value=Ce,nn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&O.environment!==null&&(nn.envMapIntensity.value=O.environmentIntensity),Zt&&(vt.setValue(v,"toneMappingExposure",S.toneMappingExposure),ke.needsLights&&rh(nn,Lr),de&&K.fog===!0&&te.refreshFogUniforms(nn,de),te.refreshMaterialUniforms(nn,K,z,Q,d.state.transmissionRenderTarget[b.id]),po.upload(v,xc(ke),nn,ne)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(po.upload(v,xc(ke),nn,ne),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(v,"center",B.center),vt.setValue(v,"modelViewMatrix",B.modelViewMatrix),vt.setValue(v,"normalMatrix",B.normalMatrix),vt.setValue(v,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const zt=K.uniformsGroups;for(let $t=0,Wo=zt.length;$t<Wo;$t++){const Ei=zt[$t];$e.update(Ei,Kt),$e.bind(Ei,Kt)}}return Kt}function rh(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function sh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,O,Y){const K=j.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),j.get(b.texture).__webglTexture=O,j.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Y,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const Y=j.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const oh=v.createFramebuffer();this.setRenderTarget=function(b,O=0,Y=0){U=b,D=O,P=Y;let K=!0,B=null,de=!1,be=!1;if(b){const Ce=j.get(b);if(Ce.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(v.FRAMEBUFFER,null),K=!1;else if(Ce.__webglFramebuffer===void 0)ne.setupRenderTarget(b);else if(Ce.__hasExternalTextures)ne.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(Ce.__boundDepthTexture!==Be){if(Be!==null&&j.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(b)}}const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);const We=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[O])?B=We[O][Y]:B=We[O],de=!0):b.samples>0&&ne.useMultisampledRTT(b)===!1?B=j.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?B=We[Y]:B=We,R.copy(b.viewport),F.copy(b.scissor),N=b.scissorTest}else R.copy(Re).multiplyScalar(z).floor(),F.copy(ze).multiplyScalar(z).floor(),N=Fe;if(Y!==0&&(B=oh),W.bindFramebuffer(v.FRAMEBUFFER,B)&&K&&W.drawBuffers(b,B),W.viewport(R),W.scissor(F),W.setScissorTest(N),de){const Ce=j.get(b.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ce.__webglTexture,Y)}else if(be){const Ce=O;for(let Ve=0;Ve<b.textures.length;Ve++){const We=j.get(b.textures[Ve]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+Ve,We.__webglTexture,Y,Ce)}}else if(b!==null&&Y!==0){const Ce=j.get(b.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ce.__webglTexture,Y)}M=-1},this.readRenderTargetPixels=function(b,O,Y,K,B,de,be,Le=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){W.bindFramebuffer(v.FRAMEBUFFER,Ce);try{const Ve=b.textures[Le],We=Ve.format,Be=Ve.type;if(!J.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-K&&Y>=0&&Y<=b.height-B&&(b.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Le),v.readPixels(O,Y,K,B,we.convert(We),we.convert(Be),de))}finally{const Ve=U!==null?j.get(U).__webglFramebuffer:null;W.bindFramebuffer(v.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,K,B,de,be,Le=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce)if(O>=0&&O<=b.width-K&&Y>=0&&Y<=b.height-B){W.bindFramebuffer(v.FRAMEBUFFER,Ce);const Ve=b.textures[Le],We=Ve.format,Be=Ve.type;if(!J.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ze),v.bufferData(v.PIXEL_PACK_BUFFER,de.byteLength,v.STREAM_READ),b.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Le),v.readPixels(O,Y,K,B,we.convert(We),we.convert(Be),0);const at=U!==null?j.get(U).__webglFramebuffer:null;W.bindFramebuffer(v.FRAMEBUFFER,at);const xt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Wg(v,xt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ze),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,de),v.deleteBuffer(Ze),v.deleteSync(xt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Y=0){const K=Math.pow(2,-Y),B=Math.floor(b.image.width*K),de=Math.floor(b.image.height*K),be=O!==null?O.x:0,Le=O!==null?O.y:0;ne.setTexture2D(b,0),v.copyTexSubImage2D(v.TEXTURE_2D,Y,0,0,be,Le,B,de),W.unbindTexture()};const ah=v.createFramebuffer(),lh=v.createFramebuffer();this.copyTextureToTexture=function(b,O,Y=null,K=null,B=0,de=null){de===null&&(B!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=B,B=0):de=0);let be,Le,Ce,Ve,We,Be,Ze,at,xt;const mt=b.isCompressedTexture?b.mipmaps[de]:b.image;if(Y!==null)be=Y.max.x-Y.min.x,Le=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Ve=Y.min.x,We=Y.min.y,Be=Y.isBox3?Y.min.z:0;else{const rn=Math.pow(2,-B);be=Math.floor(mt.width*rn),Le=Math.floor(mt.height*rn),b.isDataArrayTexture?Ce=mt.depth:b.isData3DTexture?Ce=Math.floor(mt.depth*rn):Ce=1,Ve=0,We=0,Be=0}K!==null?(Ze=K.x,at=K.y,xt=K.z):(Ze=0,at=0,xt=0);const ut=we.convert(O.format),ke=we.convert(O.type);let _t;O.isData3DTexture?(ne.setTexture3D(O,0),_t=v.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ne.setTexture2DArray(O,0),_t=v.TEXTURE_2D_ARRAY):(ne.setTexture2D(O,0),_t=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=v.getParameter(v.UNPACK_ROW_LENGTH),Kt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),ji=v.getParameter(v.UNPACK_SKIP_PIXELS),Zt=v.getParameter(v.UNPACK_SKIP_ROWS),Lr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,mt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,mt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ve),v.pixelStorei(v.UNPACK_SKIP_ROWS,We),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Be);const vt=b.isDataArrayTexture||b.isData3DTexture,nn=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const rn=j.get(b),zt=j.get(O),$t=j.get(rn.__renderTarget),Wo=j.get(zt.__renderTarget);W.bindFramebuffer(v.READ_FRAMEBUFFER,$t.__webglFramebuffer),W.bindFramebuffer(v.DRAW_FRAMEBUFFER,Wo.__webglFramebuffer);for(let Ei=0;Ei<Ce;Ei++)vt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(b).__webglTexture,B,Be+Ei),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(O).__webglTexture,de,xt+Ei)),v.blitFramebuffer(Ve,We,be,Le,Ze,at,be,Le,v.DEPTH_BUFFER_BIT,v.NEAREST);W.bindFramebuffer(v.READ_FRAMEBUFFER,null),W.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||j.has(b)){const rn=j.get(b),zt=j.get(O);W.bindFramebuffer(v.READ_FRAMEBUFFER,ah),W.bindFramebuffer(v.DRAW_FRAMEBUFFER,lh);for(let $t=0;$t<Ce;$t++)vt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,rn.__webglTexture,B,Be+$t):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,rn.__webglTexture,B),nn?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,zt.__webglTexture,de,xt+$t):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,zt.__webglTexture,de),B!==0?v.blitFramebuffer(Ve,We,be,Le,Ze,at,be,Le,v.COLOR_BUFFER_BIT,v.NEAREST):nn?v.copyTexSubImage3D(_t,de,Ze,at,xt+$t,Ve,We,be,Le):v.copyTexSubImage2D(_t,de,Ze,at,Ve,We,be,Le);W.bindFramebuffer(v.READ_FRAMEBUFFER,null),W.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else nn?b.isDataTexture||b.isData3DTexture?v.texSubImage3D(_t,de,Ze,at,xt,be,Le,Ce,ut,ke,mt.data):O.isCompressedArrayTexture?v.compressedTexSubImage3D(_t,de,Ze,at,xt,be,Le,Ce,ut,mt.data):v.texSubImage3D(_t,de,Ze,at,xt,be,Le,Ce,ut,ke,mt):b.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,de,Ze,at,be,Le,ut,ke,mt.data):b.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,de,Ze,at,mt.width,mt.height,ut,mt.data):v.texSubImage2D(v.TEXTURE_2D,de,Ze,at,be,Le,ut,ke,mt);v.pixelStorei(v.UNPACK_ROW_LENGTH,Qe),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Kt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,ji),v.pixelStorei(v.UNPACK_SKIP_ROWS,Zt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Lr),de===0&&O.generateMipmaps&&v.generateMipmap(_t),W.unbindTexture()},this.copyTextureToTexture3D=function(b,O,Y=null,K=null,B=0){return Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,Y,K,B)},this.initRenderTarget=function(b){j.get(b).__webglFramebuffer===void 0&&ne.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ne.setTextureCube(b,0):b.isData3DTexture?ne.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ne.setTexture2DArray(b,0):ne.setTexture2D(b,0),W.unbindTexture()},this.resetState=function(){D=0,P=0,U=null,W.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const dM=dn({__name:"HeroSphere",setup(n){const e=ot(null);let t=null,i=null,r=null,s=null,o=null,a=null,l=0,c=!0,u=0,f=0,h=null;function p(m,d){i=new m_,r=new ln(55,m/d,.1,100),r.position.z=28;const A=Math.min(2,window.devicePixelRatio||1);t=new fM({antialias:!0,alpha:!0,powerPreference:"low-power"}),t.setPixelRatio(A),t.setSize(m,d),t.setClearColor(0,0);const T=e.value;T.innerHTML="",T.appendChild(t.domElement);const S=/Mobi|Android|iPhone|iPad|iPod|Phone/i.test(navigator.userAgent),C=S?300:450;S||(r.position.z=26);const D=new Float32Array(C*3),P=new Float32Array(C*3),U=(1+Math.sqrt(5))/2,M=S?21.5:14.5,E=new tt,R=[];for(let Fe=0;Fe<C;Fe++){const Xe=Fe/(C-1),ee=2*Math.PI*Fe/U,me=1-2*Xe,he=Math.sqrt(1-me*me),Ne=Math.cos(ee)*he,Oe=Math.sin(ee)*he,He=Ne*M,pt=me*M,w=Oe*M;D[Fe*3]=He,D[Fe*3+1]=pt,D[Fe*3+2]=w,R.push(new X(He,pt,w)),E.setHSL(.47+.12*me,.95,.72),P[Fe*3]=E.r,P[Fe*3+1]=E.g,P[Fe*3+2]=E.b}const F=new yn;F.setAttribute("position",new fn(D,3)),F.setAttribute("color",new fn(P,3));const N=document.createElement("canvas"),H=N.getContext("2d");H&&(N.width=64,N.height=64,H.beginPath(),H.arc(64/2,64/2,64/2,0,Math.PI*2),H.fillStyle="white",H.fill());const ie=new y_(N),Z=new $d({size:S?1.3:.4,sizeAttenuation:!0,transparent:!0,depthWrite:!1,blending:bo,opacity:.85,vertexColors:!0,map:ie});s=new M_(F,Z),a=new Wr,a.add(s),S?a.position.set(-M*.6,M*.45,0):a.position.set(-M*.8,M*.6,0);const Q=[],z=[],ge=M*.3,xe=5,Re=new Array(R.length).fill(0);for(let Fe=0;Fe<R.length;Fe++)for(let Xe=Fe+1;Xe<R.length;Xe++){if(Re[Fe]>=xe||Re[Xe]>=xe)continue;R[Fe].distanceTo(R[Xe])<ge&&Math.random()<.5&&(Q.push(R[Fe].x,R[Fe].y,R[Fe].z,R[Xe].x,R[Xe].y,R[Xe].z),z.push(.15,.85,.95,.15,.85,.95),Re[Fe]++,Re[Xe]++)}if(Q.length>0){const Fe=new yn;Fe.setAttribute("position",new Sn(Q,3)),Fe.setAttribute("color",new Sn(z,3));const Xe=new Xd({transparent:!0,opacity:.12,vertexColors:!0,blending:bo});o=new S_(Fe,Xe),a.add(o)}i.add(a);const ze=new w_(16777215,.2);i.add(ze),S||(h=Xe=>{const ee=Xe.clientX/window.innerWidth*2-1,me=Xe.clientY/window.innerHeight*2-1;f=ee*.06,u=-me*.06*.4},window.addEventListener("pointermove",h,{passive:!0}))}function x(){if(!t||!i||!r||!a)return;matchMedia("(prefers-reduced-motion: reduce)").matches||(a.rotation.y+=9e-4,h&&(a.rotation.x+=(u-a.rotation.x)*.04,a.rotation.y+=(f-a.rotation.y)*.04)),t.render(i,r),c&&(l=requestAnimationFrame(x))}function _(){if(!t||!r||!e.value)return;const m=e.value.getBoundingClientRect(),d=Math.max(1,Math.floor(m.width)),A=Math.max(1,Math.floor(m.height));r.aspect=d/A,r.updateProjectionMatrix(),t.setSize(d,A)}return yi(()=>{const m=e.value,d=m.getBoundingClientRect();p(d.width,d.height);const A=new IntersectionObserver(S=>{c=S[0]?.isIntersecting??!0,c?(cancelAnimationFrame(l),l=requestAnimationFrame(x)):cancelAnimationFrame(l)},{threshold:.1});A.observe(m),m.__io=A;const T=new ResizeObserver(()=>_());T.observe(m),m.__ro=T,l=requestAnimationFrame(x)}),Yi(()=>{h&&window.removeEventListener("pointermove",h),cancelAnimationFrame(l);const m=e.value;m?.__io?.disconnect(),m?.__ro?.disconnect(),s&&(s.geometry.dispose(),s.material.dispose()),o&&(o.geometry.dispose(),o.material.dispose()),t?.dispose(),i=null,r=null,s=null,o=null,a=null,t=null}),(m,d)=>(oe(),ue("div",{ref_key:"wrapRef",ref:e,class:"absolute left-[-10vw] top-[-8vw] w-[95vw] aspect-square md:left-[-8vw] md:top-[-5vw] md:w-[95vw] md:aspect-square pointer-events-none select-none opacity-50 z-10"},null,512))}}),hM={class:"relative min-h-screen flex items-center justify-center px-4 sm:px-5 py-14 sm:py-16"},pM={class:"w-full max-w-screen-md mx-auto text-center"},mM={class:"mb-8 sm:mb-10 flex items-center justify-center gap-4 sm:gap-6",reveal:{delay:40}},gM={class:"flex items-center justify-center",reveal:{delay:140}},_M={class:"text-[9.5vw] leading-[1.06] sm:text-5xl md:text-6xl font-extrabold tracking-tight",reveal:{delay:180}},vM={class:"mt-3 sm:mt-6 text-emerald-100/90 text-[15px] sm:text-lg leading-relaxed px-1 sm:px-2",reveal:{delay:280}},xM={class:"mt-7 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm",reveal:{delay:360}},SM={class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition",reveal:{delay:400}},MM={class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition",reveal:{delay:440}},yM={class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition",reveal:{delay:480}},bM={class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition",reveal:{delay:520}},EM=dn({__name:"HeroSection",setup(n){return(e,t)=>{const i=Jn("reveal");return oe(),ue("div",hM,[st(dM),t[8]||(t[8]=$("div",{class:"absolute inset-0 overflow-hidden pointer-events-none"},[$("div",{class:"absolute -top-40 -left-20 size-[40rem] rounded-full bg-emerald-400/10 blur-3xl animate-pulse [animation-duration:4.5s]"}),$("div",{class:"absolute -bottom-40 -right-20 size-[40rem] rounded-full bg-cyan-400/10 blur-3xl animate-pulse [animation-duration:5.5s]"})],-1)),$("div",pM,[Ie((oe(),ue("div",mM,[t[1]||(t[1]=$("div",{class:"flex items-center justify-center"},[$("div",{class:"inline-flex items-center rounded-md ring-1 ring-white/20 bg-white/5 px-3 py-2 shadow-sm"},[$("img",{src:Jm,alt:"学校 logo",class:"h-10 sm:h-14 w-auto object-contain select-none",decoding:"async",loading:"eager",fetchpriority:"high"})])],-1)),Ie((oe(),ue("div",gM,t[0]||(t[0]=[$("img",{src:Qm,alt:"电子俱乐部 logo",class:"h-16 w-16 sm:h-24 sm:w-24 rounded-full object-cover ring-1 ring-white/20 bg-white/5 select-none shadow-lg",decoding:"async",loading:"eager",fetchpriority:"high"},null,-1)]))),[[i,void 0,'"pop"']])])),[[i,void 0,'"pop"']]),Ie((oe(),ue("h1",_M,t[2]||(t[2]=[St(" 电子俱乐部 ",-1),$("span",{class:"block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300"},"探索·创造·连接",-1)]))),[[i,void 0,'"pop"']]),Ie((oe(),ue("p",vM,t[3]||(t[3]=[St(" 在这里，我们把点子变成作品：嵌入式、物联网、电源技术…… 一起组队做有趣的项目，组织比赛，用技术照亮校园生活。 ",-1)]))),[[i,void 0,'"up"']]),Ie((oe(),ue("div",xM,[Ie((oe(),ue("span",SM,t[4]||(t[4]=[St("院级部门",-1)]))),[[i,void 0,'"pop"']]),Ie((oe(),ue("span",MM,t[5]||(t[5]=[St("跨学科",-1)]))),[[i,void 0,'"pop"']]),Ie((oe(),ue("span",yM,t[6]||(t[6]=[St("传播知识",-1)]))),[[i,void 0,'"pop"']]),Ie((oe(),ue("span",bM,t[7]||(t[7]=[St("成长互助",-1)]))),[[i,void 0,'"pop"']])])),[[i,void 0,'"up"']])]),t[9]||(t[9]=$("div",{class:"absolute left-1/2 -translate-x-1/2 text-emerald-200/80 text-xs sm:text-sm animate-bounce bottom-[calc(env(safe-area-inset-bottom)+1rem)]"},"向下滚动",-1))])}}}),TM={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},AM={class:"w-full max-w-screen-lg mx-auto"},wM={class:"text-2xl sm:text-3xl font-bold text-center"},RM={class:"mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0",reveal:{delay:80}},CM={class:"mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0",reveal:{delay:140}},PM={class:"mt-5 sm:mt-6 flex flex-wrap gap-2 text-xs sm:text-sm justify-center",reveal:{delay:180}},DM={class:"mt-7 sm:mt-9 grid grid-cols-2 place-content-center sm:grid-cols-3 gap-3 sm:gap-4"},LM=["aria-expanded","reveal","onClick"],IM={class:"flex items-start gap-2 sm:gap-3"},UM={class:"text-xl sm:text-2xl leading-none"},NM={class:"flex-1 min-w-0"},FM={class:"font-semibold text-sm sm:text-base flex items-center gap-1"},OM={key:0,class:"text-emerald-300/80 text-xs"},BM={key:1,class:"text-emerald-300/50 text-xs"},zM={key:0,class:"mb-2 grid grid-cols-2 gap-1.5"},HM=["src","alt","onClick"],kM={key:1,class:"mb-2 overflow-hidden rounded-lg border border-white/10"},VM=["src","alt","onClick"],GM={class:"whitespace-pre-wrap font-sans"},WM=["src"],XM=dn({__name:"AboutSection",setup(n){const e=[{icon:"🔌",title:"焊接实训",brief:"专业设备，深入教学，体验乐趣",full:`优秀的设计搭配一流的焊工，让你的设计落地生根。
在这里，我们有专业的设备和深入的教学，快人一步，体验焊接的乐趣，收获成功的喜悦。`,img:"/features/b.jpg"},{icon:"🏆",title:"科技比赛",brief:"备赛成长，完赛收获，平台支持",full:`在备赛中学习，在比赛时成长，在完赛后收获。
我们为你搭建比赛的平台，帮你你在比赛中提高，让你拿得了奖评得了优！`,images:["/features/c.jpg","/features/d.jpg"]},{icon:"🧑‍🏫",title:"软硬件教学",brief:"C语言、电路入门，乐趣与成长",full:`C语言乏力、电路吃力？别怕，我们来
C语言教学、pcb设计教学……我们带你入门，帮你找回乐趣，找到提高的方向。`,images:["/features/e.jpg","/features/i.jpg"]},{icon:"📝",title:"PCB设计",brief:"想法落地，收获你的第一块板",full:`声控灯？遥控车？你的千奇百怪的想法，PCB来帮你解决
了解PCB的渊源，掌握PCB的简单设计，学习基础的应用电路。收获你的第一块印刷电路板。`,images:["/features/f.jpg","/features/g.jpg"]},{icon:"🛠️",title:"嵌入式工程",brief:"单片机入门，项目驱动成长",full:`入了嵌入式，一天饿两顿（不是）
你是否听过学长学姐告诉你学学51单片机，嵌入入门不是梦？学吧，学完51玩32，苦海无涯岸无边啊！如果你对未来有更进一步的想法，期待与你共会。`,img:"/features/a.jpg"},{icon:"🎉",title:"团队活动",brief:"劳逸结合，丰富团建，温暖团队",full:`劳逸结合是我们的追求，合格的部门必须要丰富的团活！
初见时羞涩的我们，团建时燃烧的热情（还挺应景，第一次吃的烤肉），男生节女生节"蓄谋已久"的惊喜，都是我们团队的注脚！`,images:["/features/h.jpg","/features/j.jpg","/features/k.jpg","/features/l.jpg"]}],t=ot(null);function i(f){t.value=t.value===f?null:f}const r=ot(null);function s(f){r.value=f}function o(){r.value=null}function a(f){const h=f;h.style.overflow="hidden",h.style.height="0",h.style.opacity="0",h.offsetHeight;const p=h.scrollHeight;h.style.transition="height .42s cubic-bezier(.34,.64,.36,1), opacity .3s ease",h.style.height=p+"px",h.style.opacity="1"}function l(f){const h=f;h.style.height="auto",h.style.overflow=""}function c(f){const h=f;h.style.overflow="hidden";const p=h.scrollHeight;h.style.height=p+"px",h.offsetHeight,h.style.transition="height .32s cubic-bezier(.68,.12,.47,.98), opacity .24s ease",h.style.height="0",h.style.opacity="0"}function u(f){const h=f;h.style.overflow=""}return(f,h)=>{const p=Jn("reveal"),x=Jn("tilt");return oe(),ue(Dt,null,[$("div",TM,[Ie((oe(),ue("div",AM,[Ie((oe(),ue("h2",wM,h[2]||(h[2]=[St("关于电子俱乐部",-1)]))),[[p,void 0,'"pop"']]),Ie((oe(),ue("p",RM,h[3]||(h[3]=[St("我们是校园里的技术共同体：我们可以让灵感变成作品，可以让知识得以传递，让成长默默发生",-1)]))),[[p,void 0,'"up"']]),Ie((oe(),ue("p",CM,h[4]||(h[4]=[St("这里有工程视角，也有人际交往；有代码与电路，也有内容与组织。",-1)]))),[[p,void 0,'"up"']]),Ie((oe(),ue("div",PM,h[5]||(h[5]=[$("span",{class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30"},"好奇",-1),$("span",{class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30"},"协作",-1),$("span",{class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30"},"责任心",-1),$("span",{class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30"},"发展",-1)]))),[[p,void 0,'"fade"']]),$("div",DM,[(oe(),ue(Dt,null,ls(e,(_,m)=>Ie($("div",{key:_.title,class:"group relative self-start rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-3 sm:p-4 hover:border-emerald-400/30 hover:bg-slate-800/40 transition cursor-pointer shadow-lg hover:shadow-emerald-400/20","aria-expanded":t.value===m,role:"group",reveal:{delay:220+m*70},onClick:d=>i(m)},[$("div",IM,[$("span",UM,Ct(_.icon),1),$("span",NM,[$("span",FM,[St(Ct(_.title)+" ",1),t.value===m?(oe(),ue("span",OM,"▲")):(oe(),ue("span",BM,"▼"))]),$("span",{class:$n(["block mt-1 text-[11px] sm:text-xs text-emerald-100/70 line-clamp-2 group-hover:text-emerald-100/90 transition",{"opacity-0":t.value===m}])},Ct(_.brief),3)])]),st(Sd,{onEnter:a,onAfterEnter:l,onLeave:c,onAfterLeave:u},{default:Zl(()=>[t.value===m?(oe(),ue("div",{key:0,class:"mt-3 text-[11px] sm:text-xs leading-relaxed text-emerald-100/85",onClick:h[0]||(h[0]=cn(()=>{},["stop"]))},[_.images&&_.images.length?(oe(),ue("div",zM,[(oe(!0),ue(Dt,null,ls(_.images,(d,A)=>(oe(),ue("img",{key:A,src:d,alt:_.title+" 图 "+(A+1),class:"h-24 w-full object-cover rounded-md border border-white/10 hover:border-emerald-400/40 hover:brightness-110 active:scale-[0.97] transition cursor-pointer",loading:"lazy",decoding:"async",onClick:cn(T=>s(d),["stop"])},null,8,HM))),128))])):_.img?(oe(),ue("div",kM,[$("img",{src:_.img,alt:_.title,class:"w-full h-28 object-cover hover:brightness-110 transition",loading:"lazy",decoding:"async",onClick:cn(d=>s(_.img),["stop"])},null,8,VM)])):Ut("",!0),$("pre",GM,Ct(_.full),1)])):Ut("",!0)]),_:2},1024),h[6]||(h[6]=$("div",{class:"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-emerald-400/30 transition"},null,-1)),h[7]||(h[7]=$("div",{class:"absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.18),transparent_60%)]"},null,-1))],8,LM),[[p,void 0,'"pop"'],[x,{max:8,scale:1.02}]])),64))])])),[[p]])]),(oe(),us(Gf,{to:"body"},[r.value?(oe(),ue("div",{key:0,class:"fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4",onClick:o},[$("img",{src:r.value,alt:"preview",class:"max-w-full max-h-full rounded-lg shadow-xl border border-white/10",onClick:h[1]||(h[1]=cn(()=>{},["stop"]))},null,8,WM),$("button",{class:"absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg flex items-center justify-center backdrop-blur-sm border border-white/20",onClick:cn(o,["stop"])},"×")])):Ut("",!0)]))],64)}}}),$M=ni(XM,[["__scopeId","data-v-74c77138"]]),qM={},YM={class:"relative px-4 sm:px-5 py-14 sm:py-16"},jM={class:"w-full max-w-screen-lg mx-auto"},KM={class:"inline-block relative"},ZM={class:"mt-4 sm:mt-5 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed px-1 sm:px-0",reveal:{delay:100}},JM={class:"mt-8 relative",reveal:{delay:160}},QM={class:"flex flex-col gap-5",reveal:{delay:220}},ey={class:"flex flex-col md:flex-row gap-4 md:gap-6"},ty={class:"flex-1 bg-gradient-to-br from-emerald-900/30 to-slate-900/30 rounded-xl border border-white/10 p-5 md:p-6",reveal:{delay:260}},ny={class:"flex-1 bg-gradient-to-br from-cyan-900/30 to-slate-900/30 rounded-xl border border-white/10 p-5 flex items-center justify-center",reveal:{delay:320}},iy={class:"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4",reveal:{delay:380}},ry={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:400}},sy={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:460}},oy={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:520}},ay={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:580}},ly={class:"bg-gradient-to-r from-emerald-900/40 via-cyan-900/40 to-emerald-900/40 rounded-xl border border-white/10 p-4 sm:p-5",reveal:{delay:660}};function cy(n,e){const t=Jn("reveal");return oe(),ue("div",YM,[Ie((oe(),ue("div",jM,[Ie((oe(),ue("div",KM,e[0]||(e[0]=[$("h2",{class:"text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text"}," 我们的优势",-1),$("div",{class:"absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400"},null,-1)]))),[[t,void 0,'"pop"']]),Ie((oe(),ue("p",ZM,e[1]||(e[1]=[St("老牌部门+社团，助你快速成长",-1)]))),[[t,void 0,'"up"']]),Ie((oe(),ue("div",JM,[e[9]||(e[9]=$("div",{class:"absolute inset-0 -z-10"},[$("div",{class:"absolute top-1/3 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"}),$("div",{class:"absolute bottom-1/4 right-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"})],-1)),Ie((oe(),ue("div",QM,[$("div",ey,[Ie((oe(),ue("div",ty,e[2]||(e[2]=[Dn('<div class="flex items-start"><div class="flex-shrink-0 p-3 bg-emerald-400/15 rounded-lg"><span class="text-2xl">🚀</span></div><div class="ml-4"><h3 class="font-bold text-lg text-emerald-200">项目落地与实战协作</h3><p class="mt-1 text-xs text-cyan-100/80">懂方法，能应用，强配合</p></div></div>',1)]))),[[t,void 0,'"pop"']]),Ie((oe(),ue("div",ny,e[3]||(e[3]=[Dn('<div class="text-center"><div class="inline-block p-4 rounded-full bg-cyan-400/15 mb-3"><span class="text-3xl">🏆</span></div><h3 class="font-bold text-cyan-200">竞赛支持</h3><p class="mt-1 text-xs text-cyan-100/80">资料/报名指导</p></div>',1)]))),[[t,void 0,'"pop"']])]),Ie((oe(),ue("div",iy,[Ie((oe(),ue("div",ry,e[4]||(e[4]=[$("div",{class:"text-2xl mb-2"},"🧭",-1),$("div",{class:"font-semibold"},"有我们在",-1),$("div",{class:"text-xs text-emerald-100/80 mt-1"},"学长学姐 1v1 指导",-1)]))),[[t,void 0,'"pop"']]),Ie((oe(),ue("div",sy,e[5]||(e[5]=[$("div",{class:"text-2xl mb-2"},"🔌",-1),$("div",{class:"font-semibold"},"设备与场地",-1),$("div",{class:"text-xs text-emerald-100/80 mt-1"},"部门仓库&办公室",-1)]))),[[t,void 0,'"pop"']]),Ie((oe(),ue("div",oy,e[6]||(e[6]=[$("div",{class:"text-2xl mb-2"},"📣",-1),$("div",{class:"font-semibold"},"校园影响力",-1),$("div",{class:"text-xs text-emerald-100/80 mt-1"},"作品展示与传播",-1)]))),[[t,void 0,'"pop"']]),Ie((oe(),ue("div",ay,e[7]||(e[7]=[$("div",{class:"text-2xl mb-2"},"📚",-1),$("div",{class:"font-semibold"},"资历丰富",-1),$("div",{class:"text-xs text-emerald-100/80 mt-1"},"多年社团沉淀与经验",-1)]))),[[t,void 0,'"pop"']])])),[[t,void 0,'"up"']]),Ie((oe(),ue("div",ly,e[8]||(e[8]=[Dn('<div class="flex flex-col sm:flex-row items-center gap-4"><div class="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-black text-3xl"> 💡</div><div class="flex-1 text-center sm:text-left"><h3 class="font-bold text-lg">创新氛围与成长环境</h3><p class="mt-1 text-sm text-emerald-100/90">在这里，我们变点子为作品，行创意于实践，留成长给明天。</p></div></div>',1)]))),[[t,void 0,'"pop"']])])),[[t,void 0,'"up"']])])),[[t,void 0,'"fade"']])])),[[t]])])}const uy=ni(qM,[["render",cy]]),fy={},dy={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},hy={class:"w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-6 sm:gap-10"},py={class:"mt-3 sm:mt-4 space-y-2 text-emerald-100/85 text-[15px] leading-relaxed",reveal:{delay:120}},my={reveal:{delay:160}},gy={class:"mt-4 grid grid-cols-2 gap-3 text-sm",reveal:{delay:240}},_y={class:"mt-5",reveal:{delay:340}};function vy(n,e){const t=Jn("reveal");return Ie((oe(),ue("div",dy,[$("div",hy,[Ie((oe(),ue("div",null,[e[1]||(e[1]=$("h3",{class:"text-xl sm:text-2xl font-bold"},"我们希望你",-1)),Ie((oe(),ue("ul",py,e[0]||(e[0]=[$("li",null,"• 对技术或设计保持好奇心，愿意动手探索",-1),$("li",null,"• 愿意为学校工作出力（我们可是正经的学生会哦）",-1),$("li",null,"• 乐于沟通、保持开放",-1),$("li",null,"• 不设门槛，零基础亦可，只要愿意持续学习",-1)]))),[[t,void 0,'"up"']])])),[[t,void 0,'"pop"']]),Ie((oe(),ue("div",my,[e[4]||(e[4]=$("h3",{class:"text-xl sm:text-2xl font-bold"},"我们的小部门",-1)),Ie((oe(),ue("div",gy,e[2]||(e[2]=[Dn('<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">技术部</div><div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">团支部</div><div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">常务部</div><div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">外联部</div><div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">部长部</div><div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 relative overflow-hidden"><span class="relative z-10">隐藏款</span><span class="absolute inset-0 flex items-center justify-center text-xl font-bold text-cyan-400/10 select-none">MEG</span></div>',6)]))),[[t,void 0,'"fade"']]),Ie((oe(),ue("div",_y,e[3]||(e[3]=[$("a",{href:"#join",class:"inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold active:scale-[0.99]"},[St(" 现在报名 "),$("span",null,"→")],-1)]))),[[t,void 0,'"pop"']])])),[[t,void 0,'"pop"']])])])),[[t]])}const xy=ni(fy,[["render",vy]]),Sy={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto",reveal:{delay:380}},My={class:"w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center"},yy={class:"order-1 md:order-2 reveal-in",style:{opacity:"1",transform:"none",filter:"none"}},by={class:"md:hidden"},Ey={class:"flex gap-3 overflow-x-auto w-full max-w-[100vw] py-1 scroll-hint no-scrollbar",style:{"scroll-snap-type":"x mandatory","-webkit-overflow-scrolling":"touch","overflow-x":"auto !important"}},Ty=["src","onClick"],Ay={class:"hidden md:block"},wy={class:"relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/70 border border-white/10"},Ry={class:"absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-2"},Cy=["src","onClick"],Py=["src"],Dy=dn({__name:"ProjectsSection",setup(n){const e=ot(null),t=h=>e.value=h,i=()=>{e.value=null,o.value=0,a.value=!1},r=["/works/a.jpg","/works/b.jpg","/works/c.jpg","/works/d.jpg","/works/e.jpg","/works/f.jpg","/works/g.jpg","/works/h.jpg","/works/i.jpg"],s=ot(0),o=ot(0),a=ot(!1),l=ns(()=>Math.max(.3,.85-Math.min(.55,o.value/600)));function c(h){e.value&&(a.value=!0,s.value=h.touches[0].clientY,o.value=0)}function u(h){if(!a.value)return;const p=h.touches[0].clientY-s.value;p>0&&(o.value=p)}function f(){a.value&&(a.value=!1,o.value>90?i():o.value=0)}return(h,p)=>{const x=Jn("reveal");return Ie((oe(),ue("div",Sy,[$("div",My,[p[1]||(p[1]=Dn('<div class="order-2 md:order-1"><h2 class="text-2xl sm:text-3xl font-bold">去实践，就是最好的学习</h2><p class="mt-3 sm:mt-4 text-emerald-100/80 leading-relaxed text-[15px] sm:text-base"> 从 0 到 1 完整经历：需求调研、方案设计、开发协作。学的不止是技术，更是把事情做成的能力。 </p><ul class="mt-4 sm:mt-6 space-y-2 text-emerald-100/80 text-sm list-disc list-inside"><li>硬件小制作</li><li>LED创新大赛</li><li>技术创意应用</li></ul><p class="mt-4 sm:mt-6 text-emerald-100/80 text-sm italic"> 让电子俱乐部成为你大放异彩的舞台 </p></div>',1)),$("div",yy,[$("div",by,[$("div",Ey,[(oe(),ue(Dt,null,ls(r,_=>$("div",{key:_,class:"relative snap-center flex-shrink-0 w-[85vw] sm:w-[70vw] aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/70 border border-white/10 transition"},[$("img",{src:_,alt:"项目作品展示",class:"absolute inset-0 w-full h-full object-cover cursor-zoom-in",loading:"lazy",decoding:"async",sizes:"(max-width: 768px) 85vw, 400px",onClick:m=>t(_)},null,8,Ty)])),64))])]),$("div",Ay,[$("div",wy,[$("div",Ry,[(oe(),ue(Dt,null,ls(r,_=>$("div",{key:_,class:"relative rounded-lg bg-emerald-400/20 overflow-hidden"},[$("img",{src:_,alt:"项目作品展示",class:"absolute inset-0 w-full h-full object-cover cursor-zoom-in",loading:"lazy",decoding:"async",sizes:"(max-width: 1024px) 33vw, 320px",onClick:m=>t(_)},null,8,Cy)])),64))])])])])]),(oe(),us(Gf,{to:"body"},[e.value?(oe(),ue("div",{key:0,class:"fixed inset-0 z-[60] backdrop-blur-sm flex items-center justify-center p-4",onClick:i,style:br({backgroundColor:`rgba(0,0,0,${l.value})`}),onTouchstartPassive:c,onTouchmove:cn(u,["prevent"]),onTouchendPassive:f},[$("div",{class:"relative",style:br({transform:o.value?`translateY(${o.value}px)`:""}),onClick:p[0]||(p[0]=cn(()=>{},["stop"]))},[$("img",{src:e.value,alt:"preview",class:"max-w-[95vw] max-h-[85vh] rounded-lg shadow-xl border border-white/10"},null,8,Py),$("button",{class:"absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg flex items-center justify-center backdrop-blur-sm border border-white/20",onClick:i},"×")],4)],36)):Ut("",!0)]))])),[[x,void 0,'"up"']])}}}),Ly={},Iy={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},Uy={class:"w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center"},Ny={reveal:{delay:140}},Fy={class:"mt-3 sm:mt-4 text-emerald-100/80 leading-relaxed text-[15px] sm:text-base",reveal:{delay:220}},Oy={class:"mt-4 sm:mt-6 grid grid-cols-2 gap-3 text-sm",reveal:{delay:300}};function By(n,e){const t=Jn("reveal");return Ie((oe(),ue("div",Iy,[$("div",Uy,[Ie((oe(),ue("div",null,e[0]||(e[0]=[Dn('<div class="relative aspect-video rounded-xl overflow-hidden bg-slate-900/70 border border-white/10 flex items-center justify-center"><div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_60%)]"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.2),transparent_60%)]"></div><div class="relative z-10 text-center"><div class="text-5xl font-black tracking-tight">0 → 1</div><div class="mt-3 text-xs sm:text-sm text-emerald-100/80">每周例会 / 部长带队</div></div></div>',1)]))),[[t,void 0,'"pop"']]),Ie((oe(),ue("div",Ny,[e[3]||(e[3]=$("h2",{class:"text-2xl sm:text-3xl font-bold"},"路虽远，行则将至 我们携手这一程",-1)),Ie((oe(),ue("p",Fy,e[1]||(e[1]=[St("每位新成员会得到学习路径建议与部长指导，前期也会提供项目模板与工具链，快速上手并构建自信。",-1)]))),[[t,void 0,'"up"']]),Ie((oe(),ue("div",Oy,e[2]||(e[2]=[$("div",{class:"px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20"},"内部技术教学",-1),$("div",{class:"px-3 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20"},"仓库管理",-1),$("div",{class:"px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20"},"活动组织",-1),$("div",{class:"px-3 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20"},"宣发 / 运营",-1)]))),[[t,void 0,'"fade"']])])),[[t,void 0,'"pop"']])])])),[[t]])}const zy=ni(Ly,[["render",By]]),Hy={},ky={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},Vy={class:"w-full max-w-screen-lg mx-auto"},Gy={class:"text-2xl sm:text-3xl font-bold text-center"},Wy={class:"mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3",reveal:{delay:140}},Xy={class:"rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition",reveal:{delay:200}},$y={class:"rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition",reveal:{delay:260}},qy={class:"rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition",reveal:{delay:320}},Yy={class:"rounded-xl border border-white/10 bg-white/5 p-4 text-center active:scale-[0.99] transition",reveal:{delay:380}};function jy(n,e){const t=Jn("reveal");return Ie((oe(),ue("div",ky,[$("div",Vy,[Ie((oe(),ue("h2",Gy,e[0]||(e[0]=[St("活动与荣誉",-1)]))),[[t,void 0,'"pop"']]),Ie((oe(),ue("div",Wy,[Ie((oe(),ue("div",Xy,e[1]||(e[1]=[$("div",{class:"text-3xl"},"🎉",-1),$("div",{class:"mt-2 text-sm"},"快乐团建时光",-1)]))),[[t,void 0,'"pop"']]),Ie((oe(),ue("div",$y,e[2]||(e[2]=[$("div",{class:"text-3xl"},"🧪",-1),$("div",{class:"mt-2 text-sm"},"大佬云集",-1)]))),[[t,void 0,'"pop"']]),Ie((oe(),ue("div",qy,e[3]||(e[3]=[$("div",{class:"text-3xl"},"📢",-1),$("div",{class:"mt-2 text-sm"},"院内教学",-1)]))),[[t,void 0,'"pop"']]),Ie((oe(),ue("div",Yy,e[4]||(e[4]=[$("div",{class:"text-3xl"},"🌟",-1),$("div",{class:"mt-2 text-sm"},"十佳社团",-1)]))),[[t,void 0,'"pop"']])])),[[t,void 0,'"fade"']])])])),[[t]])}const Ky=ni(Hy,[["render",jy]]),Zy="/group_qr.jpg",Jy="/qq_qr.jpg",Qy={class:"w-full max-w-screen-sm mx-auto"},eb={class:"sr-only","aria-hidden":"true"},tb={class:"relative"},nb=["aria-invalid"],ib={key:0,class:"mt-1 text-xs text-rose-400"},rb={class:"grid grid-cols-2 gap-3"},sb={class:"relative"},ob={key:0,class:"mt-1 text-xs text-rose-400"},ab={class:"relative"},lb={key:0,class:"mt-1 text-xs text-rose-400"},cb={class:"grid grid-cols-3 gap-2 items-start"},ub={key:1,class:"col-span-3 relative"},fb={class:"absolute -bottom-4 right-0 text-[10px] text-emerald-100/50"},db={key:0,class:"mt-1 text-xs text-rose-400"},hb={class:"relative"},pb=["maxlength"],mb={class:"mt-2 flex items-center justify-between text-xs"},gb={class:"h-1 flex-1 rounded bg-white/10 mr-3 overflow-hidden"},_b={class:"text-emerald-100/70"},vb={key:0,class:"mt-1 text-xs text-rose-400"},xb=["disabled"],Sb={key:0},Mb={key:1},yb={key:0,class:"text-center text-xs text-rose-400 mt-1"},bb={key:0,class:"fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+16px)] mx-auto w-[90%] max-w-sm px-4 py-3 rounded-xl bg-emerald-500 text-black text-center shadow-lg"},Eb="https://eclubapi.kitramgp.cn/api/join",Vr=200,Tb=30,Ab=dn({__name:"JoinForm",setup(n){const e=ss({majorClass:"",studentId:"",name:"",stack:"",message:"",customStack:""}),t=ss({majorClass:!1,studentId:!1,name:!1,stack:!1,message:!1,customStack:!1}),i=ot(!1),r=ot(!1),s=ot(""),o=ot(Number(localStorage.getItem("join_last_submit")||0)),a=ot(Date.now());let l;yi(()=>{l=window.setInterval(()=>{a.value=Date.now()},1e3)}),Jl(()=>{l&&clearInterval(l)});const c=ns(()=>{const m=a.value-o.value,d=Tb*1e3-m;return d>0?Math.ceil(d/1e3):0}),u=ot("");function f(){const m=Date.now(),d=Math.random().toString(36).slice(2,10),A=btoa(`${m}-${d}-${(e.message||"").length}`);return{ts:m,nonce:d,sig:A}}const h=ns(()=>({majorClass:e.majorClass?"":"请输入你的专业与班级",studentId:e.studentId?"":"请输入学号",name:e.name?"":"请输入姓名",stack:e.stack?e.stack==="其他"&&!e.customStack?.trim()?"请输入自定义优势":"":"请选择优势",message:e.message.length>Vr?`最多 ${Vr} 字`:""})),p=ns(()=>Object.values(h.value).every(m=>!m));async function x(){if(c.value>0){s.value=`请稍后 ${c.value}s 再提交`;return}if(u.value.trim()){r.value=!0,setTimeout(()=>r.value=!1,1500);return}if(Object.keys(t).forEach(m=>t[m]=!0),!!p.value){i.value=!0,s.value="";try{const m=e.stack==="其他"?e.customStack?.trim():e.stack,d=f(),A={majorClass:e.majorClass,studentId:e.studentId,name:e.name,stack:m,message:e.message,meta:d};await new Promise(S=>setTimeout(S,150+Math.random()*300));const T=await fetch(Eb,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)});if(!T.ok){let S="";try{const C=await T.json();S=C?.error||C?.message||""}catch{}throw new Error(`提交失败(${T.status}) ${S}`)}o.value=Date.now(),localStorage.setItem("join_last_submit",String(o.value)),r.value=!0,setTimeout(()=>r.value=!1,2500),e.majorClass="",e.studentId="",e.name="",e.stack="",e.customStack="",e.message="",Object.keys(t).forEach(S=>t[S]=!1)}catch(m){s.value=m?.message||"提交出错，请稍后再试"}finally{i.value=!1}}}function _(m){t[m]=!0}return(m,d)=>(oe(),ue("div",Qy,[$("form",{onSubmit:cn(x,["prevent"]),class:"space-y-5"},[$("div",eb,[$("label",null,[d[21]||(d[21]=St("请不要填写此字段",-1)),Ie($("input",{autocomplete:"off",tabindex:"-1","onUpdate:modelValue":d[0]||(d[0]=A=>u.value=A),class:"pointer-events-none opacity-0"},null,512),[[Zi,u.value]])])]),$("div",null,[$("div",tb,[Ie($("input",{"onUpdate:modelValue":d[1]||(d[1]=A=>e.majorClass=A),onFocus:d[2]||(d[2]=A=>_("majorClass")),onBlur:d[3]||(d[3]=A=>_("majorClass")),"aria-invalid":!!(t.majorClass&&h.value.majorClass),placeholder:"专业与班级",inputmode:"text",autocomplete:"organization-title",enterkeyhint:"next",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"},null,40,nb),[[Zi,e.majorClass,void 0,{trim:!0}]]),d[22]||(d[22]=$("label",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"}," 专业与班级 ",-1))]),t.majorClass&&h.value.majorClass?(oe(),ue("p",ib,Ct(h.value.majorClass),1)):Ut("",!0)]),$("div",rb,[$("div",null,[$("div",sb,[Ie($("input",{"onUpdate:modelValue":d[4]||(d[4]=A=>e.studentId=A),onFocus:d[5]||(d[5]=A=>_("studentId")),onBlur:d[6]||(d[6]=A=>_("studentId")),inputmode:"numeric",autocomplete:"on",enterkeyhint:"next",placeholder:"学号",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"},null,544),[[Zi,e.studentId,void 0,{trim:!0}]]),d[23]||(d[23]=$("label",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"}," 学号 ",-1))]),t.studentId&&h.value.studentId?(oe(),ue("p",ob,Ct(h.value.studentId),1)):Ut("",!0)]),$("div",null,[$("div",ab,[Ie($("input",{"onUpdate:modelValue":d[7]||(d[7]=A=>e.name=A),onFocus:d[8]||(d[8]=A=>_("name")),onBlur:d[9]||(d[9]=A=>_("name")),inputmode:"text",autocomplete:"name",autocapitalize:"off",enterkeyhint:"next",placeholder:"姓名",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"},null,544),[[Zi,e.name,void 0,{trim:!0}]]),d[24]||(d[24]=$("label",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"}," 姓名 ",-1))]),t.name&&h.value.name?(oe(),ue("p",lb,Ct(h.value.name),1)):Ut("",!0)])]),$("div",null,[d[25]||(d[25]=$("div",{class:"text-sm text-emerald-100/80 mb-2"},"优势点",-1)),$("div",cb,[$("button",{type:"button",onClick:d[10]||(d[10]=A=>{e.stack="硬件",e.customStack="",_("stack")}),class:$n(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm",e.stack==="硬件"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 硬件 ",2),$("button",{type:"button",onClick:d[11]||(d[11]=A=>{e.stack="软件",e.customStack="",_("stack")}),class:$n(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm",e.stack==="软件"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 软件 ",2),$("button",{type:"button",onClick:d[12]||(d[12]=A=>{e.stack="管理",e.customStack="",_("stack")}),class:$n(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm",e.stack==="管理"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 管理 ",2),e.stack!=="其他"?(oe(),ue("button",{key:0,type:"button",onClick:d[13]||(d[13]=A=>{e.stack="其他",_("stack")}),class:$n(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm col-span-3",e.stack==="其他"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 其他（点击填写） ",2)):Ut("",!0),e.stack==="其他"?(oe(),ue("div",ub,[Ie($("input",{"onUpdate:modelValue":d[14]||(d[14]=A=>e.customStack=A),onFocus:d[15]||(d[15]=A=>{_("stack"),t.customStack=!0}),onBlur:d[16]||(d[16]=A=>_("stack")),maxlength:"20",placeholder:"请输入你的自定义优势 (20字内)",class:"peer w-full rounded-xl bg-white/5 border border-emerald-400/60 text-white focus:outline-none focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/30 transition text-base pl-4 pr-14 py-3 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"},null,544),[[Zi,e.customStack,void 0,{trim:!0}]]),$("button",{type:"button","aria-label":"取消自定义",onClick:d[17]||(d[17]=A=>{e.stack="",e.customStack="",_("stack")}),class:"absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-md bg-white/10 hover:bg-white/15 flex items-center justify-center text-emerald-100/80 leading-none active:scale-[0.95]"}," ✕ "),$("div",fb,Ct(e.customStack?.length||0)+"/20",1)])):Ut("",!0)]),t.stack&&h.value.stack?(oe(),ue("p",db,Ct(h.value.stack),1)):Ut("",!0)]),$("div",null,[$("div",hb,[Ie($("textarea",{"onUpdate:modelValue":d[18]||(d[18]=A=>e.message=A),onFocus:d[19]||(d[19]=A=>_("message")),onBlur:d[20]||(d[20]=A=>_("message")),maxlength:Vr+20,rows:"5",inputmode:"text",enterkeyhint:"send",placeholder:"想说的话",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/40 transition text-base px-4 pt-7 pb-3 resize-none placeholder-transparent"},null,40,pb),[[Zi,e.message]]),d[26]||(d[26]=$("label",{class:"absolute left-4 top-4 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"}," 想说的话 ",-1)),$("div",mb,[$("div",gb,[$("div",{class:"h-full bg-gradient-to-r from-emerald-400 to-cyan-400",style:br({width:Math.min(100,Math.round(e.message.length/Vr*100))+"%"})},null,4)]),$("span",_b,Ct(e.message.length)+" / "+Ct(Vr),1)])]),t.message&&h.value.message?(oe(),ue("p",vb,Ct(h.value.message),1)):Ut("",!0)]),$("button",{disabled:i.value||!p.value||c.value>0,onClick:cn(x,["prevent"]),class:"w-full py-4 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] active:scale-[0.99]",style:{"margin-bottom":"calc(env(safe-area-inset-bottom) + 8px)"}},[c.value>0?(oe(),ue("span",Sb,"冷却 "+Ct(c.value)+"s…",1)):(oe(),ue("span",Mb,Ct(i.value?"提交中…":"提交报名"),1))],8,xb),d[27]||(d[27]=$("p",{class:"text-center text-xs text-emerald-100/60"},"提交后请耐心等待 静候开学后相关通知",-1)),s.value?(oe(),ue("p",yb,Ct(s.value),1)):Ut("",!0)],32),r.value?(oe(),ue("div",bb," 提交成功，感谢支持！ ")):Ut("",!0)]))}}),wb=ni(Ab,[["__scopeId","data-v-bd594de0"]]),Rb=24,Cb=dn({__name:"JoinGlow",props:{active:{type:Boolean},burstKey:{}},setup(n){const e=n,t=ot(null);let i=0,r=null,s=0,o=0,a=Math.min(window.devicePixelRatio||1,2),l=!1,c=[],u=[];function f(T,S){return Math.random()*(S-T)+T}function h(){const T=t.value,S=T.getBoundingClientRect();s=Math.floor(S.width),o=Math.floor(S.height),a=Math.min(window.devicePixelRatio||1,2),T.width=Math.max(1,Math.floor(s*a)),T.height=Math.max(1,Math.floor(o*a)),r=T.getContext("2d"),r&&r.setTransform(a,0,0,a,0,0)}function p(){const T=Math.floor(Rb*Math.min(1.5,Math.max(.8,s*o/304200)));c=Array.from({length:T},()=>({x:f(0,s),y:f(0,o),vx:f(-.12,.12),vy:f(-.12,.12),r:f(.6,1.8),hue:f(150,210),alpha:f(.25,.6)}))}function x(){const T=s/2,S=Math.min(o*.45,o-80);u.push(...Array.from({length:90},()=>{const D=f(0,Math.PI*2),P=f(.6,2.2);return{x:T+f(-10,10),y:S+f(-10,10),vx:Math.cos(D)*P,vy:Math.sin(D)*P-f(.2,.6),r:f(1.2,2.6),hue:f(140,220),life:0,maxLife:f(42,70)}}))}function _(){if(!r)return;const T=r.createRadialGradient(s/2,o/2,0,s/2,o/2,Math.max(s,o)*.7);T.addColorStop(0,"rgba(16,255,192,0.04)"),T.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=T,r.fillRect(0,0,s,o)}function m(){if(r){r.fillStyle="rgba(0,0,0,0.35)",r.fillRect(0,0,s,o),_();for(const T of c)T.x+=T.vx,T.y+=T.vy,T.x<-10&&(T.x=s+10),T.x>s+10&&(T.x=-10),T.y<-10&&(T.y=o+10),T.y>o+10&&(T.y=-10),r.beginPath(),r.fillStyle=`hsla(${T.hue}, 80%, 70%, ${T.alpha})`,r.arc(T.x,T.y,T.r,0,Math.PI*2),r.fill();for(let T=u.length-1;T>=0;T--){const S=u[T];S.life+=1,S.x+=S.vx,S.y+=S.vy,S.vy+=.02;const C=1-S.life/S.maxLife;r.beginPath(),r.fillStyle=`hsla(${S.hue}, 90%, 70%, ${Math.max(0,C)})`,r.arc(S.x,S.y,S.r*(.8+.4*C),0,Math.PI*2),r.fill(),S.life>=S.maxLife&&u.splice(T,1)}l&&(i=requestAnimationFrame(m))}}function d(){l||(l=!0,h(),p(),r?.clearRect(0,0,s,o),i=requestAnimationFrame(m))}function A(){l=!1,cancelAnimationFrame(i)}return yi(()=>{const T=()=>{h(),p()};window.addEventListener("resize",T),Op(()=>{e.active?d():A()}),es(()=>e.burstKey,()=>{e.active&&(u.splice(0,u.length),x())})}),Yi(()=>{A(),window.removeEventListener("resize",h)}),(T,S)=>(oe(),ue("canvas",{ref_key:"canvasRef",ref:t,class:"absolute inset-0 w-full h-full pointer-events-none select-none"},null,512))}}),Pb={class:"relative z-10 w-full max-w-screen-md mx-auto text-center"},Db={class:"text-lg sm:text-xl mt-3 text-white font-semibold",reveal:{delay:120}},Lb={class:"mt-3 sm:mt-4 text-sm sm:text-base text-emerald-100/80 max-w-md mx-auto px-1",reveal:{delay:200}},Ib={class:"mt-1 text-xs sm:text-sm text-emerald-100/70 max-w-md mx-auto px-1",reveal:{delay:220}},Ub={class:"mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6",reveal:{delay:260}},Nb={class:"relative z-10 mt-9 sm:mt-12",reveal:{delay:340}},Fb=dn({__name:"JoinUsSection",setup(n){const e=ot(null),t=ot(!1),i=ot(0);let r=null;return yi(()=>{r=new IntersectionObserver(s=>{const o=s[0];o&&(o.isIntersecting?(t.value=!0,i.value++):t.value=!1)},{threshold:.35}),e.value&&r.observe(e.value)}),Yi(()=>{r?.disconnect(),r=null}),(s,o)=>{const a=Jn("reveal");return Ie((oe(),ue("div",{id:"join",ref_key:"joinRef",ref:e,class:"relative px-4 sm:px-5 py-16 sm:py-20 overflow-hidden cv-auto"},[st(Cb,{active:t.value,"burst-key":i.value},null,8,["active","burst-key"]),Ie((oe(),ue("div",Pb,[o[4]||(o[4]=$("h2",{class:"text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]"},[St(" 加入我们，"),$("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300"},"一起"),St("把灵感上线 ")],-1)),Ie((oe(),ue("p",Db,o[0]||(o[0]=[St("让知识开花",-1)]))),[[a,void 0,'"up"']]),Ie((oe(),ue("p",Lb,o[1]||(o[1]=[St("扫码进群 / 关注学校官方通知",-1)]))),[[a,void 0,'"fade"']]),Ie((oe(),ue("p",Ib,o[2]||(o[2]=[St("或者在下面的表格留个名，我们会多关照哦",-1)]))),[[a,void 0,'"fade"']]),Ie((oe(),ue("div",Ub,o[3]||(o[3]=[Dn('<div class="flex flex-col items-center"><div class="relative group"><div class="p-[2px] rounded-2xl bg-[linear-gradient(140deg,rgba(255,255,255,0.85),rgba(255,255,255,0.55),rgba(255,255,255,0.78))] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_0_22px_4px_rgba(255,255,255,0.55),0_6px_28px_-8px_rgba(16,185,129,0.25)]"><div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative"><img src="'+Zy+'" alt="官方迎新群二维码" class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.015]" decoding="async" loading="lazy"><div class="pointer-events-none absolute inset-0 ring-1 ring-black/5"></div><div class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-60 bg-[radial-gradient(circle_at_25%_30%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(34,211,238,0.16),transparent_60%)]"></div></div></div><div class="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.45),transparent_70%)]"></div></div><div class="mt-2 text-[10px] sm:text-xs text-emerald-100/80 tracking-wide">官方迎新群</div></div><div class="flex flex-col items-center"><div class="relative group"><div class="p-[2.5px] rounded-2xl bg-gradient-to-tr from-cyan-400/80 via-emerald-400/60 to-white/70 shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_0_22px_4px_rgba(34,211,238,0.18),0_6px_28px_-8px_rgba(16,185,129,0.18)]"><div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative"><img src="'+Jy+'" alt="官Q二维码" class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]" decoding="async" loading="lazy"><div class="pointer-events-none absolute inset-0 ring-1 ring-cyan-400/10"></div><div class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-70 bg-[radial-gradient(circle_at_25%_30%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(16,185,129,0.14),transparent_60%)]"></div></div></div><div class="pointer-events-none absolute -inset-3 rounded-2xl opacity-80 group-hover:opacity-100 transition duration-500 blur-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.55),rgba(16,185,129,0.25),transparent_80%)]"></div></div><div class="mt-2 text-[10px] sm:text-xs text-cyan-200/80 tracking-wide font-semibold">电子俱乐部官方QQ</div></div>',2)]))),[[a,void 0,'"pop"']])])),[[a,void 0,'"pop"']]),Ie((oe(),ue("div",Nb,[st(wb)])),[[a,void 0,'"pop"']])])),[[a]])}}}),Ob={class:"fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 z-50 flex flex-col items-end gap-3"},Bb={key:0},zb={key:1},Hb=dn({__name:"FloatingUI",setup(n){const e=ot(!1),t=ot(!1),i=ot(!1);let r=null;function s(){const l=document.documentElement.scrollTop||document.body.scrollTop;e.value=l>240}function o(){if(r=window.__bgm||null,!r){t.value=!1;return}t.value=!0,r.paused?r.play().then(()=>{i.value=!0}).catch(()=>{}):(r.pause(),i.value=!1)}yi(()=>{window.addEventListener("scroll",s,{passive:!0}),s(),r=window.__bgm||null,t.value=!!r,r?r.play().then(()=>{i.value=!0}).catch(()=>{i.value=!1}):i.value=!1}),Yi(()=>{window.removeEventListener("scroll",s)});function a(){window.scrollTo({top:0,behavior:"smooth"})}return(l,c)=>(oe(),ue("div",Ob,[t.value?(oe(),ue("button",{key:0,onClick:o,class:"relative w-12 h-12 flex items-center justify-center p-0 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white shadow-lg active:scale-95 transition"},[i.value?(oe(),ue("span",Bb,"🔊")):(oe(),ue("span",zb,"🔈"))])):Ut("",!0),Ie($("button",{onClick:a,class:"relative w-12 h-12 flex items-center justify-center p-0 rounded-full bg-gradient-to-tr from-emerald-400/90 to-cyan-400/90 text-black font-bold shadow-lg active:scale-95 transition border border-white/20"}," ↑ ",512),[[gm,e.value]])]))}}),kb={class:"relative text-white scroll-smooth overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-950 to-black"},Vb={class:"relative z-10"},Gb=dn({__name:"ClubPoster",setup(n){return(e,t)=>(oe(),ue("section",kb,[t[0]||(t[0]=Dn('<div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0" data-v-c7d10293><div class="absolute -top-[20vh] -left-[15vw] w-[80vw] h-[80vw] rounded-full bg-emerald-400/10 blur-[100px]" data-v-c7d10293></div><div class="absolute top-[30vh] -right-[10vw] w-[70vw] h-[70vw] rounded-full bg-cyan-400/10 blur-[110px]" data-v-c7d10293></div><div class="absolute bottom-[-10vh] left-[20vw] w-[65vw] h-[65vw] rounded-full bg-emerald-300/8 blur-[120px]" data-v-c7d10293></div><div class="absolute inset-x-0 top-[45vh] h-40 bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(16,185,129,0.25)_40%,rgba(34,211,238,0.25)_60%,rgba(34,211,238,0)_100%)] opacity-40 blur-2xl" data-v-c7d10293></div><div class="absolute inset-x-0 top-[120vh] h-40 bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(34,211,238,0.2)_50%,rgba(16,185,129,0)_100%)] opacity-40 blur-2xl" data-v-c7d10293></div></div>',1)),$("div",Vb,[st(Hb),st(EM),st($M),st(uy),st(xy),st(Dy),st(zy),st(Ky),st(Fb)])]))}}),Wb=ni(Gb,[["__scopeId","data-v-c7d10293"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */var af;(function(n){n.pop="pop",n.push="push"})(af||(af={}));var lf;(function(n){n.back="back",n.forward="forward",n.unknown=""})(lf||(lf={}));var cf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(cf||(cf={}));const Xb=Symbol("");function $b(n){return Qr(Xb)}var qb="@vercel/analytics",Yb="1.5.0",jb=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function eh(){return typeof window<"u"}function th(){try{const n="production"}catch{}return"production"}function Kb(n="auto"){if(n==="auto"){window.vam=th();return}window.vam=n}function Zb(){return(eh()?window.vam:th())||"production"}function Ol(){return Zb()==="development"}function Jb(n,e){if(!n||!e)return n;let t=n;try{const i=Object.entries(e);for(const[r,s]of i)if(!Array.isArray(s)){const o=uf(s);o.test(t)&&(t=t.replace(o,`/[${r}]`))}for(const[r,s]of i)if(Array.isArray(s)){const o=uf(s.join("/"));o.test(t)&&(t=t.replace(o,`/[...${r}]`))}return t}catch{return n}}function uf(n){return new RegExp(`/${Qb(n)}(?=[/?#]|$)`)}function Qb(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function eE(n){return n.scriptSrc?n.scriptSrc:Ol()?"https://va.vercel-scripts.com/v1/script.debug.js":n.basePath?`${n.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function tE(n={debug:!0}){var e;if(!eh())return;Kb(n.mode),jb(),n.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",n.beforeSend));const t=eE(n);if(document.head.querySelector(`script[src*="${t}"]`))return;const i=document.createElement("script");i.src=t,i.defer=!0,i.dataset.sdkn=qb+(n.framework?`/${n.framework}`:""),i.dataset.sdkv=Yb,n.disableAutoTrack&&(i.dataset.disableAutoTrack="1"),n.endpoint?i.dataset.endpoint=n.endpoint:n.basePath&&(i.dataset.endpoint=`${n.basePath}/insights`),n.dsn&&(i.dataset.dsn=n.dsn),i.onerror=()=>{const r=Ol()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${t}. ${r}`)},Ol()&&n.debug===!1&&(i.dataset.debug="false"),document.head.appendChild(i)}function nE({route:n,path:e}){var t;(t=window.va)==null||t.call(window,"pageview",{route:n,path:e})}function iE(){try{return}catch{}}function rE(n="vue"){return dn({props:["dsn","beforeSend","debug","scriptSrc","endpoint","mode"],setup(e){const t=$b();if(tE({...e,basePath:iE(),disableAutoTrack:!!t,framework:n}),t&&typeof window<"u"){const i=()=>{nE({route:Jb(t.path,t.params),path:t.path})};i(),es(t,i)}},render(){return null}})}var sE=rE();const oE={class:"bg-black text-white min-h-[100dvh] relative overflow-hidden"},aE=dn({__name:"App",setup(n){const e=ot(!0);function t(){e.value=!1}return(i,r)=>(oe(),ue(Dt,null,[st(If(sE)),$("main",oE,[st(Sd,{name:"art",mode:"in-out"},{default:Zl(()=>[e.value?(oe(),us(Zm,{key:0,onDone:t})):(oe(),us(Wb,{key:1}))]),_:1})])],64))}}),lE=ni(aE,[["__scopeId","data-v-11400225"]]),pc=Nm(lE),nh=new IntersectionObserver(n=>{n.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add("reveal-in"),nh.unobserve(t)}})},{threshold:.18,rootMargin:"0px 0px -10% 0px"});pc.directive("reveal",{mounted(n,e){n.classList.add("reveal-init","reveal-anim");const t=typeof e.value=="object"&&e.value?e.value:{},i=e.arg||t.variant;i&&n.classList.add("reveal-"+i);const r=t.delay||0;r&&(n.style.transitionDelay=r+"ms"),nh.observe(n)}});pc.directive("tilt",{mounted(n,e){const t=navigator.userAgent;if(/Mobi|Android|iPhone|iPad|iPod|Phone/i.test(t))return;const r=typeof e.value=="object"&&e.value?e.value:{},s=Number(r.max||e.value||10),o=Number(r.scale||1.02),a=Number(r.perspective||800);let l=0,c=!1;const u=()=>{c=!0,n.style.willChange="transform",n.style.transition="transform 180ms ease",n.classList.add("tilt-active")},f=()=>{c=!1,cancelAnimationFrame(l),n.style.transform=`perspective(${a}px)`,n.style.transition="transform 220ms cubic-bezier(.2,.6,.2,1)",n.classList.remove("tilt-active")},h=p=>{c&&(cancelAnimationFrame(l),l=requestAnimationFrame(()=>{const x=n.getBoundingClientRect(),_=x.left+x.width/2,m=x.top+x.height/2,d=(p.clientX-_)/(x.width/2),T=(-((p.clientY-m)/(x.height/2))*s).toFixed(2),S=(d*s).toFixed(2);n.style.transform=`perspective(${a}px) rotateX(${T}deg) rotateY(${S}deg) scale(${o})`}))};n.addEventListener("mouseenter",u),n.addEventListener("mousemove",h),n.addEventListener("mouseleave",f),n.__tiltCleanup=()=>{n.removeEventListener("mouseenter",u),n.removeEventListener("mousemove",h),n.removeEventListener("mouseleave",f)}},unmounted(n){n.__tiltCleanup?.()}});pc.mount("#app");(function(){const e=navigator.userAgent;if(!/Mobi|Android|iPhone|iPad|iPod|Phone/i.test(e))return;const i="/bgm.m4a",r=new Audio(i);window.__bgm=r,r.loop=!0,r.preload="auto"})();(function(){if(typeof window>"u"||typeof document>"u")return;const e=document.createElement("div");e.className="scroll-progress";const t=document.createElement("div");t.className="scroll-progress__bar",e.appendChild(t),document.body.appendChild(e);let i=null;const r=()=>{i=null;const o=document.documentElement,a=document.body,l=o.scrollTop||a.scrollTop,c=(o.scrollHeight||a.scrollHeight)-o.clientHeight,u=c>0?Math.min(1,l/c):0;t.style.transform=`scaleX(${u})`},s=()=>{i==null&&(i=requestAnimationFrame(r))};window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),r()})();console.log("咦 竟然是个会看终端的聪明宝宝");console.log("那我在这里加点私货应该也没事吧QwQ");console.log(`
       　  　▃▆█▇▄▖
　 　 　 ▟◤▖　　　◥█▎
  　 ◢◤　 ▐　　　 　▐▉
　 ▗◤　　　▂　▗▖　　▕█▎
　◤　▗▅▖◥▄　▀◣　　█▊
▐　▕▎◥▖◣◤　　　　◢██
█◣　◥▅█▀　　　　▐██◤
▐█▙▂　　     　◢██◤
◥██◣　　　　◢▄◤
 　　▀██▅▇▀
`);
