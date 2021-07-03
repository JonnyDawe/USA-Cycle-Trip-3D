import { n, t } from './Message-70b34921.js';
import { a, o, j as j$1, B as B$1 } from './mat3-6cb40036.js';
import { e as e$1 } from './quat-44770d30.js';
import { e, b as e$2, f, o as o$1 } from './vec33-d394808f.js';
import { L as L$1, j, n as n$1 } from './mathUtils-a477cc74.js';
import { x as xn, S as Sn } from './projection-c73dd3c4.js';
import { e as O } from './unitUtils-b17203be.js';
import { T, a as k$1, P } from './SpatialReference-843b1520.js';
import { f as c } from './Point-ee7951c3.js';
import { i, T as T$1 } from './BufferView-3733efba.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const C=n.getLogger("esri.geometry.support.meshUtils.normalProjection");function F(r,e,o,t,n){return b(t)?(S(0,i.fromTypedArray(r),T$1.fromTypedArray(e),T$1.fromTypedArray(o),t,i.fromTypedArray(n)),n):(C.error("Cannot convert spatial reference to PCPF"),n)}function _(r,e,o,t,n){return b(t)?(S(1,i.fromTypedArray(r),T$1.fromTypedArray(e),T$1.fromTypedArray(o),t,i.fromTypedArray(n)),n):(C.error("Cannot convert to spatial reference from PCPF"),n)}function v(r,e,o){return xn(r,e,0,o,O(e),0,r.length/3),o}function M(r,e,o){return xn(r,O(o),0,e,o,0,r.length/3),e}function V(r,o,t$1){if(t(r))return o;const n=T$1.fromTypedArray(r),f=T$1.fromTypedArray(o);return e$2(f,n,t$1),o}function k(r,n,f$1){if(t(r))return n;j$1(x,f$1);const a=i.fromTypedArray(r),m=i.fromTypedArray(n);return f(m,a,x),B$1(x)||o$1(m,m),n}function L(r,n,f$1){if(t(r))return n;j$1(x,f$1);const a=i.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),m=i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT);if(f(m,a,x),B$1(x)||o$1(m,m),r!==n)for(let e=3;e<r.length;e+=4)n[e]=r[e];return n}function B(r,e,o,t,n){if(!b(t))return C.error("Cannot convert spatial reference to PCPF"),n;S(0,i.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),T$1.fromTypedArray(e),T$1.fromTypedArray(o),t,i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function R(r,e,o,t,n){if(!b(t))return C.error("Cannot convert to spatial reference from PCPF"),n;S(1,i.fromTypedArray(r,16),T$1.fromTypedArray(e),T$1.fromTypedArray(o),t,i.fromTypedArray(n,16));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function S(r,e,o$1,t,a$1,m){if(!e)return;const i=o$1.count,y=O(a$1);if(N(a$1))for(let s=0;s<i;s++)t.getVec(s,U),e.getVec(s,w),Sn(y,U,W,y),a(x,W),1===r&&o(x,x),L$1(w,w,x),m.setVec(s,w);else for(let u=0;u<i;u++){t.getVec(u,U),e.getVec(u,w),Sn(y,U,W,y),a(x,W);const a$1=c(o$1.get(u,1));let i=Math.cos(a$1);0===r&&(i=1/i),x[0]*=i,x[1]*=i,x[2]*=i,x[3]*=i,x[4]*=i,x[5]*=i,1===r&&o(x,x),L$1(w,w,x),j(w,w),m.setVec(u,w);}return m}function b(r){return N(r)||Y(r)}function N(r){return r.isWGS84||T(r)||k$1(r)||P(r)}function Y(r){return r.isWebMercator}const U=n$1(),w=n$1(),W=e(),x=e$1();

export { B, F, L, M, R, V, _, k, v };
