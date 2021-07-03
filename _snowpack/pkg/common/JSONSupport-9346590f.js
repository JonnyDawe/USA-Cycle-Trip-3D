import { c as s$6, o as o$3, t as t$a, m as m$5, y as y$3, n as n$6, l as l$5, p as p$6, e as e$8 } from './Message-70b34921.js';
import { h as h$3, i as i$6, a as a$4, b as h$4, e as e$7, c as d$5, l as l$6, f as y$4, g as h$5, o as o$4, j as n$7, y as y$5, n as n$8, k as u$7, t as t$b, m as i$7, p as a$5, q as f$7, r as s$8, v as u$8 } from './subclass-fe5fcf78.js';
import { D as D$1, b as b$3, m as m$6, s as s$7 } from './promiseUtils-2ff2b194.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e$6=new Set;function i$5(n,i,o=!1){o&&e$6.has(i)||(o&&e$6.add(i),n.warn(`🛑 DEPRECATED - ${i}`));}function t$9(e,i,o={}){if(s$6("esri-deprecation-warnings")){const{moduleName:n}=o;s$5(e,`Function: ${(n?n+"::":"")+i+"()"}`,o);}}function s$5(e,o,t={}){if(s$6("esri-deprecation-warnings")){const{replacement:n,version:r,see:s,warnOnce:a}=t;let c=o;n&&(c+=`\n\t🛠️ Replacement: ${n}`),r&&(c+=`\n\t⚙️ Version: ${r}`),s&&(c+=`\n\t🔗 See ${s} for more details.`),i$5(e,c,a);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$2(o,e,i){let p,c;return void 0===e?(c=o,p=[void 0]):"string"!=typeof e?(c=o,p=[void 0],i=e):(c=e,p=Array.isArray(o)?o:[o]),(o,e)=>{const n=o.constructor.prototype;p.forEach((p=>{const s=h$3(o,p,c);s.write&&"object"!=typeof s.write&&(s.write={}),i&&o$3("write.target",i,s),o$3("write.writer",n[e],s);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$5(e,t,r,o){var c,f=arguments.length,n=f<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(n=(f<3?c(n):f>3?c(t,r,n):c(t,r))||n);return f>3&&n&&Object.defineProperty(t,r,n),n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$8(t){return t&&t.release&&"function"==typeof t.release}function i$4(t){return t&&t.acquire&&"function"==typeof t.acquire}class e$4{constructor(t,i,e,o=1,s=0){if(this.ctor=t,this.acquireFunction=i,this.releaseFunction=e,this.allocationSize=o,this._pool=new Array(s),this._initialSize=s,this.ctor)for(let n=0;n<s;n++)this._pool[n]=new this.ctor;this.allocationSize=Math.max(o,1);}destroy(){this.prune(0);}acquire(...t){let o;if(e$4.test.disabled)o=new this.ctor;else {if(0===this._pool.length){const t=this.allocationSize;for(let i=0;i<t;i++)this._pool[i]=new this.ctor;}o=this._pool.pop();}return this.acquireFunction?this.acquireFunction(o,...t):i$4(o)&&o.acquire(...t),o}release(i){i&&!e$4.test.disabled&&(this.releaseFunction?this.releaseFunction(i):t$8(i)&&i.release(),this._pool.push(i));}prune(t=this._initialSize){if(!(t>=this._pool.length)){for(let i=t;i<this._pool.length;++i){const t=this._pool[i];this._dispose(t);}this._pool.length=t;}}_dispose(t){t.dispose&&"function"==typeof t.dispose&&t.dispose();}}e$4.test={disabled:!1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$7{constructor(t=1){this._seed=t;}set seed(e){this._seed=null==e?Math.random()*t$7._m:e;}getInt(){return this._seed=(t$7._a*this._seed+t$7._c)%t$7._m,this._seed}getFloat(){return this.getInt()/(t$7._m-1)}getIntRange(t,e){return Math.round(this.getFloatRange(t,e))}getFloatRange(e,s){const n=s-e;return e+this.getInt()/t$7._m*n}}t$7._m=2147483647,t$7._a=48271,t$7._c=0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i$3(n,t){return t?n.filter(((n,r,e)=>e.findIndex(t.bind(null,n))===r)):n.filter(((n,t,r)=>r.indexOf(n)===t))}function l$4(t,r,e){if(t$a(t)&&t$a(r))return !0;if(t$a(t)||t$a(r)||t.length!==r.length)return !1;if(e){for(let n=0;n<t.length;n++)if(!e(t[n],r[n]))return !1}else for(let n=0;n<t.length;n++)if(t[n]!==r[n])return !1;return !0}function c$6(n,t,r){let e,o;return r?(e=t.filter((t=>!n.some((n=>r(n,t))))),o=n.filter((n=>!t.some((t=>r(t,n)))))):(e=t.filter((t=>!n.includes(t))),o=n.filter((n=>!t.includes(n)))),{added:e,removed:o}}function s$4(n,t,r){return n&&t?r?n.filter((function(n){return t.findIndex((function(t){return r(n,t)}))>-1})):n.filter((function(n){return t.indexOf(n)>-1})):[]}function a$3(n){return n&&"number"==typeof n.length}function h$2(n,t){const r=n.length;if(0===r)return [];const e=[];for(let o=0;o<r;o+=t)e.push(n.slice(o,o+t));return e}const d$4=!!Array.prototype.fill;function g$4(n,t){if(d$4)return new Array(n).fill(t);const r=new Array(n);for(let e=0;e<n;e++)r[e]=t;return r}function m$4(n,t){void 0===t&&(t=n,n=0);const r=new Array(t-n);for(let e=n;e<t;e++)r[e-n]=e;return r}function p$5(n,t,r){const e=n.length;let o=0,f=e-1;for(;o<f;){const r=o+Math.floor((f-o)/2);t>n[r]?o=r+1:f=r;}const u=n[o];return r?t>=n[e-1]?-1:u===t?o:o-1:u===t?o:-1}function M$1(n){return n.reduce(((n,t)=>n.concat(t||[])),[])}class w$2{constructor(){this.last=0;}}const y$2=new w$2;function b$2(n,t,r,e){e=e||y$2;const o=Math.max(0,e.last-10);for(let u=o;u<r;++u)if(n[u]===t)return e.last=u,u;const f=Math.min(o,r);for(let u=0;u<f;++u)if(n[u]===t)return e.last=u,u;return -1}function v$2(n,t,r,e){const o=null==r?n.length:r,f=b$2(n,t,o,e);if(-1!==f)return n[f]=n[o-1],null==r&&n.pop(),t}const A$1=new Set;function O(n,t,r=n.length,e=t.length,o,f){if(0===e||0===r)return r;A$1.clear();for(let i=0;i<e;++i)A$1.add(t[i]);o=o||y$2;const u=Math.max(0,o.last-10);for(let i=u;i<r;++i)if(A$1.has(n[i])&&(f&&f.push(n[i]),A$1.delete(n[i]),n[i]=n[r-1],--r,--i,0===A$1.size||0===r))return A$1.clear(),r;for(let i=0;i<u;++i)if(A$1.has(n[i])&&(f&&f.push(n[i]),A$1.delete(n[i]),n[i]=n[r-1],--r,--i,0===A$1.size||0===r))return A$1.clear(),r;return A$1.clear(),r}function z(n){return n?(S$1.seed=n,()=>S$1.getFloat()):Math.random}function I(n,t){const r=z(t);for(let e=n.length-1;e>0;e--){const t=Math.floor(r()*(e+1)),o=n[e];n[e]=n[t],n[t]=o;}return n}const S$1=new t$7;function C(n,t){const r=n.indexOf(t);return -1!==r?(n.splice(r,1),t):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s$3{constructor(r,s){this._observers=r,this._observer=s;}remove(){C(this._observers,this._observer);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class n$5{constructor(s,t,e){this.properties=s,this.propertyName=t,this.metadata=e,this._observers=null,this._accessed=null,this._handles=null,this.flags=1|(e.nonNullable?8:0)|(e.hasOwnProperty("value")?16:0)|(void 0===e.get?32:0)|(void 0===e.dependsOn?64:0);}destroy(){this._accessed=null,this._observers=null,this._clearObservationHandles();}getComputed(){i$6(this);const i=this.properties.store,n=this.propertyName,l=this.flags,r=i.get(n);if(4&l)return r;if(1&~l&&i.has(n))return r;this.flags|=4;const h=this.properties.host;let o;64&l?o=a$4(this,this.metadata.get,h):(h$4(h,this),o=this.metadata.get.call(h)),i.set(n,o,1);const a=i.get(n);return a===r?this.flags&=-2:this.commit(),this.flags&=-5,a}onObservableAccessed(s){s!==this&&(null===this._accessed&&(this._accessed=[]),this._accessed.includes(s)||this._accessed.push(s));}onTrackingEnd(){this._clearObservationHandles(),this.flags|=32;const s=this._accessed;if(null===s)return;let t=this._handles;null===t&&(t=this._handles=[]);for(let e=0;e<s.length;++e)t.push(s[e].observe(this));s.length=0;}observe(s){return null===this._observers&&(this._observers=[]),this._observers.includes(s)||this._observers.push(s),new s$3(this._observers,s)}notifyChange(){this.onInvalidated(),this.onCommitted();}invalidate(){this.onInvalidated();}onInvalidated(){2&~this.flags&&(this.flags|=1);const s=this._observers;if(null!==s)for(let t=0;t<s.length;++t)s[t].onInvalidated();}commit(){this.flags&=-2,this.onCommitted();}onCommitted(){if(null===this._observers)return;const s=this._observers.slice();for(let t=0;t<s.length;++t)s[t].onCommitted();}_clearObservationHandles(){const s=this._handles;if(null!==s){for(let t=0;t<s.length;++t)s[t].remove();s.length=0;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r$5=7;function t$6(e){switch(e){case"defaults":return 0;case"service":return 2;case"portal-item":return 3;case"web-scene":return 4;case"web-map":return 5;case"user":return 6}}function n$4(r){switch(r){case 0:return "defaults";case 2:return "service";case 3:return "portal-item";case 4:return "web-scene";case 5:return "web-map";case 6:return "user"}return m$5(void 0)}function c$5(e){return n$4(e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s$2{constructor(){this._values=new Map;}clone(t){const r=new s$2;return this._values.forEach(((s,a)=>{t&&t.has(a)||r.set(a,y$3(s));})),r}get(e){return this._values.get(e)}originOf(){return 6}keys(){return [...this._values.keys()]}set(e,s){this._values.set(e,s);}delete(e){this._values.delete(e);}has(e){return this._values.has(e)}forEach(e){this._values.forEach(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function p$4(t,e,s){return void 0!==t}function f$6(t,e,s,i){return void 0!==t&&(!(null==s&&8&t.flags)||(i.lifecycle,!1))}function u$6(t){return t&&"function"==typeof t.destroy}n$6.getLogger("esri.core.accessorSupport.Properties");class g$3{constructor(t){this.host=t,this.properties=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=0,this.store=new s$2,this._origin=6;const e=this.host.constructor.__accessorMetadata__,s=e.properties;for(const r in s){const t=new n$5(this,r,s[r]);this.properties.set(r,t);}this.metadatas=s,this._autoDestroy=e.autoDestroy;}initialize(){this.lifecycle=1;}constructed(){this.lifecycle=2;}destroy(){if(this.destroyed=!0,this._autoDestroy)for(const[t,e]of this.properties){const s=this.internalGet(t);s&&u$6(s)&&(s.destroy(),8&~e.flags&&this._internalSet(e,null)),e.destroy();}else for(const[t,e]of this.properties)e.destroy();}get initialized(){return 0!==this.lifecycle}get(t){const e=this.properties.get(t);if(e.metadata.get)return e.getComputed();i$6(e);const s=this.store;return s.has(t)?s.get(t):e.metadata.value}originOf(t){const e=this.store.originOf(t);if(void 0===e){const e=this.properties.get(t);if(void 0!==e&&16&e.flags)return "defaults"}return n$4(e)}has(t){return !!this.properties.has(t)&&this.store.has(t)}keys(){return [...this.properties.keys()]}internalGet(t){const e=this.properties.get(t);if(p$4(e))return this.store.has(t)?this.store.get(t):e.metadata.value}internalSet(t,e){const s=this.properties.get(t);p$4(s)&&this._internalSet(s,e);}getDependsInfo(t,e,s){const r=this.properties.get(e);if(!p$4(r))return "";const o=new Set,n=a$4({onObservableAccessed:t=>o.add(t),onTrackingEnd:()=>{}},(()=>{var e;return null==(e=r.metadata.get)?void 0:e.call(t)}));let a=`${s}${t.declaredClass.split(".").pop()}.${e}: ${n}\n`;if(0===o.size)return a;s+="  ";for(const c of o){if(!(c instanceof n$5))continue;const t=c.properties.host,e=c.propertyName,r=e$7(t);a+=r?r.getDependsInfo(t,e,s):`${s}${e}: undefined\n`;}return a}setAtOrigin(t,e,s){const i=this.properties.get(t);if(p$4(i))return this._setAtOrigin(i,e,s)}isOverridden(t){const e=this.properties.get(t);return void 0!==e&&!!(2&e.flags)}clearOverride(t){const e=this.properties.get(t);void 0!==e&&2&e.flags&&(e.flags&=-3,e.notifyChange());}override(t,e){const s=this.properties.get(t);if(!f$6(s,t,e,this))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(m$3.release(t),!s)return;e=r;}s.flags|=2,this._internalSet(s,e);}set(t,e){const s=this.properties.get(t);if(!f$6(s,t,e,this))return;const i=s.metadata.cast;if(i){const t=this._cast(i,e),{valid:s,value:r}=t;if(m$3.release(t),!s)return;e=r;}const r=s.metadata.set;r?r.call(this.host,e):this._internalSet(s,e);}setDefaultOrigin(t){this._origin=t$6(t);}getDefaultOrigin(){return n$4(this._origin)}notifyChange(t){const e=this.properties.get(t);void 0!==e&&e.notifyChange();}invalidate(t){const e=this.properties.get(t);void 0!==e&&e.invalidate();}commit(t){const e=this.properties.get(t);void 0!==e&&e.commit();}_internalSet(t,e){const s=0!==this.lifecycle?this._origin:0;this._setAtOrigin(t,e,s);}_setAtOrigin(e,s,i){const r=this.store,o=e.propertyName;r.has(o,i)&&l$5(s,r.get(o))&&2&~e.flags&&i===r.originOf(o)||(e.invalidate(),r.set(o,s,i),e.commit(),d$5(this.host,e));}_cast(t,e){const s=m$3.acquire();return s.valid=!0,s.value=e,t&&(s.value=t.call(this.host,e,s)),s}}class d$3{constructor(){this.value=null,this.valid=!0;}acquire(){this.valid=!0;}release(){this.value=null;}}const m$3=new e$4(d$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$4(e){e.length=0;}class t$5{constructor(t=50,o=50){this._pool=new e$4(Array,void 0,r$4,o,t);}acquire(){return this._pool.acquire()}release(e){this._pool.release(e);}prune(){this._pool.prune(0);}static acquire(){return o$1.acquire()}static release(e){return o$1.release(e)}static prune(){o$1.prune();}}const o$1=new t$5(100);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$4 extends e$4{constructor(){super(...arguments),this._set=new Set;}destroy(){super.destroy(),this._set=p$6(this._set);}acquire(...e){const s=super.acquire(...e);return this._set.delete(s),s}release(e){e&&!this._set.has(e)&&(super.release(e),this._set.add(e));}_dispose(e){this._set.delete(e),super._dispose(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$3(){return e$8.queueMicrotask?e$8.queueMicrotask:e=>{e$8.Promise.resolve().then(e);}}const t$3=e$3(),n$3=[];let r$3=[];function u$5(o){n$3.push(o),1===n$3.length&&t$3((()=>{for(const e of r$3)e();const o=n$3.slice();n$3.length=0;for(const e of o)e();}));}!function(o){function e(o){return r$3.push(o),{remove(){r$3=r$3.filter((e=>e!==o));}}}o.before=e;}(u$5||(u$5={}));var f$5=u$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t$2=29;class e$2{constructor(e,s=t$2){this.name=e,this._counter=0,this._items=new Array(s);}record(t){this._items[++this._counter%this._items.length]=t;}get median(){return this._items.slice().sort()[Math.floor(this._items.length/2)]}get average(){return this._items.reduce(((t,e)=>t+e),0)/this._items.length}get last(){return this._items[this._counter%this._items.length]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var o;!function(o){const t=(o,t,n,e)=>{let i=t,r=t;const l=n>>>1,c=o[i-1];for(;r<=l;){r=i<<1,r<n&&e(o[r-1],o[r])<0&&++r;const t=o[r-1];if(e(t,c)<=0)break;o[i-1]=t,i=r;}o[i-1]=c;},n=(o,t)=>o<t?-1:o>t?1:0;function e(o,e,i,r){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===r&&(r=n);for(let n=i>>>1;n>e;n--)t(o,n,i,r);const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,r);}}function*i(o,e,i,r){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===r&&(r=n);for(let n=i>>>1;n>e;n--)t(o,n,i,r),yield;const l=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,l,n,r),yield;}}o.sort=e,o.iterableSort=i;}(o||(o={}));var t$1=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e$1=1.5,l$3=1.1;class n$2{constructor(h){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new w$2,h&&(h.initialSize&&(this.data=new Array(h.initialSize)),h.allocator&&(this._allocator=h.allocator),void 0!==h.deallocator&&(this._deallocator=h.deallocator),h.shrink&&(this._shrink=()=>r$2(this)));}toArray(){return this.data.slice(0,this.length)}getItemAt(t){if(!(t<0||t>=this._length))return this.data[t]}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t;}else {if(this._deallocator)for(let h=t;h<this._length;++h)this.data[h]=this._deallocator(this.data[h]);this._length=t,this._shrink();}}clear(){this.length=0;}prune(){this.clear(),this.data=[];}push(t){this.data[this._length++]=t;}pushArray(t,h=t.length){for(let i=0;i<h;i++)this.data[this._length++]=t[i];}fill(t,h){for(let i=0;i<h;i++)this.data[this._length++]=t;}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const t=this.data[this._length];return ++this._length,t}unshift(t){this.data.unshift(t),this._length++,r$2(this);}pop(){if(0===this.length)return;const t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}remove(t){const i=b$2(this.data,t,this.length,this._hint);if(-1!==i)return this.data.splice(i,1),this.length=this.length-1,t}removeUnordered(t){const h=v$2(this.data,t,this.length,this._hint);return void 0!==h&&(this.length=this.length-1),this._shrink(),h}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,h=t.length,i){this.length=O(this.data,t,this.length,h,this._hint,i),this._shrink();}front(){if(0!==this.length)return this.data[0]}back(){if(0!==this.length)return this.data[this.length-1]}swapElements(t,h){t>=this.length||h>=this.length||t===h||([this.data[t],this.data[h]]=[this.data[h],this.data[t]]);}sort(t){t$1.sort(this.data,0,this.length,t);}iterableSort(t){return t$1.iterableSort(this.data,0,this.length,t)}some(t,h){for(let i=0;i<this.length;++i)if(t.call(h,this.data[i],i,this.data))return !0;return !1}filterInPlace(t,h){let i=0;for(let s=0;s<this._length;++s){const a=this.data[s];t.call(h,a,s,this.data)&&(this.data[s]=this.data[i],this.data[i]=a,i++);}if(this._deallocator)for(let s=i;s<this._length;s++)this.data[s]=this._deallocator(this.data[s]);return this._length=i,this._shrink(),this}forAll(t,h){const i=this.length,s=this.data;for(let a=0;a<i;++a)t.call(h,s[a],a,s);}map(t,h){const i=new Array(this.length);for(let s=0;s<this.length;++s)i[s]=t.call(h,this.data[s],s,this.data);return i}reduce(t,h){let i=h;for(let s=0;s<this.length;++s)i=t(i,this.data[s],s,this.data);return i}has(t){const h=this.length,i=this.data;for(let s=0;s<h;++s)if(i[s]===t)return !0;return !1}}function r$2(t){t.data.length>e$1*t.length&&(t.data.length=Math.floor(t.length*l$3));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$1(n){return n}function r$1(r){return n$1(1e3*r)}function t(n){return n}function u$4(n){return t(.001*n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class c$4{constructor(e){this.phases=e,this.paused=!1,this.ticks=-1,this.removed=!1;}}class m$2{constructor(e){this.callback=e,this.isActive=!0;}remove(){this.isActive=!1;}}let l$2=0,p$3=0;const u$3={time:n$1(0),deltaTime:n$1(0),elapsedFrameTime:n$1(0),frameDuration:n$1(0)},f$4=["prepare","preRender","render","postRender","update"],h$1=[],d$2=new n$2;class w$1{constructor(e){this._task=e;}remove(){this._task.removed=!0;}pause(){this._task.paused=!0;}resume(){this._task.paused=!1;}}const k$1={frameTasks:d$2,willDispatch:!1,clearFrameTasks:j$1,dispatch:b$1,executeFrameTasks:D};function v$1(e){const r=new m$2(e);return h$1.push(r),k$1.willDispatch||(k$1.willDispatch=!0,f$5(b$1)),r}function A(e){const t=new c$4(e);return d$2.push(t),null==T&&(l$2=performance.now(),T=requestAnimationFrame(x)),new w$1(t)}let T=null;function j$1(e=!1){d$2.forAll((e=>{e.removed=!0;})),e&&_();}function F(e){p$3=Math.max(0,e);}function x(){const e=performance.now();T=null,T=d$2.length>0?requestAnimationFrame(x):null,k$1.executeFrameTasks(e);}function D(e){const t=n$1(e-l$2);l$2=e;const r=p$3>0?p$3:1e3/60,s=Math.max(0,t-r);for(let o=0;o<f$4.length;o++){const n=performance.now(),a=f$4[o];d$2.forAll((n=>{var c;if(n.paused||n.removed)return;0===o&&n.ticks++;n.phases[a]&&(u$3.time=e,u$3.deltaTime=0===n.ticks?n$1(0):t,u$3.elapsedFrameTime=n$1(performance.now()-e),u$3.frameDuration=n$1(r-s),null==(c=n.phases[a])||c.call(n,u$3));})),M[o].record(performance.now()-n);}_(),q$1.record(performance.now()-e);}const g$2=new n$2;function _(){d$2.forAll((e=>{e.removed&&g$2.push(e);})),d$2.removeUnorderedMany(g$2.data,g$2.length),g$2.clear();}function b$1(){for(;h$1.length;){const t=m$5(h$1.shift());t.isActive&&t.callback();}k$1.willDispatch=!1;}function y$1(e=1,r){const s=D$1(),i=()=>{b$3(r)?s.reject(m$6()):0===e?s():(--e,f$5((()=>i())));};return i(),s.promise}const M=f$4.map((e=>new e$2(e))),q$1=new e$2("total");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(r,n){for(const o of r.entries())if(n(o[0]))return !0;return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s$1{constructor(s){this._notify=s,this._accessed=[],this._handles=[],this._invalidCount=0;}destroy(){this._accessed.length=0,this.clear();}onInvalidated(){this._invalidCount++;}onCommitted(){const s=this._invalidCount;if(1===s)return this._invalidCount=0,void this._notify();this._invalidCount=s>0?s-1:0;}onObservableAccessed(s){this._accessed.includes(s)||this._accessed.push(s);}onTrackingEnd(){const s=this._handles,t=this._accessed;for(let e=0;e<t.length;++e)s.push(t[e].observe(this));t.length=0;}clear(){const s=this._handles;for(let t=0;t<s.length;++t)s[t].remove();s.length=0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let e=!1;const r=[];function u$2(r,u,l={runImmediately:!1}){let o=new s$1(a),i=null,c=!1;function a(){if(!o||c)return;if(e)return void f$3(a);const t=i;o.clear(),e=!0,c=!0,i=a$4(o,r),c=!1,e=!1,u(i,t),m$1();}function d(){o&&(o.destroy(),o=null,i=null);}return c=!0,i=a$4(o,r),c=!1,l.runImmediately&&u(i,i),{remove:d}}function l$1(n,t){return u$2(n,t,{runImmediately:!0})}function i$2(e,r){let u=new s$1(o),l=null;function o(){r(l,c);}function i(){u&&(u.destroy(),u=null),l=null;}function c(){return u?(u.clear(),l=a$4(u,e),l):null}return c(),{remove:i}}function c$3(r){let u=new s$1(o),l=!1;function o(){u&&!l&&(e?f$3(o):(u.clear(),e=!0,l=!0,a$4(u,r),l=!1,e=!1,m$1()));}function i(){u&&(u.destroy(),u=null);}return l=!0,a$4(u,r),l=!1,{remove:i}}function f$3(n){r.includes(n)||r.unshift(n);}function m$1(){for(;r.length;)r.pop()();}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class d$1{constructor(){this.uid=0,this.target=null,this.path=null,this.oldValue=null,this.callback=null,this.getValue=null,this.removed=!1,this.propertyPath=null;}acquire(e,t,o,r,l){this.target=e,this.path=t,this.oldValue=o,this.callback=r,this.getValue=l,this.propertyPath=l$6(t),this.uid=++d$1.uid,this.removed=!1;}release(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null,this.uid=++d$1.uid,this.removed=!0;}}d$1.pool=new t$4(d$1),d$1.uid=0;const h=new t$5,f$2=new Set;let m;function p$2(e){f$2.delete(e),f$2.add(e),m||(m=v$1(V));}function g$1(e){if(e.removed)return;const{callback:t,path:o,oldValue:r,target:l}=e,n=e.getValue();v(r,n)&&(e.oldValue=n,t.call(l,n,r,o,l));}function v(e,o){return !l$5(e,o)}function j(e){for(const t of f$2.values())t.target===e&&(t.removed=!0);}function V(){let e=10;for(;m&&e--;){m=null;const e=y(),t=h.acquire();for(const o of e){const e=o.uid;g$1(o),e===o.uid&&o.removed&&t.push(o);}for(const o of f$2)o.removed&&(t.push(o),f$2.delete(o));for(let o=0;o<t.length;o++)d$1.pool.release(t[o]);h.release(t),h.release(e),b.forEach((e=>e()));}}function y(){const e=h.acquire();e.length=f$2.size;let t=0;for(const o of f$2)e[t]=o,++t;return f$2.clear(),e}const b=new Set;function k(e){return b.add(e),{remove(){b.delete(e);}}}function P(e,t,o){let r=y$4(e,t,o,((e,t,o)=>{let l,i,u=i$2((()=>o$4(e,t)),((n,s)=>{e.__accessor__.destroyed||l&&l.uid!==i?r.remove():(l||(l=d$1.pool.acquire(e,t,n,o,s),i=l.uid),p$2(l));}));return {remove:h$5((function(){u.remove(),l&&(l.uid!==i||l.removed||(l.removed=!0,p$2(l)),l=null),r=u=null;}))}}));return r}function q(e,t,o){const r=y$4(e,t,o,((e,t,o)=>{let l=!1;return u$2((()=>o$4(e,t)),((n,s)=>{e.__accessor__.destroyed?r.remove():l||(l=!0,v(s,n)&&o.call(e,n,s,t,e),l=!1);}))}));return r}function w(e,t,o,r=!1){return !e.__accessor__||e.__accessor__.destroyed?{remove(){}}:r?q(e,t,o):P(e,t,o)}function S(e){return n(f$2,(t=>t.oldValue===e))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u$1(t){if(null==t)return {value:t};if(Array.isArray(t))return {type:[t[0]],value:null};switch(typeof t){case"object":return t.constructor&&t.constructor.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t;case"boolean":return {type:Boolean,value:t};case"string":return {type:String,value:t};case"number":return {type:Number,value:t};case"function":return {type:t,value:null};default:return}}class p$1{constructor(...t){if(this.constructor===p$1)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new g$3(this)}),t.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t));}static createSubclass(t={}){if(Array.isArray(t))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:r,declaredClass:e,constructor:o}=t;delete t.declaredClass,delete t.properties,delete t.constructor;const c=this;class i extends c{constructor(...t){super(...t),this.inherited=null,o&&o.apply(this,t);}}n$7(i.prototype);for(const s in t){const r=t[s];i.prototype[s]="function"==typeof r?function(...t){const e=this.inherited;let o;this.inherited=function(...t){if(c.prototype[s])return c.prototype[s].apply(this,t)};try{o=r.apply(this,t);}catch(i){throw this.inherited=e,i}return this.inherited=e,o}:t[s];}for(const s in r){const t=u$1(r[s]);y$5(t)(i.prototype,s);}return n$8(e)(i)}postscript(t){const r=this.__accessor__,e=r.ctorArgs||t;r.initialize(),e&&(this.set(e),r.ctorArgs=null),r.constructed(),this.initialize();}initialize(){}destroy(){this.destroyed||(j(this),this.__accessor__.destroy());}get initialized(){return this.__accessor__&&this.__accessor__.initialized||!1}get constructed(){return this.__accessor__&&2===this.__accessor__.lifecycle||!1}get destroyed(){return this.__accessor__&&this.__accessor__.destroyed||!1}commitProperty(t){this.get(t);}get(t){return u$7(this,t)}hasOwnProperty(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)}isInstanceOf(e){return t$9(n$6.getLogger(this.declaredClass),"isInstanceOf",{replacement:"Use instanceof directly",version:"4.16"}),this instanceof e}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(t,r){return t$b(this,t,r),this}watch(t,r,e){return w(this,t,r,e)}_clearOverride(t){return this.__accessor__.clearOverride(t)}_override(t,r){return this.__accessor__.override(t,r)}_isOverridden(t){return this.__accessor__.isOverridden(t)}notifyChange(t){this.__accessor__.notifyChange(t);}_get(t){return this.__accessor__.internalGet(t)}_set(t,r){return this.__accessor__.internalSet(t,r),this}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function s(e,r,o){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return !1;const n=e.read.source;if("string"==typeof n){if(n===r)return !0;if(n.indexOf(".")>-1&&0===n.indexOf(r)&&f$7(n,o))return !0}else for(const s of n){if(s===r)return !0;if(s.indexOf(".")>-1&&0===s.indexOf(r)&&f$7(s,o))return !0}return !1}function i$1(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)}function f$1(e,t,r,n,f){let a=i$7(t[r],f);i$1(a)&&(e[r]=!0);for(const i of Object.getOwnPropertyNames(t))a=i$7(t[i],f),s(a,r,n)&&(e[i]=!0);}function a$2(e,t,r,o){const s=r.metadatas,i=a$5(s[t],"any",o),f=i&&i.default;if(void 0===f)return;const a="function"==typeof f?f.call(e,t,o):f;void 0!==a&&r.set(t,a);}const c$2={origin:"service"};function u(t,n,s=c$2){if(!n||"object"!=typeof n)return;const i=e$7(t),u=i.metadatas,d={};for(const e of Object.getOwnPropertyNames(n))f$1(d,u,e,n,s);i.setDefaultOrigin(s.origin);for(const r of Object.getOwnPropertyNames(d)){const f=i$7(u[r],s).read,a=f&&f.source;let c;c=a&&"string"==typeof a?o$4(n,a):n[r],f&&f.reader&&(c=f.reader.call(t,c,n,s)),void 0!==c&&i.set(r,c);}if(!s||!s.ignoreDefaults)for(const e of Object.getOwnPropertyNames(u))d[e]||a$2(t,e,i,s);i.setDefaultOrigin("user");}function d(e,t,r,o=c$2){var n;const s={...o,messages:[]};r(s),null==(n=s.messages)||n.forEach((t=>{"warning"!==t.type||e.loaded?o&&o.messages&&o.messages.push(t):e.loadWarnings.push(t);}));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=n$6.getLogger("esri.core.accessorSupport.write");function a$1(r,e,t,i,o){var n,s;const u={};return null==(n=e.write)||null==(s=n.writer)||s.call(r,i,u,t,o),u}function f(r,t,i,n,s,u){if(!n||!n.write)return !1;const a=r.get(i);if(!s&&n.write.overridePolicy){const e=n.write.overridePolicy.call(r,a,i,u);void 0!==e&&(s=e);}if(s||(s=n.write),!s||!1===s.enabled)return !1;if((null===a&&!s.allowNull||void 0===a)&&s.isRequired){const t=new s$7("web-document-write:property-required",`Missing value for required property '${i}' on '${r.declaredClass}'`,{propertyName:i,target:r});return t&&u&&u.messages?u.messages.push(t):t&&!u&&l.error(t.name,t.message),!1}if(void 0===a)return !1;if(null===a&&!s.allowNull)return !1;if(c$1(r,i,u,n,a))return !1;if(void 0!==n.default)return !0;if(!s.ignoreOrigin&&u&&u.origin){if(t.store.originOf(i)<t$6(u.origin))return !1}return !0}function c$1(e,t,i,o,n){const s=o.default;if(void 0===s)return !1;if(null!=o.defaultEquals)return o.defaultEquals(n);if("function"==typeof s){if(Array.isArray(n)){const o=s.call(e,t,i);return l$4(o,n)}return !1}return s===n}function p(r,e,t,i){const o=e$7(r),s=o.metadatas,l=s$8(s[e],i);return !!l&&f(r,o,e,l,t,i)}function g(r,e,t){if(r&&"function"==typeof r.toJSON&&(!r.toJSON.isDefaultToJSON||!r.write))return u$8(e,r.toJSON());const o=e$7(r),l=o.metadatas;for(const n in l){const g=s$8(l[n],t);if(!f(r,o,n,g,void 0,t))continue;const d=r.get(n),m=a$1(r,g,g.write&&"string"==typeof g.write.target?g.write.target:n,d,t);var c,p;if(Object.keys(m).length>0)e=u$8(e,m),null!=t&&null!=(c=t.resources)&&null!=(p=c.pendingOperations)&&p.length&&Promise.all(t.resources.pendingOperations).then((()=>u$8(e,m))),t&&t.writtenProperties&&t.writtenProperties.push({target:r,propName:n,oldOrigin:c$5(o.store.originOf(n)),newOrigin:t.origin});}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=t=>{let i=class extends t{constructor(...r){super(...r);}read(r,t){u(this,r,t);}write(r={},t){return g(this,r,t)}toJSON(r){return this.write({},r)}static fromJSON(r,t){return c.call(this,r,t)}};return i=e$5([n$8("esri.core.JSONSupport")],i),i.prototype.toJSON.isDefaultToJSON=!0,i};function c(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");const s=new this;return s.read(r,t),s}let a=class extends(i(p$1)){};a=e$5([n$8("esri.core.JSONSupport")],a);

export { A, t as B, C, r$1 as D, e$2 as E, i$3 as F, n as G, t$4 as H, k as I, u$4 as J, l$4 as K, c$6 as L, M$1 as M, l$1 as N, p$5 as O, F as P, f$5 as Q, t$7 as R, S, m$4 as T, b$2 as U, w$2 as V, a$3 as W, h$2 as X, I as Y, a, p as b, g$4 as c, d, e$5 as e, n$2 as f, g, e$4 as h, i, v$1 as j, t$5 as k, c$3 as l, u$2 as m, n$4 as n, o$2 as o, p$1 as p, s$4 as q, r$5 as r, s$3 as s, t$6 as t, u, v$2 as v, n$1 as w, s$5 as x, y$1 as y, s$1 as z };
