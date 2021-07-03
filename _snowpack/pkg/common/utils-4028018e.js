import { o } from './Color-ae84a22a.js';
import { c, x as x$1, p as m } from './symbols-9e680ec7.js';
import { n } from './asyncUtils-015dfd6e.js';
import { r, t, c as s } from './Message-70b34921.js';
import { l } from './mathUtils-a477cc74.js';
import './assets-73c8998f.js';
import './Loadable-d16b3d7d.js';
import { e } from './ItemCache-2457b327.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
new e(1e3);new o([128,128,128]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const y=/\/resource\/(.*?)\.svg$/,p=new o("white");function d(e,t){const r=t.resource.href;return !s("esri-canvas-svg-support")&&e.styleOrigin&&y.test(r)?r.replace(y,"/resource/png/$1.png"):r}function k(t,r){if(null==r)return t;const o$1=t.toRgba();return o$1[3]=o$1[3]*r,new o(o$1)}function L(e,t$1,r$1){const o=e.symbolLayers;if(!o)return;const n=e=>{const o=r(e)?e:null;return k(t$1=t$1||o||null!=r$1&&p,r$1)};o.forEach((e=>{if("object"!==e.type||null==e.resource.href||t$1)if("water"===e.type)e.color=n(e.color);else {const t$1=r(e.material)?e.material.color:null,o=n(t$1);t(e.material)?e.material=new m({color:o}):e.material.color=o,null!=r$1&&"outline"in e&&r(e.outline)&&r(e.outline.color)&&(e.outline.color=k(e.outline.color,r$1));}}));}function z(e,t,r){(t=t||e.color)&&(e.color=k(t,r)),null!=r&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=k(e.outline.color,r));}function v(o$1,n,i){o$1&&(n||null!=i)&&(n&&(n=new o(n)),c(o$1)?L(o$1,n,i):x$1(o$1)&&z(o$1,n,i));}async function x(e,t){const r=e.symbolLayers;r&&await n(r,(async e=>S(e,t)));}async function S(e,t){switch(e.type){case"extrude":O(e,t);break;case"icon":case"line":case"text":U(e,t);break;case"path":$(e,t);break;case"object":await R(e,t);}}function U(e,t){const r$1=E(t);r(r$1)&&(e.size=r$1);}function E(e){for(const t of e)if("number"==typeof t)return t;return null}function O(e,t){e.size="number"==typeof t[2]?t[2]:0;}async function R(e,t){const{resourceSize:r,symbolSize:o}=await C(e),n=A(t,r,o);e.width=D(t[0],o[0],r[0],n),e.depth=D(t[1],o[1],r[1],n),e.height=D(t[2],o[2],r[2],n);}function $(e,t){const r=A(t,l,[e.width,void 0,e.height]);e.width=D(t[0],e.width,1,r),e.height=D(t[2],e.height,1,r);}function A(e,t,r){for(let o=0;o<3;o++){const n=e[o];switch(n){case"symbol-value":return null!=r[o]?r[o]/t[o]:1;case"proportional":break;default:if(n&&t[o])return n/t[o]}}return 1}async function C(e){const t=await import('./symbolLayerUtils-357d2cd0.js'),r=await t.computeObjectLayerResourceSize(e,10),{width:o,height:n,depth:i}=e,l=[o,i,n];let s=1;for(let c=0;c<3;c++)if(null!=l[c]){s=l[c]/r[c];break}for(let c=0;c<3;c++)null==l[c]&&(l[c]=r[c]*s);return {resourceSize:r,symbolSize:l}}function D(e,t,r,o){switch(e){case"proportional":return r*o;case"symbol-value":return null!=t?t:r;default:return e}}function I(e,t$1){const r=E(t$1);if(!t(r))switch(e.type){case"simple-marker":e.size=r;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=r,e.height=r*t):(e.width=r*t,e.height=r);break}case"simple-line":e.width=r;break;case"text":e.font.size=r;}}async function M(e,o){if(e&&o)return c(e)?x(e,o):void(x$1(e)&&I(e,o))}function q(e,o,n){if(e&&null!=o)if(c(e)){const t=e.symbolLayers;t&&t.forEach((e=>{if(e&&"object"===e.type)switch(n){case"tilt":e.tilt=o;break;case"roll":e.roll=o;break;default:e.heading=o;}}));}else x$1(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=o));}

export { M, d, q, v };
