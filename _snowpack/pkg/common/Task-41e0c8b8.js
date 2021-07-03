import { U } from './Loadable-d16b3d7d.js';
import { e as e$1, p as p$1 } from './JSONSupport-9346590f.js';
import { y, n as n$1 } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r(t,r){return r?{...r,query:{...t,...r.query}}:{query:t}}function e(r){return "string"==typeof r?U(r):r}function n(t,r,e){const o={};for(const i in t){if("declaredClass"===i)continue;const f=t[i];if(null!=f&&"function"!=typeof f)if(Array.isArray(f)){o[i]=[];for(let t=0;t<f.length;t++)o[i][t]=n(f[t]);}else if("object"==typeof f)if(f.toJSON){const t=f.toJSON(e&&e[i]);o[i]=r?t:JSON.stringify(t);}else o[i]=r?f:JSON.stringify(f);else o[i]=f;}return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let i=class extends p$1{constructor(...r){super(...r),this.requestOptions=null,this.url=null;}normalizeCtorArgs(r,e){return "string"!=typeof r?r:{url:r,...e}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(r){return r?U(r):null}_encode(r,e,o){const s={};for(const t in r){if("declaredClass"===t)continue;const i=r[t];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){s[t]=[];for(let r=0;r<i.length;r++)s[t][r]=this._encode(i[r]);}else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(o&&o[t]);s[t]=e?r:JSON.stringify(r);}else s[t]=e?i:JSON.stringify(i);else s[t]=i;}return s}};e$1([y({readOnly:!0})],i.prototype,"parsedUrl",null),e$1([y()],i.prototype,"requestOptions",void 0),e$1([y({type:String})],i.prototype,"url",void 0),i=e$1([n$1("esri.tasks.Task")],i);var p=i;

export { e, n, p, r };
