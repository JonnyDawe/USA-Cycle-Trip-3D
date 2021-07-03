import { e as e$1, s as s$2, y as y$1, n, r as r$1, t as t$2, a as s$3, m as m$1 } from './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function r(r,t,n){if(!e(r))throw new TypeError("target is not a Evented or EventTarget object");if("on"in r)return r.on(t,n);if(Array.isArray(t)){const e=t.slice();for(const t of e)r.addEventListener(t,n);return {remove(){for(const t of e)r.removeEventListener(t,n);}}}return r.addEventListener(t,n),{remove(){r.removeEventListener(t,n);}}}function t$1(t,n,o){if(!e(t))throw new TypeError("target is not a Evented or EventTarget object");if("once"in t)return t.once(n,o);const i=r(t,n,(e=>{i.remove(),o.call(t,e);}));return {remove(){i.remove();}}}const o$1={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function i({key:e}){return o$1[e]||e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(e){return {setTimeout:(t,o)=>{const r=e.setTimeout(t,o);return {remove:()=>e.clearTimeout(r)}}}}var o=t(e$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s$1 extends s$2{constructor(e,t,r){if(super(e,t,r),!(this instanceof s$1))return new s$1(e,t,r)}toJSON(){if(null!=this.details)try{return {name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((t,r)=>{if(r&&"object"==typeof r&&"function"==typeof r.toJSON)return r;try{return y$1(r)}catch(s){return "[object]"}})))}}catch(r){throw n.getLogger("esri.core.Error").error(r),r}return {name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new s$1(e.name,e.message,e.details)}}s$1.prototype.type="error";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function s(t){return Promise.all(t)}function l(t){return new Promise(((n,e)=>{try{t(n,e);}catch(r){Promise.resolve().then((()=>e(r)));}}))}function m(t="Aborted"){return new s$1("AbortError",t)}function h(){return new AbortController}function a(t,n="Aborted"){if(b(t))throw m(n)}function p(t){return r$1(t)?"aborted"in t?t:t.signal:t}function b(t){const n=p(t);return r$1(n)&&n.aborted}function w(t){if(g(t))throw t}function j(t){if(!g(t))throw t}function v(t,n){const r=p(t);if(!t$2(r)){if(!r.aborted)return t$1(r,"abort",(()=>n()));n();}}function P(t,n){const r=p(t);if(!t$2(r))return a(r),t$1(r,"abort",(()=>n(m())))}function d(t,n){const e=p(n);return t$2(e)?t:new Promise(((e,r)=>{let o=v(n,(()=>r(m())));const i=()=>o=s$3(o);t.then(i,i),t.then(e,r);}))}function g(t){return t&&"AbortError"===t.name}function y(t){return t.catch((t=>{if(!g(t))throw t}))}function T(t,n$1=n.getLogger("esri")){return t.catch((t=>{g(t)||n$1.error(t);}))}function E(){let t=null;const n=new Promise(((n,e)=>{t={promise:void 0,resolve:n,reject:e};}));return t.promise=n,t}function A(t){if(!t)return;if("function"!=typeof t.forEach){const n=Object.keys(t);return A(n.map((n=>t[n]))).then((t=>{const e={};return n.forEach(((n,r)=>e[n]=t[r])),e}))}const n=t;return l((t=>{const e=[];let r=n.length;0===r&&t(e),n.forEach((n=>{const o={promise:n||Promise.resolve(n)};e.push(o),o.promise.then((t=>{o.value=t;})).catch((t=>{o.error=t;})).then((()=>{--r,0===r&&t(e);}));}));}))}function k(t){return A(t).then((t=>t.filter((t=>!!t.value)).map((t=>t.value))))}function L(t){return Promise.reject(t)}function x(t){return Promise.resolve(t)}function C(t,n,e){const r=h();return v(e,(()=>r.abort())),new Promise(((e,o)=>{let i=setTimeout((()=>{i=0,e(n);}),t);v(r,(()=>{i&&(clearTimeout(i),o(m()));}));}))}function U(t){return t&&"function"==typeof t.then}function q(t){return z(t)?t:Promise.resolve(t)}function z(t){return t&&"object"==typeof t&&"then"in t&&"function"==typeof t.then}function B(t,n=-1){let e,r,o,i,u=null;const s=(...f)=>{if(e){r=f,i&&i.reject(m()),i=E();const t=m$1(i.promise);if(u){const t=u;u=null,t.abort();}return t}if(o=i||E(),i=null,n>0){const r=h();e=q(t(...f,r.signal));const o=e;C(n).then((()=>{e===o&&(i?r.abort():u=r);}));}else e=1,e=q(t(...f));const l=()=>{const t=r;r=o=e=u=null,null!=t&&s(...t);},a=e,p=o;return a.then(l,l),a.then(p.resolve,p.reject),m$1(p.promise)};return s}function D(){let n,e;const r=new Promise(((t,r)=>{n=t,e=r;})),o$1=t=>{n(t);};return o$1.resolve=t=>n(t),o$1.reject=t=>e(t),o$1.timeout=(n,e)=>o.setTimeout((()=>o$1.reject(e)),n),o$1.promise=r,o$1}function F(t,n){return t.then(n,n)}function G(t){let n=h();const e=t(n.signal);let r={promise:e,finished:!1,abort:()=>{n&&(n.abort(),n=null);}};const o=()=>{r&&(r.finished=!0,r=null),n=null;};return e.then(o,o),r}

export { A, B, C, D, E, F, G, L, P, T, U, a, b, s as c, d, e, g, h, i, j, k, l, m, o, q, r, s$1 as s, v, w, x, y, z };
