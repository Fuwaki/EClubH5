(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function _c(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},Ir=[],Hn=()=>{},df=()=>!1,Ko=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vc=n=>n.startsWith("onUpdate:"),Lt=Object.assign,xc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},wp=Object.prototype.hasOwnProperty,lt=(n,e)=>wp.call(n,e),$e=Array.isArray,Ur=n=>Zo(n)==="[object Map]",ff=n=>Zo(n)==="[object Set]",je=n=>typeof n=="function",yt=n=>typeof n=="string",Oi=n=>typeof n=="symbol",_t=n=>n!==null&&typeof n=="object",hf=n=>(_t(n)||je(n))&&je(n.then)&&je(n.catch),pf=Object.prototype.toString,Zo=n=>pf.call(n),Ap=n=>Zo(n).slice(8,-1),mf=n=>Zo(n)==="[object Object]",bc=n=>yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ps=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Rp=/-\w/g,vn=Jo(n=>n.replace(Rp,e=>e.slice(1).toUpperCase())),Cp=/\B([A-Z])/g,fr=Jo(n=>n.replace(Cp,"-$1").toLowerCase()),Qo=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ga=Jo(n=>n?`on${Qo(n)}`:""),Pi=(n,e)=>!Object.is(n,e),Mo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},gf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},yc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Pp=n=>{const e=yt(n)?Number(n):NaN;return isNaN(e)?n:e};let iu;const ea=()=>iu||(iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oi(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=yt(i)?Up(i):oi(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(yt(n)||_t(n))return n}const Dp=/;(?![^(]*\))/g,Lp=/:([^]+)/,Ip=/\/\*[^]*?\*\//g;function Up(n){const e={};return n.replace(Ip,"").split(Dp).forEach(t=>{if(t){const i=t.split(Lp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Mn(n){let e="";if(yt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Mn(n[t]);i&&(e+=i+" ")}else if(_t(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Np="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fp=_c(Np);function _f(n){return!!n||n===""}const vf=n=>!!(n&&n.__v_isRef===!0),It=n=>yt(n)?n:n==null?"":$e(n)||_t(n)&&(n.toString===pf||!je(n.toString))?vf(n)?It(n.value):JSON.stringify(n,xf,2):String(n),xf=(n,e)=>vf(e)?xf(n,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[_a(i,s)+" =>"]=r,t),{})}:ff(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>_a(t))}:Oi(e)?_a(e):_t(e)&&!$e(e)&&!mf(e)?String(e):e,_a=(n,e="")=>{var t;return Oi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Qt;class Op{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qt,!e&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Qt;try{return Qt=this,e()}finally{Qt=t}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){this._on>0&&--this._on===0&&(Qt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Bp(){return Qt}let gt;const va=new WeakSet;class bf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&Qt.active&&Qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,va.has(this)&&(va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ru(this),Mf(this);const e=gt,t=Tn;gt=this,Tn=!0;try{return this.fn()}finally{Ef(this),gt=e,Tn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ec(e);this.deps=this.depsTail=void 0,ru(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ul(this)&&this.run()}get dirty(){return ul(this)}}let yf=0,ms,gs;function Sf(n,e=!1){if(n.flags|=8,e){n.next=gs,gs=n;return}n.next=ms,ms=n}function Sc(){yf++}function Mc(){if(--yf>0)return;if(gs){let e=gs;for(gs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ms;){let e=ms;for(ms=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Mf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ef(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ec(i),kp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ul(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Tf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ms)||(n.globalVersion=Ms,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ul(n))))return;n.flags|=2;const e=n.dep,t=gt,i=Tn;gt=n,Tn=!0;try{Mf(n);const r=n.fn(n._value);(e.version===0||Pi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{gt=t,Tn=i,Ef(n),n.flags&=-3}}function Ec(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ec(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function kp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Tn=!0;const wf=[];function li(){wf.push(Tn),Tn=!1}function ci(){const n=wf.pop();Tn=n===void 0?!0:n}function ru(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let Ms=0;class zp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!Tn||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new zp(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,Af(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,Ms++,this.notify(e)}notify(e){Sc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Mc()}}}function Af(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Af(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const dl=new WeakMap,or=Symbol(""),fl=Symbol(""),Es=Symbol("");function Ot(n,e,t){if(Tn&&gt){let i=dl.get(n);i||dl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Tc),r.map=i,r.key=t),r.track()}}function ti(n,e,t,i,r,s){const o=dl.get(n);if(!o){Ms++;return}const a=l=>{l&&l.trigger()};if(Sc(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&bc(t);if(l&&t==="length"){const d=Number(i);o.forEach((u,f)=>{(f==="length"||f===Es||!Oi(f)&&f>=d)&&a(u)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Es)),e){case"add":l?c&&a(o.get("length")):(a(o.get(or)),Ur(n)&&a(o.get(fl)));break;case"delete":l||(a(o.get(or)),Ur(n)&&a(o.get(fl)));break;case"set":Ur(n)&&a(o.get(or));break}}Mc()}function pr(n){const e=st(n);return e===n?e:(Ot(e,"iterate",Es),gn(n)?e:e.map(Cn))}function ta(n){return Ot(n=st(n),"iterate",Es),n}function Ei(n,e){return ui(n)?ar(n)?Vr(Cn(e)):Vr(e):Cn(e)}const Hp={__proto__:null,[Symbol.iterator](){return xa(this,Symbol.iterator,n=>Ei(this,n))},concat(...n){return pr(this).concat(...n.map(e=>$e(e)?pr(e):e))},entries(){return xa(this,"entries",n=>(n[1]=Ei(this,n[1]),n))},every(n,e){return Wn(this,"every",n,e,void 0,arguments)},filter(n,e){return Wn(this,"filter",n,e,t=>t.map(i=>Ei(this,i)),arguments)},find(n,e){return Wn(this,"find",n,e,t=>Ei(this,t),arguments)},findIndex(n,e){return Wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Wn(this,"findLast",n,e,t=>Ei(this,t),arguments)},findLastIndex(n,e){return Wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ba(this,"includes",n)},indexOf(...n){return ba(this,"indexOf",n)},join(n){return pr(this).join(n)},lastIndexOf(...n){return ba(this,"lastIndexOf",n)},map(n,e){return Wn(this,"map",n,e,void 0,arguments)},pop(){return es(this,"pop")},push(...n){return es(this,"push",n)},reduce(n,...e){return su(this,"reduce",n,e)},reduceRight(n,...e){return su(this,"reduceRight",n,e)},shift(){return es(this,"shift")},some(n,e){return Wn(this,"some",n,e,void 0,arguments)},splice(...n){return es(this,"splice",n)},toReversed(){return pr(this).toReversed()},toSorted(n){return pr(this).toSorted(n)},toSpliced(...n){return pr(this).toSpliced(...n)},unshift(...n){return es(this,"unshift",n)},values(){return xa(this,"values",n=>Ei(this,n))}};function xa(n,e,t){const i=ta(n),r=i[e]();return i!==n&&!gn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Vp=Array.prototype;function Wn(n,e,t,i,r,s){const o=ta(n),a=o!==n&&!gn(n),l=o[e];if(l!==Vp[e]){const u=l.apply(n,s);return a?Cn(u):u}let c=t;o!==n&&(a?c=function(u,f){return t.call(this,Ei(n,u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const d=l.call(o,c,i);return a&&r?r(d):d}function su(n,e,t,i){const r=ta(n);let s=t;return r!==n&&(gn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ei(n,a),l,n)}),r[e](s,...i)}function ba(n,e,t){const i=st(n);Ot(i,"iterate",Es);const r=i[e](...t);return(r===-1||r===!1)&&Rc(t[0])?(t[0]=st(t[0]),i[e](...t)):r}function es(n,e,t=[]){li(),Sc();const i=st(n)[e].apply(n,t);return Mc(),ci(),i}const Gp=_c("__proto__,__v_isRef,__isVue"),Rf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Oi));function Wp(n){Oi(n)||(n=String(n));const e=st(this);return Ot(e,"has",n),e.hasOwnProperty(n)}class Cf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?em:If:s?Lf:Df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!r){let l;if(o&&(l=Hp[t]))return l;if(t==="hasOwnProperty")return Wp}const a=Reflect.get(e,t,zt(e)?e:i);if((Oi(t)?Rf.has(t):Gp(t))||(r||Ot(e,"get",t),s))return a;if(zt(a)){const l=o&&bc(t)?a:a.value;return r&&_t(l)?pl(l):l}return _t(a)?r?pl(a):Hr(a):a}}class Pf extends Cf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=$e(e)&&bc(t);if(!this._isShallow){const c=ui(s);if(!gn(i)&&!ui(i)&&(s=st(s),i=st(i)),!o&&zt(s)&&!zt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:lt(e,t),l=Reflect.set(e,t,i,zt(e)?e:r);return e===st(r)&&(a?Pi(i,s)&&ti(e,"set",t,i):ti(e,"add",t,i)),l}deleteProperty(e,t){const i=lt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ti(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Oi(t)||!Rf.has(t))&&Ot(e,"has",t),i}ownKeys(e){return Ot(e,"iterate",$e(e)?"length":or),Reflect.ownKeys(e)}}class Xp extends Cf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $p=new Pf,qp=new Xp,jp=new Pf(!0);const hl=n=>n,$s=n=>Reflect.getPrototypeOf(n);function Yp(n,e,t){return function(...i){const r=this.__v_raw,s=st(r),o=Ur(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),d=t?hl:e?Vr:Cn;return!e&&Ot(s,"iterate",l?fl:or),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function qs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Kp(n,e){const t={get(r){const s=this.__v_raw,o=st(s),a=st(r);n||(Pi(r,a)&&Ot(o,"get",r),Ot(o,"get",a));const{has:l}=$s(o),c=e?hl:n?Vr:Cn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ot(st(r),"iterate",or),r.size},has(r){const s=this.__v_raw,o=st(s),a=st(r);return n||(Pi(r,a)&&Ot(o,"has",r),Ot(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=st(a),c=e?hl:n?Vr:Cn;return!n&&Ot(l,"iterate",or),a.forEach((d,u)=>r.call(s,c(d),c(u),o))}};return Lt(t,n?{add:qs("add"),set:qs("set"),delete:qs("delete"),clear:qs("clear")}:{add(r){!e&&!gn(r)&&!ui(r)&&(r=st(r));const s=st(this);return $s(s).has.call(s,r)||(s.add(r),ti(s,"add",r,r)),this},set(r,s){!e&&!gn(s)&&!ui(s)&&(s=st(s));const o=st(this),{has:a,get:l}=$s(o);let c=a.call(o,r);c||(r=st(r),c=a.call(o,r));const d=l.call(o,r);return o.set(r,s),c?Pi(s,d)&&ti(o,"set",r,s):ti(o,"add",r,s),this},delete(r){const s=st(this),{has:o,get:a}=$s(s);let l=o.call(s,r);l||(r=st(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ti(s,"delete",r,void 0),c},clear(){const r=st(this),s=r.size!==0,o=r.clear();return s&&ti(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Yp(r,n,e)}),t}function wc(n,e){const t=Kp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(lt(t,r)&&r in i?t:i,r,s)}const Zp={get:wc(!1,!1)},Jp={get:wc(!1,!0)},Qp={get:wc(!0,!1)};const Df=new WeakMap,Lf=new WeakMap,If=new WeakMap,em=new WeakMap;function tm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nm(n){return n.__v_skip||!Object.isExtensible(n)?0:tm(Ap(n))}function Hr(n){return ui(n)?n:Ac(n,!1,$p,Zp,Df)}function Uf(n){return Ac(n,!1,jp,Jp,Lf)}function pl(n){return Ac(n,!0,qp,Qp,If)}function Ac(n,e,t,i,r){if(!_t(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=nm(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function ar(n){return ui(n)?ar(n.__v_raw):!!(n&&n.__v_isReactive)}function ui(n){return!!(n&&n.__v_isReadonly)}function gn(n){return!!(n&&n.__v_isShallow)}function Rc(n){return n?!!n.__v_raw:!1}function st(n){const e=n&&n.__v_raw;return e?st(e):n}function im(n){return!lt(n,"__v_skip")&&Object.isExtensible(n)&&gf(n,"__v_skip",!0),n}const Cn=n=>_t(n)?Hr(n):n,Vr=n=>_t(n)?pl(n):n;function zt(n){return n?n.__v_isRef===!0:!1}function et(n){return Nf(n,!1)}function rm(n){return Nf(n,!0)}function Nf(n,e){return zt(n)?n:new sm(n,e)}class sm{constructor(e,t){this.dep=new Tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:st(e),this._value=t?e:Cn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||gn(e)||ui(e);e=i?e:st(e),Pi(e,t)&&(this._rawValue=e,this._value=i?e:Cn(e),this.dep.trigger())}}function lr(n){return zt(n)?n.value:n}const om={get:(n,e,t)=>e==="__v_raw"?n:lr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return zt(r)&&!zt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ff(n){return ar(n)?n:new Proxy(n,om)}class am{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return Sf(this,!0),!0}get value(){const e=this.dep.track();return Tf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lm(n,e,t=!1){let i,r;return je(n)?i=n:(i=n.get,r=n.set),new am(i,r,t)}const js={},No=new WeakMap;let Zi;function cm(n,e=!1,t=Zi){if(t){let i=No.get(t);i||No.set(t,i=[]),i.push(n)}}function um(n,e,t=pt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=b=>r?b:gn(b)||r===!1||r===0?ni(b,1):ni(b);let d,u,f,p,v=!1,g=!1;if(zt(n)?(u=()=>n.value,v=gn(n)):ar(n)?(u=()=>c(n),v=!0):$e(n)?(g=!0,v=n.some(b=>ar(b)||gn(b)),u=()=>n.map(b=>{if(zt(b))return b.value;if(ar(b))return c(b);if(je(b))return l?l(b,2):b()})):je(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){li();try{f()}finally{ci()}}const b=Zi;Zi=d;try{return l?l(n,3,[p]):n(p)}finally{Zi=b}}:u=Hn,e&&r){const b=u,C=r===!0?1/0:r;u=()=>ni(b(),C)}const m=Bp(),h=()=>{d.stop(),m&&m.active&&xc(m.effects,d)};if(s&&e){const b=e;e=(...C)=>{b(...C),h()}}let w=g?new Array(n.length).fill(js):js;const y=b=>{if(!(!(d.flags&1)||!d.dirty&&!b))if(e){const C=d.run();if(r||v||(g?C.some((L,P)=>Pi(L,w[P])):Pi(C,w))){f&&f();const L=Zi;Zi=d;try{const P=[C,w===js?void 0:g&&w[0]===js?[]:w,p];w=C,l?l(e,3,P):e(...P)}finally{Zi=L}}}else d.run()};return a&&a(y),d=new bf(u),d.scheduler=o?()=>o(y,!1):y,p=b=>cm(b,!1,d),f=d.onStop=()=>{const b=No.get(d);if(b){if(l)l(b,4);else for(const C of b)C();No.delete(d)}},e?i?y(!0):w=d.run():o?o(y.bind(null,!0),!0):d.run(),h.pause=d.pause.bind(d),h.resume=d.resume.bind(d),h.stop=h,h}function ni(n,e=1/0,t){if(e<=0||!_t(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,zt(n))ni(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)ni(n[i],e,t);else if(ff(n)||Ur(n))n.forEach(i=>{ni(i,e,t)});else if(mf(n)){for(const i in n)ni(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ni(n[i],e,t)}return n}function Fs(n,e,t,i){try{return i?n(...i):n()}catch(r){na(r,e,t)}}function Pn(n,e,t,i){if(je(n)){const r=Fs(n,e,t,i);return r&&hf(r)&&r.catch(s=>{na(s,e,t)}),r}if($e(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Pn(n[s],e,t,i));return r}}function na(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](n,l,c)===!1)return}a=a.parent}if(s){li(),Fs(s,null,10,[n,l,c]),ci();return}}dm(n,t,r,i,o)}function dm(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const qt=[];let Nn=-1;const Nr=[];let Ti=null,Cr=0;const Of=Promise.resolve();let Fo=null;function wi(n){const e=Fo||Of;return n?e.then(this?n.bind(this):n):e}function fm(n){let e=Nn+1,t=qt.length;for(;e<t;){const i=e+t>>>1,r=qt[i],s=Ts(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Cc(n){if(!(n.flags&1)){const e=Ts(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=Ts(t)?qt.push(n):qt.splice(fm(e),0,n),n.flags|=1,Bf()}}function Bf(){Fo||(Fo=Of.then(zf))}function hm(n){$e(n)?Nr.push(...n):Ti&&n.id===-1?Ti.splice(Cr+1,0,n):n.flags&1||(Nr.push(n),n.flags|=1),Bf()}function ou(n,e,t=Nn+1){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function kf(n){if(Nr.length){const e=[...new Set(Nr)].sort((t,i)=>Ts(t)-Ts(i));if(Nr.length=0,Ti){Ti.push(...e);return}for(Ti=e,Cr=0;Cr<Ti.length;Cr++){const t=Ti[Cr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ti=null,Cr=0}}const Ts=n=>n.id==null?n.flags&2?-1:1/0:n.id;function zf(n){try{for(Nn=0;Nn<qt.length;Nn++){const e=qt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<qt.length;Nn++){const e=qt[Nn];e&&(e.flags&=-2)}Nn=-1,qt.length=0,kf(),Fo=null,(qt.length||Nr.length)&&zf()}}let an=null,Hf=null;function Oo(n){const e=an;return an=n,Hf=n&&n.type.__scopeId||null,e}function Fr(n,e=an,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&zo(-1);const s=Oo(e);let o;try{o=n(...r)}finally{Oo(s),i._d&&zo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ae(n,e){if(an===null)return n;const t=aa(an),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=pt]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&ni(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Hi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(li(),Pn(l,t,8,[n.el,a,n,e]),ci())}}const Vf=Symbol("_vte"),Gf=n=>n.__isTeleport,_s=n=>n&&(n.disabled||n.disabled===""),au=n=>n&&(n.defer||n.defer===""),lu=n=>typeof SVGElement<"u"&&n instanceof SVGElement,cu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,ml=(n,e)=>{const t=n&&n.to;return yt(t)?e?e(t):null:t},Wf={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:d,pc:u,pbc:f,o:{insert:p,querySelector:v,createText:g,createComment:m}}=c,h=_s(e.props);let{shapeFlag:w,children:y,dynamicChildren:b}=e;if(n==null){const C=e.el=g(""),L=e.anchor=g("");p(C,t,i),p(L,t,i);const P=(S,T)=>{w&16&&d(y,S,T,r,s,o,a,l)},O=()=>{const S=e.target=ml(e.props,v),T=$f(S,e,g,p);S&&(o!=="svg"&&lu(S)?o="svg":o!=="mathml"&&cu(S)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(S),h||(P(S,T),Eo(e,!1)))};h&&(P(t,L),Eo(e,!0)),au(e.props)?(e.el.__isMounted=!1,Xt(()=>{O(),delete e.el.__isMounted},s)):O()}else{if(au(e.props)&&n.el.__isMounted===!1){Xt(()=>{Wf.process(n,e,t,i,r,s,o,a,l,c)},s);return}e.el=n.el,e.targetStart=n.targetStart;const C=e.anchor=n.anchor,L=e.target=n.target,P=e.targetAnchor=n.targetAnchor,O=_s(n.props),S=O?t:L,T=O?C:P;if(o==="svg"||lu(L)?o="svg":(o==="mathml"||cu(L))&&(o="mathml"),b?(f(n.dynamicChildren,b,S,r,s,o,a),Fc(n,e,!0)):l||u(n,e,S,T,r,s,o,a,!1),h)O?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Ys(e,t,C,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const R=e.target=ml(e.props,v);R&&Ys(e,R,null,c,0)}else O&&Ys(e,L,P,c,1);Eo(e,h)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:d,target:u,props:f}=n;if(u&&(r(c),r(d)),s&&r(l),o&16){const p=s||!_s(f);for(let v=0;v<a.length;v++){const g=a[v];i(g,e,t,p,!!g.dynamicChildren)}}},move:Ys,hydrate:pm};function Ys(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:d}=n,u=s===2;if(u&&i(o,e,t),(!u||_s(d))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,t,2);u&&i(a,e,t)}function pm(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:d}},u){function f(g,m,h,w){m.anchor=u(o(g),m,a(g),t,i,r,s),m.targetStart=h,m.targetAnchor=w}const p=e.target=ml(e.props,l),v=_s(e.props);if(p){const g=p._lpa||p.firstChild;if(e.shapeFlag&16)if(v)f(n,e,g,g&&o(g));else{e.anchor=o(n);let m=g;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||$f(p,e,d,c),u(g&&o(g),e,p,t,i,r,s)}Eo(e,v)}else v&&e.shapeFlag&16&&f(n,e,n,o(n));return e.anchor&&o(e.anchor)}const Xf=Wf;function Eo(n,e){const t=n.ctx;if(t&&t.ut){let i,r;for(e?(i=n.el,r=n.anchor):(i=n.targetStart,r=n.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function $f(n,e,t,i){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[Vf]=s,n&&(i(r,n),i(s,n)),s}const ei=Symbol("_leaveCb"),Ks=Symbol("_enterCb");function mm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mi(()=>{n.isMounted=!0}),Bi(()=>{n.isUnmounting=!0}),n}const dn=[Function,Array],qf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},jf=n=>{const e=n.subTree;return e.component?jf(e.component):e},gm={name:"BaseTransition",props:qf,setup(n,{slots:e}){const t=xh(),i=mm();return()=>{const r=e.default&&Zf(e.default(),!0);if(!r||!r.length)return;const s=Yf(r),o=st(n),{mode:a}=o;if(i.isLeaving)return ya(s);const l=uu(s);if(!l)return ya(s);let c=gl(l,o,i,t,u=>c=u);l.type!==jt&&ws(l,c);let d=t.subTree&&uu(t.subTree);if(d&&d.type!==jt&&!er(d,l)&&jf(t).type!==jt){let u=gl(d,o,i,t);if(ws(d,u),a==="out-in"&&l.type!==jt)return i.isLeaving=!0,u.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete u.afterLeave,d=void 0},ya(s);a==="in-out"&&l.type!==jt?u.delayLeave=(f,p,v)=>{const g=Kf(i,d);g[String(d.key)]=d,f[ei]=()=>{p(),f[ei]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return s}}};function Yf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==jt){e=t;break}}return e}const _m=gm;function Kf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function gl(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:m,onAppear:h,onAfterAppear:w,onAppearCancelled:y}=e,b=String(n.key),C=Kf(t,n),L=(S,T)=>{S&&Pn(S,i,9,T)},P=(S,T)=>{const R=T[1];L(S,T),$e(S)?S.every(k=>k.length<=1)&&R():S.length<=1&&R()},O={mode:o,persisted:a,beforeEnter(S){let T=l;if(!t.isMounted)if(s)T=m||l;else return;S[ei]&&S[ei](!0);const R=C[b];R&&er(n,R)&&R.el[ei]&&R.el[ei](),L(T,[S])},enter(S){let T=c,R=d,k=u;if(!t.isMounted)if(s)T=h||c,R=w||d,k=y||u;else return;let B=!1;const X=S[Ks]=re=>{B||(B=!0,re?L(k,[S]):L(R,[S]),O.delayedLeave&&O.delayedLeave(),S[Ks]=void 0)};T?P(T,[S,X]):X()},leave(S,T){const R=String(n.key);if(S[Ks]&&S[Ks](!0),t.isUnmounting)return T();L(f,[S]);let k=!1;const B=S[ei]=X=>{k||(k=!0,T(),X?L(g,[S]):L(v,[S]),S[ei]=void 0,C[R]===n&&delete C[R])};C[R]=n,p?P(p,[S,B]):B()},clone(S){const T=gl(S,e,t,i,r);return r&&r(T),T}};return O}function ya(n){if(ia(n))return n=Ui(n),n.children=null,n}function uu(n){if(!ia(n))return Gf(n.type)&&n.children?Yf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&je(t.default))return t.default()}}function ws(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ws(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Zf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===At?(o.patchFlag&128&&r++,i=i.concat(Zf(o.children,e,a))):(e||o.type!==jt)&&i.push(a!=null?Ui(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Kt(n,e){return je(n)?Lt({name:n.name},e,{setup:n}):n}function Jf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Bo=new WeakMap;function vs(n,e,t,i,r=!1){if($e(n)){n.forEach((v,g)=>vs(v,e&&($e(e)?e[g]:e),t,i,r));return}if(xs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&vs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?aa(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,d=a.refs===pt?a.refs={}:a.refs,u=a.setupState,f=st(u),p=u===pt?df:v=>lt(f,v);if(c!=null&&c!==l){if(du(e),yt(c))d[c]=null,p(c)&&(u[c]=null);else if(zt(c)){c.value=null;const v=e;v.k&&(d[v.k]=null)}}if(je(l))Fs(l,a,12,[o,d]);else{const v=yt(l),g=zt(l);if(v||g){const m=()=>{if(n.f){const h=v?p(l)?u[l]:d[l]:l.value;if(r)$e(h)&&xc(h,s);else if($e(h))h.includes(s)||h.push(s);else if(v)d[l]=[s],p(l)&&(u[l]=d[l]);else{const w=[s];l.value=w,n.k&&(d[n.k]=w)}}else v?(d[l]=o,p(l)&&(u[l]=o)):g&&(l.value=o,n.k&&(d[n.k]=o))};if(o){const h=()=>{m(),Bo.delete(n)};h.id=-1,Bo.set(n,h),Xt(h,t)}else du(n),m()}}}function du(n){const e=Bo.get(n);e&&(e.flags|=8,Bo.delete(n))}ea().requestIdleCallback;ea().cancelIdleCallback;const xs=n=>!!n.type.__asyncLoader,ia=n=>n.type.__isKeepAlive;function vm(n,e){Qf(n,"a",e)}function xm(n,e){Qf(n,"da",e)}function Qf(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ra(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ia(r.parent.vnode)&&bm(i,e,t,r),r=r.parent}}function bm(n,e,t,i){const r=ra(e,n,i,!0);Pc(()=>{xc(i[e],r)},t)}function ra(n,e,t=Bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{li();const a=Os(t),l=Pn(e,t,n,o);return a(),ci(),l});return i?r.unshift(s):r.push(s),s}}const pi=n=>(e,t=Bt)=>{(!Cs||n==="sp")&&ra(n,(...i)=>e(...i),t)},ym=pi("bm"),mi=pi("m"),Sm=pi("bu"),Mm=pi("u"),Bi=pi("bum"),Pc=pi("um"),Em=pi("sp"),Tm=pi("rtg"),wm=pi("rtc");function Am(n,e=Bt){ra("ec",n,e)}const Dc="components",Rm="directives";function eh(n,e){return Lc(Dc,n,!0,e)||n}const th=Symbol.for("v-ndc");function Cm(n){return yt(n)?Lc(Dc,n,!1)||n:n||th}function di(n){return Lc(Rm,n)}function Lc(n,e,t=!0,i=!1){const r=an||Bt;if(r){const s=r.type;if(n===Dc){const a=_g(s,!1);if(a&&(a===e||a===vn(e)||a===Qo(vn(e))))return s}const o=fu(r[n]||s[n],e)||fu(r.appContext[n],e);return!o&&i?s:o}}function fu(n,e){return n&&(n[e]||n[vn(e)]||n[Qo(vn(e))])}function Di(n,e,t,i){let r;const s=t,o=$e(n);if(o||yt(n)){const a=o&&ar(n);let l=!1,c=!1;a&&(l=!gn(n),c=ui(n),n=ta(n)),r=new Array(n.length);for(let d=0,u=n.length;d<u;d++)r[d]=e(l?c?Vr(Cn(n[d])):Cn(n[d]):n[d],d,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(_t(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const d=a[l];r[l]=e(n[d],d,l,s)}}else r=[];return r}const _l=n=>n?bh(n)?aa(n):_l(n.parent):null,bs=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>_l(n.parent),$root:n=>_l(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ih(n),$forceUpdate:n=>n.f||(n.f=()=>{Cc(n.update)}),$nextTick:n=>n.n||(n.n=wi.bind(n.proxy)),$watch:n=>Hm.bind(n)}),Sa=(n,e)=>n!==pt&&!n.__isScriptSetup&&lt(n,e),Pm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Sa(i,e))return o[e]=1,i[e];if(r!==pt&&lt(r,e))return o[e]=2,r[e];if(lt(s,e))return o[e]=3,s[e];if(t!==pt&&lt(t,e))return o[e]=4,t[e];vl&&(o[e]=0)}}const c=bs[e];let d,u;if(c)return e==="$attrs"&&Ot(n.attrs,"get",""),c(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==pt&&lt(t,e))return o[e]=4,t[e];if(u=l.config.globalProperties,lt(u,e))return u[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Sa(r,e)?(r[e]=t,!0):i!==pt&&lt(i,e)?(i[e]=t,!0):lt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==pt&&a[0]!=="$"&&lt(n,a)||Sa(e,a)||lt(s,a)||lt(i,a)||lt(bs,a)||lt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:lt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function hu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let vl=!0;function Dm(n){const e=ih(n),t=n.proxy,i=n.ctx;vl=!1,e.beforeCreate&&pu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:p,updated:v,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:w,destroyed:y,unmounted:b,render:C,renderTracked:L,renderTriggered:P,errorCaptured:O,serverPrefetch:S,expose:T,inheritAttrs:R,components:k,directives:B,filters:X}=e;if(c&&Lm(c,i,null),o)for(const ee in o){const W=o[ee];je(W)&&(i[ee]=W.bind(t))}if(r){const ee=r.call(t,t);_t(ee)&&(n.data=Hr(ee))}if(vl=!0,s)for(const ee in s){const W=s[ee],xe=je(W)?W.bind(t,t):je(W.get)?W.get.bind(t,t):Hn,be=!je(W)&&je(W.set)?W.set.bind(t):Hn,Ce=kt({get:xe,set:be});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:ze=>Ce.value=ze})}if(a)for(const ee in a)nh(a[ee],i,t,ee);if(l){const ee=je(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(W=>{To(W,ee[W])})}d&&pu(d,n,"c");function Z(ee,W){$e(W)?W.forEach(xe=>ee(xe.bind(t))):W&&ee(W.bind(t))}if(Z(ym,u),Z(mi,f),Z(Sm,p),Z(Mm,v),Z(vm,g),Z(xm,m),Z(Am,O),Z(wm,L),Z(Tm,P),Z(Bi,w),Z(Pc,b),Z(Em,S),$e(T))if(T.length){const ee=n.exposed||(n.exposed={});T.forEach(W=>{Object.defineProperty(ee,W,{get:()=>t[W],set:xe=>t[W]=xe,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Hn&&(n.render=C),R!=null&&(n.inheritAttrs=R),k&&(n.components=k),B&&(n.directives=B),S&&Jf(n)}function Lm(n,e,t=Hn){$e(n)&&(n=xl(n));for(const i in n){const r=n[i];let s;_t(r)?"default"in r?s=wn(r.from||i,r.default,!0):s=wn(r.from||i):s=wn(r),zt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function pu(n,e,t){Pn($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function nh(n,e,t,i){let r=i.includes(".")?sh(t,i):()=>t[i];if(yt(n)){const s=e[n];je(s)&&cr(r,s)}else if(je(n))cr(r,n.bind(t));else if(_t(n))if($e(n))n.forEach(s=>nh(s,e,t,i));else{const s=je(n.handler)?n.handler.bind(t):e[n.handler];je(s)&&cr(r,s,n)}}function ih(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ko(l,c,o,!0)),ko(l,e,o)),_t(e)&&s.set(e,l),l}function ko(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ko(n,s,t,!0),r&&r.forEach(o=>ko(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Im[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Im={data:mu,props:gu,emits:gu,methods:ds,computed:ds,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:ds,directives:ds,watch:Nm,provide:mu,inject:Um};function mu(n,e){return e?n?function(){return Lt(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function Um(n,e){return ds(xl(n),xl(e))}function xl(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Gt(n,e){return n?[...new Set([].concat(n,e))]:e}function ds(n,e){return n?Lt(Object.create(null),n,e):e}function gu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Lt(Object.create(null),hu(n),hu(e??{})):e}function Nm(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=Gt(n[i],e[i]);return t}function rh(){return{app:null,config:{isNativeTag:df,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fm=0;function Om(n,e){return function(i,r=null){je(i)||(i=Lt({},i)),r!=null&&!_t(r)&&(r=null);const s=rh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Fm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:xg,get config(){return s.config},set config(d){},use(d,...u){return o.has(d)||(d&&je(d.install)?(o.add(d),d.install(c,...u)):je(d)&&(o.add(d),d(c,...u))),c},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),c},component(d,u){return u?(s.components[d]=u,c):s.components[d]},directive(d,u){return u?(s.directives[d]=u,c):s.directives[d]},mount(d,u,f){if(!l){const p=c._ceVNode||it(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(p,d,f),l=!0,c._container=d,d.__vue_app__=c,aa(p.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Pn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(d,u){return s.provides[d]=u,c},runWithContext(d){const u=Or;Or=c;try{return d()}finally{Or=u}}};return c}}let Or=null;function To(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function wn(n,e,t=!1){const i=xh();if(i||Or){let r=Or?Or._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const Bm=Symbol.for("v-scx"),km=()=>wn(Bm);function zm(n,e){return Ic(n,null,e)}function cr(n,e,t){return Ic(n,e,t)}function Ic(n,e,t=pt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Lt({},t),l=e&&i||!e&&s!=="post";let c;if(Cs){if(s==="sync"){const p=km();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Hn,p.resume=Hn,p.pause=Hn,p}}const d=Bt;a.call=(p,v,g)=>Pn(p,d,v,g);let u=!1;s==="post"?a.scheduler=p=>{Xt(p,d&&d.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(p,v)=>{v?p():Cc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const f=um(n,e,a);return Cs&&(c?c.push(f):l&&f()),f}function Hm(n,e,t){const i=this.proxy,r=yt(n)?n.includes(".")?sh(i,n):()=>i[n]:n.bind(i,i);let s;je(e)?s=e:(s=e.handler,t=e);const o=Os(this),a=Ic(r,s.bind(i),t);return o(),a}function sh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Vm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${vn(e)}Modifiers`]||n[`${fr(e)}Modifiers`];function Gm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let r=t;const s=e.startsWith("update:"),o=s&&Vm(i,e.slice(7));o&&(o.trim&&(r=t.map(d=>yt(d)?d.trim():d)),o.number&&(r=t.map(yc)));let a,l=i[a=ga(e)]||i[a=ga(vn(e))];!l&&s&&(l=i[a=ga(fr(e))]),l&&Pn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Pn(c,n,6,r)}}const Wm=new WeakMap;function oh(n,e,t=!1){const i=t?Wm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!je(n)){const l=c=>{const d=oh(c,e,!0);d&&(a=!0,Lt(o,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(_t(n)&&i.set(n,null),null):($e(s)?s.forEach(l=>o[l]=null):Lt(o,s),_t(n)&&i.set(n,o),o)}function sa(n,e){return!n||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(n,e[0].toLowerCase()+e.slice(1))||lt(n,fr(e))||lt(n,e))}function _u(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:d,props:u,data:f,setupState:p,ctx:v,inheritAttrs:g}=n,m=Oo(n);let h,w;try{if(t.shapeFlag&4){const b=r||i,C=b;h=Fn(c.call(C,b,d,u,p,f,v)),w=a}else{const b=e;h=Fn(b.length>1?b(u,{attrs:a,slots:o,emit:l}):b(u,null)),w=e.props?a:Xm(a)}}catch(b){ys.length=0,na(b,n,1),h=it(jt)}let y=h;if(w&&g!==!1){const b=Object.keys(w),{shapeFlag:C}=y;b.length&&C&7&&(s&&b.some(vc)&&(w=$m(w,s)),y=Ui(y,w,!1,!0))}return t.dirs&&(y=Ui(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&ws(y,t.transition),h=y,Oo(m),h}const Xm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ko(t))&&((e||(e={}))[t]=n[t]);return e},$m=(n,e)=>{const t={};for(const i in n)(!vc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function qm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?vu(i,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(o[f]!==i[f]&&!sa(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vu(i,o,c):!0:!!o;return!1}function vu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!sa(t,s))return!0}return!1}function jm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ah={},lh=()=>Object.create(ah),ch=n=>Object.getPrototypeOf(n)===ah;function Ym(n,e,t,i=!1){const r={},s=lh();n.propsDefaults=Object.create(null),uh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Uf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Km(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=st(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(sa(n.emitsOptions,f))continue;const p=e[f];if(l)if(lt(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const v=vn(f);r[v]=bl(l,a,v,p,n,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{uh(n,e,r,s)&&(c=!0);let d;for(const u in a)(!e||!lt(e,u)&&((d=fr(u))===u||!lt(e,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(r[u]=bl(l,a,u,void 0,n,!0)):delete r[u]);if(s!==a)for(const u in s)(!e||!lt(e,u))&&(delete s[u],c=!0)}c&&ti(n.attrs,"set","")}function uh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ps(l))continue;const c=e[l];let d;r&&lt(r,d=vn(l))?!s||!s.includes(d)?t[d]=c:(a||(a={}))[d]=c:sa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=st(t),c=a||pt;for(let d=0;d<s.length;d++){const u=s[d];t[u]=bl(r,l,u,c[u],n,!lt(c,u))}}return o}function bl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const d=Os(r);i=c[t]=l.call(null,e),d()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===fr(t))&&(i=!0))}return i}const Zm=new WeakMap;function dh(n,e,t=!1){const i=t?Zm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!je(n)){const d=u=>{l=!0;const[f,p]=dh(u,e,!0);Lt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!s&&!l)return _t(n)&&i.set(n,Ir),Ir;if($e(s))for(let d=0;d<s.length;d++){const u=vn(s[d]);xu(u)&&(o[u]=pt)}else if(s)for(const d in s){const u=vn(d);if(xu(u)){const f=s[d],p=o[u]=$e(f)||je(f)?{type:f}:Lt({},f),v=p.type;let g=!1,m=!0;if($e(v))for(let h=0;h<v.length;++h){const w=v[h],y=je(w)&&w.name;if(y==="Boolean"){g=!0;break}else y==="String"&&(m=!1)}else g=je(v)&&v.name==="Boolean";p[0]=g,p[1]=m,(g||lt(p,"default"))&&a.push(u)}}const c=[o,a];return _t(n)&&i.set(n,c),c}function xu(n){return n[0]!=="$"&&!ps(n)}const Uc=n=>n==="_"||n==="_ctx"||n==="$stable",Nc=n=>$e(n)?n.map(Fn):[Fn(n)],Jm=(n,e,t)=>{if(e._n)return e;const i=Fr((...r)=>Nc(e(...r)),t);return i._c=!1,i},fh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Uc(r))continue;const s=n[r];if(je(s))e[r]=Jm(r,s,i);else if(s!=null){const o=Nc(s);e[r]=()=>o}}},hh=(n,e)=>{const t=Nc(e);n.slots.default=()=>t},ph=(n,e,t)=>{for(const i in e)(t||!Uc(i))&&(n[i]=e[i])},Qm=(n,e,t)=>{const i=n.slots=lh();if(n.vnode.shapeFlag&32){const r=e._;r?(ph(i,e,t),t&&gf(i,"_",r,!0)):fh(e,i)}else e&&hh(n,e)},eg=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:ph(r,e,t):(s=!e.$stable,fh(e,r)),o=e}else e&&(hh(n,e),o={default:1});if(s)for(const a in r)!Uc(a)&&o[a]==null&&delete r[a]},Xt=sg;function tg(n){return ng(n)}function ng(n,e){const t=ea();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:p=Hn,insertStaticContent:v}=n,g=(A,_,N,G=null,Q=null,V=null,fe=void 0,K=null,se=!!_.dynamicChildren)=>{if(A===_)return;A&&!er(A,_)&&(G=U(A),ze(A,Q,V,!0),A=null),_.patchFlag===-2&&(se=!1,_.dynamicChildren=null);const{type:ae,ref:Te,shapeFlag:M}=_;switch(ae){case oa:m(A,_,N,G);break;case jt:h(A,_,N,G);break;case wo:A==null&&w(_,N,G,fe);break;case At:k(A,_,N,G,Q,V,fe,K,se);break;default:M&1?C(A,_,N,G,Q,V,fe,K,se):M&6?B(A,_,N,G,Q,V,fe,K,se):(M&64||M&128)&&ae.process(A,_,N,G,Q,V,fe,K,se,de)}Te!=null&&Q?vs(Te,A&&A.ref,V,_||A,!_):Te==null&&A&&A.ref!=null&&vs(A.ref,null,V,A,!0)},m=(A,_,N,G)=>{if(A==null)i(_.el=a(_.children),N,G);else{const Q=_.el=A.el;_.children!==A.children&&c(Q,_.children)}},h=(A,_,N,G)=>{A==null?i(_.el=l(_.children||""),N,G):_.el=A.el},w=(A,_,N,G)=>{[A.el,A.anchor]=v(A.children,_,N,G,A.el,A.anchor)},y=({el:A,anchor:_},N,G)=>{let Q;for(;A&&A!==_;)Q=f(A),i(A,N,G),A=Q;i(_,N,G)},b=({el:A,anchor:_})=>{let N;for(;A&&A!==_;)N=f(A),r(A),A=N;r(_)},C=(A,_,N,G,Q,V,fe,K,se)=>{if(_.type==="svg"?fe="svg":_.type==="math"&&(fe="mathml"),A==null)L(_,N,G,Q,V,fe,K,se);else{const ae=A.el&&A.el._isVueCE?A.el:null;try{ae&&ae._beginPatch(),S(A,_,Q,V,fe,K,se)}finally{ae&&ae._endPatch()}}},L=(A,_,N,G,Q,V,fe,K)=>{let se,ae;const{props:Te,shapeFlag:M,transition:x,dirs:I}=A;if(se=A.el=o(A.type,V,Te&&Te.is,Te),M&8?d(se,A.children):M&16&&O(A.children,se,null,G,Q,Ma(A,V),fe,K),I&&Hi(A,null,G,"created"),P(se,A,A.scopeId,fe,G),Te){for(const ie in Te)ie!=="value"&&!ps(ie)&&s(se,ie,null,Te[ie],V,G);"value"in Te&&s(se,"value",null,Te.value,V),(ae=Te.onVnodeBeforeMount)&&Un(ae,G,A)}I&&Hi(A,null,G,"beforeMount");const $=ig(Q,x);$&&x.beforeEnter(se),i(se,_,N),((ae=Te&&Te.onVnodeMounted)||$||I)&&Xt(()=>{ae&&Un(ae,G,A),$&&x.enter(se),I&&Hi(A,null,G,"mounted")},Q)},P=(A,_,N,G,Q)=>{if(N&&p(A,N),G)for(let V=0;V<G.length;V++)p(A,G[V]);if(Q){let V=Q.subTree;if(_===V||gh(V.type)&&(V.ssContent===_||V.ssFallback===_)){const fe=Q.vnode;P(A,fe,fe.scopeId,fe.slotScopeIds,Q.parent)}}},O=(A,_,N,G,Q,V,fe,K,se=0)=>{for(let ae=se;ae<A.length;ae++){const Te=A[ae]=K?Ai(A[ae]):Fn(A[ae]);g(null,Te,_,N,G,Q,V,fe,K)}},S=(A,_,N,G,Q,V,fe)=>{const K=_.el=A.el;let{patchFlag:se,dynamicChildren:ae,dirs:Te}=_;se|=A.patchFlag&16;const M=A.props||pt,x=_.props||pt;let I;if(N&&Vi(N,!1),(I=x.onVnodeBeforeUpdate)&&Un(I,N,_,A),Te&&Hi(_,A,N,"beforeUpdate"),N&&Vi(N,!0),(M.innerHTML&&x.innerHTML==null||M.textContent&&x.textContent==null)&&d(K,""),ae?T(A.dynamicChildren,ae,K,N,G,Ma(_,Q),V):fe||W(A,_,K,null,N,G,Ma(_,Q),V,!1),se>0){if(se&16)R(K,M,x,N,Q);else if(se&2&&M.class!==x.class&&s(K,"class",null,x.class,Q),se&4&&s(K,"style",M.style,x.style,Q),se&8){const $=_.dynamicProps;for(let ie=0;ie<$.length;ie++){const q=$[ie],Re=M[q],he=x[q];(he!==Re||q==="value")&&s(K,q,Re,he,Q,N)}}se&1&&A.children!==_.children&&d(K,_.children)}else!fe&&ae==null&&R(K,M,x,N,Q);((I=x.onVnodeUpdated)||Te)&&Xt(()=>{I&&Un(I,N,_,A),Te&&Hi(_,A,N,"updated")},G)},T=(A,_,N,G,Q,V,fe)=>{for(let K=0;K<_.length;K++){const se=A[K],ae=_[K],Te=se.el&&(se.type===At||!er(se,ae)||se.shapeFlag&198)?u(se.el):N;g(se,ae,Te,null,G,Q,V,fe,!0)}},R=(A,_,N,G,Q)=>{if(_!==N){if(_!==pt)for(const V in _)!ps(V)&&!(V in N)&&s(A,V,_[V],null,Q,G);for(const V in N){if(ps(V))continue;const fe=N[V],K=_[V];fe!==K&&V!=="value"&&s(A,V,K,fe,Q,G)}"value"in N&&s(A,"value",_.value,N.value,Q)}},k=(A,_,N,G,Q,V,fe,K,se)=>{const ae=_.el=A?A.el:a(""),Te=_.anchor=A?A.anchor:a("");let{patchFlag:M,dynamicChildren:x,slotScopeIds:I}=_;I&&(K=K?K.concat(I):I),A==null?(i(ae,N,G),i(Te,N,G),O(_.children||[],N,Te,Q,V,fe,K,se)):M>0&&M&64&&x&&A.dynamicChildren?(T(A.dynamicChildren,x,N,Q,V,fe,K),(_.key!=null||Q&&_===Q.subTree)&&Fc(A,_,!0)):W(A,_,N,Te,Q,V,fe,K,se)},B=(A,_,N,G,Q,V,fe,K,se)=>{_.slotScopeIds=K,A==null?_.shapeFlag&512?Q.ctx.activate(_,N,G,fe,se):X(_,N,G,Q,V,fe,se):re(A,_,se)},X=(A,_,N,G,Q,V,fe)=>{const K=A.component=fg(A,G,Q);if(ia(A)&&(K.ctx.renderer=de),hg(K,!1,fe),K.asyncDep){if(Q&&Q.registerDep(K,Z,fe),!A.el){const se=K.subTree=it(jt);h(null,se,_,N),A.placeholder=se.el}}else Z(K,A,_,N,Q,V,fe)},re=(A,_,N)=>{const G=_.component=A.component;if(qm(A,_,N))if(G.asyncDep&&!G.asyncResolved){ee(G,_,N);return}else G.next=_,G.update();else _.el=A.el,G.vnode=_},Z=(A,_,N,G,Q,V,fe)=>{const K=()=>{if(A.isMounted){let{next:M,bu:x,u:I,parent:$,vnode:ie}=A;{const De=mh(A);if(De){M&&(M.el=ie.el,ee(A,M,fe)),De.asyncDep.then(()=>{A.isUnmounted||K()});return}}let q=M,Re;Vi(A,!1),M?(M.el=ie.el,ee(A,M,fe)):M=ie,x&&Mo(x),(Re=M.props&&M.props.onVnodeBeforeUpdate)&&Un(Re,$,M,ie),Vi(A,!0);const he=_u(A),Pe=A.subTree;A.subTree=he,g(Pe,he,u(Pe.el),U(Pe),A,Q,V),M.el=he.el,q===null&&jm(A,he.el),I&&Xt(I,Q),(Re=M.props&&M.props.onVnodeUpdated)&&Xt(()=>Un(Re,$,M,ie),Q)}else{let M;const{el:x,props:I}=_,{bm:$,m:ie,parent:q,root:Re,type:he}=A,Pe=xs(_);Vi(A,!1),$&&Mo($),!Pe&&(M=I&&I.onVnodeBeforeMount)&&Un(M,q,_),Vi(A,!0);{Re.ce&&Re.ce._def.shadowRoot!==!1&&Re.ce._injectChildStyle(he);const De=A.subTree=_u(A);g(null,De,N,G,A,Q,V),_.el=De.el}if(ie&&Xt(ie,Q),!Pe&&(M=I&&I.onVnodeMounted)){const De=_;Xt(()=>Un(M,q,De),Q)}(_.shapeFlag&256||q&&xs(q.vnode)&&q.vnode.shapeFlag&256)&&A.a&&Xt(A.a,Q),A.isMounted=!0,_=N=G=null}};A.scope.on();const se=A.effect=new bf(K);A.scope.off();const ae=A.update=se.run.bind(se),Te=A.job=se.runIfDirty.bind(se);Te.i=A,Te.id=A.uid,se.scheduler=()=>Cc(Te),Vi(A,!0),ae()},ee=(A,_,N)=>{_.component=A;const G=A.vnode.props;A.vnode=_,A.next=null,Km(A,_.props,G,N),eg(A,_.children,N),li(),ou(A),ci()},W=(A,_,N,G,Q,V,fe,K,se=!1)=>{const ae=A&&A.children,Te=A?A.shapeFlag:0,M=_.children,{patchFlag:x,shapeFlag:I}=_;if(x>0){if(x&128){be(ae,M,N,G,Q,V,fe,K,se);return}else if(x&256){xe(ae,M,N,G,Q,V,fe,K,se);return}}I&8?(Te&16&&me(ae,Q,V),M!==ae&&d(N,M)):Te&16?I&16?be(ae,M,N,G,Q,V,fe,K,se):me(ae,Q,V,!0):(Te&8&&d(N,""),I&16&&O(M,N,G,Q,V,fe,K,se))},xe=(A,_,N,G,Q,V,fe,K,se)=>{A=A||Ir,_=_||Ir;const ae=A.length,Te=_.length,M=Math.min(ae,Te);let x;for(x=0;x<M;x++){const I=_[x]=se?Ai(_[x]):Fn(_[x]);g(A[x],I,N,null,Q,V,fe,K,se)}ae>Te?me(A,Q,V,!0,!1,M):O(_,N,G,Q,V,fe,K,se,M)},be=(A,_,N,G,Q,V,fe,K,se)=>{let ae=0;const Te=_.length;let M=A.length-1,x=Te-1;for(;ae<=M&&ae<=x;){const I=A[ae],$=_[ae]=se?Ai(_[ae]):Fn(_[ae]);if(er(I,$))g(I,$,N,null,Q,V,fe,K,se);else break;ae++}for(;ae<=M&&ae<=x;){const I=A[M],$=_[x]=se?Ai(_[x]):Fn(_[x]);if(er(I,$))g(I,$,N,null,Q,V,fe,K,se);else break;M--,x--}if(ae>M){if(ae<=x){const I=x+1,$=I<Te?_[I].el:G;for(;ae<=x;)g(null,_[ae]=se?Ai(_[ae]):Fn(_[ae]),N,$,Q,V,fe,K,se),ae++}}else if(ae>x)for(;ae<=M;)ze(A[ae],Q,V,!0),ae++;else{const I=ae,$=ae,ie=new Map;for(ae=$;ae<=x;ae++){const Ne=_[ae]=se?Ai(_[ae]):Fn(_[ae]);Ne.key!=null&&ie.set(Ne.key,ae)}let q,Re=0;const he=x-$+1;let Pe=!1,De=0;const pe=new Array(he);for(ae=0;ae<he;ae++)pe[ae]=0;for(ae=I;ae<=M;ae++){const Ne=A[ae];if(Re>=he){ze(Ne,Q,V,!0);continue}let Le;if(Ne.key!=null)Le=ie.get(Ne.key);else for(q=$;q<=x;q++)if(pe[q-$]===0&&er(Ne,_[q])){Le=q;break}Le===void 0?ze(Ne,Q,V,!0):(pe[Le-$]=ae+1,Le>=De?De=Le:Pe=!0,g(Ne,_[Le],N,null,Q,V,fe,K,se),Re++)}const Ee=Pe?rg(pe):Ir;for(q=Ee.length-1,ae=he-1;ae>=0;ae--){const Ne=$+ae,Le=_[Ne],Se=_[Ne+1],qe=Ne+1<Te?Se.el||Se.placeholder:G;pe[ae]===0?g(null,Le,N,qe,Q,V,fe,K,se):Pe&&(q<0||ae!==Ee[q]?Ce(Le,N,qe,2):q--)}}},Ce=(A,_,N,G,Q=null)=>{const{el:V,type:fe,transition:K,children:se,shapeFlag:ae}=A;if(ae&6){Ce(A.component.subTree,_,N,G);return}if(ae&128){A.suspense.move(_,N,G);return}if(ae&64){fe.move(A,_,N,de);return}if(fe===At){i(V,_,N);for(let M=0;M<se.length;M++)Ce(se[M],_,N,G);i(A.anchor,_,N);return}if(fe===wo){y(A,_,N);return}if(G!==2&&ae&1&&K)if(G===0)K.beforeEnter(V),i(V,_,N),Xt(()=>K.enter(V),Q);else{const{leave:M,delayLeave:x,afterLeave:I}=K,$=()=>{A.ctx.isUnmounted?r(V):i(V,_,N)},ie=()=>{V._isLeaving&&V[ei](!0),M(V,()=>{$(),I&&I()})};x?x(V,$,ie):ie()}else i(V,_,N)},ze=(A,_,N,G=!1,Q=!1)=>{const{type:V,props:fe,ref:K,children:se,dynamicChildren:ae,shapeFlag:Te,patchFlag:M,dirs:x,cacheIndex:I}=A;if(M===-2&&(Q=!1),K!=null&&(li(),vs(K,null,N,A,!0),ci()),I!=null&&(_.renderCache[I]=void 0),Te&256){_.ctx.deactivate(A);return}const $=Te&1&&x,ie=!xs(A);let q;if(ie&&(q=fe&&fe.onVnodeBeforeUnmount)&&Un(q,_,A),Te&6)te(A.component,N,G);else{if(Te&128){A.suspense.unmount(N,G);return}$&&Hi(A,null,_,"beforeUnmount"),Te&64?A.type.remove(A,_,N,de,G):ae&&!ae.hasOnce&&(V!==At||M>0&&M&64)?me(ae,_,N,!1,!0):(V===At&&M&384||!Q&&Te&16)&&me(se,_,N),G&&ke(A)}(ie&&(q=fe&&fe.onVnodeUnmounted)||$)&&Xt(()=>{q&&Un(q,_,A),$&&Hi(A,null,_,"unmounted")},N)},ke=A=>{const{type:_,el:N,anchor:G,transition:Q}=A;if(_===At){Ge(N,G);return}if(_===wo){b(A);return}const V=()=>{r(N),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(A.shapeFlag&1&&Q&&!Q.persisted){const{leave:fe,delayLeave:K}=Q,se=()=>fe(N,V);K?K(A.el,V,se):se()}else V()},Ge=(A,_)=>{let N;for(;A!==_;)N=f(A),r(A),A=N;r(_)},te=(A,_,N)=>{const{bum:G,scope:Q,job:V,subTree:fe,um:K,m:se,a:ae}=A;bu(se),bu(ae),G&&Mo(G),Q.stop(),V&&(V.flags|=8,ze(fe,A,_,N)),K&&Xt(K,_),Xt(()=>{A.isUnmounted=!0},_)},me=(A,_,N,G=!1,Q=!1,V=0)=>{for(let fe=V;fe<A.length;fe++)ze(A[fe],_,N,G,Q)},U=A=>{if(A.shapeFlag&6)return U(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const _=f(A.anchor||A.el),N=_&&_[Vf];return N?f(N):_};let oe=!1;const ne=(A,_,N)=>{A==null?_._vnode&&ze(_._vnode,null,null,!0):g(_._vnode||null,A,_,null,null,null,N),_._vnode=A,oe||(oe=!0,ou(),kf(),oe=!1)},de={p:g,um:ze,m:Ce,r:ke,mt:X,mc:O,pc:W,pbc:T,n:U,o:n};return{render:ne,hydrate:void 0,createApp:Om(ne)}}function Ma({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Vi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ig(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Fc(n,e,t=!1){const i=n.children,r=e.children;if($e(i)&&$e(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ai(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Fc(o,a)),a.type===oa&&a.patchFlag!==-1&&(a.el=o.el),a.type===jt&&!a.el&&(a.el=o.el)}}function rg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function mh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mh(e)}function bu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const gh=n=>n.__isSuspense;function sg(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):hm(n)}const At=Symbol.for("v-fgt"),oa=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),wo=Symbol.for("v-stc"),ys=[];let ln=null;function le(n=!1){ys.push(ln=n?null:[])}function og(){ys.pop(),ln=ys[ys.length-1]||null}let As=1;function zo(n,e=!1){As+=n,n<0&&ln&&e&&(ln.hasOnce=!0)}function _h(n){return n.dynamicChildren=As>0?ln||Ir:null,og(),As>0&&ln&&ln.push(n),n}function ue(n,e,t,i,r,s){return _h(D(n,e,t,i,r,s,!0))}function Rs(n,e,t,i,r){return _h(it(n,e,t,i,r,!0))}function Ho(n){return n?n.__v_isVNode===!0:!1}function er(n,e){return n.type===e.type&&n.key===e.key}const vh=({key:n})=>n??null,Ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?yt(n)||zt(n)||je(n)?{i:an,r:n,k:e,f:!!t}:n:null);function D(n,e=null,t=null,i=0,r=null,s=n===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&vh(e),ref:e&&Ao(e),scopeId:Hf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:an};return a?(Oc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),As>0&&!o&&ln&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ln.push(l),l}const it=ag;function ag(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===th)&&(n=jt),Ho(n)){const a=Ui(n,e,!0);return t&&Oc(a,t),As>0&&!s&&ln&&(a.shapeFlag&6?ln[ln.indexOf(n)]=a:ln.push(a)),a.patchFlag=-2,a}if(vg(n)&&(n=n.__vccOpts),e){e=lg(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=Mn(a)),_t(l)&&(Rc(l)&&!$e(l)&&(l=Lt({},l)),e.style=oi(l))}const o=yt(n)?1:gh(n)?128:Gf(n)?64:_t(n)?4:je(n)?2:0;return D(n,e,t,i,r,o,s,!0)}function lg(n){return n?Rc(n)||ch(n)?Lt({},n):n:null}function Ui(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?cg(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&vh(c),ref:e&&e.ref?t&&s?$e(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==At?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ui(n.ssContent),ssFallback:n.ssFallback&&Ui(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ws(d,l.clone(d)),d}function dt(n=" ",e=0){return it(oa,null,n,e)}function en(n,e){const t=it(wo,null,n);return t.staticCount=e,t}function Ut(n="",e=!1){return e?(le(),Rs(jt,null,n)):it(jt,null,n)}function Fn(n){return n==null||typeof n=="boolean"?it(jt):$e(n)?it(At,null,n.slice()):Ho(n)?Ai(n):it(oa,null,String(n))}function Ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ui(n)}function Oc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Oc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!ch(e)?e._ctx=an:r===3&&an&&(an.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:an},t=32):(e=String(e),i&64?(t=16,e=[dt(e)]):t=8);n.children=e,n.shapeFlag|=t}function cg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Mn([e.class,i.class]));else if(r==="style")e.style=oi([e.style,i.style]);else if(Ko(r)){const s=e[r],o=i[r];o&&s!==o&&!($e(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Un(n,e,t,i=null){Pn(n,e,7,[t,i])}const ug=rh();let dg=0;function fg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ug,s={uid:dg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dh(i,r),emitsOptions:oh(i,r),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gm.bind(null,s),n.ce&&n.ce(s),s}let Bt=null;const xh=()=>Bt||an;let Vo,yl;{const n=ea(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Vo=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),yl=e("__VUE_SSR_SETTERS__",t=>Cs=t)}const Os=n=>{const e=Bt;return Vo(n),n.scope.on(),()=>{n.scope.off(),Vo(e)}},yu=()=>{Bt&&Bt.scope.off(),Vo(null)};function bh(n){return n.vnode.shapeFlag&4}let Cs=!1;function hg(n,e=!1,t=!1){e&&yl(e);const{props:i,children:r}=n.vnode,s=bh(n);Ym(n,i,s,e),Qm(n,r,t||e);const o=s?pg(n,e):void 0;return e&&yl(!1),o}function pg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Pm);const{setup:i}=t;if(i){li();const r=n.setupContext=i.length>1?gg(n):null,s=Os(n),o=Fs(i,n,0,[n.props,r]),a=hf(o);if(ci(),s(),(a||n.sp)&&!xs(n)&&Jf(n),a){if(o.then(yu,yu),e)return o.then(l=>{Su(n,l)}).catch(l=>{na(l,n,0)});n.asyncDep=o}else Su(n,o)}else yh(n)}function Su(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_t(e)&&(n.setupState=Ff(e)),yh(n)}function yh(n,e,t){const i=n.type;n.render||(n.render=i.render||Hn);{const r=Os(n);li();try{Dm(n)}finally{ci(),r()}}}const mg={get(n,e){return Ot(n,"get",""),n[e]}};function gg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,mg),slots:n.slots,emit:n.emit,expose:e}}function aa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ff(im(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in bs)return bs[t](n)},has(e,t){return t in e||t in bs}})):n.proxy}function _g(n,e=!0){return je(n)?n.displayName||n.name:n.name||e&&n.__name}function vg(n){return je(n)&&"__vccOpts"in n}const kt=(n,e)=>lm(n,e,Cs);function Bc(n,e,t){try{zo(-1);const i=arguments.length;return i===2?_t(e)&&!$e(e)?Ho(e)?it(n,null,[e]):it(n,e):it(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ho(t)&&(t=[t]),it(n,e,t))}finally{zo(1)}}const xg="3.5.25";let Sl;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{Sl=Mu.createPolicy("vue",{createHTML:n=>n})}catch{}const Sh=Sl?n=>Sl.createHTML(n):n=>n,bg="http://www.w3.org/2000/svg",yg="http://www.w3.org/1998/Math/MathML",Qn=typeof document<"u"?document:null,Eu=Qn&&Qn.createElement("template"),Sg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Qn.createElementNS(bg,n):e==="mathml"?Qn.createElementNS(yg,n):t?Qn.createElement(n,{is:t}):Qn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Qn.createTextNode(n),createComment:n=>Qn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Qn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Eu.innerHTML=Sh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Eu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gi="transition",ts="animation",Ps=Symbol("_vtc"),Mh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mg=Lt({},qf,Mh),Eg=n=>(n.displayName="Transition",n.props=Mg,n),Ml=Eg((n,{slots:e})=>Bc(_m,Tg(n),e)),Gi=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},Tu=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function Tg(n){const e={};for(const k in n)k in Mh||(e[k]=n[k]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:d=a,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,v=wg(r),g=v&&v[0],m=v&&v[1],{onBeforeEnter:h,onEnter:w,onEnterCancelled:y,onLeave:b,onLeaveCancelled:C,onBeforeAppear:L=h,onAppear:P=w,onAppearCancelled:O=y}=e,S=(k,B,X,re)=>{k._enterCancelled=re,Wi(k,B?d:a),Wi(k,B?c:o),X&&X()},T=(k,B)=>{k._isLeaving=!1,Wi(k,u),Wi(k,p),Wi(k,f),B&&B()},R=k=>(B,X)=>{const re=k?P:w,Z=()=>S(B,k,X);Gi(re,[B,Z]),wu(()=>{Wi(B,k?l:s),Xn(B,k?d:a),Tu(re)||Au(B,i,g,Z)})};return Lt(e,{onBeforeEnter(k){Gi(h,[k]),Xn(k,s),Xn(k,o)},onBeforeAppear(k){Gi(L,[k]),Xn(k,l),Xn(k,c)},onEnter:R(!1),onAppear:R(!0),onLeave(k,B){k._isLeaving=!0;const X=()=>T(k,B);Xn(k,u),k._enterCancelled?(Xn(k,f),Pu(k)):(Pu(k),Xn(k,f)),wu(()=>{k._isLeaving&&(Wi(k,u),Xn(k,p),Tu(b)||Au(k,i,m,X))}),Gi(b,[k,X])},onEnterCancelled(k){S(k,!1,void 0,!0),Gi(y,[k])},onAppearCancelled(k){S(k,!0,void 0,!0),Gi(O,[k])},onLeaveCancelled(k){T(k),Gi(C,[k])}})}function wg(n){if(n==null)return null;if(_t(n))return[Ea(n.enter),Ea(n.leave)];{const e=Ea(n);return[e,e]}}function Ea(n){return Pp(n)}function Xn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ps]||(n[Ps]=new Set)).add(e)}function Wi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ps];t&&(t.delete(e),t.size||(n[Ps]=void 0))}function wu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Ag=0;function Au(n,e,t,i){const r=n._endId=++Ag,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Rg(n,e);if(!o)return i();const c=o+"end";let d=0;const u=()=>{n.removeEventListener(c,f),s()},f=p=>{p.target===n&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},a+1),n.addEventListener(c,f)}function Rg(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),r=i(`${gi}Delay`),s=i(`${gi}Duration`),o=Ru(r,s),a=i(`${ts}Delay`),l=i(`${ts}Duration`),c=Ru(a,l);let d=null,u=0,f=0;e===gi?o>0&&(d=gi,u=o,f=s.length):e===ts?c>0&&(d=ts,u=c,f=l.length):(u=Math.max(o,c),d=u>0?o>c?gi:ts:null,f=d?d===gi?s.length:l.length:0);const p=d===gi&&/\b(?:transform|all)(?:,|$)/.test(i(`${gi}Property`).toString());return{type:d,timeout:u,propCount:f,hasTransform:p}}function Ru(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Cu(t)+Cu(n[i])))}function Cu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Pu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Cg(n,e,t){const i=n[Ps];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Go=Symbol("_vod"),Eh=Symbol("_vsh"),Th={name:"show",beforeMount(n,{value:e},{transition:t}){n[Go]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ns(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ns(n,!0),i.enter(n)):i.leave(n,()=>{ns(n,!1)}):ns(n,e))},beforeUnmount(n,{value:e}){ns(n,e)}};function ns(n,e){n.style.display=e?n[Go]:"none",n[Eh]=!e}const Pg=Symbol(""),Dg=/(?:^|;)\s*display\s*:/;function Lg(n,e,t){const i=n.style,r=yt(t);let s=!1;if(t&&!r){if(e)if(yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ro(i,a,"")}else for(const o in e)t[o]==null&&Ro(i,o,"");for(const o in t)o==="display"&&(s=!0),Ro(i,o,t[o])}else if(r){if(e!==t){const o=i[Pg];o&&(t+=";"+o),i.cssText=t,s=Dg.test(t)}}else e&&n.removeAttribute("style");Go in n&&(n[Go]=s?i.display:"",n[Eh]&&(i.display="none"))}const Du=/\s*!important$/;function Ro(n,e,t){if($e(t))t.forEach(i=>Ro(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ig(n,e);Du.test(t)?n.setProperty(fr(i),t.replace(Du,""),"important"):n[i]=t}}const Lu=["Webkit","Moz","ms"],Ta={};function Ig(n,e){const t=Ta[e];if(t)return t;let i=vn(e);if(i!=="filter"&&i in n)return Ta[e]=i;i=Qo(i);for(let r=0;r<Lu.length;r++){const s=Lu[r]+i;if(s in n)return Ta[e]=s}return e}const Iu="http://www.w3.org/1999/xlink";function Uu(n,e,t,i,r,s=Fp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Iu,e.slice(6,e.length)):n.setAttributeNS(Iu,e,t):t==null||s&&!_f(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Oi(t)?String(t):t)}function Nu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Sh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=_f(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Pr(n,e,t,i){n.addEventListener(e,t,i)}function Ug(n,e,t,i){n.removeEventListener(e,t,i)}const Fu=Symbol("_vei");function Ng(n,e,t,i,r=null){const s=n[Fu]||(n[Fu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Fg(e);if(i){const c=s[e]=kg(i,r);Pr(n,a,c,l)}else o&&(Ug(n,a,o,l),s[e]=void 0)}}const Ou=/(?:Once|Passive|Capture)$/;function Fg(n){let e;if(Ou.test(n)){e={};let i;for(;i=n.match(Ou);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):fr(n.slice(2)),e]}let wa=0;const Og=Promise.resolve(),Bg=()=>wa||(Og.then(()=>wa=0),wa=Date.now());function kg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Pn(zg(i,t.value),e,5,[i])};return t.value=n,t.attached=Bg(),t}function zg(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Bu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Hg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Cg(n,i,o):e==="style"?Lg(n,t,i):Ko(e)?vc(e)||Ng(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vg(n,e,i,o))?(Nu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Uu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!yt(i))?Nu(n,vn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Uu(n,e,i,o))};function Vg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Bu(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Bu(e)&&yt(t)?!1:e in n}const ku=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>Mo(e,t):e};function Gg(n){n.target.composing=!0}function zu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Aa=Symbol("_assign");function Hu(n,e,t){return e&&(n=n.trim()),t&&(n=yc(n)),n}const On={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Aa]=ku(r);const s=i||r.props&&r.props.type==="number";Pr(n,e?"change":"input",o=>{o.target.composing||n[Aa](Hu(n.value,t,s))}),(t||s)&&Pr(n,"change",()=>{n.value=Hu(n.value,t,s)}),e||(Pr(n,"compositionstart",Gg),Pr(n,"compositionend",zu),Pr(n,"change",zu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Aa]=ku(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?yc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Wg=["ctrl","shift","alt","meta"],Xg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Wg.some(t=>n[`${t}Key`]&&!e.includes(t))},mn=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Xg[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},$g=Lt({patchProp:Hg},Sg);let Vu;function qg(){return Vu||(Vu=tg($g))}const jg=((...n)=>{const e=qg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Kg(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Yg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Yg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Kg(n){return yt(n)?document.querySelector(n):n}const Dr=typeof document<"u";function wh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Zg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&wh(n.default)}const at=Object.assign;function Ra(n,e){const t={};for(const i in e){const r=e[i];t[i]=Dn(r)?r.map(n):n(r)}return t}const Ss=()=>{},Dn=Array.isArray;function Gu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Ah=/#/g,Jg=/&/g,Qg=/\//g,e0=/=/g,t0=/\?/g,Rh=/\+/g,n0=/%5B/g,i0=/%5D/g,Ch=/%5E/g,r0=/%60/g,Ph=/%7B/g,s0=/%7C/g,Dh=/%7D/g,o0=/%20/g;function kc(n){return n==null?"":encodeURI(""+n).replace(s0,"|").replace(n0,"[").replace(i0,"]")}function a0(n){return kc(n).replace(Ph,"{").replace(Dh,"}").replace(Ch,"^")}function El(n){return kc(n).replace(Rh,"%2B").replace(o0,"+").replace(Ah,"%23").replace(Jg,"%26").replace(r0,"`").replace(Ph,"{").replace(Dh,"}").replace(Ch,"^")}function l0(n){return El(n).replace(e0,"%3D")}function c0(n){return kc(n).replace(Ah,"%23").replace(t0,"%3F")}function u0(n){return c0(n).replace(Qg,"%2F")}function Ds(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const d0=/\/$/,f0=n=>n.replace(d0,"");function Ca(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=g0(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:Ds(o)}}function h0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Wu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function p0(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Gr(e.matched[i],t.matched[r])&&Lh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Gr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Lh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!m0(n[t],e[t]))return!1;return!0}function m0(n,e){return Dn(n)?Xu(n,e):Dn(e)?Xu(e,n):n===e}function Xu(n,e){return Dn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function g0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const _i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Tl=(function(n){return n.pop="pop",n.push="push",n})({}),Pa=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function _0(n){if(!n)if(Dr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),f0(n)}const v0=/^[^#]+#/;function x0(n,e){return n.replace(v0,"#")+e}function b0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const la=()=>({left:window.scrollX,top:window.scrollY});function y0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=b0(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function $u(n,e){return(history.state?history.state.position-e:-1)+n}const wl=new Map;function S0(n,e){wl.set(n,e)}function M0(n){const e=wl.get(n);return wl.delete(n),e}function E0(n){return typeof n=="string"||n&&typeof n=="object"}function Ih(n){return typeof n=="string"||typeof n=="symbol"}let Mt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Uh=Symbol("");Mt.MATCHER_NOT_FOUND+"",Mt.NAVIGATION_GUARD_REDIRECT+"",Mt.NAVIGATION_ABORTED+"",Mt.NAVIGATION_CANCELLED+"",Mt.NAVIGATION_DUPLICATED+"";function Wr(n,e){return at(new Error,{type:n,[Uh]:!0},e)}function $n(n,e){return n instanceof Error&&Uh in n&&(e==null||!!(n.type&e))}const T0=["params","query","hash"];function w0(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of T0)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function A0(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Rh," "),s=r.indexOf("="),o=Ds(s<0?r:r.slice(0,s)),a=s<0?null:Ds(r.slice(s+1));if(o in e){let l=e[o];Dn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function qu(n){let e="";for(let t in n){const i=n[t];if(t=l0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Dn(i)?i.map(r=>r&&El(r)):[i&&El(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function R0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Dn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const C0=Symbol(""),ju=Symbol(""),ca=Symbol(""),zc=Symbol(""),Al=Symbol("");function is(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ri(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Wr(Mt.NAVIGATION_ABORTED,{from:t,to:e})):f instanceof Error?l(f):E0(f)?l(Wr(Mt.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},d=s(()=>n.call(i&&i.instances[r],e,t,c));let u=Promise.resolve(d);n.length<3&&(u=u.then(c)),u.catch(f=>l(f))})}function Da(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(wh(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ri(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=Zg(d)?d.default:d;o.mods[a]=d,o.components[a]=u;const f=(u.__vccOpts||u)[e];return f&&Ri(f,t,i,o,a,r)()}))}}return s}function P0(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Gr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Gr(c,l))||r.push(l))}return[t,i,r]}let D0=()=>location.protocol+"//"+location.host;function Nh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Wu(a,"")}return Wu(t,n)+i+r}function L0(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const p=Nh(n,location),v=t.value,g=e.value;let m=0;if(f){if(t.value=p,e.value=f,o&&o===v){o=null;return}m=g?f.position-g.position:0}else i(p);r.forEach(h=>{h(t.value,v,{delta:m,type:Tl.pop,direction:m?m>0?Pa.forward:Pa.back:Pa.unknown})})};function l(){o=t.value}function c(f){r.push(f);const p=()=>{const v=r.indexOf(f);v>-1&&r.splice(v,1)};return s.push(p),p}function d(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(at({},f.state,{scroll:la()}),"")}}function u(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:c,destroy:u}}function Yu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?la():null}}function I0(n){const{history:e,location:t}=window,i={value:Nh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,d){const u=n.indexOf("#"),f=u>-1?(t.host&&document.querySelector("base")?n:n.slice(u))+l:D0()+n+l;try{e[d?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),t[d?"replace":"assign"](f)}}function o(l,c){s(l,at({},e.state,Yu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const d=at({},r.value,e.state,{forward:l,scroll:la()});s(d.current,d,!0),s(l,at({},Yu(i.value,l,null),{position:d.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function U0(n){n=_0(n);const e=I0(n),t=L0(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=at({location:"",base:n,go:i,createHref:x0.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let ir=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Rt=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Rt||{});const N0={type:ir.Static,value:""},F0=/[a-zA-Z0-9_]/;function O0(n){if(!n)return[[]];if(n==="/")return[[N0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=Rt.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",d="";function u(){c&&(t===Rt.Static?s.push({type:ir.Static,value:c}):t===Rt.Param||t===Rt.ParamRegExp||t===Rt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:ir.Param,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==Rt.ParamRegExp){i=t,t=Rt.EscapeNext;continue}switch(t){case Rt.Static:l==="/"?(c&&u(),o()):l===":"?(u(),t=Rt.Param):f();break;case Rt.EscapeNext:f(),t=i;break;case Rt.Param:l==="("?t=Rt.ParamRegExp:F0.test(l)?f():(u(),t=Rt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Rt.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:t=Rt.ParamRegExpEnd:d+=l;break;case Rt.ParamRegExpEnd:u(),t=Rt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return t===Rt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),r}const Ku="[^/]+?",B0={sensitive:!1,strict:!1,start:!0,end:!0};var $t=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})($t||{});const k0=/[.+*?^${}()[\]/\\]/g;function z0(n,e){const t=at({},B0,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const d=c.length?[]:[$t.Root];t.strict&&!c.length&&(r+="/");for(let u=0;u<c.length;u++){const f=c[u];let p=$t.Segment+(t.sensitive?$t.BonusCaseSensitive:0);if(f.type===ir.Static)u||(r+="/"),r+=f.value.replace(k0,"\\$&"),p+=$t.Static;else if(f.type===ir.Param){const{value:v,repeatable:g,optional:m,regexp:h}=f;s.push({name:v,repeatable:g,optional:m});const w=h||Ku;if(w!==Ku){p+=$t.BonusCustomRegExp;try{`${w}`}catch(b){throw new Error(`Invalid custom RegExp for param "${v}" (${w}): `+b.message)}}let y=g?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;u||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,p+=$t.Dynamic,m&&(p+=$t.BonusOptional),g&&(p+=$t.BonusRepeatable),w===".*"&&(p+=$t.BonusWildcard)}d.push(p)}i.push(d)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=$t.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const d=c.match(o),u={};if(!d)return null;for(let f=1;f<d.length;f++){const p=d[f]||"",v=s[f-1];u[v.name]=p&&v.repeatable?p.split("/"):p}return u}function l(c){let d="",u=!1;for(const f of n){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const p of f)if(p.type===ir.Static)d+=p.value;else if(p.type===ir.Param){const{value:v,repeatable:g,optional:m}=p,h=v in c?c[v]:"";if(Dn(h)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const w=Dn(h)?h.join("/"):h;if(!w)if(m)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);d+=w}}return d||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function H0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===$t.Static+$t.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===$t.Static+$t.Segment?1:-1:0}function Fh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=H0(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Zu(i))return 1;if(Zu(r))return-1}return r.length-i.length}function Zu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const V0={strict:!1,end:!0,sensitive:!1};function G0(n,e,t){const i=z0(O0(n.path),t),r=at(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function W0(n,e){const t=[],i=new Map;e=Gu(V0,e);function r(u){return i.get(u)}function s(u,f,p){const v=!p,g=Qu(u);g.aliasOf=p&&p.record;const m=Gu(e,u),h=[g];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of b)h.push(Qu(at({},g,{components:p?p.record.components:g.components,path:C,aliasOf:p?p.record:g})))}let w,y;for(const b of h){const{path:C}=b;if(f&&C[0]!=="/"){const L=f.record.path,P=L[L.length-1]==="/"?"":"/";b.path=f.record.path+(C&&P+C)}if(w=G0(b,f,m),p?p.alias.push(w):(y=y||w,y!==w&&y.alias.push(w),v&&u.name&&!ed(w)&&o(u.name)),Oh(w)&&l(w),g.children){const L=g.children;for(let P=0;P<L.length;P++)s(L[P],w,p&&p.children[P])}p=p||w}return y?()=>{o(y)}:Ss}function o(u){if(Ih(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){const f=q0(u,t);t.splice(f,0,u),u.record.name&&!ed(u)&&i.set(u.record.name,u)}function c(u,f){let p,v={},g,m;if("name"in u&&u.name){if(p=i.get(u.name),!p)throw Wr(Mt.MATCHER_NOT_FOUND,{location:u});m=p.record.name,v=at(Ju(f.params,p.keys.filter(y=>!y.optional).concat(p.parent?p.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),u.params&&Ju(u.params,p.keys.map(y=>y.name))),g=p.stringify(v)}else if(u.path!=null)g=u.path,p=t.find(y=>y.re.test(g)),p&&(v=p.parse(g),m=p.record.name);else{if(p=f.name?i.get(f.name):t.find(y=>y.re.test(f.path)),!p)throw Wr(Mt.MATCHER_NOT_FOUND,{location:u,currentLocation:f});m=p.record.name,v=at({},f.params,u.params),g=p.stringify(v)}const h=[];let w=p;for(;w;)h.unshift(w.record),w=w.parent;return{name:m,path:g,params:v,matched:h,meta:$0(h)}}n.forEach(u=>s(u));function d(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:r}}function Ju(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Qu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:X0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function X0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function ed(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function $0(n){return n.reduce((e,t)=>at(e,t.meta),{})}function q0(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Fh(n,e[s])<0?i=s:t=s+1}const r=j0(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function j0(n){let e=n;for(;e=e.parent;)if(Oh(e)&&Fh(n,e)===0)return e}function Oh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function td(n){const e=wn(ca),t=wn(zc),i=kt(()=>{const l=lr(n.to);return e.resolve(l)}),r=kt(()=>{const{matched:l}=i.value,{length:c}=l,d=l[c-1],u=t.matched;if(!d||!u.length)return-1;const f=u.findIndex(Gr.bind(null,d));if(f>-1)return f;const p=nd(l[c-2]);return c>1&&nd(d)===p&&u[u.length-1].path!==p?u.findIndex(Gr.bind(null,l[c-2])):f}),s=kt(()=>r.value>-1&&Q0(t.params,i.value.params)),o=kt(()=>r.value>-1&&r.value===t.matched.length-1&&Lh(t.params,i.value.params));function a(l={}){if(J0(l)){const c=e[lr(n.replace)?"replace":"push"](lr(n.to)).catch(Ss);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:kt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function Y0(n){return n.length===1?n[0]:n}const K0=Kt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:td,setup(n,{slots:e}){const t=Hr(td(n)),{options:i}=wn(ca),r=kt(()=>({[id(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[id(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&Y0(e.default(t));return n.custom?s:Bc("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Z0=K0;function J0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Q0(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Dn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function nd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const id=(n,e,t)=>n??e??t,e_=Kt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=wn(Al),r=kt(()=>n.route||i.value),s=wn(ju,0),o=kt(()=>{let c=lr(s);const{matched:d}=r.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),a=kt(()=>r.value.matched[o.value]);To(ju,kt(()=>o.value+1)),To(C0,a),To(Al,r);const l=et();return cr(()=>[l.value,a.value,n.name],([c,d,u],[f,p,v])=>{d&&(d.instances[u]=c,p&&p!==d&&c&&c===f&&(d.leaveGuards.size||(d.leaveGuards=p.leaveGuards),d.updateGuards.size||(d.updateGuards=p.updateGuards))),c&&d&&(!p||!Gr(d,p)||!f)&&(d.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,d=n.name,u=a.value,f=u&&u.components[d];if(!f)return rd(t.default,{Component:f,route:c});const p=u.props[d],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Bc(f,at({},v,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return rd(t.default,{Component:m,route:c})||m}}});function rd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const t_=e_;function n_(n){const e=W0(n.routes,n),t=n.parseQuery||A0,i=n.stringifyQuery||qu,r=n.history,s=is(),o=is(),a=is(),l=rm(_i);let c=_i;Dr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ra.bind(null,U=>""+U),u=Ra.bind(null,u0),f=Ra.bind(null,Ds);function p(U,oe){let ne,de;return Ih(U)?(ne=e.getRecordMatcher(U),de=oe):de=U,e.addRoute(de,ne)}function v(U){const oe=e.getRecordMatcher(U);oe&&e.removeRoute(oe)}function g(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function h(U,oe){if(oe=at({},oe||l.value),typeof U=="string"){const N=Ca(t,U,oe.path),G=e.resolve({path:N.path},oe),Q=r.createHref(N.fullPath);return at(N,G,{params:f(G.params),hash:Ds(N.hash),redirectedFrom:void 0,href:Q})}let ne;if(U.path!=null)ne=at({},U,{path:Ca(t,U.path,oe.path).path});else{const N=at({},U.params);for(const G in N)N[G]==null&&delete N[G];ne=at({},U,{params:u(N)}),oe.params=u(oe.params)}const de=e.resolve(ne,oe),Be=U.hash||"";de.params=d(f(de.params));const A=h0(i,at({},U,{hash:a0(Be),path:de.path})),_=r.createHref(A);return at({fullPath:A,hash:Be,query:i===qu?R0(U.query):U.query||{}},de,{redirectedFrom:void 0,href:_})}function w(U){return typeof U=="string"?Ca(t,U,l.value.path):at({},U)}function y(U,oe){if(c!==U)return Wr(Mt.NAVIGATION_CANCELLED,{from:oe,to:U})}function b(U){return P(U)}function C(U){return b(at(w(U),{replace:!0}))}function L(U,oe){const ne=U.matched[U.matched.length-1];if(ne&&ne.redirect){const{redirect:de}=ne;let Be=typeof de=="function"?de(U,oe):de;return typeof Be=="string"&&(Be=Be.includes("?")||Be.includes("#")?Be=w(Be):{path:Be},Be.params={}),at({query:U.query,hash:U.hash,params:Be.path!=null?{}:U.params},Be)}}function P(U,oe){const ne=c=h(U),de=l.value,Be=U.state,A=U.force,_=U.replace===!0,N=L(ne,de);if(N)return P(at(w(N),{state:typeof N=="object"?at({},Be,N.state):Be,force:A,replace:_}),oe||ne);const G=ne;G.redirectedFrom=oe;let Q;return!A&&p0(i,de,ne)&&(Q=Wr(Mt.NAVIGATION_DUPLICATED,{to:G,from:de}),Ce(de,de,!0,!1)),(Q?Promise.resolve(Q):T(G,de)).catch(V=>$n(V)?$n(V,Mt.NAVIGATION_GUARD_REDIRECT)?V:be(V):W(V,G,de)).then(V=>{if(V){if($n(V,Mt.NAVIGATION_GUARD_REDIRECT))return P(at({replace:_},w(V.to),{state:typeof V.to=="object"?at({},Be,V.to.state):Be,force:A}),oe||G)}else V=k(G,de,!0,_,Be);return R(G,de,V),V})}function O(U,oe){const ne=y(U,oe);return ne?Promise.reject(ne):Promise.resolve()}function S(U){const oe=Ge.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(U):U()}function T(U,oe){let ne;const[de,Be,A]=P0(U,oe);ne=Da(de.reverse(),"beforeRouteLeave",U,oe);for(const N of de)N.leaveGuards.forEach(G=>{ne.push(Ri(G,U,oe))});const _=O.bind(null,U,oe);return ne.push(_),me(ne).then(()=>{ne=[];for(const N of s.list())ne.push(Ri(N,U,oe));return ne.push(_),me(ne)}).then(()=>{ne=Da(Be,"beforeRouteUpdate",U,oe);for(const N of Be)N.updateGuards.forEach(G=>{ne.push(Ri(G,U,oe))});return ne.push(_),me(ne)}).then(()=>{ne=[];for(const N of A)if(N.beforeEnter)if(Dn(N.beforeEnter))for(const G of N.beforeEnter)ne.push(Ri(G,U,oe));else ne.push(Ri(N.beforeEnter,U,oe));return ne.push(_),me(ne)}).then(()=>(U.matched.forEach(N=>N.enterCallbacks={}),ne=Da(A,"beforeRouteEnter",U,oe,S),ne.push(_),me(ne))).then(()=>{ne=[];for(const N of o.list())ne.push(Ri(N,U,oe));return ne.push(_),me(ne)}).catch(N=>$n(N,Mt.NAVIGATION_CANCELLED)?N:Promise.reject(N))}function R(U,oe,ne){a.list().forEach(de=>S(()=>de(U,oe,ne)))}function k(U,oe,ne,de,Be){const A=y(U,oe);if(A)return A;const _=oe===_i,N=Dr?history.state:{};ne&&(de||_?r.replace(U.fullPath,at({scroll:_&&N&&N.scroll},Be)):r.push(U.fullPath,Be)),l.value=U,Ce(U,oe,ne,_),be()}let B;function X(){B||(B=r.listen((U,oe,ne)=>{if(!te.listening)return;const de=h(U),Be=L(de,te.currentRoute.value);if(Be){P(at(Be,{replace:!0,force:!0}),de).catch(Ss);return}c=de;const A=l.value;Dr&&S0($u(A.fullPath,ne.delta),la()),T(de,A).catch(_=>$n(_,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_CANCELLED)?_:$n(_,Mt.NAVIGATION_GUARD_REDIRECT)?(P(at(w(_.to),{force:!0}),de).then(N=>{$n(N,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_DUPLICATED)&&!ne.delta&&ne.type===Tl.pop&&r.go(-1,!1)}).catch(Ss),Promise.reject()):(ne.delta&&r.go(-ne.delta,!1),W(_,de,A))).then(_=>{_=_||k(de,A,!1),_&&(ne.delta&&!$n(_,Mt.NAVIGATION_CANCELLED)?r.go(-ne.delta,!1):ne.type===Tl.pop&&$n(_,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),R(de,A,_)}).catch(Ss)}))}let re=is(),Z=is(),ee;function W(U,oe,ne){be(U);const de=Z.list();return de.length?de.forEach(Be=>Be(U,oe,ne)):console.error(U),Promise.reject(U)}function xe(){return ee&&l.value!==_i?Promise.resolve():new Promise((U,oe)=>{re.add([U,oe])})}function be(U){return ee||(ee=!U,X(),re.list().forEach(([oe,ne])=>U?ne(U):oe()),re.reset()),U}function Ce(U,oe,ne,de){const{scrollBehavior:Be}=n;if(!Dr||!Be)return Promise.resolve();const A=!ne&&M0($u(U.fullPath,0))||(de||!ne)&&history.state&&history.state.scroll||null;return wi().then(()=>Be(U,oe,A)).then(_=>_&&y0(_)).catch(_=>W(_,U,oe))}const ze=U=>r.go(U);let ke;const Ge=new Set,te={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:h,options:n,push:b,replace:C,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:xe,install(U){U.component("RouterLink",Z0),U.component("RouterView",t_),U.config.globalProperties.$router=te,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>lr(l)}),Dr&&!ke&&l.value===_i&&(ke=!0,b(r.location).catch(de=>{}));const oe={};for(const de in _i)Object.defineProperty(oe,de,{get:()=>l.value[de],enumerable:!0});U.provide(ca,te),U.provide(zc,Uf(oe)),U.provide(Al,l);const ne=U.unmount;Ge.add(U),U.unmount=function(){Ge.delete(U),Ge.size<1&&(c=_i,B&&B(),B=null,l.value=_i,ke=!1,ee=!1),ne()}}};function me(U){return U.reduce((oe,ne)=>oe.then(()=>S(ne)),Promise.resolve())}return te}function i_(){return wn(ca)}function Bh(n){return wn(zc)}const r_="/eclub_logo2.jpg",s_={class:"relative w-full max-w-[820px] px-6 text-center"},o_={class:"mt-6 flex items-center justify-center gap-3"},a_={class:"relative h-full w-full flex items-center justify-center p-4 sm:p-5"},l_={class:"w-full max-w-[820px] h-[70svh] min-h-[380px] max-h-[760px] bg-black/40 border border-emerald-500/40 rounded-xl shadow-[0_0_40px_-10px_rgba(16,255,128,0.5)] backdrop-blur-sm overflow-hidden ring-1 ring-emerald-400/10 relative animate-crt flex flex-col"},c_={class:"flex items-center justify-between px-4 py-2 text-xs text-emerald-300/80 shrink-0 relative z-20"},u_={key:0,class:"inline-block w-2 bg-emerald-300 animate-cursor align-baseline ml-[1px]"},d_={key:0,class:"pointer-events-none absolute bottom-4 inset-x-0 flex flex-col items-center gap-1 text-emerald-300/80 z-30"},f_=10,h_=100,p_=200,m_=.35,g_=Kt({__name:"TerminalIntro",emits:["done"],setup(n,{emit:e}){const t=e,i=et([]),r=et(!0),s=et(!1),o=et(!1),a=et(null),l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=new Audio("/sounds/begin.mp3");c.loop=!1,c.preload="auto";const d=new Audio("/sounds/tick.mp3");d.loop=!1,d.preload="auto";const u=et(!1),f=et(!1);c.volume=.7,d.volume=1;async function p(){if(!u.value)try{d.muted=!0,await d.play(),d.pause(),d.currentTime=0,d.muted=!1,c.muted=!0,await c.play(),c.pause(),c.currentTime=0,c.muted=!1,u.value=!0,f.value=!0}catch(B){console.warn("Audio unlock failed (will retry on next interaction)",B)}}const v=et(!0);function g(){v.value&&(p(),v.value=!1,window.addEventListener("keydown",k),wi(()=>{O()}))}function m(B){g()}const h=["// === ElectronicClub BOOT SEQUENCE v2.1 ===","","[SYSTEM] 时间线归档: 「高中故事线」 HIGH_SCHOOL_ERA (2022-2025)","[STATUS] 成就解锁: 「我的大学」 UNIVERSITY_ACCESS_KEY","","[LOADING] 新世界模块: 「无尽世界」 UNLIMITED_POSSIBILITIES","  - 可用技能点: ∞ (自由分配模式)","  - 核心规则: 允许失败 | 鼓励探索 | 支持重构","","[DISCOVERY] 发现关键地点: ","  MAKERSPACE_S514 [电子俱乐部]","  特征验证: ","    ████████ 技能孵化指数 100%","    ██████████ 同伴支持等级 114%","","[USER_PROFILE] 检测到新身份:","  用户类别: FRESHMAN_2025","  建议路径: JOIN_CREATOR_COMMUNITY","","[AUTO_LOG] 系统记录片段:",'  > "凌晨3点的调试是最好成长礼 - 2024级学长"','  > "我的第一个LED在这里点亮 - 2023级学姐"','  > ". . ."','  > "我们做到了，这是属于电子俱乐部的荣耀！-2006年学长"','  > ". . ."','  > "我们创建一个电子俱乐部吧，为了我们的那份热爱。-1982年学长"',"","[RESOURCE] 可用工具包:","  1. BEGINNER_FRIENDLY_STARTER_KIT 「新手保护期」","  2. PROJECT_BASED_LEARNING_PATH 「学习路径」","  3. MENTOR_SUPPORT_NETWORK 「社交支持网络」","","[NOTICE] 不需要预先装备全部技能","  CORE_REQUIREMENT: 好奇心与坚持","","[COUNTDOWN] 主线任务触发","  > 【新手村】：加入电子俱乐部","  > 【渐入佳境】：让你的智能车在学校赛道驰骋","  > 【获得传承】：成为国赛大佬","","> // === 终端交互就绪 ===","> [INPUT REQUIRED] 执行 ./open_poster 查看新世界地图","> 等待用户指令: █","","","",""];let w=!1,y=null;function b(B){return new Promise(X=>setTimeout(X,B))}function C(){y&&cancelAnimationFrame(y),y=requestAnimationFrame(()=>{const B=a.value;B&&(B.scrollTop=B.scrollHeight)})}function L(B){if(l||o.value)return 0;let X=f_;return/[，。、“”‘’…：:;,.!?！？]/.test(B)&&(X+=h_),X*(o.value?m_:1)}async function P(B){if(d.currentTime=0,f.value&&d.play().catch(()=>{}),B.trim()===""&&B!==""){i.value.push(""),await wi(),C();return}let X="";i.value.push("");const re=i.value.length-1;for(let Z=0;Z<B.length;Z++){if(w)return;const ee=B[Z];if(X+=ee,i.value[re]=X,!l&&!o.value){await wi(),C();const W=L(ee);W>0&&await b(W*(.6+Math.random()*.5))}}!l&&!o.value&&await b(p_*(.7+Math.random()*.4)),C()}async function O(){i.value=[],r.value=!0;for(let B=0;B<h.length;B++){if(w)return;const X=h[B].startsWith("> ")?"":"> ";await P(X+h[B])}r.value=!1,s.value=!0,await wi(),C(),f.value&&c.play().catch(()=>{})}function S(){w=!0,o.value=!0,t("done")}function T(){w=!0,o.value=!0,i.value=h.map(B=>B.startsWith("> ")?B:"> "+B),r.value=!1,s.value=!0,wi(C)}function R(){r.value?T():S()}function k(B){["Enter"," ","ArrowDown"].includes(B.key)&&(B.preventDefault(),R())}return mi(async()=>{await wi(),window.addEventListener("keydown",m,{once:!0})}),Bi(()=>{window.removeEventListener("keydown",k),window.removeEventListener("keydown",m)}),(B,X)=>v.value?(le(),ue("section",{key:0,class:"fixed inset-0 z-50 min-h-[100svh] bg-black text-emerald-200 font-mono overflow-hidden select-none grid place-items-center",onClick:g},[D("div",s_,[X[0]||(X[0]=en('<div class="overflow-clip mx-auto w-30 h-30 rounded-full border border-emerald-500/40 grid place-items-center shadow-[0_0_40px_-10px_rgba(16,255,128,0.5)] animate-crt" data-v-3196e02b><img src="'+r_+'" alt="E-Club" class="opacity-90 h-full" data-v-3196e02b></div><h1 class="mt-6 text-2xl font-semibold text-emerald-300" data-v-3196e02b>ElectronicClub OS</h1><p class="mt-2 text-emerald-300/80" data-v-3196e02b>是否启动系统？</p><p class="mt-1 text-xs text-emerald-300/60" data-v-3196e02b>点击或按任意键开始</p><p class="mt-1 text-xs text-emerald-300/60" data-v-3196e02b>Click / Press any key to start</p>',5)),D("div",o_,[D("button",{type:"button",class:"px-4 py-2 rounded border border-emerald-500/40 hover:bg-emerald-500/10 active:scale-95 transition flex items-center justify-center font-semibold text-base text-emerald-300 shadow-md",onClick:mn(g,["stop"])},"启动"),D("button",{type:"button",class:"px-4 py-2 rounded border border-emerald-500/20 text-emerald-300/70 hover:bg-white/5 active:scale-95 transition flex items-center justify-center font-semibold text-base shadow",onClick:mn(S,["stop"])},"直接进入")])]),X[1]||(X[1]=D("div",{class:"absolute inset-0 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(16,255,128,0.08),rgba(0,0,0,0)_70%)]"},null,-1)),X[2]||(X[2]=D("div",{class:"absolute inset-0 pointer-events-none scanline"},null,-1))])):(le(),ue("section",{key:1,class:"fixed inset-0 z-50 min-h-[100svh] bg-black text-emerald-200 font-mono overflow-hidden select-none overscroll-y-none",onClick:R,onTouchstartPassive:R},[X[6]||(X[6]=en('<div class="absolute inset-0 pointer-events-none crt-grid opacity-30" data-v-3196e02b></div><div class="absolute inset-0 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(16,255,128,0.07),rgba(0,0,0,0)_70%)]" data-v-3196e02b></div><div class="absolute inset-0 pointer-events-none scanline" data-v-3196e02b></div><div class="absolute inset-x-0 top-0 h-16 fade-top pointer-events-none" data-v-3196e02b></div><div class="absolute inset-x-0 bottom-0 h-20 fade-bottom pointer-events-none" data-v-3196e02b></div>',5)),D("div",a_,[D("div",l_,[D("div",c_,[X[3]||(X[3]=D("div",{class:"flex items-center gap-2 relative"},[D("span",{class:"size-2 rounded-full bg-emerald-400 animate-pulse"}),D("span",{class:"relative z-10"},"E-Club Terminal"),D("span",{class:"absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-10 bg-emerald-300/20 backdrop-blur-md rounded-full blur-md z-0 pointer-events-none"})],-1)),D("button",{type:"button",class:"px-2 py-1 rounded border border-emerald-500/40 hover:bg-emerald-500/10 active:scale-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50",onClick:mn(S,["stop"]),"aria-label":"跳过"},"跳过")]),D("div",{ref_key:"scroller",ref:a,class:"flex-1 w-full px-4 pb-20 pt-1 sm:px-6 sm:pb-24 md:px-8 md:pb-24 overflow-y-auto terminal-mask no-scrollbar text-[13px] sm:text-sm leading-[1.4] tracking-wide relative"},[D("div",null,[(le(!0),ue(At,null,Di(i.value,(re,Z)=>(le(),ue("div",{key:Z,class:Mn(["whitespace-pre-wrap transition-opacity duration-300 will-change-transform",[re.trim()===""?"opacity-40 h-5":"glow-text",Z===i.value.length-1&&r.value?"pr-2":""]])},[dt(It(re)+" ",1),Z===i.value.length-1&&r.value?(le(),ue("span",u_)):Ut("",!0)],2))),128))])],512),s.value?(le(),ue("div",d_,[...X[4]||(X[4]=[D("span",{class:"text-[11px] uppercase tracking-widest"},"轻触继续 / Press to continue",-1),D("span",{class:"animate-bounce text-emerald-300 text-lg"},"↓",-1)])])):Ut("",!0),X[5]||(X[5]=D("div",{class:"pointer-events-none absolute -inset-px rounded-xl border border-emerald-400/10 shadow-[0_0_20px_2px_rgba(16,255,128,0.08)_inset]"},null,-1))])])],32))}}),Vn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},__=Vn(g_,[["__scopeId","data-v-3196e02b"]]);var v_="@vercel/analytics",x_="1.5.0",b_=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function kh(){return typeof window<"u"}function zh(){try{const n="production"}catch{}return"production"}function y_(n="auto"){if(n==="auto"){window.vam=zh();return}window.vam=n}function S_(){return(kh()?window.vam:zh())||"production"}function Rl(){return S_()==="development"}function M_(n,e){if(!n||!e)return n;let t=n;try{const i=Object.entries(e);for(const[r,s]of i)if(!Array.isArray(s)){const o=sd(s);o.test(t)&&(t=t.replace(o,`/[${r}]`))}for(const[r,s]of i)if(Array.isArray(s)){const o=sd(s.join("/"));o.test(t)&&(t=t.replace(o,`/[...${r}]`))}return t}catch{return n}}function sd(n){return new RegExp(`/${E_(n)}(?=[/?#]|$)`)}function E_(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function T_(n){return n.scriptSrc?n.scriptSrc:Rl()?"https://va.vercel-scripts.com/v1/script.debug.js":n.basePath?`${n.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function w_(n={debug:!0}){var e;if(!kh())return;y_(n.mode),b_(),n.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",n.beforeSend));const t=T_(n);if(document.head.querySelector(`script[src*="${t}"]`))return;const i=document.createElement("script");i.src=t,i.defer=!0,i.dataset.sdkn=v_+(n.framework?`/${n.framework}`:""),i.dataset.sdkv=x_,n.disableAutoTrack&&(i.dataset.disableAutoTrack="1"),n.endpoint?i.dataset.endpoint=n.endpoint:n.basePath&&(i.dataset.endpoint=`${n.basePath}/insights`),n.dsn&&(i.dataset.dsn=n.dsn),i.onerror=()=>{const r=Rl()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${t}. ${r}`)},Rl()&&n.debug===!1&&(i.dataset.debug="false"),document.head.appendChild(i)}function A_({route:n,path:e}){var t;(t=window.va)==null||t.call(window,"pageview",{route:n,path:e})}function R_(){try{return}catch{}}function C_(n="vue"){return Kt({props:["dsn","beforeSend","debug","scriptSrc","endpoint","mode"],setup(e){const t=Bh();if(w_({...e,basePath:R_(),disableAutoTrack:!!t,framework:n}),t&&typeof window<"u"){const i=()=>{A_({route:M_(t.path,t.params),path:t.path})};i(),cr(t,i)}},render(){return null}})}var P_=C_();const D_={class:"bg-black text-white min-h-[100dvh] relative overflow-hidden"},L_={class:"fixed inset-0 z-50"},I_=Kt({__name:"App",setup(n){const e=Bh(),t=et(!1),i=et(!1),r=kt(()=>e.path==="/"&&!i.value);function s(){t.value=!1,i.value=!0}return cr(()=>e.path,o=>{o==="/"&&!i.value&&(t.value=!0)},{immediate:!0}),(o,a)=>{const l=eh("router-view");return le(),ue(At,null,[it(lr(P_)),D("main",D_,[it(l,null,{default:Fr(({Component:c})=>[it(Ml,{name:"fade",mode:"out-in"},{default:Fr(()=>[(le(),Rs(Cm(c)))]),_:2},1024)]),_:1}),r.value&&t.value?(le(),Rs(Ml,{key:0,name:"art",mode:"out-in",appear:""},{default:Fr(()=>[D("div",L_,[it(__,{onDone:s})])]),_:1})):Ut("",!0)])],64)}}}),U_=Vn(I_,[["__scopeId","data-v-d717eabb"]]),N_="/logo.svg",F_="/eclub_logo.jpg";const Hc="179",O_=0,od=1,B_=2,Hh=1,k_=2,Jn=3,Ni=0,tn=1,ii=2,Li=0,Br=1,Wo=2,ad=3,ld=4,z_=5,tr=100,H_=101,V_=102,G_=103,W_=104,X_=200,$_=201,q_=202,j_=203,Cl=204,Pl=205,Y_=206,K_=207,Z_=208,J_=209,Q_=210,ev=211,tv=212,nv=213,iv=214,Dl=0,Ll=1,Il=2,Xr=3,Ul=4,Nl=5,Fl=6,Ol=7,Vh=0,rv=1,sv=2,Ii=0,ov=1,av=2,lv=3,cv=4,uv=5,dv=6,fv=7,Gh=300,$r=301,qr=302,Bl=303,kl=304,ua=306,zl=1e3,rr=1001,Hl=1002,An=1003,hv=1004,Zs=1005,kn=1006,La=1007,sr=1008,fi=1009,Wh=1010,Xh=1011,Ls=1012,Vc=1013,ur=1014,ri=1015,Bs=1016,Gc=1017,Wc=1018,Is=1020,$h=35902,qh=1021,jh=1022,En=1023,Us=1026,Ns=1027,Yh=1028,Xc=1029,Kh=1030,$c=1031,qc=1033,Co=33776,Po=33777,Do=33778,Lo=33779,Vl=35840,Gl=35841,Wl=35842,Xl=35843,$l=36196,ql=37492,jl=37496,Yl=37808,Kl=37809,Zl=37810,Jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,rc=37817,sc=37818,oc=37819,ac=37820,lc=37821,Io=36492,cc=36494,uc=36495,Zh=36283,dc=36284,fc=36285,hc=36286,pv=3200,mv=3201,gv=0,_v=1,Ci="",hn="srgb",jr="srgb-linear",Xo="linear",ut="srgb",mr=7680,cd=519,vv=512,xv=513,bv=514,Jh=515,yv=516,Sv=517,Mv=518,Ev=519,ud=35044,dd="300 es",zn=2e3,$o=2001;class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,pc=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Tv(n,e){return(n%e+e)%e}function Ua(n,e,t){return(1-t)*n+t*e}function rs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],u=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(u!==g||l!==f||c!==p||d!==v){let m=1-a;const h=l*f+c*p+d*v+u*g,w=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),L=Math.atan2(C,h*w);m=Math.sin(m*L)/C,a=Math.sin(a*L)/C}const b=a*w;if(l=l*m+f*b,c=c*m+p*b,d=d*m+v*b,u=u*m+g*b,m===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=C,c*=C,d*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],u=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+d*u+l*p-c*f,e[t+1]=l*v+d*f+c*u-a*p,e[t+2]=c*v+d*p+a*f-l*u,e[t+3]=d*v-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),u=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*d*u+c*p*v,this._y=c*p*u-f*d*v,this._z=c*d*v+f*p*u,this._w=c*d*u-f*p*v;break;case"YXZ":this._x=f*d*u+c*p*v,this._y=c*p*u-f*d*v,this._z=c*d*v-f*p*u,this._w=c*d*u+f*p*v;break;case"ZXY":this._x=f*d*u-c*p*v,this._y=c*p*u+f*d*v,this._z=c*d*v+f*p*u,this._w=c*d*u-f*p*v;break;case"ZYX":this._x=f*d*u-c*p*v,this._y=c*p*u+f*d*v,this._z=c*d*v-f*p*u,this._w=c*d*u+f*p*v;break;case"YZX":this._x=f*d*u+c*p*v,this._y=c*p*u+f*d*v,this._z=c*d*v-f*p*u,this._w=c*d*u-f*p*v;break;case"XZY":this._x=f*d*u-c*p*v,this._y=c*p*u-f*d*v,this._z=c*d*v+f*p*u,this._w=c*d*u+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*d,this.y=i+l*d+a*c-s*u,this.z=r+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new j,fd=new zs;class Ke{constructor(e,t,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],p=i[5],v=i[8],g=r[0],m=r[3],h=r[6],w=r[1],y=r[4],b=r[7],C=r[2],L=r[5],P=r[8];return s[0]=o*g+a*w+l*C,s[3]=o*m+a*y+l*L,s[6]=o*h+a*b+l*P,s[1]=c*g+d*w+u*C,s[4]=c*m+d*y+u*L,s[7]=c*h+d*b+u*P,s[2]=f*g+p*w+v*C,s[5]=f*m+p*y+v*L,s[8]=f*h+p*b+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,f=a*l-d*s,p=c*s-o*l,v=t*u+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=u*g,e[1]=(r*c-d*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(d*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new Ke;function Qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wv(){const n=qo("canvas");return n.style.display="block",n}const hd={};function kr(n){n in hd||(hd[n]=!0,console.warn(n))}function Av(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const pd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rv(){const n={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?Xo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[jr]:{primaries:e,whitePoint:i,transfer:Xo,toXYZ:pd,fromXYZ:md,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:pd,fromXYZ:md,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}const nt=Rv();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gr;class Cv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gr===void 0&&(gr=qo("canvas")),gr.width=e.width,gr.height=e.height;const r=gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ai(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pv=0;class jc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dv=0;const Ba=new j;class Yt extends Kr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=rr,r=rr,s=kn,o=sr,a=En,l=fi,c=Yt.DEFAULT_ANISOTROPY,d=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=ks(),this.name="",this.source=new jc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Gh;Yt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(p+1)/2,C=(h+1)/2,L=(d+f)/4,P=(u+g)/4,O=(v+m)/4;return y>b&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=L/i,s=P/i):b>C?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=L/r,s=O/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=P/s,r=O/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(u-g)/w,this.z=(f-d)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lv extends Kr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Yt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new jc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends Lv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ep extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iv extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(s,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Js.copy(i.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Qs.subVectors(this.max,ss),_r.subVectors(e.a,ss),vr.subVectors(e.b,ss),xr.subVectors(e.c,ss),vi.subVectors(vr,_r),xi.subVectors(xr,vr),Xi.subVectors(_r,xr);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Xi.z,Xi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Xi.z,0,-Xi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Xi.y,Xi.x,0];return!ka(t,_r,vr,xr,Qs)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,_r,vr,xr,Qs))?!1:(eo.crossVectors(vi,xi),t=[eo.x,eo.y,eo.z],ka(t,_r,vr,xr,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new j,new j,new j,new j,new j,new j,new j,new j],xn=new j,Js=new Hs,_r=new j,vr=new j,xr=new j,vi=new j,xi=new j,Xi=new j,ss=new j,Qs=new j,eo=new j,$i=new j;function ka(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$i.fromArray(n,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),d=i.dot($i);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Uv=new Hs,os=new j,za=new j;class Vs{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(za)),this.expandByPoint(os.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const jn=new j,Ha=new j,to=new j,bi=new j,Va=new j,no=new j,Ga=new j;class Yc{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ha.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=bi.dot(this.direction),l=-bi.dot(to),c=bi.lengthSq(),d=Math.abs(1-o*o);let u,f,p,v;if(d>0)if(u=o*l-a,f=o*a-l,v=s*d,u>=0)if(f>=-v)if(f<=v){const g=1/d;u*=g,f*=g,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ha).addScaledVector(to,f),p}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,r,s){Va.subVectors(t,e),no.subVectors(i,e),Ga.crossVectors(Va,no);let o=this.direction.dot(Ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(no.crossVectors(bi,no));if(l<0)return null;const c=a*this.direction.dot(Va.cross(bi));if(c<0||l+c>o)return null;const d=-a*bi.dot(Ga);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,r,s,o,a,l,c,d,u,f,p,v,g,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,u,f,p,v,g,m)}set(e,t,i,r,s,o,a,l,c,d,u,f,p,v,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*u,v=a*d,g=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*u,v=c*d,g=c*u;t[0]=f+g*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=p*a-v,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*u,v=c*d,g=c*u;t[0]=f-g*a,t[4]=-o*u,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*d,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*u,v=a*d,g=a*u;t[0]=l*d,t[4]=v*c-p,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,g=a*c;t[0]=l*d,t[4]=g-f*u,t[8]=v*u+p,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*u+v,t[10]=f-g*u}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,g=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+g,t[5]=o*d,t[9]=p*u-v,t[2]=v*u-p,t[6]=a*d,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nv,e,Fv)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),yi.crossVectors(i,sn),yi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),yi.crossVectors(i,sn)),yi.normalize(),io.crossVectors(sn,yi),r[0]=yi.x,r[4]=io.x,r[8]=sn.x,r[1]=yi.y,r[5]=io.y,r[9]=sn.y,r[2]=yi.z,r[6]=io.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],p=i[13],v=i[2],g=i[6],m=i[10],h=i[14],w=i[3],y=i[7],b=i[11],C=i[15],L=r[0],P=r[4],O=r[8],S=r[12],T=r[1],R=r[5],k=r[9],B=r[13],X=r[2],re=r[6],Z=r[10],ee=r[14],W=r[3],xe=r[7],be=r[11],Ce=r[15];return s[0]=o*L+a*T+l*X+c*W,s[4]=o*P+a*R+l*re+c*xe,s[8]=o*O+a*k+l*Z+c*be,s[12]=o*S+a*B+l*ee+c*Ce,s[1]=d*L+u*T+f*X+p*W,s[5]=d*P+u*R+f*re+p*xe,s[9]=d*O+u*k+f*Z+p*be,s[13]=d*S+u*B+f*ee+p*Ce,s[2]=v*L+g*T+m*X+h*W,s[6]=v*P+g*R+m*re+h*xe,s[10]=v*O+g*k+m*Z+h*be,s[14]=v*S+g*B+m*ee+h*Ce,s[3]=w*L+y*T+b*X+C*W,s[7]=w*P+y*R+b*re+C*xe,s[11]=w*O+y*k+b*Z+C*be,s[15]=w*S+y*B+b*ee+C*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],v=e[3],g=e[7],m=e[11],h=e[15];return v*(+s*l*u-r*c*u-s*a*f+i*c*f+r*a*p-i*l*p)+g*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*d-s*l*d)+m*(+t*c*u-t*a*p-s*o*u+i*o*p+s*a*d-i*c*d)+h*(-r*a*d-t*l*u+t*a*f+r*o*u-i*o*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],v=e[12],g=e[13],m=e[14],h=e[15],w=u*m*c-g*f*c+g*l*p-a*m*p-u*l*h+a*f*h,y=v*f*c-d*m*c-v*l*p+o*m*p+d*l*h-o*f*h,b=d*g*c-v*u*c+v*a*p-o*g*p-d*a*h+o*u*h,C=v*u*l-d*g*l-v*a*f+o*g*f+d*a*m-o*u*m,L=t*w+i*y+r*b+s*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=w*P,e[1]=(g*f*s-u*m*s-g*r*p+i*m*p+u*r*h-i*f*h)*P,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*h+i*l*h)*P,e[3]=(u*l*s-a*f*s-u*r*c+i*f*c+a*r*p-i*l*p)*P,e[4]=y*P,e[5]=(d*m*s-v*f*s+v*r*p-t*m*p-d*r*h+t*f*h)*P,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*h-t*l*h)*P,e[7]=(o*f*s-d*l*s+d*r*c-t*f*c-o*r*p+t*l*p)*P,e[8]=b*P,e[9]=(v*u*s-d*g*s-v*i*p+t*g*p+d*i*h-t*u*h)*P,e[10]=(o*g*s-v*a*s+v*i*c-t*g*c-o*i*h+t*a*h)*P,e[11]=(d*a*s-o*u*s-d*i*c+t*u*c+o*i*p-t*a*p)*P,e[12]=C*P,e[13]=(d*g*r-v*u*r+v*i*f-t*g*f-d*i*m+t*u*m)*P,e[14]=(v*a*r-o*g*r-v*i*l+t*g*l+o*i*m-t*a*m)*P,e[15]=(o*u*r-d*a*r+d*i*l-t*u*l-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,f=s*c,p=s*d,v=s*u,g=o*d,m=o*u,h=a*u,w=l*c,y=l*d,b=l*u,C=i.x,L=i.y,P=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+b)*C,r[2]=(v-y)*C,r[3]=0,r[4]=(p-b)*L,r[5]=(1-(f+h))*L,r[6]=(m+w)*L,r[7]=0,r[8]=(v+y)*P,r[9]=(m-w)*P,r[10]=(1-(f+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const o=br.set(r[4],r[5],r[6]).length(),a=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/s,d=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,t.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=zn,l=!1){const c=this.elements,d=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let v,g;if(l)v=s/(o-s),g=o*s/(o-s);else if(a===zn)v=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===$o)v=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zn,l=!1){const c=this.elements,d=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,g;if(l)v=1/(o-s),g=o/(o-s);else if(a===zn)v=-2/(o-s),g=-(o+s)/(o-s);else if(a===$o)v=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const br=new j,bn=new Tt,Nv=new j(0,0,0),Fv=new j(1,1,1),yi=new j,io=new j,sn=new j,gd=new Tt,_d=new zs;class hi{constructor(e=0,t=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _d.setFromEuler(this),this.setFromQuaternion(_d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ov=0;const vd=new j,yr=new zs,Yn=new Tt,ro=new j,as=new j,Bv=new j,kv=new zs,xd=new j(1,0,0),bd=new j(0,1,0),yd=new j(0,0,1),Sd={type:"added"},zv={type:"removed"},Sr={type:"childadded",child:null},Wa={type:"childremoved",child:null};class Ht extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new j,t=new hi,i=new zs,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ke}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(xd,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(yd,e)}translateOnAxis(e,t){return vd.copy(e).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xd,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(as,ro,this.up):Yn.lookAt(ro,as,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(Yn),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sd),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zv),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sd),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Bv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new j(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new j,Kn=new j,Xa=new j,Zn=new j,Mr=new j,Er=new j,Md=new j,$a=new j,qa=new j,ja=new j,Ya=new Et,Ka=new Et,Za=new Et;class Sn{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),Kn.subVectors(i,t),Xa.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(Kn),l=yn.dot(Xa),c=Kn.dot(Kn),d=Kn.dot(Xa),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(c*l-a*d)*f,v=(o*d-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ya.setScalar(0),Ka.setScalar(0),Za.setScalar(0),Ya.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,i),Za.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ya,s.x),o.addScaledVector(Ka,s.y),o.addScaledVector(Za,s.z),o}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),Kn.subVectors(e,t),yn.cross(Kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),yn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Mr.subVectors(r,i),Er.subVectors(s,i),$a.subVectors(e,i);const l=Mr.dot($a),c=Er.dot($a);if(l<=0&&c<=0)return t.copy(i);qa.subVectors(e,r);const d=Mr.dot(qa),u=Er.dot(qa);if(d>=0&&u<=d)return t.copy(r);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Mr,o);ja.subVectors(e,s);const p=Mr.dot(ja),v=Er.dot(ja);if(v>=0&&p<=v)return t.copy(s);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Er,a);const m=d*v-p*u;if(m<=0&&u-d>=0&&p-v>=0)return Md.subVectors(s,r),a=(u-d)/(u-d+(p-v)),t.copy(r).addScaledVector(Md,a);const h=1/(m+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(Mr,o).addScaledVector(Er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},so={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Tv(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ja(o,s,e+1/3),this.g=Ja(o,s,e),this.b=Ja(o,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=np[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return nt.workingToColorSpace(Ft.copy(this),e),Math.round(Qe(Ft.r*255,0,255))*65536+Math.round(Qe(Ft.g*255,0,255))*256+Math.round(Qe(Ft.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Ft.copy(this),t);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=hn){nt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,r=Ft.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(so);const i=Ua(Si.h,so.h,t),r=Ua(Si.s,so.s,t),s=Ua(Si.l,so.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new rt;rt.NAMES=np;let Hv=0;class Zr extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Br,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ip extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,oo=new ft;let Vv=0;class _n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ud,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ud&&(e.usage=this.usage),e}}class rp extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sp extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rn extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gv=0;const fn=new Tt,Qa=new Ht,Tr=new j,on=new Hs,ls=new Hs,Dt=new j;class Ln extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?sp:rp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(on.min,ls.min),on.expandByPoint(Dt),Dt.addVectors(on.max,ls.max),on.expandByPoint(Dt)):(on.expandByPoint(ls.min),on.expandByPoint(ls.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Dt.fromBufferAttribute(a,c),l&&(Tr.fromBufferAttribute(e,c),Dt.add(Tr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new j,l[O]=new j;const c=new j,d=new j,u=new j,f=new ft,p=new ft,v=new ft,g=new j,m=new j;function h(O,S,T){c.fromBufferAttribute(i,O),d.fromBufferAttribute(i,S),u.fromBufferAttribute(i,T),f.fromBufferAttribute(s,O),p.fromBufferAttribute(s,S),v.fromBufferAttribute(s,T),d.sub(c),u.sub(c),p.sub(f),v.sub(f);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(R),a[O].add(g),a[S].add(g),a[T].add(g),l[O].add(m),l[S].add(m),l[T].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,S=w.length;O<S;++O){const T=w[O],R=T.start,k=T.count;for(let B=R,X=R+k;B<X;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new j,b=new j,C=new j,L=new j;function P(O){C.fromBufferAttribute(r,O),L.copy(C);const S=a[O];y.copy(S),y.sub(C.multiplyScalar(C.dot(S))).normalize(),b.crossVectors(L,S);const R=b.dot(l[O])<0?-1:1;o.setXYZW(O,y.x,y.y,y.z,R)}for(let O=0,S=w.length;O<S;++O){const T=w[O],R=T.start,k=T.count;for(let B=R,X=R+k;B<X;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,d=new j,u=new j;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*d;for(let h=0;h<d;h++)f[v++]=c[p++]}return new _n(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new Tt,qi=new Yc,ao=new Vs,Td=new j,lo=new j,co=new j,uo=new j,el=new j,fo=new j,wd=new j,ho=new j;class si extends Ht{constructor(e=new Ln,t=new ip){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],u=s[l];d!==0&&(el.fromBufferAttribute(u,e),o?fo.addScaledVector(el,d):fo.addScaledVector(el.sub(t),d))}t.add(fo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(s),qi.copy(e.ray).recast(e.near),!(ao.containsPoint(qi.origin)===!1&&(qi.intersectSphere(ao,Td)===null||qi.origin.distanceToSquared(Td)>(e.far-e.near)**2))&&(Ed.copy(s).invert(),qi.copy(e.ray).applyMatrix4(Ed),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],h=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=w,C=y;b<C;b+=3){const L=a.getX(b),P=a.getX(b+1),O=a.getX(b+2);r=po(this,h,e,i,c,d,u,L,P,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,h=g;m<h;m+=3){const w=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);r=po(this,o,e,i,c,d,u,w,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],h=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=w,C=y;b<C;b+=3){const L=b,P=b+1,O=b+2;r=po(this,h,e,i,c,d,u,L,P,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,h=g;m<h;m+=3){const w=m,y=m+1,b=m+2;r=po(this,o,e,i,c,d,u,w,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Wv(n,e,t,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;ho.copy(a),ho.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:n}}function po(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,lo),n.getVertexPosition(l,co),n.getVertexPosition(c,uo);const d=Wv(n,e,t,i,lo,co,uo,wd);if(d){const u=new j;Sn.getBarycoord(wd,lo,co,uo,u),r&&(d.uv=Sn.getInterpolatedAttribute(r,a,l,c,u,new ft)),s&&(d.uv1=Sn.getInterpolatedAttribute(s,a,l,c,u,new ft)),o&&(d.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new j,materialIndex:0};Sn.getNormal(lo,co,uo,f.normal),d.face=f,d.barycoord=u}return d}class Gs extends Ln{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(d,3)),this.setAttribute("uv",new Rn(u,2));function v(g,m,h,w,y,b,C,L,P,O,S){const T=b/P,R=C/O,k=b/2,B=C/2,X=L/2,re=P+1,Z=O+1;let ee=0,W=0;const xe=new j;for(let be=0;be<Z;be++){const Ce=be*R-B;for(let ze=0;ze<re;ze++){const ke=ze*T-k;xe[g]=ke*w,xe[m]=Ce*y,xe[h]=X,c.push(xe.x,xe.y,xe.z),xe[g]=0,xe[m]=0,xe[h]=L>0?1:-1,d.push(xe.x,xe.y,xe.z),u.push(ze/P),u.push(1-be/O),ee+=1}}for(let be=0;be<O;be++)for(let Ce=0;Ce<P;Ce++){const ze=f+Ce+re*be,ke=f+Ce+re*(be+1),Ge=f+(Ce+1)+re*(be+1),te=f+(Ce+1)+re*be;l.push(ze,ke,te),l.push(ke,Ge,te),W+=6}a.addGroup(p,W,S),p+=W,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Yr(n[t]);for(const r in i)e[r]=i[r]}return e}function Xv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function op(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const $v={clone:Yr,merge:Wt};var qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qv,this.fragmentShader=jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=Xv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ap extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new j,Ad=new ft,Rd=new ft;class pn extends ap{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Ad,Rd),t.subVectors(Rd,Ad)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wr=-90,Ar=1;class Yv extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(wr,Ar,e,t);r.layers=this.layers,this.add(r);const s=new pn(wr,Ar,e,t);s.layers=this.layers,this.add(s);const o=new pn(wr,Ar,e,t);o.layers=this.layers,this.add(o);const a=new pn(wr,Ar,e,t);a.layers=this.layers,this.add(a);const l=new pn(wr,Ar,e,t);l.layers=this.layers,this.add(l);const c=new pn(wr,Ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class lp extends Yt{constructor(e=[],t=$r,i,r,s,o,a,l,c,d){super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kv extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gs(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Li});s.uniforms.tEquirect.value=t;const o=new si(r,s),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=kn),new Yv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class fs extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zv={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Jv extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nl=new j,Qv=new j,ex=new Ke;class Ji{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=nl.subVectors(i,t).cross(Qv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ex.getNormalMatrix(e),r=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Vs,tx=new ft(.5,.5),mo=new j;class cp{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],u=s[5],f=s[6],p=s[7],v=s[8],g=s[9],m=s[10],h=s[11],w=s[12],y=s[13],b=s[14],C=s[15];if(r[0].setComponents(c-o,p-d,h-v,C-w).normalize(),r[1].setComponents(c+o,p+d,h+v,C+w).normalize(),r[2].setComponents(c+a,p+u,h+g,C+y).normalize(),r[3].setComponents(c-a,p-u,h-g,C-y).normalize(),i)r[4].setComponents(l,f,m,b).normalize(),r[5].setComponents(c-l,p-f,h-m,C-b).normalize();else if(r[4].setComponents(c-l,p-f,h-m,C-b).normalize(),t===zn)r[5].setComponents(c+l,p+f,h+m,C+b).normalize();else if(t===$o)r[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=tx.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(mo.x=r.normal.x>0?e.max.x:e.min.x,mo.y=r.normal.y>0?e.max.y:e.min.y,mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class up extends Zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jo=new j,Yo=new j,Cd=new Tt,cs=new Yc,go=new Vs,il=new j,Pd=new j;class nx extends Ht{constructor(e=new Ln,t=new up){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)jo.fromBufferAttribute(t,r-1),Yo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=jo.distanceTo(Yo);e.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Cd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Cd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const h=d.getX(g),w=d.getX(g+1),y=_o(this,e,cs,l,h,w,g);y&&t.push(y)}if(this.isLineLoop){const g=d.getX(v-1),m=d.getX(p),h=_o(this,e,cs,l,g,m,v-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const h=_o(this,e,cs,l,g,g+1,g);h&&t.push(h)}if(this.isLineLoop){const g=_o(this,e,cs,l,v-1,p,v-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _o(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(jo.fromBufferAttribute(a,r),Yo.fromBufferAttribute(a,s),t.distanceSqToSegment(jo,Yo,il,Pd)>i)return;il.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(il);if(!(c<e.near||c>e.far))return{distance:c,point:Pd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Dd=new j,Ld=new j;class ix extends nx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Dd.fromBufferAttribute(t,r),Ld.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Dd.distanceTo(Ld);e.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dp extends Zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Id=new Tt,mc=new Yc,vo=new Vs,xo=new j;class rx extends Ht{constructor(e=new Ln,t=new dp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;Id.copy(r).invert(),mc.copy(e.ray).applyMatrix4(Id);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,g=p;v<g;v++){const m=c.getX(v);xo.fromBufferAttribute(u,m),Ud(xo,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,g=p;v<g;v++)xo.fromBufferAttribute(u,v),Ud(xo,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ud(n,e,t,i,r,s,o){const a=mc.distanceSqToPoint(n);if(a<t){const l=new j;mc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class sx extends Yt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fp extends Yt{constructor(e,t,i=ur,r,s,o,a=An,l=An,c,d=Us,u=1){if(d!==Us&&d!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class da extends Ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,u=e/a,f=t/l,p=[],v=[],g=[],m=[];for(let h=0;h<d;h++){const w=h*f-o;for(let y=0;y<c;y++){const b=y*u-s;v.push(b,-w,0),g.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const y=w+c*h,b=w+c*(h+1),C=w+1+c*(h+1),L=w+1+c*h;p.push(y,b,L),p.push(b,C,L)}this.setIndex(p),this.setAttribute("position",new Rn(v,3)),this.setAttribute("normal",new Rn(g,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}class ox extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lx extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cx extends ap{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ux extends lx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dx extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Nd(n,e,t,i){const r=fx(i);switch(t){case qh:return n*e;case Yh:return n*e/r.components*r.byteLength;case Xc:return n*e/r.components*r.byteLength;case Kh:return n*e*2/r.components*r.byteLength;case $c:return n*e*2/r.components*r.byteLength;case jh:return n*e*3/r.components*r.byteLength;case En:return n*e*4/r.components*r.byteLength;case qc:return n*e*4/r.components*r.byteLength;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(n,8)*Math.max(e,8)/2;case $l:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Io:case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zh:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fx(n){switch(n){case fi:case Wh:return{byteLength:1,components:1};case Ls:case Xh:case Bs:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case ur:case Vc:case ri:return{byteLength:4,components:1};case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);function hp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hx(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<u.length;p++){const v=u[f],g=u[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,u[f]=g)}u.length=f+1;for(let p=0,v=u.length;p<v;p++){const g=u[p];n.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
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
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bx=`#ifdef USE_AOMAP
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
#endif`,yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
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
#endif`,Mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kx=`vec3 transformedNormal = objectNormal;
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
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$x=`#ifdef USE_ENVMAP
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
	
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tb=`#ifdef USE_GRADIENTMAP
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
}`,nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ib=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sb=`uniform bool receiveShadow;
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
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,db=`PhysicalMaterial material;
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
#endif`,fb=`struct PhysicalMaterial {
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
}`,hb=`
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
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
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_b=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mb=`#if defined( USE_POINTS_UV )
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
#endif`,Eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
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
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fb=`#ifdef USE_NORMALMAP
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
#endif`,Ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
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
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jb=`float getShadowMask() {
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
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,py=`uniform sampler2D t2D;
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`#include <common>
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
}`,by=`#if DEPTH_PACKING == 3200
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
}`,yy=`#define DISTANCE
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
}`,Sy=`#define DISTANCE
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
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ay=`#include <common>
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#define LAMBERT
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
}`,Py=`#define LAMBERT
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
}`,Dy=`#define MATCAP
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
}`,Ly=`#define MATCAP
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
}`,Iy=`#define NORMAL
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
}`,Uy=`#define NORMAL
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
}`,Ny=`#define PHONG
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
}`,Fy=`#define PHONG
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
}`,Oy=`#define STANDARD
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
}`,By=`#define STANDARD
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
}`,ky=`#define TOON
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
}`,zy=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Wy=`uniform vec3 color;
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
}`,Xy=`uniform float rotation;
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
}`,$y=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:_x,alphatest_fragment:vx,alphatest_pars_fragment:xx,aomap_fragment:bx,aomap_pars_fragment:yx,batching_pars_vertex:Sx,batching_vertex:Mx,begin_vertex:Ex,beginnormal_vertex:Tx,bsdfs:wx,iridescence_fragment:Ax,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Cx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Lx,color_fragment:Ix,color_pars_fragment:Ux,color_pars_vertex:Nx,color_vertex:Fx,common:Ox,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:kx,displacementmap_pars_vertex:zx,displacementmap_vertex:Hx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Gx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:$x,envmap_common_pars_fragment:qx,envmap_pars_fragment:jx,envmap_pars_vertex:Yx,envmap_physical_pars_fragment:ob,envmap_vertex:Kx,fog_vertex:Zx,fog_pars_vertex:Jx,fog_fragment:Qx,fog_pars_fragment:eb,gradientmap_pars_fragment:tb,lightmap_pars_fragment:nb,lights_lambert_fragment:ib,lights_lambert_pars_fragment:rb,lights_pars_begin:sb,lights_toon_fragment:ab,lights_toon_pars_fragment:lb,lights_phong_fragment:cb,lights_phong_pars_fragment:ub,lights_physical_fragment:db,lights_physical_pars_fragment:fb,lights_fragment_begin:hb,lights_fragment_maps:pb,lights_fragment_end:mb,logdepthbuf_fragment:gb,logdepthbuf_pars_fragment:_b,logdepthbuf_pars_vertex:vb,logdepthbuf_vertex:xb,map_fragment:bb,map_pars_fragment:yb,map_particle_fragment:Sb,map_particle_pars_fragment:Mb,metalnessmap_fragment:Eb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:wb,morphcolor_vertex:Ab,morphnormal_vertex:Rb,morphtarget_pars_vertex:Cb,morphtarget_vertex:Pb,normal_fragment_begin:Db,normal_fragment_maps:Lb,normal_pars_fragment:Ib,normal_pars_vertex:Ub,normal_vertex:Nb,normalmap_pars_fragment:Fb,clearcoat_normal_fragment_begin:Ob,clearcoat_normal_fragment_maps:Bb,clearcoat_pars_fragment:kb,iridescence_pars_fragment:zb,opaque_fragment:Hb,packing:Vb,premultiplied_alpha_fragment:Gb,project_vertex:Wb,dithering_fragment:Xb,dithering_pars_fragment:$b,roughnessmap_fragment:qb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:Yb,shadowmap_pars_vertex:Kb,shadowmap_vertex:Zb,shadowmask_pars_fragment:Jb,skinbase_vertex:Qb,skinning_pars_vertex:ey,skinning_vertex:ty,skinnormal_vertex:ny,specularmap_fragment:iy,specularmap_pars_fragment:ry,tonemapping_fragment:sy,tonemapping_pars_fragment:oy,transmission_fragment:ay,transmission_pars_fragment:ly,uv_pars_fragment:cy,uv_pars_vertex:uy,uv_vertex:dy,worldpos_vertex:fy,background_vert:hy,background_frag:py,backgroundCube_vert:my,backgroundCube_frag:gy,cube_vert:_y,cube_frag:vy,depth_vert:xy,depth_frag:by,distanceRGBA_vert:yy,distanceRGBA_frag:Sy,equirect_vert:My,equirect_frag:Ey,linedashed_vert:Ty,linedashed_frag:wy,meshbasic_vert:Ay,meshbasic_frag:Ry,meshlambert_vert:Cy,meshlambert_frag:Py,meshmatcap_vert:Dy,meshmatcap_frag:Ly,meshnormal_vert:Iy,meshnormal_frag:Uy,meshphong_vert:Ny,meshphong_frag:Fy,meshphysical_vert:Oy,meshphysical_frag:By,meshtoon_vert:ky,meshtoon_frag:zy,points_vert:Hy,points_frag:Vy,shadow_vert:Gy,shadow_frag:Wy,sprite_vert:Xy,sprite_frag:$y},Me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Bn={basic:{uniforms:Wt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Wt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Wt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Wt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Wt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Wt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Wt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Wt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Wt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Wt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Wt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Wt([Me.common,Me.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Wt([Me.lights,Me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Bn.physical={uniforms:Wt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const bo={r:0,b:0,g:0},Yi=new hi,qy=new Tt;function jy(n,e,t,i,r,s,o){const a=new rt(0);let l=s===!0?0:1,c,d,u=null,f=0,p=null;function v(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function g(y){let b=!1;const C=v(y);C===null?h(a,l):C&&C.isColor&&(h(C,1),b=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,b){const C=v(b);C&&(C.isCubeTexture||C.mapping===ua)?(d===void 0&&(d=new si(new Gs(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Yr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Yi.copy(b.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(Yi)),d.material.toneMapped=nt.getTransfer(C.colorSpace)!==ut,(u!==C||f!==C.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=C,f=C.version,p=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new si(new da(2,2),new Fi({name:"BackgroundMaterial",uniforms:Yr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=nt.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,b){y.getRGB(bo,op(n)),i.buffers.color.setClear(bo.r,bo.g,bo.b,b,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),l=b,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:g,addToRenderList:m,dispose:w}}function Yy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(T,R,k,B,X){let re=!1;const Z=u(B,k,R);s!==Z&&(s=Z,c(s.object)),re=p(T,B,k,X),re&&v(T,B,k,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,b(T,R,k,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function d(T){return n.deleteVertexArray(T)}function u(T,R,k){const B=k.wireframe===!0;let X=i[T.id];X===void 0&&(X={},i[T.id]=X);let re=X[R.id];re===void 0&&(re={},X[R.id]=re);let Z=re[B];return Z===void 0&&(Z=f(l()),re[B]=Z),Z}function f(T){const R=[],k=[],B=[];for(let X=0;X<t;X++)R[X]=0,k[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:B,object:T,attributes:{},index:null}}function p(T,R,k,B){const X=s.attributes,re=R.attributes;let Z=0;const ee=k.getAttributes();for(const W in ee)if(ee[W].location>=0){const be=X[W];let Ce=re[W];if(Ce===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(Ce=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(Ce=T.instanceColor)),be===void 0||be.attribute!==Ce||Ce&&be.data!==Ce.data)return!0;Z++}return s.attributesNum!==Z||s.index!==B}function v(T,R,k,B){const X={},re=R.attributes;let Z=0;const ee=k.getAttributes();for(const W in ee)if(ee[W].location>=0){let be=re[W];be===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(be=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(be=T.instanceColor));const Ce={};Ce.attribute=be,be&&be.data&&(Ce.data=be.data),X[W]=Ce,Z++}s.attributes=X,s.attributesNum=Z,s.index=B}function g(){const T=s.newAttributes;for(let R=0,k=T.length;R<k;R++)T[R]=0}function m(T){h(T,0)}function h(T,R){const k=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;k[T]=1,B[T]===0&&(n.enableVertexAttribArray(T),B[T]=1),X[T]!==R&&(n.vertexAttribDivisor(T,R),X[T]=R)}function w(){const T=s.newAttributes,R=s.enabledAttributes;for(let k=0,B=R.length;k<B;k++)R[k]!==T[k]&&(n.disableVertexAttribArray(k),R[k]=0)}function y(T,R,k,B,X,re,Z){Z===!0?n.vertexAttribIPointer(T,R,k,X,re):n.vertexAttribPointer(T,R,k,B,X,re)}function b(T,R,k,B){g();const X=B.attributes,re=k.getAttributes(),Z=R.defaultAttributeValues;for(const ee in re){const W=re[ee];if(W.location>=0){let xe=X[ee];if(xe===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(xe=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(xe=T.instanceColor)),xe!==void 0){const be=xe.normalized,Ce=xe.itemSize,ze=e.get(xe);if(ze===void 0)continue;const ke=ze.buffer,Ge=ze.type,te=ze.bytesPerElement,me=Ge===n.INT||Ge===n.UNSIGNED_INT||xe.gpuType===Vc;if(xe.isInterleavedBufferAttribute){const U=xe.data,oe=U.stride,ne=xe.offset;if(U.isInstancedInterleavedBuffer){for(let de=0;de<W.locationSize;de++)h(W.location+de,U.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let de=0;de<W.locationSize;de++)y(W.location+de,Ce/W.locationSize,Ge,be,oe*te,(ne+Ce/W.locationSize*de)*te,me)}else{if(xe.isInstancedBufferAttribute){for(let U=0;U<W.locationSize;U++)h(W.location+U,xe.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let U=0;U<W.locationSize;U++)m(W.location+U);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let U=0;U<W.locationSize;U++)y(W.location+U,Ce/W.locationSize,Ge,be,Ce*te,Ce/W.locationSize*U*te,me)}}else if(Z!==void 0){const be=Z[ee];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(W.location,be);break;case 3:n.vertexAttrib3fv(W.location,be);break;case 4:n.vertexAttrib4fv(W.location,be);break;default:n.vertexAttrib1fv(W.location,be)}}}}w()}function C(){O();for(const T in i){const R=i[T];for(const k in R){const B=R[k];for(const X in B)d(B[X].object),delete B[X];delete R[k]}delete i[T]}}function L(T){if(i[T.id]===void 0)return;const R=i[T.id];for(const k in R){const B=R[k];for(const X in B)d(B[X].object),delete B[X];delete R[k]}delete i[T.id]}function P(T){for(const R in i){const k=i[R];if(k[T.id]===void 0)continue;const B=k[T.id];for(const X in B)d(B[X].object),delete B[X];delete k[T.id]}}function O(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:w}}function Ky(n,e,t){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=d[v];t.update(p,i,1)}function l(c,d,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],d[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,u);let v=0;for(let g=0;g<u;g++)v+=d[g]*f[g];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==En&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==fi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ri&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:C,maxSamples:L}}function Jy(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ji,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||r;return r=f,i=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const w=s?0:i,y=w*4;let b=h.clippingState||null;l.value=b,b=d(v,f,y,p);for(let C=0;C!==y;++C)b[C]=t[C];h.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,p,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const h=p+g*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,b=p;y!==g;++y,b+=4)o.copy(u[y]).applyMatrix4(w,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Qy(n){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=$r:a===kl&&(o.mapping=qr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bl||a===kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Lr=4,Fd=[.125,.215,.35,.446,.526,.582],nr=20,rl=new cx,Od=new rt;let sl=null,ol=0,al=0,ll=!1;const Qi=(1+Math.sqrt(5))/2,Rr=1/Qi,Bd=[new j(-Qi,Rr,0),new j(Qi,Rr,0),new j(-Rr,0,Qi),new j(Rr,0,Qi),new j(0,Qi,-Rr),new j(0,Qi,Rr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],eS=new j;class kd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=eS}=s;sl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,ol,al),this._renderer.xr.enabled=ll,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Bs,format:En,colorSpace:jr,depthBuffer:!1},r=zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tS(s)),this._blurMaterial=nS(s,e,t)}return r}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,rl)}_sceneToCubeUV(e,t,i,r,s){const l=new pn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Od),u.toneMapping=Ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const g=new ip({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new si(new Gs,g);let h=!1;const w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,h=!0):(g.color.copy(Od),h=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[y],s.y,s.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[y]));const C=this._cubeSize;yo(r,b*C,y>2?C:0,C,C),u.setRenderTarget(r),h&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$r||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;yo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,rl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bd[(r-s-1)%Bd.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new si(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*nr-1),g=s/v,m=isFinite(s)?1+Math.floor(d*g):nr;m>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);const h=[];let w=0;for(let P=0;P<nr;++P){const O=P/g,S=Math.exp(-O*O/2);h.push(S),P===0?w+=S:P<m&&(w+=2*S)}for(let P=0;P<h.length;P++)h[P]=h[P]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;const b=this._sizeLods[r],C=3*b*(r>y-Lr?r-y+Lr:0),L=4*(this._cubeSize-b);yo(t,C,L,3*b,2*b),l.setRenderTarget(t),l.render(u,rl)}}function tS(n){const e=[],t=[],i=[];let r=n;const s=n-Lr+1+Fd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Lr?l=Fd[o-n+Lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,v=6,g=3,m=2,h=1,w=new Float32Array(g*v*p),y=new Float32Array(m*v*p),b=new Float32Array(h*v*p);for(let L=0;L<p;L++){const P=L%3*2/3-1,O=L>2?0:-1,S=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];w.set(S,g*v*L),y.set(f,m*v*L);const T=[L,L,L,L,L,L];b.set(T,h*v*L)}const C=new Ln;C.setAttribute("position",new _n(w,g)),C.setAttribute("uv",new _n(y,m)),C.setAttribute("faceIndex",new _n(b,h)),e.push(C),r>Lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zd(n,e,t){const i=new dr(n,e,t);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function nS(n,e,t){const i=new Float32Array(nr),r=new j(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

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
	`}function iS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bl||l===kl,d=l===$r||l===qr;if(c||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new kd(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new kd(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&kr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sS(n,e,t,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,v=u.attributes.position;let g=0;if(p!==null){const w=p.array;g=p.version;for(let y=0,b=w.length;y<b;y+=3){const C=w[y+0],L=w[y+1],P=w[y+2];f.push(C,L,L,P,P,C)}}else if(v!==void 0){const w=v.array;g=v.version;for(let y=0,b=w.length/3-1;y<b;y+=3){const C=y+0,L=y+1,P=y+2;f.push(C,L,L,P,P,C)}}else return;const m=new(Qh(f)?sp:rp)(f,1);m.version=g;const h=s.get(u);h&&e.remove(h),s.set(u,m)}function d(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function oS(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,f*o,v),t.update(p,i,v))}function d(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];t.update(m,i,1)}function u(f,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,v);let h=0;for(let w=0;w<v;w++)h+=p[w]*g[w];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function aS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lS(n,e,t){const i=new WeakMap,r=new Et;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let T=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;v===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let C=a.attributes.position.count*b,L=1;C>e.maxTextureSize&&(L=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*L*4*u),O=new ep(P,C,L,u);O.type=ri,O.needsUpdate=!0;const S=b*4;for(let R=0;R<u;R++){const k=h[R],B=w[R],X=y[R],re=C*L*4*R;for(let Z=0;Z<k.count;Z++){const ee=Z*S;v===!0&&(r.fromBufferAttribute(k,Z),P[re+ee+0]=r.x,P[re+ee+1]=r.y,P[re+ee+2]=r.z,P[re+ee+3]=0),g===!0&&(r.fromBufferAttribute(B,Z),P[re+ee+4]=r.x,P[re+ee+5]=r.y,P[re+ee+6]=r.z,P[re+ee+7]=0),m===!0&&(r.fromBufferAttribute(X,Z),P[re+ee+8]=r.x,P[re+ee+9]=r.y,P[re+ee+10]=r.z,P[re+ee+11]=X.itemSize===4?r.w:1)}}f={count:u,texture:O,size:new ft(C,L)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function cS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const pp=new Yt,Gd=new fp(1,1),mp=new ep,gp=new Iv,_p=new lp,Wd=[],Xd=[],$d=new Float32Array(16),qd=new Float32Array(9),jd=new Float32Array(4);function Jr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wd[r];if(s===void 0&&(s=new Float32Array(r),Wd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fa(n,e){let t=Xd[e];t===void 0&&(t=new Int32Array(e),Xd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function pS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;jd.set(i),n.uniformMatrix2fv(this.addr,!1,jd),Pt(t,i)}}function mS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;qd.set(i),n.uniformMatrix3fv(this.addr,!1,qd),Pt(t,i)}}function gS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;$d.set(i),n.uniformMatrix4fv(this.addr,!1,$d),Pt(t,i)}}function _S(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function bS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function yS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function MS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function TS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gd.compareFunction=Jh,s=Gd):s=pp,t.setTexture2D(e||s,r)}function wS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||gp,r)}function AS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_p,r)}function RS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mp,r)}function CS(n){switch(n){case 5126:return uS;case 35664:return dS;case 35665:return fS;case 35666:return hS;case 35674:return pS;case 35675:return mS;case 35676:return gS;case 5124:case 35670:return _S;case 35667:case 35671:return vS;case 35668:case 35672:return xS;case 35669:case 35673:return bS;case 5125:return yS;case 36294:return SS;case 36295:return MS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return RS}}function PS(n,e){n.uniform1fv(this.addr,e)}function DS(n,e){const t=Jr(e,this.size,2);n.uniform2fv(this.addr,t)}function LS(n,e){const t=Jr(e,this.size,3);n.uniform3fv(this.addr,t)}function IS(n,e){const t=Jr(e,this.size,4);n.uniform4fv(this.addr,t)}function US(n,e){const t=Jr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NS(n,e){const t=Jr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function FS(n,e){const t=Jr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function OS(n,e){n.uniform1iv(this.addr,e)}function BS(n,e){n.uniform2iv(this.addr,e)}function kS(n,e){n.uniform3iv(this.addr,e)}function zS(n,e){n.uniform4iv(this.addr,e)}function HS(n,e){n.uniform1uiv(this.addr,e)}function VS(n,e){n.uniform2uiv(this.addr,e)}function GS(n,e){n.uniform3uiv(this.addr,e)}function WS(n,e){n.uniform4uiv(this.addr,e)}function XS(n,e,t){const i=this.cache,r=e.length,s=fa(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||pp,s[o])}function $S(n,e,t){const i=this.cache,r=e.length,s=fa(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||gp,s[o])}function qS(n,e,t){const i=this.cache,r=e.length,s=fa(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_p,s[o])}function jS(n,e,t){const i=this.cache,r=e.length,s=fa(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mp,s[o])}function YS(n){switch(n){case 5126:return PS;case 35664:return DS;case 35665:return LS;case 35666:return IS;case 35674:return US;case 35675:return NS;case 35676:return FS;case 5124:case 35670:return OS;case 35667:case 35671:return BS;case 35668:case 35672:return kS;case 35669:case 35673:return zS;case 5125:return HS;case 36294:return VS;case 36295:return GS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return jS}}class KS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CS(t.type)}}class ZS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YS(t.type)}}class JS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Yd(n,e){n.seq.push(e),n.map[e.id]=e}function QS(n,e,t){const i=n.name,r=i.length;for(cl.lastIndex=0;;){const s=cl.exec(i),o=cl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yd(t,c===void 0?new KS(a,n,e):new ZS(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new JS(a),Yd(t,u)),t=u}}}class Uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);QS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Kd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const eM=37297;let tM=0;function nM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Zd=new Ke;function iM(n){nt._getMatrix(Zd,nt.workingColorSpace,n);const e=`mat3( ${Zd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Xo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+nM(n.getShaderSource(e),a)}else return s}function rM(n,e){const t=iM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sM(n,e){let t;switch(e){case ov:t="Linear";break;case av:t="Reinhard";break;case lv:t="Cineon";break;case cv:t="ACESFilmic";break;case dv:t="AgX";break;case fv:t="Neutral";break;case uv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const So=new j;function oM(){nt.getLuminanceCoefficients(So);const n=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function lM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hs(n){return n!==""}function Qd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uM=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(uM,fM)}const dM=new Map;function fM(n,e){let t=Ze[e];if(t===void 0){const i=dM.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const hM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(n){return n.replace(hM,pM)}function pM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function mM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function gM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $r:case qr:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _M(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function vM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case rv:e="ENVMAP_BLENDING_MIX";break;case sv:e="ENVMAP_BLENDING_ADD";break}return e}function xM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mM(t),c=gM(t),d=_M(t),u=vM(t),f=xM(t),p=aM(t),v=lM(s),g=r.createProgram();let m,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(hs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(hs).join(`
`),h.length>0&&(h+=`
`)):(m=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),h=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ii?sM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,rM("linearToOutputTexel",t.outputColorSpace),oM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),o=gc(o),o=Qd(o,t),o=ef(o,t),a=gc(a),a=Qd(a,t),a=ef(a,t),o=tf(o),a=tf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=w+m+o,b=w+h+a,C=Kd(r,r.VERTEX_SHADER,y),L=Kd(r,r.FRAGMENT_SHADER,b);r.attachShader(g,C),r.attachShader(g,L),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(R){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(L)||"",re=k.trim(),Z=B.trim(),ee=X.trim();let W=!0,xe=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,L);else{const be=Jd(r,C,"vertex"),Ce=Jd(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+re+`
`+be+`
`+Ce)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(Z===""||ee==="")&&(xe=!1);xe&&(R.diagnostics={runnable:W,programLog:re,vertexShader:{log:Z,prefix:m},fragmentShader:{log:ee,prefix:h}})}r.deleteShader(C),r.deleteShader(L),O=new Uo(r,g),S=cM(r,g)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(g,eM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=L,this}let yM=0;class SM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MM(e),t.set(e,i)),i}}class MM{constructor(e){this.id=yM++,this.code=e,this.usedTimes=0}}function EM(n,e,t,i,r,s,o){const a=new tp,l=new SM,c=new Set,d=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,T,R,k,B){const X=k.fog,re=B.geometry,Z=S.isMeshStandardMaterial?k.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),W=ee&&ee.mapping===ua?ee.image.height:null,xe=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const be=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ce=be!==void 0?be.length:0;let ze=0;re.morphAttributes.position!==void 0&&(ze=1),re.morphAttributes.normal!==void 0&&(ze=2),re.morphAttributes.color!==void 0&&(ze=3);let ke,Ge,te,me;if(xe){const ot=Bn[xe];ke=ot.vertexShader,Ge=ot.fragmentShader}else ke=S.vertexShader,Ge=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const U=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),ne=B.isInstancedMesh===!0,de=B.isBatchedMesh===!0,Be=!!S.map,A=!!S.matcap,_=!!ee,N=!!S.aoMap,G=!!S.lightMap,Q=!!S.bumpMap,V=!!S.normalMap,fe=!!S.displacementMap,K=!!S.emissiveMap,se=!!S.metalnessMap,ae=!!S.roughnessMap,Te=S.anisotropy>0,M=S.clearcoat>0,x=S.dispersion>0,I=S.iridescence>0,$=S.sheen>0,ie=S.transmission>0,q=Te&&!!S.anisotropyMap,Re=M&&!!S.clearcoatMap,he=M&&!!S.clearcoatNormalMap,Pe=M&&!!S.clearcoatRoughnessMap,De=I&&!!S.iridescenceMap,pe=I&&!!S.iridescenceThicknessMap,Ee=$&&!!S.sheenColorMap,Ne=$&&!!S.sheenRoughnessMap,Le=!!S.specularMap,Se=!!S.specularColorMap,qe=!!S.specularIntensityMap,F=ie&&!!S.transmissionMap,ve=ie&&!!S.thicknessMap,ye=!!S.gradientMap,Ue=!!S.alphaMap,ge=S.alphaTest>0,ce=!!S.alphaHash,Oe=!!S.extensions;let Ye=Ii;S.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const mt={shaderID:xe,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:Ge,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:de,batchingColor:de&&B._colorsTexture!==null,instancing:ne,instancingColor:ne&&B.instanceColor!==null,instancingMorph:ne&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:jr,alphaToCoverage:!!S.alphaToCoverage,map:Be,matcap:A,envMap:_,envMapMode:_&&ee.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:G,bumpMap:Q,normalMap:V,displacementMap:f&&fe,emissiveMap:K,normalMapObjectSpace:V&&S.normalMapType===_v,normalMapTangentSpace:V&&S.normalMapType===gv,metalnessMap:se,roughnessMap:ae,anisotropy:Te,anisotropyMap:q,clearcoat:M,clearcoatMap:Re,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:x,iridescence:I,iridescenceMap:De,iridescenceThicknessMap:pe,sheen:$,sheenColorMap:Ee,sheenRoughnessMap:Ne,specularMap:Le,specularColorMap:Se,specularIntensityMap:qe,transmission:ie,transmissionMap:F,thicknessMap:ve,gradientMap:ye,opaque:S.transparent===!1&&S.blending===Br&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ge,alphaHash:ce,combine:S.combine,mapUv:Be&&g(S.map.channel),aoMapUv:N&&g(S.aoMap.channel),lightMapUv:G&&g(S.lightMap.channel),bumpMapUv:Q&&g(S.bumpMap.channel),normalMapUv:V&&g(S.normalMap.channel),displacementMapUv:fe&&g(S.displacementMap.channel),emissiveMapUv:K&&g(S.emissiveMap.channel),metalnessMapUv:se&&g(S.metalnessMap.channel),roughnessMapUv:ae&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:Re&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(S.sheenRoughnessMap.channel),specularMapUv:Le&&g(S.specularMap.channel),specularColorMapUv:Se&&g(S.specularColorMap.channel),specularIntensityMapUv:qe&&g(S.specularIntensityMap.channel),transmissionMapUv:F&&g(S.transmissionMap.channel),thicknessMapUv:ve&&g(S.thicknessMap.channel),alphaMapUv:Ue&&g(S.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(V||Te),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!re.attributes.uv&&(Be||Ue),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:oe,skinning:B.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Be&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:K&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ii,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function h(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)T.push(R),T.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(w(T,S),y(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function w(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function y(S,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){const T=v[S.type];let R;if(T){const k=Bn[T];R=$v.clone(k.uniforms)}else R=S.uniforms;return R}function C(S,T){let R;for(let k=0,B=d.length;k<B;k++){const X=d[k];if(X.cacheKey===T){R=X,++R.usedTimes;break}}return R===void 0&&(R=new bM(n,T,S,s),d.push(R)),R}function L(S){if(--S.usedTimes===0){const T=d.indexOf(S);d[T]=d[d.length-1],d.pop(),S.destroy()}}function P(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:C,releaseProgram:L,releaseShaderCache:P,programs:d,dispose:O}}function TM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function wM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,f,p,v,g,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=u.renderOrder,h.z=g,h.group=m),e++,h}function a(u,f,p,v,g,m){const h=o(u,f,p,v,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(u,f,p,v,g,m){const h=o(u,f,p,v,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||wM),i.length>1&&i.sort(f||rf),r.length>1&&r.sort(f||rf)}function d(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function AM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new sf,n.set(i,[o])):r>=s.length?(o=new sf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function RM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new rt};break;case"SpotLight":t={position:new j,direction:new j,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function CM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PM=0;function DM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LM(n){const e=new RM,t=CM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Tt,o=new Tt;function a(c){let d=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,g=0,m=0,h=0,w=0,y=0,b=0,C=0,L=0,P=0;c.sort(DM);for(let S=0,T=c.length;S<T;S++){const R=c[S],k=R.color,B=R.intensity,X=R.distance,re=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=k.r*B,u+=k.g*B,f+=k.b*B;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(R.sh.coefficients[Z],B);P++}else if(R.isDirectionalLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ee=R.shadow,W=t.get(R);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=R.shadow.matrix,w++}i.directional[p]=Z,p++}else if(R.isSpotLight){const Z=e.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(k).multiplyScalar(B),Z.distance=X,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,i.spot[g]=Z;const ee=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,ee.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[g]=ee.matrix,R.castShadow){const W=t.get(R);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=re,b++}g++}else if(R.isRectAreaLight){const Z=e.get(R);Z.color.copy(k).multiplyScalar(B),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=Z,m++}else if(R.isPointLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){const ee=R.shadow,W=t.get(R);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=re,i.pointShadowMatrix[v]=R.shadow.matrix,y++}i.point[v]=Z,v++}else if(R.isHemisphereLight){const Z=e.get(R);Z.skyColor.copy(R.color).multiplyScalar(B),Z.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[h]=Z,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==p||O.pointLength!==v||O.spotLength!==g||O.rectAreaLength!==m||O.hemiLength!==h||O.numDirectionalShadows!==w||O.numPointShadows!==y||O.numSpotShadows!==b||O.numSpotMaps!==C||O.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,O.directionalLength=p,O.pointLength=v,O.spotLength=g,O.rectAreaLength=m,O.hemiLength=h,O.numDirectionalShadows=w,O.numPointShadows=y,O.numSpotShadows=b,O.numSpotMaps=C,O.numLightProbes=P,i.version=PM++)}function l(c,d){let u=0,f=0,p=0,v=0,g=0;const m=d.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const y=c[h];if(y.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),u++}else if(y.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function of(n){const e=new LM(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function IM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new of(n),e.set(r,[a])):s>=o.length?(a=new of(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NM=`uniform sampler2D shadow_pass;
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
}`;function FM(n,e,t){let i=new cp;const r=new ft,s=new ft,o=new Et,a=new ox({depthPacking:mv}),l=new ax,c={},d=t.maxTextureSize,u={[Ni]:tn,[tn]:Ni,[ii]:ii},f=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:UM,fragmentShader:NM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ln;v.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new si(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let h=this.type;this.render=function(L,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const S=n.getRenderTarget(),T=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Li),k.buffers.depth.getReversed()?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=h!==Jn&&this.type===Jn,X=h===Jn&&this.type!==Jn;for(let re=0,Z=L.length;re<Z;re++){const ee=L[re],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const xe=W.getFrameExtents();if(r.multiply(xe),s.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/xe.x),r.x=s.x*xe.x,W.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/xe.y),r.y=s.y*xe.y,W.mapSize.y=s.y)),W.map===null||B===!0||X===!0){const Ce=this.type!==Jn?{minFilter:An,magFilter:An}:{};W.map!==null&&W.map.dispose(),W.map=new dr(r.x,r.y,Ce),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const be=W.getViewportCount();for(let Ce=0;Ce<be;Ce++){const ze=W.getViewport(Ce);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),k.viewport(o),W.updateMatrices(ee,Ce),i=W.getFrustum(),b(P,O,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===Jn&&w(W,O),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(S,T,R)};function w(L,P){const O=e.update(g);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new dr(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,O,f,g,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,O,p,g,null)}function y(L,P,O,S){let T=null;const R=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)T=R;else if(T=O.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const k=T.uuid,B=P.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let re=X[B];re===void 0&&(re=T.clone(),X[B]=re,P.addEventListener("dispose",C)),T=re}if(T.visible=P.visible,T.wireframe=P.wireframe,S===Jn?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:u[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=n.properties.get(T);k.light=O}return T}function b(L,P,O,S,T){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===Jn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const B=e.update(L),X=L.material;if(Array.isArray(X)){const re=B.groups;for(let Z=0,ee=re.length;Z<ee;Z++){const W=re[Z],xe=X[W.materialIndex];if(xe&&xe.visible){const be=y(L,xe,S,T);L.onBeforeShadow(n,L,P,O,B,be,W),n.renderBufferDirect(O,null,B,be,L,W),L.onAfterShadow(n,L,P,O,B,be,W)}}}else if(X.visible){const re=y(L,X,S,T);L.onBeforeShadow(n,L,P,O,B,re,null),n.renderBufferDirect(O,null,B,re,L,null),L.onAfterShadow(n,L,P,O,B,re,null)}}const k=L.children;for(let B=0,X=k.length;B<X;B++)b(k[B],P,O,S,T)}function C(L){L.target.removeEventListener("dispose",C);for(const O in c){const S=c[O],T=L.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const OM={[Dl]:Ll,[Il]:Fl,[Ul]:Ol,[Xr]:Nl,[Ll]:Dl,[Fl]:Il,[Ol]:Ul,[Nl]:Xr};function BM(n,e){function t(){let F=!1;const ve=new Et;let ye=null;const Ue=new Et(0,0,0,0);return{setMask:function(ge){ye!==ge&&!F&&(n.colorMask(ge,ge,ge,ge),ye=ge)},setLocked:function(ge){F=ge},setClear:function(ge,ce,Oe,Ye,mt){mt===!0&&(ge*=Ye,ce*=Ye,Oe*=Ye),ve.set(ge,ce,Oe,Ye),Ue.equals(ve)===!1&&(n.clearColor(ge,ce,Oe,Ye),Ue.copy(ve))},reset:function(){F=!1,ye=null,Ue.set(-1,0,0,0)}}}function i(){let F=!1,ve=!1,ye=null,Ue=null,ge=null;return{setReversed:function(ce){if(ve!==ce){const Oe=e.get("EXT_clip_control");ce?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ve=ce;const Ye=ge;ge=null,this.setClear(Ye)}},getReversed:function(){return ve},setTest:function(ce){ce?U(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(ce){ye!==ce&&!F&&(n.depthMask(ce),ye=ce)},setFunc:function(ce){if(ve&&(ce=OM[ce]),Ue!==ce){switch(ce){case Dl:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case Xr:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=ce}},setLocked:function(ce){F=ce},setClear:function(ce){ge!==ce&&(ve&&(ce=1-ce),n.clearDepth(ce),ge=ce)},reset:function(){F=!1,ye=null,Ue=null,ge=null,ve=!1}}}function r(){let F=!1,ve=null,ye=null,Ue=null,ge=null,ce=null,Oe=null,Ye=null,mt=null;return{setTest:function(ot){F||(ot?U(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(ot){ve!==ot&&!F&&(n.stencilMask(ot),ve=ot)},setFunc:function(ot,Gn,In){(ye!==ot||Ue!==Gn||ge!==In)&&(n.stencilFunc(ot,Gn,In),ye=ot,Ue=Gn,ge=In)},setOp:function(ot,Gn,In){(ce!==ot||Oe!==Gn||Ye!==In)&&(n.stencilOp(ot,Gn,In),ce=ot,Oe=Gn,Ye=In)},setLocked:function(ot){F=ot},setClear:function(ot){mt!==ot&&(n.clearStencil(ot),mt=ot)},reset:function(){F=!1,ve=null,ye=null,Ue=null,ge=null,ce=null,Oe=null,Ye=null,mt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,p=[],v=null,g=!1,m=null,h=null,w=null,y=null,b=null,C=null,L=null,P=new rt(0,0,0),O=0,S=!1,T=null,R=null,k=null,B=null,X=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=ee>=2);let xe=null,be={};const Ce=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),ke=new Et().fromArray(Ce),Ge=new Et().fromArray(ze);function te(F,ve,ye,Ue){const ge=new Uint8Array(4),ce=n.createTexture();n.bindTexture(F,ce),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<ye;Oe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ve+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ce}const me={};me[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(Xr),Q(!1),V(od),U(n.CULL_FACE),N(Li);function U(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function oe(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function ne(F,ve){return u[F]!==ve?(n.bindFramebuffer(F,ve),u[F]=ve,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ve),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function de(F,ve){let ye=p,Ue=!1;if(F){ye=f.get(ve),ye===void 0&&(ye=[],f.set(ve,ye));const ge=F.textures;if(ye.length!==ge.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Oe=ge.length;ce<Oe;ce++)ye[ce]=n.COLOR_ATTACHMENT0+ce;ye.length=ge.length,Ue=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(ye)}function Be(F){return v!==F?(n.useProgram(F),v=F,!0):!1}const A={[tr]:n.FUNC_ADD,[H_]:n.FUNC_SUBTRACT,[V_]:n.FUNC_REVERSE_SUBTRACT};A[G_]=n.MIN,A[W_]=n.MAX;const _={[X_]:n.ZERO,[$_]:n.ONE,[q_]:n.SRC_COLOR,[Cl]:n.SRC_ALPHA,[Q_]:n.SRC_ALPHA_SATURATE,[Z_]:n.DST_COLOR,[Y_]:n.DST_ALPHA,[j_]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[J_]:n.ONE_MINUS_DST_COLOR,[K_]:n.ONE_MINUS_DST_ALPHA,[ev]:n.CONSTANT_COLOR,[tv]:n.ONE_MINUS_CONSTANT_COLOR,[nv]:n.CONSTANT_ALPHA,[iv]:n.ONE_MINUS_CONSTANT_ALPHA};function N(F,ve,ye,Ue,ge,ce,Oe,Ye,mt,ot){if(F===Li){g===!0&&(oe(n.BLEND),g=!1);return}if(g===!1&&(U(n.BLEND),g=!0),F!==z_){if(F!==m||ot!==S){if((h!==tr||b!==tr)&&(n.blendEquation(n.FUNC_ADD),h=tr,b=tr),ot)switch(F){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFunc(n.ONE,n.ONE);break;case ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ld:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ad:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ld:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,y=null,C=null,L=null,P.set(0,0,0),O=0,m=F,S=ot}return}ge=ge||ve,ce=ce||ye,Oe=Oe||Ue,(ve!==h||ge!==b)&&(n.blendEquationSeparate(A[ve],A[ge]),h=ve,b=ge),(ye!==w||Ue!==y||ce!==C||Oe!==L)&&(n.blendFuncSeparate(_[ye],_[Ue],_[ce],_[Oe]),w=ye,y=Ue,C=ce,L=Oe),(Ye.equals(P)===!1||mt!==O)&&(n.blendColor(Ye.r,Ye.g,Ye.b,mt),P.copy(Ye),O=mt),m=F,S=!1}function G(F,ve){F.side===ii?oe(n.CULL_FACE):U(n.CULL_FACE);let ye=F.side===tn;ve&&(ye=!ye),Q(ye),F.blending===Br&&F.transparent===!1?N(Li):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ue=F.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),K(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(F){T!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),T=F)}function V(F){F!==O_?(U(n.CULL_FACE),F!==R&&(F===od?n.cullFace(n.BACK):F===B_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),R=F}function fe(F){F!==k&&(Z&&n.lineWidth(F),k=F)}function K(F,ve,ye){F?(U(n.POLYGON_OFFSET_FILL),(B!==ve||X!==ye)&&(n.polygonOffset(ve,ye),B=ve,X=ye)):oe(n.POLYGON_OFFSET_FILL)}function se(F){F?U(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function ae(F){F===void 0&&(F=n.TEXTURE0+re-1),xe!==F&&(n.activeTexture(F),xe=F)}function Te(F,ve,ye){ye===void 0&&(xe===null?ye=n.TEXTURE0+re-1:ye=xe);let Ue=be[ye];Ue===void 0&&(Ue={type:void 0,texture:void 0},be[ye]=Ue),(Ue.type!==F||Ue.texture!==ve)&&(xe!==ye&&(n.activeTexture(ye),xe=ye),n.bindTexture(F,ve||me[F]),Ue.type=F,Ue.texture=ve)}function M(){const F=be[xe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(F){ke.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ke.copy(F))}function Ne(F){Ge.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ge.copy(F))}function Le(F,ve){let ye=c.get(ve);ye===void 0&&(ye=new WeakMap,c.set(ve,ye));let Ue=ye.get(F);Ue===void 0&&(Ue=n.getUniformBlockIndex(ve,F.name),ye.set(F,Ue))}function Se(F,ve){const Ue=c.get(ve).get(F);l.get(ve)!==Ue&&(n.uniformBlockBinding(ve,Ue,F.__bindingPointIndex),l.set(ve,Ue))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},xe=null,be={},u={},f=new WeakMap,p=[],v=null,g=!1,m=null,h=null,w=null,y=null,b=null,C=null,L=null,P=new rt(0,0,0),O=0,S=!1,T=null,R=null,k=null,B=null,X=null,ke.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:U,disable:oe,bindFramebuffer:ne,drawBuffers:de,useProgram:Be,setBlending:N,setMaterial:G,setFlipSided:Q,setCullFace:V,setLineWidth:fe,setPolygonOffset:K,setScissorTest:se,activeTexture:ae,bindTexture:Te,unbindTexture:M,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:De,texImage3D:pe,updateUBOMapping:Le,uniformBlockBinding:Se,texStorage2D:he,texStorage3D:Pe,texSubImage2D:$,texSubImage3D:ie,compressedTexSubImage2D:q,compressedTexSubImage3D:Re,scissor:Ee,viewport:Ne,reset:qe}}function kM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,x){return p?new OffscreenCanvas(M,x):qo("canvas")}function g(M,x,I){let $=1;const ie=Te(M);if((ie.width>I||ie.height>I)&&($=I/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const q=Math.floor($*ie.width),Re=Math.floor($*ie.height);u===void 0&&(u=v(q,Re));const he=x?v(q,Re):u;return he.width=q,he.height=Re,he.getContext("2d").drawImage(M,0,0,q,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+q+"x"+Re+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(M,x,I,$,ie=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let q=x;if(x===n.RED&&(I===n.FLOAT&&(q=n.R32F),I===n.HALF_FLOAT&&(q=n.R16F),I===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.R8UI),I===n.UNSIGNED_SHORT&&(q=n.R16UI),I===n.UNSIGNED_INT&&(q=n.R32UI),I===n.BYTE&&(q=n.R8I),I===n.SHORT&&(q=n.R16I),I===n.INT&&(q=n.R32I)),x===n.RG&&(I===n.FLOAT&&(q=n.RG32F),I===n.HALF_FLOAT&&(q=n.RG16F),I===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.RG8UI),I===n.UNSIGNED_SHORT&&(q=n.RG16UI),I===n.UNSIGNED_INT&&(q=n.RG32UI),I===n.BYTE&&(q=n.RG8I),I===n.SHORT&&(q=n.RG16I),I===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.RGB8UI),I===n.UNSIGNED_SHORT&&(q=n.RGB16UI),I===n.UNSIGNED_INT&&(q=n.RGB32UI),I===n.BYTE&&(q=n.RGB8I),I===n.SHORT&&(q=n.RGB16I),I===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),I===n.UNSIGNED_INT&&(q=n.RGBA32UI),I===n.BYTE&&(q=n.RGBA8I),I===n.SHORT&&(q=n.RGBA16I),I===n.INT&&(q=n.RGBA32I)),x===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),x===n.RGBA){const Re=ie?Xo:nt.getTransfer($);I===n.FLOAT&&(q=n.RGBA32F),I===n.HALF_FLOAT&&(q=n.RGBA16F),I===n.UNSIGNED_BYTE&&(q=Re===ut?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(M,x){let I;return M?x===null||x===ur||x===Is?I=n.DEPTH24_STENCIL8:x===ri?I=n.DEPTH32F_STENCIL8:x===Ls&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ur||x===Is?I=n.DEPTH_COMPONENT24:x===ri?I=n.DEPTH_COMPONENT32F:x===Ls&&(I=n.DEPTH_COMPONENT16),I}function C(M,x){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==An&&M.minFilter!==kn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function L(M){const x=M.target;x.removeEventListener("dispose",L),O(x),x.isVideoTexture&&d.delete(x)}function P(M){const x=M.target;x.removeEventListener("dispose",P),T(x)}function O(M){const x=i.get(M);if(x.__webglInit===void 0)return;const I=M.source,$=f.get(I);if($){const ie=$[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(M),Object.keys($).length===0&&f.delete(I)}i.remove(M)}function S(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const I=M.source,$=f.get(I);delete $[x.__cacheKey],o.memory.textures--}function T(M){const x=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ie=0;ie<x.__webglFramebuffer[$].length;ie++)n.deleteFramebuffer(x.__webglFramebuffer[$][ie]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=M.textures;for(let $=0,ie=I.length;$<ie;$++){const q=i.get(I[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(I[$])}i.remove(M)}let R=0;function k(){R=0}function B(){const M=R;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),R+=1,M}function X(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function re(M,x){const I=i.get(M);if(M.isVideoTexture&&se(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&I.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(I,M,x);return}}else M.isExternalTexture&&(I.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function Z(M,x){const I=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){me(I,M,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function ee(M,x){const I=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){me(I,M,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function W(M,x){const I=i.get(M);if(M.version>0&&I.__version!==M.version){U(I,M,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const xe={[zl]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},be={[An]:n.NEAREST,[hv]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[sr]:n.LINEAR_MIPMAP_LINEAR},Ce={[vv]:n.NEVER,[Ev]:n.ALWAYS,[xv]:n.LESS,[Jh]:n.LEQUAL,[bv]:n.EQUAL,[Mv]:n.GEQUAL,[yv]:n.GREATER,[Sv]:n.NOTEQUAL};function ze(M,x){if(x.type===ri&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===kn||x.magFilter===La||x.magFilter===Zs||x.magFilter===sr||x.minFilter===kn||x.minFilter===La||x.minFilter===Zs||x.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,xe[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,xe[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,xe[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,be[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,be[x.minFilter]),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===An||x.minFilter!==Zs&&x.minFilter!==sr||x.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ke(M,x){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",L));const $=x.source;let ie=f.get($);ie===void 0&&(ie={},f.set($,ie));const q=X(x);if(q!==M.__cacheKey){ie[q]===void 0&&(ie[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ie[q].usedTimes++;const Re=ie[M.__cacheKey];Re!==void 0&&(ie[M.__cacheKey].usedTimes--,Re.usedTimes===0&&S(x)),M.__cacheKey=q,M.__webglTexture=ie[q].texture}return I}function Ge(M,x,I){return Math.floor(Math.floor(M/I)/x)}function te(M,x,I,$){const q=M.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,I,$,x.data);else{q.sort((pe,Ee)=>pe.start-Ee.start);let Re=0;for(let pe=1;pe<q.length;pe++){const Ee=q[Re],Ne=q[pe],Le=Ee.start+Ee.count,Se=Ge(Ne.start,x.width,4),qe=Ge(Ee.start,x.width,4);Ne.start<=Le+1&&Se===qe&&Ge(Ne.start+Ne.count-1,x.width,4)===Se?Ee.count=Math.max(Ee.count,Ne.start+Ne.count-Ee.start):(++Re,q[Re]=Ne)}q.length=Re+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let pe=0,Ee=q.length;pe<Ee;pe++){const Ne=q[pe],Le=Math.floor(Ne.start/4),Se=Math.ceil(Ne.count/4),qe=Le%x.width,F=Math.floor(Le/x.width),ve=Se,ye=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,qe,F,ve,ye,I,$,x.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function me(M,x,I){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const ie=ke(M,x),q=x.source;t.bindTexture($,M.__webglTexture,n.TEXTURE0+I);const Re=i.get(q);if(q.version!==Re.__version||ie===!0){t.activeTexture(n.TEXTURE0+I);const he=nt.getPrimaries(nt.workingColorSpace),Pe=x.colorSpace===Ci?null:nt.getPrimaries(x.colorSpace),De=x.colorSpace===Ci||he===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let pe=g(x.image,!1,r.maxTextureSize);pe=ae(x,pe);const Ee=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type);let Le=y(x.internalFormat,Ee,Ne,x.colorSpace,x.isVideoTexture);ze($,x);let Se;const qe=x.mipmaps,F=x.isVideoTexture!==!0,ve=Re.__version===void 0||ie===!0,ye=q.dataReady,Ue=C(x,pe);if(x.isDepthTexture)Le=b(x.format===Ns,x.type),ve&&(F?t.texStorage2D(n.TEXTURE_2D,1,Le,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Le,pe.width,pe.height,0,Ee,Ne,null));else if(x.isDataTexture)if(qe.length>0){F&&ve&&t.texStorage2D(n.TEXTURE_2D,Ue,Le,qe[0].width,qe[0].height);for(let ge=0,ce=qe.length;ge<ce;ge++)Se=qe[ge],F?ye&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Se.width,Se.height,Ee,Ne,Se.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Se.width,Se.height,0,Ee,Ne,Se.data);x.generateMipmaps=!1}else F?(ve&&t.texStorage2D(n.TEXTURE_2D,Ue,Le,pe.width,pe.height),ye&&te(x,pe,Ee,Ne)):t.texImage2D(n.TEXTURE_2D,0,Le,pe.width,pe.height,0,Ee,Ne,pe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Le,qe[0].width,qe[0].height,pe.depth);for(let ge=0,ce=qe.length;ge<ce;ge++)if(Se=qe[ge],x.format!==En)if(Ee!==null)if(F){if(ye)if(x.layerUpdates.size>0){const Oe=Nd(Se.width,Se.height,x.format,x.type);for(const Ye of x.layerUpdates){const mt=Se.data.subarray(Ye*Oe/Se.data.BYTES_PER_ELEMENT,(Ye+1)*Oe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,Ye,Se.width,Se.height,1,Ee,mt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,pe.depth,Ee,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Se.width,Se.height,pe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,pe.depth,Ee,Ne,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Se.width,Se.height,pe.depth,0,Ee,Ne,Se.data)}else{F&&ve&&t.texStorage2D(n.TEXTURE_2D,Ue,Le,qe[0].width,qe[0].height);for(let ge=0,ce=qe.length;ge<ce;ge++)Se=qe[ge],x.format!==En?Ee!==null?F?ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ye&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Se.width,Se.height,Ee,Ne,Se.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Se.width,Se.height,0,Ee,Ne,Se.data)}else if(x.isDataArrayTexture)if(F){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Le,pe.width,pe.height,pe.depth),ye)if(x.layerUpdates.size>0){const ge=Nd(pe.width,pe.height,x.format,x.type);for(const ce of x.layerUpdates){const Oe=pe.data.subarray(ce*ge/pe.data.BYTES_PER_ELEMENT,(ce+1)*ge/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,pe.width,pe.height,1,Ee,Ne,Oe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Ne,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,pe.width,pe.height,pe.depth,0,Ee,Ne,pe.data);else if(x.isData3DTexture)F?(ve&&t.texStorage3D(n.TEXTURE_3D,Ue,Le,pe.width,pe.height,pe.depth),ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Ne,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Le,pe.width,pe.height,pe.depth,0,Ee,Ne,pe.data);else if(x.isFramebufferTexture){if(ve)if(F)t.texStorage2D(n.TEXTURE_2D,Ue,Le,pe.width,pe.height);else{let ge=pe.width,ce=pe.height;for(let Oe=0;Oe<Ue;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,Le,ge,ce,0,Ee,Ne,null),ge>>=1,ce>>=1}}else if(qe.length>0){if(F&&ve){const ge=Te(qe[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Le,ge.width,ge.height)}for(let ge=0,ce=qe.length;ge<ce;ge++)Se=qe[ge],F?ye&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ee,Ne,Se):t.texImage2D(n.TEXTURE_2D,ge,Le,Ee,Ne,Se);x.generateMipmaps=!1}else if(F){if(ve){const ge=Te(pe);t.texStorage2D(n.TEXTURE_2D,Ue,Le,ge.width,ge.height)}ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Ne,pe)}else t.texImage2D(n.TEXTURE_2D,0,Le,Ee,Ne,pe);m(x)&&h($),Re.__version=q.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function U(M,x,I){if(x.image.length!==6)return;const $=ke(M,x),ie=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+I);const q=i.get(ie);if(ie.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+I);const Re=nt.getPrimaries(nt.workingColorSpace),he=x.colorSpace===Ci?null:nt.getPrimaries(x.colorSpace),Pe=x.colorSpace===Ci||Re===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const De=x.isCompressedTexture||x.image[0].isCompressedTexture,pe=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let ce=0;ce<6;ce++)!De&&!pe?Ee[ce]=g(x.image[ce],!0,r.maxCubemapSize):Ee[ce]=pe?x.image[ce].image:x.image[ce],Ee[ce]=ae(x,Ee[ce]);const Ne=Ee[0],Le=s.convert(x.format,x.colorSpace),Se=s.convert(x.type),qe=y(x.internalFormat,Le,Se,x.colorSpace),F=x.isVideoTexture!==!0,ve=q.__version===void 0||$===!0,ye=ie.dataReady;let Ue=C(x,Ne);ze(n.TEXTURE_CUBE_MAP,x);let ge;if(De){F&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,qe,Ne.width,Ne.height);for(let ce=0;ce<6;ce++){ge=Ee[ce].mipmaps;for(let Oe=0;Oe<ge.length;Oe++){const Ye=ge[Oe];x.format!==En?Le!==null?F?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,0,0,Ye.width,Ye.height,Le,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,qe,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,0,0,Ye.width,Ye.height,Le,Se,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,qe,Ye.width,Ye.height,0,Le,Se,Ye.data)}}}else{if(ge=x.mipmaps,F&&ve){ge.length>0&&Ue++;const ce=Te(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(pe){F?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ee[ce].width,Ee[ce].height,Le,Se,Ee[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Ee[ce].width,Ee[ce].height,0,Le,Se,Ee[ce].data);for(let Oe=0;Oe<ge.length;Oe++){const mt=ge[Oe].image[ce].image;F?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,0,0,mt.width,mt.height,Le,Se,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,qe,mt.width,mt.height,0,Le,Se,mt.data)}}else{F?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Le,Se,Ee[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Le,Se,Ee[ce]);for(let Oe=0;Oe<ge.length;Oe++){const Ye=ge[Oe];F?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,0,0,Le,Se,Ye.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,qe,Le,Se,Ye.image[ce])}}}m(x)&&h(n.TEXTURE_CUBE_MAP),q.__version=ie.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function oe(M,x,I,$,ie,q){const Re=s.convert(I.format,I.colorSpace),he=s.convert(I.type),Pe=y(I.internalFormat,Re,he,I.colorSpace),De=i.get(x),pe=i.get(I);if(pe.__renderTarget=x,!De.__hasExternalTextures){const Ee=Math.max(1,x.width>>q),Ne=Math.max(1,x.height>>q);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,q,Pe,Ee,Ne,x.depth,0,Re,he,null):t.texImage2D(ie,q,Pe,Ee,Ne,0,Re,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),K(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,ie,pe.__webglTexture,0,fe(x)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,ie,pe.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(M,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer){const $=x.depthTexture,ie=$&&$.isDepthTexture?$.type:null,q=b(x.stencilBuffer,ie),Re=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=fe(x);K(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,q,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,M)}else{const $=x.textures;for(let ie=0;ie<$.length;ie++){const q=$[ie],Re=s.convert(q.format,q.colorSpace),he=s.convert(q.type),Pe=y(q.internalFormat,Re,he,q.colorSpace),De=fe(x);I&&K(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Pe,x.width,x.height):K(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Pe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),re(x.depthTexture,0);const ie=$.__webglTexture,q=fe(x);if(x.depthTexture.format===Us)K(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(x.depthTexture.format===Ns)K(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Be(M){const x=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const $=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=$}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const $=M.texture.mipmaps;$&&$.length>0?de(x.__webglFramebuffer[0],M):de(x.__webglFramebuffer,M)}else if(I){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),ne(x.__webglDepthbuffer[$],M,!1);else{const ie=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,q)}}else{const $=M.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ne(x.__webglDepthbuffer,M,!1);else{const ie=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(M,x,I){const $=i.get(M);x!==void 0&&oe($.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Be(M)}function _(M){const x=M.texture,I=i.get(M),$=i.get(x);M.addEventListener("dispose",P);const ie=M.textures,q=M.isWebGLCubeRenderTarget===!0,Re=ie.length>1;if(Re||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,o.memory.textures++),q){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let Pe=0;Pe<x.mipmaps.length;Pe++)I.__webglFramebuffer[he][Pe]=n.createFramebuffer()}else I.__webglFramebuffer[he]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)I.__webglFramebuffer[he]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Re)for(let he=0,Pe=ie.length;he<Pe;he++){const De=i.get(ie[he]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&K(M)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){const Pe=ie[he];I.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const De=s.convert(Pe.format,Pe.colorSpace),pe=s.convert(Pe.type),Ee=y(Pe.internalFormat,De,pe,Pe.colorSpace,M.isXRRenderTarget===!0),Ne=fe(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ee,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,I.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ze(n.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)oe(I.__webglFramebuffer[he][Pe],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe);else oe(I.__webglFramebuffer[he],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let he=0,Pe=ie.length;he<Pe;he++){const De=ie[he],pe=i.get(De);let Ee=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Ee=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,pe.__webglTexture),ze(Ee,De),oe(I.__webglFramebuffer,M,De,n.COLOR_ATTACHMENT0+he,Ee,0),m(De)&&h(Ee)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(he=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,$.__webglTexture),ze(he,x),x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)oe(I.__webglFramebuffer[Pe],M,x,n.COLOR_ATTACHMENT0,he,Pe);else oe(I.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,he,0);m(x)&&h(he),t.unbindTexture()}M.depthBuffer&&Be(M)}function N(M){const x=M.textures;for(let I=0,$=x.length;I<$;I++){const ie=x[I];if(m(ie)){const q=w(M),Re=i.get(ie).__webglTexture;t.bindTexture(q,Re),h(q),t.unbindTexture()}}}const G=[],Q=[];function V(M){if(M.samples>0){if(K(M)===!1){const x=M.textures,I=M.width,$=M.height;let ie=n.COLOR_BUFFER_BIT;const q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(M),he=x.length>1;if(he)for(let De=0;De<x.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Pe=M.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let De=0;De<x.length;De++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const pe=i.get(x[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,I,$,0,0,I,$,ie,n.NEAREST),l===!0&&(G.length=0,Q.length=0,G.push(n.COLOR_ATTACHMENT0+De),M.depthBuffer&&M.resolveDepthBuffer===!1&&(G.push(q),Q.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let De=0;De<x.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const pe=i.get(x[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const x=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function fe(M){return Math.min(r.maxSamples,M.samples)}function K(M){const x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function se(M){const x=o.render.frame;d.get(M)!==x&&(d.set(M,x),M.update())}function ae(M,x){const I=M.colorSpace,$=M.format,ie=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==jr&&I!==Ci&&(nt.getTransfer(I)===ut?($!==En||ie!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function Te(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=A,this.setupRenderTarget=_,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=K}function zM(n,e){function t(i,r=Ci){let s;const o=nt.getTransfer(r);if(i===fi)return n.UNSIGNED_BYTE;if(i===Gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return n.BYTE;if(i===Xh)return n.SHORT;if(i===Ls)return n.UNSIGNED_SHORT;if(i===Vc)return n.INT;if(i===ur)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===Bs)return n.HALF_FLOAT;if(i===qh)return n.ALPHA;if(i===jh)return n.RGB;if(i===En)return n.RGBA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===Yh)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===Kh)return n.RG;if(i===$c)return n.RG_INTEGER;if(i===qc)return n.RGBA_INTEGER;if(i===Co||i===Po||i===Do||i===Lo)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Gl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$l||i===ql||i===jl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$l||i===ql)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Io||i===cc||i===uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Io)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zh||i===dc||i===fc||i===hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Io)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class vp extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const HM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
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

}`;class GM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fi({vertexShader:HM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WM extends Kr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,v=null;const g=new GM,m={},h=t.getContextAttributes();let w=null,y=null;const b=[],C=[],L=new ft;let P=null;const O=new pn;O.viewport=new Et;const S=new pn;S.viewport=new Et;const T=[O,S],R=new dx;let k=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=b[te];return me===void 0&&(me=new tl,b[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=b[te];return me===void 0&&(me=new tl,b[te]=me),me.getGripSpace()},this.getHand=function(te){let me=b[te];return me===void 0&&(me=new tl,b[te]=me),me.getHandSpace()};function X(te){const me=C.indexOf(te.inputSource);if(me===-1)return;const U=b[me];U!==void 0&&(U.update(te.inputSource,te.frame,c||o),U.dispatchEvent({type:te.type,data:te.inputSource}))}function re(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",Z);for(let te=0;te<b.length;te++){const me=C[te];me!==null&&(C[te]=null,b[te].disconnect(me))}k=null,B=null,g.reset();for(const te in m)delete m[te];e.setRenderTarget(w),p=null,f=null,u=null,r=null,y=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",re),r.addEventListener("inputsourceschange",Z),h.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,oe=null,ne=null;h.depth&&(ne=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=h.stencil?Ns:Us,oe=h.stencil?Is:ur);const de={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};f=u.createProjectionLayer(de),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new dr(f.textureWidth,f.textureHeight,{format:En,type:fi,depthTexture:new fp(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const U={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,U),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new dr(p.framebufferWidth,p.framebufferHeight,{format:En,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(te){for(let me=0;me<te.removed.length;me++){const U=te.removed[me],oe=C.indexOf(U);oe>=0&&(C[oe]=null,b[oe].disconnect(U))}for(let me=0;me<te.added.length;me++){const U=te.added[me];let oe=C.indexOf(U);if(oe===-1){for(let de=0;de<b.length;de++)if(de>=C.length){C.push(U),oe=de;break}else if(C[de]===null){C[de]=U,oe=de;break}if(oe===-1)break}const ne=b[oe];ne&&ne.connect(U)}}const ee=new j,W=new j;function xe(te,me,U){ee.setFromMatrixPosition(me.matrixWorld),W.setFromMatrixPosition(U.matrixWorld);const oe=ee.distanceTo(W),ne=me.projectionMatrix.elements,de=U.projectionMatrix.elements,Be=ne[14]/(ne[10]-1),A=ne[14]/(ne[10]+1),_=(ne[9]+1)/ne[5],N=(ne[9]-1)/ne[5],G=(ne[8]-1)/ne[0],Q=(de[8]+1)/de[0],V=Be*G,fe=Be*Q,K=oe/(-G+Q),se=K*-G;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(se),te.translateZ(K),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ne[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const ae=Be+K,Te=A+K,M=V-se,x=fe+(oe-se),I=_*A/Te*ae,$=N*A/Te*ae;te.projectionMatrix.makePerspective(M,x,I,$,ae,Te),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function be(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let me=te.near,U=te.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(U=g.depthFar)),R.near=S.near=O.near=me,R.far=S.far=O.far=U,(k!==R.near||B!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,B=R.far),R.layers.mask=te.layers.mask|6,O.layers.mask=R.layers.mask&3,S.layers.mask=R.layers.mask&5;const oe=te.parent,ne=R.cameras;be(R,oe);for(let de=0;de<ne.length;de++)be(ne[de],oe);ne.length===2?xe(R,O,S):R.projectionMatrix.copy(O.projectionMatrix),Ce(te,R,oe)};function Ce(te,me,U){U===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(U.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=pc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(te){return m[te]};let ze=null;function ke(te,me){if(d=me.getViewerPose(c||o),v=me,d!==null){const U=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let oe=!1;U.length!==R.cameras.length&&(R.cameras.length=0,oe=!0);for(let A=0;A<U.length;A++){const _=U[A];let N=null;if(p!==null)N=p.getViewport(_);else{const Q=u.getViewSubImage(f,_);N=Q.viewport,A===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let G=T[A];G===void 0&&(G=new pn,G.layers.enable(A),G.viewport=new Et,T[A]=G),G.matrix.fromArray(_.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(_.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(N.x,N.y,N.width,N.height),A===0&&(R.matrix.copy(G.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),oe===!0&&R.cameras.push(G)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const A=u.getDepthInformation(U[0]);A&&A.isValid&&A.texture&&g.init(A,r.renderState)}if(ne&&ne.includes("camera-access")&&(e.state.unbindTexture(),u))for(let A=0;A<U.length;A++){const _=U[A].camera;if(_){let N=m[_];N||(N=new vp,m[_]=N);const G=u.getCameraImage(_);N.sourceTexture=G}}}for(let U=0;U<b.length;U++){const oe=C[U],ne=b[U];oe!==null&&ne!==void 0&&ne.update(oe,me,c||o)}ze&&ze(te,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const Ge=new hp;Ge.setAnimationLoop(ke),this.setAnimationLoop=function(te){ze=te},this.dispose=function(){}}}const Ki=new hi,XM=new Tt;function $M(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,op(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,y,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),u(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,w,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===tn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===tn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=e.get(h),y=w.envMap,b=w.envMapRotation;y&&(m.envMap.value=y,Ki.copy(b),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(XM.makeRotationFromEuler(Ki)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,w,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===tn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){const b=y.program;i.uniformBlockBinding(w,b)}function c(w,y){let b=r[w.id];b===void 0&&(v(w),b=d(w),r[w.id]=b,w.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(w,C);const L=e.render.frame;s[w.id]!==L&&(f(w),s[w.id]=L)}function d(w){const y=u();w.__bindingPointIndex=y;const b=n.createBuffer(),C=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const y=r[w.id],b=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let L=0,P=b.length;L<P;L++){const O=Array.isArray(b[L])?b[L]:[b[L]];for(let S=0,T=O.length;S<T;S++){const R=O[S];if(p(R,L,S,C)===!0){const k=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let re=0;re<B.length;re++){const Z=B[re],ee=g(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,k+X,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,y,b,C){const L=w.value,P=y+"_"+b;if(C[P]===void 0)return typeof L=="number"||typeof L=="boolean"?C[P]=L:C[P]=L.clone(),!0;{const O=C[P];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return C[P]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function v(w){const y=w.uniforms;let b=0;const C=16;for(let P=0,O=y.length;P<O;P++){const S=Array.isArray(y[P])?y[P]:[y[P]];for(let T=0,R=S.length;T<R;T++){const k=S[T],B=Array.isArray(k.value)?k.value:[k.value];for(let X=0,re=B.length;X<re;X++){const Z=B[X],ee=g(Z),W=b%C,xe=W%ee.boundary,be=W+xe;b+=xe,be!==0&&C-be<ee.storage&&(b+=C-be),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=ee.storage}}}const L=b%C;return L>0&&(b+=C-L),w.__size=b,w.__cache={},this}function g(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class jM{constructor(e={}){const{canvas:t=wv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,h=null;const w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let C=!1;this._outputColorSpace=hn;let L=0,P=0,O=null,S=-1,T=null;const R=new Et,k=new Et;let B=null;const X=new rt(0);let re=0,Z=t.width,ee=t.height,W=1,xe=null,be=null;const Ce=new Et(0,0,Z,ee),ze=new Et(0,0,Z,ee);let ke=!1;const Ge=new cp;let te=!1,me=!1;const U=new Tt,oe=new j,ne=new Et,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function A(){return O===null?W:1}let _=i;function N(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ge,!1),_===null){const z="webgl2";if(_=N(z,E),_===null)throw N(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let G,Q,V,fe,K,se,ae,Te,M,x,I,$,ie,q,Re,he,Pe,De,pe,Ee,Ne,Le,Se,qe;function F(){G=new rS(_),G.init(),Le=new zM(_,G),Q=new Zy(_,G,e,Le),V=new BM(_,G),Q.reversedDepthBuffer&&f&&V.buffers.depth.setReversed(!0),fe=new aS(_),K=new TM,se=new kM(_,G,V,K,Q,Le,fe),ae=new Qy(b),Te=new iS(b),M=new hx(_),Se=new Yy(_,M),x=new sS(_,M,fe,Se),I=new cS(_,x,M,fe),pe=new lS(_,Q,se),he=new Jy(K),$=new EM(b,ae,Te,G,Q,Se,he),ie=new $M(b,K),q=new AM,Re=new IM(G),De=new jy(b,ae,Te,V,I,p,l),Pe=new FM(b,I,Q),qe=new qM(_,fe,Q,V),Ee=new Ky(_,G,fe),Ne=new oS(_,G,fe),fe.programs=$.programs,b.capabilities=Q,b.extensions=G,b.properties=K,b.renderLists=q,b.shadowMap=Pe,b.state=V,b.info=fe}F();const ve=new WM(b,_);this.xr=ve,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const E=G.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=G.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(Z,ee,!1))},this.getSize=function(E){return E.set(Z,ee)},this.setSize=function(E,z,Y=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,ee=z,t.width=Math.floor(E*W),t.height=Math.floor(z*W),Y===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(Z*W,ee*W).floor()},this.setDrawingBufferSize=function(E,z,Y){Z=E,ee=z,W=Y,t.width=Math.floor(E*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(Ce)},this.setViewport=function(E,z,Y,J){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,z,Y,J),V.viewport(R.copy(Ce).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,z,Y,J){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,z,Y,J),V.scissor(k.copy(ze).multiplyScalar(W).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(E){V.setScissorTest(ke=E)},this.setOpaqueSort=function(E){xe=E},this.setTransparentSort=function(E){be=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Y=!0){let J=0;if(E){let H=!1;if(O!==null){const _e=O.texture.format;H=_e===qc||_e===$c||_e===Xc}if(H){const _e=O.texture.type,we=_e===fi||_e===ur||_e===Ls||_e===Is||_e===Gc||_e===Wc,Fe=De.getClearColor(),Ie=De.getClearAlpha(),We=Fe.r,Xe=Fe.g,He=Fe.b;we?(v[0]=We,v[1]=Xe,v[2]=He,v[3]=Ie,_.clearBufferuiv(_.COLOR,0,v)):(g[0]=We,g[1]=Xe,g[2]=He,g[3]=Ie,_.clearBufferiv(_.COLOR,0,g))}else J|=_.COLOR_BUFFER_BIT}z&&(J|=_.DEPTH_BUFFER_BIT),Y&&(J|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),De.dispose(),q.dispose(),Re.dispose(),K.dispose(),ae.dispose(),Te.dispose(),I.dispose(),Se.dispose(),qe.dispose(),$.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",In),ve.removeEventListener("sessionend",Zc),ki.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=fe.autoReset,z=Pe.enabled,Y=Pe.autoUpdate,J=Pe.needsUpdate,H=Pe.type;F(),fe.autoReset=E,Pe.enabled=z,Pe.autoUpdate=Y,Pe.needsUpdate=J,Pe.type=H}function ge(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ce(E){const z=E.target;z.removeEventListener("dispose",ce),Oe(z)}function Oe(E){Ye(E),K.remove(E)}function Ye(E){const z=K.get(E).programs;z!==void 0&&(z.forEach(function(Y){$.releaseProgram(Y)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Y,J,H,_e){z===null&&(z=de);const we=H.isMesh&&H.matrixWorld.determinant()<0,Fe=bp(E,z,Y,J,H);V.setMaterial(J,we);let Ie=Y.index,We=1;if(J.wireframe===!0){if(Ie=x.getWireframeAttribute(Y),Ie===void 0)return;We=2}const Xe=Y.drawRange,He=Y.attributes.position;let Je=Xe.start*We,ct=(Xe.start+Xe.count)*We;_e!==null&&(Je=Math.max(Je,_e.start*We),ct=Math.min(ct,(_e.start+_e.count)*We)),Ie!==null?(Je=Math.max(Je,0),ct=Math.min(ct,Ie.count)):He!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,He.count));const St=ct-Je;if(St<0||St===1/0)return;Se.setup(H,J,Fe,Y,Ie);let vt,ht=Ee;if(Ie!==null&&(vt=M.get(Ie),ht=Ne,ht.setIndex(vt)),H.isMesh)J.wireframe===!0?(V.setLineWidth(J.wireframeLinewidth*A()),ht.setMode(_.LINES)):ht.setMode(_.TRIANGLES);else if(H.isLine){let Ve=J.linewidth;Ve===void 0&&(Ve=1),V.setLineWidth(Ve*A()),H.isLineSegments?ht.setMode(_.LINES):H.isLineLoop?ht.setMode(_.LINE_LOOP):ht.setMode(_.LINE_STRIP)}else H.isPoints?ht.setMode(_.POINTS):H.isSprite&&ht.setMode(_.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ve=H._multiDrawStarts,xt=H._multiDrawCounts,tt=H._multiDrawCount,nn=Ie?M.get(Ie).bytesPerElement:1,hr=K.get(J).currentProgram.getUniforms();for(let rn=0;rn<tt;rn++)hr.setValue(_,"_gl_DrawID",rn),ht.render(Ve[rn]/nn,xt[rn])}else if(H.isInstancedMesh)ht.renderInstances(Je,St,H.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xt=Math.min(Y.instanceCount,Ve);ht.renderInstances(Je,St,xt)}else ht.render(Je,St)};function mt(E,z,Y){E.transparent===!0&&E.side===ii&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,Xs(E,z,Y),E.side=Ni,E.needsUpdate=!0,Xs(E,z,Y),E.side=ii):Xs(E,z,Y)}this.compile=function(E,z,Y=null){Y===null&&(Y=E),h=Re.get(Y),h.init(z),y.push(h),Y.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),E!==Y&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights();const J=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Fe=_e[we];mt(Fe,Y,H),J.add(Fe)}else mt(_e,Y,H),J.add(_e)}),h=y.pop(),J},this.compileAsync=function(E,z,Y=null){const J=this.compile(E,z,Y);return new Promise(H=>{function _e(){if(J.forEach(function(we){K.get(we).currentProgram.isReady()&&J.delete(we)}),J.size===0){H(E);return}setTimeout(_e,10)}G.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ot=null;function Gn(E){ot&&ot(E)}function In(){ki.stop()}function Zc(){ki.start()}const ki=new hp;ki.setAnimationLoop(Gn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(E){ot=E,ve.setAnimationLoop(E),E===null?ki.stop():ki.start()},ve.addEventListener("sessionstart",In),ve.addEventListener("sessionend",Zc),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(z),z=ve.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,z,O),h=Re.get(E,y.length),h.init(z),y.push(h),U.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ge.setFromProjectionMatrix(U,zn,z.reversedDepth),me=this.localClippingEnabled,te=he.init(this.clippingPlanes,me),m=q.get(E,w.length),m.init(),w.push(m),ve.enabled===!0&&ve.isPresenting===!0){const _e=b.xr.getDepthSensingMesh();_e!==null&&pa(_e,z,-1/0,b.sortObjects)}pa(E,z,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(xe,be),Be=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Be&&De.addToRenderList(m,E),this.info.render.frame++,te===!0&&he.beginShadows();const Y=h.state.shadowsArray;Pe.render(Y,E,z),te===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,H=m.transmissive;if(h.setupLights(),z.isArrayCamera){const _e=z.cameras;if(H.length>0)for(let we=0,Fe=_e.length;we<Fe;we++){const Ie=_e[we];Qc(J,H,E,Ie)}Be&&De.render(E);for(let we=0,Fe=_e.length;we<Fe;we++){const Ie=_e[we];Jc(m,E,Ie,Ie.viewport)}}else H.length>0&&Qc(J,H,E,z),Be&&De.render(E),Jc(m,E,z);O!==null&&P===0&&(se.updateMultisampleRenderTarget(O),se.updateRenderTargetMipmap(O)),E.isScene===!0&&E.onAfterRender(b,E,z),Se.resetDefaultState(),S=-1,T=null,y.pop(),y.length>0?(h=y[y.length-1],te===!0&&he.setGlobalState(b.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function pa(E,z,Y,J){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ge.intersectsSprite(E)){J&&ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);const we=I.update(E),Fe=E.material;Fe.visible&&m.push(E,we,Fe,Y,ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ge.intersectsObject(E))){const we=I.update(E),Fe=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ne.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ne.copy(we.boundingSphere.center)),ne.applyMatrix4(E.matrixWorld).applyMatrix4(U)),Array.isArray(Fe)){const Ie=we.groups;for(let We=0,Xe=Ie.length;We<Xe;We++){const He=Ie[We],Je=Fe[He.materialIndex];Je&&Je.visible&&m.push(E,we,Je,Y,ne.z,He)}}else Fe.visible&&m.push(E,we,Fe,Y,ne.z,null)}}const _e=E.children;for(let we=0,Fe=_e.length;we<Fe;we++)pa(_e[we],z,Y,J)}function Jc(E,z,Y,J){const H=E.opaque,_e=E.transmissive,we=E.transparent;h.setupLightsView(Y),te===!0&&he.setGlobalState(b.clippingPlanes,Y),J&&V.viewport(R.copy(J)),H.length>0&&Ws(H,z,Y),_e.length>0&&Ws(_e,z,Y),we.length>0&&Ws(we,z,Y),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Qc(E,z,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[J.id]===void 0&&(h.state.transmissionRenderTarget[J.id]=new dr(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?Bs:fi,minFilter:sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const _e=h.state.transmissionRenderTarget[J.id],we=J.viewport||R;_e.setSize(we.z*b.transmissionResolutionScale,we.w*b.transmissionResolutionScale);const Fe=b.getRenderTarget(),Ie=b.getActiveCubeFace(),We=b.getActiveMipmapLevel();b.setRenderTarget(_e),b.getClearColor(X),re=b.getClearAlpha(),re<1&&b.setClearColor(16777215,.5),b.clear(),Be&&De.render(Y);const Xe=b.toneMapping;b.toneMapping=Ii;const He=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),h.setupLightsView(J),te===!0&&he.setGlobalState(b.clippingPlanes,J),Ws(E,Y,J),se.updateMultisampleRenderTarget(_e),se.updateRenderTargetMipmap(_e),G.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ct=0,St=z.length;ct<St;ct++){const vt=z[ct],ht=vt.object,Ve=vt.geometry,xt=vt.material,tt=vt.group;if(xt.side===ii&&ht.layers.test(J.layers)){const nn=xt.side;xt.side=tn,xt.needsUpdate=!0,eu(ht,Y,J,Ve,xt,tt),xt.side=nn,xt.needsUpdate=!0,Je=!0}}Je===!0&&(se.updateMultisampleRenderTarget(_e),se.updateRenderTargetMipmap(_e))}b.setRenderTarget(Fe,Ie,We),b.setClearColor(X,re),He!==void 0&&(J.viewport=He),b.toneMapping=Xe}function Ws(E,z,Y){const J=z.isScene===!0?z.overrideMaterial:null;for(let H=0,_e=E.length;H<_e;H++){const we=E[H],Fe=we.object,Ie=we.geometry,We=we.group;let Xe=we.material;Xe.allowOverride===!0&&J!==null&&(Xe=J),Fe.layers.test(Y.layers)&&eu(Fe,z,Y,Ie,Xe,We)}}function eu(E,z,Y,J,H,_e){E.onBeforeRender(b,z,Y,J,H,_e),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(b,z,Y,J,E,_e),H.transparent===!0&&H.side===ii&&H.forceSinglePass===!1?(H.side=tn,H.needsUpdate=!0,b.renderBufferDirect(Y,z,J,H,E,_e),H.side=Ni,H.needsUpdate=!0,b.renderBufferDirect(Y,z,J,H,E,_e),H.side=ii):b.renderBufferDirect(Y,z,J,H,E,_e),E.onAfterRender(b,z,Y,J,H,_e)}function Xs(E,z,Y){z.isScene!==!0&&(z=de);const J=K.get(E),H=h.state.lights,_e=h.state.shadowsArray,we=H.state.version,Fe=$.getParameters(E,H.state,_e,z,Y),Ie=$.getProgramCacheKey(Fe);let We=J.programs;J.environment=E.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(E.isMeshStandardMaterial?Te:ae).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",ce),We=new Map,J.programs=We);let Xe=We.get(Ie);if(Xe!==void 0){if(J.currentProgram===Xe&&J.lightsStateVersion===we)return nu(E,Fe),Xe}else Fe.uniforms=$.getUniforms(E),E.onBeforeCompile(Fe,b),Xe=$.acquireProgram(Fe,Ie),We.set(Ie,Xe),J.uniforms=Fe.uniforms;const He=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=he.uniform),nu(E,Fe),J.needsLights=Sp(E),J.lightsStateVersion=we,J.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=Xe,J.uniformsList=null,Xe}function tu(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Uo.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function nu(E,z){const Y=K.get(E);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function bp(E,z,Y,J,H){z.isScene!==!0&&(z=de),se.resetTextureUnits();const _e=z.fog,we=J.isMeshStandardMaterial?z.environment:null,Fe=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:jr,Ie=(J.isMeshStandardMaterial?Te:ae).get(J.envMap||we),We=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!Y.morphAttributes.position,Je=!!Y.morphAttributes.normal,ct=!!Y.morphAttributes.color;let St=Ii;J.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(St=b.toneMapping);const vt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=vt!==void 0?vt.length:0,Ve=K.get(J),xt=h.state.lights;if(te===!0&&(me===!0||E!==T)){const Vt=E===T&&J.id===S;he.setState(J,E,Vt)}let tt=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==xt.state.version||Ve.outputColorSpace!==Fe||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isBatchedMesh&&Ve.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ve.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ve.instancingMorph===!1&&H.morphTexture!==null||Ve.envMap!==Ie||J.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==he.numPlanes||Ve.numIntersection!==he.numIntersection)||Ve.vertexAlphas!==We||Ve.vertexTangents!==Xe||Ve.morphTargets!==He||Ve.morphNormals!==Je||Ve.morphColors!==ct||Ve.toneMapping!==St||Ve.morphTargetsCount!==ht)&&(tt=!0):(tt=!0,Ve.__version=J.version);let nn=Ve.currentProgram;tt===!0&&(nn=Xs(J,z,H));let hr=!1,rn=!1,Qr=!1;const bt=nn.getUniforms(),cn=Ve.uniforms;if(V.useProgram(nn.program)&&(hr=!0,rn=!0,Qr=!0),J.id!==S&&(S=J.id,rn=!0),hr||T!==E){V.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),bt.setValue(_,"projectionMatrix",E.projectionMatrix),bt.setValue(_,"viewMatrix",E.matrixWorldInverse);const Zt=bt.map.cameraPosition;Zt!==void 0&&Zt.setValue(_,oe.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&bt.setValue(_,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&bt.setValue(_,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,rn=!0,Qr=!0)}if(H.isSkinnedMesh){bt.setOptional(_,H,"bindMatrix"),bt.setOptional(_,H,"bindMatrixInverse");const Vt=H.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),bt.setValue(_,"boneTexture",Vt.boneTexture,se))}H.isBatchedMesh&&(bt.setOptional(_,H,"batchingTexture"),bt.setValue(_,"batchingTexture",H._matricesTexture,se),bt.setOptional(_,H,"batchingIdTexture"),bt.setValue(_,"batchingIdTexture",H._indirectTexture,se),bt.setOptional(_,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(_,"batchingColorTexture",H._colorsTexture,se));const un=Y.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&pe.update(H,Y,nn),(rn||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,bt.setValue(_,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(cn.envMap.value=Ie,cn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(cn.envMapIntensity.value=z.environmentIntensity),rn&&(bt.setValue(_,"toneMappingExposure",b.toneMappingExposure),Ve.needsLights&&yp(cn,Qr),_e&&J.fog===!0&&ie.refreshFogUniforms(cn,_e),ie.refreshMaterialUniforms(cn,J,W,ee,h.state.transmissionRenderTarget[E.id]),Uo.upload(_,tu(Ve),cn,se)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Uo.upload(_,tu(Ve),cn,se),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&bt.setValue(_,"center",H.center),bt.setValue(_,"modelViewMatrix",H.modelViewMatrix),bt.setValue(_,"normalMatrix",H.normalMatrix),bt.setValue(_,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Vt=J.uniformsGroups;for(let Zt=0,ma=Vt.length;Zt<ma;Zt++){const zi=Vt[Zt];qe.update(zi,nn),qe.bind(zi,nn)}}return nn}function yp(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Sp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,z,Y){const J=K.get(E);J.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),K.get(E.texture).__webglTexture=z,K.get(E.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Y,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const Y=K.get(E);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};const Mp=_.createFramebuffer();this.setRenderTarget=function(E,z=0,Y=0){O=E,L=z,P=Y;let J=!0,H=null,_e=!1,we=!1;if(E){const Ie=K.get(E);if(Ie.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(_.FRAMEBUFFER,null),J=!1;else if(Ie.__webglFramebuffer===void 0)se.setupRenderTarget(E);else if(Ie.__hasExternalTextures)se.rebindTextures(E,K.get(E.texture).__webglTexture,K.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(Ie.__boundDepthTexture!==He){if(He!==null&&K.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Xe=K.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[z])?H=Xe[z][Y]:H=Xe[z],_e=!0):E.samples>0&&se.useMultisampledRTT(E)===!1?H=K.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?H=Xe[Y]:H=Xe,R.copy(E.viewport),k.copy(E.scissor),B=E.scissorTest}else R.copy(Ce).multiplyScalar(W).floor(),k.copy(ze).multiplyScalar(W).floor(),B=ke;if(Y!==0&&(H=Mp),V.bindFramebuffer(_.FRAMEBUFFER,H)&&J&&V.drawBuffers(E,H),V.viewport(R),V.scissor(k),V.setScissorTest(B),_e){const Ie=K.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,Y)}else if(we){const Ie=z;for(let We=0;We<E.textures.length;We++){const Xe=K.get(E.textures[We]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+We,Xe.__webglTexture,Y,Ie)}}else if(E!==null&&Y!==0){const Ie=K.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ie.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(E,z,Y,J,H,_e,we,Fe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){V.bindFramebuffer(_.FRAMEBUFFER,Ie);try{const We=E.textures[Fe],Xe=We.format,He=We.type;if(!Q.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-J&&Y>=0&&Y<=E.height-H&&(E.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Fe),_.readPixels(z,Y,J,H,Le.convert(Xe),Le.convert(He),_e))}finally{const We=O!==null?K.get(O).__webglFramebuffer:null;V.bindFramebuffer(_.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,z,Y,J,H,_e,we,Fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie)if(z>=0&&z<=E.width-J&&Y>=0&&Y<=E.height-H){V.bindFramebuffer(_.FRAMEBUFFER,Ie);const We=E.textures[Fe],Xe=We.format,He=We.type;if(!Q.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Je),_.bufferData(_.PIXEL_PACK_BUFFER,_e.byteLength,_.STREAM_READ),E.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Fe),_.readPixels(z,Y,J,H,Le.convert(Xe),Le.convert(He),0);const ct=O!==null?K.get(O).__webglFramebuffer:null;V.bindFramebuffer(_.FRAMEBUFFER,ct);const St=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Av(_,St,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Je),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,_e),_.deleteBuffer(Je),_.deleteSync(St),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Y=0){const J=Math.pow(2,-Y),H=Math.floor(E.image.width*J),_e=Math.floor(E.image.height*J),we=z!==null?z.x:0,Fe=z!==null?z.y:0;se.setTexture2D(E,0),_.copyTexSubImage2D(_.TEXTURE_2D,Y,0,0,we,Fe,H,_e),V.unbindTexture()};const Ep=_.createFramebuffer(),Tp=_.createFramebuffer();this.copyTextureToTexture=function(E,z,Y=null,J=null,H=0,_e=null){_e===null&&(H!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=H,H=0):_e=0);let we,Fe,Ie,We,Xe,He,Je,ct,St;const vt=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(Y!==null)we=Y.max.x-Y.min.x,Fe=Y.max.y-Y.min.y,Ie=Y.isBox3?Y.max.z-Y.min.z:1,We=Y.min.x,Xe=Y.min.y,He=Y.isBox3?Y.min.z:0;else{const un=Math.pow(2,-H);we=Math.floor(vt.width*un),Fe=Math.floor(vt.height*un),E.isDataArrayTexture?Ie=vt.depth:E.isData3DTexture?Ie=Math.floor(vt.depth*un):Ie=1,We=0,Xe=0,He=0}J!==null?(Je=J.x,ct=J.y,St=J.z):(Je=0,ct=0,St=0);const ht=Le.convert(z.format),Ve=Le.convert(z.type);let xt;z.isData3DTexture?(se.setTexture3D(z,0),xt=_.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(se.setTexture2DArray(z,0),xt=_.TEXTURE_2D_ARRAY):(se.setTexture2D(z,0),xt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,z.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,z.unpackAlignment);const tt=_.getParameter(_.UNPACK_ROW_LENGTH),nn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),hr=_.getParameter(_.UNPACK_SKIP_PIXELS),rn=_.getParameter(_.UNPACK_SKIP_ROWS),Qr=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,vt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,vt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,We),_.pixelStorei(_.UNPACK_SKIP_ROWS,Xe),_.pixelStorei(_.UNPACK_SKIP_IMAGES,He);const bt=E.isDataArrayTexture||E.isData3DTexture,cn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const un=K.get(E),Vt=K.get(z),Zt=K.get(un.__renderTarget),ma=K.get(Vt.__renderTarget);V.bindFramebuffer(_.READ_FRAMEBUFFER,Zt.__webglFramebuffer),V.bindFramebuffer(_.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let zi=0;zi<Ie;zi++)bt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,K.get(E).__webglTexture,H,He+zi),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,K.get(z).__webglTexture,_e,St+zi)),_.blitFramebuffer(We,Xe,we,Fe,Je,ct,we,Fe,_.DEPTH_BUFFER_BIT,_.NEAREST);V.bindFramebuffer(_.READ_FRAMEBUFFER,null),V.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||K.has(E)){const un=K.get(E),Vt=K.get(z);V.bindFramebuffer(_.READ_FRAMEBUFFER,Ep),V.bindFramebuffer(_.DRAW_FRAMEBUFFER,Tp);for(let Zt=0;Zt<Ie;Zt++)bt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,un.__webglTexture,H,He+Zt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,un.__webglTexture,H),cn?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Vt.__webglTexture,_e,St+Zt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Vt.__webglTexture,_e),H!==0?_.blitFramebuffer(We,Xe,we,Fe,Je,ct,we,Fe,_.COLOR_BUFFER_BIT,_.NEAREST):cn?_.copyTexSubImage3D(xt,_e,Je,ct,St+Zt,We,Xe,we,Fe):_.copyTexSubImage2D(xt,_e,Je,ct,We,Xe,we,Fe);V.bindFramebuffer(_.READ_FRAMEBUFFER,null),V.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else cn?E.isDataTexture||E.isData3DTexture?_.texSubImage3D(xt,_e,Je,ct,St,we,Fe,Ie,ht,Ve,vt.data):z.isCompressedArrayTexture?_.compressedTexSubImage3D(xt,_e,Je,ct,St,we,Fe,Ie,ht,vt.data):_.texSubImage3D(xt,_e,Je,ct,St,we,Fe,Ie,ht,Ve,vt):E.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,_e,Je,ct,we,Fe,ht,Ve,vt.data):E.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,_e,Je,ct,vt.width,vt.height,ht,vt.data):_.texSubImage2D(_.TEXTURE_2D,_e,Je,ct,we,Fe,ht,Ve,vt);_.pixelStorei(_.UNPACK_ROW_LENGTH,tt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,nn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,hr),_.pixelStorei(_.UNPACK_SKIP_ROWS,rn),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Qr),_e===0&&z.generateMipmaps&&_.generateMipmap(xt),V.unbindTexture()},this.copyTextureToTexture3D=function(E,z,Y=null,J=null,H=0){return kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,Y,J,H)},this.initRenderTarget=function(E){K.get(E).__webglFramebuffer===void 0&&se.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?se.setTextureCube(E,0):E.isData3DTexture?se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?se.setTexture2DArray(E,0):se.setTexture2D(E,0),V.unbindTexture()},this.resetState=function(){L=0,P=0,O=null,V.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const YM=Kt({__name:"HeroSphere",setup(n){const e=et(null);let t=null,i=null,r=null,s=null,o=null,a=null,l=0,c=!0,d=0,u=0,f=null;function p(m,h){i=new Jv,r=new pn(55,m/h,.1,100),r.position.z=28;const w=Math.min(2,window.devicePixelRatio||1);t=new jM({antialias:!0,alpha:!0,powerPreference:"low-power"}),t.setPixelRatio(w),t.setSize(m,h),t.setClearColor(0,0);const y=e.value;y.innerHTML="",y.appendChild(t.domElement);const b=/Mobi|Android|iPhone|iPad|iPod|Phone/i.test(navigator.userAgent),C=b?300:450;b||(r.position.z=26);const L=new Float32Array(C*3),P=new Float32Array(C*3),O=(1+Math.sqrt(5))/2,S=b?21.5:14.5,T=new rt,R=[];for(let ke=0;ke<C;ke++){const Ge=ke/(C-1),te=2*Math.PI*ke/O,me=1-2*Ge,U=Math.sqrt(1-me*me),oe=Math.cos(te)*U,ne=Math.sin(te)*U,de=oe*S,Be=me*S,A=ne*S;L[ke*3]=de,L[ke*3+1]=Be,L[ke*3+2]=A,R.push(new j(de,Be,A)),T.setHSL(.47+.12*me,.95,.72),P[ke*3]=T.r,P[ke*3+1]=T.g,P[ke*3+2]=T.b}const k=new Ln;k.setAttribute("position",new _n(L,3)),k.setAttribute("color",new _n(P,3));const B=document.createElement("canvas"),X=B.getContext("2d");X&&(B.width=64,B.height=64,X.beginPath(),X.arc(64/2,64/2,64/2,0,Math.PI*2),X.fillStyle="white",X.fill());const re=new sx(B),Z=new dp({size:b?1.3:.4,sizeAttenuation:!0,transparent:!0,depthWrite:!1,blending:Wo,opacity:.85,vertexColors:!0,map:re});s=new rx(k,Z),a=new fs,a.add(s),b?a.position.set(-S*.6,S*.45,0):a.position.set(-S*.8,S*.6,0);const ee=[],W=[],xe=S*.3,be=5,Ce=new Array(R.length).fill(0);for(let ke=0;ke<R.length;ke++)for(let Ge=ke+1;Ge<R.length;Ge++){if(Ce[ke]>=be||Ce[Ge]>=be)continue;R[ke].distanceTo(R[Ge])<xe&&Math.random()<.5&&(ee.push(R[ke].x,R[ke].y,R[ke].z,R[Ge].x,R[Ge].y,R[Ge].z),W.push(.15,.85,.95,.15,.85,.95),Ce[ke]++,Ce[Ge]++)}if(ee.length>0){const ke=new Ln;ke.setAttribute("position",new Rn(ee,3)),ke.setAttribute("color",new Rn(W,3));const Ge=new up({transparent:!0,opacity:.12,vertexColors:!0,blending:Wo});o=new ix(ke,Ge),a.add(o)}i.add(a);const ze=new ux(16777215,.2);i.add(ze),b||(f=Ge=>{const te=Ge.clientX/window.innerWidth*2-1,me=Ge.clientY/window.innerHeight*2-1;u=te*.06,d=-me*.06*.4},window.addEventListener("pointermove",f,{passive:!0}))}function v(){if(!t||!i||!r||!a)return;matchMedia("(prefers-reduced-motion: reduce)").matches||(a.rotation.y+=9e-4,f&&(a.rotation.x+=(d-a.rotation.x)*.04,a.rotation.y+=(u-a.rotation.y)*.04)),t.render(i,r),c&&(l=requestAnimationFrame(v))}function g(){if(!t||!r||!e.value)return;const m=e.value.getBoundingClientRect(),h=Math.max(1,Math.floor(m.width)),w=Math.max(1,Math.floor(m.height));r.aspect=h/w,r.updateProjectionMatrix(),t.setSize(h,w)}return mi(()=>{const m=e.value,h=m.getBoundingClientRect();p(h.width,h.height);const w=new IntersectionObserver(b=>{c=b[0]?.isIntersecting??!0,c?(cancelAnimationFrame(l),l=requestAnimationFrame(v)):cancelAnimationFrame(l)},{threshold:.1});w.observe(m),m.__io=w;const y=new ResizeObserver(()=>g());y.observe(m),m.__ro=y,l=requestAnimationFrame(v)}),Bi(()=>{f&&window.removeEventListener("pointermove",f),cancelAnimationFrame(l);const m=e.value;m?.__io?.disconnect(),m?.__ro?.disconnect(),s&&(s.geometry.dispose(),s.material.dispose()),o&&(o.geometry.dispose(),o.material.dispose()),t?.dispose(),i=null,r=null,s=null,o=null,a=null,t=null}),(m,h)=>(le(),ue("div",{ref_key:"wrapRef",ref:e,class:"absolute left-[-10vw] top-[-8vw] w-[95vw] aspect-square md:left-[-8vw] md:top-[-5vw] md:w-[95vw] md:aspect-square pointer-events-none select-none opacity-50 z-10"},null,512))}}),KM={class:"relative min-h-screen flex items-center justify-center px-4 sm:px-5 py-14 sm:py-16"},ZM={class:"w-full max-w-screen-md mx-auto text-center"},JM={class:"mb-8 sm:mb-10 flex items-center justify-center gap-4 sm:gap-6",reveal:{delay:40}},QM={class:"flex items-center justify-center",reveal:{delay:140}},eE={class:"text-[9.5vw] leading-[1.06] sm:text-5xl md:text-6xl font-extrabold tracking-tight",reveal:{delay:180}},tE={class:"mt-3 sm:mt-6 text-emerald-100/90 text-[15px] sm:text-lg leading-relaxed px-1 sm:px-2",reveal:{delay:280}},nE={class:"mt-7 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm",reveal:{delay:360}},iE={class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition",reveal:{delay:400}},rE={class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition",reveal:{delay:440}},sE={class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 active:scale-95 transition",reveal:{delay:480}},oE={class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 active:scale-95 transition",reveal:{delay:520}},aE={class:"mt-8 sm:mt-12",reveal:{delay:560}},lE=Kt({__name:"HeroSection",setup(n){return(e,t)=>{const i=eh("router-link"),r=di("reveal");return le(),ue("div",KM,[it(YM),t[9]||(t[9]=D("div",{class:"absolute inset-0 overflow-hidden pointer-events-none"},[D("div",{class:"absolute -top-40 -left-20 size-[40rem] rounded-full bg-emerald-400/10 blur-3xl animate-pulse [animation-duration:4.5s]"}),D("div",{class:"absolute -bottom-40 -right-20 size-[40rem] rounded-full bg-cyan-400/10 blur-3xl animate-pulse [animation-duration:5.5s]"})],-1)),D("div",ZM,[Ae((le(),ue("div",JM,[t[1]||(t[1]=D("div",{class:"flex items-center justify-center"},[D("div",{class:"inline-flex items-center rounded-md ring-1 ring-white/20 bg-white/5 px-3 py-2 shadow-sm"},[D("img",{src:N_,alt:"学校 logo",class:"h-10 sm:h-14 w-auto object-contain select-none",decoding:"async",loading:"eager",fetchpriority:"high"})])],-1)),Ae((le(),ue("div",QM,[...t[0]||(t[0]=[D("img",{src:F_,alt:"电子俱乐部 logo",class:"h-16 w-16 sm:h-24 sm:w-24 rounded-full object-cover ring-1 ring-white/20 bg-white/5 select-none shadow-lg",decoding:"async",loading:"eager",fetchpriority:"high"},null,-1)])])),[[r,void 0,'"pop"']])])),[[r,void 0,'"pop"']]),Ae((le(),ue("h1",eE,[...t[2]||(t[2]=[dt(" 电子俱乐部 ",-1),D("span",{class:"block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300"},"探索·创造·连接",-1)])])),[[r,void 0,'"pop"']]),Ae((le(),ue("p",tE,[...t[3]||(t[3]=[dt(" 在这里，我们把点子变成作品：嵌入式、物联网、电源技术…… 一起组队做有趣的项目，组织比赛，用技术照亮校园生活。 ",-1)])])),[[r,void 0,'"up"']]),Ae((le(),ue("div",nE,[Ae((le(),ue("span",iE,[...t[4]||(t[4]=[dt("院级部门",-1)])])),[[r,void 0,'"pop"']]),Ae((le(),ue("span",rE,[...t[5]||(t[5]=[dt("跨学科",-1)])])),[[r,void 0,'"pop"']]),Ae((le(),ue("span",sE,[...t[6]||(t[6]=[dt("传播知识",-1)])])),[[r,void 0,'"pop"']]),Ae((le(),ue("span",oE,[...t[7]||(t[7]=[dt("成长互助",-1)])])),[[r,void 0,'"pop"']])])),[[r,void 0,'"up"']]),Ae((le(),ue("div",aE,[it(i,{to:"/led-competition",class:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 group"},{default:Fr(()=>[...t[8]||(t[8]=[D("span",null,"🔥 LED 创意赛火热报名中",-1),D("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})],-1)])]),_:1})])),[[r,void 0,'"up"']])]),t[10]||(t[10]=D("div",{class:"absolute left-1/2 -translate-x-1/2 text-emerald-200/80 text-xs sm:text-sm animate-bounce bottom-[calc(env(safe-area-inset-bottom)+1rem)]"},"向下滚动",-1))])}}}),cE={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},uE={class:"w-full max-w-screen-lg mx-auto"},dE={class:"text-2xl sm:text-3xl font-bold text-center"},fE={class:"mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0",reveal:{delay:80}},hE={class:"mt-3 sm:mt-4 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed text-center px-1 sm:px-0",reveal:{delay:140}},pE={class:"mt-5 sm:mt-6 flex flex-wrap gap-2 text-xs sm:text-sm justify-center",reveal:{delay:180}},mE={class:"mt-7 sm:mt-9 grid grid-cols-2 place-content-center sm:grid-cols-3 gap-3 sm:gap-4"},gE=["aria-expanded","reveal","onClick"],_E={class:"flex items-start gap-2 sm:gap-3"},vE={class:"text-xl sm:text-2xl leading-none"},xE={class:"flex-1 min-w-0"},bE={class:"font-semibold text-sm sm:text-base flex items-center gap-1"},yE={key:0,class:"text-emerald-300/80 text-xs"},SE={key:1,class:"text-emerald-300/50 text-xs"},ME={key:0,class:"mb-2 grid grid-cols-2 gap-1.5"},EE=["src","alt","onClick"],TE={key:1,class:"mb-2 overflow-hidden rounded-lg border border-white/10"},wE=["src","alt","onClick"],AE={class:"whitespace-pre-wrap font-sans"},RE=["src"],CE=Kt({__name:"AboutSection",setup(n){const e=[{icon:"🔌",title:"焊接实训",brief:"专业设备，深入教学，体验乐趣",full:`优秀的设计搭配一流的焊工，让你的设计落地生根。
在这里，我们有专业的设备和深入的教学，快人一步，体验焊接的乐趣，收获成功的喜悦。`,img:"/features/b.jpg"},{icon:"🏆",title:"科技比赛",brief:"备赛成长，完赛收获，平台支持",full:`在备赛中学习，在比赛时成长，在完赛后收获。
我们为你搭建比赛的平台，帮你你在比赛中提高，让你拿得了奖评得了优！`,images:["/features/c.jpg","/features/d.jpg"]},{icon:"🧑‍🏫",title:"软硬件教学",brief:"C语言、电路入门，乐趣与成长",full:`C语言乏力、电路吃力？别怕，我们来
C语言教学、pcb设计教学……我们带你入门，帮你找回乐趣，找到提高的方向。`,images:["/features/e.jpg","/features/i.jpg"]},{icon:"📝",title:"PCB设计",brief:"想法落地，收获你的第一块板",full:`声控灯？遥控车？你的千奇百怪的想法，PCB来帮你解决
了解PCB的渊源，掌握PCB的简单设计，学习基础的应用电路。收获你的第一块印刷电路板。`,images:["/features/f.jpg","/features/g.jpg"]},{icon:"🛠️",title:"嵌入式工程",brief:"单片机入门，项目驱动成长",full:`入了嵌入式，一天饿两顿（不是）
你是否听过学长学姐告诉你学学51单片机，嵌入入门不是梦？学吧，学完51玩32，苦海无涯岸无边啊！如果你对未来有更进一步的想法，期待与你共会。`,img:"/features/a.jpg"},{icon:"🎉",title:"团队活动",brief:"劳逸结合，丰富团建，温暖团队",full:`劳逸结合是我们的追求，合格的部门必须要丰富的团活！
初见时羞涩的我们，团建时燃烧的热情（还挺应景，第一次吃的烤肉），男生节女生节"蓄谋已久"的惊喜，都是我们团队的注脚！`,images:["/features/h.jpg","/features/j.jpg","/features/k.jpg","/features/l.jpg"]}],t=et(null);function i(u){t.value=t.value===u?null:u}const r=et(null);function s(u){r.value=u}function o(){r.value=null}function a(u){const f=u;f.style.overflow="hidden",f.style.height="0",f.style.opacity="0",f.offsetHeight;const p=f.scrollHeight;f.style.transition="height .42s cubic-bezier(.34,.64,.36,1), opacity .3s ease",f.style.height=p+"px",f.style.opacity="1"}function l(u){const f=u;f.style.height="auto",f.style.overflow=""}function c(u){const f=u;f.style.overflow="hidden";const p=f.scrollHeight;f.style.height=p+"px",f.offsetHeight,f.style.transition="height .32s cubic-bezier(.68,.12,.47,.98), opacity .24s ease",f.style.height="0",f.style.opacity="0"}function d(u){const f=u;f.style.overflow=""}return(u,f)=>{const p=di("reveal"),v=di("tilt");return le(),ue(At,null,[D("div",cE,[Ae((le(),ue("div",uE,[Ae((le(),ue("h2",dE,[...f[2]||(f[2]=[dt("关于电子俱乐部",-1)])])),[[p,void 0,'"pop"']]),Ae((le(),ue("p",fE,[...f[3]||(f[3]=[dt("我们是校园里的技术共同体：我们可以让灵感变成作品，可以让知识得以传递，让成长默默发生",-1)])])),[[p,void 0,'"up"']]),Ae((le(),ue("p",hE,[...f[4]||(f[4]=[dt("这里有工程视角，也有人际交往；有代码与电路，也有内容与组织。",-1)])])),[[p,void 0,'"up"']]),Ae((le(),ue("div",pE,[...f[5]||(f[5]=[D("span",{class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30"},"好奇",-1),D("span",{class:"px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30"},"协作",-1),D("span",{class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30"},"责任心",-1),D("span",{class:"px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30"},"发展",-1)])])),[[p,void 0,'"fade"']]),D("div",mE,[(le(),ue(At,null,Di(e,(g,m)=>Ae(D("div",{key:g.title,class:"group relative self-start rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-3 sm:p-4 hover:border-emerald-400/30 hover:bg-slate-800/40 transition cursor-pointer shadow-lg hover:shadow-emerald-400/20","aria-expanded":t.value===m,role:"group",reveal:{delay:220+m*70},onClick:h=>i(m)},[D("div",_E,[D("span",vE,It(g.icon),1),D("span",xE,[D("span",bE,[dt(It(g.title)+" ",1),t.value===m?(le(),ue("span",yE,"▲")):(le(),ue("span",SE,"▼"))]),D("span",{class:Mn(["block mt-1 text-[11px] sm:text-xs text-emerald-100/70 line-clamp-2 group-hover:text-emerald-100/90 transition",{"opacity-0":t.value===m}])},It(g.brief),3)])]),it(Ml,{onEnter:a,onAfterEnter:l,onLeave:c,onAfterLeave:d},{default:Fr(()=>[t.value===m?(le(),ue("div",{key:0,class:"mt-3 text-[11px] sm:text-xs leading-relaxed text-emerald-100/85",onClick:f[0]||(f[0]=mn(()=>{},["stop"]))},[g.images&&g.images.length?(le(),ue("div",ME,[(le(!0),ue(At,null,Di(g.images,(h,w)=>(le(),ue("img",{key:w,src:h,alt:g.title+" 图 "+(w+1),class:"h-24 w-full object-cover rounded-md border border-white/10 hover:border-emerald-400/40 hover:brightness-110 active:scale-[0.97] transition cursor-pointer",loading:"lazy",decoding:"async",onClick:mn(y=>s(h),["stop"])},null,8,EE))),128))])):g.img?(le(),ue("div",TE,[D("img",{src:g.img,alt:g.title,class:"w-full h-28 object-cover hover:brightness-110 transition",loading:"lazy",decoding:"async",onClick:mn(h=>s(g.img),["stop"])},null,8,wE)])):Ut("",!0),D("pre",AE,It(g.full),1)])):Ut("",!0)]),_:2},1024),f[6]||(f[6]=D("div",{class:"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-emerald-400/30 transition"},null,-1)),f[7]||(f[7]=D("div",{class:"absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.18),transparent_60%)]"},null,-1))],8,gE),[[p,void 0,'"pop"'],[v,{max:8,scale:1.02}]])),64))])])),[[p]])]),(le(),Rs(Xf,{to:"body"},[r.value?(le(),ue("div",{key:0,class:"fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4",onClick:o},[D("img",{src:r.value,alt:"preview",class:"max-w-full max-h-full rounded-lg shadow-xl border border-white/10",onClick:f[1]||(f[1]=mn(()=>{},["stop"]))},null,8,RE),D("button",{class:"absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg flex items-center justify-center backdrop-blur-sm border border-white/20",onClick:mn(o,["stop"])},"×")])):Ut("",!0)]))],64)}}}),PE=Vn(CE,[["__scopeId","data-v-74c77138"]]),DE={},LE={class:"relative px-4 sm:px-5 py-14 sm:py-16"},IE={class:"w-full max-w-screen-lg mx-auto"},UE={class:"inline-block relative"},NE={class:"mt-4 sm:mt-5 text-emerald-100/85 text-[15px] sm:text-base leading-relaxed px-1 sm:px-0",reveal:{delay:100}},FE={class:"mt-8 relative",reveal:{delay:160}},OE={class:"flex flex-col gap-5",reveal:{delay:220}},BE={class:"flex flex-col md:flex-row gap-4 md:gap-6"},kE={class:"flex-1 bg-gradient-to-br from-emerald-900/30 to-slate-900/30 rounded-xl border border-white/10 p-5 md:p-6",reveal:{delay:260}},zE={class:"flex-1 bg-gradient-to-br from-cyan-900/30 to-slate-900/30 rounded-xl border border-white/10 p-5 flex items-center justify-center",reveal:{delay:320}},HE={class:"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4",reveal:{delay:380}},VE={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:400}},GE={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:460}},WE={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:520}},XE={class:"rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:bg-white/10 transition",reveal:{delay:580}},$E={class:"bg-gradient-to-r from-emerald-900/40 via-cyan-900/40 to-emerald-900/40 rounded-xl border border-white/10 p-4 sm:p-5",reveal:{delay:660}};function qE(n,e){const t=di("reveal");return le(),ue("div",LE,[Ae((le(),ue("div",IE,[Ae((le(),ue("div",UE,[...e[0]||(e[0]=[D("h2",{class:"text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text"}," 我们的优势",-1),D("div",{class:"absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400"},null,-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("p",NE,[...e[1]||(e[1]=[dt("老牌部门+社团，助你快速成长",-1)])])),[[t,void 0,'"up"']]),Ae((le(),ue("div",FE,[e[9]||(e[9]=D("div",{class:"absolute inset-0 -z-10"},[D("div",{class:"absolute top-1/3 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"}),D("div",{class:"absolute bottom-1/4 right-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"})],-1)),Ae((le(),ue("div",OE,[D("div",BE,[Ae((le(),ue("div",kE,[...e[2]||(e[2]=[en('<div class="flex items-start"><div class="flex-shrink-0 p-3 bg-emerald-400/15 rounded-lg"><span class="text-2xl">🚀</span></div><div class="ml-4"><h3 class="font-bold text-lg text-emerald-200">项目落地与实战协作</h3><p class="mt-1 text-xs text-cyan-100/80">懂方法，能应用，强配合</p></div></div>',1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",zE,[...e[3]||(e[3]=[en('<div class="text-center"><div class="inline-block p-4 rounded-full bg-cyan-400/15 mb-3"><span class="text-3xl">🏆</span></div><h3 class="font-bold text-cyan-200">竞赛支持</h3><p class="mt-1 text-xs text-cyan-100/80">资料/报名指导</p></div>',1)])])),[[t,void 0,'"pop"']])]),Ae((le(),ue("div",HE,[Ae((le(),ue("div",VE,[...e[4]||(e[4]=[D("div",{class:"text-2xl mb-2"},"🧭",-1),D("div",{class:"font-semibold"},"有我们在",-1),D("div",{class:"text-xs text-emerald-100/80 mt-1"},"学长学姐 1v1 指导",-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",GE,[...e[5]||(e[5]=[D("div",{class:"text-2xl mb-2"},"🔌",-1),D("div",{class:"font-semibold"},"设备与场地",-1),D("div",{class:"text-xs text-emerald-100/80 mt-1"},"部门仓库&办公室",-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",WE,[...e[6]||(e[6]=[D("div",{class:"text-2xl mb-2"},"📣",-1),D("div",{class:"font-semibold"},"校园影响力",-1),D("div",{class:"text-xs text-emerald-100/80 mt-1"},"作品展示与传播",-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",XE,[...e[7]||(e[7]=[D("div",{class:"text-2xl mb-2"},"📚",-1),D("div",{class:"font-semibold"},"资历丰富",-1),D("div",{class:"text-xs text-emerald-100/80 mt-1"},"多年社团沉淀与经验",-1)])])),[[t,void 0,'"pop"']])])),[[t,void 0,'"up"']]),Ae((le(),ue("div",$E,[...e[8]||(e[8]=[en('<div class="flex flex-col sm:flex-row items-center gap-4"><div class="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-black text-3xl"> 💡</div><div class="flex-1 text-center sm:text-left"><h3 class="font-bold text-lg">创新氛围与成长环境</h3><p class="mt-1 text-sm text-emerald-100/90">在这里，我们变点子为作品，行创意于实践，留成长给明天。</p></div></div>',1)])])),[[t,void 0,'"pop"']])])),[[t,void 0,'"up"']])])),[[t,void 0,'"fade"']])])),[[t]])])}const jE=Vn(DE,[["render",qE]]),YE={},KE={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},ZE={class:"w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-6 sm:gap-10"},JE={class:"mt-3 sm:mt-4 space-y-2 text-emerald-100/85 text-[15px] leading-relaxed",reveal:{delay:120}},QE={reveal:{delay:160}},e1={class:"mt-4 grid grid-cols-2 gap-3 text-sm",reveal:{delay:240}},t1={class:"mt-5",reveal:{delay:340}};function n1(n,e){const t=di("reveal");return Ae((le(),ue("div",KE,[D("div",ZE,[Ae((le(),ue("div",null,[e[1]||(e[1]=D("h3",{class:"text-xl sm:text-2xl font-bold"},"我们希望你",-1)),Ae((le(),ue("ul",JE,[...e[0]||(e[0]=[D("li",null,"• 对技术或设计保持好奇心，愿意动手探索",-1),D("li",null,"• 愿意为学校工作出力（我们可是正经的学生会哦）",-1),D("li",null,"• 乐于沟通、保持开放",-1),D("li",null,"• 不设门槛，零基础亦可，只要愿意持续学习",-1)])])),[[t,void 0,'"up"']])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",QE,[e[4]||(e[4]=D("h3",{class:"text-xl sm:text-2xl font-bold"},"我们的小部门",-1)),Ae((le(),ue("div",e1,[...e[2]||(e[2]=[en('<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">技术部</div><div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">团支部</div><div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">常务部</div><div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">外联部</div><div class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">部长部</div><div class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 relative overflow-hidden"><span class="relative z-10">隐藏款</span><span class="absolute inset-0 flex items-center justify-center text-xl font-bold text-cyan-400/10 select-none">MEG</span></div>',6)])])),[[t,void 0,'"fade"']]),Ae((le(),ue("div",t1,[...e[3]||(e[3]=[D("a",{href:"#join",class:"inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold active:scale-[0.99]"},[dt(" 现在报名 "),D("span",null,"→")],-1)])])),[[t,void 0,'"pop"']])])),[[t,void 0,'"pop"']])])])),[[t]])}const i1=Vn(YE,[["render",n1]]),r1={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto",reveal:{delay:380}},s1={class:"w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center"},o1={class:"order-1 md:order-2 reveal-in",style:{opacity:"1",transform:"none",filter:"none"}},a1={class:"md:hidden"},l1={class:"flex gap-3 overflow-x-auto w-full max-w-[100vw] py-1 scroll-hint no-scrollbar",style:{"scroll-snap-type":"x mandatory","-webkit-overflow-scrolling":"touch","overflow-x":"auto !important"}},c1=["src","onClick"],u1={class:"hidden md:block"},d1={class:"relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/70 border border-white/10"},f1={class:"absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-2"},h1=["src","onClick"],p1=["src"],m1=Kt({__name:"ProjectsSection",setup(n){const e=et(null),t=f=>e.value=f,i=()=>{e.value=null,o.value=0,a.value=!1},r=["/works/a.jpg","/works/b.jpg","/works/c.jpg","/works/d.jpg","/works/e.jpg","/works/f.jpg","/works/g.jpg","/works/h.jpg","/works/i.jpg"],s=et(0),o=et(0),a=et(!1),l=kt(()=>Math.max(.3,.85-Math.min(.55,o.value/600)));function c(f){e.value&&(a.value=!0,s.value=f.touches[0].clientY,o.value=0)}function d(f){if(!a.value)return;const p=f.touches[0].clientY-s.value;p>0&&(o.value=p)}function u(){a.value&&(a.value=!1,o.value>90?i():o.value=0)}return(f,p)=>{const v=di("reveal");return Ae((le(),ue("div",r1,[D("div",s1,[p[1]||(p[1]=en('<div class="order-2 md:order-1"><h2 class="text-2xl sm:text-3xl font-bold">去实践，就是最好的学习</h2><p class="mt-3 sm:mt-4 text-emerald-100/80 leading-relaxed text-[15px] sm:text-base"> 从 0 到 1 完整经历：需求调研、方案设计、开发协作。学的不止是技术，更是把事情做成的能力。 </p><ul class="mt-4 sm:mt-6 space-y-2 text-emerald-100/80 text-sm list-disc list-inside"><li>硬件小制作</li><li>LED创新大赛</li><li>技术创意应用</li></ul><p class="mt-4 sm:mt-6 text-emerald-100/80 text-sm italic"> 让电子俱乐部成为你大放异彩的舞台 </p></div>',1)),D("div",o1,[D("div",a1,[D("div",l1,[(le(),ue(At,null,Di(r,g=>D("div",{key:g,class:"relative snap-center flex-shrink-0 w-[85vw] sm:w-[70vw] aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/70 border border-white/10 transition"},[D("img",{src:g,alt:"项目作品展示",class:"absolute inset-0 w-full h-full object-cover cursor-zoom-in",loading:"lazy",decoding:"async",sizes:"(max-width: 768px) 85vw, 400px",onClick:m=>t(g)},null,8,c1)])),64))])]),D("div",u1,[D("div",d1,[D("div",f1,[(le(),ue(At,null,Di(r,g=>D("div",{key:g,class:"relative rounded-lg bg-emerald-400/20 overflow-hidden"},[D("img",{src:g,alt:"项目作品展示",class:"absolute inset-0 w-full h-full object-cover cursor-zoom-in",loading:"lazy",decoding:"async",sizes:"(max-width: 1024px) 33vw, 320px",onClick:m=>t(g)},null,8,h1)])),64))])])])])]),(le(),Rs(Xf,{to:"body"},[e.value?(le(),ue("div",{key:0,class:"fixed inset-0 z-[60] backdrop-blur-sm flex items-center justify-center p-4",onClick:i,style:oi({backgroundColor:`rgba(0,0,0,${l.value})`}),onTouchstartPassive:c,onTouchmove:mn(d,["prevent"]),onTouchendPassive:u},[D("div",{class:"relative",style:oi({transform:o.value?`translateY(${o.value}px)`:""}),onClick:p[0]||(p[0]=mn(()=>{},["stop"]))},[D("img",{src:e.value,alt:"preview",class:"max-w-[95vw] max-h-[85vh] rounded-lg shadow-xl border border-white/10"},null,8,p1),D("button",{class:"absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg flex items-center justify-center backdrop-blur-sm border border-white/20",onClick:i},"×")],4)],36)):Ut("",!0)]))])),[[v,void 0,'"up"']])}}}),g1={},_1={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},v1={class:"w-full max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center"},x1={reveal:{delay:140}},b1={class:"mt-3 sm:mt-4 text-emerald-100/80 leading-relaxed text-[15px] sm:text-base",reveal:{delay:220}},y1={class:"mt-4 sm:mt-6 grid grid-cols-2 gap-3 text-sm",reveal:{delay:300}};function S1(n,e){const t=di("reveal");return Ae((le(),ue("div",_1,[D("div",v1,[Ae((le(),ue("div",null,[...e[0]||(e[0]=[en('<div class="relative aspect-video rounded-xl overflow-hidden bg-slate-900/70 border border-white/10 flex items-center justify-center"><div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_60%)]"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.2),transparent_60%)]"></div><div class="relative z-10 text-center"><div class="text-5xl font-black tracking-tight">0 → 1</div><div class="mt-3 text-xs sm:text-sm text-emerald-100/80">每周例会 / 部长带队</div></div></div>',1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",x1,[e[3]||(e[3]=D("h2",{class:"text-2xl sm:text-3xl font-bold"},"路虽远，行则将至 我们携手这一程",-1)),Ae((le(),ue("p",b1,[...e[1]||(e[1]=[dt("每位新成员会得到学习路径建议与部长指导，前期也会提供项目模板与工具链，快速上手并构建自信。",-1)])])),[[t,void 0,'"up"']]),Ae((le(),ue("div",y1,[...e[2]||(e[2]=[D("div",{class:"px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20"},"内部技术教学",-1),D("div",{class:"px-3 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20"},"仓库管理",-1),D("div",{class:"px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20"},"活动组织",-1),D("div",{class:"px-3 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20"},"宣发 / 运营",-1)])])),[[t,void 0,'"fade"']])])),[[t,void 0,'"pop"']])])])),[[t]])}const M1=Vn(g1,[["render",S1]]),af="/honors/1.jpg",lf="/honors/2.jpg",cf="/honors/3.jpg",uf="/honors/4.jpg",E1={},T1={class:"relative px-4 sm:px-5 py-14 sm:py-16 cv-auto"},w1={class:"w-full max-w-screen-lg mx-auto"},A1={class:"text-2xl sm:text-3xl font-bold text-center"},R1={class:"mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",reveal:{delay:140}},C1={class:"grid grid-cols-2 gap-4 sm:hidden",reveal:{delay:140}},P1={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform",reveal:{delay:200}},D1={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform",reveal:{delay:260}},L1={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform",reveal:{delay:320}},I1={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform",reveal:{delay:380}},U1={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block",reveal:{delay:200}},N1={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block",reveal:{delay:260}},F1={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block",reveal:{delay:320}},O1={class:"relative rounded-xl overflow-hidden shadow-lg group cursor-pointer active:scale-[0.99] transition-transform hidden sm:block",reveal:{delay:380}};function B1(n,e){const t=di("reveal");return Ae((le(),ue("div",T1,[D("div",w1,[Ae((le(),ue("h2",A1,[...e[0]||(e[0]=[dt("活动与荣誉",-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",R1,[Ae((le(),ue("div",C1,[Ae((le(),ue("div",P1,[...e[1]||(e[1]=[D("img",{src:af,alt:"快乐团建时光",class:"w-full h-35 object-cover"},null,-1),D("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),D("div",{class:"absolute bottom-0 left-0 right-0 p-3"},[D("div",{class:"text-white font-medium text-sm"},"运动这一块")],-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",D1,[...e[2]||(e[2]=[D("img",{src:lf,alt:"大佬云集",class:"w-full h-35 object-cover"},null,-1),D("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),D("div",{class:"absolute bottom-0 left-0 right-0 p-3"},[D("div",{class:"text-white font-medium text-sm"},"科普这一块")],-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",L1,[...e[3]||(e[3]=[D("img",{src:cf,alt:"院内教学",class:"w-full h-35 object-cover"},null,-1),D("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),D("div",{class:"absolute bottom-0 left-0 right-0 p-3"},[D("div",{class:"text-white font-medium text-sm"},"社团这一块")],-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",I1,[...e[4]||(e[4]=[D("img",{src:uf,alt:"十佳社团",class:"w-full h-35 object-cover"},null,-1),D("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),D("div",{class:"absolute bottom-0 left-0 right-0 p-3"},[D("div",{class:"text-white font-medium text-sm"},"配音这一块")],-1)])])),[[t,void 0,'"pop"']])])),[[t,void 0,'"fade"']]),Ae((le(),ue("div",U1,[...e[5]||(e[5]=[D("img",{src:af,alt:"快乐团建时光",class:"h-40 sm:h-56 w-full object-cover"},null,-1),D("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),D("div",{class:"absolute bottom-0 left-0 right-0 p-4 sm:p-6"},[D("div",{class:"text-white font-medium text-lg"},"运动这一块")],-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",N1,[...e[6]||(e[6]=[D("img",{src:lf,alt:"大佬云集",class:"h-40 sm:h-56 w-full object-cover"},null,-1),D("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),D("div",{class:"absolute bottom-0 left-0 right-0 p-4 sm:p-6"},[D("div",{class:"text-white font-medium text-lg"},"科普这一块")],-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",F1,[...e[7]||(e[7]=[D("img",{src:cf,alt:"院内教学",class:"h-40 sm:h-56 w-full object-cover"},null,-1),D("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),D("div",{class:"absolute bottom-0 left-0 right-0 p-4 sm:p-6"},[D("div",{class:"text-white font-medium text-lg"},"社团这一块")],-1)])])),[[t,void 0,'"pop"']]),Ae((le(),ue("div",O1,[...e[8]||(e[8]=[D("img",{src:uf,alt:"十佳社团",class:"h-40 sm:h-56 w-full object-cover"},null,-1),D("div",{class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"},null,-1),D("div",{class:"absolute bottom-0 left-0 right-0 p-4 sm:p-6"},[D("div",{class:"text-white font-medium text-lg"},"配音这一块")],-1)])])),[[t,void 0,'"pop"']])])),[[t,void 0,'"fade"']])])])),[[t]])}const k1=Vn(E1,[["render",B1]]),z1="/group_qr.jpg",H1="/qq_qr.jpg",V1={class:"w-full max-w-screen-sm mx-auto"},G1={class:"sr-only","aria-hidden":"true"},W1={class:"relative"},X1=["aria-invalid"],$1={key:0,class:"mt-1 text-xs text-rose-400"},q1={class:"grid grid-cols-2 gap-3"},j1={class:"relative"},Y1={key:0,class:"mt-1 text-xs text-rose-400"},K1={class:"relative"},Z1={key:0,class:"mt-1 text-xs text-rose-400"},J1={class:"grid grid-cols-3 gap-2 items-start"},Q1={key:1,class:"col-span-3 relative"},eT={class:"absolute -bottom-4 right-0 text-[10px] text-emerald-100/50"},tT={key:0,class:"mt-1 text-xs text-rose-400"},nT={class:"relative"},iT=["maxlength"],rT={class:"mt-2 flex items-center justify-between text-xs"},sT={class:"h-1 flex-1 rounded bg-white/10 mr-3 overflow-hidden"},oT={class:"text-emerald-100/70"},aT={key:0,class:"mt-1 text-xs text-rose-400"},lT=["disabled"],cT={key:0},uT={key:1},dT={key:0,class:"text-center text-xs text-rose-400 mt-1"},fT={key:0,class:"fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+16px)] mx-auto w-[90%] max-w-sm px-4 py-3 rounded-xl bg-emerald-500 text-black text-center shadow-lg"},hT="https://eclubapi.kitramgp.cn/api/join",us=200,pT=30,mT=Kt({__name:"JoinForm",setup(n){const e=Hr({majorClass:"",studentId:"",name:"",stack:"",message:"",customStack:""}),t=Hr({majorClass:!1,studentId:!1,name:!1,stack:!1,message:!1,customStack:!1}),i=et(!1),r=et(!1),s=et(""),o=et(Number(localStorage.getItem("join_last_submit")||0)),a=et(Date.now());let l;mi(()=>{l=window.setInterval(()=>{a.value=Date.now()},1e3)}),Pc(()=>{l&&clearInterval(l)});const c=kt(()=>{const m=a.value-o.value,h=pT*1e3-m;return h>0?Math.ceil(h/1e3):0}),d=et("");function u(){const m=Date.now(),h=Math.random().toString(36).slice(2,10),w=btoa(`${m}-${h}-${(e.message||"").length}`);return{ts:m,nonce:h,sig:w}}const f=kt(()=>({majorClass:e.majorClass?"":"请输入你的专业与班级",studentId:e.studentId?"":"请输入学号",name:e.name?"":"请输入姓名",stack:e.stack?e.stack==="其他"&&!e.customStack?.trim()?"请输入自定义优势":"":"请选择优势",message:e.message.length>us?`最多 ${us} 字`:""})),p=kt(()=>Object.values(f.value).every(m=>!m));async function v(){if(c.value>0){s.value=`请稍后 ${c.value}s 再提交`;return}if(d.value.trim()){r.value=!0,setTimeout(()=>r.value=!1,1500);return}if(Object.keys(t).forEach(m=>t[m]=!0),!!p.value){i.value=!0,s.value="";try{const m=e.stack==="其他"?e.customStack?.trim():e.stack,h=u(),w={majorClass:e.majorClass,studentId:e.studentId,name:e.name,stack:m,message:e.message,meta:h};await new Promise(b=>setTimeout(b,150+Math.random()*300));const y=await fetch(hT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)});if(!y.ok){let b="";try{const C=await y.json();b=C?.error||C?.message||""}catch{}throw new Error(`提交失败(${y.status}) ${b}`)}o.value=Date.now(),localStorage.setItem("join_last_submit",String(o.value)),r.value=!0,setTimeout(()=>r.value=!1,2500),e.majorClass="",e.studentId="",e.name="",e.stack="",e.customStack="",e.message="",Object.keys(t).forEach(b=>t[b]=!1)}catch(m){s.value=m?.message||"提交出错，请稍后再试"}finally{i.value=!1}}}function g(m){t[m]=!0}return(m,h)=>(le(),ue("div",V1,[D("form",{onSubmit:mn(v,["prevent"]),class:"space-y-5"},[D("div",G1,[D("label",null,[h[21]||(h[21]=dt("请不要填写此字段",-1)),Ae(D("input",{autocomplete:"off",tabindex:"-1","onUpdate:modelValue":h[0]||(h[0]=w=>d.value=w),class:"pointer-events-none opacity-0"},null,512),[[On,d.value]])])]),D("div",null,[D("div",W1,[Ae(D("input",{"onUpdate:modelValue":h[1]||(h[1]=w=>e.majorClass=w),onFocus:h[2]||(h[2]=w=>g("majorClass")),onBlur:h[3]||(h[3]=w=>g("majorClass")),"aria-invalid":!!(t.majorClass&&f.value.majorClass),placeholder:"专业与班级",inputmode:"text",autocomplete:"organization-title",enterkeyhint:"next",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"},null,40,X1),[[On,e.majorClass,void 0,{trim:!0}]]),h[22]||(h[22]=D("label",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"}," 专业与班级 ",-1))]),t.majorClass&&f.value.majorClass?(le(),ue("p",$1,It(f.value.majorClass),1)):Ut("",!0)]),D("div",q1,[D("div",null,[D("div",j1,[Ae(D("input",{"onUpdate:modelValue":h[4]||(h[4]=w=>e.studentId=w),onFocus:h[5]||(h[5]=w=>g("studentId")),onBlur:h[6]||(h[6]=w=>g("studentId")),inputmode:"numeric",autocomplete:"on",enterkeyhint:"next",placeholder:"学号",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"},null,544),[[On,e.studentId,void 0,{trim:!0}]]),h[23]||(h[23]=D("label",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"}," 学号 ",-1))]),t.studentId&&f.value.studentId?(le(),ue("p",Y1,It(f.value.studentId),1)):Ut("",!0)]),D("div",null,[D("div",K1,[Ae(D("input",{"onUpdate:modelValue":h[7]||(h[7]=w=>e.name=w),onFocus:h[8]||(h[8]=w=>g("name")),onBlur:h[9]||(h[9]=w=>g("name")),inputmode:"text",autocomplete:"name",autocapitalize:"off",enterkeyhint:"next",placeholder:"姓名",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/40 transition text-base px-4 pt-6 pb-2 placeholder-transparent"},null,544),[[On,e.name,void 0,{trim:!0}]]),h[24]||(h[24]=D("label",{class:"absolute left-4 top-1/2 -translate-y-1/2 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"}," 姓名 ",-1))]),t.name&&f.value.name?(le(),ue("p",Z1,It(f.value.name),1)):Ut("",!0)])]),D("div",null,[h[25]||(h[25]=D("div",{class:"text-sm text-emerald-100/80 mb-2"},"优势点",-1)),D("div",J1,[D("button",{type:"button",onClick:h[10]||(h[10]=w=>{e.stack="硬件",e.customStack="",g("stack")}),class:Mn(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm",e.stack==="硬件"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 硬件 ",2),D("button",{type:"button",onClick:h[11]||(h[11]=w=>{e.stack="软件",e.customStack="",g("stack")}),class:Mn(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm",e.stack==="软件"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 软件 ",2),D("button",{type:"button",onClick:h[12]||(h[12]=w=>{e.stack="管理",e.customStack="",g("stack")}),class:Mn(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm",e.stack==="管理"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 管理 ",2),e.stack!=="其他"?(le(),ue("button",{key:0,type:"button",onClick:h[13]||(h[13]=w=>{e.stack="其他",g("stack")}),class:Mn(["px-3 py-3 rounded-xl border transition active:scale-[0.98] text-sm col-span-3",e.stack==="其他"?"border-emerald-400/60 bg-emerald-400/15 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]":"border-white/10 bg-white/5 hover:border-emerald-400/30"])}," 其他（点击填写） ",2)):Ut("",!0),e.stack==="其他"?(le(),ue("div",Q1,[Ae(D("input",{"onUpdate:modelValue":h[14]||(h[14]=w=>e.customStack=w),onFocus:h[15]||(h[15]=w=>{g("stack"),t.customStack=!0}),onBlur:h[16]||(h[16]=w=>g("stack")),maxlength:"20",placeholder:"请输入你的自定义优势 (20字内)",class:"peer w-full rounded-xl bg-white/5 border border-emerald-400/60 text-white focus:outline-none focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/30 transition text-base pl-4 pr-14 py-3 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"},null,544),[[On,e.customStack,void 0,{trim:!0}]]),D("button",{type:"button","aria-label":"取消自定义",onClick:h[17]||(h[17]=w=>{e.stack="",e.customStack="",g("stack")}),class:"absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-md bg-white/10 hover:bg-white/15 flex items-center justify-center text-emerald-100/80 leading-none active:scale-[0.95]"}," ✕ "),D("div",eT,It(e.customStack?.length||0)+"/20",1)])):Ut("",!0)]),t.stack&&f.value.stack?(le(),ue("p",tT,It(f.value.stack),1)):Ut("",!0)]),D("div",null,[D("div",nT,[Ae(D("textarea",{"onUpdate:modelValue":h[18]||(h[18]=w=>e.message=w),onFocus:h[19]||(h[19]=w=>g("message")),onBlur:h[20]||(h[20]=w=>g("message")),maxlength:us+20,rows:"5",inputmode:"text",enterkeyhint:"send",placeholder:"想说的话",class:"peer w-full rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/40 transition text-base px-4 pt-7 pb-3 resize-none placeholder-transparent"},null,40,iT),[[On,e.message]]),h[26]||(h[26]=D("label",{class:"absolute left-4 top-4 text-emerald-100/60 transition-all pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-emerald-200 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"}," 想说的话 ",-1)),D("div",rT,[D("div",sT,[D("div",{class:"h-full bg-gradient-to-r from-emerald-400 to-cyan-400",style:oi({width:Math.min(100,Math.round(e.message.length/us*100))+"%"})},null,4)]),D("span",oT,It(e.message.length)+" / "+It(us),1)])]),t.message&&f.value.message?(le(),ue("p",aT,It(f.value.message),1)):Ut("",!0)]),D("button",{disabled:i.value||!p.value||c.value>0,onClick:mn(v,["prevent"]),class:"w-full py-4 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] active:scale-[0.99]",style:{"margin-bottom":"calc(env(safe-area-inset-bottom) + 8px)"}},[c.value>0?(le(),ue("span",cT,"冷却 "+It(c.value)+"s…",1)):(le(),ue("span",uT,It(i.value?"提交中…":"提交报名"),1))],8,lT),h[27]||(h[27]=D("p",{class:"text-center text-xs text-emerald-100/60"},"提交后请耐心等待 静候开学后相关通知",-1)),s.value?(le(),ue("p",dT,It(s.value),1)):Ut("",!0)],32),r.value?(le(),ue("div",fT," 提交成功，感谢支持！ ")):Ut("",!0)]))}}),gT=Vn(mT,[["__scopeId","data-v-bd594de0"]]),_T=24,vT=Kt({__name:"JoinGlow",props:{active:{type:Boolean},burstKey:{}},setup(n){const e=n,t=et(null);let i=0,r=null,s=0,o=0,a=Math.min(window.devicePixelRatio||1,2),l=!1,c=[],d=[];function u(y,b){return Math.random()*(b-y)+y}function f(){const y=t.value,b=y.getBoundingClientRect();s=Math.floor(b.width),o=Math.floor(b.height),a=Math.min(window.devicePixelRatio||1,2),y.width=Math.max(1,Math.floor(s*a)),y.height=Math.max(1,Math.floor(o*a)),r=y.getContext("2d"),r&&r.setTransform(a,0,0,a,0,0)}function p(){const y=Math.floor(_T*Math.min(1.5,Math.max(.8,s*o/304200)));c=Array.from({length:y},()=>({x:u(0,s),y:u(0,o),vx:u(-.12,.12),vy:u(-.12,.12),r:u(.6,1.8),hue:u(150,210),alpha:u(.25,.6)}))}function v(){const y=s/2,b=Math.min(o*.45,o-80);d.push(...Array.from({length:90},()=>{const L=u(0,Math.PI*2),P=u(.6,2.2);return{x:y+u(-10,10),y:b+u(-10,10),vx:Math.cos(L)*P,vy:Math.sin(L)*P-u(.2,.6),r:u(1.2,2.6),hue:u(140,220),life:0,maxLife:u(42,70)}}))}function g(){if(!r)return;const y=r.createRadialGradient(s/2,o/2,0,s/2,o/2,Math.max(s,o)*.7);y.addColorStop(0,"rgba(16,255,192,0.04)"),y.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=y,r.fillRect(0,0,s,o)}function m(){if(r){r.fillStyle="rgba(0,0,0,0.35)",r.fillRect(0,0,s,o),g();for(const y of c)y.x+=y.vx,y.y+=y.vy,y.x<-10&&(y.x=s+10),y.x>s+10&&(y.x=-10),y.y<-10&&(y.y=o+10),y.y>o+10&&(y.y=-10),r.beginPath(),r.fillStyle=`hsla(${y.hue}, 80%, 70%, ${y.alpha})`,r.arc(y.x,y.y,y.r,0,Math.PI*2),r.fill();for(let y=d.length-1;y>=0;y--){const b=d[y];b.life+=1,b.x+=b.vx,b.y+=b.vy,b.vy+=.02;const C=1-b.life/b.maxLife;r.beginPath(),r.fillStyle=`hsla(${b.hue}, 90%, 70%, ${Math.max(0,C)})`,r.arc(b.x,b.y,b.r*(.8+.4*C),0,Math.PI*2),r.fill(),b.life>=b.maxLife&&d.splice(y,1)}l&&(i=requestAnimationFrame(m))}}function h(){l||(l=!0,f(),p(),r?.clearRect(0,0,s,o),i=requestAnimationFrame(m))}function w(){l=!1,cancelAnimationFrame(i)}return mi(()=>{const y=()=>{f(),p()};window.addEventListener("resize",y),zm(()=>{e.active?h():w()}),cr(()=>e.burstKey,()=>{e.active&&(d.splice(0,d.length),v())})}),Bi(()=>{w(),window.removeEventListener("resize",f)}),(y,b)=>(le(),ue("canvas",{ref_key:"canvasRef",ref:t,class:"absolute inset-0 w-full h-full pointer-events-none select-none"},null,512))}}),xT={class:"relative z-10 w-full max-w-screen-md mx-auto text-center"},bT={class:"text-lg sm:text-xl mt-3 text-white font-semibold",reveal:{delay:120}},yT={class:"mt-3 sm:mt-4 text-sm sm:text-base text-emerald-100/80 max-w-md mx-auto px-1",reveal:{delay:200}},ST={class:"mt-1 text-xs sm:text-sm text-emerald-100/70 max-w-md mx-auto px-1",reveal:{delay:220}},MT={class:"mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6",reveal:{delay:260}},ET={class:"relative z-10 mt-9 sm:mt-12",reveal:{delay:340}},TT=Kt({__name:"JoinUsSection",setup(n){const e=et(null),t=et(!1),i=et(0);let r=null;return mi(()=>{r=new IntersectionObserver(s=>{const o=s[0];o&&(o.isIntersecting?(t.value=!0,i.value++):t.value=!1)},{threshold:.35}),e.value&&r.observe(e.value)}),Bi(()=>{r?.disconnect(),r=null}),(s,o)=>{const a=di("reveal");return Ae((le(),ue("div",{id:"join",ref_key:"joinRef",ref:e,class:"relative px-4 sm:px-5 py-16 sm:py-20 overflow-hidden cv-auto"},[it(vT,{active:t.value,"burst-key":i.value},null,8,["active","burst-key"]),Ae((le(),ue("div",xT,[o[4]||(o[4]=D("h2",{class:"text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]"},[dt(" 加入我们，"),D("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300"},"一起"),dt("把灵感上线 ")],-1)),Ae((le(),ue("p",bT,[...o[0]||(o[0]=[dt("让知识开花",-1)])])),[[a,void 0,'"up"']]),Ae((le(),ue("p",yT,[...o[1]||(o[1]=[dt("扫码进群 / 关注学校官方通知",-1)])])),[[a,void 0,'"fade"']]),Ae((le(),ue("p",ST,[...o[2]||(o[2]=[dt("或者在下面的表格留个名，我们会多关照哦",-1)])])),[[a,void 0,'"fade"']]),Ae((le(),ue("div",MT,[...o[3]||(o[3]=[en('<div class="flex flex-col items-center"><div class="relative group"><div class="p-[2px] rounded-2xl bg-[linear-gradient(140deg,rgba(255,255,255,0.85),rgba(255,255,255,0.55),rgba(255,255,255,0.78))] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_0_22px_4px_rgba(255,255,255,0.55),0_6px_28px_-8px_rgba(16,185,129,0.25)]"><div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative"><img src="'+z1+'" alt="官方迎新群二维码" class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.015]" decoding="async" loading="lazy"><div class="pointer-events-none absolute inset-0 ring-1 ring-black/5"></div><div class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-60 bg-[radial-gradient(circle_at_25%_30%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(34,211,238,0.16),transparent_60%)]"></div></div></div><div class="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.45),transparent_70%)]"></div></div><div class="mt-2 text-[10px] sm:text-xs text-emerald-100/80 tracking-wide">官方迎新群</div></div><div class="flex flex-col items-center"><div class="relative group"><div class="p-[2.5px] rounded-2xl bg-gradient-to-tr from-cyan-400/80 via-emerald-400/60 to-white/70 shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_0_22px_4px_rgba(34,211,238,0.18),0_6px_28px_-8px_rgba(16,185,129,0.18)]"><div class="size-24 sm:size-28 rounded-xl overflow-hidden bg-white relative"><img src="'+H1+'" alt="官Q二维码" class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]" decoding="async" loading="lazy"><div class="pointer-events-none absolute inset-0 ring-1 ring-cyan-400/10"></div><div class="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-70 bg-[radial-gradient(circle_at_25%_30%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(16,185,129,0.14),transparent_60%)]"></div></div></div><div class="pointer-events-none absolute -inset-3 rounded-2xl opacity-80 group-hover:opacity-100 transition duration-500 blur-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.55),rgba(16,185,129,0.25),transparent_80%)]"></div></div><div class="mt-2 text-[10px] sm:text-xs text-cyan-200/80 tracking-wide font-semibold">电子俱乐部官方QQ</div></div>',2)])])),[[a,void 0,'"pop"']])])),[[a,void 0,'"pop"']]),Ae((le(),ue("div",ET,[it(gT)])),[[a,void 0,'"pop"']])])),[[a]])}}}),wT={class:"fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 z-50 flex flex-col items-end gap-3"},AT={key:0},RT={key:1},CT=Kt({__name:"FloatingUI",setup(n){const e=et(!1),t=et(!1),i=et(!1);let r=null;function s(){const l=document.documentElement.scrollTop||document.body.scrollTop;e.value=l>240}function o(){if(r=window.__bgm||null,!r){t.value=!1;return}t.value=!0,r.paused?r.play().then(()=>{i.value=!0}).catch(()=>{}):(r.pause(),i.value=!1)}mi(()=>{window.addEventListener("scroll",s,{passive:!0}),s(),r=window.__bgm||null,t.value=!!r,r?r.play().then(()=>{i.value=!0}).catch(()=>{i.value=!1}):i.value=!1}),Bi(()=>{window.removeEventListener("scroll",s)});function a(){window.scrollTo({top:0,behavior:"smooth"})}return(l,c)=>(le(),ue("div",wT,[t.value?(le(),ue("button",{key:0,onClick:o,class:"relative w-12 h-12 flex items-center justify-center p-0 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white shadow-lg active:scale-95 transition"},[i.value?(le(),ue("span",AT,"🔊")):(le(),ue("span",RT,"🔈"))])):Ut("",!0),Ae(D("button",{onClick:a,class:"relative w-12 h-12 flex items-center justify-center p-0 rounded-full bg-gradient-to-tr from-emerald-400/90 to-cyan-400/90 text-black font-bold shadow-lg active:scale-95 transition border border-white/20"}," ↑ ",512),[[Th,e.value]])]))}}),PT={class:"relative text-white scroll-smooth overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-950 to-black"},DT={class:"relative z-20 text-white"},LT=Kt({__name:"ClubPoster",setup(n){return(e,t)=>(le(),ue("section",PT,[t[0]||(t[0]=en('<div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0" data-v-d871c9fd><div class="absolute -top-[60vh] -left-[50vw] w-[160vw] h-[160vh] rounded-full bg-emerald-400/35 blur-[200px] opacity-40" style="will-change:transform, opacity;" data-v-d871c9fd></div><div class="absolute top-[20vh] -right-[60vw] w-[140vw] h-[140vh] rounded-full bg-cyan-400/35 blur-[200px] opacity-30" style="will-change:transform, opacity;" data-v-d871c9fd></div><div class="absolute bottom-[-50vh] left-[-20vw] w-[130vw] h-[130vh] rounded-full bg-emerald-300/30 blur-[200px] opacity-50" style="will-change:transform, opacity;" data-v-d871c9fd></div><div class="absolute inset-x-0 top-[-10vh] h-[100vh] bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(16,185,129,0.45)_40%,rgba(34,211,238,0.45)_60%,rgba(34,211,238,0)_100%)] opacity-20 blur-2xl" style="will-change:transform, opacity;" data-v-d871c9fd></div><div class="absolute inset-x-0 top-[60vh] h-[100vh] bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(34,211,238,0.4)_50%,rgba(16,185,129,0)_100%)] opacity-15 blur-2xl" style="will-change:transform, opacity;" data-v-d871c9fd></div><div class="absolute inset-x-0 top-[140vh] h-[100vh] bg-[linear-gradient(120deg,rgba(16,185,129,0)_0%,rgba(34,211,238,0.35)_50%,rgba(16,185,129,0)_100%)] opacity-10 blur-2xl" style="will-change:transform, opacity;" data-v-d871c9fd></div></div>',1)),D("div",DT,[it(CT),it(lE),it(PE),it(jE),it(i1),it(m1),it(M1),it(k1),it(TT)])]))}}),IT=Vn(LT,[["__scopeId","data-v-d871c9fd"]]),UT="/led1.jpg",NT="/led2.jpg",FT="/led3.jpg",OT={class:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 font-sans overflow-hidden"},BT={class:"fixed inset-0 z-0 pointer-events-none"},kT={class:"absolute inset-0 opacity-5"},zT={class:"grid grid-cols-20 grid-rows-20 h-full w-full"},HT={class:"relative z-10 container mx-auto px-4 py-6 sm:py-8 max-w-6xl"},VT={class:"fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 z-50"},GT={class:"mb-12 sm:mb-20 text-center relative"},WT={class:"max-w-3xl mx-auto"},XT={class:"flex justify-center mb-6 sm:mb-8"},$T={class:"flex gap-1 p-3 sm:p-4 bg-white/70 rounded-full border border-slate-200 backdrop-blur-sm shadow-sm"},qT={class:"mb-12 sm:mb-16",id:"register"},jT={class:"bg-gradient-to-br from-white via-slate-50 to-sky-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-lg"},YT={class:"relative z-10"},KT={key:0,class:"max-w-lg mx-auto space-y-4 sm:space-y-6"},ZT={class:"space-y-3 sm:space-y-4"},JT={class:"space-y-1 sm:space-y-2"},QT={class:"space-y-2"},ew={class:"space-y-2"},tw={class:"space-y-2"},nw={key:1,class:"text-center max-w-md mx-auto animate-fade-in"},iw={class:"fixed inset-0 pointer-events-none z-0"},rw=Kt({__name:"LedCompetitionView",setup(n){const e=i_(),t=et({name:"",studentId:"",contact:"",teamName:"",note:""}),i=et(1),r=et(!1);function s(){if(!t.value.name||!t.value.contact){alert("请填写必要信息");return}i.value=2}function o(){e.push("/")}const a=et(!1);function l(){const d=document.documentElement.scrollTop||document.body.scrollTop;a.value=d>240}function c(){window.scrollTo({top:0,behavior:"smooth"})}return mi(()=>{setTimeout(()=>{r.value=!0},100),window.addEventListener("scroll",l,{passive:!0}),l()}),Bi(()=>{window.removeEventListener("scroll",l)}),(d,u)=>(le(),ue("div",OT,[D("div",BT,[D("div",kT,[D("div",zT,[(le(),ue(At,null,Di(400,f=>D("div",{key:f,class:"border border-slate-300/20 relative overflow-hidden"},[D("div",{class:"absolute inset-0 bg-slate-200/10 animate-pulse",style:oi(`animation-delay: ${Math.random()*3}s; animation-duration: ${2+Math.random()*4}s`)},null,4)])),64))])]),u[5]||(u[5]=en('<div class="absolute top-1/4 left-1/4 w-64 h-64 opacity-3" data-v-05318c50><svg class="w-full h-full" viewBox="0 0 200 200" data-v-05318c50><path d="M20,20 L180,20 L180,180 L20,180 Z" stroke="url(#circuit-gradient-light)" stroke-width="1" fill="none" data-v-05318c50></path><circle cx="50" cy="50" r="2" fill="#0ea5e9" class="animate-pulse" data-v-05318c50></circle><circle cx="150" cy="150" r="2" fill="#10b981" class="animate-pulse" data-v-05318c50></circle><path d="M50,50 L100,100 L150,150" stroke="url(#circuit-gradient-light)" stroke-width="0.5" fill="none" data-v-05318c50></path><defs data-v-05318c50><linearGradient id="circuit-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%" data-v-05318c50><stop offset="0%" stop-color="#0ea5e9" data-v-05318c50></stop><stop offset="100%" stop-color="#10b981" data-v-05318c50></stop></linearGradient></defs></svg></div><div class="absolute top-1/3 right-1/4 w-32 h-32 bg-sky-200/20 blur-[60px] rounded-full animate-pulse" data-v-05318c50></div><div class="absolute bottom-1/4 left-1/3 w-40 h-40 bg-emerald-200/15 blur-[80px] rounded-full animate-pulse" style="animation-delay:2s;" data-v-05318c50></div>',3))]),D("div",HT,[D("div",VT,[Ae(D("button",{onClick:c,class:"relative w-12 h-12 flex items-center justify-center p-0 rounded-full bg-gradient-to-tr from-sky-400/90 to-emerald-400/90 text-white font-bold shadow-lg active:scale-95 transition border border-white/20 backdrop-blur-md"}," ↑ ",512),[[Th,a.value]])]),D("header",{class:"flex justify-between items-center mb-8 sm:mb-16"},[D("button",{onClick:o,class:"group text-sky-600 hover:text-sky-700 flex items-center gap-2 transition-all duration-300 backdrop-blur-sm bg-white/80 px-4 py-2 rounded-full border border-slate-200 hover:border-sky-300 cursor-pointer shadow-sm"},[...u[6]||(u[6]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),dt(" 返回首页 ",-1)])]),u[7]||(u[7]=D("div",{class:"text-lg sm:text-xl font-bold tracking-wider bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent"}," 电子俱乐部·比赛专区 ",-1))]),D("section",GT,[u[9]||(u[9]=en('<div class="relative inline-block" data-v-05318c50><div class="absolute -inset-8 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 blur-2xl rounded-full" data-v-05318c50></div><h1 class="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 relative" data-v-05318c50><span class="block transform hover:scale-105 transition-transform duration-500 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent" data-v-05318c50> LED 创意大赛 </span><span class="block text-xl sm:text-2xl md:text-5xl mt-1 sm:mt-2 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent" data-v-05318c50> 无限创意 点亮未来 </span></h1></div>',1)),D("div",WT,[u[8]||(u[8]=D("p",{class:"text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-300"}," 这不是普通的点亮实验！我们邀请你用最经典的51单片机，驾驭那些看似简单的LED小灯，创造出令人惊叹的光之舞蹈。 ",-1)),D("div",XT,[D("div",$T,[(le(),ue(At,null,Di(12,f=>D("div",{key:f,class:Mn(["w-2 h-6 sm:w-3 sm:h-8 rounded-full animate-pulse",f%3===0?"bg-emerald-500":f%3===1?"bg-cyan-500":"bg-blue-500"]),style:oi(`animation-delay: ${f*.1}s`)},null,6)),64))])])])]),u[19]||(u[19]=en('<section class="mb-12 sm:mb-20" data-v-05318c50><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-v-05318c50><div class="group bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-sky-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm" data-v-05318c50><div class="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-sky-200 transition-colors" data-v-05318c50><svg class="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-05318c50><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-05318c50></path></svg></div><h3 class="text-lg sm:text-xl font-bold text-sky-700 mb-1 sm:mb-2" data-v-05318c50>技术挑战</h3><p class="text-slate-600 text-sm" data-v-05318c50>用51单片机创造LED艺术，展现你的编程实力</p></div><div class="group bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-amber-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm" data-v-05318c50><div class="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors" data-v-05318c50><svg class="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-05318c50><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-v-05318c50></path></svg></div><h3 class="text-lg sm:text-xl font-bold text-amber-700 mb-1 sm:mb-2" data-v-05318c50>创意无限</h3><p class="text-slate-600 text-sm" data-v-05318c50>心跳呼吸、星辰流光，你的想象力是唯一的边界</p></div><div class="group bg-gradient-to-br from-violet-50 to-white border border-violet-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-violet-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm" data-v-05318c50><div class="w-10 h-10 sm:w-12 sm:h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-violet-200 transition-colors" data-v-05318c50><svg class="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-05318c50><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-05318c50></path></svg></div><h3 class="text-lg sm:text-xl font-bold text-violet-700 mb-1 sm:mb-2" data-v-05318c50>丰厚奖品</h3><p class="text-slate-600 text-sm" data-v-05318c50>超多奖品奖状等你来拿，技术实力换真金白银</p></div></div></section><div class="grid md:grid-cols-2 gap-8 mb-20" data-v-05318c50><div class="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 backdrop-blur-md hover:border-sky-300 transition-all duration-500 shadow-sm" data-v-05318c50><div class="flex items-center mb-6" data-v-05318c50><div class="w-1 h-10 bg-gradient-to-b from-sky-500 to-emerald-500 rounded-full mr-4" data-v-05318c50></div><h2 class="text-3xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent" data-v-05318c50> 赛事详情 </h2></div><div class="space-y-6" data-v-05318c50><div class="relative pl-6 border-l-2 border-emerald-500/30" data-v-05318c50><div class="absolute -left-2 top-2 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" data-v-05318c50></div><p class="text-slate-600 leading-relaxed" data-v-05318c50>无论是心跳般的呼吸闪烁，还是星辰般的随机流光，你的想象力是唯一的边界。</p></div><div class="relative pl-6 border-l-2 border-cyan-500/30" data-v-05318c50><div class="absolute -left-2 top-2 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style="animation-delay:0.5s;" data-v-05318c50></div><p class="text-slate-600 leading-relaxed" data-v-05318c50>按下电源键，让代码在灯光中流淌。这不仅是技术比拼，更是一场关于光与美的创作盛宴。</p></div><div class="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 border border-sky-200 mt-6" data-v-05318c50><p class="text-sky-800 font-semibold text-lg mb-2" data-v-05318c50>期待你用51单片机，写出最动人的光影诗篇！</p><p class="text-sm text-sky-700" data-v-05318c50>本次比赛赛制简单，有多大想象力就拿多大奖，我们已经准备好超多奖品奖状等你来拿!</p></div></div></div><div class="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 backdrop-blur-md hover:border-emerald-300 transition-all duration-500 shadow-sm" data-v-05318c50><div class="flex items-center mb-6" data-v-05318c50><div class="w-1 h-10 bg-gradient-to-b from-emerald-500 to-sky-500 rounded-full mr-4" data-v-05318c50></div><h2 class="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent" data-v-05318c50> 赛题专栏 </h2></div><div class="space-y-6" data-v-05318c50><div class="group/item bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl p-5 border border-emerald-200 hover:border-emerald-300 transition-all duration-300" data-v-05318c50><div class="flex items-start gap-4" data-v-05318c50><div class="bg-gradient-to-br from-emerald-500 to-sky-500 text-white px-3 py-1 rounded-lg font-mono text-sm font-bold" data-v-05318c50> TOPIC 01 </div><div class="flex-1" data-v-05318c50><h3 class="font-bold text-slate-800 text-lg mb-2" data-v-05318c50>自由创意</h3><p class="text-slate-600 text-sm leading-relaxed" data-v-05318c50>不限形式，不限逻辑，只要是用51单片机控制LED即可。让你的创意在光影中绽放！</p></div></div></div><div class="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-5 border border-slate-300 opacity-60" data-v-05318c50><div class="flex items-start gap-4" data-v-05318c50><div class="bg-slate-400 text-slate-600 px-3 py-1 rounded-lg font-mono text-sm font-bold" data-v-05318c50> TOPIC 02 </div><div class="flex-1" data-v-05318c50><h3 class="font-bold text-slate-500 text-lg mb-2" data-v-05318c50>敬请期待</h3><p class="text-slate-400 text-sm leading-relaxed" data-v-05318c50>更多赛题即将解锁，关注我们的最新动态...</p></div></div></div></div></div></div><section class="mb-12 sm:mb-20" data-v-05318c50><h2 class="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent" data-v-05318c50> 往届精彩瞬间 </h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-v-05318c50><div class="sm:hidden text-center mb-4" data-v-05318c50><p class="text-slate-500 text-sm flex items-center justify-center gap-2" data-v-05318c50><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-05318c50><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" data-v-05318c50></path></svg> 左右滑动查看更多图片 </p></div><div class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-sky-300 transition-all duration-300 shadow-sm" data-v-05318c50><div class="aspect-video bg-gradient-to-br from-sky-50 to-slate-50 flex items-center justify-center overflow-hidden" data-v-05318c50><img src="'+UT+'" alt="LED创意作品展示" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-v-05318c50><div class="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-05318c50></div></div><div class="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-05318c50><div class="absolute bottom-4 left-4 right-4" data-v-05318c50><p class="text-white font-semibold" data-v-05318c50>LED创意作品展示</p><p class="text-slate-300 text-sm" data-v-05318c50>参赛者们的精彩创意</p></div></div></div><div class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 transition-all duration-300 shadow-sm" data-v-05318c50><div class="aspect-video bg-gradient-to-br from-emerald-50 to-slate-50 flex items-center justify-center overflow-hidden" data-v-05318c50><img src="'+NT+'" alt="作品制作过程" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-v-05318c50><div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-05318c50></div></div><div class="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-05318c50><div class="absolute bottom-4 left-4 right-4" data-v-05318c50><p class="text-white font-semibold" data-v-05318c50>技术制作过程</p><p class="text-slate-300 text-sm" data-v-05318c50>从代码到实物的蜕变</p></div></div></div><div class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-violet-300 transition-all duration-300 shadow-sm" data-v-05318c50><div class="aspect-video bg-gradient-to-br from-violet-50 to-slate-50 flex items-center justify-center overflow-hidden" data-v-05318c50><img src="'+FT+'" alt="获奖作品展示" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-v-05318c50><div class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-05318c50></div></div><div class="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-05318c50><div class="absolute bottom-4 left-4 right-4" data-v-05318c50><p class="text-white font-semibold" data-v-05318c50>获奖作品</p><p class="text-slate-300 text-sm" data-v-05318c50>最具创意奖作品</p></div></div></div></div></section>',3)),D("section",qT,[D("div",jT,[u[18]||(u[18]=D("div",{class:"absolute inset-0 opacity-3"},[D("div",{class:"absolute inset-0",style:{"background-image":"radial-gradient(circle at 25% 25%, #0ea5e9 1px, transparent 1px), radial-gradient(circle at 75% 75%, #10b981 1px, transparent 1px)","background-size":"40px 40px"}})],-1)),D("div",YT,[u[17]||(u[17]=D("div",{class:"text-center mb-6 sm:mb-10"},[D("h2",{class:"text-2xl sm:text-4xl font-bold text-slate-800 mb-2 sm:mb-4"},"立即报名"),D("p",{class:"text-slate-600 text-sm sm:text-base"},"加入这场光影与代码的盛宴")],-1)),i.value===1?(le(),ue("div",KT,[D("div",ZT,[D("div",JT,[u[10]||(u[10]=D("label",{class:"text-sm text-sky-700 font-medium flex items-center gap-2"},[D("span",{class:"w-2 h-2 bg-sky-500 rounded-full animate-pulse"}),dt(" 姓名 ")],-1)),Ae(D("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>t.value.name=f),type:"text",class:"w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg placeholder-slate-400",placeholder:"请输入你的姓名"},null,512),[[On,t.value.name]])]),D("div",QT,[u[11]||(u[11]=D("label",{class:"text-sm text-sky-700 font-medium flex items-center gap-2"},[D("span",{class:"w-2 h-2 bg-sky-500 rounded-full animate-pulse",style:{"animation-delay":"0.2s"}}),dt(" 学号 ")],-1)),Ae(D("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>t.value.studentId=f),type:"text",class:"w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg placeholder-slate-400",placeholder:"请输入你的学号"},null,512),[[On,t.value.studentId]])]),D("div",ew,[u[12]||(u[12]=D("label",{class:"text-sm text-sky-700 font-medium flex items-center gap-2"},[D("span",{class:"w-2 h-2 bg-sky-500 rounded-full animate-pulse",style:{"animation-delay":"0.4s"}}),dt(" 联系方式 (QQ/微信/手机) ")],-1)),Ae(D("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>t.value.contact=f),type:"text",class:"w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg placeholder-slate-400",placeholder:"方便我们联系你"},null,512),[[On,t.value.contact]])]),D("div",tw,[u[13]||(u[13]=D("label",{class:"text-sm text-sky-700 font-medium flex items-center gap-2"},[D("span",{class:"w-2 h-2 bg-sky-500 rounded-full animate-pulse",style:{"animation-delay":"0.6s"}}),dt(" 备注 (选填) ")],-1)),Ae(D("textarea",{"onUpdate:modelValue":u[3]||(u[3]=f=>t.value.note=f),class:"w-full bg-white/80 border border-slate-300 rounded-xl px-4 py-3 sm:py-4 text-slate-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 backdrop-blur-sm h-20 sm:h-24 resize-none text-base sm:text-lg placeholder-slate-400",placeholder:"有什么想说的..."},null,512),[[On,t.value.note]])])]),D("button",{onClick:s,class:"w-full bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-500 active:from-sky-400 active:via-blue-400 active:to-emerald-400 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-lg shadow-sky-500/20 transform transition-all duration-300 active:scale-[0.98] cursor-pointer relative overflow-hidden group touch-manipulation"},[...u[14]||(u[14]=[D("span",{class:"relative z-10"},"下一步：支付报名费",-1),D("div",{class:"absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-opacity duration-300"},null,-1)])])])):(le(),ue("div",nw,[u[16]||(u[16]=en('<div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-slate-200" data-v-05318c50><div class="w-56 h-56 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-slate-600 text-sm mx-auto border-4 border-white/70 shadow-xl" data-v-05318c50><div class="text-center" data-v-05318c50><svg class="w-16 h-16 mx-auto mb-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-05318c50><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" data-v-05318c50></path></svg><p data-v-05318c50>收款二维码</p></div></div></div><p class="text-xl font-bold text-slate-800 mb-4" data-v-05318c50>请扫描上方二维码支付</p><div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 mb-6 border border-amber-200" data-v-05318c50><p class="text-base text-amber-700 mb-2" data-v-05318c50><span class="inline-block w-6 h-6 bg-amber-500 rounded-full text-white font-bold mr-2 text-center" data-v-05318c50>⚠</span> 重要提醒 </p><p class="text-sm text-amber-600" data-v-05318c50> 支付时请务必在<span class="font-bold text-slate-800 underline mx-1" data-v-05318c50>备注</span>中填写你的<span class="font-bold text-slate-800 mx-1" data-v-05318c50>姓名+学号</span>，否则无法确认报名！ </p></div>',3)),D("button",{onClick:u[4]||(u[4]=f=>i.value=1),class:"group text-slate-500 hover:text-sky-600 text-sm underline cursor-pointer transition-colors"},[...u[15]||(u[15]=[D("span",{class:"flex items-center gap-2"},[D("svg",{class:"w-4 h-4 group-hover:-translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})]),dt(" 返回修改信息 ")],-1)])])]))])])]),D("div",iw,[(le(),ue(At,null,Di(15,f=>D("div",{key:f,class:Mn(["absolute w-1 h-1 rounded-full animate-ping opacity-30",Math.random()>.5?"bg-sky-400":"bg-emerald-400"]),style:oi(`
               left: ${Math.random()*100}%;
               top: ${Math.random()*100}%;
               animation-delay: ${Math.random()*5}s;
               animation-duration: ${4+Math.random()*6}s;
             `)},null,6)),64))])])]))}}),sw=Vn(rw,[["__scopeId","data-v-05318c50"]]),ow=n_({history:U0("/"),routes:[{path:"/",name:"home",component:IT},{path:"/led-competition",name:"led-competition",component:sw}],scrollBehavior(n,e,t){return t||{top:0}}}),ha=jg(U_);ha.use(ow);const xp=new IntersectionObserver(n=>{n.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add("reveal-in"),xp.unobserve(t)}})},{threshold:.18,rootMargin:"0px 0px -10% 0px"});ha.directive("reveal",{mounted(n,e){n.classList.add("reveal-init","reveal-anim");const t=typeof e.value=="object"&&e.value?e.value:{},i=e.arg||t.variant;i&&n.classList.add("reveal-"+i);const r=t.delay||0;r&&(n.style.transitionDelay=r+"ms"),xp.observe(n)}});ha.directive("tilt",{mounted(n,e){const t=navigator.userAgent;if(/Mobi|Android|iPhone|iPad|iPod|Phone/i.test(t))return;const r=typeof e.value=="object"&&e.value?e.value:{},s=Number(r.max||e.value||10),o=Number(r.scale||1.02),a=Number(r.perspective||800);let l=0,c=!1;const d=()=>{c=!0,n.style.willChange="transform",n.style.transition="transform 180ms ease",n.classList.add("tilt-active")},u=()=>{c=!1,cancelAnimationFrame(l),n.style.transform=`perspective(${a}px)`,n.style.transition="transform 220ms cubic-bezier(.2,.6,.2,1)",n.classList.remove("tilt-active")},f=p=>{c&&(cancelAnimationFrame(l),l=requestAnimationFrame(()=>{const v=n.getBoundingClientRect(),g=v.left+v.width/2,m=v.top+v.height/2,h=(p.clientX-g)/(v.width/2),y=(-((p.clientY-m)/(v.height/2))*s).toFixed(2),b=(h*s).toFixed(2);n.style.transform=`perspective(${a}px) rotateX(${y}deg) rotateY(${b}deg) scale(${o})`}))};n.addEventListener("mouseenter",d),n.addEventListener("mousemove",f),n.addEventListener("mouseleave",u),n.__tiltCleanup=()=>{n.removeEventListener("mouseenter",d),n.removeEventListener("mousemove",f),n.removeEventListener("mouseleave",u)}},unmounted(n){n.__tiltCleanup?.()}});ha.mount("#app");(function(){const e=navigator.userAgent;if(!/Mobi|Android|iPhone|iPad|iPod|Phone/i.test(e))return;const i="/bgm.m4a",r=new Audio(i);window.__bgm=r,r.loop=!0,r.preload="auto"})();(function(){if(typeof window>"u"||typeof document>"u")return;const e=document.createElement("div");e.className="scroll-progress";const t=document.createElement("div");t.className="scroll-progress__bar",e.appendChild(t),document.body.appendChild(e);let i=null;const r=()=>{i=null;const o=document.documentElement,a=document.body,l=o.scrollTop||a.scrollTop,c=(o.scrollHeight||a.scrollHeight)-o.clientHeight,d=c>0?Math.min(1,l/c):0;t.style.transform=`scaleX(${d})`},s=()=>{i==null&&(i=requestAnimationFrame(r))};window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),r()})();console.log("咦 竟然是个会看终端的聪明宝宝");console.log("那我在这里加点私货应该也没事吧QwQ");console.log(`
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
