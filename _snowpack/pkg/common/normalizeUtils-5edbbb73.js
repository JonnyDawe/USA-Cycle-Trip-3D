import { n as n$1, d as s$2, t, r as r$1 } from './Message-70b34921.js';
import { s as s$3 } from './promiseUtils-2ff2b194.js';
import { m, j } from './Polyline-ccd8fb47.js';
import { k as k$1, S } from './SpatialReference-843b1520.js';
import { y as y$1, p, d as d$1, G } from './jsonUtils-f0a19240.js';
import { d as d$2, R as R$1 } from './Point-ee7951c3.js';
import { U, L as L$1 } from './Loadable-d16b3d7d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new m({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:k$1.WebMercator}),minus180Line:new m({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:k$1.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new m({paths:[[[180,-180],[180,180]]],spatialReference:k$1.WGS84}),minus180Line:new m({paths:[[[-180,-180],[-180,180]]],spatialReference:k$1.WGS84})}};function i$1(e,n){return Math.ceil((e-n)/(2*n))}function o$1(e,n){const t=s$1(e);for(const r of t)for(const e of r)e[0]+=n;return e}function s$1(e){return y$1(e)?e.rings:e.paths}function a(e){const n=(null==e?void 0:e.isWebMercator)?102100:4326;return [r[n].minX,r[n].maxX]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function o(o,i,n,m){const p$1="string"==typeof o?U(o):o,a=i[0].spatialReference,u={...m,query:{...p$1.query,f:"json",sr:JSON.stringify(a),target:JSON.stringify({geometryType:d$1(i[0]),geometries:i}),cutter:JSON.stringify(n)}},c=await L$1(p$1.path+"/cut",u),{cutIndexes:f,geometries:g=[]}=c.data;return {cutIndexes:f,geometries:g.map((e=>{const t=p(e);return t.spatialReference=a,t}))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i(o,i,f){const m="string"==typeof o?U(o):o,p=i[0].spatialReference,a=d$1(i[0]),u={...f,query:{...m.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(s(i))}};return n((await L$1(m.path+"/simplify",u)).data,a,p)}function s(r){return {geometryType:d$1(r[0]),geometries:r.map((r=>r.toJSON()))}}function n(r,t,e){const i=G(t);return r.map((r=>{const t=i.fromJSON(r);return t.spatialReference=e,t}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const y=n$1.getLogger("esri.geometry.support.normalizeUtils");function x(t){return "polygon"===t.type}function d(t){return "polygon"===t[0].type}function w(t){return "polyline"===t[0].type}function R(t,n){if(!(t instanceof m||t instanceof j)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw y.error(t),new s$3(t)}const o=s$1(t),s=[];for(const e of o){const t=[];s.push(t),t.push([e[0][0],e[0][1]]);for(let o=0;o<e.length-1;o++){const s=e[o][0],r=e[o][1],i=e[o+1][0],l=e[o+1][1],f=Math.sqrt((i-s)*(i-s)+(l-r)*(l-r)),c=(l-r)/f,p=(i-s)/f,u=f/n;if(u>1){for(let l=1;l<=u-1;l++){const e=l*n,o=p*e+s,i=c*e+r;t.push([o,i]);}const e=(f+Math.floor(u-1)*n)/2,o=p*e+s,i=c*e+r;t.push([o,i]);}t.push([i,l]);}}return x(t)?new j({rings:s,spatialReference:t.spatialReference}):new m({paths:s,spatialReference:t.spatialReference})}function M(t,e,n){if(e){const e=R(t,1e6);t=R$1(e,!0);}return n&&(t=o$1(t,n)),t}function P(t,e,n){if(Array.isArray(t)){const o=t[0];if(o>e){const n=i$1(o,e);t[0]=o+n*(-2*e);}else if(o<n){const e=i$1(o,n);t[0]=o+e*(-2*n);}}else {const o=t.x;if(o>e){const n=i$1(o,e);t=t.clone().offset(n*(-2*e),0);}else if(o<n){const e=i$1(o,n);t=t.clone().offset(e*(-2*n),0);}}return t}function b(t,e){let n=-1;for(let o=0;o<e.cutIndexes.length;o++){const s=e.cutIndexes[o],r=e.geometries[o],i=s$1(r);for(let t=0;t<i.length;t++){const e=i[t];e.some((n=>{if(n[0]<180)return !0;{let n=0;for(let t=0;t<e.length;t++){const o=e[t][0];n=o>n?o:n;}n=Number(n.toFixed(9));const o=-360*i$1(n,180);for(let s=0;s<e.length;s++){const e=r.getPoint(t,s);r.setPoint(t,s,e.clone().offset(o,0));}return !0}}));}if(s===n){if(d(t))for(const e of s$1(r))t[s]=t[s].addRing(e);else if(w(t))for(const e of s$1(r))t[s]=t[s].addPath(e);}else n=s,t[s]=r;}return t}async function L(e,n,l){if(!Array.isArray(e))return L([e],n);const h=n?n.url:s$2.geometryServiceUrl;let y,x,d,w,j$1,R,U,k,v=0;const A=[],z=[];for(const t$1 of e)if(t(t$1))z.push(t$1);else if(y||(y=t$1.spatialReference,x=S(y),d=y.isWebMercator,R=d?102100:4326,w=r[R].maxX,j$1=r[R].minX,U=r[R].plus180Line,k=r[R].minus180Line),x)if("mesh"===t$1.type)z.push(t$1);else if("point"===t$1.type)z.push(P(t$1.clone(),w,j$1));else if("multipoint"===t$1.type){const e=t$1.clone();e.points=e.points.map((t=>P(t,w,j$1))),z.push(e);}else if("extent"===t$1.type){const e=t$1.clone()._normalize(!1,!1,x);z.push(e.rings?new j(e):e);}else if(t$1.extent){const e=t$1.extent,n=i$1(e.xmin,j$1)*(2*w);let o=0===n?t$1.clone():o$1(t$1.clone(),n);e.offset(n,0),e.intersects(U)&&e.xmax!==w?(v=e.xmax>v?e.xmax:v,o=M(o,d),A.push(o),z.push("cut")):e.intersects(k)&&e.xmin!==j$1?(v=e.xmax*(2*w)>v?e.xmax*(2*w):v,o=M(o,d,360),A.push(o),z.push("cut")):z.push(o);}else z.push(t$1.clone());else z.push(t$1);let I=i$1(v,w),X=-90;const q=I,C=new m;for(;I>0;){const t=360*I-180;C.addPath([[t,X],[t,-1*X]]),X*=-1,I--;}if(A.length>0&&q>0){const t=b(A,await o(h,A,C,l)),n=[],o$1=[];for(let l=0;l<z.length;l++){const r=z[l];if("cut"!==r)o$1.push(r);else {const r=t.shift(),i=e[l];r$1(i)&&"polygon"===i.type&&i.rings&&i.rings.length>1&&r.rings.length>=i.rings.length?(n.push(r),o$1.push("simplify")):o$1.push(d?d$2(r):r);}}if(!n.length)return o$1;const r=await i(h,n,l),i$1=[];for(let e=0;e<o$1.length;e++){const t=o$1[e];"simplify"!==t?i$1.push(t):i$1.push(d?d$2(r.shift()):r.shift());}return i$1}const D=[];for(let t=0;t<z.length;t++){const e=z[t];if("cut"!==e)D.push(e);else {const t=A.shift();D.push(!0===d?d$2(t):t);}}return Promise.resolve(D)}function k(t,e){const n=S(e);if(n){const[e,o]=n.valid,s=o-e;if(t<e)for(;t<e;)t+=s;if(t>o)for(;t>o;)t-=s;}return t}

export { L, a, i$1 as i, k, r, s$1 as s };
