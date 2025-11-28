(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function _c(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const gt={},Ir=[],Vn=()=>{},df=()=>!1,Ko=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vc=n=>n.startsWith("onUpdate:"),Nt=Object.assign,xc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},wp=Object.prototype.hasOwnProperty,ut=(n,e)=>wp.call(n,e),$e=Array.isArray,Ur=n=>Zo(n)==="[object Map]",ff=n=>Zo(n)==="[object Set]",qe=n=>typeof n=="function",Et=n=>typeof n=="string",Oi=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",hf=n=>(xt(n)||qe(n))&&qe(n.then)&&qe(n.catch),pf=Object.prototype.toString,Zo=n=>pf.call(n),Ap=n=>Zo(n).slice(8,-1),mf=n=>Zo(n)==="[object Object]",bc=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ps=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Rp=/-\w/g,bn=Jo(n=>n.replace(Rp,e=>e.slice(1).toUpperCase())),Cp=/\B([A-Z])/g,fr=Jo(n=>n.replace(Cp,"-$1").toLowerCase()),Qo=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ga=Jo(n=>n?`on${Qo(n)}`:""),Di=(n,e)=>!Object.is(n,e),Mo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},gf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},yc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Pp=n=>{const e=Et(n)?Number(n):NaN;return isNaN(e)?n:e};let iu;const ea=()=>iu||(iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ai(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Et(i)?Up(i):ai(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(n)||xt(n))return n}const Dp=/;(?![^(]*\))/g,Lp=/:([^]+)/,Ip=/\/\*[^]*?\*\//g;function Up(n){const e={};return n.replace(Ip,"").split(Dp).forEach(t=>{if(t){const i=t.split(Lp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function At(n){let e="";if(Et(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=At(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Np="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fp=_c(Np);function _f(n){return!!n||n===""}const vf=n=>!!(n&&n.__v_isRef===!0),ot=n=>Et(n)?n:n==null?"":$e(n)||xt(n)&&(n.toString===pf||!qe(n.toString))?vf(n)?ot(n.value):JSON.stringify(n,xf,2):String(n),xf=(n,e)=>vf(e)?xf(n,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[_a(i,s)+" =>"]=r,t),{})}:ff(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>_a(t))}:Oi(e)?_a(e):xt(e)&&!$e(e)&&!mf(e)?String(e):e,_a=(n,e="")=>{var t;return Oi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let tn;class Op{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=tn;try{return tn=this,e()}finally{tn=t}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){this._on>0&&--this._on===0&&(tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Bp(){return tn}let vt;const va=new WeakSet;class bf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&tn.active&&tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,va.has(this)&&(va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ru(this),Mf(this);const e=vt,t=An;vt=this,An=!0;try{return this.fn()}finally{Ef(this),vt=e,An=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ec(e);this.deps=this.depsTail=void 0,ru(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ul(this)&&this.run()}get dirty(){return ul(this)}}let yf=0,ms,gs;function Sf(n,e=!1){if(n.flags|=8,e){n.next=gs,gs=n;return}n.next=ms,ms=n}function Sc(){yf++}function Mc(){if(--yf>0)return;if(gs){let e=gs;for(gs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ms;){let e=ms;for(ms=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Mf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ef(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ec(i),kp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ul(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Tf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ms)||(n.globalVersion=Ms,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ul(n))))return;n.flags|=2;const e=n.dep,t=vt,i=An;vt=n,An=!0;try{Mf(n);const r=n.fn(n._value);(e.version===0||Di(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{vt=t,An=i,Ef(n),n.flags&=-3}}function Ec(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ec(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function kp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let An=!0;const wf=[];function ci(){wf.push(An),An=!1}function ui(){const n=wf.pop();An=n===void 0?!0:n}function ru(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=vt;vt=void 0;try{e()}finally{vt=t}}}let Ms=0;class zp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!vt||!An||vt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==vt)t=this.activeLink=new zp(vt,this),vt.deps?(t.prevDep=vt.depsTail,vt.depsTail.nextDep=t,vt.depsTail=t):vt.deps=vt.depsTail=t,Af(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=vt.depsTail,t.nextDep=void 0,vt.depsTail.nextDep=t,vt.depsTail=t,vt.deps===t&&(vt.deps=i)}return t}trigger(e){this.version++,Ms++,this.notify(e)}notify(e){Sc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Mc()}}}function Af(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Af(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const dl=new WeakMap,or=Symbol(""),fl=Symbol(""),Es=Symbol("");function Bt(n,e,t){if(An&&vt){let i=dl.get(n);i||dl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Tc),r.map=i,r.key=t),r.track()}}function ni(n,e,t,i,r,s){const o=dl.get(n);if(!o){Ms++;return}const a=l=>{l&&l.trigger()};if(Sc(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&bc(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Es||!Oi(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Es)),e){case"add":l?c&&a(o.get("length")):(a(o.get(or)),Ur(n)&&a(o.get(fl)));break;case"delete":l||(a(o.get(or)),Ur(n)&&a(o.get(fl)));break;case"set":Ur(n)&&a(o.get(or));break}}Mc()}function pr(n){const e=at(n);return e===n?e:(Bt(e,"iterate",Es),vn(n)?e:e.map(Dn))}function ta(n){return Bt(n=at(n),"iterate",Es),n}function Ti(n,e){return di(n)?ar(n)?Vr(Dn(e)):Vr(e):Dn(e)}const Hp={__proto__:null,[Symbol.iterator](){return xa(this,Symbol.iterator,n=>Ti(this,n))},concat(...n){return pr(this).concat(...n.map(e=>$e(e)?pr(e):e))},entries(){return xa(this,"entries",n=>(n[1]=Ti(this,n[1]),n))},every(n,e){return Xn(this,"every",n,e,void 0,arguments)},filter(n,e){return Xn(this,"filter",n,e,t=>t.map(i=>Ti(this,i)),arguments)},find(n,e){return Xn(this,"find",n,e,t=>Ti(this,t),arguments)},findIndex(n,e){return Xn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Xn(this,"findLast",n,e,t=>Ti(this,t),arguments)},findLastIndex(n,e){return Xn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Xn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ba(this,"includes",n)},indexOf(...n){return ba(this,"indexOf",n)},join(n){return pr(this).join(n)},lastIndexOf(...n){return ba(this,"lastIndexOf",n)},map(n,e){return Xn(this,"map",n,e,void 0,arguments)},pop(){return es(this,"pop")},push(...n){return es(this,"push",n)},reduce(n,...e){return su(this,"reduce",n,e)},reduceRight(n,...e){return su(this,"reduceRight",n,e)},shift(){return es(this,"shift")},some(n,e){return Xn(this,"some",n,e,void 0,arguments)},splice(...n){return es(this,"splice",n)},toReversed(){return pr(this).toReversed()},toSorted(n){return pr(this).toSorted(n)},toSpliced(...n){return pr(this).toSpliced(...n)},unshift(...n){return es(this,"unshift",n)},values(){return xa(this,"values",n=>Ti(this,n))}};function xa(n,e,t){const i=ta(n),r=i[e]();return i!==n&&!vn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Vp=Array.prototype;function Xn(n,e,t,i,r,s){const o=ta(n),a=o!==n&&!vn(n),l=o[e];if(l!==Vp[e]){const d=l.apply(n,s);return a?Dn(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,Ti(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function su(n,e,t,i){const r=ta(n);let s=t;return r!==n&&(vn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ti(n,a),l,n)}),r[e](s,...i)}function ba(n,e,t){const i=at(n);Bt(i,"iterate",Es);const r=i[e](...t);return(r===-1||r===!1)&&Rc(t[0])?(t[0]=at(t[0]),i[e](...t)):r}function es(n,e,t=[]){ci(),Sc();const i=at(n)[e].apply(n,t);return Mc(),ui(),i}const Gp=_c("__proto__,__v_isRef,__isVue"),Rf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Oi));function Wp(n){Oi(n)||(n=String(n));const e=at(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class Cf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?em:If:s?Lf:Df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!r){let l;if(o&&(l=Hp[t]))return l;if(t==="hasOwnProperty")return Wp}const a=Reflect.get(e,t,Ht(e)?e:i);if((Oi(t)?Rf.has(t):Gp(t))||(r||Bt(e,"get",t),s))return a;if(Ht(a)){const l=o&&bc(t)?a:a.value;return r&&xt(l)?pl(l):l}return xt(a)?r?pl(a):Hr(a):a}}class Pf extends Cf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=$e(e)&&bc(t);if(!this._isShallow){const c=di(s);if(!vn(i)&&!di(i)&&(s=at(s),i=at(i)),!o&&Ht(s)&&!Ht(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:ut(e,t),l=Reflect.set(e,t,i,Ht(e)?e:r);return e===at(r)&&(a?Di(i,s)&&ni(e,"set",t,i):ni(e,"add",t,i)),l}deleteProperty(e,t){const i=ut(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ni(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Oi(t)||!Rf.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",$e(e)?"length":or),Reflect.ownKeys(e)}}class Xp extends Cf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $p=new Pf,jp=new Xp,qp=new Pf(!0);const hl=n=>n,$s=n=>Reflect.getPrototypeOf(n);function Yp(n,e,t){return function(...i){const r=this.__v_raw,s=at(r),o=Ur(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?hl:e?Vr:Dn;return!e&&Bt(s,"iterate",l?fl:or),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function js(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Kp(n,e){const t={get(r){const s=this.__v_raw,o=at(s),a=at(r);n||(Di(r,a)&&Bt(o,"get",r),Bt(o,"get",a));const{has:l}=$s(o),c=e?hl:n?Vr:Dn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Bt(at(r),"iterate",or),r.size},has(r){const s=this.__v_raw,o=at(s),a=at(r);return n||(Di(r,a)&&Bt(o,"has",r),Bt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=at(a),c=e?hl:n?Vr:Dn;return!n&&Bt(l,"iterate",or),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return Nt(t,n?{add:js("add"),set:js("set"),delete:js("delete"),clear:js("clear")}:{add(r){!e&&!vn(r)&&!di(r)&&(r=at(r));const s=at(this);return $s(s).has.call(s,r)||(s.add(r),ni(s,"add",r,r)),this},set(r,s){!e&&!vn(s)&&!di(s)&&(s=at(s));const o=at(this),{has:a,get:l}=$s(o);let c=a.call(o,r);c||(r=at(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Di(s,u)&&ni(o,"set",r,s):ni(o,"add",r,s),this},delete(r){const s=at(this),{has:o,get:a}=$s(s);let l=o.call(s,r);l||(r=at(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ni(s,"delete",r,void 0),c},clear(){const r=at(this),s=r.size!==0,o=r.clear();return s&&ni(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Yp(r,n,e)}),t}function wc(n,e){const t=Kp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ut(t,r)&&r in i?t:i,r,s)}const Zp={get:wc(!1,!1)},Jp={get:wc(!1,!0)},Qp={get:wc(!0,!1)};const Df=new WeakMap,Lf=new WeakMap,If=new WeakMap,em=new WeakMap;function tm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nm(n){return n.__v_skip||!Object.isExtensible(n)?0:tm(Ap(n))}function Hr(n){return di(n)?n:Ac(n,!1,$p,Zp,Df)}function Uf(n){return Ac(n,!1,qp,Jp,Lf)}function pl(n){return Ac(n,!0,jp,Qp,If)}function Ac(n,e,t,i,r){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=nm(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function ar(n){return di(n)?ar(n.__v_raw):!!(n&&n.__v_isReactive)}function di(n){return!!(n&&n.__v_isReadonly)}function vn(n){return!!(n&&n.__v_isShallow)}function Rc(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function im(n){return!ut(n,"__v_skip")&&Object.isExtensible(n)&&gf(n,"__v_skip",!0),n}const Dn=n=>xt(n)?Hr(n):n,Vr=n=>xt(n)?pl(n):n;function Ht(n){return n?n.__v_isRef===!0:!1}function Je(n){return Nf(n,!1)}function rm(n){return Nf(n,!0)}function Nf(n,e){return Ht(n)?n:new sm(n,e)}class sm{constructor(e,t){this.dep=new Tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:Dn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||vn(e)||di(e);e=i?e:at(e),Di(e,t)&&(this._rawValue=e,this._value=i?e:Dn(e),this.dep.trigger())}}function lr(n){return Ht(n)?n.value:n}const om={get:(n,e,t)=>e==="__v_raw"?n:lr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ht(r)&&!Ht(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ff(n){return ar(n)?n:new Proxy(n,om)}class am{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return Sf(this,!0),!0}get value(){const e=this.dep.track();return Tf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lm(n,e,t=!1){let i,r;return qe(n)?i=n:(i=n.get,r=n.set),new am(i,r,t)}const qs={},No=new WeakMap;let Zi;function cm(n,e=!1,t=Zi){if(t){let i=No.get(t);i||No.set(t,i=[]),i.push(n)}}function um(n,e,t=gt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:vn(x)||r===!1||r===0?ii(x,1):ii(x);let u,d,f,p,_=!1,g=!1;if(Ht(n)?(d=()=>n.value,_=vn(n)):ar(n)?(d=()=>c(n),_=!0):$e(n)?(g=!0,_=n.some(x=>ar(x)||vn(x)),d=()=>n.map(x=>{if(Ht(x))return x.value;if(ar(x))return c(x);if(qe(x))return l?l(x,2):x()})):qe(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){ci();try{f()}finally{ui()}}const x=Zi;Zi=u;try{return l?l(n,3,[p]):n(p)}finally{Zi=x}}:d=Vn,e&&r){const x=d,C=r===!0?1/0:r;d=()=>ii(x(),C)}const m=Bp(),h=()=>{u.stop(),m&&m.active&&xc(m.effects,u)};if(s&&e){const x=e;e=(...C)=>{x(...C),h()}}let y=g?new Array(n.length).fill(qs):qs;const S=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const C=u.run();if(r||_||(g?C.some((L,D)=>Di(L,y[D])):Di(C,y))){f&&f();const L=Zi;Zi=u;try{const D=[C,y===qs?void 0:g&&y[0]===qs?[]:y,p];y=C,l?l(e,3,D):e(...D)}finally{Zi=L}}}else u.run()};return a&&a(S),u=new bf(d),u.scheduler=o?()=>o(S,!1):S,p=x=>cm(x,!1,u),f=u.onStop=()=>{const x=No.get(u);if(x){if(l)l(x,4);else for(const C of x)C();No.delete(u)}},e?i?S(!0):y=u.run():o?o(S.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ii(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ht(n))ii(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)ii(n[i],e,t);else if(ff(n)||Ur(n))n.forEach(i=>{ii(i,e,t)});else if(mf(n)){for(const i in n)ii(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ii(n[i],e,t)}return n}function Fs(n,e,t,i){try{return i?n(...i):n()}catch(r){na(r,e,t)}}function Ln(n,e,t,i){if(qe(n)){const r=Fs(n,e,t,i);return r&&hf(r)&&r.catch(s=>{na(s,e,t)}),r}if($e(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Ln(n[s],e,t,i));return r}}function na(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||gt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(s){ci(),Fs(s,null,10,[n,l,c]),ui();return}}dm(n,t,r,i,o)}function dm(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const qt=[];let On=-1;const Nr=[];let wi=null,Cr=0;const Of=Promise.resolve();let Fo=null;function Ai(n){const e=Fo||Of;return n?e.then(this?n.bind(this):n):e}function fm(n){let e=On+1,t=qt.length;for(;e<t;){const i=e+t>>>1,r=qt[i],s=Ts(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Cc(n){if(!(n.flags&1)){const e=Ts(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=Ts(t)?qt.push(n):qt.splice(fm(e),0,n),n.flags|=1,Bf()}}function Bf(){Fo||(Fo=Of.then(zf))}function hm(n){$e(n)?Nr.push(...n):wi&&n.id===-1?wi.splice(Cr+1,0,n):n.flags&1||(Nr.push(n),n.flags|=1),Bf()}function ou(n,e,t=On+1){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function kf(n){if(Nr.length){const e=[...new Set(Nr)].sort((t,i)=>Ts(t)-Ts(i));if(Nr.length=0,wi){wi.push(...e);return}for(wi=e,Cr=0;Cr<wi.length;Cr++){const t=wi[Cr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}wi=null,Cr=0}}const Ts=n=>n.id==null?n.flags&2?-1:1/0:n.id;function zf(n){try{for(On=0;On<qt.length;On++){const e=qt[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<qt.length;On++){const e=qt[On];e&&(e.flags&=-2)}On=-1,qt.length=0,kf(),Fo=null,(qt.length||Nr.length)&&zf()}}let cn=null,Hf=null;function Oo(n){const e=cn;return cn=n,Hf=n&&n.type.__scopeId||null,e}function Fr(n,e=cn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&zo(-1);const s=Oo(e);let o;try{o=n(...r)}finally{Oo(s),i._d&&zo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Me(n,e){if(cn===null)return n;const t=aa(cn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=gt]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&ii(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Hi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ci(),Ln(l,t,8,[n.el,a,n,e]),ui())}}const Vf=Symbol("_vte"),Gf=n=>n.__isTeleport,_s=n=>n&&(n.disabled||n.disabled===""),au=n=>n&&(n.defer||n.defer===""),lu=n=>typeof SVGElement<"u"&&n instanceof SVGElement,cu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,ml=(n,e)=>{const t=n&&n.to;return Et(t)?e?e(t):null:t},Wf={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:_,createText:g,createComment:m}}=c,h=_s(e.props);let{shapeFlag:y,children:S,dynamicChildren:x}=e;if(n==null){const C=e.el=g(""),L=e.anchor=g("");p(C,t,i),p(L,t,i);const D=(M,w)=>{y&16&&u(S,M,w,r,s,o,a,l)},O=()=>{const M=e.target=ml(e.props,_),w=$f(M,e,g,p);M&&(o!=="svg"&&lu(M)?o="svg":o!=="mathml"&&cu(M)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(M),h||(D(M,w),Eo(e,!1)))};h&&(D(t,L),Eo(e,!0)),au(e.props)?(e.el.__isMounted=!1,$t(()=>{O(),delete e.el.__isMounted},s)):O()}else{if(au(e.props)&&n.el.__isMounted===!1){$t(()=>{Wf.process(n,e,t,i,r,s,o,a,l,c)},s);return}e.el=n.el,e.targetStart=n.targetStart;const C=e.anchor=n.anchor,L=e.target=n.target,D=e.targetAnchor=n.targetAnchor,O=_s(n.props),M=O?t:L,w=O?C:D;if(o==="svg"||lu(L)?o="svg":(o==="mathml"||cu(L))&&(o="mathml"),x?(f(n.dynamicChildren,x,M,r,s,o,a),Fc(n,e,!0)):l||d(n,e,M,w,r,s,o,a,!1),h)O?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Ys(e,t,C,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const P=e.target=ml(e.props,_);P&&Ys(e,P,null,c,0)}else O&&Ys(e,L,D,c,1);Eo(e,h)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=n;if(d&&(r(c),r(u)),s&&r(l),o&16){const p=s||!_s(f);for(let _=0;_<a.length;_++){const g=a[_];i(g,e,t,p,!!g.dynamicChildren)}}},move:Ys,hydrate:pm};function Ys(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,d=s===2;if(d&&i(o,e,t),(!d||_s(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,t,2);d&&i(a,e,t)}function pm(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){function f(g,m,h,y){m.anchor=d(o(g),m,a(g),t,i,r,s),m.targetStart=h,m.targetAnchor=y}const p=e.target=ml(e.props,l),_=_s(e.props);if(p){const g=p._lpa||p.firstChild;if(e.shapeFlag&16)if(_)f(n,e,g,g&&o(g));else{e.anchor=o(n);let m=g;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||$f(p,e,u,c),d(g&&o(g),e,p,t,i,r,s)}Eo(e,_)}else _&&e.shapeFlag&16&&f(n,e,n,o(n));return e.anchor&&o(e.anchor)}const Xf=Wf;function Eo(n,e){const t=n.ctx;if(t&&t.ut){let i,r;for(e?(i=n.el,r=n.anchor):(i=n.targetStart,r=n.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function $f(n,e,t,i){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[Vf]=s,n&&(i(r,n),i(s,n)),s}const ti=Symbol("_leaveCb"),Ks=Symbol("_enterCb");function mm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gi(()=>{n.isMounted=!0}),Bi(()=>{n.isUnmounting=!0}),n}const hn=[Function,Array],jf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:hn,onEnter:hn,onAfterEnter:hn,onEnterCancelled:hn,onBeforeLeave:hn,onLeave:hn,onAfterLeave:hn,onLeaveCancelled:hn,onBeforeAppear:hn,onAppear:hn,onAfterAppear:hn,onAppearCancelled:hn},qf=n=>{const e=n.subTree;return e.component?qf(e.component):e},gm={name:"BaseTransition",props:jf,setup(n,{slots:e}){const t=xh(),i=mm();return()=>{const r=e.default&&Zf(e.default(),!0);if(!r||!r.length)return;const s=Yf(r),o=at(n),{mode:a}=o;if(i.isLeaving)return ya(s);const l=uu(s);if(!l)return ya(s);let c=gl(l,o,i,t,d=>c=d);l.type!==Yt&&ws(l,c);let u=t.subTree&&uu(t.subTree);if(u&&u.type!==Yt&&!er(u,l)&&qf(t).type!==Yt){let d=gl(u,o,i,t);if(ws(u,d),a==="out-in"&&l.type!==Yt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},ya(s);a==="in-out"&&l.type!==Yt?d.delayLeave=(f,p,_)=>{const g=Kf(i,u);g[String(u.key)]=u,f[ti]=()=>{p(),f[ti]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Yf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Yt){e=t;break}}return e}const _m=gm;function Kf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function gl(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:h,onAfterAppear:y,onAppearCancelled:S}=e,x=String(n.key),C=Kf(t,n),L=(M,w)=>{M&&Ln(M,i,9,w)},D=(M,w)=>{const P=w[1];L(M,w),$e(M)?M.every(k=>k.length<=1)&&P():M.length<=1&&P()},O={mode:o,persisted:a,beforeEnter(M){let w=l;if(!t.isMounted)if(s)w=m||l;else return;M[ti]&&M[ti](!0);const P=C[x];P&&er(n,P)&&P.el[ti]&&P.el[ti](),L(w,[M])},enter(M){let w=c,P=u,k=d;if(!t.isMounted)if(s)w=h||c,P=y||u,k=S||d;else return;let B=!1;const X=M[Ks]=oe=>{B||(B=!0,oe?L(k,[M]):L(P,[M]),O.delayedLeave&&O.delayedLeave(),M[Ks]=void 0)};w?D(w,[M,X]):X()},leave(M,w){const P=String(n.key);if(M[Ks]&&M[Ks](!0),t.isUnmounting)return w();L(f,[M]);let k=!1;const B=M[ti]=X=>{k||(k=!0,w(),X?L(g,[M]):L(_,[M]),M[ti]=void 0,C[P]===n&&delete C[P])};C[P]=n,p?D(p,[M,B]):B()},clone(M){const w=gl(M,e,t,i,r);return r&&r(w),w}};return O}function ya(n){if(ia(n))return n=Ui(n),n.children=null,n}function uu(n){if(!ia(n))return Gf(n.type)&&n.children?Yf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function ws(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ws(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Zf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Mt?(o.patchFlag&128&&r++,i=i.concat(Zf(o.children,e,a))):(e||o.type!==Yt)&&i.push(a!=null?Ui(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Jt(n,e){return qe(n)?Nt({name:n.name},e,{setup:n}):n}function Jf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Bo=new WeakMap;function vs(n,e,t,i,r=!1){if($e(n)){n.forEach((_,g)=>vs(_,e&&($e(e)?e[g]:e),t,i,r));return}if(xs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&vs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?aa(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===gt?a.refs={}:a.refs,d=a.setupState,f=at(d),p=d===gt?df:_=>ut(f,_);if(c!=null&&c!==l){if(du(e),Et(c))u[c]=null,p(c)&&(d[c]=null);else if(Ht(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(qe(l))Fs(l,a,12,[o,u]);else{const _=Et(l),g=Ht(l);if(_||g){const m=()=>{if(n.f){const h=_?p(l)?d[l]:u[l]:l.value;if(r)$e(h)&&xc(h,s);else if($e(h))h.includes(s)||h.push(s);else if(_)u[l]=[s],p(l)&&(d[l]=u[l]);else{const y=[s];l.value=y,n.k&&(u[n.k]=y)}}else _?(u[l]=o,p(l)&&(d[l]=o)):g&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{m(),Bo.delete(n)};h.id=-1,Bo.set(n,h),$t(h,t)}else du(n),m()}}}function du(n){const e=Bo.get(n);e&&(e.flags|=8,Bo.delete(n))}ea().requestIdleCallback;ea().cancelIdleCallback;const xs=n=>!!n.type.__asyncLoader,ia=n=>n.type.__isKeepAlive;function vm(n,e){Qf(n,"a",e)}function xm(n,e){Qf(n,"da",e)}function Qf(n,e,t=kt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ra(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ia(r.parent.vnode)&&bm(i,e,t,r),r=r.parent}}function bm(n,e,t,i){const r=ra(e,n,i,!0);Pc(()=>{xc(i[e],r)},t)}function ra(n,e,t=kt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ci();const a=Os(t),l=Ln(e,t,n,o);return a(),ui(),l});return i?r.unshift(s):r.push(s),s}}const mi=n=>(e,t=kt)=>{(!Cs||n==="sp")&&ra(n,(...i)=>e(...i),t)},ym=mi("bm"),gi=mi("m"),Sm=mi("bu"),Mm=mi("u"),Bi=mi("bum"),Pc=mi("um"),Em=mi("sp"),Tm=mi("rtg"),wm=mi("rtc");function Am(n,e=kt){ra("ec",n,e)}const Dc="components",Rm="directives";function eh(n,e){return Lc(Dc,n,!0,e)||n}const th=Symbol.for("v-ndc");function Cm(n){return Et(n)?Lc(Dc,n,!1)||n:n||th}function fi(n){return Lc(Rm,n)}function Lc(n,e,t=!0,i=!1){const r=cn||kt;if(r){const s=r.type;if(n===Dc){const a=_g(s,!1);if(a&&(a===e||a===bn(e)||a===Qo(bn(e))))return s}const o=fu(r[n]||s[n],e)||fu(r.appContext[n],e);return!o&&i?s:o}}function fu(n,e){return n&&(n[e]||n[bn(e)]||n[Qo(bn(e))])}function En(n,e,t,i){let r;const s=t,o=$e(n);if(o||Et(n)){const a=o&&ar(n);let l=!1,c=!1;a&&(l=!vn(n),c=di(n),n=ta(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?Vr(Dn(n[u])):Dn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(xt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const _l=n=>n?bh(n)?aa(n):_l(n.parent):null,bs=Nt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>_l(n.parent),$root:n=>_l(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ih(n),$forceUpdate:n=>n.f||(n.f=()=>{Cc(n.update)}),$nextTick:n=>n.n||(n.n=Ai.bind(n.proxy)),$watch:n=>Hm.bind(n)}),Sa=(n,e)=>n!==gt&&!n.__isScriptSetup&&ut(n,e),Pm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Sa(i,e))return o[e]=1,i[e];if(r!==gt&&ut(r,e))return o[e]=2,r[e];if(ut(s,e))return o[e]=3,s[e];if(t!==gt&&ut(t,e))return o[e]=4,t[e];vl&&(o[e]=0)}}const c=bs[e];let u,d;if(c)return e==="$attrs"&&Bt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==gt&&ut(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,ut(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Sa(r,e)?(r[e]=t,!0):i!==gt&&ut(i,e)?(i[e]=t,!0):ut(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==gt&&a[0]!=="$"&&ut(n,a)||Sa(e,a)||ut(s,a)||ut(i,a)||ut(bs,a)||ut(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ut(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function hu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let vl=!0;function Dm(n){const e=ih(n),t=n.proxy,i=n.ctx;vl=!1,e.beforeCreate&&pu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:_,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:y,destroyed:S,unmounted:x,render:C,renderTracked:L,renderTriggered:D,errorCaptured:O,serverPrefetch:M,expose:w,inheritAttrs:P,components:k,directives:B,filters:X}=e;if(c&&Lm(c,i,null),o)for(const ee in o){const W=o[ee];qe(W)&&(i[ee]=W.bind(t))}if(r){const ee=r.call(t,t);xt(ee)&&(n.data=Hr(ee))}if(vl=!0,s)for(const ee in s){const W=s[ee],xe=qe(W)?W.bind(t,t):qe(W.get)?W.get.bind(t,t):Vn,be=!qe(W)&&qe(W.set)?W.set.bind(t):Vn,Ce=zt({get:xe,set:be});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:ze=>Ce.value=ze})}if(a)for(const ee in a)nh(a[ee],i,t,ee);if(l){const ee=qe(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(W=>{To(W,ee[W])})}u&&pu(u,n,"c");function Z(ee,W){$e(W)?W.forEach(xe=>ee(xe.bind(t))):W&&ee(W.bind(t))}if(Z(ym,d),Z(gi,f),Z(Sm,p),Z(Mm,_),Z(vm,g),Z(xm,m),Z(Am,O),Z(wm,L),Z(Tm,D),Z(Bi,y),Z(Pc,x),Z(Em,M),$e(w))if(w.length){const ee=n.exposed||(n.exposed={});w.forEach(W=>{Object.defineProperty(ee,W,{get:()=>t[W],set:xe=>t[W]=xe,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Vn&&(n.render=C),P!=null&&(n.inheritAttrs=P),k&&(n.components=k),B&&(n.directives=B),M&&Jf(n)}function Lm(n,e,t=Vn){$e(n)&&(n=xl(n));for(const i in n){const r=n[i];let s;xt(r)?"default"in r?s=Rn(r.from||i,r.default,!0):s=Rn(r.from||i):s=Rn(r),Ht(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function pu(n,e,t){Ln($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function nh(n,e,t,i){let r=i.includes(".")?sh(t,i):()=>t[i];if(Et(n)){const s=e[n];qe(s)&&cr(r,s)}else if(qe(n))cr(r,n.bind(t));else if(xt(n))if($e(n))n.forEach(s=>nh(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&cr(r,s,n)}}function ih(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ko(l,c,o,!0)),ko(l,e,o)),xt(e)&&s.set(e,l),l}function ko(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ko(n,s,t,!0),r&&r.forEach(o=>ko(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Im[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Im={data:mu,props:gu,emits:gu,methods:ds,computed:ds,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:ds,directives:ds,watch:Nm,provide:mu,inject:Um};function mu(n,e){return e?n?function(){return Nt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Um(n,e){return ds(xl(n),xl(e))}function xl(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wt(n,e){return n?[...new Set([].concat(n,e))]:e}function ds(n,e){return n?Nt(Object.create(null),n,e):e}function gu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Nt(Object.create(null),hu(n),hu(e??{})):e}function Nm(n,e){if(!n)return e;if(!e)return n;const t=Nt(Object.create(null),n);for(const i in e)t[i]=Wt(n[i],e[i]);return t}function rh(){return{app:null,config:{isNativeTag:df,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fm=0;function Om(n,e){return function(i,r=null){qe(i)||(i=Nt({},i)),r!=null&&!xt(r)&&(r=null);const s=rh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Fm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:xg,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...d)):qe(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||rt(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,aa(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ln(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=Or;Or=c;try{return u()}finally{Or=d}}};return c}}let Or=null;function To(n,e){if(kt){let t=kt.provides;const i=kt.parent&&kt.parent.provides;i===t&&(t=kt.provides=Object.create(i)),t[n]=e}}function Rn(n,e,t=!1){const i=xh();if(i||Or){let r=Or?Or._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const Bm=Symbol.for("v-scx"),km=()=>Rn(Bm);function zm(n,e){return Ic(n,null,e)}function cr(n,e,t){return Ic(n,e,t)}function Ic(n,e,t=gt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Nt({},t),l=e&&i||!e&&s!=="post";let c;if(Cs){if(s==="sync"){const p=km();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Vn,p.resume=Vn,p.pause=Vn,p}}const u=kt;a.call=(p,_,g)=>Ln(p,u,_,g);let d=!1;s==="post"?a.scheduler=p=>{$t(p,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(p,_)=>{_?p():Cc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=um(n,e,a);return Cs&&(c?c.push(f):l&&f()),f}function Hm(n,e,t){const i=this.proxy,r=Et(n)?n.includes(".")?sh(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const o=Os(this),a=Ic(r,s.bind(i),t);return o(),a}function sh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Vm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${bn(e)}Modifiers`]||n[`${fr(e)}Modifiers`];function Gm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let r=t;const s=e.startsWith("update:"),o=s&&Vm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Et(u)?u.trim():u)),o.number&&(r=t.map(yc)));let a,l=i[a=ga(e)]||i[a=ga(bn(e))];!l&&s&&(l=i[a=ga(fr(e))]),l&&Ln(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(c,n,6,r)}}const Wm=new WeakMap;function oh(n,e,t=!1){const i=t?Wm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=oh(c,e,!0);u&&(a=!0,Nt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(xt(n)&&i.set(n,null),null):($e(s)?s.forEach(l=>o[l]=null):Nt(o,s),xt(n)&&i.set(n,o),o)}function sa(n,e){return!n||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),ut(n,e[0].toLowerCase()+e.slice(1))||ut(n,fr(e))||ut(n,e))}function _u(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:_,inheritAttrs:g}=n,m=Oo(n);let h,y;try{if(t.shapeFlag&4){const x=r||i,C=x;h=Bn(c.call(C,x,u,d,p,f,_)),y=a}else{const x=e;h=Bn(x.length>1?x(d,{attrs:a,slots:o,emit:l}):x(d,null)),y=e.props?a:Xm(a)}}catch(x){ys.length=0,na(x,n,1),h=rt(Yt)}let S=h;if(y&&g!==!1){const x=Object.keys(y),{shapeFlag:C}=S;x.length&&C&7&&(s&&x.some(vc)&&(y=$m(y,s)),S=Ui(S,y,!1,!0))}return t.dirs&&(S=Ui(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&ws(S,t.transition),h=S,Oo(m),h}const Xm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ko(t))&&((e||(e={}))[t]=n[t]);return e},$m=(n,e)=>{const t={};for(const i in n)(!vc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function jm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?vu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!sa(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vu(i,o,c):!0:!!o;return!1}function vu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!sa(t,s))return!0}return!1}function qm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ah={},lh=()=>Object.create(ah),ch=n=>Object.getPrototypeOf(n)===ah;function Ym(n,e,t,i=!1){const r={},s=lh();n.propsDefaults=Object.create(null),uh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Uf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Km(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=at(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(sa(n.emitsOptions,f))continue;const p=e[f];if(l)if(ut(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const _=bn(f);r[_]=bl(l,a,_,p,n,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{uh(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!ut(e,d)&&((u=fr(d))===d||!ut(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=bl(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!ut(e,d))&&(delete s[d],c=!0)}c&&ni(n.attrs,"set","")}function uh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ps(l))continue;const c=e[l];let u;r&&ut(r,u=bn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:sa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=at(t),c=a||gt;for(let u=0;u<s.length;u++){const d=s[u];t[d]=bl(r,l,d,c[d],n,!ut(c,d))}}return o}function bl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ut(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Os(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===fr(t))&&(i=!0))}return i}const Zm=new WeakMap;function dh(n,e,t=!1){const i=t?Zm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=d=>{l=!0;const[f,p]=dh(d,e,!0);Nt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return xt(n)&&i.set(n,Ir),Ir;if($e(s))for(let u=0;u<s.length;u++){const d=bn(s[u]);xu(d)&&(o[d]=gt)}else if(s)for(const u in s){const d=bn(u);if(xu(d)){const f=s[u],p=o[d]=$e(f)||qe(f)?{type:f}:Nt({},f),_=p.type;let g=!1,m=!0;if($e(_))for(let h=0;h<_.length;++h){const y=_[h],S=qe(y)&&y.name;if(S==="Boolean"){g=!0;break}else S==="String"&&(m=!1)}else g=qe(_)&&_.name==="Boolean";p[0]=g,p[1]=m,(g||ut(p,"default"))&&a.push(d)}}const c=[o,a];return xt(n)&&i.set(n,c),c}function xu(n){return n[0]!=="$"&&!ps(n)}const Uc=n=>n==="_"||n==="_ctx"||n==="$stable",Nc=n=>$e(n)?n.map(Bn):[Bn(n)],Jm=(n,e,t)=>{if(e._n)return e;const i=Fr((...r)=>Nc(e(...r)),t);return i._c=!1,i},fh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Uc(r))continue;const s=n[r];if(qe(s))e[r]=Jm(r,s,i);else if(s!=null){const o=Nc(s);e[r]=()=>o}}},hh=(n,e)=>{const t=Nc(e);n.slots.default=()=>t},ph=(n,e,t)=>{for(const i in e)(t||!Uc(i))&&(n[i]=e[i])},Qm=(n,e,t)=>{const i=n.slots=lh();if(n.vnode.shapeFlag&32){const r=e._;r?(ph(i,e,t),t&&gf(i,"_",r,!0)):fh(e,i)}else e&&hh(n,e)},eg=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=gt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:ph(r,e,t):(s=!e.$stable,fh(e,r)),o=e}else e&&(hh(n,e),o={default:1});if(s)for(const a in r)!Uc(a)&&o[a]==null&&delete r[a]},$t=sg;function tg(n){return ng(n)}function ng(n,e){const t=ea();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Vn,insertStaticContent:_}=n,g=(A,v,N,G=null,Q=null,V=null,fe=void 0,K=null,ae=!!v.dynamicChildren)=>{if(A===v)return;A&&!er(A,v)&&(G=U(A),ze(A,Q,V,!0),A=null),v.patchFlag===-2&&(ae=!1,v.dynamicChildren=null);const{type:ce,ref:we,shapeFlag:E}=v;switch(ce){case oa:m(A,v,N,G);break;case Yt:h(A,v,N,G);break;case wo:A==null&&y(v,N,G,fe);break;case Mt:k(A,v,N,G,Q,V,fe,K,ae);break;default:E&1?C(A,v,N,G,Q,V,fe,K,ae):E&6?B(A,v,N,G,Q,V,fe,K,ae):(E&64||E&128)&&ce.process(A,v,N,G,Q,V,fe,K,ae,de)}we!=null&&Q?vs(we,A&&A.ref,V,v||A,!v):we==null&&A&&A.ref!=null&&vs(A.ref,null,V,A,!0)},m=(A,v,N,G)=>{if(A==null)i(v.el=a(v.children),N,G);else{const Q=v.el=A.el;v.children!==A.children&&c(Q,v.children)}},h=(A,v,N,G)=>{A==null?i(v.el=l(v.children||""),N,G):v.el=A.el},y=(A,v,N,G)=>{[A.el,A.anchor]=_(A.children,v,N,G,A.el,A.anchor)},S=({el:A,anchor:v},N,G)=>{let Q;for(;A&&A!==v;)Q=f(A),i(A,N,G),A=Q;i(v,N,G)},x=({el:A,anchor:v})=>{let N;for(;A&&A!==v;)N=f(A),r(A),A=N;r(v)},C=(A,v,N,G,Q,V,fe,K,ae)=>{if(v.type==="svg"?fe="svg":v.type==="math"&&(fe="mathml"),A==null)L(v,N,G,Q,V,fe,K,ae);else{const ce=A.el&&A.el._isVueCE?A.el:null;try{ce&&ce._beginPatch(),M(A,v,Q,V,fe,K,ae)}finally{ce&&ce._endPatch()}}},L=(A,v,N,G,Q,V,fe,K)=>{let ae,ce;const{props:we,shapeFlag:E,transition:b,dirs:I}=A;if(ae=A.el=o(A.type,V,we&&we.is,we),E&8?u(ae,A.children):E&16&&O(A.children,ae,null,G,Q,Ma(A,V),fe,K),I&&Hi(A,null,G,"created"),D(ae,A,A.scopeId,fe,G),we){for(const se in we)se!=="value"&&!ps(se)&&s(ae,se,null,we[se],V,G);"value"in we&&s(ae,"value",null,we.value,V),(ce=we.onVnodeBeforeMount)&&Fn(ce,G,A)}I&&Hi(A,null,G,"beforeMount");const $=ig(Q,b);$&&b.beforeEnter(ae),i(ae,v,N),((ce=we&&we.onVnodeMounted)||$||I)&&$t(()=>{ce&&Fn(ce,G,A),$&&b.enter(ae),I&&Hi(A,null,G,"mounted")},Q)},D=(A,v,N,G,Q)=>{if(N&&p(A,N),G)for(let V=0;V<G.length;V++)p(A,G[V]);if(Q){let V=Q.subTree;if(v===V||gh(V.type)&&(V.ssContent===v||V.ssFallback===v)){const fe=Q.vnode;D(A,fe,fe.scopeId,fe.slotScopeIds,Q.parent)}}},O=(A,v,N,G,Q,V,fe,K,ae=0)=>{for(let ce=ae;ce<A.length;ce++){const we=A[ce]=K?Ri(A[ce]):Bn(A[ce]);g(null,we,v,N,G,Q,V,fe,K)}},M=(A,v,N,G,Q,V,fe)=>{const K=v.el=A.el;let{patchFlag:ae,dynamicChildren:ce,dirs:we}=v;ae|=A.patchFlag&16;const E=A.props||gt,b=v.props||gt;let I;if(N&&Vi(N,!1),(I=b.onVnodeBeforeUpdate)&&Fn(I,N,v,A),we&&Hi(v,A,N,"beforeUpdate"),N&&Vi(N,!0),(E.innerHTML&&b.innerHTML==null||E.textContent&&b.textContent==null)&&u(K,""),ce?w(A.dynamicChildren,ce,K,N,G,Ma(v,Q),V):fe||W(A,v,K,null,N,G,Ma(v,Q),V,!1),ae>0){if(ae&16)P(K,E,b,N,Q);else if(ae&2&&E.class!==b.class&&s(K,"class",null,b.class,Q),ae&4&&s(K,"style",E.style,b.style,Q),ae&8){const $=v.dynamicProps;for(let se=0;se<$.length;se++){const j=$[se],Re=E[j],he=b[j];(he!==Re||j==="value")&&s(K,j,Re,he,Q,N)}}ae&1&&A.children!==v.children&&u(K,v.children)}else!fe&&ce==null&&P(K,E,b,N,Q);((I=b.onVnodeUpdated)||we)&&$t(()=>{I&&Fn(I,N,v,A),we&&Hi(v,A,N,"updated")},G)},w=(A,v,N,G,Q,V,fe)=>{for(let K=0;K<v.length;K++){const ae=A[K],ce=v[K],we=ae.el&&(ae.type===Mt||!er(ae,ce)||ae.shapeFlag&198)?d(ae.el):N;g(ae,ce,we,null,G,Q,V,fe,!0)}},P=(A,v,N,G,Q)=>{if(v!==N){if(v!==gt)for(const V in v)!ps(V)&&!(V in N)&&s(A,V,v[V],null,Q,G);for(const V in N){if(ps(V))continue;const fe=N[V],K=v[V];fe!==K&&V!=="value"&&s(A,V,K,fe,Q,G)}"value"in N&&s(A,"value",v.value,N.value,Q)}},k=(A,v,N,G,Q,V,fe,K,ae)=>{const ce=v.el=A?A.el:a(""),we=v.anchor=A?A.anchor:a("");let{patchFlag:E,dynamicChildren:b,slotScopeIds:I}=v;I&&(K=K?K.concat(I):I),A==null?(i(ce,N,G),i(we,N,G),O(v.children||[],N,we,Q,V,fe,K,ae)):E>0&&E&64&&b&&A.dynamicChildren?(w(A.dynamicChildren,b,N,Q,V,fe,K),(v.key!=null||Q&&v===Q.subTree)&&Fc(A,v,!0)):W(A,v,N,we,Q,V,fe,K,ae)},B=(A,v,N,G,Q,V,fe,K,ae)=>{v.slotScopeIds=K,A==null?v.shapeFlag&512?Q.ctx.activate(v,N,G,fe,ae):X(v,N,G,Q,V,fe,ae):oe(A,v,ae)},X=(A,v,N,G,Q,V,fe)=>{const K=A.component=fg(A,G,Q);if(ia(A)&&(K.ctx.renderer=de),hg(K,!1,fe),K.asyncDep){if(Q&&Q.registerDep(K,Z,fe),!A.el){const ae=K.subTree=rt(Yt);h(null,ae,v,N),A.placeholder=ae.el}}else Z(K,A,v,N,Q,V,fe)},oe=(A,v,N)=>{const G=v.component=A.component;if(jm(A,v,N))if(G.asyncDep&&!G.asyncResolved){ee(G,v,N);return}else G.next=v,G.update();else v.el=A.el,G.vnode=v},Z=(A,v,N,G,Q,V,fe)=>{const K=()=>{if(A.isMounted){let{next:E,bu:b,u:I,parent:$,vnode:se}=A;{const De=mh(A);if(De){E&&(E.el=se.el,ee(A,E,fe)),De.asyncDep.then(()=>{A.isUnmounted||K()});return}}let j=E,Re;Vi(A,!1),E?(E.el=se.el,ee(A,E,fe)):E=se,b&&Mo(b),(Re=E.props&&E.props.onVnodeBeforeUpdate)&&Fn(Re,$,E,se),Vi(A,!0);const he=_u(A),Pe=A.subTree;A.subTree=he,g(Pe,he,d(Pe.el),U(Pe),A,Q,V),E.el=he.el,j===null&&qm(A,he.el),I&&$t(I,Q),(Re=E.props&&E.props.onVnodeUpdated)&&$t(()=>Fn(Re,$,E,se),Q)}else{let E;const{el:b,props:I}=v,{bm:$,m:se,parent:j,root:Re,type:he}=A,Pe=xs(v);Vi(A,!1),$&&Mo($),!Pe&&(E=I&&I.onVnodeBeforeMount)&&Fn(E,j,v),Vi(A,!0);{Re.ce&&Re.ce._def.shadowRoot!==!1&&Re.ce._injectChildStyle(he);const De=A.subTree=_u(A);g(null,De,N,G,A,Q,V),v.el=De.el}if(se&&$t(se,Q),!Pe&&(E=I&&I.onVnodeMounted)){const De=v;$t(()=>Fn(E,j,De),Q)}(v.shapeFlag&256||j&&xs(j.vnode)&&j.vnode.shapeFlag&256)&&A.a&&$t(A.a,Q),A.isMounted=!0,v=N=G=null}};A.scope.on();const ae=A.effect=new bf(K);A.scope.off();const ce=A.update=ae.run.bind(ae),we=A.job=ae.runIfDirty.bind(ae);we.i=A,we.id=A.uid,ae.scheduler=()=>Cc(we),Vi(A,!0),ce()},ee=(A,v,N)=>{v.component=A;const G=A.vnode.props;A.vnode=v,A.next=null,Km(A,v.props,G,N),eg(A,v.children,N),ci(),ou(A),ui()},W=(A,v,N,G,Q,V,fe,K,ae=!1)=>{const ce=A&&A.children,we=A?A.shapeFlag:0,E=v.children,{patchFlag:b,shapeFlag:I}=v;if(b>0){if(b&128){be(ce,E,N,G,Q,V,fe,K,ae);return}else if(b&256){xe(ce,E,N,G,Q,V,fe,K,ae);return}}I&8?(we&16&&me(ce,Q,V),E!==ce&&u(N,E)):we&16?I&16?be(ce,E,N,G,Q,V,fe,K,ae):me(ce,Q,V,!0):(we&8&&u(N,""),I&16&&O(E,N,G,Q,V,fe,K,ae))},xe=(A,v,N,G,Q,V,fe,K,ae)=>{A=A||Ir,v=v||Ir;const ce=A.length,we=v.length,E=Math.min(ce,we);let b;for(b=0;b<E;b++){const I=v[b]=ae?Ri(v[b]):Bn(v[b]);g(A[b],I,N,null,Q,V,fe,K,ae)}ce>we?me(A,Q,V,!0,!1,E):O(v,N,G,Q,V,fe,K,ae,E)},be=(A,v,N,G,Q,V,fe,K,ae)=>{let ce=0;const we=v.length;let E=A.length-1,b=we-1;for(;ce<=E&&ce<=b;){const I=A[ce],$=v[ce]=ae?Ri(v[ce]):Bn(v[ce]);if(er(I,$))g(I,$,N,null,Q,V,fe,K,ae);else break;ce++}for(;ce<=E&&ce<=b;){const I=A[E],$=v[b]=ae?Ri(v[b]):Bn(v[b]);if(er(I,$))g(I,$,N,null,Q,V,fe,K,ae);else break;E--,b--}if(ce>E){if(ce<=b){const I=b+1,$=I<we?v[I].el:G;for(;ce<=b;)g(null,v[ce]=ae?Ri(v[ce]):Bn(v[ce]),N,$,Q,V,fe,K,ae),ce++}}else if(ce>b)for(;ce<=E;)ze(A[ce],Q,V,!0),ce++;else{const I=ce,$=ce,se=new Map;for(ce=$;ce<=b;ce++){const Ne=v[ce]=ae?Ri(v[ce]):Bn(v[ce]);Ne.key!=null&&se.set(Ne.key,ce)}let j,Re=0;const he=b-$+1;let Pe=!1,De=0;const pe=new Array(he);for(ce=0;ce<he;ce++)pe[ce]=0;for(ce=I;ce<=E;ce++){const Ne=A[ce];if(Re>=he){ze(Ne,Q,V,!0);continue}let Le;if(Ne.key!=null)Le=se.get(Ne.key);else for(j=$;j<=b;j++)if(pe[j-$]===0&&er(Ne,v[j])){Le=j;break}Le===void 0?ze(Ne,Q,V,!0):(pe[Le-$]=ce+1,Le>=De?De=Le:Pe=!0,g(Ne,v[Le],N,null,Q,V,fe,K,ae),Re++)}const Te=Pe?rg(pe):Ir;for(j=Te.length-1,ce=he-1;ce>=0;ce--){const Ne=$+ce,Le=v[Ne],Se=v[Ne+1],je=Ne+1<we?Se.el||Se.placeholder:G;pe[ce]===0?g(null,Le,N,je,Q,V,fe,K,ae):Pe&&(j<0||ce!==Te[j]?Ce(Le,N,je,2):j--)}}},Ce=(A,v,N,G,Q=null)=>{const{el:V,type:fe,transition:K,children:ae,shapeFlag:ce}=A;if(ce&6){Ce(A.component.subTree,v,N,G);return}if(ce&128){A.suspense.move(v,N,G);return}if(ce&64){fe.move(A,v,N,de);return}if(fe===Mt){i(V,v,N);for(let E=0;E<ae.length;E++)Ce(ae[E],v,N,G);i(A.anchor,v,N);return}if(fe===wo){S(A,v,N);return}if(G!==2&&ce&1&&K)if(G===0)K.beforeEnter(V),i(V,v,N),$t(()=>K.enter(V),Q);else{const{leave:E,delayLeave:b,afterLeave:I}=K,$=()=>{A.ctx.isUnmounted?r(V):i(V,v,N)},se=()=>{V._isLeaving&&V[ti](!0),E(V,()=>{$(),I&&I()})};b?b(V,$,se):se()}else i(V,v,N)},ze=(A,v,N,G=!1,Q=!1)=>{const{type:V,props:fe,ref:K,children:ae,dynamicChildren:ce,shapeFlag:we,patchFlag:E,dirs:b,cacheIndex:I}=A;if(E===-2&&(Q=!1),K!=null&&(ci(),vs(K,null,N,A,!0),ui()),I!=null&&(v.renderCache[I]=void 0),we&256){v.ctx.deactivate(A);return}const $=we&1&&b,se=!xs(A);let j;if(se&&(j=fe&&fe.onVnodeBeforeUnmount)&&Fn(j,v,A),we&6)te(A.component,N,G);else{if(we&128){A.suspense.unmount(N,G);return}$&&Hi(A,null,v,"beforeUnmount"),we&64?A.type.remove(A,v,N,de,G):ce&&!ce.hasOnce&&(V!==Mt||E>0&&E&64)?me(ce,v,N,!1,!0):(V===Mt&&E&384||!Q&&we&16)&&me(ae,v,N),G&&ke(A)}(se&&(j=fe&&fe.onVnodeUnmounted)||$)&&$t(()=>{j&&Fn(j,v,A),$&&Hi(A,null,v,"unmounted")},N)},ke=A=>{const{type:v,el:N,anchor:G,transition:Q}=A;if(v===Mt){Ge(N,G);return}if(v===wo){x(A);return}const V=()=>{r(N),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(A.shapeFlag&1&&Q&&!Q.persisted){const{leave:fe,delayLeave:K}=Q,ae=()=>fe(N,V);K?K(A.el,V,ae):ae()}else V()},Ge=(A,v)=>{let N;for(;A!==v;)N=f(A),r(A),A=N;r(v)},te=(A,v,N)=>{const{bum:G,scope:Q,job:V,subTree:fe,um:K,m:ae,a:ce}=A;bu(ae),bu(ce),G&&Mo(G),Q.stop(),V&&(V.flags|=8,ze(fe,A,v,N)),K&&$t(K,v),$t(()=>{A.isUnmounted=!0},v)},me=(A,v,N,G=!1,Q=!1,V=0)=>{for(let fe=V;fe<A.length;fe++)ze(A[fe],v,N,G,Q)},U=A=>{if(A.shapeFlag&6)return U(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const v=f(A.anchor||A.el),N=v&&v[Vf];return N?f(N):v};let le=!1;const re=(A,v,N)=>{A==null?v._vnode&&ze(v._vnode,null,null,!0):g(v._vnode||null,A,v,null,null,null,N),v._vnode=A,le||(le=!0,ou(),kf(),le=!1)},de={p:g,um:ze,m:Ce,r:ke,mt:X,mc:O,pc:W,pbc:w,n:U,o:n};return{render:re,hydrate:void 0,createApp:Om(re)}}function Ma({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Vi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ig(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Fc(n,e,t=!1){const i=n.children,r=e.children;if($e(i)&&$e(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ri(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Fc(o,a)),a.type===oa&&a.patchFlag!==-1&&(a.el=o.el),a.type===Yt&&!a.el&&(a.el=o.el)}}function rg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function mh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mh(e)}function bu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const gh=n=>n.__isSuspense;function sg(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):hm(n)}const Mt=Symbol.for("v-fgt"),oa=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),wo=Symbol.for("v-stc"),ys=[];let un=null;function ne(n=!1){ys.push(un=n?null:[])}function og(){ys.pop(),un=ys[ys.length-1]||null}let As=1;function zo(n,e=!1){As+=n,n<0&&un&&e&&(un.hasOnce=!0)}function _h(n){return n.dynamicChildren=As>0?un||Ir:null,og(),As>0&&un&&un.push(n),n}function ie(n,e,t,i,r,s){return _h(R(n,e,t,i,r,s,!0))}function Rs(n,e,t,i,r){return _h(rt(n,e,t,i,r,!0))}function Ho(n){return n?n.__v_isVNode===!0:!1}function er(n,e){return n.type===e.type&&n.key===e.key}const vh=({key:n})=>n??null,Ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||Ht(n)||qe(n)?{i:cn,r:n,k:e,f:!!t}:n:null);function R(n,e=null,t=null,i=0,r=null,s=n===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&vh(e),ref:e&&Ao(e),scopeId:Hf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:cn};return a?(Oc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),As>0&&!o&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const rt=ag;function ag(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===th)&&(n=Yt),Ho(n)){const a=Ui(n,e,!0);return t&&Oc(a,t),As>0&&!s&&un&&(a.shapeFlag&6?un[un.indexOf(n)]=a:un.push(a)),a.patchFlag=-2,a}if(vg(n)&&(n=n.__vccOpts),e){e=lg(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=At(a)),xt(l)&&(Rc(l)&&!$e(l)&&(l=Nt({},l)),e.style=ai(l))}const o=Et(n)?1:gh(n)?128:Gf(n)?64:xt(n)?4:qe(n)?2:0;return R(n,e,t,i,r,o,s,!0)}function lg(n){return n?Rc(n)||ch(n)?Nt({},n):n:null}function Ui(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?cg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&vh(c),ref:e&&e.ref?t&&s?$e(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ui(n.ssContent),ssFallback:n.ssFallback&&Ui(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ws(u,l.clone(u)),u}function it(n=" ",e=0){return rt(oa,null,n,e)}function Kt(n,e){const t=rt(wo,null,n);return t.staticCount=e,t}function dt(n="",e=!1){return e?(ne(),Rs(Yt,null,n)):rt(Yt,null,n)}function Bn(n){return n==null||typeof n=="boolean"?rt(Yt):$e(n)?rt(Mt,null,n.slice()):Ho(n)?Ri(n):rt(oa,null,String(n))}function Ri(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ui(n)}function Oc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Oc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!ch(e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),i&64?(t=16,e=[it(e)]):t=8);n.children=e,n.shapeFlag|=t}function cg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=At([e.class,i.class]));else if(r==="style")e.style=ai([e.style,i.style]);else if(Ko(r)){const s=e[r],o=i[r];o&&s!==o&&!($e(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Fn(n,e,t,i=null){Ln(n,e,7,[t,i])}const ug=rh();let dg=0;function fg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ug,s={uid:dg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dh(i,r),emitsOptions:oh(i,r),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gm.bind(null,s),n.ce&&n.ce(s),s}let kt=null;const xh=()=>kt||cn;let Vo,yl;{const n=ea(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Vo=e("__VUE_INSTANCE_SETTERS__",t=>kt=t),yl=e("__VUE_SSR_SETTERS__",t=>Cs=t)}const Os=n=>{const e=kt;return Vo(n),n.scope.on(),()=>{n.scope.off(),Vo(e)}},yu=()=>{kt&&kt.scope.off(),Vo(null)};function bh(n){return n.vnode.shapeFlag&4}let Cs=!1;function hg(n,e=!1,t=!1){e&&yl(e);const{props:i,children:r}=n.vnode,s=bh(n);Ym(n,i,s,e),Qm(n,r,t||e);const o=s?pg(n,e):void 0;return e&&yl(!1),o}function pg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Pm);const{setup:i}=t;if(i){ci();const r=n.setupContext=i.length>1?gg(n):null,s=Os(n),o=Fs(i,n,0,[n.props,r]),a=hf(o);if(ui(),s(),(a||n.sp)&&!xs(n)&&Jf(n),a){if(o.then(yu,yu),e)return o.then(l=>{Su(n,l)}).catch(l=>{na(l,n,0)});n.asyncDep=o}else Su(n,o)}else yh(n)}function Su(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=Ff(e)),yh(n)}function yh(n,e,t){const i=n.type;n.render||(n.render=i.render||Vn);{const r=Os(n);ci();try{Dm(n)}finally{ui(),r()}}}const mg={get(n,e){return Bt(n,"get",""),n[e]}};function gg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,mg),slots:n.slots,emit:n.emit,expose:e}}function aa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ff(im(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in bs)return bs[t](n)},has(e,t){return t in e||t in bs}})):n.proxy}function _g(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function vg(n){return qe(n)&&"__vccOpts"in n}const zt=(n,e)=>lm(n,e,Cs);function Bc(n,e,t){try{zo(-1);const i=arguments.length;return i===2?xt(e)&&!$e(e)?Ho(e)?rt(n,null,[e]):rt(n,e):rt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ho(t)&&(t=[t]),rt(n,e,t))}finally{zo(1)}}const xg="3.5.25";let Sl;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{Sl=Mu.createPolicy("vue",{createHTML:n=>n})}catch{}const Sh=Sl?n=>Sl.createHTML(n):n=>n,bg="http://www.w3.org/2000/svg",yg="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,Eu=ei&&ei.createElement("template"),Sg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ei.createElementNS(bg,n):e==="mathml"?ei.createElementNS(yg,n):t?ei.createElement(n,{is:t}):ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Eu.innerHTML=Sh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Eu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_i="transition",ts="animation",Ps=Symbol("_vtc"),Mh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mg=Nt({},jf,Mh),Eg=n=>(n.displayName="Transition",n.props=Mg,n),Ml=Eg((n,{slots:e})=>Bc(_m,Tg(n),e)),Gi=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},Tu=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function Tg(n){const e={};for(const k in n)k in Mh||(e[k]=n[k]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=wg(r),g=_&&_[0],m=_&&_[1],{onBeforeEnter:h,onEnter:y,onEnterCancelled:S,onLeave:x,onLeaveCancelled:C,onBeforeAppear:L=h,onAppear:D=y,onAppearCancelled:O=S}=e,M=(k,B,X,oe)=>{k._enterCancelled=oe,Wi(k,B?u:a),Wi(k,B?c:o),X&&X()},w=(k,B)=>{k._isLeaving=!1,Wi(k,d),Wi(k,p),Wi(k,f),B&&B()},P=k=>(B,X)=>{const oe=k?D:y,Z=()=>M(B,k,X);Gi(oe,[B,Z]),wu(()=>{Wi(B,k?l:s),$n(B,k?u:a),Tu(oe)||Au(B,i,g,Z)})};return Nt(e,{onBeforeEnter(k){Gi(h,[k]),$n(k,s),$n(k,o)},onBeforeAppear(k){Gi(L,[k]),$n(k,l),$n(k,c)},onEnter:P(!1),onAppear:P(!0),onLeave(k,B){k._isLeaving=!0;const X=()=>w(k,B);$n(k,d),k._enterCancelled?($n(k,f),Pu(k)):(Pu(k),$n(k,f)),wu(()=>{k._isLeaving&&(Wi(k,d),$n(k,p),Tu(x)||Au(k,i,m,X))}),Gi(x,[k,X])},onEnterCancelled(k){M(k,!1,void 0,!0),Gi(S,[k])},onAppearCancelled(k){M(k,!0,void 0,!0),Gi(O,[k])},onLeaveCancelled(k){w(k),Gi(C,[k])}})}function wg(n){if(n==null)return null;if(xt(n))return[Ea(n.enter),Ea(n.leave)];{const e=Ea(n);return[e,e]}}function Ea(n){return Pp(n)}function $n(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ps]||(n[Ps]=new Set)).add(e)}function Wi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ps];t&&(t.delete(e),t.size||(n[Ps]=void 0))}function wu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Ag=0;function Au(n,e,t,i){const r=n._endId=++Ag,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Rg(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=p=>{p.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function Rg(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${_i}Delay`),s=i(`${_i}Duration`),o=Ru(r,s),a=i(`${ts}Delay`),l=i(`${ts}Duration`),c=Ru(a,l);let u=null,d=0,f=0;e===_i?o>0&&(u=_i,d=o,f=s.length):e===ts?c>0&&(u=ts,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?_i:ts:null,f=u?u===_i?s.length:l.length:0);const p=u===_i&&/\b(?:transform|all)(?:,|$)/.test(i(`${_i}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Ru(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Cu(t)+Cu(n[i])))}function Cu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Pu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Cg(n,e,t){const i=n[Ps];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Go=Symbol("_vod"),Eh=Symbol("_vsh"),Th={name:"show",beforeMount(n,{value:e},{transition:t}){n[Go]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ns(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ns(n,!0),i.enter(n)):i.leave(n,()=>{ns(n,!1)}):ns(n,e))},beforeUnmount(n,{value:e}){ns(n,e)}};function ns(n,e){n.style.display=e?n[Go]:"none",n[Eh]=!e}const Pg=Symbol(""),Dg=/(?:^|;)\s*display\s*:/;function Lg(n,e,t){const i=n.style,r=Et(t);let s=!1;if(t&&!r){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ro(i,a,"")}else for(const o in e)t[o]==null&&Ro(i,o,"");for(const o in t)o==="display"&&(s=!0),Ro(i,o,t[o])}else if(r){if(e!==t){const o=i[Pg];o&&(t+=";"+o),i.cssText=t,s=Dg.test(t)}}else e&&n.removeAttribute("style");Go in n&&(n[Go]=s?i.display:"",n[Eh]&&(i.display="none"))}const Du=/\s*!important$/;function Ro(n,e,t){if($e(t))t.forEach(i=>Ro(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ig(n,e);Du.test(t)?n.setProperty(fr(i),t.replace(Du,""),"important"):n[i]=t}}const Lu=["Webkit","Moz","ms"],Ta={};function Ig(n,e){const t=Ta[e];if(t)return t;let i=bn(e);if(i!=="filter"&&i in n)return Ta[e]=i;i=Qo(i);for(let r=0;r<Lu.length;r++){const s=Lu[r]+i;if(s in n)return Ta[e]=s}return e}const Iu="http://www.w3.org/1999/xlink";function Uu(n,e,t,i,r,s=Fp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Iu,e.slice(6,e.length)):n.setAttributeNS(Iu,e,t):t==null||s&&!_f(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Oi(t)?String(t):t)}function Nu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Sh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=_f(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Pr(n,e,t,i){n.addEventListener(e,t,i)}function Ug(n,e,t,i){n.removeEventListener(e,t,i)}const Fu=Symbol("_vei");function Ng(n,e,t,i,r=null){const s=n[Fu]||(n[Fu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Fg(e);if(i){const c=s[e]=kg(i,r);Pr(n,a,c,l)}else o&&(Ug(n,a,o,l),s[e]=void 0)}}const Ou=/(?:Once|Passive|Capture)$/;function Fg(n){let e;if(Ou.test(n)){e={};let i;for(;i=n.match(Ou);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):fr(n.slice(2)),e]}let wa=0;const Og=Promise.resolve(),Bg=()=>wa||(Og.then(()=>wa=0),wa=Date.now());function kg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(zg(i,t.value),e,5,[i])};return t.value=n,t.attached=Bg(),t}function zg(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Bu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Hg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Cg(n,i,o):e==="style"?Lg(n,t,i):Ko(e)?vc(e)||Ng(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vg(n,e,i,o))?(Nu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Uu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Et(i))?Nu(n,bn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Uu(n,e,i,o))};function Vg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Bu(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Bu(e)&&Et(t)?!1:e in n}const ku=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>Mo(e,t):e};function Gg(n){n.target.composing=!0}function zu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Aa=Symbol("_assign");function Hu(n,e,t){return e&&(n=n.trim()),t&&(n=yc(n)),n}const nn={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Aa]=ku(r);const s=i||r.props&&r.props.type==="number";Pr(n,e?"change":"input",o=>{o.target.composing||n[Aa](Hu(n.value,t,s))}),(t||s)&&Pr(n,"change",()=>{n.value=Hu(n.value,t,s)}),e||(Pr(n,"compositionstart",Gg),Pr(n,"compositionend",zu),Pr(n,"change",zu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Aa]=ku(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?yc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Wg=["ctrl","shift","alt","meta"],Xg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Wg.some(t=>n[`${t}Key`]&&!e.includes(t))},_n=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Xg[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},$g=Nt({patchProp:Hg},Sg);let Vu;function jg(){return Vu||(Vu=tg($g))}const qg=((...n)=>{const e=jg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Kg(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Yg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Yg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Kg(n){return Et(n)?document.querySelector(n):n}const Dr=typeof document<"u";function wh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Zg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&wh(n.default)}const ct=Object.assign;function Ra(n,e){const t={};for(const i in e){const r=e[i];t[i]=In(r)?r.map(n):n(r)}return t}const Ss=()=>{},In=Array.isArray;function Gu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Ah=/#/g,Jg=/&/g,Qg=/\//g,e0=/=/g,t0=/\?/g,Rh=/\+/g,n0=/%5B/g,i0=/%5D/g,Ch=/%5E/g,r0=/%60/g,Ph=/%7B/g,s0=/%7C/g,Dh=/%7D/g,o0=/%20/g;function kc(n){return n==null?"":encodeURI(""+n).replace(s0,"|").replace(n0,"[").replace(i0,"]")}function a0(n){return kc(n).replace(Ph,"{").replace(Dh,"}").replace(Ch,"^")}function El(n){return kc(n).replace(Rh,"%2B").replace(o0,"+").replace(Ah,"%23").replace(Jg,"%26").replace(r0,"`").replace(Ph,"{").replace(Dh,"}").replace(Ch,"^")}function l0(n){return El(n).replace(e0,"%3D")}function c0(n){return kc(n).replace(Ah,"%23").replace(t0,"%3F")}function u0(n){return c0(n).replace(Qg,"%2F")}function Ds(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const d0=/\/$/,f0=n=>n.replace(d0,"");function Ca(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=g0(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:Ds(o)}}function h0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Wu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function p0(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Gr(e.matched[i],t.matched[r])&&Lh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Gr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Lh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!m0(n[t],e[t]))return!1;return!0}function m0(n,e){return In(n)?Xu(n,e):In(e)?Xu(e,n):n===e}function Xu(n,e){return In(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function g0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const vi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Tl=(function(n){return n.pop="pop",n.push="push",n})({}),Pa=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function _0(n){if(!n)if(Dr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),f0(n)}const v0=/^[^#]+#/;function x0(n,e){return n.replace(v0,"#")+e}function b0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const la=()=>({left:window.scrollX,top:window.scrollY});function y0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=b0(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function $u(n,e){return(history.state?history.state.position-e:-1)+n}const wl=new Map;function S0(n,e){wl.set(n,e)}function M0(n){const e=wl.get(n);return wl.delete(n),e}function E0(n){return typeof n=="string"||n&&typeof n=="object"}function Ih(n){return typeof n=="string"||typeof n=="symbol"}let wt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Uh=Symbol("");wt.MATCHER_NOT_FOUND+"",wt.NAVIGATION_GUARD_REDIRECT+"",wt.NAVIGATION_ABORTED+"",wt.NAVIGATION_CANCELLED+"",wt.NAVIGATION_DUPLICATED+"";function Wr(n,e){return ct(new Error,{type:n,[Uh]:!0},e)}function jn(n,e){return n instanceof Error&&Uh in n&&(e==null||!!(n.type&e))}const T0=["params","query","hash"];function w0(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of T0)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function A0(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Rh," "),s=r.indexOf("="),o=Ds(s<0?r:r.slice(0,s)),a=s<0?null:Ds(r.slice(s+1));if(o in e){let l=e[o];In(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function ju(n){let e="";for(let t in n){const i=n[t];if(t=l0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(In(i)?i.map(r=>r&&El(r)):[i&&El(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function R0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=In(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const C0=Symbol(""),qu=Symbol(""),ca=Symbol(""),zc=Symbol(""),Al=Symbol("");function is(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ci(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Wr(wt.NAVIGATION_ABORTED,{from:t,to:e})):f instanceof Error?l(f):E0(f)?l(Wr(wt.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Da(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(wh(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ci(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=Zg(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&Ci(f,t,i,o,a,r)()}))}}return s}function P0(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Gr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Gr(c,l))||r.push(l))}return[t,i,r]}let D0=()=>location.protocol+"//"+location.host;function Nh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Wu(a,"")}return Wu(t,n)+i+r}function L0(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const p=Nh(n,location),_=t.value,g=e.value;let m=0;if(f){if(t.value=p,e.value=f,o&&o===_){o=null;return}m=g?f.position-g.position:0}else i(p);r.forEach(h=>{h(t.value,_,{delta:m,type:Tl.pop,direction:m?m>0?Pa.forward:Pa.back:Pa.unknown})})};function l(){o=t.value}function c(f){r.push(f);const p=()=>{const _=r.indexOf(f);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(ct({},f.state,{scroll:la()}),"")}}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function Yu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?la():null}}function I0(n){const{history:e,location:t}=window,i={value:Nh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:D0()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](f)}}function o(l,c){s(l,ct({},e.state,Yu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=ct({},r.value,e.state,{forward:l,scroll:la()});s(u.current,u,!0),s(l,ct({},Yu(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function U0(n){n=_0(n);const e=I0(n),t=L0(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=ct({location:"",base:n,go:i,createHref:x0.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function N0(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),U0(n)}let ir=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Dt=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Dt||{});const F0={type:ir.Static,value:""},O0=/[a-zA-Z0-9_]/;function B0(n){if(!n)return[[]];if(n==="/")return[[F0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=Dt.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(t===Dt.Static?s.push({type:ir.Static,value:c}):t===Dt.Param||t===Dt.ParamRegExp||t===Dt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:ir.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==Dt.ParamRegExp){i=t,t=Dt.EscapeNext;continue}switch(t){case Dt.Static:l==="/"?(c&&d(),o()):l===":"?(d(),t=Dt.Param):f();break;case Dt.EscapeNext:f(),t=i;break;case Dt.Param:l==="("?t=Dt.ParamRegExp:O0.test(l)?f():(d(),t=Dt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Dt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Dt.ParamRegExpEnd:u+=l;break;case Dt.ParamRegExpEnd:d(),t=Dt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===Dt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}const Ku="[^/]+?",k0={sensitive:!1,strict:!1,start:!0,end:!0};var jt=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(jt||{});const z0=/[.+*?^${}()[\]/\\]/g;function H0(n,e){const t=ct({},k0,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[jt.Root];t.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=jt.Segment+(t.sensitive?jt.BonusCaseSensitive:0);if(f.type===ir.Static)d||(r+="/"),r+=f.value.replace(z0,"\\$&"),p+=jt.Static;else if(f.type===ir.Param){const{value:_,repeatable:g,optional:m,regexp:h}=f;s.push({name:_,repeatable:g,optional:m});const y=h||Ku;if(y!==Ku){p+=jt.BonusCustomRegExp;try{`${y}`}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+x.message)}}let S=g?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,p+=jt.Dynamic,m&&(p+=jt.BonusOptional),g&&(p+=jt.BonusRepeatable),y===".*"&&(p+=jt.BonusWildcard)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=jt.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",_=s[f-1];d[_.name]=p&&_.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===ir.Static)u+=p.value;else if(p.type===ir.Param){const{value:_,repeatable:g,optional:m}=p,h=_ in c?c[_]:"";if(In(h)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=In(h)?h.join("/"):h;if(!y)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function V0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===jt.Static+jt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===jt.Static+jt.Segment?1:-1:0}function Fh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=V0(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Zu(i))return 1;if(Zu(r))return-1}return r.length-i.length}function Zu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const G0={strict:!1,end:!0,sensitive:!1};function W0(n,e,t){const i=H0(B0(n.path),t),r=ct(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function X0(n,e){const t=[],i=new Map;e=Gu(G0,e);function r(d){return i.get(d)}function s(d,f,p){const _=!p,g=Qu(d);g.aliasOf=p&&p.record;const m=Gu(e,d),h=[g];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const C of x)h.push(Qu(ct({},g,{components:p?p.record.components:g.components,path:C,aliasOf:p?p.record:g})))}let y,S;for(const x of h){const{path:C}=x;if(f&&C[0]!=="/"){const L=f.record.path,D=L[L.length-1]==="/"?"":"/";x.path=f.record.path+(C&&D+C)}if(y=W0(x,f,m),p?p.alias.push(y):(S=S||y,S!==y&&S.alias.push(y),_&&d.name&&!ed(y)&&o(d.name)),Oh(y)&&l(y),g.children){const L=g.children;for(let D=0;D<L.length;D++)s(L[D],y,p&&p.children[D])}p=p||y}return S?()=>{o(S)}:Ss}function o(d){if(Ih(d)){const f=i.get(d);f&&(i.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function l(d){const f=q0(d,t);t.splice(f,0,d),d.record.name&&!ed(d)&&i.set(d.record.name,d)}function c(d,f){let p,_={},g,m;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw Wr(wt.MATCHER_NOT_FOUND,{location:d});m=p.record.name,_=ct(Ju(f.params,p.keys.filter(S=>!S.optional).concat(p.parent?p.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),d.params&&Ju(d.params,p.keys.map(S=>S.name))),g=p.stringify(_)}else if(d.path!=null)g=d.path,p=t.find(S=>S.re.test(g)),p&&(_=p.parse(g),m=p.record.name);else{if(p=f.name?i.get(f.name):t.find(S=>S.re.test(f.path)),!p)throw Wr(wt.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=p.record.name,_=ct({},f.params,d.params),g=p.stringify(_)}const h=[];let y=p;for(;y;)h.unshift(y.record),y=y.parent;return{name:m,path:g,params:_,matched:h,meta:j0(h)}}n.forEach(d=>s(d));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Ju(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Qu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:$0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function $0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function ed(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function j0(n){return n.reduce((e,t)=>ct(e,t.meta),{})}function q0(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Fh(n,e[s])<0?i=s:t=s+1}const r=Y0(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Y0(n){let e=n;for(;e=e.parent;)if(Oh(e)&&Fh(n,e)===0)return e}function Oh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function td(n){const e=Rn(ca),t=Rn(zc),i=zt(()=>{const l=lr(n.to);return e.resolve(l)}),r=zt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(Gr.bind(null,u));if(f>-1)return f;const p=nd(l[c-2]);return c>1&&nd(u)===p&&d[d.length-1].path!==p?d.findIndex(Gr.bind(null,l[c-2])):f}),s=zt(()=>r.value>-1&&e_(t.params,i.value.params)),o=zt(()=>r.value>-1&&r.value===t.matched.length-1&&Lh(t.params,i.value.params));function a(l={}){if(Q0(l)){const c=e[lr(n.replace)?"replace":"push"](lr(n.to)).catch(Ss);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:zt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function K0(n){return n.length===1?n[0]:n}const Z0=Jt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:td,setup(n,{slots:e}){const t=Hr(td(n)),{options:i}=Rn(ca),r=zt(()=>({[id(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[id(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&K0(e.default(t));return n.custom?s:Bc("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),J0=Z0;function Q0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function e_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!In(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function nd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const id=(n,e,t)=>n??e??t,t_=Jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Rn(Al),r=zt(()=>n.route||i.value),s=Rn(qu,0),o=zt(()=>{let c=lr(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=zt(()=>r.value.matched[o.value]);To(qu,zt(()=>o.value+1)),To(C0,a),To(Al,r);const l=Je();return cr(()=>[l.value,a.value,n.name],([c,u,d],[f,p,_])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Gr(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return rd(t.default,{Component:f,route:c});const p=d.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Bc(f,ct({},_,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return rd(t.default,{Component:m,route:c})||m}}});function rd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const n_=t_;function i_(n){const e=X0(n.routes,n),t=n.parseQuery||A0,i=n.stringifyQuery||ju,r=n.history,s=is(),o=is(),a=is(),l=rm(vi);let c=vi;Dr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ra.bind(null,U=>""+U),d=Ra.bind(null,u0),f=Ra.bind(null,Ds);function p(U,le){let re,de;return Ih(U)?(re=e.getRecordMatcher(U),de=le):de=U,e.addRoute(de,re)}function _(U){const le=e.getRecordMatcher(U);le&&e.removeRoute(le)}function g(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function h(U,le){if(le=ct({},le||l.value),typeof U=="string"){const N=Ca(t,U,le.path),G=e.resolve({path:N.path},le),Q=r.createHref(N.fullPath);return ct(N,G,{params:f(G.params),hash:Ds(N.hash),redirectedFrom:void 0,href:Q})}let re;if(U.path!=null)re=ct({},U,{path:Ca(t,U.path,le.path).path});else{const N=ct({},U.params);for(const G in N)N[G]==null&&delete N[G];re=ct({},U,{params:d(N)}),le.params=d(le.params)}const de=e.resolve(re,le),Be=U.hash||"";de.params=u(f(de.params));const A=h0(i,ct({},U,{hash:a0(Be),path:de.path})),v=r.createHref(A);return ct({fullPath:A,hash:Be,query:i===ju?R0(U.query):U.query||{}},de,{redirectedFrom:void 0,href:v})}function y(U){return typeof U=="string"?Ca(t,U,l.value.path):ct({},U)}function S(U,le){if(c!==U)return Wr(wt.NAVIGATION_CANCELLED,{from:le,to:U})}function x(U){return D(U)}function C(U){return x(ct(y(U),{replace:!0}))}function L(U,le){const re=U.matched[U.matched.length-1];if(re&&re.redirect){const{redirect:de}=re;let Be=typeof de=="function"?de(U,le):de;return typeof Be=="string"&&(Be=Be.includes("?")||Be.includes("#")?Be=y(Be):{path:Be},Be.params={}),ct({query:U.query,hash:U.hash,params:Be.path!=null?{}:U.params},Be)}}function D(U,le){const re=c=h(U),de=l.value,Be=U.state,A=U.force,v=U.replace===!0,N=L(re,de);if(N)return D(ct(y(N),{state:typeof N=="object"?ct({},Be,N.state):Be,force:A,replace:v}),le||re);const G=re;G.redirectedFrom=le;let Q;return!A&&p0(i,de,re)&&(Q=Wr(wt.NAVIGATION_DUPLICATED,{to:G,from:de}),Ce(de,de,!0,!1)),(Q?Promise.resolve(Q):w(G,de)).catch(V=>jn(V)?jn(V,wt.NAVIGATION_GUARD_REDIRECT)?V:be(V):W(V,G,de)).then(V=>{if(V){if(jn(V,wt.NAVIGATION_GUARD_REDIRECT))return D(ct({replace:v},y(V.to),{state:typeof V.to=="object"?ct({},Be,V.to.state):Be,force:A}),le||G)}else V=k(G,de,!0,v,Be);return P(G,de,V),V})}function O(U,le){const re=S(U,le);return re?Promise.reject(re):Promise.resolve()}function M(U){const le=Ge.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(U):U()}function w(U,le){let re;const[de,Be,A]=P0(U,le);re=Da(de.reverse(),"beforeRouteLeave",U,le);for(const N of de)N.leaveGuards.forEach(G=>{re.push(Ci(G,U,le))});const v=O.bind(null,U,le);return re.push(v),me(re).then(()=>{re=[];for(const N of s.list())re.push(Ci(N,U,le));return re.push(v),me(re)}).then(()=>{re=Da(Be,"beforeRouteUpdate",U,le);for(const N of Be)N.updateGuards.forEach(G=>{re.push(Ci(G,U,le))});return re.push(v),me(re)}).then(()=>{re=[];for(const N of A)if(N.beforeEnter)if(In(N.beforeEnter))for(const G of N.beforeEnter)re.push(Ci(G,U,le));else re.push(Ci(N.beforeEnter,U,le));return re.push(v),me(re)}).then(()=>(U.matched.forEach(N=>N.enterCallbacks={}),re=Da(A,"beforeRouteEnter",U,le,M),re.push(v),me(re))).then(()=>{re=[];for(const N of o.list())re.push(Ci(N,U,le));return re.push(v),me(re)}).catch(N=>jn(N,wt.NAVIGATION_CANCELLED)?N:Promise.reject(N))}function P(U,le,re){a.list().forEach(de=>M(()=>de(U,le,re)))}function k(U,le,re,de,Be){const A=S(U,le);if(A)return A;const v=le===vi,N=Dr?history.state:{};re&&(de||v?r.replace(U.fullPath,ct({scroll:v&&N&&N.scroll},Be)):r.push(U.fullPath,Be)),l.value=U,Ce(U,le,re,v),be()}let B;function X(){B||(B=r.listen((U,le,re)=>{if(!te.listening)return;const de=h(U),Be=L(de,te.currentRoute.value);if(Be){D(ct(Be,{replace:!0,force:!0}),de).catch(Ss);return}c=de;const A=l.value;Dr&&S0($u(A.fullPath,re.delta),la()),w(de,A).catch(v=>jn(v,wt.NAVIGATION_ABORTED|wt.NAVIGATION_CANCELLED)?v:jn(v,wt.NAVIGATION_GUARD_REDIRECT)?(D(ct(y(v.to),{force:!0}),de).then(N=>{jn(N,wt.NAVIGATION_ABORTED|wt.NAVIGATION_DUPLICATED)&&!re.delta&&re.type===Tl.pop&&r.go(-1,!1)}).catch(Ss),Promise.reject()):(re.delta&&r.go(-re.delta,!1),W(v,de,A))).then(v=>{v=v||k(de,A,!1),v&&(re.delta&&!jn(v,wt.NAVIGATION_CANCELLED)?r.go(-re.delta,!1):re.type===Tl.pop&&jn(v,wt.NAVIGATION_ABORTED|wt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),P(de,A,v)}).catch(Ss)}))}let oe=is(),Z=is(),ee;function W(U,le,re){be(U);const de=Z.list();return de.length?de.forEach(Be=>Be(U,le,re)):console.error(U),Promise.reject(U)}function xe(){return ee&&l.value!==vi?Promise.resolve():new Promise((U,le)=>{oe.add([U,le])})}function be(U){return ee||(ee=!U,X(),oe.list().forEach(([le,re])=>U?re(U):le()),oe.reset()),U}function Ce(U,le,re,de){const{scrollBehavior:Be}=n;if(!Dr||!Be)return Promise.resolve();const A=!re&&M0($u(U.fullPath,0))||(de||!re)&&history.state&&history.state.scroll||null;return Ai().then(()=>Be(U,le,A)).then(v=>v&&y0(v)).catch(v=>W(v,U,le))}const ze=U=>r.go(U);let ke;const Ge=new Set,te={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:h,options:n,push:x,replace:C,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:xe,install(U){U.component("RouterLink",J0),U.component("RouterView",n_),U.config.globalProperties.$router=te,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>lr(l)}),Dr&&!ke&&l.value===vi&&(ke=!0,x(r.location).catch(de=>{}));const le={};for(const de in vi)Object.defineProperty(le,de,{get:()=>l.value[de],enumerable:!0});U.provide(ca,te),U.provide(zc,Uf(le)),U.provide(Al,l);const re=U.unmount;Ge.add(U),U.unmount=function(){Ge.delete(U),Ge.size<1&&(c=vi,B&&B(),B=null,l.value=vi,ke=!1,ee=!1),re()}}};function me(U){return U.reduce((le,re)=>le.then(()=>M(re)),Promise.resolve())}return te}function r_(){return Rn(ca)}function Bh(n){return Rn(zc)}const s_="/eclub_logo2.jpg",o_={class:"relative w-full max-w-[820px] px-6 text-center"},a_={class:"mt-6 flex items-center justify-center gap-3"},l_={class:"relative h-full w-full flex items-center justify-center p-4 sm:p-5"},c_={class:"w-full max-w-[820px] h-[70svh] min-h-[380px] max-h-[760px] bg-black/40 border border-emerald-500/40 rounded-xl shadow-[0_0_40px_-10px_rgba(16,255,128,0.5)] backdrop-blur-sm overflow-hidden ring-1 ring-emerald-400/10 relative animate-crt flex flex-col"},u_={class:"flex items-center justify-between px-4 py-2 text-xs text-emerald-300/80 shrink-0 relative z-20"},d_={key:0,class:"inline-block w-2 bg-emerald-300 animate-cursor align-baseline ml-[1px]"},f_={key:0,class:"pointer-events-none absolute bottom-4 inset-x-0 flex flex-col items-center gap-1 text-emerald-300/80 z-30"},h_=10,p_=100,m_=200,g_=.35,__=Jt({__name:"TerminalIntro",emits:["done"],setup(n,{emit:e}){const t=e,i=Je([]),r=Je(!0),s=Je(!1),o=Je(!1),a=Je(null),l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=new Audio("/sounds/begin.mp3");c.loop=!1,c.preload="auto";const u=new Audio("/sounds/tick.mp3");u.loop=!1,u.preload="auto";const d=Je(!1),f=Je(!1);c.volume=.7,u.volume=1;async function p(){if(!d.value)try{u.muted=!0,await u.play(),u.pause(),u.currentTime=0,u.muted=!1,c.muted=!0,await c.play(),c.pause(),c.currentTime=0,c.muted=!1,d.value=!0,f.value=!0}catch(B){console.warn("Audio unlock failed (will retry on next interaction)",B)}}const _=Je(!0);function g(){_.value&&(p(),_.value=!1,window.addEventListener("keydown",k),Ai(()=>{O()}))}function m(B){g()}const h=["// === ElectronicClub BOOT SEQUENCE v2.1 ===","","[SYSTEM] 时间线归档: 「高中故事线」 HIGH_SCHOOL_ERA (2022-2025)","[STATUS] 成就解锁: 「我的大学」 UNIVERSITY_ACCESS_KEY","","[LOADING] 新世界模块: 「无尽世界」 UNLIMITED_POSSIBILITIES","  - 可用技能点: ∞ (自由分配模式)","  - 核心规则: 允许失败 | 鼓励探索 | 支持重构","","[DISCOVERY] 发现关键地点: ","  MAKERSPACE_S514 [电子俱乐部]","  特征验证: ","    ████████ 技能孵化指数 100%","    ██████████ 同伴支持等级 114%","","[USER_PROFILE] 检测到新身份:","  用户类别: FRESHMAN_2025","  建议路径: JOIN_CREATOR_COMMUNITY","","[AUTO_LOG] 系统记录片段:",'  > "凌晨3点的调试是最好成长礼 - 2024级学长"','  > "我的第一个LED在这里点亮 - 2023级学姐"','  > ". . ."','  > "我们做到了，这是属于电子俱乐部的荣耀！-2006年学长"','  > ". . ."','  > "我们创建一个电子俱乐部吧，为了我们的那份热爱。-1982年学长"',"","[RESOURCE] 可用工具包:","  1. BEGINNER_FRIENDLY_STARTER_KIT 「新手保护期」","  2. PROJECT_BASED_LEARNING_PATH 「学习路径」","  3. MENTOR_SUPPORT_NETWORK 「社交支持网络」","","[NOTICE] 不需要预先装备全部技能","  CORE_REQUIREMENT: 好奇心与坚持","","[COUNTDOWN] 主线任务触发","  > 【新手村】：加入电子俱乐部","  > 【渐入佳境】：让你的智能车在学校赛道驰骋","  > 【获得传承】：成为国赛大佬","","> // === 终端交互就绪 ===","> [INPUT REQUIRED] 执行 ./open_poster 查看新世界地图","> 等待用户指令: █","","","",""];let y=!1,S=null;function x(B){return new Promise(X=>setTimeout(X,B))}function C(){S&&cancelAnimationFrame(S),S=requestAnimationFrame(()=>{const B=a.value;B&&(B.scrollTop=B.scrollHeight)})}function L(B){if(l||o.value)return 0;let X=h_;return/[，。、“”‘’…：:;,.!?！？]/.test(B)&&(X+=p_),X*(o.value?g_:1)}async function D(B){if(u.currentTime=0,f.value&&u.play().catch(()=>{}),B.trim()===""&&B!==""){i.value.push(""),await Ai(),C();return}let X="";i.value.push("");const oe=i.value.length-1;for(let Z=0;Z<B.length;Z++){if(y)return;const ee=B[Z];if(X+=ee,i.value[oe]=X,!l&&!o.value){await Ai(),C();const W=L(ee);W>0&&await x(W*(.6+Math.random()*.5))}}!l&&!o.value&&await x(m_*(.7+Math.random()*.4)),C()}async function O(){i.value=[],r.value=!0;for(let B=0;B<h.length;B++){if(y)return;const X=h[B].startsWith("> ")?"":"> ";await D(X+h[B])}r.value=!1,s.value=!0,await Ai(),C(),f.value&&c.play().catch(()=>{})}function M(){y=!0,o.value=!0,t("done")}function w(){y=!0,o.value=!0,i.value=h.map(B=>B.startsWith("> ")?B:"> "+B),r.value=!1,s.value=!0,Ai(C)}function P(){r.value?w():M()}function k(B){["Enter"," ","ArrowDown"].includes(B.key)&&(B.preventDefault(),P())}return gi(async()=>{await Ai(),window.addEventListener("keydown",m,{once:!0})}),Bi(()=>{window.removeEventListener("keydown",k),window.removeEventListener("keydown",m)}),(B,X)=>_.value?(ne(),ie("section",{key:0,class:"fixed inset-0 z-50 min-h-[100svh] bg-black text-emerald-200 font-mono overflow-hidden select-none grid place-items-center",onClick:g},[R("div",o_,[X[0]||(X[0]=Kt('<div class="overflow-clip mx-auto w-30 h-30 rounded-full border border-emerald-500/40 grid place-items-center shadow-[0_0_40px_-10px_rgba(16,255,128,0.5)] animate-crt" data-v-3196e02b><img src="'+s_+'" alt="E-Club" class="opacity-90 h-full" data-v-3196e02b></div><h1 class="mt-6 text-2xl font-semibold text-emerald-300" data-v-3196e02b>ElectronicClub OS</h1><p class="mt-2 text-emerald-300/80" data-v-3196e02b>是否启动系统？</p><p class="mt-1 text-xs text-emerald-300/60" data-v-3196e02b>点击或按任意键开始</p><p class="mt-1 text-xs text-emerald-300/60" data-v-3196e02b>Click / Press any key to start</p>',5)),R("div",a_,[R("button",{type:"button",class:"px-4 py-2 rounded border border-emerald-500/40 hover:bg-emerald-500/10 active:scale-95 transition flex items-center justify-center font-semibold text-base text-emerald-300 shadow-md",onClick:_n(g,["stop"])},"启动"),R("button",{type:"button",class:"px-4 py-2 rounded border border-emerald-500/20 text-emerald-300/70 hover:bg-white/5 active:scale-95 transition flex items-center justify-center font-semibold text-base shadow",onClick:_n(M,["stop"])},"直接进入")])]),X[1]||(X[1]=R("div",{class:"absolute inset-0 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(16,255,128,0.08),rgba(0,0,0,0)_70%)]"},null,-1)),X[2]||(X[2]=R("div",{class:"absolute inset-0 pointer-events-none scanline"},null,-1))])):(ne(),ie("section",{key:1,class:"fixed inset-0 z-50 min-h-[100svh] bg-black text-emerald-200 font-mono overflow-hidden select-none overscroll-y-none",onClick:P,onTouchstartPassive:P},[X[6]||(X[6]=Kt('<div class="absolute inset-0 pointer-events-none crt-grid opacity-30" data-v-3196e02b></div><div class="absolute inset-0 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(16,255,128,0.07),rgba(0,0,0,0)_70%)]" data-v-3196e02b></div><div class="absolute inset-0 pointer-events-none scanline" data-v-3196e02b></div><div class="absolute inset-x-0 top-0 h-16 fade-top pointer-events-none" data-v-3196e02b></div><div class="absolute inset-x-0 bottom-0 h-20 fade-bottom pointer-events-none" data-v-3196e02b></div>',5)),R("div",l_,[R("div",c_,[R("div",u_,[X[3]||(X[3]=R("div",{class:"flex items-center gap-2 relative"},[R("span",{class:"size-2 rounded-full bg-emerald-400 animate-pulse"}),R("span",{class:"relative z-10"},"E-Club Terminal"),R("span",{class:"absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-10 bg-emerald-300/20 backdrop-blur-md rounded-full blur-md z-0 pointer-events-none"})],-1)),R("button",{type:"button",class:"px-2 py-1 rounded border border-emerald-500/40 hover:bg-emerald-500/10 active:scale-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50",onClick:_n(M,["stop"]),"aria-label":"跳过"},"跳过")]),R("div",{ref_key:"scroller",ref:a,class:"flex-1 w-full px-4 pb-20 pt-1 sm:px-6 sm:pb-24 md:px-8 md:pb-24 overflow-y-auto terminal-mask no-scrollbar text-[13px] sm:text-sm leading-[1.4] tracking-wide relative"},[R("div",null,[(ne(!0),ie(Mt,null,En(i.value,(oe,Z)=>(ne(),ie("div",{key:Z,class:At(["whitespace-pre-wrap transition-opacity duration-300 will-change-transform",[oe.trim()===""?"opacity-40 h-5":"glow-text",Z===i.value.length-1&&r.value?"pr-2":""]])},[it(ot(oe)+" ",1),Z===i.value.length-1&&r.value?(ne(),ie("span",d_)):dt("",!0)],2))),128))])],512),s.value?(ne(),ie("div",f_,[...X[4]||(X[4]=[R("span",{class:"text-[11px] uppercase tracking-widest"},"轻触继续 / Press to continue",-1),R("span",{class:"animate-bounce text-emerald-300 text-lg"},"↓",-1)])])):dt("",!0),X[5]||(X[5]=R("div",{class:"pointer-events-none absolute -inset-px rounded-xl border border-emerald-400/10 shadow-[0_0_20px_2px_rgba(16,255,128,0.08)_inset]"},null,-1))])])],32))}}),Gn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},v_=Gn(__,[["__scopeId","data-v-3196e02b"]]);var x_="@vercel/analytics",b_="1.5.0",y_=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function kh(){return typeof window<"u"}function zh(){try{const n="production"}catch{}return"production"}function S_(n="auto"){if(n==="auto"){window.vam=zh();return}window.vam=n}function M_(){return(kh()?window.vam:zh())||"production"}function Rl(){return M_()==="development"}function E_(n,e){if(!n||!e)return n;let t=n;try{const i=Object.entries(e);for(const[r,s]of i)if(!Array.isArray(s)){const o=sd(s);o.test(t)&&(t=t.replace(o,`/[${r}]`))}for(const[r,s]of i)if(Array.isArray(s)){const o=sd(s.join("/"));o.test(t)&&(t=t.replace(o,`/[...${r}]`))}return t}catch{return n}}function sd(n){return new RegExp(`/${T_(n)}(?=[/?#]|$)`)}function T_(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function w_(n){return n.scriptSrc?n.scriptSrc:Rl()?"https://va.vercel-scripts.com/v1/script.debug.js":n.basePath?`${n.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function A_(n={debug:!0}){var e;if(!kh())return;S_(n.mode),y_(),n.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",n.beforeSend));const t=w_(n);if(document.head.querySelector(`script[src*="${t}"]`))return;const i=document.createElement("script");i.src=t,i.defer=!0,i.dataset.sdkn=x_+(n.framework?`/${n.framework}`:""),i.dataset.sdkv=b_,n.disableAutoTrack&&(i.dataset.disableAutoTrack="1"),n.endpoint?i.dataset.endpoint=n.endpoint:n.basePath&&(i.dataset.endpoint=`${n.basePath}/insights`),n.dsn&&(i.dataset.dsn=n.dsn),i.onerror=()=>{const r=Rl()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${t}. ${r}`)},Rl()&&n.debug===!1&&(i.dataset.debug="false"),document.head.appendChild(i)}function R_({route:n,path:e}){var t;(t=window.va)==null||t.call(window,"pageview",{route:n,path:e})}function C_(){try{return}catch{}}function P_(n="vue"){return Jt({props:["dsn","beforeSend","debug","scriptSrc","endpoint","mode"],setup(e){const t=Bh();if(A_({...e,basePath:C_(),disableAutoTrack:!!t,framework:n}),t&&typeof window<"u"){const i=()=>{R_({route:E_(t.path,t.params),path:t.path})};i(),cr(t,i)}},render(){return null}})}var D_=P_();const L_={class:"bg-black text-white min-h-[100dvh] relative overflow-hidden"},I_={class:"fixed inset-0 z-50"},U_=Jt({__name:"App",setup(n){const e=Bh(),t=Je(!1),i=Je(!1),r=zt(()=>e.path==="/"&&!i.value);function s(){t.value=!1,i.value=!0}return cr(()=>e.path,o=>{o==="/"&&!i.value&&(t.value=!0)},{immediate:!0}),(o,a)=>{const l=eh("router-view");return ne(),ie(Mt,null,[rt(lr(D_)),R("main",L_,[rt(l,null,{default:Fr(({Component:c})=>[rt(Ml,{name:"fade",mode:"out-in"},{default:Fr(()=>[(ne(),Rs(Cm(c)))]),_:2},1024)]),_:1}),r.value&&t.value?(ne(),Rs(Ml,{key:0,name:"art",mode:"out-in",appear:""},{default:Fr(()=>[R("div",I_,[rt(v_,{onDone:s})])]),_:1})):dt("",!0)])],64)}}}),N_=Gn(U_,[["__scopeId","data-v-d717eabb"]]),F_="/logo.svg",O_="/eclub_logo.jpg";const Hc="179",B_=0,od=1,k_=2,Hh=1,z_=2,Qn=3,Ni=0,rn=1,ri=2,Li=0,Br=1,Wo=2,ad=3,ld=4,H_=5,tr=100,V_=101,G_=102,W_=103,X_=104,$_=200,j_=201,q_=202,Y_=203,Cl=204,Pl=205,K_=206,Z_=207,J_=208,Q_=209,ev=210,tv=211,nv=212,iv=213,rv=214,Dl=0,Ll=1,Il=2,Xr=3,Ul=4,Nl=5,Fl=6,Ol=7,Vh=0,sv=1,ov=2,Ii=0,av=1,lv=2,cv=3,uv=4,dv=5,fv=6,hv=7,Gh=300,$r=301,jr=302,Bl=303,kl=304,ua=306,zl=1e3,rr=1001,Hl=1002,Cn=1003,pv=1004,Zs=1005,zn=1006,La=1007,sr=1008,hi=1009,Wh=1010,Xh=1011,Ls=1012,Vc=1013,ur=1014,si=1015,Bs=1016,Gc=1017,Wc=1018,Is=1020,$h=35902,jh=1021,qh=1022,wn=1023,Us=1026,Ns=1027,Yh=1028,Xc=1029,Kh=1030,$c=1031,jc=1033,Co=33776,Po=33777,Do=33778,Lo=33779,Vl=35840,Gl=35841,Wl=35842,Xl=35843,$l=36196,jl=37492,ql=37496,Yl=37808,Kl=37809,Zl=37810,Jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,rc=37817,sc=37818,oc=37819,ac=37820,lc=37821,Io=36492,cc=36494,uc=36495,Zh=36283,dc=36284,fc=36285,hc=36286,mv=3200,gv=3201,_v=0,vv=1,Pi="",mn="srgb",qr="srgb-linear",Xo="linear",ht="srgb",mr=7680,cd=519,xv=512,bv=513,yv=514,Jh=515,Sv=516,Mv=517,Ev=518,Tv=519,ud=35044,dd="300 es",Hn=2e3,$o=2001;class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,pc=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function wv(n,e){return(n%e+e)%e}function Ua(n,e,t){return(1-t)*n+t*e}function rs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||c!==p||u!==_){let m=1-a;const h=l*f+c*p+u*_+d*g,y=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const C=Math.sqrt(S),L=Math.atan2(C,h*y);m=Math.sin(m*L)/C,a=Math.sin(a*L)/C}const x=a*y;if(l=l*m+f*x,c=c*m+p*x,u=u*m+_*x,d=d*m+g*x,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-a*p,e[t+2]=c*_+u*p+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new q,fd=new zs;class Ke{constructor(e,t,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],y=r[1],S=r[4],x=r[7],C=r[2],L=r[5],D=r[8];return s[0]=o*g+a*y+l*C,s[3]=o*m+a*S+l*L,s[6]=o*h+a*x+l*D,s[1]=c*g+u*y+d*C,s[4]=c*m+u*S+d*L,s[7]=c*h+u*x+d*D,s[2]=f*g+p*y+_*C,s[5]=f*m+p*S+_*L,s[8]=f*h+p*x+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new Ke;function Qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Av(){const n=jo("canvas");return n.style.display="block",n}const hd={};function kr(n){n in hd||(hd[n]=!0,console.warn(n))}function Rv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const pd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cv(){const n={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?Xo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qr]:{primaries:e,whitePoint:i,transfer:Xo,toXYZ:pd,fromXYZ:md,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:pd,fromXYZ:md,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const nt=Cv();function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gr;class Pv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gr===void 0&&(gr=jo("canvas")),gr.width=e.width,gr.height=e.height;const r=gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=li(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(li(t[i]/255)*255):t[i]=li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dv=0;class qc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lv=0;const Ba=new q;class Zt extends Kr{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=rr,r=rr,s=zn,o=sr,a=wn,l=hi,c=Zt.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=ks(),this.name="",this.source=new qc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Gh;Zt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(p+1)/2,C=(h+1)/2,L=(u+f)/4,D=(d+g)/4,O=(_+m)/4;return S>x&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=L/i,s=D/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=L/r,s=O/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=D/s,r=O/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iv extends Kr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Zt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new qc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends Iv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ep extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uv extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Js.copy(i.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Qs.subVectors(this.max,ss),_r.subVectors(e.a,ss),vr.subVectors(e.b,ss),xr.subVectors(e.c,ss),xi.subVectors(vr,_r),bi.subVectors(xr,vr),Xi.subVectors(_r,xr);let t=[0,-xi.z,xi.y,0,-bi.z,bi.y,0,-Xi.z,Xi.y,xi.z,0,-xi.x,bi.z,0,-bi.x,Xi.z,0,-Xi.x,-xi.y,xi.x,0,-bi.y,bi.x,0,-Xi.y,Xi.x,0];return!ka(t,_r,vr,xr,Qs)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,_r,vr,xr,Qs))?!1:(eo.crossVectors(xi,bi),t=[eo.x,eo.y,eo.z],ka(t,_r,vr,xr,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new q,new q,new q,new q,new q,new q,new q,new q],yn=new q,Js=new Hs,_r=new q,vr=new q,xr=new q,xi=new q,bi=new q,Xi=new q,ss=new q,Qs=new q,eo=new q,$i=new q;function ka(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$i.fromArray(n,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Nv=new Hs,os=new q,za=new q;class Vs{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(za)),this.expandByPoint(os.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new q,Ha=new q,to=new q,yi=new q,Va=new q,no=new q,Ga=new q;class Yc{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ha.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=yi.dot(this.direction),l=-yi.dot(to),c=yi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const g=1/u;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ha).addScaledVector(to,f),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,r,s){Va.subVectors(t,e),no.subVectors(i,e),Ga.crossVectors(Va,no);let o=this.direction.dot(Ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(no.crossVectors(yi,no));if(l<0)return null;const c=a*this.direction.dot(Va.cross(yi));if(c<0||l+c>o)return null;const u=-a*yi.dot(Ga);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,_,g,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,_,g,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,_=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,g=c*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,g=c*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,_=a*u,g=a*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=o*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fv,e,Ov)}lookAt(e,t,i){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Si.crossVectors(i,an),Si.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Si.crossVectors(i,an)),Si.normalize(),io.crossVectors(an,Si),r[0]=Si.x,r[4]=io.x,r[8]=an.x,r[1]=Si.y,r[5]=io.y,r[9]=an.y,r[2]=Si.z,r[6]=io.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],y=i[3],S=i[7],x=i[11],C=i[15],L=r[0],D=r[4],O=r[8],M=r[12],w=r[1],P=r[5],k=r[9],B=r[13],X=r[2],oe=r[6],Z=r[10],ee=r[14],W=r[3],xe=r[7],be=r[11],Ce=r[15];return s[0]=o*L+a*w+l*X+c*W,s[4]=o*D+a*P+l*oe+c*xe,s[8]=o*O+a*k+l*Z+c*be,s[12]=o*M+a*B+l*ee+c*Ce,s[1]=u*L+d*w+f*X+p*W,s[5]=u*D+d*P+f*oe+p*xe,s[9]=u*O+d*k+f*Z+p*be,s[13]=u*M+d*B+f*ee+p*Ce,s[2]=_*L+g*w+m*X+h*W,s[6]=_*D+g*P+m*oe+h*xe,s[10]=_*O+g*k+m*Z+h*be,s[14]=_*M+g*B+m*ee+h*Ce,s[3]=y*L+S*w+x*X+C*W,s[7]=y*D+S*P+x*oe+C*xe,s[11]=y*O+S*k+x*Z+C*be,s[15]=y*M+S*B+x*ee+C*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+g*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],y=d*m*c-g*f*c+g*l*p-a*m*p-d*l*h+a*f*h,S=_*f*c-u*m*c-_*l*p+o*m*p+u*l*h-o*f*h,x=u*g*c-_*d*c+_*a*p-o*g*p-u*a*h+o*d*h,C=_*d*l-u*g*l-_*a*f+o*g*f+u*a*m-o*d*m,L=t*y+i*S+r*x+s*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=y*D,e[1]=(g*f*s-d*m*s-g*r*p+i*m*p+d*r*h-i*f*h)*D,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*h+i*l*h)*D,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*D,e[4]=S*D,e[5]=(u*m*s-_*f*s+_*r*p-t*m*p-u*r*h+t*f*h)*D,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*h-t*l*h)*D,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*D,e[8]=x*D,e[9]=(_*d*s-u*g*s-_*i*p+t*g*p+u*i*h-t*d*h)*D,e[10]=(o*g*s-_*a*s+_*i*c-t*g*c-o*i*h+t*a*h)*D,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*D,e[12]=C*D,e[13]=(u*g*r-_*d*r+_*i*f-t*g*f-u*i*m+t*d*m)*D,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*D,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,_=s*d,g=o*u,m=o*d,h=a*d,y=l*c,S=l*u,x=l*d,C=i.x,L=i.y,D=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+x)*C,r[2]=(_-S)*C,r[3]=0,r[4]=(p-x)*L,r[5]=(1-(f+h))*L,r[6]=(m+y)*L,r[7]=0,r[8]=(_+S)*D,r[9]=(m-y)*D,r[10]=(1-(f+g))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const o=br.set(r[4],r[5],r[6]).length(),a=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/s,u=1/o,d=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Hn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===Hn)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===$o)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Hn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===Hn)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===$o)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const br=new q,Sn=new Ct,Fv=new q(0,0,0),Ov=new q(1,1,1),Si=new q,io=new q,an=new q,gd=new Ct,_d=new zs;class pi{constructor(e=0,t=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _d.setFromEuler(this),this.setFromQuaternion(_d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bv=0;const vd=new q,yr=new zs,Kn=new Ct,ro=new q,as=new q,kv=new q,zv=new zs,xd=new q(1,0,0),bd=new q(0,1,0),yd=new q(0,0,1),Sd={type:"added"},Hv={type:"removed"},Sr={type:"childadded",child:null},Wa={type:"childremoved",child:null};class Vt extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new q,t=new pi,i=new zs,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ke}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(xd,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(yd,e)}translateOnAxis(e,t){return vd.copy(e).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xd,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(as,ro,this.up):Kn.lookAt(ro,as,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(Kn),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sd),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hv),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sd),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new q(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new q,Zn=new q,Xa=new q,Jn=new q,Mr=new q,Er=new q,Md=new q,$a=new q,ja=new q,qa=new q,Ya=new Rt,Ka=new Rt,Za=new Rt;class Tn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mn.subVectors(e,t),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Mn.subVectors(r,t),Zn.subVectors(i,t),Xa.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Zn),l=Mn.dot(Xa),c=Zn.dot(Zn),u=Zn.dot(Xa),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ya.setScalar(0),Ka.setScalar(0),Za.setScalar(0),Ya.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,i),Za.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ya,s.x),o.addScaledVector(Ka,s.y),o.addScaledVector(Za,s.z),o}static isFrontFacing(e,t,i,r){return Mn.subVectors(i,t),Zn.subVectors(e,t),Mn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Mn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Mr.subVectors(r,i),Er.subVectors(s,i),$a.subVectors(e,i);const l=Mr.dot($a),c=Er.dot($a);if(l<=0&&c<=0)return t.copy(i);ja.subVectors(e,r);const u=Mr.dot(ja),d=Er.dot(ja);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Mr,o);qa.subVectors(e,s);const p=Mr.dot(qa),_=Er.dot(qa);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Er,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Md.subVectors(s,r),a=(d-u)/(d-u+(p-_)),t.copy(r).addScaledVector(Md,a);const h=1/(m+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(Mr,o).addScaledVector(Er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},so={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=wv(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ja(o,s,e+1/3),this.g=Ja(o,s,e),this.b=Ja(o,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=np[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return nt.workingToColorSpace(Ot.copy(this),e),Math.round(et(Ot.r*255,0,255))*65536+Math.round(et(Ot.g*255,0,255))*256+Math.round(et(Ot.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=mn){nt.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(so);const i=Ua(Mi.h,so.h,t),r=Ua(Mi.s,so.s,t),s=Ua(Mi.l,so.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new st;st.NAMES=np;let Vv=0;class Zr extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Br,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ip extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new q,oo=new pt;let Gv=0;class xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ud,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ud&&(e.usage=this.usage),e}}class rp extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sp extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pn extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wv=0;const pn=new Ct,Qa=new Vt,Tr=new q,ln=new Hs,ls=new Hs,Ut=new q;class Un extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?sp:rp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(ln.min,ls.min),ln.expandByPoint(Ut),Ut.addVectors(ln.max,ls.max),ln.expandByPoint(Ut)):(ln.expandByPoint(ls.min),ln.expandByPoint(ls.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(Tr.fromBufferAttribute(e,c),Ut.add(Tr)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new q,l[O]=new q;const c=new q,u=new q,d=new q,f=new pt,p=new pt,_=new pt,g=new q,m=new q;function h(O,M,w){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,w),f.fromBufferAttribute(s,O),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,w),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),a[O].add(g),a[M].add(g),a[w].add(g),l[O].add(m),l[M].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let O=0,M=y.length;O<M;++O){const w=y[O],P=w.start,k=w.count;for(let B=P,X=P+k;B<X;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new q,x=new q,C=new q,L=new q;function D(O){C.fromBufferAttribute(r,O),L.copy(C);const M=a[O];S.copy(M),S.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(L,M);const P=x.dot(l[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,P)}for(let O=0,M=y.length;O<M;++O){const w=y[O],P=w.start,k=w.count;for(let B=P,X=P+k;B<X;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new xn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new Ct,ji=new Yc,ao=new Vs,Td=new q,lo=new q,co=new q,uo=new q,el=new q,fo=new q,wd=new q,ho=new q;class oi extends Vt{constructor(e=new Un,t=new ip){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(el.fromBufferAttribute(d,e),o?fo.addScaledVector(el,u):fo.addScaledVector(el.sub(t),u))}t.add(fo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(ao.containsPoint(ji.origin)===!1&&(ji.intersectSphere(ao,Td)===null||ji.origin.distanceToSquared(Td)>(e.far-e.near)**2))&&(Ed.copy(s).invert(),ji.copy(e.ray).applyMatrix4(Ed),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,C=S;x<C;x+=3){const L=a.getX(x),D=a.getX(x+1),O=a.getX(x+2);r=po(this,h,e,i,c,u,d,L,D,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const y=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);r=po(this,o,e,i,c,u,d,y,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,C=S;x<C;x+=3){const L=x,D=x+1,O=x+2;r=po(this,h,e,i,c,u,d,L,D,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const y=m,S=m+1,x=m+2;r=po(this,o,e,i,c,u,d,y,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Xv(n,e,t,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;ho.copy(a),ho.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:n}}function po(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,lo),n.getVertexPosition(l,co),n.getVertexPosition(c,uo);const u=Xv(n,e,t,i,lo,co,uo,wd);if(u){const d=new q;Tn.getBarycoord(wd,lo,co,uo,d),r&&(u.uv=Tn.getInterpolatedAttribute(r,a,l,c,d,new pt)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,a,l,c,d,new pt)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,d,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};Tn.getNormal(lo,co,uo,f.normal),u.face=f,u.barycoord=d}return u}class Gs extends Un{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(u,3)),this.setAttribute("uv",new Pn(d,2));function _(g,m,h,y,S,x,C,L,D,O,M){const w=x/D,P=C/O,k=x/2,B=C/2,X=L/2,oe=D+1,Z=O+1;let ee=0,W=0;const xe=new q;for(let be=0;be<Z;be++){const Ce=be*P-B;for(let ze=0;ze<oe;ze++){const ke=ze*w-k;xe[g]=ke*y,xe[m]=Ce*S,xe[h]=X,c.push(xe.x,xe.y,xe.z),xe[g]=0,xe[m]=0,xe[h]=L>0?1:-1,u.push(xe.x,xe.y,xe.z),d.push(ze/D),d.push(1-be/O),ee+=1}}for(let be=0;be<O;be++)for(let Ce=0;Ce<D;Ce++){const ze=f+Ce+oe*be,ke=f+Ce+oe*(be+1),Ge=f+(Ce+1)+oe*(be+1),te=f+(Ce+1)+oe*be;l.push(ze,ke,te),l.push(ke,Ge,te),W+=6}a.addGroup(p,W,M),p+=W,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Yr(n[t]);for(const r in i)e[r]=i[r]}return e}function $v(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function op(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const jv={clone:Yr,merge:Xt};var qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qv,this.fragmentShader=Yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=$v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ap extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new q,Ad=new pt,Rd=new pt;class gn extends ap{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Ad,Rd),t.subVectors(Rd,Ad)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wr=-90,Ar=1;class Kv extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(wr,Ar,e,t);r.layers=this.layers,this.add(r);const s=new gn(wr,Ar,e,t);s.layers=this.layers,this.add(s);const o=new gn(wr,Ar,e,t);o.layers=this.layers,this.add(o);const a=new gn(wr,Ar,e,t);a.layers=this.layers,this.add(a);const l=new gn(wr,Ar,e,t);l.layers=this.layers,this.add(l);const c=new gn(wr,Ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class lp extends Zt{constructor(e=[],t=$r,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zv extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gs(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Li});s.uniforms.tEquirect.value=t;const o=new oi(r,s),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=zn),new Kv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class fs extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jv={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qv extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nl=new q,ex=new q,tx=new Ke;class Ji{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=nl.subVectors(i,t).cross(ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tx.getNormalMatrix(e),r=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Vs,nx=new pt(.5,.5),mo=new q;class cp{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],_=s[8],g=s[9],m=s[10],h=s[11],y=s[12],S=s[13],x=s[14],C=s[15];if(r[0].setComponents(c-o,p-u,h-_,C-y).normalize(),r[1].setComponents(c+o,p+u,h+_,C+y).normalize(),r[2].setComponents(c+a,p+d,h+g,C+S).normalize(),r[3].setComponents(c-a,p-d,h-g,C-S).normalize(),i)r[4].setComponents(l,f,m,x).normalize(),r[5].setComponents(c-l,p-f,h-m,C-x).normalize();else if(r[4].setComponents(c-l,p-f,h-m,C-x).normalize(),t===Hn)r[5].setComponents(c+l,p+f,h+m,C+x).normalize();else if(t===$o)r[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);const t=nx.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(mo.x=r.normal.x>0?e.max.x:e.min.x,mo.y=r.normal.y>0?e.max.y:e.min.y,mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class up extends Zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qo=new q,Yo=new q,Cd=new Ct,cs=new Yc,go=new Vs,il=new q,Pd=new q;class ix extends Vt{constructor(e=new Un,t=new up){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)qo.fromBufferAttribute(t,r-1),Yo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=qo.distanceTo(Yo);e.setAttribute("lineDistance",new Pn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Cd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Cd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const h=u.getX(g),y=u.getX(g+1),S=_o(this,e,cs,l,h,y,g);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(p),h=_o(this,e,cs,l,g,m,_-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const h=_o(this,e,cs,l,g,g+1,g);h&&t.push(h)}if(this.isLineLoop){const g=_o(this,e,cs,l,_-1,p,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _o(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(qo.fromBufferAttribute(a,r),Yo.fromBufferAttribute(a,s),t.distanceSqToSegment(qo,Yo,il,Pd)>i)return;il.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(il);if(!(c<e.near||c>e.far))return{distance:c,point:Pd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Dd=new q,Ld=new q;class rx extends ix{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Dd.fromBufferAttribute(t,r),Ld.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Dd.distanceTo(Ld);e.setAttribute("lineDistance",new Pn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dp extends Zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Id=new Ct,mc=new Yc,vo=new Vs,xo=new q;class sx extends Vt{constructor(e=new Un,t=new dp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;Id.copy(r).invert(),mc.copy(e.ray).applyMatrix4(Id);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,g=p;_<g;_++){const m=c.getX(_);xo.fromBufferAttribute(d,m),Ud(xo,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p;_<g;_++)xo.fromBufferAttribute(d,_),Ud(xo,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ud(n,e,t,i,r,s,o){const a=mc.distanceSqToPoint(n);if(a<t){const l=new q;mc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ox extends Zt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fp extends Zt{constructor(e,t,i=ur,r,s,o,a=Cn,l=Cn,c,u=Us,d=1){if(u!==Us&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class da extends Un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<u;h++){const y=h*f-o;for(let S=0;S<c;S++){const x=S*d-s;_.push(x,-y,0),g.push(0,0,1),m.push(S/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const S=y+c*h,x=y+c*(h+1),C=y+1+c*(h+1),L=y+1+c*h;p.push(S,x,L),p.push(x,C,L)}this.setIndex(p),this.setAttribute("position",new Pn(_,3)),this.setAttribute("normal",new Pn(g,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}class ax extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lx extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cx extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ux extends ap{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dx extends cx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fx extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Nd(n,e,t,i){const r=hx(i);switch(t){case jh:return n*e;case Yh:return n*e/r.components*r.byteLength;case Xc:return n*e/r.components*r.byteLength;case Kh:return n*e*2/r.components*r.byteLength;case $c:return n*e*2/r.components*r.byteLength;case qh:return n*e*3/r.components*r.byteLength;case wn:return n*e*4/r.components*r.byteLength;case jc:return n*e*4/r.components*r.byteLength;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(n,8)*Math.max(e,8)/2;case $l:case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Io:case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zh:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hx(n){switch(n){case hi:case Wh:return{byteLength:1,components:1};case Ls:case Xh:case Bs:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case ur:case Vc:case si:return{byteLength:4,components:1};case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);function hp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function px(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],g=d[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const g=d[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mx=`#ifdef USE_BATCHING
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
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nb=`#ifdef USE_GRADIENTMAP
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
}`,ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ob=`uniform bool receiveShadow;
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
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fb=`PhysicalMaterial material;
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
#endif`,hb=`struct PhysicalMaterial {
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
}`,pb=`
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
#endif`,mb=`#if defined( RE_IndirectDiffuse )
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
#endif`,gb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_b=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eb=`#if defined( USE_POINTS_UV )
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
#endif`,Tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`#ifdef USE_MORPHTARGETS
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
#endif`,Db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ob=`#ifdef USE_NORMALMAP
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
#endif`,Bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qb=`float getShadowMask() {
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
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`#include <common>
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
}`,yy=`#if DEPTH_PACKING == 3200
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
}`,Sy=`#define DISTANCE
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
}`,My=`#define DISTANCE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`uniform float scale;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#define LAMBERT
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
}`,Dy=`#define LAMBERT
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
}`,Ly=`#define MATCAP
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
}`,Iy=`#define MATCAP
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
}`,Uy=`#define NORMAL
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
}`,Ny=`#define NORMAL
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
}`,Fy=`#define PHONG
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
}`,Oy=`#define PHONG
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
}`,By=`#define STANDARD
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
}`,ky=`#define STANDARD
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
}`,zy=`#define TOON
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
}`,Hy=`#define TOON
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
}`,Vy=`uniform float size;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,Xy=`uniform vec3 color;
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
}`,$y=`uniform float rotation;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:_x,alphamap_pars_fragment:vx,alphatest_fragment:xx,alphatest_pars_fragment:bx,aomap_fragment:yx,aomap_pars_fragment:Sx,batching_pars_vertex:Mx,batching_vertex:Ex,begin_vertex:Tx,beginnormal_vertex:wx,bsdfs:Ax,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Ix,color_fragment:Ux,color_pars_fragment:Nx,color_pars_vertex:Fx,color_vertex:Ox,common:Bx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Vx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:$x,envmap_fragment:jx,envmap_common_pars_fragment:qx,envmap_pars_fragment:Yx,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:ab,envmap_vertex:Zx,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:eb,fog_pars_fragment:tb,gradientmap_pars_fragment:nb,lightmap_pars_fragment:ib,lights_lambert_fragment:rb,lights_lambert_pars_fragment:sb,lights_pars_begin:ob,lights_toon_fragment:lb,lights_toon_pars_fragment:cb,lights_phong_fragment:ub,lights_phong_pars_fragment:db,lights_physical_fragment:fb,lights_physical_pars_fragment:hb,lights_fragment_begin:pb,lights_fragment_maps:mb,lights_fragment_end:gb,logdepthbuf_fragment:_b,logdepthbuf_pars_fragment:vb,logdepthbuf_pars_vertex:xb,logdepthbuf_vertex:bb,map_fragment:yb,map_pars_fragment:Sb,map_particle_fragment:Mb,map_particle_pars_fragment:Eb,metalnessmap_fragment:Tb,metalnessmap_pars_fragment:wb,morphinstance_vertex:Ab,morphcolor_vertex:Rb,morphnormal_vertex:Cb,morphtarget_pars_vertex:Pb,morphtarget_vertex:Db,normal_fragment_begin:Lb,normal_fragment_maps:Ib,normal_pars_fragment:Ub,normal_pars_vertex:Nb,normal_vertex:Fb,normalmap_pars_fragment:Ob,clearcoat_normal_fragment_begin:Bb,clearcoat_normal_fragment_maps:kb,clearcoat_pars_fragment:zb,iridescence_pars_fragment:Hb,opaque_fragment:Vb,packing:Gb,premultiplied_alpha_fragment:Wb,project_vertex:Xb,dithering_fragment:$b,dithering_pars_fragment:jb,roughnessmap_fragment:qb,roughnessmap_pars_fragment:Yb,shadowmap_pars_fragment:Kb,shadowmap_pars_vertex:Zb,shadowmap_vertex:Jb,shadowmask_pars_fragment:Qb,skinbase_vertex:ey,skinning_pars_vertex:ty,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:ry,specularmap_pars_fragment:sy,tonemapping_fragment:oy,tonemapping_pars_fragment:ay,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:uy,uv_pars_vertex:dy,uv_vertex:fy,worldpos_vertex:hy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:_y,cube_vert:vy,cube_frag:xy,depth_vert:by,depth_frag:yy,distanceRGBA_vert:Sy,distanceRGBA_frag:My,equirect_vert:Ey,equirect_frag:Ty,linedashed_vert:wy,linedashed_frag:Ay,meshbasic_vert:Ry,meshbasic_frag:Cy,meshlambert_vert:Py,meshlambert_frag:Dy,meshmatcap_vert:Ly,meshmatcap_frag:Iy,meshnormal_vert:Uy,meshnormal_frag:Ny,meshphong_vert:Fy,meshphong_frag:Oy,meshphysical_vert:By,meshphysical_frag:ky,meshtoon_vert:zy,meshtoon_frag:Hy,points_vert:Vy,points_frag:Gy,shadow_vert:Wy,shadow_frag:Xy,sprite_vert:$y,sprite_frag:jy},Ee={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},kn={basic:{uniforms:Xt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Xt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Xt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Xt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Xt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Xt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Xt([Ee.points,Ee.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Xt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Xt([Ee.common,Ee.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Xt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Xt([Ee.sprite,Ee.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Xt([Ee.common,Ee.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Xt([Ee.lights,Ee.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};kn.physical={uniforms:Xt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const bo={r:0,b:0,g:0},Yi=new pi,qy=new Ct;function Yy(n,e,t,i,r,s,o){const a=new st(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function g(S){let x=!1;const C=_(S);C===null?h(a,l):C&&C.isColor&&(h(C,1),x=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const C=_(x);C&&(C.isCubeTexture||C.mapping===ua)?(u===void 0&&(u=new oi(new Gs(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Yr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Yi.copy(x.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(Yi)),u.material.toneMapped=nt.getTransfer(C.colorSpace)!==ht,(d!==C||f!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new oi(new da(2,2),new Fi({name:"BackgroundMaterial",uniforms:Yr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=nt.getTransfer(C.colorSpace)!==ht,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,x){S.getRGB(bo,op(n)),i.buffers.color.setClear(bo.r,bo.g,bo.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(a,l)},render:g,addToRenderList:m,dispose:y}}function Ky(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(w,P,k,B,X){let oe=!1;const Z=d(B,k,P);s!==Z&&(s=Z,c(s.object)),oe=p(w,B,k,X),oe&&_(w,B,k,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,x(w,P,k,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,P,k){const B=k.wireframe===!0;let X=i[w.id];X===void 0&&(X={},i[w.id]=X);let oe=X[P.id];oe===void 0&&(oe={},X[P.id]=oe);let Z=oe[B];return Z===void 0&&(Z=f(l()),oe[B]=Z),Z}function f(w){const P=[],k=[],B=[];for(let X=0;X<t;X++)P[X]=0,k[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:B,object:w,attributes:{},index:null}}function p(w,P,k,B){const X=s.attributes,oe=P.attributes;let Z=0;const ee=k.getAttributes();for(const W in ee)if(ee[W].location>=0){const be=X[W];let Ce=oe[W];if(Ce===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Ce=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Ce=w.instanceColor)),be===void 0||be.attribute!==Ce||Ce&&be.data!==Ce.data)return!0;Z++}return s.attributesNum!==Z||s.index!==B}function _(w,P,k,B){const X={},oe=P.attributes;let Z=0;const ee=k.getAttributes();for(const W in ee)if(ee[W].location>=0){let be=oe[W];be===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(be=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(be=w.instanceColor));const Ce={};Ce.attribute=be,be&&be.data&&(Ce.data=be.data),X[W]=Ce,Z++}s.attributes=X,s.attributesNum=Z,s.index=B}function g(){const w=s.newAttributes;for(let P=0,k=w.length;P<k;P++)w[P]=0}function m(w){h(w,0)}function h(w,P){const k=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;k[w]=1,B[w]===0&&(n.enableVertexAttribArray(w),B[w]=1),X[w]!==P&&(n.vertexAttribDivisor(w,P),X[w]=P)}function y(){const w=s.newAttributes,P=s.enabledAttributes;for(let k=0,B=P.length;k<B;k++)P[k]!==w[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function S(w,P,k,B,X,oe,Z){Z===!0?n.vertexAttribIPointer(w,P,k,X,oe):n.vertexAttribPointer(w,P,k,B,X,oe)}function x(w,P,k,B){g();const X=B.attributes,oe=k.getAttributes(),Z=P.defaultAttributeValues;for(const ee in oe){const W=oe[ee];if(W.location>=0){let xe=X[ee];if(xe===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor)),xe!==void 0){const be=xe.normalized,Ce=xe.itemSize,ze=e.get(xe);if(ze===void 0)continue;const ke=ze.buffer,Ge=ze.type,te=ze.bytesPerElement,me=Ge===n.INT||Ge===n.UNSIGNED_INT||xe.gpuType===Vc;if(xe.isInterleavedBufferAttribute){const U=xe.data,le=U.stride,re=xe.offset;if(U.isInstancedInterleavedBuffer){for(let de=0;de<W.locationSize;de++)h(W.location+de,U.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let de=0;de<W.locationSize;de++)S(W.location+de,Ce/W.locationSize,Ge,be,le*te,(re+Ce/W.locationSize*de)*te,me)}else{if(xe.isInstancedBufferAttribute){for(let U=0;U<W.locationSize;U++)h(W.location+U,xe.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let U=0;U<W.locationSize;U++)m(W.location+U);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let U=0;U<W.locationSize;U++)S(W.location+U,Ce/W.locationSize,Ge,be,Ce*te,Ce/W.locationSize*U*te,me)}}else if(Z!==void 0){const be=Z[ee];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(W.location,be);break;case 3:n.vertexAttrib3fv(W.location,be);break;case 4:n.vertexAttrib4fv(W.location,be);break;default:n.vertexAttrib1fv(W.location,be)}}}}y()}function C(){O();for(const w in i){const P=i[w];for(const k in P){const B=P[k];for(const X in B)u(B[X].object),delete B[X];delete P[k]}delete i[w]}}function L(w){if(i[w.id]===void 0)return;const P=i[w.id];for(const k in P){const B=P[k];for(const X in B)u(B[X].object),delete B[X];delete P[k]}delete i[w.id]}function D(w){for(const P in i){const k=i[P];if(k[w.id]===void 0)continue;const B=k[w.id];for(const X in B)u(B[X].object),delete B[X];delete k[w.id]}}function O(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Zy(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*f[g];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==wn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const O=D===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==hi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==si&&!O)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:C,maxSamples:L}}function Qy(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ji,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,S=y*4;let x=h.clippingState||null;l.value=x,x=u(_,f,S,p);for(let C=0;C!==S;++C)x[C]=t[C];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,x=p;S!==g;++S,x+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function eS(n){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=$r:a===kl&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bl||a===kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Zv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Lr=4,Fd=[.125,.215,.35,.446,.526,.582],nr=20,rl=new ux,Od=new st;let sl=null,ol=0,al=0,ll=!1;const Qi=(1+Math.sqrt(5))/2,Rr=1/Qi,Bd=[new q(-Qi,Rr,0),new q(Qi,Rr,0),new q(-Rr,0,Qi),new q(Rr,0,Qi),new q(0,Qi,-Rr),new q(0,Qi,Rr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],tS=new q;class kd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=tS}=s;sl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,ol,al),this._renderer.xr.enabled=ll,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Bs,format:wn,colorSpace:qr,depthBuffer:!1},r=zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nS(s)),this._blurMaterial=iS(s,e,t)}return r}_compileMaterial(e){const t=new oi(this._lodPlanes[0],e);this._renderer.compile(t,rl)}_sceneToCubeUV(e,t,i,r,s){const l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Od),d.toneMapping=Ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const g=new ip({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new oi(new Gs,g);let h=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,h=!0):(g.color.copy(Od),h=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const C=this._cubeSize;yo(r,x*C,S>2?C:0,C,C),d.setRenderTarget(r),h&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$r||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new oi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;yo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,rl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bd[(r-s-1)%Bd.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new oi(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*nr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):nr;m>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);const h=[];let y=0;for(let D=0;D<nr;++D){const O=D/g,M=Math.exp(-O*O/2);h.push(M),D===0?y+=M:D<m&&(y+=2*M)}for(let D=0;D<h.length;D++)h[D]=h[D]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;const x=this._sizeLods[r],C=3*x*(r>S-Lr?r-S+Lr:0),L=4*(this._cubeSize-x);yo(t,C,L,3*x,2*x),l.setRenderTarget(t),l.render(d,rl)}}function nS(n){const e=[],t=[],i=[];let r=n;const s=n-Lr+1+Fd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Lr?l=Fd[o-n+Lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,g=3,m=2,h=1,y=new Float32Array(g*_*p),S=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let L=0;L<p;L++){const D=L%3*2/3-1,O=L>2?0:-1,M=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];y.set(M,g*_*L),S.set(f,m*_*L);const w=[L,L,L,L,L,L];x.set(w,h*_*L)}const C=new Un;C.setAttribute("position",new xn(y,g)),C.setAttribute("uv",new xn(S,m)),C.setAttribute("faceIndex",new xn(x,h)),e.push(C),r>Lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zd(n,e,t){const i=new dr(n,e,t);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iS(n,e,t){const i=new Float32Array(nr),r=new q(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Hd(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Vd(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function rS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bl||l===kl,u=l===$r||l===jr;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new kd(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new kd(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&kr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oS(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let S=0,x=y.length;S<x;S+=3){const C=y[S+0],L=y[S+1],D=y[S+2];f.push(C,L,L,D,D,C)}}else if(_!==void 0){const y=_.array;g=_.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const C=S+0,L=S+1,D=S+2;f.push(C,L,L,D,D,C)}}else return;const m=new(Qh(f)?sp:rp)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function aS(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*o,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function d(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,_);let h=0;for(let y=0;y<_;y++)h+=p[y]*g[y];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function lS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cS(n,e,t){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let w=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var p=w;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,L=1;C>e.maxTextureSize&&(L=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const D=new Float32Array(C*L*4*d),O=new ep(D,C,L,d);O.type=si,O.needsUpdate=!0;const M=x*4;for(let P=0;P<d;P++){const k=h[P],B=y[P],X=S[P],oe=C*L*4*P;for(let Z=0;Z<k.count;Z++){const ee=Z*M;_===!0&&(r.fromBufferAttribute(k,Z),D[oe+ee+0]=r.x,D[oe+ee+1]=r.y,D[oe+ee+2]=r.z,D[oe+ee+3]=0),g===!0&&(r.fromBufferAttribute(B,Z),D[oe+ee+4]=r.x,D[oe+ee+5]=r.y,D[oe+ee+6]=r.z,D[oe+ee+7]=0),m===!0&&(r.fromBufferAttribute(X,Z),D[oe+ee+8]=r.x,D[oe+ee+9]=r.y,D[oe+ee+10]=r.z,D[oe+ee+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new pt(C,L)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function uS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const pp=new Zt,Gd=new fp(1,1),mp=new ep,gp=new Uv,_p=new lp,Wd=[],Xd=[],$d=new Float32Array(16),jd=new Float32Array(9),qd=new Float32Array(4);function Jr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wd[r];if(s===void 0&&(s=new Float32Array(r),Wd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fa(n,e){let t=Xd[e];t===void 0&&(t=new Int32Array(e),Xd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function pS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function mS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;qd.set(i),n.uniformMatrix2fv(this.addr,!1,qd),It(t,i)}}function gS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;jd.set(i),n.uniformMatrix3fv(this.addr,!1,jd),It(t,i)}}function _S(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;$d.set(i),n.uniformMatrix4fv(this.addr,!1,$d),It(t,i)}}function vS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function bS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function yS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function SS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function wS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gd.compareFunction=Jh,s=Gd):s=pp,t.setTexture2D(e||s,r)}function AS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||gp,r)}function RS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_p,r)}function CS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mp,r)}function PS(n){switch(n){case 5126:return dS;case 35664:return fS;case 35665:return hS;case 35666:return pS;case 35674:return mS;case 35675:return gS;case 35676:return _S;case 5124:case 35670:return vS;case 35667:case 35671:return xS;case 35668:case 35672:return bS;case 35669:case 35673:return yS;case 5125:return SS;case 36294:return MS;case 36295:return ES;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return AS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}function DS(n,e){n.uniform1fv(this.addr,e)}function LS(n,e){const t=Jr(e,this.size,2);n.uniform2fv(this.addr,t)}function IS(n,e){const t=Jr(e,this.size,3);n.uniform3fv(this.addr,t)}function US(n,e){const t=Jr(e,this.size,4);n.uniform4fv(this.addr,t)}function NS(n,e){const t=Jr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FS(n,e){const t=Jr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OS(n,e){const t=Jr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BS(n,e){n.uniform1iv(this.addr,e)}function kS(n,e){n.uniform2iv(this.addr,e)}function zS(n,e){n.uniform3iv(this.addr,e)}function HS(n,e){n.uniform4iv(this.addr,e)}function VS(n,e){n.uniform1uiv(this.addr,e)}function GS(n,e){n.uniform2uiv(this.addr,e)}function WS(n,e){n.uniform3uiv(this.addr,e)}function XS(n,e){n.uniform4uiv(this.addr,e)}function $S(n,e,t){const i=this.cache,r=e.length,s=fa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||pp,s[o])}function jS(n,e,t){const i=this.cache,r=e.length,s=fa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||gp,s[o])}function qS(n,e,t){const i=this.cache,r=e.length,s=fa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_p,s[o])}function YS(n,e,t){const i=this.cache,r=e.length,s=fa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mp,s[o])}function KS(n){switch(n){case 5126:return DS;case 35664:return LS;case 35665:return IS;case 35666:return US;case 35674:return NS;case 35675:return FS;case 35676:return OS;case 5124:case 35670:return BS;case 35667:case 35671:return kS;case 35668:case 35672:return zS;case 35669:case 35673:return HS;case 5125:return VS;case 36294:return GS;case 36295:return WS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return YS}}class ZS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=PS(t.type)}}class JS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KS(t.type)}}class QS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Yd(n,e){n.seq.push(e),n.map[e.id]=e}function eM(n,e,t){const i=n.name,r=i.length;for(cl.lastIndex=0;;){const s=cl.exec(i),o=cl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yd(t,c===void 0?new ZS(a,n,e):new JS(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new QS(a),Yd(t,d)),t=d}}}class Uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);eM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Kd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tM=37297;let nM=0;function iM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Zd=new Ke;function rM(n){nt._getMatrix(Zd,nt.workingColorSpace,n);const e=`mat3( ${Zd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Xo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+iM(n.getShaderSource(e),a)}else return s}function sM(n,e){const t=rM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oM(n,e){let t;switch(e){case av:t="Linear";break;case lv:t="Reinhard";break;case cv:t="Cineon";break;case uv:t="ACESFilmic";break;case fv:t="AgX";break;case hv:t="Neutral";break;case dv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const So=new q;function aM(){nt.getLuminanceCoefficients(So);const n=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function cM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hs(n){return n!==""}function Qd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(dM,hM)}const fM=new Map;function hM(n,e){let t=Ze[e];if(t===void 0){const i=fM.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const pM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(n){return n.replace(pM,mM)}function mM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function gM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===z_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function _M(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $r:case jr:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function xM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case sv:e="ENVMAP_BLENDING_MIX";break;case ov:e="ENVMAP_BLENDING_ADD";break}return e}function bM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gM(t),c=_M(t),u=vM(t),d=xM(t),f=bM(t),p=lM(t),_=cM(s),g=r.createProgram();let m,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hs).join(`
`),h.length>0&&(h+=`
`)):(m=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),h=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ii?oM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,sM("linearToOutputTexel",t.outputColorSpace),aM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),o=gc(o),o=Qd(o,t),o=ef(o,t),a=gc(a),a=Qd(a,t),a=ef(a,t),o=tf(o),a=tf(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=y+m+o,x=y+h+a,C=Kd(r,r.VERTEX_SHADER,S),L=Kd(r,r.FRAGMENT_SHADER,x);r.attachShader(g,C),r.attachShader(g,L),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function D(P){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(L)||"",oe=k.trim(),Z=B.trim(),ee=X.trim();let W=!0,xe=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,L);else{const be=Jd(r,C,"vertex"),Ce=Jd(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+oe+`
`+be+`
`+Ce)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(Z===""||ee==="")&&(xe=!1);xe&&(P.diagnostics={runnable:W,programLog:oe,vertexShader:{log:Z,prefix:m},fragmentShader:{log:ee,prefix:h}})}r.deleteShader(C),r.deleteShader(L),O=new Uo(r,g),M=uM(r,g)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,tM)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=L,this}let SM=0;class MM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new EM(e),t.set(e,i)),i}}class EM{constructor(e){this.id=SM++,this.code=e,this.usedTimes=0}}function TM(n,e,t,i,r,s,o){const a=new tp,l=new MM,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,w,P,k,B){const X=k.fog,oe=B.geometry,Z=M.isMeshStandardMaterial?k.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),W=ee&&ee.mapping===ua?ee.image.height:null,xe=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const be=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ce=be!==void 0?be.length:0;let ze=0;oe.morphAttributes.position!==void 0&&(ze=1),oe.morphAttributes.normal!==void 0&&(ze=2),oe.morphAttributes.color!==void 0&&(ze=3);let ke,Ge,te,me;if(xe){const lt=kn[xe];ke=lt.vertexShader,Ge=lt.fragmentShader}else ke=M.vertexShader,Ge=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const U=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),re=B.isInstancedMesh===!0,de=B.isBatchedMesh===!0,Be=!!M.map,A=!!M.matcap,v=!!ee,N=!!M.aoMap,G=!!M.lightMap,Q=!!M.bumpMap,V=!!M.normalMap,fe=!!M.displacementMap,K=!!M.emissiveMap,ae=!!M.metalnessMap,ce=!!M.roughnessMap,we=M.anisotropy>0,E=M.clearcoat>0,b=M.dispersion>0,I=M.iridescence>0,$=M.sheen>0,se=M.transmission>0,j=we&&!!M.anisotropyMap,Re=E&&!!M.clearcoatMap,he=E&&!!M.clearcoatNormalMap,Pe=E&&!!M.clearcoatRoughnessMap,De=I&&!!M.iridescenceMap,pe=I&&!!M.iridescenceThicknessMap,Te=$&&!!M.sheenColorMap,Ne=$&&!!M.sheenRoughnessMap,Le=!!M.specularMap,Se=!!M.specularColorMap,je=!!M.specularIntensityMap,F=se&&!!M.transmissionMap,ve=se&&!!M.thicknessMap,ye=!!M.gradientMap,Ue=!!M.alphaMap,ge=M.alphaTest>0,ue=!!M.alphaHash,Oe=!!M.extensions;let Ye=Ii;M.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const _t={shaderID:xe,shaderType:M.type,shaderName:M.name,vertexShader:ke,fragmentShader:Ge,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:de,batchingColor:de&&B._colorsTexture!==null,instancing:re,instancingColor:re&&B.instanceColor!==null,instancingMorph:re&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:qr,alphaToCoverage:!!M.alphaToCoverage,map:Be,matcap:A,envMap:v,envMapMode:v&&ee.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:G,bumpMap:Q,normalMap:V,displacementMap:f&&fe,emissiveMap:K,normalMapObjectSpace:V&&M.normalMapType===vv,normalMapTangentSpace:V&&M.normalMapType===_v,metalnessMap:ae,roughnessMap:ce,anisotropy:we,anisotropyMap:j,clearcoat:E,clearcoatMap:Re,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:b,iridescence:I,iridescenceMap:De,iridescenceThicknessMap:pe,sheen:$,sheenColorMap:Te,sheenRoughnessMap:Ne,specularMap:Le,specularColorMap:Se,specularIntensityMap:je,transmission:se,transmissionMap:F,thicknessMap:ve,gradientMap:ye,opaque:M.transparent===!1&&M.blending===Br&&M.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ge,alphaHash:ue,combine:M.combine,mapUv:Be&&g(M.map.channel),aoMapUv:N&&g(M.aoMap.channel),lightMapUv:G&&g(M.lightMap.channel),bumpMapUv:Q&&g(M.bumpMap.channel),normalMapUv:V&&g(M.normalMap.channel),displacementMapUv:fe&&g(M.displacementMap.channel),emissiveMapUv:K&&g(M.emissiveMap.channel),metalnessMapUv:ae&&g(M.metalnessMap.channel),roughnessMapUv:ce&&g(M.roughnessMap.channel),anisotropyMapUv:j&&g(M.anisotropyMap.channel),clearcoatMapUv:Re&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(M.sheenRoughnessMap.channel),specularMapUv:Le&&g(M.specularMap.channel),specularColorMapUv:Se&&g(M.specularColorMap.channel),specularIntensityMapUv:je&&g(M.specularIntensityMap.channel),transmissionMapUv:F&&g(M.transmissionMap.channel),thicknessMapUv:ve&&g(M.thicknessMap.channel),alphaMapUv:Ue&&g(M.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(V||we),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!oe.attributes.uv&&(Be||Ue),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:B.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Be&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ht,decodeVideoTextureEmissive:K&&M.emissiveMap.isVideoTexture===!0&&nt.getTransfer(M.emissiveMap.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ri,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)w.push(P),w.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(w,M),S(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function S(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const w=_[M.type];let P;if(w){const k=kn[w];P=jv.clone(k.uniforms)}else P=M.uniforms;return P}function C(M,w){let P;for(let k=0,B=u.length;k<B;k++){const X=u[k];if(X.cacheKey===w){P=X,++P.usedTimes;break}}return P===void 0&&(P=new yM(n,w,M,s),u.push(P)),P}function L(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function D(M){l.remove(M)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:C,releaseProgram:L,releaseShaderCache:D,programs:u,dispose:O}}function wM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function AM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,g,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||AM),i.length>1&&i.sort(f||rf),r.length>1&&r.sort(f||rf)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function RM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new sf,n.set(i,[o])):r>=s.length?(o=new sf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function CM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new st};break;case"SpotLight":t={position:new q,direction:new q,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function PM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DM=0;function LM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IM(n){const e=new CM,t=PM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Ct,o=new Ct;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,g=0,m=0,h=0,y=0,S=0,x=0,C=0,L=0,D=0;c.sort(LM);for(let M=0,w=c.length;M<w;M++){const P=c[M],k=P.color,B=P.intensity,X=P.distance,oe=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=k.r*B,d+=k.g*B,f+=k.b*B;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],B);D++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,W=t.get(P);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=P.shadow.matrix,y++}i.directional[p]=Z,p++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(k).multiplyScalar(B),Z.distance=X,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[g]=Z;const ee=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,ee.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[g]=ee.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=oe,x++}g++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(k).multiplyScalar(B),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Z,m++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const ee=P.shadow,W=t.get(P);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=oe,i.pointShadowMatrix[_]=P.shadow.matrix,S++}i.point[_]=Z,_++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(B),Z.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[h]=Z,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==g||O.rectAreaLength!==m||O.hemiLength!==h||O.numDirectionalShadows!==y||O.numPointShadows!==S||O.numSpotShadows!==x||O.numSpotMaps!==C||O.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,O.directionalLength=p,O.pointLength=_,O.spotLength=g,O.rectAreaLength=m,O.hemiLength=h,O.numDirectionalShadows=y,O.numPointShadows=S,O.numSpotShadows=x,O.numSpotMaps=C,O.numLightProbes=D,i.version=DM++)}function l(c,u){let d=0,f=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const S=c[h];if(S.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(S.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function of(n){const e=new IM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function UM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new of(n),e.set(r,[a])):s>=o.length?(a=new of(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const NM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
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
}`;function OM(n,e,t){let i=new cp;const r=new pt,s=new pt,o=new Rt,a=new ax({depthPacking:gv}),l=new lx,c={},u=t.maxTextureSize,d={[Ni]:rn,[rn]:Ni,[ri]:ri},f=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:NM,fragmentShader:FM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Un;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new oi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let h=this.type;this.render=function(L,D,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Li),k.buffers.depth.getReversed()?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=h!==Qn&&this.type===Qn,X=h===Qn&&this.type!==Qn;for(let oe=0,Z=L.length;oe<Z;oe++){const ee=L[oe],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const xe=W.getFrameExtents();if(r.multiply(xe),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/xe.x),r.x=s.x*xe.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/xe.y),r.y=s.y*xe.y,W.mapSize.y=s.y)),W.map===null||B===!0||X===!0){const Ce=this.type!==Qn?{minFilter:Cn,magFilter:Cn}:{};W.map!==null&&W.map.dispose(),W.map=new dr(r.x,r.y,Ce),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const be=W.getViewportCount();for(let Ce=0;Ce<be;Ce++){const ze=W.getViewport(Ce);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),k.viewport(o),W.updateMatrices(ee,Ce),i=W.getFrustum(),x(D,O,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===Qn&&y(W,O),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,w,P)};function y(L,D){const O=e.update(g);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new dr(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(D,null,O,f,g,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(D,null,O,p,g,null)}function S(L,D,O,M){let w=null;const P=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)w=P;else if(w=O.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=w.uuid,B=D.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let oe=X[B];oe===void 0&&(oe=w.clone(),X[B]=oe,D.addEventListener("dispose",C)),w=oe}if(w.visible=D.visible,w.wireframe=D.wireframe,M===Qn?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:d[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=n.properties.get(w);k.light=O}return w}function x(L,D,O,M,w){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===Qn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const B=e.update(L),X=L.material;if(Array.isArray(X)){const oe=B.groups;for(let Z=0,ee=oe.length;Z<ee;Z++){const W=oe[Z],xe=X[W.materialIndex];if(xe&&xe.visible){const be=S(L,xe,M,w);L.onBeforeShadow(n,L,D,O,B,be,W),n.renderBufferDirect(O,null,B,be,L,W),L.onAfterShadow(n,L,D,O,B,be,W)}}}else if(X.visible){const oe=S(L,X,M,w);L.onBeforeShadow(n,L,D,O,B,oe,null),n.renderBufferDirect(O,null,B,oe,L,null),L.onAfterShadow(n,L,D,O,B,oe,null)}}const k=L.children;for(let B=0,X=k.length;B<X;B++)x(k[B],D,O,M,w)}function C(L){L.target.removeEventListener("dispose",C);for(const O in c){const M=c[O],w=L.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const BM={[Dl]:Ll,[Il]:Fl,[Ul]:Ol,[Xr]:Nl,[Ll]:Dl,[Fl]:Il,[Ol]:Ul,[Nl]:Xr};function kM(n,e){function t(){let F=!1;const ve=new Rt;let ye=null;const Ue=new Rt(0,0,0,0);return{setMask:function(ge){ye!==ge&&!F&&(n.colorMask(ge,ge,ge,ge),ye=ge)},setLocked:function(ge){F=ge},setClear:function(ge,ue,Oe,Ye,_t){_t===!0&&(ge*=Ye,ue*=Ye,Oe*=Ye),ve.set(ge,ue,Oe,Ye),Ue.equals(ve)===!1&&(n.clearColor(ge,ue,Oe,Ye),Ue.copy(ve))},reset:function(){F=!1,ye=null,Ue.set(-1,0,0,0)}}}function i(){let F=!1,ve=!1,ye=null,Ue=null,ge=null;return{setReversed:function(ue){if(ve!==ue){const Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ve=ue;const Ye=ge;ge=null,this.setClear(Ye)}},getReversed:function(){return ve},setTest:function(ue){ue?U(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(ue){ye!==ue&&!F&&(n.depthMask(ue),ye=ue)},setFunc:function(ue){if(ve&&(ue=BM[ue]),Ue!==ue){switch(ue){case Dl:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case Xr:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=ue}},setLocked:function(ue){F=ue},setClear:function(ue){ge!==ue&&(ve&&(ue=1-ue),n.clearDepth(ue),ge=ue)},reset:function(){F=!1,ye=null,Ue=null,ge=null,ve=!1}}}function r(){let F=!1,ve=null,ye=null,Ue=null,ge=null,ue=null,Oe=null,Ye=null,_t=null;return{setTest:function(lt){F||(lt?U(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(lt){ve!==lt&&!F&&(n.stencilMask(lt),ve=lt)},setFunc:function(lt,Wn,Nn){(ye!==lt||Ue!==Wn||ge!==Nn)&&(n.stencilFunc(lt,Wn,Nn),ye=lt,Ue=Wn,ge=Nn)},setOp:function(lt,Wn,Nn){(ue!==lt||Oe!==Wn||Ye!==Nn)&&(n.stencilOp(lt,Wn,Nn),ue=lt,Oe=Wn,Ye=Nn)},setLocked:function(lt){F=lt},setClear:function(lt){_t!==lt&&(n.clearStencil(lt),_t=lt)},reset:function(){F=!1,ve=null,ye=null,Ue=null,ge=null,ue=null,Oe=null,Ye=null,_t=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,h=null,y=null,S=null,x=null,C=null,L=null,D=new st(0,0,0),O=0,M=!1,w=null,P=null,k=null,B=null,X=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=ee>=2);let xe=null,be={};const Ce=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),ke=new Rt().fromArray(Ce),Ge=new Rt().fromArray(ze);function te(F,ve,ye,Ue){const ge=new Uint8Array(4),ue=n.createTexture();n.bindTexture(F,ue),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<ye;Oe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ve+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ue}const me={};me[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(Xr),Q(!1),V(od),U(n.CULL_FACE),N(Li);function U(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function le(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function re(F,ve){return d[F]!==ve?(n.bindFramebuffer(F,ve),d[F]=ve,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ve),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function de(F,ve){let ye=p,Ue=!1;if(F){ye=f.get(ve),ye===void 0&&(ye=[],f.set(ve,ye));const ge=F.textures;if(ye.length!==ge.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Oe=ge.length;ue<Oe;ue++)ye[ue]=n.COLOR_ATTACHMENT0+ue;ye.length=ge.length,Ue=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(ye)}function Be(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const A={[tr]:n.FUNC_ADD,[V_]:n.FUNC_SUBTRACT,[G_]:n.FUNC_REVERSE_SUBTRACT};A[W_]=n.MIN,A[X_]=n.MAX;const v={[$_]:n.ZERO,[j_]:n.ONE,[q_]:n.SRC_COLOR,[Cl]:n.SRC_ALPHA,[ev]:n.SRC_ALPHA_SATURATE,[J_]:n.DST_COLOR,[K_]:n.DST_ALPHA,[Y_]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[Q_]:n.ONE_MINUS_DST_COLOR,[Z_]:n.ONE_MINUS_DST_ALPHA,[tv]:n.CONSTANT_COLOR,[nv]:n.ONE_MINUS_CONSTANT_COLOR,[iv]:n.CONSTANT_ALPHA,[rv]:n.ONE_MINUS_CONSTANT_ALPHA};function N(F,ve,ye,Ue,ge,ue,Oe,Ye,_t,lt){if(F===Li){g===!0&&(le(n.BLEND),g=!1);return}if(g===!1&&(U(n.BLEND),g=!0),F!==H_){if(F!==m||lt!==M){if((h!==tr||x!==tr)&&(n.blendEquation(n.FUNC_ADD),h=tr,x=tr),lt)switch(F){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFunc(n.ONE,n.ONE);break;case ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ld:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ad:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ld:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,S=null,C=null,L=null,D.set(0,0,0),O=0,m=F,M=lt}return}ge=ge||ve,ue=ue||ye,Oe=Oe||Ue,(ve!==h||ge!==x)&&(n.blendEquationSeparate(A[ve],A[ge]),h=ve,x=ge),(ye!==y||Ue!==S||ue!==C||Oe!==L)&&(n.blendFuncSeparate(v[ye],v[Ue],v[ue],v[Oe]),y=ye,S=Ue,C=ue,L=Oe),(Ye.equals(D)===!1||_t!==O)&&(n.blendColor(Ye.r,Ye.g,Ye.b,_t),D.copy(Ye),O=_t),m=F,M=!1}function G(F,ve){F.side===ri?le(n.CULL_FACE):U(n.CULL_FACE);let ye=F.side===rn;ve&&(ye=!ye),Q(ye),F.blending===Br&&F.transparent===!1?N(Li):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ue=F.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),K(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(F){w!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),w=F)}function V(F){F!==B_?(U(n.CULL_FACE),F!==P&&(F===od?n.cullFace(n.BACK):F===k_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),P=F}function fe(F){F!==k&&(Z&&n.lineWidth(F),k=F)}function K(F,ve,ye){F?(U(n.POLYGON_OFFSET_FILL),(B!==ve||X!==ye)&&(n.polygonOffset(ve,ye),B=ve,X=ye)):le(n.POLYGON_OFFSET_FILL)}function ae(F){F?U(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function ce(F){F===void 0&&(F=n.TEXTURE0+oe-1),xe!==F&&(n.activeTexture(F),xe=F)}function we(F,ve,ye){ye===void 0&&(xe===null?ye=n.TEXTURE0+oe-1:ye=xe);let Ue=be[ye];Ue===void 0&&(Ue={type:void 0,texture:void 0},be[ye]=Ue),(Ue.type!==F||Ue.texture!==ve)&&(xe!==ye&&(n.activeTexture(ye),xe=ye),n.bindTexture(F,ve||me[F]),Ue.type=F,Ue.texture=ve)}function E(){const F=be[xe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){ke.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ke.copy(F))}function Ne(F){Ge.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ge.copy(F))}function Le(F,ve){let ye=c.get(ve);ye===void 0&&(ye=new WeakMap,c.set(ve,ye));let Ue=ye.get(F);Ue===void 0&&(Ue=n.getUniformBlockIndex(ve,F.name),ye.set(F,Ue))}function Se(F,ve){const Ue=c.get(ve).get(F);l.get(ve)!==Ue&&(n.uniformBlockBinding(ve,Ue,F.__bindingPointIndex),l.set(ve,Ue))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},xe=null,be={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,h=null,y=null,S=null,x=null,C=null,L=null,D=new st(0,0,0),O=0,M=!1,w=null,P=null,k=null,B=null,X=null,ke.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:U,disable:le,bindFramebuffer:re,drawBuffers:de,useProgram:Be,setBlending:N,setMaterial:G,setFlipSided:Q,setCullFace:V,setLineWidth:fe,setPolygonOffset:K,setScissorTest:ae,activeTexture:ce,bindTexture:we,unbindTexture:E,compressedTexImage2D:b,compressedTexImage3D:I,texImage2D:De,texImage3D:pe,updateUBOMapping:Le,uniformBlockBinding:Se,texStorage2D:he,texStorage3D:Pe,texSubImage2D:$,texSubImage3D:se,compressedTexSubImage2D:j,compressedTexSubImage3D:Re,scissor:Te,viewport:Ne,reset:je}}function zM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,b){return p?new OffscreenCanvas(E,b):jo("canvas")}function g(E,b,I){let $=1;const se=we(E);if((se.width>I||se.height>I)&&($=I/Math.max(se.width,se.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor($*se.width),Re=Math.floor($*se.height);d===void 0&&(d=_(j,Re));const he=b?_(j,Re):d;return he.width=j,he.height=Re,he.getContext("2d").drawImage(E,0,0,j,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+j+"x"+Re+")."),he}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function m(E){return E.generateMipmaps}function h(E){n.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,b,I,$,se=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=b;if(b===n.RED&&(I===n.FLOAT&&(j=n.R32F),I===n.HALF_FLOAT&&(j=n.R16F),I===n.UNSIGNED_BYTE&&(j=n.R8)),b===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.R8UI),I===n.UNSIGNED_SHORT&&(j=n.R16UI),I===n.UNSIGNED_INT&&(j=n.R32UI),I===n.BYTE&&(j=n.R8I),I===n.SHORT&&(j=n.R16I),I===n.INT&&(j=n.R32I)),b===n.RG&&(I===n.FLOAT&&(j=n.RG32F),I===n.HALF_FLOAT&&(j=n.RG16F),I===n.UNSIGNED_BYTE&&(j=n.RG8)),b===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RG8UI),I===n.UNSIGNED_SHORT&&(j=n.RG16UI),I===n.UNSIGNED_INT&&(j=n.RG32UI),I===n.BYTE&&(j=n.RG8I),I===n.SHORT&&(j=n.RG16I),I===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGB8UI),I===n.UNSIGNED_SHORT&&(j=n.RGB16UI),I===n.UNSIGNED_INT&&(j=n.RGB32UI),I===n.BYTE&&(j=n.RGB8I),I===n.SHORT&&(j=n.RGB16I),I===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),I===n.UNSIGNED_INT&&(j=n.RGBA32UI),I===n.BYTE&&(j=n.RGBA8I),I===n.SHORT&&(j=n.RGBA16I),I===n.INT&&(j=n.RGBA32I)),b===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),b===n.RGBA){const Re=se?Xo:nt.getTransfer($);I===n.FLOAT&&(j=n.RGBA32F),I===n.HALF_FLOAT&&(j=n.RGBA16F),I===n.UNSIGNED_BYTE&&(j=Re===ht?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(E,b){let I;return E?b===null||b===ur||b===Is?I=n.DEPTH24_STENCIL8:b===si?I=n.DEPTH32F_STENCIL8:b===Ls&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ur||b===Is?I=n.DEPTH_COMPONENT24:b===si?I=n.DEPTH_COMPONENT32F:b===Ls&&(I=n.DEPTH_COMPONENT16),I}function C(E,b){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Cn&&E.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function L(E){const b=E.target;b.removeEventListener("dispose",L),O(b),b.isVideoTexture&&u.delete(b)}function D(E){const b=E.target;b.removeEventListener("dispose",D),w(b)}function O(E){const b=i.get(E);if(b.__webglInit===void 0)return;const I=E.source,$=f.get(I);if($){const se=$[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(E),Object.keys($).length===0&&f.delete(I)}i.remove(E)}function M(E){const b=i.get(E);n.deleteTexture(b.__webglTexture);const I=E.source,$=f.get(I);delete $[b.__cacheKey],o.memory.textures--}function w(E){const b=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let se=0;se<b.__webglFramebuffer[$].length;se++)n.deleteFramebuffer(b.__webglFramebuffer[$][se]);else n.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)n.deleteFramebuffer(b.__webglFramebuffer[$]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const I=E.textures;for(let $=0,se=I.length;$<se;$++){const j=i.get(I[$]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(I[$])}i.remove(E)}let P=0;function k(){P=0}function B(){const E=P;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),P+=1,E}function X(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function oe(E,b){const I=i.get(E);if(E.isVideoTexture&&ae(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(I,E,b);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+b)}function Z(E,b){const I=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){me(I,E,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+b)}function ee(E,b){const I=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){me(I,E,b);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+b)}function W(E,b){const I=i.get(E);if(E.version>0&&I.__version!==E.version){U(I,E,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+b)}const xe={[zl]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},be={[Cn]:n.NEAREST,[pv]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[sr]:n.LINEAR_MIPMAP_LINEAR},Ce={[xv]:n.NEVER,[Tv]:n.ALWAYS,[bv]:n.LESS,[Jh]:n.LEQUAL,[yv]:n.EQUAL,[Ev]:n.GEQUAL,[Sv]:n.GREATER,[Mv]:n.NOTEQUAL};function ze(E,b){if(b.type===si&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===La||b.magFilter===Zs||b.magFilter===sr||b.minFilter===zn||b.minFilter===La||b.minFilter===Zs||b.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,xe[b.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,xe[b.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,xe[b.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,be[b.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Cn||b.minFilter!==Zs&&b.minFilter!==sr||b.type===si&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ke(E,b){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",L));const $=b.source;let se=f.get($);se===void 0&&(se={},f.set($,se));const j=X(b);if(j!==E.__cacheKey){se[j]===void 0&&(se[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),se[j].usedTimes++;const Re=se[E.__cacheKey];Re!==void 0&&(se[E.__cacheKey].usedTimes--,Re.usedTimes===0&&M(b)),E.__cacheKey=j,E.__webglTexture=se[j].texture}return I}function Ge(E,b,I){return Math.floor(Math.floor(E/I)/b)}function te(E,b,I,$){const j=E.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,I,$,b.data);else{j.sort((pe,Te)=>pe.start-Te.start);let Re=0;for(let pe=1;pe<j.length;pe++){const Te=j[Re],Ne=j[pe],Le=Te.start+Te.count,Se=Ge(Ne.start,b.width,4),je=Ge(Te.start,b.width,4);Ne.start<=Le+1&&Se===je&&Ge(Ne.start+Ne.count-1,b.width,4)===Se?Te.count=Math.max(Te.count,Ne.start+Ne.count-Te.start):(++Re,j[Re]=Ne)}j.length=Re+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let pe=0,Te=j.length;pe<Te;pe++){const Ne=j[pe],Le=Math.floor(Ne.start/4),Se=Math.ceil(Ne.count/4),je=Le%b.width,F=Math.floor(Le/b.width),ve=Se,ye=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,je,F,ve,ye,I,$,b.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function me(E,b,I){let $=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=n.TEXTURE_3D);const se=ke(E,b),j=b.source;t.bindTexture($,E.__webglTexture,n.TEXTURE0+I);const Re=i.get(j);if(j.version!==Re.__version||se===!0){t.activeTexture(n.TEXTURE0+I);const he=nt.getPrimaries(nt.workingColorSpace),Pe=b.colorSpace===Pi?null:nt.getPrimaries(b.colorSpace),De=b.colorSpace===Pi||he===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let pe=g(b.image,!1,r.maxTextureSize);pe=ce(b,pe);const Te=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type);let Le=S(b.internalFormat,Te,Ne,b.colorSpace,b.isVideoTexture);ze($,b);let Se;const je=b.mipmaps,F=b.isVideoTexture!==!0,ve=Re.__version===void 0||se===!0,ye=j.dataReady,Ue=C(b,pe);if(b.isDepthTexture)Le=x(b.format===Ns,b.type),ve&&(F?t.texStorage2D(n.TEXTURE_2D,1,Le,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Le,pe.width,pe.height,0,Te,Ne,null));else if(b.isDataTexture)if(je.length>0){F&&ve&&t.texStorage2D(n.TEXTURE_2D,Ue,Le,je[0].width,je[0].height);for(let ge=0,ue=je.length;ge<ue;ge++)Se=je[ge],F?ye&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Se.width,Se.height,Te,Ne,Se.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Se.width,Se.height,0,Te,Ne,Se.data);b.generateMipmaps=!1}else F?(ve&&t.texStorage2D(n.TEXTURE_2D,Ue,Le,pe.width,pe.height),ye&&te(b,pe,Te,Ne)):t.texImage2D(n.TEXTURE_2D,0,Le,pe.width,pe.height,0,Te,Ne,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Le,je[0].width,je[0].height,pe.depth);for(let ge=0,ue=je.length;ge<ue;ge++)if(Se=je[ge],b.format!==wn)if(Te!==null)if(F){if(ye)if(b.layerUpdates.size>0){const Oe=Nd(Se.width,Se.height,b.format,b.type);for(const Ye of b.layerUpdates){const _t=Se.data.subarray(Ye*Oe/Se.data.BYTES_PER_ELEMENT,(Ye+1)*Oe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,Ye,Se.width,Se.height,1,Te,_t)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,pe.depth,Te,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Se.width,Se.height,pe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,pe.depth,Te,Ne,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Se.width,Se.height,pe.depth,0,Te,Ne,Se.data)}else{F&&ve&&t.texStorage2D(n.TEXTURE_2D,Ue,Le,je[0].width,je[0].height);for(let ge=0,ue=je.length;ge<ue;ge++)Se=je[ge],b.format!==wn?Te!==null?F?ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ye&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Se.width,Se.height,Te,Ne,Se.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Se.width,Se.height,0,Te,Ne,Se.data)}else if(b.isDataArrayTexture)if(F){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Le,pe.width,pe.height,pe.depth),ye)if(b.layerUpdates.size>0){const ge=Nd(pe.width,pe.height,b.format,b.type);for(const ue of b.layerUpdates){const Oe=pe.data.subarray(ue*ge/pe.data.BYTES_PER_ELEMENT,(ue+1)*ge/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,pe.width,pe.height,1,Te,Ne,Oe)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Te,Ne,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,pe.width,pe.height,pe.depth,0,Te,Ne,pe.data);else if(b.isData3DTexture)F?(ve&&t.texStorage3D(n.TEXTURE_3D,Ue,Le,pe.width,pe.height,pe.depth),ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Te,Ne,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Le,pe.width,pe.height,pe.depth,0,Te,Ne,pe.data);else if(b.isFramebufferTexture){if(ve)if(F)t.texStorage2D(n.TEXTURE_2D,Ue,Le,pe.width,pe.height);else{let ge=pe.width,ue=pe.height;for(let Oe=0;Oe<Ue;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,Le,ge,ue,0,Te,Ne,null),ge>>=1,ue>>=1}}else if(je.length>0){if(F&&ve){const ge=we(je[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Le,ge.width,ge.height)}for(let ge=0,ue=je.length;ge<ue;ge++)Se=je[ge],F?ye&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Te,Ne,Se):t.texImage2D(n.TEXTURE_2D,ge,Le,Te,Ne,Se);b.generateMipmaps=!1}else if(F){if(ve){const ge=we(pe);t.texStorage2D(n.TEXTURE_2D,Ue,Le,ge.width,ge.height)}ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ne,pe)}else t.texImage2D(n.TEXTURE_2D,0,Le,Te,Ne,pe);m(b)&&h($),Re.__version=j.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function U(E,b,I){if(b.image.length!==6)return;const $=ke(E,b),se=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+I);const j=i.get(se);if(se.version!==j.__version||$===!0){t.activeTexture(n.TEXTURE0+I);const Re=nt.getPrimaries(nt.workingColorSpace),he=b.colorSpace===Pi?null:nt.getPrimaries(b.colorSpace),Pe=b.colorSpace===Pi||Re===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const De=b.isCompressedTexture||b.image[0].isCompressedTexture,pe=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let ue=0;ue<6;ue++)!De&&!pe?Te[ue]=g(b.image[ue],!0,r.maxCubemapSize):Te[ue]=pe?b.image[ue].image:b.image[ue],Te[ue]=ce(b,Te[ue]);const Ne=Te[0],Le=s.convert(b.format,b.colorSpace),Se=s.convert(b.type),je=S(b.internalFormat,Le,Se,b.colorSpace),F=b.isVideoTexture!==!0,ve=j.__version===void 0||$===!0,ye=se.dataReady;let Ue=C(b,Ne);ze(n.TEXTURE_CUBE_MAP,b);let ge;if(De){F&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,je,Ne.width,Ne.height);for(let ue=0;ue<6;ue++){ge=Te[ue].mipmaps;for(let Oe=0;Oe<ge.length;Oe++){const Ye=ge[Oe];b.format!==wn?Le!==null?F?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,Ye.width,Ye.height,Le,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,Ye.width,Ye.height,Le,Se,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,je,Ye.width,Ye.height,0,Le,Se,Ye.data)}}}else{if(ge=b.mipmaps,F&&ve){ge.length>0&&Ue++;const ue=we(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,je,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(pe){F?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Te[ue].width,Te[ue].height,Le,Se,Te[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,je,Te[ue].width,Te[ue].height,0,Le,Se,Te[ue].data);for(let Oe=0;Oe<ge.length;Oe++){const _t=ge[Oe].image[ue].image;F?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,_t.width,_t.height,Le,Se,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,je,_t.width,_t.height,0,Le,Se,_t.data)}}else{F?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le,Se,Te[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,je,Le,Se,Te[ue]);for(let Oe=0;Oe<ge.length;Oe++){const Ye=ge[Oe];F?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Le,Se,Ye.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,je,Le,Se,Ye.image[ue])}}}m(b)&&h(n.TEXTURE_CUBE_MAP),j.__version=se.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function le(E,b,I,$,se,j){const Re=s.convert(I.format,I.colorSpace),he=s.convert(I.type),Pe=S(I.internalFormat,Re,he,I.colorSpace),De=i.get(b),pe=i.get(I);if(pe.__renderTarget=b,!De.__hasExternalTextures){const Te=Math.max(1,b.width>>j),Ne=Math.max(1,b.height>>j);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,j,Pe,Te,Ne,b.depth,0,Re,he,null):t.texImage2D(se,j,Pe,Te,Ne,0,Re,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),K(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,se,pe.__webglTexture,0,fe(b)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,se,pe.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(E,b,I){if(n.bindRenderbuffer(n.RENDERBUFFER,E),b.depthBuffer){const $=b.depthTexture,se=$&&$.isDepthTexture?$.type:null,j=x(b.stencilBuffer,se),Re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=fe(b);K(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,j,b.width,b.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,j,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,E)}else{const $=b.textures;for(let se=0;se<$.length;se++){const j=$[se],Re=s.convert(j.format,j.colorSpace),he=s.convert(j.type),Pe=S(j.internalFormat,Re,he,j.colorSpace),De=fe(b);I&&K(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Pe,b.width,b.height):K(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Pe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe(b.depthTexture,0);const se=$.__webglTexture,j=fe(b);if(b.depthTexture.format===Us)K(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(b.depthTexture.format===Ns)K(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Be(E){const b=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",se)};$.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=$}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const $=E.texture.mipmaps;$&&$.length>0?de(b.__webglFramebuffer[0],E):de(b.__webglFramebuffer,E)}else if(I){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=n.createRenderbuffer(),re(b.__webglDepthbuffer[$],E,!1);else{const se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,j)}}else{const $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),re(b.__webglDepthbuffer,E,!1);else{const se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(E,b,I){const $=i.get(E);b!==void 0&&le($.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Be(E)}function v(E){const b=E.texture,I=i.get(E),$=i.get(b);E.addEventListener("dispose",D);const se=E.textures,j=E.isWebGLCubeRenderTarget===!0,Re=se.length>1;if(Re||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=b.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)I.__webglFramebuffer[he][Pe]=n.createFramebuffer()}else I.__webglFramebuffer[he]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)I.__webglFramebuffer[he]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Re)for(let he=0,Pe=se.length;he<Pe;he++){const De=i.get(se[he]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&K(E)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const Pe=se[he];I.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const De=s.convert(Pe.format,Pe.colorSpace),pe=s.convert(Pe.type),Te=S(Pe.internalFormat,De,pe,Pe.colorSpace,E.isXRRenderTarget===!0),Ne=fe(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Te,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,I.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),re(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ze(n.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pe=0;Pe<b.mipmaps.length;Pe++)le(I.__webglFramebuffer[he][Pe],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe);else le(I.__webglFramebuffer[he],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(b)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let he=0,Pe=se.length;he<Pe;he++){const De=se[he],pe=i.get(De);let Te=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Te=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,pe.__webglTexture),ze(Te,De),le(I.__webglFramebuffer,E,De,n.COLOR_ATTACHMENT0+he,Te,0),m(De)&&h(Te)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,$.__webglTexture),ze(he,b),b.mipmaps&&b.mipmaps.length>0)for(let Pe=0;Pe<b.mipmaps.length;Pe++)le(I.__webglFramebuffer[Pe],E,b,n.COLOR_ATTACHMENT0,he,Pe);else le(I.__webglFramebuffer,E,b,n.COLOR_ATTACHMENT0,he,0);m(b)&&h(he),t.unbindTexture()}E.depthBuffer&&Be(E)}function N(E){const b=E.textures;for(let I=0,$=b.length;I<$;I++){const se=b[I];if(m(se)){const j=y(E),Re=i.get(se).__webglTexture;t.bindTexture(j,Re),h(j),t.unbindTexture()}}}const G=[],Q=[];function V(E){if(E.samples>0){if(K(E)===!1){const b=E.textures,I=E.width,$=E.height;let se=n.COLOR_BUFFER_BIT;const j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(E),he=b.length>1;if(he)for(let De=0;De<b.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Pe=E.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let De=0;De<b.length;De++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const pe=i.get(b[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,I,$,0,0,I,$,se,n.NEAREST),l===!0&&(G.length=0,Q.length=0,G.push(n.COLOR_ATTACHMENT0+De),E.depthBuffer&&E.resolveDepthBuffer===!1&&(G.push(j),Q.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let De=0;De<b.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const pe=i.get(b[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const b=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function fe(E){return Math.min(r.maxSamples,E.samples)}function K(E){const b=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ae(E){const b=o.render.frame;u.get(E)!==b&&(u.set(E,b),E.update())}function ce(E,b){const I=E.colorSpace,$=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==qr&&I!==Pi&&(nt.getTransfer(I)===ht?($!==wn||se!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),b}function we(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=A,this.setupRenderTarget=v,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=le,this.useMultisampledRTT=K}function HM(n,e){function t(i,r=Pi){let s;const o=nt.getTransfer(r);if(i===hi)return n.UNSIGNED_BYTE;if(i===Gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return n.BYTE;if(i===Xh)return n.SHORT;if(i===Ls)return n.UNSIGNED_SHORT;if(i===Vc)return n.INT;if(i===ur)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===Bs)return n.HALF_FLOAT;if(i===jh)return n.ALPHA;if(i===qh)return n.RGB;if(i===wn)return n.RGBA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===Yh)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===Kh)return n.RG;if(i===$c)return n.RG_INTEGER;if(i===jc)return n.RGBA_INTEGER;if(i===Co||i===Po||i===Do||i===Lo)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Gl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$l||i===jl||i===ql)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$l||i===jl)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ql)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Io||i===cc||i===uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Io)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zh||i===dc||i===fc||i===hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Io)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class vp extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const VM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GM=`
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

}`;class WM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fi({vertexShader:VM,fragmentShader:GM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oi(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XM extends Kr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const g=new WM,m={},h=t.getContextAttributes();let y=null,S=null;const x=[],C=[],L=new pt;let D=null;const O=new gn;O.viewport=new Rt;const M=new gn;M.viewport=new Rt;const w=[O,M],P=new fx;let k=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=x[te];return me===void 0&&(me=new tl,x[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=x[te];return me===void 0&&(me=new tl,x[te]=me),me.getGripSpace()},this.getHand=function(te){let me=x[te];return me===void 0&&(me=new tl,x[te]=me),me.getHandSpace()};function X(te){const me=C.indexOf(te.inputSource);if(me===-1)return;const U=x[me];U!==void 0&&(U.update(te.inputSource,te.frame,c||o),U.dispatchEvent({type:te.type,data:te.inputSource}))}function oe(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",Z);for(let te=0;te<x.length;te++){const me=C[te];me!==null&&(C[te]=null,x[te].disconnect(me))}k=null,B=null,g.reset();for(const te in m)delete m[te];e.setRenderTarget(y),p=null,f=null,d=null,r=null,S=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",Z),h.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,le=null,re=null;h.depth&&(re=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=h.stencil?Ns:Us,le=h.stencil?Is:ur);const de={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=d.createProjectionLayer(de),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new dr(f.textureWidth,f.textureHeight,{format:wn,type:hi,depthTexture:new fp(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const U={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,U),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new dr(p.framebufferWidth,p.framebufferHeight,{format:wn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(te){for(let me=0;me<te.removed.length;me++){const U=te.removed[me],le=C.indexOf(U);le>=0&&(C[le]=null,x[le].disconnect(U))}for(let me=0;me<te.added.length;me++){const U=te.added[me];let le=C.indexOf(U);if(le===-1){for(let de=0;de<x.length;de++)if(de>=C.length){C.push(U),le=de;break}else if(C[de]===null){C[de]=U,le=de;break}if(le===-1)break}const re=x[le];re&&re.connect(U)}}const ee=new q,W=new q;function xe(te,me,U){ee.setFromMatrixPosition(me.matrixWorld),W.setFromMatrixPosition(U.matrixWorld);const le=ee.distanceTo(W),re=me.projectionMatrix.elements,de=U.projectionMatrix.elements,Be=re[14]/(re[10]-1),A=re[14]/(re[10]+1),v=(re[9]+1)/re[5],N=(re[9]-1)/re[5],G=(re[8]-1)/re[0],Q=(de[8]+1)/de[0],V=Be*G,fe=Be*Q,K=le/(-G+Q),ae=K*-G;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ae),te.translateZ(K),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),re[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const ce=Be+K,we=A+K,E=V-ae,b=fe+(le-ae),I=v*A/we*ce,$=N*A/we*ce;te.projectionMatrix.makePerspective(E,b,I,$,ce,we),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function be(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let me=te.near,U=te.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(U=g.depthFar)),P.near=M.near=O.near=me,P.far=M.far=O.far=U,(k!==P.near||B!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),k=P.near,B=P.far),P.layers.mask=te.layers.mask|6,O.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;const le=te.parent,re=P.cameras;be(P,le);for(let de=0;de<re.length;de++)be(re[de],le);re.length===2?xe(P,O,M):P.projectionMatrix.copy(O.projectionMatrix),Ce(te,P,le)};function Ce(te,me,U){U===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(U.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=pc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(te){return m[te]};let ze=null;function ke(te,me){if(u=me.getViewerPose(c||o),_=me,u!==null){const U=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let le=!1;U.length!==P.cameras.length&&(P.cameras.length=0,le=!0);for(let A=0;A<U.length;A++){const v=U[A];let N=null;if(p!==null)N=p.getViewport(v);else{const Q=d.getViewSubImage(f,v);N=Q.viewport,A===0&&(e.setRenderTargetTextures(S,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(S))}let G=w[A];G===void 0&&(G=new gn,G.layers.enable(A),G.viewport=new Rt,w[A]=G),G.matrix.fromArray(v.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(v.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(N.x,N.y,N.width,N.height),A===0&&(P.matrix.copy(G.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),le===!0&&P.cameras.push(G)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const A=d.getDepthInformation(U[0]);A&&A.isValid&&A.texture&&g.init(A,r.renderState)}if(re&&re.includes("camera-access")&&(e.state.unbindTexture(),d))for(let A=0;A<U.length;A++){const v=U[A].camera;if(v){let N=m[v];N||(N=new vp,m[v]=N);const G=d.getCameraImage(v);N.sourceTexture=G}}}for(let U=0;U<x.length;U++){const le=C[U],re=x[U];le!==null&&re!==void 0&&re.update(le,me,c||o)}ze&&ze(te,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Ge=new hp;Ge.setAnimationLoop(ke),this.setAnimationLoop=function(te){ze=te},this.dispose=function(){}}}const Ki=new pi,$M=new Ct;function jM(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,op(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,S,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,Ki.copy(x),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4($M.makeRotationFromEuler(Ki)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=S*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const x=S.program;i.uniformBlockBinding(y,x)}function c(y,S){let x=r[y.id];x===void 0&&(_(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",m));const C=S.program;i.updateUBOMapping(y,C);const L=e.render.frame;s[y.id]!==L&&(f(y),s[y.id]=L)}function u(y){const S=d();y.__bindingPointIndex=S;const x=n.createBuffer(),C=y.__size,L=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=r[y.id],x=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let L=0,D=x.length;L<D;L++){const O=Array.isArray(x[L])?x[L]:[x[L]];for(let M=0,w=O.length;M<w;M++){const P=O[M];if(p(P,L,M,C)===!0){const k=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let oe=0;oe<B.length;oe++){const Z=B[oe],ee=g(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,k+X,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,x,C){const L=y.value,D=S+"_"+x;if(C[D]===void 0)return typeof L=="number"||typeof L=="boolean"?C[D]=L:C[D]=L.clone(),!0;{const O=C[D];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return C[D]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function _(y){const S=y.uniforms;let x=0;const C=16;for(let D=0,O=S.length;D<O;D++){const M=Array.isArray(S[D])?S[D]:[S[D]];for(let w=0,P=M.length;w<P;w++){const k=M[w],B=Array.isArray(k.value)?k.value:[k.value];for(let X=0,oe=B.length;X<oe;X++){const Z=B[X],ee=g(Z),W=x%C,xe=W%ee.boundary,be=W+xe;x+=xe,be!==0&&C-be<ee.storage&&(x+=C-be),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=ee.storage}}}const L=x%C;return L>0&&(x+=C-L),y.__size=x,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class YM{constructor(e={}){const{canvas:t=Av(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,h=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let C=!1;this._outputColorSpace=mn;let L=0,D=0,O=null,M=-1,w=null;const P=new Rt,k=new Rt;let B=null;const X=new st(0);let oe=0,Z=t.width,ee=t.height,W=1,xe=null,be=null;const Ce=new Rt(0,0,Z,ee),ze=new Rt(0,0,Z,ee);let ke=!1;const Ge=new cp;let te=!1,me=!1;const U=new Ct,le=new q,re=new Rt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function A(){return O===null?W:1}let v=i;function N(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ge,!1),v===null){const z="webgl2";if(v=N(z,T),v===null)throw N(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let G,Q,V,fe,K,ae,ce,we,E,b,I,$,se,j,Re,he,Pe,De,pe,Te,Ne,Le,Se,je;function F(){G=new sS(v),G.init(),Le=new HM(v,G),Q=new Jy(v,G,e,Le),V=new kM(v,G),Q.reversedDepthBuffer&&f&&V.buffers.depth.setReversed(!0),fe=new lS(v),K=new wM,ae=new zM(v,G,V,K,Q,Le,fe),ce=new eS(x),we=new rS(x),E=new px(v),Se=new Ky(v,E),b=new oS(v,E,fe,Se),I=new uS(v,b,E,fe),pe=new cS(v,Q,ae),he=new Qy(K),$=new TM(x,ce,we,G,Q,Se,he),se=new jM(x,K),j=new RM,Re=new UM(G),De=new Yy(x,ce,we,V,I,p,l),Pe=new OM(x,I,Q),je=new qM(v,fe,Q,V),Te=new Zy(v,G,fe),Ne=new aS(v,G,fe),fe.programs=$.programs,x.capabilities=Q,x.extensions=G,x.properties=K,x.renderLists=j,x.shadowMap=Pe,x.state=V,x.info=fe}F();const ve=new XM(x,v);this.xr=ve,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const T=G.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=G.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(Z,ee,!1))},this.getSize=function(T){return T.set(Z,ee)},this.setSize=function(T,z,Y=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,ee=z,t.width=Math.floor(T*W),t.height=Math.floor(z*W),Y===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Z*W,ee*W).floor()},this.setDrawingBufferSize=function(T,z,Y){Z=T,ee=z,W=Y,t.width=Math.floor(T*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Ce)},this.setViewport=function(T,z,Y,J){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,z,Y,J),V.viewport(P.copy(Ce).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(ze)},this.setScissor=function(T,z,Y,J){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,z,Y,J),V.scissor(k.copy(ze).multiplyScalar(W).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(T){V.setScissorTest(ke=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){be=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,Y=!0){let J=0;if(T){let H=!1;if(O!==null){const _e=O.texture.format;H=_e===jc||_e===$c||_e===Xc}if(H){const _e=O.texture.type,Ae=_e===hi||_e===ur||_e===Ls||_e===Is||_e===Gc||_e===Wc,Fe=De.getClearColor(),Ie=De.getClearAlpha(),We=Fe.r,Xe=Fe.g,He=Fe.b;Ae?(_[0]=We,_[1]=Xe,_[2]=He,_[3]=Ie,v.clearBufferuiv(v.COLOR,0,_)):(g[0]=We,g[1]=Xe,g[2]=He,g[3]=Ie,v.clearBufferiv(v.COLOR,0,g))}else J|=v.COLOR_BUFFER_BIT}z&&(J|=v.DEPTH_BUFFER_BIT),Y&&(J|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),De.dispose(),j.dispose(),Re.dispose(),K.dispose(),ce.dispose(),we.dispose(),I.dispose(),Se.dispose(),je.dispose(),$.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Nn),ve.removeEventListener("sessionend",Zc),ki.stop()};function ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=fe.autoReset,z=Pe.enabled,Y=Pe.autoUpdate,J=Pe.needsUpdate,H=Pe.type;F(),fe.autoReset=T,Pe.enabled=z,Pe.autoUpdate=Y,Pe.needsUpdate=J,Pe.type=H}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const z=T.target;z.removeEventListener("dispose",ue),Oe(z)}function Oe(T){Ye(T),K.remove(T)}function Ye(T){const z=K.get(T).programs;z!==void 0&&(z.forEach(function(Y){$.releaseProgram(Y)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,J,H,_e){z===null&&(z=de);const Ae=H.isMesh&&H.matrixWorld.determinant()<0,Fe=bp(T,z,Y,J,H);V.setMaterial(J,Ae);let Ie=Y.index,We=1;if(J.wireframe===!0){if(Ie=b.getWireframeAttribute(Y),Ie===void 0)return;We=2}const Xe=Y.drawRange,He=Y.attributes.position;let Qe=Xe.start*We,ft=(Xe.start+Xe.count)*We;_e!==null&&(Qe=Math.max(Qe,_e.start*We),ft=Math.min(ft,(_e.start+_e.count)*We)),Ie!==null?(Qe=Math.max(Qe,0),ft=Math.min(ft,Ie.count)):He!=null&&(Qe=Math.max(Qe,0),ft=Math.min(ft,He.count));const Tt=ft-Qe;if(Tt<0||Tt===1/0)return;Se.setup(H,J,Fe,Y,Ie);let bt,mt=Te;if(Ie!==null&&(bt=E.get(Ie),mt=Ne,mt.setIndex(bt)),H.isMesh)J.wireframe===!0?(V.setLineWidth(J.wireframeLinewidth*A()),mt.setMode(v.LINES)):mt.setMode(v.TRIANGLES);else if(H.isLine){let Ve=J.linewidth;Ve===void 0&&(Ve=1),V.setLineWidth(Ve*A()),H.isLineSegments?mt.setMode(v.LINES):H.isLineLoop?mt.setMode(v.LINE_LOOP):mt.setMode(v.LINE_STRIP)}else H.isPoints?mt.setMode(v.POINTS):H.isSprite&&mt.setMode(v.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ve=H._multiDrawStarts,yt=H._multiDrawCounts,tt=H._multiDrawCount,sn=Ie?E.get(Ie).bytesPerElement:1,hr=K.get(J).currentProgram.getUniforms();for(let on=0;on<tt;on++)hr.setValue(v,"_gl_DrawID",on),mt.render(Ve[on]/sn,yt[on])}else if(H.isInstancedMesh)mt.renderInstances(Qe,Tt,H.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,yt=Math.min(Y.instanceCount,Ve);mt.renderInstances(Qe,Tt,yt)}else mt.render(Qe,Tt)};function _t(T,z,Y){T.transparent===!0&&T.side===ri&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Xs(T,z,Y),T.side=Ni,T.needsUpdate=!0,Xs(T,z,Y),T.side=ri):Xs(T,z,Y)}this.compile=function(T,z,Y=null){Y===null&&(Y=T),h=Re.get(Y),h.init(z),S.push(h),Y.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),T!==Y&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights();const J=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];_t(Fe,Y,H),J.add(Fe)}else _t(_e,Y,H),J.add(_e)}),h=S.pop(),J},this.compileAsync=function(T,z,Y=null){const J=this.compile(T,z,Y);return new Promise(H=>{function _e(){if(J.forEach(function(Ae){K.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){H(T);return}setTimeout(_e,10)}G.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let lt=null;function Wn(T){lt&&lt(T)}function Nn(){ki.stop()}function Zc(){ki.start()}const ki=new hp;ki.setAnimationLoop(Wn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(T){lt=T,ve.setAnimationLoop(T),T===null?ki.stop():ki.start()},ve.addEventListener("sessionstart",Nn),ve.addEventListener("sessionend",Zc),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(z),z=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,O),h=Re.get(T,S.length),h.init(z),S.push(h),U.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ge.setFromProjectionMatrix(U,Hn,z.reversedDepth),me=this.localClippingEnabled,te=he.init(this.clippingPlanes,me),m=j.get(T,y.length),m.init(),y.push(m),ve.enabled===!0&&ve.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&pa(_e,z,-1/0,x.sortObjects)}pa(T,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(xe,be),Be=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Be&&De.addToRenderList(m,T),this.info.render.frame++,te===!0&&he.beginShadows();const Y=h.state.shadowsArray;Pe.render(Y,T,z),te===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,H=m.transmissive;if(h.setupLights(),z.isArrayCamera){const _e=z.cameras;if(H.length>0)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const Ie=_e[Ae];Qc(J,H,T,Ie)}Be&&De.render(T);for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const Ie=_e[Ae];Jc(m,T,Ie,Ie.viewport)}}else H.length>0&&Qc(J,H,T,z),Be&&De.render(T),Jc(m,T,z);O!==null&&D===0&&(ae.updateMultisampleRenderTarget(O),ae.updateRenderTargetMipmap(O)),T.isScene===!0&&T.onAfterRender(x,T,z),Se.resetDefaultState(),M=-1,w=null,S.pop(),S.length>0?(h=S[S.length-1],te===!0&&he.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function pa(T,z,Y,J){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ge.intersectsSprite(T)){J&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(U);const Ae=I.update(T),Fe=T.material;Fe.visible&&m.push(T,Ae,Fe,Y,re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ge.intersectsObject(T))){const Ae=I.update(T),Fe=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),re.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),re.copy(Ae.boundingSphere.center)),re.applyMatrix4(T.matrixWorld).applyMatrix4(U)),Array.isArray(Fe)){const Ie=Ae.groups;for(let We=0,Xe=Ie.length;We<Xe;We++){const He=Ie[We],Qe=Fe[He.materialIndex];Qe&&Qe.visible&&m.push(T,Ae,Qe,Y,re.z,He)}}else Fe.visible&&m.push(T,Ae,Fe,Y,re.z,null)}}const _e=T.children;for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++)pa(_e[Ae],z,Y,J)}function Jc(T,z,Y,J){const H=T.opaque,_e=T.transmissive,Ae=T.transparent;h.setupLightsView(Y),te===!0&&he.setGlobalState(x.clippingPlanes,Y),J&&V.viewport(P.copy(J)),H.length>0&&Ws(H,z,Y),_e.length>0&&Ws(_e,z,Y),Ae.length>0&&Ws(Ae,z,Y),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Qc(T,z,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[J.id]===void 0&&(h.state.transmissionRenderTarget[J.id]=new dr(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?Bs:hi,minFilter:sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const _e=h.state.transmissionRenderTarget[J.id],Ae=J.viewport||P;_e.setSize(Ae.z*x.transmissionResolutionScale,Ae.w*x.transmissionResolutionScale);const Fe=x.getRenderTarget(),Ie=x.getActiveCubeFace(),We=x.getActiveMipmapLevel();x.setRenderTarget(_e),x.getClearColor(X),oe=x.getClearAlpha(),oe<1&&x.setClearColor(16777215,.5),x.clear(),Be&&De.render(Y);const Xe=x.toneMapping;x.toneMapping=Ii;const He=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),h.setupLightsView(J),te===!0&&he.setGlobalState(x.clippingPlanes,J),Ws(T,Y,J),ae.updateMultisampleRenderTarget(_e),ae.updateRenderTargetMipmap(_e),G.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ft=0,Tt=z.length;ft<Tt;ft++){const bt=z[ft],mt=bt.object,Ve=bt.geometry,yt=bt.material,tt=bt.group;if(yt.side===ri&&mt.layers.test(J.layers)){const sn=yt.side;yt.side=rn,yt.needsUpdate=!0,eu(mt,Y,J,Ve,yt,tt),yt.side=sn,yt.needsUpdate=!0,Qe=!0}}Qe===!0&&(ae.updateMultisampleRenderTarget(_e),ae.updateRenderTargetMipmap(_e))}x.setRenderTarget(Fe,Ie,We),x.setClearColor(X,oe),He!==void 0&&(J.viewport=He),x.toneMapping=Xe}function Ws(T,z,Y){const J=z.isScene===!0?z.overrideMaterial:null;for(let H=0,_e=T.length;H<_e;H++){const Ae=T[H],Fe=Ae.object,Ie=Ae.geometry,We=Ae.group;let Xe=Ae.material;Xe.allowOverride===!0&&J!==null&&(Xe=J),Fe.layers.test(Y.layers)&&eu(Fe,z,Y,Ie,Xe,We)}}function eu(T,z,Y,J,H,_e){T.onBeforeRender(x,z,Y,J,H,_e),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,z,Y,J,T,_e),H.transparent===!0&&H.side===ri&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,x.renderBufferDirect(Y,z,J,H,T,_e),H.side=Ni,H.needsUpdate=!0,x.renderBufferDirect(Y,z,J,H,T,_e),H.side=ri):x.renderBufferDirect(Y,z,J,H,T,_e),T.onAfterRender(x,z,Y,J,H,_e)}function Xs(T,z,Y){z.isScene!==!0&&(z=de);const J=K.get(T),H=h.state.lights,_e=h.state.shadowsArray,Ae=H.state.version,Fe=$.getParameters(T,H.state,_e,z,Y),Ie=$.getProgramCacheKey(Fe);let We=J.programs;J.environment=T.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(T.isMeshStandardMaterial?we:ce).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,We===void 0&&(T.addEventListener("dispose",ue),We=new Map,J.programs=We);let Xe=We.get(Ie);if(Xe!==void 0){if(J.currentProgram===Xe&&J.lightsStateVersion===Ae)return nu(T,Fe),Xe}else Fe.uniforms=$.getUniforms(T),T.onBeforeCompile(Fe,x),Xe=$.acquireProgram(Fe,Ie),We.set(Ie,Xe),J.uniforms=Fe.uniforms;const He=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=he.uniform),nu(T,Fe),J.needsLights=Sp(T),J.lightsStateVersion=Ae,J.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=Xe,J.uniformsList=null,Xe}function tu(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Uo.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function nu(T,z){const Y=K.get(T);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function bp(T,z,Y,J,H){z.isScene!==!0&&(z=de),ae.resetTextureUnits();const _e=z.fog,Ae=J.isMeshStandardMaterial?z.environment:null,Fe=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:qr,Ie=(J.isMeshStandardMaterial?we:ce).get(J.envMap||Ae),We=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,ft=!!Y.morphAttributes.color;let Tt=Ii;J.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const bt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=bt!==void 0?bt.length:0,Ve=K.get(J),yt=h.state.lights;if(te===!0&&(me===!0||T!==w)){const Gt=T===w&&J.id===M;he.setState(J,T,Gt)}let tt=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==yt.state.version||Ve.outputColorSpace!==Fe||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isBatchedMesh&&Ve.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ve.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ve.instancingMorph===!1&&H.morphTexture!==null||Ve.envMap!==Ie||J.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==he.numPlanes||Ve.numIntersection!==he.numIntersection)||Ve.vertexAlphas!==We||Ve.vertexTangents!==Xe||Ve.morphTargets!==He||Ve.morphNormals!==Qe||Ve.morphColors!==ft||Ve.toneMapping!==Tt||Ve.morphTargetsCount!==mt)&&(tt=!0):(tt=!0,Ve.__version=J.version);let sn=Ve.currentProgram;tt===!0&&(sn=Xs(J,z,H));let hr=!1,on=!1,Qr=!1;const St=sn.getUniforms(),dn=Ve.uniforms;if(V.useProgram(sn.program)&&(hr=!0,on=!0,Qr=!0),J.id!==M&&(M=J.id,on=!0),hr||w!==T){V.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),St.setValue(v,"projectionMatrix",T.projectionMatrix),St.setValue(v,"viewMatrix",T.matrixWorldInverse);const Qt=St.map.cameraPosition;Qt!==void 0&&Qt.setValue(v,le.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&St.setValue(v,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&St.setValue(v,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,on=!0,Qr=!0)}if(H.isSkinnedMesh){St.setOptional(v,H,"bindMatrix"),St.setOptional(v,H,"bindMatrixInverse");const Gt=H.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),St.setValue(v,"boneTexture",Gt.boneTexture,ae))}H.isBatchedMesh&&(St.setOptional(v,H,"batchingTexture"),St.setValue(v,"batchingTexture",H._matricesTexture,ae),St.setOptional(v,H,"batchingIdTexture"),St.setValue(v,"batchingIdTexture",H._indirectTexture,ae),St.setOptional(v,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(v,"batchingColorTexture",H._colorsTexture,ae));const fn=Y.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&pe.update(H,Y,sn),(on||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,St.setValue(v,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(dn.envMap.value=Ie,dn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(dn.envMapIntensity.value=z.environmentIntensity),on&&(St.setValue(v,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&yp(dn,Qr),_e&&J.fog===!0&&se.refreshFogUniforms(dn,_e),se.refreshMaterialUniforms(dn,J,W,ee,h.state.transmissionRenderTarget[T.id]),Uo.upload(v,tu(Ve),dn,ae)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Uo.upload(v,tu(Ve),dn,ae),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&St.setValue(v,"center",H.center),St.setValue(v,"modelViewMatrix",H.modelViewMatrix),St.setValue(v,"normalMatrix",H.normalMatrix),St.setValue(v,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Gt=J.uniformsGroups;for(let Qt=0,ma=Gt.length;Qt<ma;Qt++){const zi=Gt[Qt];je.update(zi,sn),je.bind(zi,sn)}}return sn}function yp(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Sp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,z,Y){const J=K.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),K.get(T.texture).__webglTexture=z,K.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Y,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const Y=K.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};const Mp=v.createFramebuffer();this.setRenderTarget=function(T,z=0,Y=0){O=T,L=z,D=Y;let J=!0,H=null,_e=!1,Ae=!1;if(T){const Ie=K.get(T);if(Ie.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(v.FRAMEBUFFER,null),J=!1;else if(Ie.__webglFramebuffer===void 0)ae.setupRenderTarget(T);else if(Ie.__hasExternalTextures)ae.rebindTextures(T,K.get(T.texture).__webglTexture,K.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(Ie.__boundDepthTexture!==He){if(He!==null&&K.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(T)}}const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);const Xe=K.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[z])?H=Xe[z][Y]:H=Xe[z],_e=!0):T.samples>0&&ae.useMultisampledRTT(T)===!1?H=K.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?H=Xe[Y]:H=Xe,P.copy(T.viewport),k.copy(T.scissor),B=T.scissorTest}else P.copy(Ce).multiplyScalar(W).floor(),k.copy(ze).multiplyScalar(W).floor(),B=ke;if(Y!==0&&(H=Mp),V.bindFramebuffer(v.FRAMEBUFFER,H)&&J&&V.drawBuffers(T,H),V.viewport(P),V.scissor(k),V.setScissorTest(B),_e){const Ie=K.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,Y)}else if(Ae){const Ie=z;for(let We=0;We<T.textures.length;We++){const Xe=K.get(T.textures[We]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+We,Xe.__webglTexture,Y,Ie)}}else if(T!==null&&Y!==0){const Ie=K.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ie.__webglTexture,Y)}M=-1},this.readRenderTargetPixels=function(T,z,Y,J,H,_e,Ae,Fe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){V.bindFramebuffer(v.FRAMEBUFFER,Ie);try{const We=T.textures[Fe],Xe=We.format,He=We.type;if(!Q.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-J&&Y>=0&&Y<=T.height-H&&(T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Fe),v.readPixels(z,Y,J,H,Le.convert(Xe),Le.convert(He),_e))}finally{const We=O!==null?K.get(O).__webglFramebuffer:null;V.bindFramebuffer(v.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(T,z,Y,J,H,_e,Ae,Fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie)if(z>=0&&z<=T.width-J&&Y>=0&&Y<=T.height-H){V.bindFramebuffer(v.FRAMEBUFFER,Ie);const We=T.textures[Fe],Xe=We.format,He=We.type;if(!Q.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Qe),v.bufferData(v.PIXEL_PACK_BUFFER,_e.byteLength,v.STREAM_READ),T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Fe),v.readPixels(z,Y,J,H,Le.convert(Xe),Le.convert(He),0);const ft=O!==null?K.get(O).__webglFramebuffer:null;V.bindFramebuffer(v.FRAMEBUFFER,ft);const Tt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Rv(v,Tt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Qe),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,_e),v.deleteBuffer(Qe),v.deleteSync(Tt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,Y=0){const J=Math.pow(2,-Y),H=Math.floor(T.image.width*J),_e=Math.floor(T.image.height*J),Ae=z!==null?z.x:0,Fe=z!==null?z.y:0;ae.setTexture2D(T,0),v.copyTexSubImage2D(v.TEXTURE_2D,Y,0,0,Ae,Fe,H,_e),V.unbindTexture()};const Ep=v.createFramebuffer(),Tp=v.createFramebuffer();this.copyTextureToTexture=function(T,z,Y=null,J=null,H=0,_e=null){_e===null&&(H!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=H,H=0):_e=0);let Ae,Fe,Ie,We,Xe,He,Qe,ft,Tt;const bt=T.isCompressedTexture?T.mipmaps[_e]:T.image;if(Y!==null)Ae=Y.max.x-Y.min.x,Fe=Y.max.y-Y.min.y,Ie=Y.isBox3?Y.max.z-Y.min.z:1,We=Y.min.x,Xe=Y.min.y,He=Y.isBox3?Y.min.z:0;else{const fn=Math.pow(2,-H);Ae=Math.floor(bt.width*fn),Fe=Math.floor(bt.height*fn),T.isDataArrayTexture?Ie=bt.depth:T.isData3DTexture?Ie=Math.floor(bt.depth*fn):Ie=1,We=0,Xe=0,He=0}J!==null?(Qe=J.x,ft=J.y,Tt=J.z):(Qe=0,ft=0,Tt=0);const mt=Le.convert(z.format),Ve=Le.convert(z.type);let yt;z.isData3DTexture?(ae.setTexture3D(z,0),yt=v.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ae.setTexture2DArray(z,0),yt=v.TEXTURE_2D_ARRAY):(ae.setTexture2D(z,0),yt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,z.unpackAlignment);const tt=v.getParameter(v.UNPACK_ROW_LENGTH),sn=v.getParameter(v.UNPACK_IMAGE_HEIGHT),hr=v.getParameter(v.UNPACK_SKIP_PIXELS),on=v.getParameter(v.UNPACK_SKIP_ROWS),Qr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,bt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,bt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,We),v.pixelStorei(v.UNPACK_SKIP_ROWS,Xe),v.pixelStorei(v.UNPACK_SKIP_IMAGES,He);const St=T.isDataArrayTexture||T.isData3DTexture,dn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const fn=K.get(T),Gt=K.get(z),Qt=K.get(fn.__renderTarget),ma=K.get(Gt.__renderTarget);V.bindFramebuffer(v.READ_FRAMEBUFFER,Qt.__webglFramebuffer),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let zi=0;zi<Ie;zi++)St&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,K.get(T).__webglTexture,H,He+zi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,K.get(z).__webglTexture,_e,Tt+zi)),v.blitFramebuffer(We,Xe,Ae,Fe,Qe,ft,Ae,Fe,v.DEPTH_BUFFER_BIT,v.NEAREST);V.bindFramebuffer(v.READ_FRAMEBUFFER,null),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||K.has(T)){const fn=K.get(T),Gt=K.get(z);V.bindFramebuffer(v.READ_FRAMEBUFFER,Ep),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,Tp);for(let Qt=0;Qt<Ie;Qt++)St?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,fn.__webglTexture,H,He+Qt):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,fn.__webglTexture,H),dn?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Gt.__webglTexture,_e,Tt+Qt):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Gt.__webglTexture,_e),H!==0?v.blitFramebuffer(We,Xe,Ae,Fe,Qe,ft,Ae,Fe,v.COLOR_BUFFER_BIT,v.NEAREST):dn?v.copyTexSubImage3D(yt,_e,Qe,ft,Tt+Qt,We,Xe,Ae,Fe):v.copyTexSubImage2D(yt,_e,Qe,ft,We,Xe,Ae,Fe);V.bindFramebuffer(v.READ_FRAMEBUFFER,null),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else dn?T.isDataTexture||T.isData3DTexture?v.texSubImage3D(yt,_e,Qe,ft,Tt,Ae,Fe,Ie,mt,Ve,bt.data):z.isCompressedArrayTexture?v.compressedTexSubImage3D(yt,_e,Qe,ft,Tt,Ae,Fe,Ie,mt,bt.data):v.texSubImage3D(yt,_e,Qe,ft,Tt,Ae,Fe,Ie,mt,Ve,bt):T.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,_e,Qe,ft,Ae,Fe,mt,Ve,bt.data):T.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,_e,Qe,ft,bt.width,bt.height,mt,bt.data):v.texSubImage2D(v.TEXTURE_2D,_e,Qe,ft,Ae,Fe,mt,Ve,bt);v.pixelStorei(v.UNPACK_ROW_LENGTH,tt),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,sn),v.pixelStorei(v.UNPACK_SKIP_PIXELS,hr),v.pixelStorei(v.UNPACK_SKIP_ROWS,on),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Qr),_e===0&&z.generateMipmaps&&v.generateMipmap(yt),V.unbindTexture()},this.copyTextureToTexture3D=function(T,z,Y=null,J=null,H=0){return kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,Y,J,H)},this.initRenderTarget=function(T){K.get(T).__webglFramebuffer===void 0&&ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),V.unbindTexture()},this.resetState=function(){L=0,D=0,O=null,V.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const KM=Jt({__name:"HeroSphere",setup(n){const e=Je(null);let t=null,i=null,r=null,s=null,o=null,a=null,l=0,c=!0,u=0,d=0,f=null;function p(m,h){i=new Qv,r=new gn(55,m/h,.1,100),r.position.z=28;const y=Math.min(2,window.devicePixelRatio||1);t=new YM({antialias:!0,alpha:!0,powerPreference:"low-power"}),t.setPixelRatio(y),t.setSize(m,h),t.setClearColor(0,0);const S=e.value;S.innerHTML="",S.appendChild(t.domElement);const x=/Mobi|Android|iPhone|iPad|iPod|Phone/i.test(navigator.userAgent),C=x?300:450;x||(r.position.z=26);const L=new Float32Array(C*3),D=new Float32Array(C*3),O=(1+Math.sqrt(5))/2,M=x?21.5:14.5,w=new st,P=[];for(let ke=0;ke<C;ke++){const Ge=ke/(C-1),te=2*Math.PI*ke/O,me=1-2*Ge,U=Math.sqrt(1-me*me),le=Math.cos(te)*U,re=Math.sin(te)*U,de=le*M,Be=me*M,A=re*M;L[ke*3]=de,L[ke*3+1]=Be,L[ke*3+2]=A,P.push(new q(de,Be,A)),w.setHSL(.47+.12*me,.95,.72),D[ke*3]=w.r,D[ke*3+1]=w.g,D[ke*3+2]=w.b}const k=new Un;k.setAttribute("position",new xn(L,3)),k.setAttribute("color",new xn(D,3));const B=document.createElement("canvas"),X=B.getContext("2d");X&&(B.width=64,B.height=64,X.beginPath(),X.arc(64/2,64/2,64/2,0,Math.PI*2),X.fillStyle="white",X.fill());const oe=new ox(B),Z=new dp({size:x?1.3:.4,sizeAttenuation:!0,transparent:!0,depthWrite:!1,blending:Wo,opacity:.85,vertexColors:!0,map:oe});s=new sx(k,Z),a=new fs,a.add(s),x?a.position.set(-M*.6,M*.45,0):a.position.set(-M*.8,M*.6,0);const ee=[],W=[],xe=M*.3,be=5,Ce=new Array(P.length).fill(0);for(let ke=0;ke<P.length;ke++)for(let Ge=ke+1;Ge<P.length;Ge++){if(Ce[ke]>=be||Ce[Ge]>=be)continue;P[ke].distanceTo(P[Ge])<xe&&Math.random()<.5&&(ee.push(P[ke].x,P[ke].y,P[ke].z,P[Ge].x,P[Ge].y,P[Ge].z),W.push(.15,.85,.95,.15,.85,.95),Ce[ke]++,Ce[Ge]++)}if(ee.length>0){const ke=new Un;ke.setAttribute("position",new Pn(ee,3)),ke.setAttribute("color",new Pn(W,3));const Ge=new up({transparent:!0,opacity:.12,vertexColors:!0,blending:Wo});o=new rx(ke,Ge),a.add(o)}i.add(a);const ze=new dx(16777215,.2);i.add(ze),x||(f=Ge=>{const te=Ge.clientX/window.innerWidth*2-1,me=Ge.clientY/window.innerHeight*2-1;d=te*.06,u=-me*.06*.4},window.addEventListener("pointermove",f,{passive:!0}))}function _(){if(!t||!i||!r||!a)return;matchMedia("(prefers-reduced-motion: reduce)").matches||(a.rotation.y+=9e-4,f&&(a.rotation.x+=(u-a.rotation.x)*.04,a.rotation.y+=(d-a.rotation.y)*.04)),t.render(i,r),c&&(l=requestAnimationFrame(_))}function g(){if(!t||!r||!e.value)return;const m=e.value.getBoundingClientRect(),h=Math.max(1,Math.floor(m.width)),y=Math.max(1,Math.floor(m.height));r.aspect=h/y,r.updateProjectionMatrix(),t.setSize(h,y)}return gi(()=>{const m=e.value,h=m.getBoundingClientRect();p(h.width,h.height);const y=new IntersectionObserver(x=>{c=x[0]?.isIntersecting??!0,c?(cancelAnimationFrame(l),l=requestAnimationFrame(_)):cancelAnimationFrame(l)},{threshold:.1});y.observe(m),m.__io=y;const S=new ResizeObserver(()=>g());S.observe(m),m.__ro=S,l=requestAnimationFrame(_)}),Bi(()=>{f&&window.removeEventListener("pointermove",f),cancelAnimationFrame(l);const m=e.value;m?.__io?.disconnect(),m?.__ro?.disconnect(),s&&(s.geometry.dispose(),s.material.dispose()),o&&(o.geometry.dispose(),o.material.dispose()),t?.dispose(),i=null,r=null,s=null,o=null,a=null,t=null}),(m,h)=>(ne(),ie("div",{ref_key:"wrapRef",ref:e,class:"absolute left-[-10vw] top-[-8vw] w-[95vw] aspect-square md:left-[-8vw] md:top-[-5vw] md:w-[95vw] md:aspect-square pointer-events-none select-none opacity-50 z-10"},null,512))}}),ZM={class:"relative min-h-screen flex items-center justify-center px-4 sm:px-5 py-14 sm:py-16"},JM={class:"w-full max-w-screen-md mx-auto text-center"},QM={class:"mb-8 sm:mb-10 flex items-center justify-center gap-4 sm:gap-6",reveal:{delay:40}},eE={class:"flex items-center justify-center",reveal:{delay:140}},tE={class:"text-[9.5vw] leading-[1.06] sm:text-5xl md:text-6xl font-extrabold tracking-tight",reveal:{delay:180}},nE={class:"mt-3 sm:mt-6 text-emerald-100/90 text-[15px] sm:text-lg leading-relaxed px-1 sm:px-2",reveal:{delay:280}},iE={class:"mt-7 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm",reveal:{delay:360}},rE={class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition",reveal:{delay:400}},sE={class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition",reveal:{delay:440}},oE={class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition",reveal:{delay:480}},aE={class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition",reveal:{delay:520}},lE={class:"mt-8 sm:mt-12",reveal:{delay:560}},cE=Jt({__name:"HeroSection",setup(n){return(e,t)=>{const i=eh("router-link"),r=fi("reveal");return ne(),ie("div",ZM,[rt(KM),t[9]||(t[9]=R("div",{class:"absolute inset-0 overflow-hidden pointer-events-none"},[R("div",{class:"absolute -top-40 -left-20 size-[40rem] rounded-full bg-emerald-400/10 blur-3xl animate-pulse [animation-duration:4.5s]"}),R("div",{class:"absolute -bottom-40 -right-20 size-[40rem] rounded-full bg-cyan-400/10 blur-3xl animate-pulse [animation-duration:5.5s]"})],-1)),R("div",JM,[Me((ne(),ie("div",QM,[t[1]||(t[1]=R("div",{class:"flex items-center justify-center"},[R("div",{class:"inline-flex items-center rounded-md ring-1 ring-white/20 bg-white/5 px-3 py-2 shadow-sm"},[R("img",{src:F_,alt:"学校 logo",class:"h-10 sm:h-14 w-auto object-contain select-none",decoding:"async",loading:"eager",fetchpriority:"high"})])],-1)),Me((ne(),ie("div",eE,[...t[0]||(t[0]=[R("img",{src:O_,alt:"电子俱乐部 logo",class:"h-16 w-16 sm:h-24 sm:w-24 rounded-full object-cover ring-1 ring-white/20 bg-white/5 select-none shadow-lg",decoding:"async",loading:"eager",fetchpriority:"high"},null,-1)])])),[[r,void 0,'"pop"']])])),[[r,void 0,'"pop"']]),Me((ne(),ie("h1",tE,[...t[2]||(t[2]=[it(" 电子俱乐部 ",-1),R("span",{class:"block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300"},"探索·创造·连接",-1)])])),[[r,void 0,'"pop"']]),Me((ne(),ie("p",nE,[...t[3]||(t[3]=[it(" 在这里，我们把点子变成作品：嵌入式、物联网、电源技术…… 一起组队做有趣的项目，组织比赛，用技术照亮校园生活。 ",-1)])])),[[r,void 0,'"up"']]),Me((ne(),ie("div",iE,[Me((ne(),ie("span",rE,[...t[4]||(t[4]=[it("院级部门",-1)])])),[[r,void 0,'"pop"']]),Me((ne(),ie("span",sE,[...t[5]||(t[5]=[it("跨学科",-1)])])),[[r,void 0,'"pop"']]),Me((ne(),ie("span",oE,[...t[6]||(t[6]=[it("传播知识",-1)])])),[[r,void 0,'"pop"']]),Me((ne(),ie("span",aE,[...t[7]||(t[7]=[it("成长互助",-1)])])),[[r,void 0,'"pop"']])])),[[r,void 0,'"up"']]),Me((ne(),ie("div",lE,[rt(i,{to:"/led-competition",class:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 group"},{default:Fr(()=>[...t[8]||(t[8]=[R("span",null,"🔥 LED 创意赛火热报名中",-1),R("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})],-1)])]),_:1})])),[[r,void 0,'"up"']])]),t[10]||(t[10]=R("div",{class:"absolute left-1/2 -translate-x-1/2 text-emerald-200/80 text-xs sm:text-sm animate-bounce bottom-[calc(env(safe-area-inset-bottom)+1rem)]"},"向下滚动",-1))])}}}),uE={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},dE={class:"w-full max-w-screen-lg mx-auto"},fE={class:"text-2xl sm:text-3xl font-bold text-center"},hE={class:"mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0",reveal:{delay:80}},pE={class:"mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0",reveal:{delay:140}},mE={class:"mt-5 sm:mt-6 flex flex-wrap gap-2 text-xs sm:text-sm justify-center",reveal:{delay:180}},gE={class:"mt-7 sm:mt-9 grid grid-cols-2 place-content-center sm:grid-cols-3 gap-3 sm:gap-4"},_E=["aria-expanded","reveal","onClick"],vE={class:"flex items-start gap-2 sm:gap-3"},xE={class:"text-xl sm:text-2xl leading-none"},bE={class:"flex-1 min-w-0"},yE={class:"font-semibold text-sm sm:text-base flex items-center gap-1"},SE={key:0,class:"text-emerald-300/80 text-xs"},ME={key:1,class:"text-emerald-300/50 text-xs"},EE={key:0,class:"mb-2 grid grid-cols-2 gap-1.5"},TE=["src","alt","onClick"],wE={key:1,class:"mb-2 overflow-hidden rounded-lg border border-white/10"},AE=["src","alt","onClick"],RE={class:"whitespace-pre-wrap font-sans"},CE=["src"],PE=Jt({__name:"AboutSection",setup(n){const e=[{icon:"🔌",title:"焊接实训",brief:"专业设备，深入教学，体验乐趣",full:`优秀的设计搭配一流的焊工，让你的设计落地生根。
在这里，我们有专业的设备和深入的教学，快人一步，体验焊接的乐趣，收获成功的喜悦。`,img:"/features/b.jpg"},{icon:"🏆",title:"科技比赛",brief:"备赛成长，完赛收获，平台支持",full:`在备赛中学习，在比赛时成长，在完赛后收获。
我们为你搭建比赛的平台，帮你你在比赛中提高，让你拿得了奖评得了优！`,images:["/features/c.jpg","/features/d.jpg"]},{icon:"🧑‍🏫",title:"软硬件教学",brief:"C语言、电路入门，乐趣与成长",full:`C语言乏力、电路吃力？别怕，我们来
C语言教学、pcb设计教学……我们带你入门，帮你找回乐趣，找到提高的方向。`,images:["/features/e.jpg","/features/i.jpg"]},{icon:"📝",title:"PCB设计",brief:"想法落地，收获你的第一块板",full:`声控灯？遥控车？你的千奇百怪的想法，PCB来帮你解决
了解PCB的渊源，掌握PCB的简单设计，学习基础的应用电路。收获你的第一块印刷电路板。`,images:["/features/f.jpg","/features/g.jpg"]},{icon:"🛠️",title:"嵌入式工程",brief:"单片机入门，项目驱动成长",full:`入了嵌入式，一天饿两顿（不是）
你是否听过学长学姐告诉你学学51单片机，嵌入入门不是梦？学吧，学完51玩32，苦海无涯岸无边啊！如果你对未来有更进一步的想法，期待与你共会。`,img:"/features/a.jpg"},{icon:"🎉",title:"团队活动",brief:"劳逸结合，丰富团建，温暖团队",full:`劳逸结合是我们的追求，合格的部门必须要丰富的团活！
初见时羞涩的我们，团建时燃烧的热情（还挺应景，第一次吃的烤肉），男生节女生节"蓄谋已久"的惊喜，都是我们团队的注脚！`,images:["/features/h.jpg","/features/j.jpg","/features/k.jpg","/features/l.jpg"]}],t=Je(null);function i(d){t.value=t.value===d?null:d}const r=Je(null);function s(d){r.value=d}function o(){r.value=null}function a(d){const f=d;f.style.overflow="hidden",f.style.height="0",f.style.opacity="0",f.offsetHeight;const p=f.scrollHeight;f.style.transition="height .42s cubic-bezier(.34,.64,.36,1), opacity .3s ease",f.style.height=p+"px",f.style.opacity="1"}function l(d){const f=d;f.style.height="auto",f.style.overflow=""}function c(d){const f=d;f.style.overflow="hidden";const p=f.scrollHeight;f.style.height=p+"px",f.offsetHeight,f.style.transition="height .32s cubic-bezier(.68,.12,.47,.98), opacity .24s ease",f.style.height="0",f.style.opacity="0"}function u(d){const f=d;f.style.overflow=""}return(d,f)=>{const p=fi("reveal"),_=fi("tilt");return ne(),ie(Mt,null,[R("div",uE,[Me((ne(),ie("div",dE,[Me((ne(),ie("h2",fE,[...f[2]||(f[2]=[it("关于电子俱乐部",-1)])])),[[p,void 0,'"pop"']]),Me((ne(),ie("p",hE,[...f[3]||(f[3]=[it("我们是校园里的技术共同体：我们可以让灵感变成作品，可以让知识得以传递，让成长默默发生",-1)])])),[[p,void 0,'"up"']]),Me((ne(),ie("p",pE,[...f[4]||(f[4]=[it("这里有工程视角，也有人际交往；有代码与电路，也有内容与组织。",-1)])])),[[p,void 0,'"up"']]),Me((ne(),ie("div",mE,[...f[5]||(f[5]=[R("span",{class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30"},"好奇",-1),R("span",{class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30"},"协作",-1),R("span",{class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30"},"责任心",-1),R("span",{class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30"},"发展",-1)])])),[[p,void 0,'"fade"']]),R("div",gE,[(ne(),ie(Mt,null,En(e,(g,m)=>Me(R("div",{key:g.title,class:"group relative self-start rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-3 sm:p-4 hover:border-emerald-400/30 hover:bg-slate-800/40 transition cursor-pointer shadow-lg hover:shadow-emerald-400/20","aria-expanded":t.value===m,role:"group",reveal:{delay:220+m*70},onClick:h=>i(m)},[R("div",vE,[R("span",xE,ot(g.icon),1),R("span",bE,[R("span",yE,[it(ot(g.title)+" ",1),t.value===m?(ne(),ie("span",SE,"▲")):(ne(),ie("span",ME,"▼"))]),R("span",{class:At(["block mt-1 text-[11px] sm:text-xs text-emerald-100/70 line-clamp-2 group-hover:text-emerald-100/90 transition",{"opacity-0":t.value===m}])},ot(g.brief),3)])]),rt(Ml,{onEnter:a,onAfterEnter:l,onLeave:c,onAfterLeave:u},{default:Fr(()=>[t.value===m?(ne(),ie("div",{key:0,class:"mt-3 text-[11px] sm:text-xs leading-relaxed text-emerald-100/85",onClick:f[0]||(f[0]=_n(()=>{},["stop"]))},[g.images&&g.images.length?(ne(),ie("div",EE,[(ne(!0),ie(Mt,null,En(g.images,(h,y)=>(ne(),ie("img",{key:y,src:h,alt:g.title+" 图 "+(y+1),class:"h-24 w-full object-cover rounded-md border border-white/10 hover:border-emerald-400/40 hover:brightness-110 active:scale-[0.97] transition cursor-pointer",loading:"lazy",decoding:"async",onClick:_n(S=>s(h),["stop"])},null,8,TE))),128))])):g.img?(ne(),ie("div",wE,[R("img",{src:g.img,alt:g.title,class:"w-full h-28 object-cover hover:brightness-110 transition",loading:"lazy",decoding:"async",onClick:_n(h=>s(g.img),["stop"])},null,8,AE)])):dt("",!0),R("pre",RE,ot(g.full),1)])):dt("",!0)]),_:2},1024),f[6]||(f[6]=R("div",{class:"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-emerald-400/30 transition"},null,-1)),f[7]||(f[7]=R("div",{class:"absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.18),transparent_60%)]"},null,-1))],8,_E),[[p,void 0,'"pop"'],[_,{max:8,scale:1.02}]])),64))])])),[[p]])]),(ne(),Rs(Xf,{to:"body"},[r.value?(ne(),ie("div",{key:0,class:"fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4",onClick:o},[R("img",{src:r.value,alt:"preview",class:"max-w-full max-h-full rounded-lg shadow-xl border border-white/10",onClick:f[1]||(f[1]=_n(()=>{},["stop"]))},null,8,CE),R("button",{class:"absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg flex items-center justify-center backdrop-blur-sm border border-white/20",onClick:_n(o,["stop"])},"×")])):dt("",!0)]))],64)}}}),DE=Gn(PE,[["__scopeId","data-v-74c77138"]]),LE={},IE={class:"relative px-4 sm:px-5 py-14 sm:py-16"},UE={class:"w-full max-w-screen-lg mx-auto"},NE={class:"inline-block relative"},FE={class:"mt-4 sm:mt-5 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed px-1 sm:px-0",reveal:{delay:100}},OE={class:"mt-8 relative",reveal:{delay:160}},BE={class:"flex flex-col gap-5",reveal:{delay:220}},kE={class:"flex flex-col md:flex-row gap-4 md:gap-6"},zE={class:"flex-1 bg-gradient-to-br from-emerald-900/30 to-slate-900/30 rounded-xl border border-white/10 p-5 md:p-6",reveal:{delay:260}},HE={class:"flex-1 bg-gradient-to-br from-cyan-900/30 to-slate-900/30 rounded-xl border border-white/10 p-5 flex items-center justify-center",reveal:{delay:320}},VE={class:"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4",reveal:{delay:380}},GE={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:400}},WE={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:460}},XE={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:520}},$E={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:580}},jE={class:"bg-gradient-to-r from-emerald-900/40 via-cyan-900/40 to-emerald-900/40 rounded-xl border border-white/10 p-4 sm:p-5",reveal:{delay:660}};function qE(n,e){const t=fi("reveal");return ne(),ie("div",IE,[Me((ne(),ie("div",UE,[Me((ne(),ie("div",NE,[...e[0]||(e[0]=[R("h2",{class:"text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text"}," 我们的优势",-1),R("div",{class:"absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400"},null,-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("p",FE,[...e[1]||(e[1]=[it("老牌部门+社团，助你快速成长",-1)])])),[[t,void 0,'"up"']]),Me((ne(),ie("div",OE,[e[9]||(e[9]=R("div",{class:"absolute inset-0 -z-10"},[R("div",{class:"absolute top-1/3 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"}),R("div",{class:"absolute bottom-1/4 right-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"})],-1)),Me((ne(),ie("div",BE,[R("div",kE,[Me((ne(),ie("div",zE,[...e[2]||(e[2]=[Kt('<div class="flex items-start"><div class="flex-shrink-0 p-3 bg-emerald-400/15 rounded-lg"><span class="text-2xl">🚀</span></div><div class="ml-4"><h3 class="font-bold text-lg text-emerald-200">项目落地与实战协作</h3><p class="mt-1 text-xs text-cyan-100/80">懂方法，能应用，强配合</p></div></div>',1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",HE,[...e[3]||(e[3]=[Kt('<div class="text-center"><div class="inline-block p-4 rounded-full bg-cyan-400/15 mb-3"><span class="text-3xl">🏆</span></div><h3 class="font-bold text-cyan-200">竞赛支持</h3><p class="mt-1 text-xs text-cyan-100/80">资料/报名指导</p></div>',1)])])),[[t,void 0,'"pop"']])]),Me((ne(),ie("div",VE,[Me((ne(),ie("div",GE,[...e[4]||(e[4]=[R("div",{class:"text-2xl mb-2"},"🧭",-1),R("div",{class:"font-semibold"},"有我们在",-1),R("div",{class:"text-xs text-emerald-100/80 mt-1"},"学长学姐 1v1 指导",-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",WE,[...e[5]||(e[5]=[R("div",{class:"text-2xl mb-2"},"🔌",-1),R("div",{class:"font-semibold"},"设备与场地",-1),R("div",{class:"text-xs text-emerald-100/80 mt-1"},"部门仓库&办公室",-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",XE,[...e[6]||(e[6]=[R("div",{class:"text-2xl mb-2"},"📣",-1),R("div",{class:"font-semibold"},"校园影响力",-1),R("div",{class:"text-xs text-emerald-100/80 mt-1"},"作品展示与传播",-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",$E,[...e[7]||(e[7]=[R("div",{class:"text-2xl mb-2"},"📚",-1),R("div",{class:"font-semibold"},"资历丰富",-1),R("div",{class:"text-xs text-emerald-100/80 mt-1"},"多年社团沉淀与经验",-1)])])),[[t,void 0,'"pop"']])])),[[t,void 0,'"up"']]),Me((ne(),ie("div",jE,[...e[8]||(e[8]=[Kt('<div class="flex flex-col sm:flex-row items-center gap-4"><div class="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-black text-3xl"> 💡</div><div class="flex-1 text-center sm:text-left"><h3 class="font-bold text-lg">创新氛围与成长环境</h3><p class="mt-1 text-sm text-emerald-100/90">在这里，我们变点子为作品，行创意于实践，留成长给明天。</p></div></div>',1)])])),[[t,void 0,'"pop"']])])),[[t,void 0,'"up"']])])),[[t,void 0,'"fade"']])])),[[t]])])}const YE=Gn(LE,[["render",qE]]),KE={},ZE={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},JE={class:"w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-6 sm:gap-10"},QE={class:"mt-3 sm:mt-4 space-y-2 text-emerald-100/85 text-[15px] leading-relaxed",reveal:{delay:120}},eT={reveal:{delay:160}},tT={class:"mt-4 grid grid-cols-2 gap-3 text-sm",reveal:{delay:240}},nT={class:"mt-5",reveal:{delay:340}};function iT(n,e){const t=fi("reveal");return Me((ne(),ie("div",ZE,[R("div",JE,[Me((ne(),ie("div",null,[e[1]||(e[1]=R("h3",{class:"text-xl sm:text-2xl font-bold"},"我们希望你",-1)),Me((ne(),ie("ul",QE,[...e[0]||(e[0]=[R("li",null,"• 对技术或设计保持好奇心，愿意动手探索",-1),R("li",null,"• 愿意为学校工作出力（我们可是正经的学生会哦）",-1),R("li",null,"• 乐于沟通、保持开放",-1),R("li",null,"• 不设门槛，零基础亦可，只要愿意持续学习",-1)])])),[[t,void 0,'"up"']])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",eT,[e[4]||(e[4]=R("h3",{class:"text-xl sm:text-2xl font-bold"},"我们的小部门",-1)),Me((ne(),ie("div",tT,[...e[2]||(e[2]=[Kt('<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">技术部</div><div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">团支部</div><div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">常务部</div><div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">外联部</div><div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">部长部</div><div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 relative overflow-hidden"><span class="relative z-10">隐藏款</span><span class="absolute inset-0 flex items-center justify-center text-xl font-bold text-cyan-400/10 select-none">MEG</span></div>',6)])])),[[t,void 0,'"fade"']]),Me((ne(),ie("div",nT,[...e[3]||(e[3]=[R("a",{href:"#join",class:"inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold active:scale-[0.99]"},[it(" 现在报名 "),R("span",null,"→")],-1)])])),[[t,void 0,'"pop"']])])),[[t,void 0,'"pop"']])])])),[[t]])}const rT=Gn(KE,[["render",iT]]),sT={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto",reveal:{delay:380}},oT={class:"w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center"},aT={class:"order-1 md:order-2 reveal-in",style:{opacity:"1",transform:"none",filter:"none"}},lT={class:"md:hidden"},cT={class:"flex gap-3 overflow-x-auto w-full max-w-[100vw] py-1 scroll-hint no-scrollbar",style:{"scroll-snap-type":"x mandatory","-webkit-overflow-scrolling":"touch","overflow-x":"auto !important"}},uT=["src","onClick"],dT={class:"hidden md:block"},fT={class:"relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/70 border border-white/10"},hT={class:"absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-2"},pT=["src","onClick"],mT=["src"],gT=Jt({__name:"ProjectsSection",setup(n){const e=Je(null),t=f=>e.value=f,i=()=>{e.value=null,o.value=0,a.value=!1},r=["/works/a.jpg","/works/b.jpg","/works/c.jpg","/works/d.jpg","/works/e.jpg","/works/f.jpg","/works/g.jpg","/works/h.jpg","/works/i.jpg"],s=Je(0),o=Je(0),a=Je(!1),l=zt(()=>Math.max(.3,.85-Math.min(.55,o.value/600)));function c(f){e.value&&(a.value=!0,s.value=f.touches[0].clientY,o.value=0)}function u(f){if(!a.value)return;const p=f.touches[0].clientY-s.value;p>0&&(o.value=p)}function d(){a.value&&(a.value=!1,o.value>90?i():o.value=0)}return(f,p)=>{const _=fi("reveal");return Me((ne(),ie("div",sT,[R("div",oT,[p[1]||(p[1]=Kt('<div class="order-2 md:order-1"><h2 class="text-2xl sm:text-3xl font-bold">去实践，就是最好的学习</h2><p class="mt-3 sm:mt-4 text-emerald-100/80 leading-relaxed text-[15px] sm:text-base"> 从 0 到 1 完整经历：需求调研、方案设计、开发协作。学的不止是技术，更是把事情做成的能力。 </p><ul class="mt-4 sm:mt-6 space-y-2 text-emerald-100/80 text-sm list-disc list-inside"><li>硬件小制作</li><li>LED创新大赛</li><li>技术创意应用</li></ul><p class="mt-4 sm:mt-6 text-emerald-100/80 text-sm italic"> 让电子俱乐部成为你大放异彩的舞台 </p></div>',1)),R("div",aT,[R("div",lT,[R("div",cT,[(ne(),ie(Mt,null,En(r,g=>R("div",{key:g,class:"relative snap-center flex-shrink-0 w-[85vw] sm:w-[70vw] aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/70 border border-white/10 transition"},[R("img",{src:g,alt:"项目作品展示",class:"absolute inset-0 w-full h-full object-cover cursor-zoom-in",loading:"lazy",decoding:"async",sizes:"(max-width: 768px) 85vw, 400px",onClick:m=>t(g)},null,8,uT)])),64))])]),R("div",dT,[R("div",fT,[R("div",hT,[(ne(),ie(Mt,null,En(r,g=>R("div",{key:g,class:"relative rounded-lg bg-emerald-400/20 overflow-hidden"},[R("img",{src:g,alt:"项目作品展示",class:"absolute inset-0 w-full h-full object-cover cursor-zoom-in",loading:"lazy",decoding:"async",sizes:"(max-width: 1024px) 33vw, 320px",onClick:m=>t(g)},null,8,pT)])),64))])])])])]),(ne(),Rs(Xf,{to:"body"},[e.value?(ne(),ie("div",{key:0,class:"fixed inset-0 z-[60] backdrop-blur-sm flex items-center justify-center p-4",onClick:i,style:ai({backgroundColor:`rgba(0,0,0,${l.value})`}),onTouchstartPassive:c,onTouchmove:_n(u,["prevent"]),onTouchendPassive:d},[R("div",{class:"relative",style:ai({transform:o.value?`translateY(${o.value}px)`:""}),onClick:p[0]||(p[0]=_n(()=>{},["stop"]))},[R("img",{src:e.value,alt:"preview",class:"max-w-[95vw] max-h-[85vh] rounded-lg shadow-xl border border-white/10"},null,8,mT),R("button",{class:"absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg flex items-center justify-center backdrop-blur-sm border border-white/20",onClick:i},"×")],4)],36)):dt("",!0)]))])),[[_,void 0,'"up"']])}}}),_T={},vT={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},xT={class:"w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center"},bT={reveal:{delay:140}},yT={class:"mt-3 sm:mt-4 text-emerald-100/80 leading-relaxed text-[15px] sm:text-base",reveal:{delay:220}},ST={class:"mt-4 sm:mt-6 grid grid-cols-2 gap-3 text-sm",reveal:{delay:300}};function MT(n,e){const t=fi("reveal");return Me((ne(),ie("div",vT,[R("div",xT,[Me((ne(),ie("div",null,[...e[0]||(e[0]=[Kt('<div class="relative aspect-video rounded-xl overflow-hidden bg-slate-900/70 border border-white/10 flex items-center justify-center"><div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_60%)]"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.2),transparent_60%)]"></div><div class="relative z-10 text-center"><div class="text-5xl font-black tracking-tight">0 → 1</div><div class="mt-3 text-xs sm:text-sm text-emerald-100/80">每周例会 / 部长带队</div></div></div>',1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",bT,[e[3]||(e[3]=R("h2",{class:"text-2xl sm:text-3xl font-bold"},"路虽远，行则将至 我们携手这一程",-1)),Me((ne(),ie("p",yT,[...e[1]||(e[1]=[it("每位新成员会得到学习路径建议与部长指导，前期也会提供项目模板与工具链，快速上手并构建自信。",-1)])])),[[t,void 0,'"up"']]),Me((ne(),ie("div",ST,[...e[2]||(e[2]=[R("div",{class:"px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20"},"内部技术教学",-1),R("div",{class:"px-3 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20"},"仓库管理",-1),R("div",{class:"px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20"},"活动组织",-1),R("div",{class:"px-3 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20"},"宣发 / 运营",-1)])])),[[t,void 0,'"fade"']])])),[[t,void 0,'"pop"']])])])),[[t]])}const ET=Gn(_T,[["render",MT]]),af="/honors/1.jpg",lf="/honors/2.jpg",cf="/honors/3.jpg",uf="/honors/4.jpg",TT={},wT={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},AT={class:"w-full max-w-screen-lg mx-auto"},RT={class:"text-2xl sm:text-3xl font-bold text-center"},CT={class:"mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",reveal:{delay:140}},PT={class:"grid grid-cols-2 gap-4 sm:hidden",reveal:{delay:140}},DT={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform",reveal:{delay:200}},LT={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform",reveal:{delay:260}},IT={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform",reveal:{delay:320}},UT={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform",reveal:{delay:380}},NT={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block",reveal:{delay:200}},FT={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block",reveal:{delay:260}},OT={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block",reveal:{delay:320}},BT={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block",reveal:{delay:380}};function kT(n,e){const t=fi("reveal");return Me((ne(),ie("div",wT,[R("div",AT,[Me((ne(),ie("h2",RT,[...e[0]||(e[0]=[it("活动与荣誉",-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",CT,[Me((ne(),ie("div",PT,[Me((ne(),ie("div",DT,[...e[1]||(e[1]=[R("img",{src:af,alt:"快乐团建时光",class:"w-full h-35 object-cover"},null,-1),R("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),R("div",{class:"absolute bottom-0 left-0 right-0 p-3"},[R("div",{class:"text-white font-medium text-sm"},"运动这一块")],-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",LT,[...e[2]||(e[2]=[R("img",{src:lf,alt:"大佬云集",class:"w-full h-35 object-cover"},null,-1),R("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),R("div",{class:"absolute bottom-0 left-0 right-0 p-3"},[R("div",{class:"text-white font-medium text-sm"},"科普这一块")],-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",IT,[...e[3]||(e[3]=[R("img",{src:cf,alt:"院内教学",class:"w-full h-35 object-cover"},null,-1),R("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),R("div",{class:"absolute bottom-0 left-0 right-0 p-3"},[R("div",{class:"text-white font-medium text-sm"},"社团这一块")],-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",UT,[...e[4]||(e[4]=[R("img",{src:uf,alt:"十佳社团",class:"w-full h-35 object-cover"},null,-1),R("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),R("div",{class:"absolute bottom-0 left-0 right-0 p-3"},[R("div",{class:"text-white font-medium text-sm"},"配音这一块")],-1)])])),[[t,void 0,'"pop"']])])),[[t,void 0,'"fade"']]),Me((ne(),ie("div",NT,[...e[5]||(e[5]=[R("img",{src:af,alt:"快乐团建时光",class:"h-40 sm:h-56 w-full object-cover"},null,-1),R("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),R("div",{class:"absolute bottom-0 left-0 right-0 p-4 sm:p-6"},[R("div",{class:"text-white font-medium text-lg"},"运动这一块")],-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",FT,[...e[6]||(e[6]=[R("img",{src:lf,alt:"大佬云集",class:"h-40 sm:h-56 w-full object-cover"},null,-1),R("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),R("div",{class:"absolute bottom-0 left-0 right-0 p-4 sm:p-6"},[R("div",{class:"text-white font-medium text-lg"},"科普这一块")],-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",OT,[...e[7]||(e[7]=[R("img",{src:cf,alt:"院内教学",class:"h-40 sm:h-56 w-full object-cover"},null,-1),R("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),R("div",{class:"absolute bottom-0 left-0 right-0 p-4 sm:p-6"},[R("div",{class:"text-white font-medium text-lg"},"社团这一块")],-1)])])),[[t,void 0,'"pop"']]),Me((ne(),ie("div",BT,[...e[8]||(e[8]=[R("img",{src:uf,alt:"十佳社团",class:"h-40 sm:h-56 w-full object-cover"},null,-1),R("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),R("div",{class:"absolute bottom-0 left-0 right-0 p-4 sm:p-6"},[R("div",{class:"text-white font-medium text-lg"},"配音这一块")],-1)])])),[[t,void 0,'"pop"']])])),[[t,void 0,'"fade"']])])])),[[t]])}const zT=Gn(TT,[["render",kT]]),HT="/group_qr.jpg",VT="/qq_qr.jpg",GT={class:"w-full max-w-screen-sm mx-auto"},WT={class:"sr-only","aria-hidden":"true"},XT={class:"relative"},$T=["aria-invalid"],jT={key:0,class:"mt-1 text-xs text-rose-400"},qT={class:"grid grid-cols-2 gap-3"},YT={class:"relative"},KT={key:0,class:"mt-1 text-xs text-rose-400"},ZT={class:"relative"},JT={key:0,class:"mt-1 text-xs text-rose-400"},QT={class:"grid grid-cols-3 gap-2 items-start"},e1={key:1,class:"col-span-3 relative"},t1={class:"absolute -bottom-4 right-0 text-[10px] text-emerald-100/50"},n1={key:0,class:"mt-1 text-xs text-rose-400"},i1={class:"relative"},r1=["maxlength"],s1={class:"mt-2 flex items-center justify-between text-xs"},o1={class:"h-1 flex-1 rounded bg-white/10 mr-3 overflow-hidden"},a1={class:"text-emerald-100/70"},l1={key:0,class:"mt-1 text-xs text-rose-400"},c1=["disabled"],u1={key:0},d1={key:1},f1={key:0,class:"text-center text-xs text-rose-400 mt-1"},h1={key:0,class:"fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+16px)] mx-auto w-[90%] max-w-sm px-4 py-3 rounded-xl bg-emerald-500 text-black text-center shadow-lg"},p1="https://eclubapi.kitramgp.cn/api/join",us=200,m1=30,g1=Jt({__name:"JoinForm",setup(n){const e=Hr({majorClass:"",studentId:"",name:"",stack:"",message:"",customStack:""}),t=Hr({majorClass:!1,studentId:!1,name:!1,stack:!1,message:!1,customStack:!1}),i=Je(!1),r=Je(!1),s=Je(""),o=Je(Number(localStorage.getItem("join_last_submit")||0)),a=Je(Date.now());let l;gi(()=>{l=window.setInterval(()=>{a.value=Date.now()},1e3)}),Pc(()=>{l&&clearInterval(l)});const c=zt(()=>{const m=a.value-o.value,h=m1*1e3-m;return h>0?Math.ceil(h/1e3):0}),u=Je("");function d(){const m=Date.now(),h=Math.random().toString(36).slice(2,10),y=btoa(`${m}-${h}-${(e.message||"").length}`);return{ts:m,nonce:h,sig:y}}const f=zt(()=>({majorClass:e.majorClass?"":"请输入你的专业与班级",studentId:e.studentId?"":"请输入学号",name:e.name?"":"请输入姓名",stack:e.stack?e.stack==="其他"&&!e.customStack?.trim()?"请输入自定义优势":"":"请选择优势",message:e.message.length>us?`最多 ${us} 字`:""})),p=zt(()=>Object.values(f.value).every(m=>!m));async function _(){if(c.value>0){s.value=`请稍后 ${c.value}s 再提交`;return}if(u.value.trim()){r.value=!0,setTimeout(()=>r.value=!1,1500);return}if(Object.keys(t).forEach(m=>t[m]=!0),!!p.value){i.value=!0,s.value="";try{const m=e.stack==="其他"?e.customStack?.trim():e.stack,h=d(),y={majorClass:e.majorClass,studentId:e.studentId,name:e.name,stack:m,message:e.message,meta:h};await new Promise(x=>setTimeout(x,150+Math.random()*300));const S=await fetch(p1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)});if(!S.ok){let x="";try{const C=await S.json();x=C?.error||C?.message||""}catch{}throw new Error(`提交失败(${S.status}) ${x}`)}o.value=Date.now(),localStorage.setItem("join_last_submit",String(o.value)),r.value=!0,setTimeout(()=>r.value=!1,2500),e.majorClass="",e.studentId="",e.name="",e.stack="",e.customStack="",e.message="",Object.keys(t).forEach(x=>t[x]=!1)}catch(m){s.value=m?.message||"提交出错，请稍后再试"}finally{i.value=!1}}}function g(m){t[m]=!0}return(m,h)=>(ne(),ie("div",GT,[R("form",{onSubmit:_n(_,["prevent"]),class:"space-y-5"},[R("div",WT,[R("label",null,[h[21]||(h[21]=it("请不要填写此字段",-1)),Me(R("input",{autocomplete:"off",tabindex:"-1","onUpdate:modelValue":h[0]||(h[0]=y=>u.value=y),class:"pointer-events-none opacity-0"},null,512),[[nn,u.value]])])]),R("div",null,[R("div",XT,[Me(R("input",{"onUpdate:modelValue":h[1]||(h[1]=y=>e.majorClass=y),onFocus:h[2]||(h[2]=y=>g("majorClass")),onBlur:h[3]||(h[3]=y=>g("majorClass")),"aria-invalid":!!(t.majorClass&&f.value.majorClass),placeholder:"专业与班级",inputmode:"text",autocomplete:"organization-title",enterkeyhint:"next",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"},null,40,$T),[[nn,e.majorClass,void 0,{trim:!0}]]),h[22]||(h[22]=R("label",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"}," 专业与班级 ",-1))]),t.majorClass&&f.value.majorClass?(ne(),ie("p",jT,ot(f.value.majorClass),1)):dt("",!0)]),R("div",qT,[R("div",null,[R("div",YT,[Me(R("input",{"onUpdate:modelValue":h[4]||(h[4]=y=>e.studentId=y),onFocus:h[5]||(h[5]=y=>g("studentId")),onBlur:h[6]||(h[6]=y=>g("studentId")),inputmode:"numeric",autocomplete:"on",enterkeyhint:"next",placeholder:"学号",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"},null,544),[[nn,e.studentId,void 0,{trim:!0}]]),h[23]||(h[23]=R("label",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"}," 学号 ",-1))]),t.studentId&&f.value.studentId?(ne(),ie("p",KT,ot(f.value.studentId),1)):dt("",!0)]),R("div",null,[R("div",ZT,[Me(R("input",{"onUpdate:modelValue":h[7]||(h[7]=y=>e.name=y),onFocus:h[8]||(h[8]=y=>g("name")),onBlur:h[9]||(h[9]=y=>g("name")),inputmode:"text",autocomplete:"name",autocapitalize:"off",enterkeyhint:"next",placeholder:"姓名",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"},null,544),[[nn,e.name,void 0,{trim:!0}]]),h[24]||(h[24]=R("label",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"}," 姓名 ",-1))]),t.name&&f.value.name?(ne(),ie("p",JT,ot(f.value.name),1)):dt("",!0)])]),R("div",null,[h[25]||(h[25]=R("div",{class:"text-sm text-emerald-100/80 mb-2"},"优势点",-1)),R("div",QT,[R("button",{type:"button",onClick:h[10]||(h[10]=y=>{e.stack="硬件",e.customStack="",g("stack")}),class:At(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm",e.stack==="硬件"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 硬件 ",2),R("button",{type:"button",onClick:h[11]||(h[11]=y=>{e.stack="软件",e.customStack="",g("stack")}),class:At(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm",e.stack==="软件"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 软件 ",2),R("button",{type:"button",onClick:h[12]||(h[12]=y=>{e.stack="管理",e.customStack="",g("stack")}),class:At(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm",e.stack==="管理"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 管理 ",2),e.stack!=="其他"?(ne(),ie("button",{key:0,type:"button",onClick:h[13]||(h[13]=y=>{e.stack="其他",g("stack")}),class:At(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm col-span-3",e.stack==="其他"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 其他（点击填写） ",2)):dt("",!0),e.stack==="其他"?(ne(),ie("div",e1,[Me(R("input",{"onUpdate:modelValue":h[14]||(h[14]=y=>e.customStack=y),onFocus:h[15]||(h[15]=y=>{g("stack"),t.customStack=!0}),onBlur:h[16]||(h[16]=y=>g("stack")),maxlength:"20",placeholder:"请输入你的自定义优势 (20字内)",class:"peer w-full rounded-xl bg-white/5 border border-emerald-400/60 text-white focus:outline-none focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/30 transition text-base pl-4 pr-14 py-3 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"},null,544),[[nn,e.customStack,void 0,{trim:!0}]]),R("button",{type:"button","aria-label":"取消自定义",onClick:h[17]||(h[17]=y=>{e.stack="",e.customStack="",g("stack")}),class:"absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-md bg-white/10 hover:bg-white/15 flex items-center justify-center text-emerald-100/80 leading-none active:scale-[0.95]"}," ✕ "),R("div",t1,ot(e.customStack?.length||0)+"/20",1)])):dt("",!0)]),t.stack&&f.value.stack?(ne(),ie("p",n1,ot(f.value.stack),1)):dt("",!0)]),R("div",null,[R("div",i1,[Me(R("textarea",{"onUpdate:modelValue":h[18]||(h[18]=y=>e.message=y),onFocus:h[19]||(h[19]=y=>g("message")),onBlur:h[20]||(h[20]=y=>g("message")),maxlength:us+20,rows:"5",inputmode:"text",enterkeyhint:"send",placeholder:"想说的话",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/40 transition text-base px-4 pt-7 pb-3 resize-none placeholder-transparent"},null,40,r1),[[nn,e.message]]),h[26]||(h[26]=R("label",{class:"absolute left-4 top-4 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"}," 想说的话 ",-1)),R("div",s1,[R("div",o1,[R("div",{class:"h-full bg-gradient-to-r from-emerald-400 to-cyan-400",style:ai({width:Math.min(100,Math.round(e.message.length/us*100))+"%"})},null,4)]),R("span",a1,ot(e.message.length)+" / "+ot(us),1)])]),t.message&&f.value.message?(ne(),ie("p",l1,ot(f.value.message),1)):dt("",!0)]),R("button",{disabled:i.value||!p.value||c.value>0,onClick:_n(_,["prevent"]),class:"w-full py-4 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] active:scale-[0.99]",style:{"margin-bottom":"calc(env(safe-area-inset-bottom) + 8px)"}},[c.value>0?(ne(),ie("span",u1,"冷却 "+ot(c.value)+"s…",1)):(ne(),ie("span",d1,ot(i.value?"提交中…":"提交报名"),1))],8,c1),h[27]||(h[27]=R("p",{class:"text-center text-xs text-emerald-100/60"},"提交后请耐心等待 静候开学后相关通知",-1)),s.value?(ne(),ie("p",f1,ot(s.value),1)):dt("",!0)],32),r.value?(ne(),ie("div",h1," 提交成功，感谢支持！ ")):dt("",!0)]))}}),_1=Gn(g1,[["__scopeId","data-v-bd594de0"]]),v1=24,x1=Jt({__name:"JoinGlow",props:{active:{type:Boolean},burstKey:{}},setup(n){const e=n,t=Je(null);let i=0,r=null,s=0,o=0,a=Math.min(window.devicePixelRatio||1,2),l=!1,c=[],u=[];function d(S,x){return Math.random()*(x-S)+S}function f(){const S=t.value,x=S.getBoundingClientRect();s=Math.floor(x.width),o=Math.floor(x.height),a=Math.min(window.devicePixelRatio||1,2),S.width=Math.max(1,Math.floor(s*a)),S.height=Math.max(1,Math.floor(o*a)),r=S.getContext("2d"),r&&r.setTransform(a,0,0,a,0,0)}function p(){const S=Math.floor(v1*Math.min(1.5,Math.max(.8,s*o/304200)));c=Array.from({length:S},()=>({x:d(0,s),y:d(0,o),vx:d(-.12,.12),vy:d(-.12,.12),r:d(.6,1.8),hue:d(150,210),alpha:d(.25,.6)}))}function _(){const S=s/2,x=Math.min(o*.45,o-80);u.push(...Array.from({length:90},()=>{const L=d(0,Math.PI*2),D=d(.6,2.2);return{x:S+d(-10,10),y:x+d(-10,10),vx:Math.cos(L)*D,vy:Math.sin(L)*D-d(.2,.6),r:d(1.2,2.6),hue:d(140,220),life:0,maxLife:d(42,70)}}))}function g(){if(!r)return;const S=r.createRadialGradient(s/2,o/2,0,s/2,o/2,Math.max(s,o)*.7);S.addColorStop(0,"rgba(16,255,192,0.04)"),S.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=S,r.fillRect(0,0,s,o)}function m(){if(r){r.fillStyle="rgba(0,0,0,0.35)",r.fillRect(0,0,s,o),g();for(const S of c)S.x+=S.vx,S.y+=S.vy,S.x<-10&&(S.x=s+10),S.x>s+10&&(S.x=-10),S.y<-10&&(S.y=o+10),S.y>o+10&&(S.y=-10),r.beginPath(),r.fillStyle=`hsla(${S.hue}, 80%, 70%, ${S.alpha})`,r.arc(S.x,S.y,S.r,0,Math.PI*2),r.fill();for(let S=u.length-1;S>=0;S--){const x=u[S];x.life+=1,x.x+=x.vx,x.y+=x.vy,x.vy+=.02;const C=1-x.life/x.maxLife;r.beginPath(),r.fillStyle=`hsla(${x.hue}, 90%, 70%, ${Math.max(0,C)})`,r.arc(x.x,x.y,x.r*(.8+.4*C),0,Math.PI*2),r.fill(),x.life>=x.maxLife&&u.splice(S,1)}l&&(i=requestAnimationFrame(m))}}function h(){l||(l=!0,f(),p(),r?.clearRect(0,0,s,o),i=requestAnimationFrame(m))}function y(){l=!1,cancelAnimationFrame(i)}return gi(()=>{const S=()=>{f(),p()};window.addEventListener("resize",S),zm(()=>{e.active?h():y()}),cr(()=>e.burstKey,()=>{e.active&&(u.splice(0,u.length),_())})}),Bi(()=>{y(),window.removeEventListener("resize",f)}),(S,x)=>(ne(),ie("canvas",{ref_key:"canvasRef",ref:t,class:"absolute inset-0 w-full h-full pointer-events-none select-none"},null,512))}}),b1={class:"relative z-10 w-full max-w-screen-md mx-auto text-center"},y1={class:"text-lg sm:text-xl mt-3 text-white font-semibold",reveal:{delay:120}},S1={class:"mt-3 sm:mt-4 text-sm sm:text-base text-emerald-100/80 max-w-md mx-auto px-1",reveal:{delay:200}},M1={class:"mt-1 text-xs sm:text-sm text-emerald-100/70 max-w-md mx-auto px-1",reveal:{delay:220}},E1={class:"mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6",reveal:{delay:260}},T1={class:"relative z-10 mt-9 sm:mt-12",reveal:{delay:340}},w1=Jt({__name:"JoinUsSection",setup(n){const e=Je(null),t=Je(!1),i=Je(0);let r=null;return gi(()=>{r=new IntersectionObserver(s=>{const o=s[0];o&&(o.isIntersecting?(t.value=!0,i.value++):t.value=!1)},{threshold:.35}),e.value&&r.observe(e.value)}),Bi(()=>{r?.disconnect(),r=null}),(s,o)=>{const a=fi("reveal");return Me((ne(),ie("div",{id:"join",ref_key:"joinRef",ref:e,class:"relative px-4 sm:px-5 py-16 sm:py-20 overflow-hidden cv-auto"},[rt(x1,{active:t.value,"burst-key":i.value},null,8,["active","burst-key"]),Me((ne(),ie("div",b1,[o[4]||(o[4]=R("h2",{class:"text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]"},[it(" 加入我们，"),R("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300"},"一起"),it("把灵感上线 ")],-1)),Me((ne(),ie("p",y1,[...o[0]||(o[0]=[it("让知识开花",-1)])])),[[a,void 0,'"up"']]),Me((ne(),ie("p",S1,[...o[1]||(o[1]=[it("扫码进群 / 关注学校官方通知",-1)])])),[[a,void 0,'"fade"']]),Me((ne(),ie("p",M1,[...o[2]||(o[2]=[it("或者在下面的表格留个名，我们会多关照哦",-1)])])),[[a,void 0,'"fade"']]),Me((ne(),ie("div",E1,[...o[3]||(o[3]=[Kt('<div class="flex flex-col items-center"><div class="relative group"><div class="p-[2px] rounded-2xl bg-[linear-gradient(140deg,rgba(255,255,255,0.85),rgba(255,255,255,0.55),rgba(255,255,255,0.78))] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_0_22px_4px_rgba(255,255,255,0.55),0_6px_28px_-8px_rgba(16,185,129,0.25)]"><div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative"><img src="'+HT+'" alt="官方迎新群二维码" class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.015]" decoding="async" loading="lazy"><div class="pointer-events-none absolute inset-0 ring-1 ring-black/5"></div><div class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-60 bg-[radial-gradient(circle_at_25%_30%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(34,211,238,0.16),transparent_60%)]"></div></div></div><div class="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.45),transparent_70%)]"></div></div><div class="mt-2 text-[10px] sm:text-xs text-emerald-100/80 tracking-wide">官方迎新群</div></div><div class="flex flex-col items-center"><div class="relative group"><div class="p-[2.5px] rounded-2xl bg-gradient-to-tr from-cyan-400/80 via-emerald-400/60 to-white/70 shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_0_22px_4px_rgba(34,211,238,0.18),0_6px_28px_-8px_rgba(16,185,129,0.18)]"><div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative"><img src="'+VT+'" alt="官Q二维码" class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]" decoding="async" loading="lazy"><div class="pointer-events-none absolute inset-0 ring-1 ring-cyan-400/10"></div><div class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-70 bg-[radial-gradient(circle_at_25%_30%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(16,185,129,0.14),transparent_60%)]"></div></div></div><div class="pointer-events-none absolute -inset-3 rounded-2xl opacity-80 group-hover:opacity-100 transition duration-500 blur-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.55),rgba(16,185,129,0.25),transparent_80%)]"></div></div><div class="mt-2 text-[10px] sm:text-xs text-cyan-200/80 tracking-wide font-semibold">电子俱乐部官方QQ</div></div>',2)])])),[[a,void 0,'"pop"']])])),[[a,void 0,'"pop"']]),Me((ne(),ie("div",T1,[rt(_1)])),[[a,void 0,'"pop"']])])),[[a]])}}}),A1={class:"fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 z-50 flex flex-col items-end gap-3"},R1={key:0},C1={key:1},P1=Jt({__name:"FloatingUI",setup(n){const e=Je(!1),t=Je(!1),i=Je(!1);let r=null;function s(){const l=document.documentElement.scrollTop||document.body.scrollTop;e.value=l>240}function o(){if(r=window.__bgm||null,!r){t.value=!1;return}t.value=!0,r.paused?r.play().then(()=>{i.value=!0}).catch(()=>{}):(r.pause(),i.value=!1)}gi(()=>{window.addEventListener("scroll",s,{passive:!0}),s(),r=window.__bgm||null,t.value=!!r,r?r.play().then(()=>{i.value=!0}).catch(()=>{i.value=!1}):i.value=!1}),Bi(()=>{window.removeEventListener("scroll",s)});function a(){window.scrollTo({top:0,behavior:"smooth"})}return(l,c)=>(ne(),ie("div",A1,[t.value?(ne(),ie("button",{key:0,onClick:o,class:"relative w-12 h-12 flex items-center justify-center p-0 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white shadow-lg active:scale-95 transition"},[i.value?(ne(),ie("span",R1,"🔊")):(ne(),ie("span",C1,"🔈"))])):dt("",!0),Me(R("button",{onClick:a,class:"relative w-12 h-12 flex items-center justify-center p-0 rounded-full bg-gradient-to-tr from-emerald-400/90 to-cyan-400/90 text-black font-bold shadow-lg active:scale-95 transition border border-white/20"}," ↑ ",512),[[Th,e.value]])]))}}),D1={class:"relative text-white scroll-smooth overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-950 to-black"},L1={class:"relative z-20 text-white"},I1=Jt({__name:"ClubPoster",setup(n){return(e,t)=>(ne(),ie("section",D1,[t[0]||(t[0]=Kt('<div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0" data-v-d871c9fd><div class="absolute -top-[60vh] -left-[50vw] w-[160vw] h-[160vh] rounded-full bg-emerald-400/35 blur-[200px] opacity-40" style="will-change:transform, opacity;" data-v-d871c9fd></div><div class="absolute top-[20vh] -right-[60vw] w-[140vw] h-[140vh] rounded-full bg-cyan-400/35 blur-[200px] opacity-30" style="will-change:transform, opacity;" data-v-d871c9fd></div><div class="absolute bottom-[-50vh] left-[-20vw] w-[130vw] h-[130vh] rounded-full bg-emerald-300/30 blur-[200px] opacity-50" style="will-change:transform, opacity;" data-v-d871c9fd></div><div class="absolute inset-x-0 top-[-10vh] h-[100vh] bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(16,185,129,0.45)_40%,rgba(34,211,238,0.45)_60%,rgba(34,211,238,0)_100%)] opacity-20 blur-2xl" style="will-change:transform, opacity;" data-v-d871c9fd></div><div class="absolute inset-x-0 top-[60vh] h-[100vh] bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(34,211,238,0.4)_50%,rgba(16,185,129,0)_100%)] opacity-15 blur-2xl" style="will-change:transform, opacity;" data-v-d871c9fd></div><div class="absolute inset-x-0 top-[140vh] h-[100vh] bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(34,211,238,0.35)_50%,rgba(16,185,129,0)_100%)] opacity-10 blur-2xl" style="will-change:transform, opacity;" data-v-d871c9fd></div></div>',1)),R("div",L1,[rt(P1),rt(cE),rt(DE),rt(YE),rt(rT),rt(gT),rt(ET),rt(zT),rt(w1)])]))}}),U1=Gn(I1,[["__scopeId","data-v-d871c9fd"]]),N1="/led1.jpg",F1="/led2.jpg",O1="/led3.jpg",B1="/purchase.jpg",k1="/example.jpg",z1={class:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 font-sans overflow-hidden"},H1={class:"fixed inset-0 z-0 pointer-events-none"},V1={class:"absolute inset-0 opacity-5"},G1={class:"grid grid-cols-20 grid-rows-20 h-full w-full"},W1={class:"relative z-10 container mx-auto px-4 py-6 sm:py-8 max-w-6xl"},X1={class:"fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 z-50"},$1={class:"mb-12 sm:mb-20 text-center relative"},j1={class:"max-w-3xl mx-auto"},q1={class:"flex justify-center mb-6 sm:mb-8"},Y1={class:"flex gap-1 p-3 sm:p-4 bg-white/70 rounded-full border border-slate-200 backdrop-blur-sm shadow-sm"},K1={class:"mb-12 sm:mb-16",id:"register"},Z1={class:"bg-gradient-to-br from-white via-slate-50 to-sky-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-lg"},J1={class:"relative z-10"},Q1={key:0,class:"text-center mb-6 sm:mb-10"},ew={key:1,class:"max-w-2xl mx-auto space-y-6"},tw={class:"space-y-3 sm:space-y-4"},nw={class:"space-y-2"},iw={key:0,class:"text-red-500 text-xs mt-1 block ml-1"},rw={class:"grid sm:grid-cols-2 gap-4 sm:gap-6"},sw={class:"space-y-2"},ow={key:0,class:"text-red-500 text-xs mt-1 block ml-1"},aw={class:"space-y-2"},lw={key:0,class:"text-red-500 text-xs mt-1 block ml-1"},cw={class:"grid sm:grid-cols-2 gap-4 sm:gap-6"},uw={class:"space-y-2"},dw={class:"grid grid-cols-4 gap-2"},fw=["onClick"],hw={key:0,class:"text-red-500 text-xs mt-1 block ml-1"},pw={class:"space-y-2"},mw={key:0,class:"text-red-500 text-xs mt-1 block ml-1"},gw={class:"space-y-4"},_w={class:"flex items-center justify-between gap-2 text-sm text-slate-700"},vw=["disabled"],xw={class:"space-y-3"},bw={class:"flex items-center justify-between text-xs text-emerald-700"},yw=["onClick"],Sw={class:"grid sm:grid-cols-2 gap-3"},Mw={class:"space-y-1.5"},Ew=["onUpdate:modelValue","onInput"],Tw={key:0,class:"text-red-500 text-xs mt-1 block ml-1"},ww={class:"space-y-1.5"},Aw=["onUpdate:modelValue","onInput"],Rw={key:0,class:"text-red-500 text-xs mt-1 block ml-1"},Cw={class:"grid sm:grid-cols-2 gap-3"},Pw={class:"space-y-1.5"},Dw={class:"grid grid-cols-4 gap-1.5"},Lw=["onClick"],Iw={key:0,class:"text-red-500 text-xs mt-1 block ml-1"},Uw={class:"space-y-1.5"},Nw=["onUpdate:modelValue","onInput"],Fw={key:0,class:"text-red-500 text-xs mt-1 block ml-1"},Ow={class:"space-y-3 sm:space-y-4"},Bw={class:"space-y-2"},kw={key:0,class:"text-red-500 text-xs mt-1 block ml-1"},zw={key:2,class:"max-w-4xl mx-auto animate-fade-in"},Hw={key:0,class:"text-center max-w-md mx-auto mb-8"},Vw={key:1,class:"text-center max-w-4xl mx-auto"},Gw={class:"flex flex-col gap-4"},Ww={key:0,class:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm flex items-start gap-2 animate-fade-in"},Xw=["disabled"],$w={key:0,class:"relative z-10"},jw={key:1,class:"relative z-10"},qw={class:"flex flex-col sm:flex-row gap-4 justify-center items-center"},Yw={class:"fixed inset-0 pointer-events-none z-0"},Kw=Jt({__name:"LedCompetitionView",setup(n){const e=r_(),t=Je({teamName:"",leaderName:"",leaderStudentId:"",leaderGrade:"",leaderMajorClass:"",contact:"",note:"",members:[]}),i=Je(1),r=Je(!1),s=Je(!1),o=Je(!1),a=Je(""),l=Je({teamName:"",leaderName:"",leaderStudentId:"",leaderGrade:"",leaderMajorClass:"",contact:"",members:[]});function c(){l.value={teamName:"",leaderName:"",leaderStudentId:"",leaderGrade:"",leaderMajorClass:"",contact:"",members:t.value.members.map(()=>({name:"",studentId:"",grade:"",majorClass:""}))};let h=!1;t.value.teamName||(l.value.teamName="请输入队伍名称",h=!0),t.value.leaderName||(l.value.leaderName="请输入队长姓名",h=!0);const y=x=>/^\d+$/.test(x),S=x=>/^[\u4e00-\u9fa5\d\s-]+$/.test(x);if(t.value.leaderStudentId?y(t.value.leaderStudentId)||(l.value.leaderStudentId="队长学号必须为纯数字",h=!0):(l.value.leaderStudentId="请输入队长学号",h=!0),t.value.leaderGrade||(l.value.leaderGrade="请选择队长年级",h=!0),t.value.leaderMajorClass?S(t.value.leaderMajorClass)||(l.value.leaderMajorClass="专业班级应为中文、数字或 - 的组合",h=!0):(l.value.leaderMajorClass="请输入队长专业与班级",h=!0),t.value.contact?y(t.value.contact)||(l.value.contact="联系方式必须为纯数字",h=!0):(l.value.contact="请输入联系方式",h=!0),t.value.members.forEach((x,C)=>{const L=x.name||x.studentId||x.grade||x.majorClass,D=x.name&&x.studentId&&x.grade&&x.majorClass;L&&!D&&(x.name||(l.value.members[C].name="请补全姓名"),x.studentId||(l.value.members[C].studentId="请补全学号"),x.grade||(l.value.members[C].grade="请选择年级"),x.majorClass||(l.value.members[C].majorClass="请补全专业班级"),h=!0),D&&(y(x.studentId)||(l.value.members[C].studentId="学号必须为纯数字",h=!0),S(x.majorClass)||(l.value.members[C].majorClass="专业班级应为中文、数字或 - 的组合",h=!0))}),h){setTimeout(()=>{const x=document.querySelector(".text-red-500");x&&x.scrollIntoView({behavior:"smooth",block:"center"})},100);return}i.value=2}async function u(){if(!(s.value||i.value!==2)){s.value=!0,a.value="";try{const h={isLed:!0,teamName:t.value.teamName,leaderName:t.value.leaderName,leaderStudentId:t.value.leaderStudentId,leaderGrade:t.value.leaderGrade,leaderMajorClass:t.value.leaderMajorClass,contact:t.value.contact,members:t.value.members.filter(S=>S.name&&S.studentId),note:t.value.note||"",meta:{timestamp:new Date().toISOString(),status:"paid",submitFrom:"led-competition-view"}},y=await fetch("https://eclubapi.kitramgp.cn/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});if(y.ok)o.value=!0,setTimeout(()=>{p()},3e3);else{const S=await y.json().catch(()=>({message:"未知错误"}));throw new Error(S.message||"提交失败")}}catch(h){console.error("上传失败：",h),a.value=h.message||"网络错误，请稍后重试"}finally{s.value=!1}}}function d(){t.value.members.length>=2||(t.value.members.push({name:"",studentId:"",grade:"",majorClass:""}),l.value.members.push({name:"",studentId:"",grade:"",majorClass:""}))}function f(h){t.value.members.splice(h,1),l.value.members.splice(h,1)}function p(){e.push("/")}const _=Je(!1);function g(){const h=document.documentElement.scrollTop||document.body.scrollTop;_.value=h>240}function m(){window.scrollTo({top:0,behavior:"smooth"})}return gi(()=>{setTimeout(()=>{r.value=!0},100),window.addEventListener("scroll",g,{passive:!0}),g()}),Bi(()=>{window.removeEventListener("scroll",g)}),(h,y)=>(ne(),ie("div",z1,[R("div",H1,[R("div",V1,[R("div",G1,[(ne(),ie(Mt,null,En(400,S=>R("div",{key:S,class:"border border-slate-300/20 relative overflow-hidden"},[R("div",{class:"absolute inset-0 bg-slate-200/10 animate-pulse",style:ai(`animation-delay: ${Math.random()*3}s; animation-duration: ${2+Math.random()*4}s`)},null,4)])),64))])]),y[11]||(y[11]=Kt('<div class="absolute top-1/4 left-1/4 w-64 h-64 opacity-3" data-v-36bc7a42><svg class="w-full h-full" viewBox="0 0 200 200" data-v-36bc7a42><path d="M20,20 L180,20 L180,180 L20,180 Z" stroke="url(#circuit-gradient-light)" stroke-width="1" fill="none" data-v-36bc7a42></path><circle cx="50" cy="50" r="2" fill="#0ea5e9" class="animate-pulse" data-v-36bc7a42></circle><circle cx="150" cy="150" r="2" fill="#10b981" class="animate-pulse" data-v-36bc7a42></circle><path d="M50,50 L100,100 L150,150" stroke="url(#circuit-gradient-light)" stroke-width="0.5" fill="none" data-v-36bc7a42></path><defs data-v-36bc7a42><linearGradient id="circuit-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%" data-v-36bc7a42><stop offset="0%" stop-color="#0ea5e9" data-v-36bc7a42></stop><stop offset="100%" stop-color="#10b981" data-v-36bc7a42></stop></linearGradient></defs></svg></div><div class="absolute top-1/3 right-1/4 w-32 h-32 bg-sky-200/20 blur-[60px] rounded-full animate-pulse" data-v-36bc7a42></div><div class="absolute bottom-1/4 left-1/3 w-40 h-40 bg-emerald-200/15 blur-[80px] rounded-full animate-pulse" style="animation-delay:2s;" data-v-36bc7a42></div>',3))]),R("div",W1,[R("div",X1,[Me(R("button",{onClick:m,class:"relative w-12 h-12 flex items-center justify-center p-0 rounded-full bg-gradient-to-tr from-sky-400/90 to-emerald-400/90 text-white font-bold shadow-lg active:scale-95 transition border border-white/20 backdrop-blur-md"}," ↑ ",512),[[Th,_.value]])]),R("header",{class:"flex justify-between items-center mb-8 sm:mb-16"},[R("button",{onClick:p,class:"group text-sky-600 hover:text-sky-700 flex items-center gap-2 transition-all duration-300 backdrop-blur-sm bg-white/80 px-4 py-2 rounded-full border border-slate-200 hover:border-sky-300 cursor-pointer shadow-sm"},[...y[12]||(y[12]=[R("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),it(" 返回首页 ",-1)])]),y[13]||(y[13]=R("div",{class:"text-lg sm:text-xl font-bold tracking-wider bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent"}," 电子俱乐部·比赛专区 ",-1))]),R("section",$1,[y[15]||(y[15]=Kt('<div class="relative inline-block" data-v-36bc7a42><div class="absolute -inset-8 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-2xl rounded-full" data-v-36bc7a42></div><h1 class="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 relative" data-v-36bc7a42><span class="block transform hover:scale-105 transition-transform duration-500 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent" data-v-36bc7a42> LED 创意大赛 </span><span class="block text-xl sm:text-2xl md:text-5xl mt-1 sm:mt-2 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent" data-v-36bc7a42> 技术实战 创意比拼 </span></h1></div>',1)),R("div",j1,[y[14]||(y[14]=R("p",{class:"text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-300"}," 当代码遇见光芒，当逻辑邂逅美学。用51单片机点亮第一盏灯，让LED跟随你的心跳呼吸，让光与影在你的指尖跳舞。 ",-1)),R("div",q1,[R("div",Y1,[(ne(),ie(Mt,null,En(12,S=>R("div",{key:S,class:At(["w-2 h-6 sm:w-3 sm:h-8 rounded-full animate-pulse",S%3===0?"bg-emerald-500":S%3===1?"bg-cyan-500":"bg-blue-500"]),style:ai(`animation-delay: ${S*.1}s`)},null,6)),64))])])])]),y[39]||(y[39]=Kt('<section class="mb-12 sm:mb-20" data-v-36bc7a42><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-v-36bc7a42><div class="group bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-sky-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm" data-v-36bc7a42><div class="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-sky-200 transition-colors" data-v-36bc7a42><svg class="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-36bc7a42><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-36bc7a42></path></svg></div><h3 class="text-lg sm:text-xl font-bold text-sky-700 mb-1 sm:mb-2" data-v-36bc7a42>技术挑战</h3><p class="text-slate-600 text-sm" data-v-36bc7a42>从第一行代码到第一盏灯亮，感受技术带来的成就感</p></div><div class="group bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-amber-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm" data-v-36bc7a42><div class="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors" data-v-36bc7a42><svg class="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-36bc7a42><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-v-36bc7a42></path></svg></div><h3 class="text-lg sm:text-xl font-bold text-amber-700 mb-1 sm:mb-2" data-v-36bc7a42>创意无限</h3><p class="text-slate-600 text-sm" data-v-36bc7a42>让LED跟随心跳呼吸，让创意在光影中绽放</p></div><div class="group bg-gradient-to-br from-violet-50 to-white border border-violet-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-violet-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm" data-v-36bc7a42><div class="w-10 h-10 sm:w-12 sm:h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-violet-200 transition-colors" data-v-36bc7a42><svg class="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-36bc7a42><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-36bc7a42></path></svg></div><h3 class="text-lg sm:text-xl font-bold text-violet-700 mb-1 sm:mb-2" data-v-36bc7a42>丰厚奖品</h3><p class="text-slate-600 text-sm" data-v-36bc7a42>超多奖品奖状等你来拿，技术实力换真金白银</p></div></div></section><div class="grid md:grid-cols-2 gap-8 mb-20" data-v-36bc7a42><div class="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 backdrop-blur-md hover:border-sky-300 transition-all duration-500 shadow-sm" data-v-36bc7a42><div class="flex items-center mb-6" data-v-36bc7a42><div class="w-1 h-10 bg-gradient-to-b from-sky-500 to-emerald-500 rounded-full mr-4" data-v-36bc7a42></div><h2 class="text-3xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent" data-v-36bc7a42> 比赛规则 </h2></div><div class="space-y-6" data-v-36bc7a42><div class="relative pl-6 border-l-2 border-emerald-500/30" data-v-36bc7a42><div class="absolute -left-2 top-2 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" data-v-36bc7a42></div><p class="text-slate-600 leading-relaxed" data-v-36bc7a42>就像学习任何技能一样，我们从基础开始。第一部分用51单片机完成指定效果，打好扎实基础；第二部分放手创新，让想象力自由飞翔。 </p></div><div class="relative pl-6 border-l-2 border-cyan-500/30" data-v-36bc7a42><div class="absolute -left-2 top-2 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style="animation-delay:0.5s;" data-v-36bc7a42></div><p class="text-slate-600 leading-relaxed" data-v-36bc7a42>从规范要求到自由创作，每一步都是对技术的理解深化。这不仅是一场比赛，更是一次完整的学习旅程。</p></div><div class="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 border border-sky-200 mt-6" data-v-36bc7a42><p class="text-sky-800 font-semibold text-lg mb-2" data-v-36bc7a42>掌握基础，勇于创新，在比赛中提升技术实力！</p><p class="text-sm text-sky-700" data-v-36bc7a42>从基础到创新，从规范到自由，完整的比赛体验。丰厚奖品等你来拿，更重要的是收获成长！</p></div></div></div><div class="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 backdrop-blur-md hover:border-emerald-300 transition-all duration-500 shadow-sm" data-v-36bc7a42><div class="flex items-center mb-6" data-v-36bc7a42><div class="w-1 h-10 bg-gradient-to-b from-emerald-500 to-sky-500 rounded-full mr-4" data-v-36bc7a42></div><h2 class="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent" data-v-36bc7a42> 比赛内容 </h2></div><div class="space-y-6" data-v-36bc7a42><div class="group/item bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl p-5 border border-emerald-200 hover:border-emerald-300 transition-all duration-300" data-v-36bc7a42><div class="flex items-start gap-4" data-v-36bc7a42><div class="bg-gradient-to-br from-emerald-500 to-sky-500 text-white px-3 py-1 rounded-lg font-mono text-sm font-bold" data-v-36bc7a42> 第一部分 </div><div class="flex-1" data-v-36bc7a42><h3 class="font-bold text-slate-800 text-lg mb-2" data-v-36bc7a42>公共赛题（强制要求）</h3><p class="text-slate-600 text-sm leading-relaxed mb-3" data-v-36bc7a42>必须使用51单片机完成指定的LED效果，考验基础编程能力。</p><div class="text-xs text-emerald-700 bg-emerald-100 rounded-lg p-2" data-v-36bc7a42><strong data-v-36bc7a42>要求：</strong>51单片机 + 基础LED控制电路 </div></div></div></div><div class="group/item bg-gradient-to-r from-sky-50 to-violet-50 rounded-xl p-5 border border-sky-200 hover:border-sky-300 transition-all duration-300" data-v-36bc7a42><div class="flex items-start gap-4" data-v-36bc7a42><div class="bg-gradient-to-br from-sky-500 to-violet-500 text-white px-3 py-1 rounded-lg font-mono text-sm font-bold" data-v-36bc7a42> 第二部分 </div><div class="flex-1" data-v-36bc7a42><h3 class="font-bold text-slate-800 text-lg mb-2" data-v-36bc7a42>自由发挥（创意展示）</h3><p class="text-slate-600 text-sm leading-relaxed mb-3" data-v-36bc7a42>自由选择单片机类型和实现方式，展现技术深度和创意能力。</p><div class="text-xs text-sky-700 bg-sky-100 rounded-lg p-2" data-v-36bc7a42><strong data-v-36bc7a42>选项：</strong>万能板、任意单片机、EDA设计PCB、其他创新方案 </div></div></div></div></div></div></div><section class="mb-12 sm:mb-20" data-v-36bc7a42><h2 class="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent" data-v-36bc7a42> 往届精彩瞬间 </h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-v-36bc7a42><div class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-sky-300 transition-all duration-300 shadow-sm" data-v-36bc7a42><div class="aspect-video bg-gradient-to-br from-sky-50 to-slate-50 flex items-center justify-center overflow-hidden" data-v-36bc7a42><img src="'+N1+'" alt="LED创意作品展示" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-v-36bc7a42><div class="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-36bc7a42></div></div></div><div class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 transition-all duration-300 shadow-sm" data-v-36bc7a42><div class="aspect-video bg-gradient-to-br from-emerald-50 to-slate-50 flex items-center justify-center overflow-hidden" data-v-36bc7a42><img src="'+F1+'" alt="作品制作过程" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-v-36bc7a42><div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-36bc7a42></div></div></div><div class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-violet-300 transition-all duration-300 shadow-sm" data-v-36bc7a42><div class="aspect-video bg-gradient-to-br from-violet-50 to-slate-50 flex items-center justify-center overflow-hidden" data-v-36bc7a42><img src="'+O1+'" alt="获奖作品展示" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-v-36bc7a42><div class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-36bc7a42></div></div></div></div></section>',3)),R("section",K1,[R("div",Z1,[y[38]||(y[38]=R("div",{class:"absolute inset-0 opacity-3"},[R("div",{class:"absolute inset-0",style:{"background-image":"radial-gradient(circle at 25% 25%, #0ea5e9 1px, transparent 1px), radial-gradient(circle at 75% 75%, #10b981 1px, transparent 1px)","background-size":"40px 40px"}})],-1)),R("div",J1,[i.value===1?(ne(),ie("div",Q1,[...y[16]||(y[16]=[R("h2",{class:"text-2xl sm:text-4xl font-bold text-slate-800 mb-2 sm:mb-4"},"比赛队伍报名 - 步骤1/2",-1),R("p",{class:"text-slate-600 text-sm sm:text-base"},"填写队伍信息，完成后进入支付环节",-1)])])):dt("",!0),i.value===1?(ne(),ie("div",ew,[R("div",tw,[R("div",nw,[y[17]||(y[17]=R("label",{class:"text-sm text-sky-700 font-medium flex items-center gap-2"},[R("span",{class:"w-2 h-2 bg-sky-500 rounded-full animate-pulse"}),it(" 队伍名称 ")],-1)),Me(R("input",{"onUpdate:modelValue":y[0]||(y[0]=S=>t.value.teamName=S),onInput:y[1]||(y[1]=S=>l.value.teamName=""),type:"text",class:At(["w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg placeholder-slate-400",{"border-red-500 focus:border-red-500 focus:ring-red-500/50":l.value.teamName}]),placeholder:"给你们的队伍起个响亮的名字"},null,34),[[nn,t.value.teamName]]),l.value.teamName?(ne(),ie("span",iw,ot(l.value.teamName),1)):dt("",!0)])]),R("div",rw,[R("div",sw,[y[18]||(y[18]=R("label",{class:"text-sm text-sky-700 font-medium flex items-center gap-2"},[R("span",{class:"w-2 h-2 bg-sky-500 rounded-full animate-pulse",style:{"animation-delay":"0.1s"}}),it(" 队长姓名 ")],-1)),Me(R("input",{"onUpdate:modelValue":y[2]||(y[2]=S=>t.value.leaderName=S),onInput:y[3]||(y[3]=S=>l.value.leaderName=""),type:"text",class:At(["w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm placeholder-slate-400",{"border-red-500 focus:border-red-500 focus:ring-red-500/50":l.value.leaderName}]),placeholder:"请输入队长姓名"},null,34),[[nn,t.value.leaderName]]),l.value.leaderName?(ne(),ie("span",ow,ot(l.value.leaderName),1)):dt("",!0)]),R("div",aw,[y[19]||(y[19]=R("label",{class:"text-sm text-sky-700 font-medium flex items-center gap-2"},[R("span",{class:"w-2 h-2 bg-sky-500 rounded-full animate-pulse",style:{"animation-delay":"0.2s"}}),it(" 队长学号 ")],-1)),Me(R("input",{"onUpdate:modelValue":y[4]||(y[4]=S=>t.value.leaderStudentId=S),onInput:y[5]||(y[5]=S=>l.value.leaderStudentId=""),type:"text",class:At(["w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm placeholder-slate-400",{"border-red-500 focus:border-red-500 focus:ring-red-500/50":l.value.leaderStudentId}]),placeholder:"请输入队长学号"},null,34),[[nn,t.value.leaderStudentId]]),l.value.leaderStudentId?(ne(),ie("span",lw,ot(l.value.leaderStudentId),1)):dt("",!0)])]),R("div",cw,[R("div",uw,[y[20]||(y[20]=R("label",{class:"text-sm text-sky-700 font-medium flex items-center gap-2"},[R("span",{class:"w-2 h-2 bg-sky-500 rounded-full animate-pulse",style:{"animation-delay":"0.25s"}}),it(" 队长年级 ")],-1)),R("div",dw,[(ne(),ie(Mt,null,En(["25","24","23","22"],S=>R("button",{key:S,type:"button",onClick:x=>{t.value.leaderGrade=S,l.value.leaderGrade=""},class:At(["px-2 py-2 rounded-lg border text-sm transition active:scale-95",t.value.leaderGrade===S?"bg-sky-500 text-white border-sky-500 shadow-sm":"bg-white/80 text-slate-700 border-slate-300 hover:border-sky-400",l.value.leaderGrade?"border-red-500":""])},ot(S)+" 级 ",11,fw)),64))]),l.value.leaderGrade?(ne(),ie("span",hw,ot(l.value.leaderGrade),1)):dt("",!0)]),R("div",pw,[y[21]||(y[21]=R("label",{class:"text-sm text-sky-700 font-medium flex items-center gap-2"},[R("span",{class:"w-2 h-2 bg-sky-500 rounded-full animate-pulse",style:{"animation-delay":"0.3s"}}),it(" 队长专业与班级 ")],-1)),Me(R("input",{"onUpdate:modelValue":y[6]||(y[6]=S=>t.value.leaderMajorClass=S),onInput:y[7]||(y[7]=S=>l.value.leaderMajorClass=""),type:"text",class:At(["w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm placeholder-slate-400",{"border-red-500 focus:border-red-500 focus:ring-red-500/50":l.value.leaderMajorClass}]),placeholder:"例如：电子三班"},null,34),[[nn,t.value.leaderMajorClass]]),l.value.leaderMajorClass?(ne(),ie("span",mw,ot(l.value.leaderMajorClass),1)):dt("",!0)])]),R("div",gw,[R("div",_w,[y[22]||(y[22]=R("div",{class:"flex items-center gap-2"},[R("span",{class:"w-2 h-2 bg-emerald-500 rounded-full animate-pulse",style:{"animation-delay":"0.4s"}}),it(" 队友信息（选填，最多 2 名） ")],-1)),R("button",{type:"button",onClick:d,class:"px-3 py-1.5 rounded-full text-xs bg-emerald-500 text-white shadow-sm active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed",disabled:t.value.members.length>=2}," 添加队友 ",8,vw)]),R("div",xw,[(ne(!0),ie(Mt,null,En(t.value.members,(S,x)=>(ne(),ie("div",{key:x,class:"rounded-2xl border border-emerald-200 bg-emerald-50/60 px-4 py-3 space-y-3 relative"},[R("div",bw,[R("span",null,"队友 "+ot(x+1),1),R("button",{type:"button",class:"text-emerald-700/70 hover:text-emerald-900 active:scale-95",onClick:C=>f(x)}," 删除 ",8,yw)]),R("div",Sw,[R("div",Mw,[y[23]||(y[23]=R("label",{class:"text-xs text-slate-600"},"姓名",-1)),Me(R("input",{"onUpdate:modelValue":C=>S.name=C,onInput:C=>l.value.members[x].name="",type:"text",class:At(["w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 text-sm placeholder-slate-400",{"border-red-500 focus:border-red-500 focus:ring-red-500/40":l.value.members[x]?.name}]),placeholder:"队友姓名"},null,42,Ew),[[nn,S.name]]),l.value.members[x]?.name?(ne(),ie("span",Tw,ot(l.value.members[x].name),1)):dt("",!0)]),R("div",ww,[y[24]||(y[24]=R("label",{class:"text-xs text-slate-600"},"学号",-1)),Me(R("input",{"onUpdate:modelValue":C=>S.studentId=C,onInput:C=>l.value.members[x].studentId="",type:"text",class:At(["w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 text-sm placeholder-slate-400",{"border-red-500 focus:border-red-500 focus:ring-red-500/40":l.value.members[x]?.studentId}]),placeholder:"队友学号"},null,42,Aw),[[nn,S.studentId]]),l.value.members[x]?.studentId?(ne(),ie("span",Rw,ot(l.value.members[x].studentId),1)):dt("",!0)])]),R("div",Cw,[R("div",Pw,[y[25]||(y[25]=R("label",{class:"text-xs text-slate-600"},"年级",-1)),R("div",Dw,[(ne(),ie(Mt,null,En(["25","24","23","22"],C=>R("button",{key:C,type:"button",onClick:L=>{S.grade=C,l.value.members[x].grade=""},class:At(["px-2 py-1.5 rounded-lg border text-[11px] leading-none transition active:scale-95",S.grade===C?"bg-emerald-500 text-white border-emerald-500":"bg-white text-slate-700 border-slate-300 hover:border-emerald-400",l.value.members[x]?.grade?"border-red-500":""])},ot(C)+" 级 ",11,Lw)),64))]),l.value.members[x]?.grade?(ne(),ie("span",Iw,ot(l.value.members[x].grade),1)):dt("",!0)]),R("div",Uw,[y[26]||(y[26]=R("label",{class:"text-xs text-slate-600"},"专业与班级",-1)),Me(R("input",{"onUpdate:modelValue":C=>S.majorClass=C,onInput:C=>l.value.members[x].majorClass="",type:"text",class:At(["w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 text-sm placeholder-slate-400",{"border-red-500 focus:border-red-500 focus:ring-red-500/40":l.value.members[x]?.majorClass}]),placeholder:"例如：机器人一班"},null,42,Nw),[[nn,S.majorClass]]),l.value.members[x]?.majorClass?(ne(),ie("span",Fw,ot(l.value.members[x].majorClass),1)):dt("",!0)])])]))),128))])]),R("div",Ow,[R("div",Bw,[y[27]||(y[27]=R("label",{class:"text-sm text-sky-700 font-medium flex items-center gap-2"},[R("span",{class:"w-2 h-2 bg-sky-500 rounded-full animate-pulse",style:{"animation-delay":"0.45s"}}),it(" 联系方式（队长 QQ / 微信 / 手机） ")],-1)),Me(R("input",{"onUpdate:modelValue":y[8]||(y[8]=S=>t.value.contact=S),onInput:y[9]||(y[9]=S=>l.value.contact=""),type:"text",class:At(["w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg placeholder-slate-400",{"border-red-500 focus:border-red-500 focus:ring-red-500/50":l.value.contact}]),placeholder:"方便我们与队长取得联系"},null,34),[[nn,t.value.contact]]),l.value.contact?(ne(),ie("span",kw,ot(l.value.contact),1)):dt("",!0)])]),R("button",{onClick:c,class:"w-full bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-500 active:from-sky-400 active:via-blue-400 active:to-emerald-400 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-lg shadow-sky-500/20 transform transition-all duration-300 active:scale-[0.98] cursor-pointer relative overflow-hidden group touch-manipulation"},[...y[28]||(y[28]=[R("span",{class:"relative z-10"},"下一步：支付报名费",-1),R("div",{class:"absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-opacity duration-300"},null,-1)])])])):i.value===2?(ne(),ie("div",zw,[y[37]||(y[37]=R("div",{class:"text-center mb-8"},[R("h2",{class:"text-2xl sm:text-4xl font-bold text-slate-800 mb-2"},"支付报名费 - 步骤2/2"),R("p",{class:"text-slate-600 text-sm sm:text-base"},"完成支付以确认报名")],-1)),o.value?(ne(),ie("div",Hw,[...y[29]||(y[29]=[Kt('<div class="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-8 mb-6" data-v-36bc7a42><div class="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4" data-v-36bc7a42><svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-36bc7a42><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" data-v-36bc7a42></path></svg></div><h3 class="text-2xl font-bold text-emerald-700 mb-2" data-v-36bc7a42>报名成功！</h3><p class="text-emerald-600 mb-4" data-v-36bc7a42>我们已收到您的报名信息</p><p class="text-sm text-emerald-500" data-v-36bc7a42>3秒后自动返回首页...</p></div>',1)])])):(ne(),ie("div",Vw,[y[36]||(y[36]=Kt('<div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl mb-6 border border-slate-200" data-v-36bc7a42><h2 class="text-2xl font-bold text-slate-800 mb-6" data-v-36bc7a42>完成支付确认报名</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" data-v-36bc7a42><div class="text-center" data-v-36bc7a42><h3 class="text-lg font-semibold text-slate-800 mb-3" data-v-36bc7a42>扫描下方二维码支付</h3><div class="w-48 h-64 sm:w-56 sm:h-72 mx-auto bg-white rounded-xl border-4 border-slate-200 shadow-lg overflow-hidden" data-v-36bc7a42><img src="'+B1+'" alt="收款二维码" class="w-full h-full object-cover" data-v-36bc7a42></div></div><div class="text-center" data-v-36bc7a42><h3 class="text-lg font-semibold text-slate-800 mb-3" data-v-36bc7a42>支付备注填写示例</h3><div class="w-48 h-64 sm:w-56 sm:h-72 mx-auto bg-white rounded-xl border-4 border-slate-200 shadow-lg overflow-hidden" data-v-36bc7a42><img src="'+k1+'" alt="备注示例" class="w-full h-full object-cover" data-v-36bc7a42></div></div></div></div><div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 mb-6 border border-amber-200" data-v-36bc7a42><p class="text-base text-amber-700 mb-2" data-v-36bc7a42><span class="inline-block w-6 h-6 bg-amber-500 rounded-full text-white font-bold mr-2 text-center" data-v-36bc7a42>⚠</span> 重要提醒 </p><p class="text-sm text-amber-600" data-v-36bc7a42> 支付时请务必在<span class="font-bold text-slate-800 underline mx-1" data-v-36bc7a42>备注</span>中填写你的<span class="font-bold text-slate-800 mx-1" data-v-36bc7a42>年级+班级+姓名</span>，否则无法确认报名！ </p><p class="text-xs text-amber-500 mt-2" data-v-36bc7a42>参考右侧示例图片，确保备注格式正确</p></div>',2)),R("div",Gw,[a.value?(ne(),ie("div",Ww,[y[32]||(y[32]=R("svg",{class:"w-5 h-5 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),R("div",null,[y[30]||(y[30]=R("p",{class:"font-bold"},"提交失败",-1)),R("p",null,ot(a.value),1),y[31]||(y[31]=R("p",{class:"mt-1 text-xs opacity-80"},"如已支付成功，请勿重复支付，我们会人工核对信息后联系您。",-1))])])):dt("",!0),R("button",{onClick:u,disabled:s.value,class:"w-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 active:from-emerald-400 active:via-green-400 active:to-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/20 transform transition-all duration-300 active:scale-[0.98] cursor-pointer relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"},[s.value?(ne(),ie("span",jw,[...y[33]||(y[33]=[R("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white inline",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[R("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),R("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),it(" 正在提交... ",-1)])])):(ne(),ie("span",$w,"我已确认支付，提交信息")),y[34]||(y[34]=R("div",{class:"absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-opacity duration-300"},null,-1))],8,Xw),R("div",qw,[R("button",{onClick:y[10]||(y[10]=S=>i.value=1),class:"group text-slate-500 hover:text-sky-600 text-sm underline cursor-pointer transition-colors"},[...y[35]||(y[35]=[R("span",{class:"flex items-center gap-2"},[R("svg",{class:"w-4 h-4 group-hover:-translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})]),it(" 返回上一步修改信息 ")],-1)])])])])]))])):dt("",!0)])])]),R("div",Yw,[(ne(),ie(Mt,null,En(15,S=>R("div",{key:S,class:At(["absolute w-1 h-1 rounded-full animate-ping opacity-30",Math.random()>.5?"bg-sky-400":"bg-emerald-400"]),style:ai(`
               left: ${Math.random()*100}%;
               top: ${Math.random()*100}%;
               animation-delay: ${Math.random()*5}s;
               animation-duration: ${4+Math.random()*6}s;
             `)},null,6)),64))])])]))}}),Zw=Gn(Kw,[["__scopeId","data-v-36bc7a42"]]),Jw=i_({history:N0("/"),routes:[{path:"/",name:"home",component:U1},{path:"/led-competition",name:"led-competition",component:Zw}],scrollBehavior(n,e,t){return t||{top:0}}}),ha=qg(N_);ha.use(Jw);const xp=new IntersectionObserver(n=>{n.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add("reveal-in"),xp.unobserve(t)}})},{threshold:.18,rootMargin:"0px 0px -10% 0px"});ha.directive("reveal",{mounted(n,e){n.classList.add("reveal-init","reveal-anim");const t=typeof e.value=="object"&&e.value?e.value:{},i=e.arg||t.variant;i&&n.classList.add("reveal-"+i);const r=t.delay||0;r&&(n.style.transitionDelay=r+"ms"),xp.observe(n)}});ha.directive("tilt",{mounted(n,e){const t=navigator.userAgent;if(/Mobi|Android|iPhone|iPad|iPod|Phone/i.test(t))return;const r=typeof e.value=="object"&&e.value?e.value:{},s=Number(r.max||e.value||10),o=Number(r.scale||1.02),a=Number(r.perspective||800);let l=0,c=!1;const u=()=>{c=!0,n.style.willChange="transform",n.style.transition="transform 180ms ease",n.classList.add("tilt-active")},d=()=>{c=!1,cancelAnimationFrame(l),n.style.transform=`perspective(${a}px)`,n.style.transition="transform 220ms cubic-bezier(.2,.6,.2,1)",n.classList.remove("tilt-active")},f=p=>{c&&(cancelAnimationFrame(l),l=requestAnimationFrame(()=>{const _=n.getBoundingClientRect(),g=_.left+_.width/2,m=_.top+_.height/2,h=(p.clientX-g)/(_.width/2),S=(-((p.clientY-m)/(_.height/2))*s).toFixed(2),x=(h*s).toFixed(2);n.style.transform=`perspective(${a}px) rotateX(${S}deg) rotateY(${x}deg) scale(${o})`}))};n.addEventListener("mouseenter",u),n.addEventListener("mousemove",f),n.addEventListener("mouseleave",d),n.__tiltCleanup=()=>{n.removeEventListener("mouseenter",u),n.removeEventListener("mousemove",f),n.removeEventListener("mouseleave",d)}},unmounted(n){n.__tiltCleanup?.()}});ha.mount("#app");(function(){const e=navigator.userAgent;if(!/Mobi|Android|iPhone|iPad|iPod|Phone/i.test(e))return;const i="/bgm.m4a",r=new Audio(i);window.__bgm=r,r.loop=!0,r.preload="auto"})();(function(){if(typeof window>"u"||typeof document>"u")return;const e=document.createElement("div");e.className="scroll-progress";const t=document.createElement("div");t.className="scroll-progress__bar",e.appendChild(t),document.body.appendChild(e);let i=null;const r=()=>{i=null;const o=document.documentElement,a=document.body,l=o.scrollTop||a.scrollTop,c=(o.scrollHeight||a.scrollHeight)-o.clientHeight,u=c>0?Math.min(1,l/c):0;t.style.transform=`scaleX(${u})`},s=()=>{i==null&&(i=requestAnimationFrame(r))};window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),r()})();console.log("咦 竟然是个会看终端的聪明宝宝");console.log("那我在这里加点私货应该也没事吧QwQ");console.log(`
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
