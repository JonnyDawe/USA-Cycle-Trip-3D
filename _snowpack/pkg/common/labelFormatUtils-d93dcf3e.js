import { s as s$1 } from './promiseUtils-2ff2b194.js';
import { n } from './Message-70b34921.js';
import { L, S, m as m$1 } from './intl-21ab9759.js';
import { s, J } from './fieldUtils-22be41cd.js';
import { x, _ } from './labelUtils-7d1afc11.js';
import './jsonMap-e142bd84.js';
import './locale-b874fc68.js';
import './Loadable-d16b3d7d.js';
import './subclass-fe5fcf78.js';
import './Polyline-ccd8fb47.js';
import './JSONSupport-9346590f.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './assets-73c8998f.js';
import './enumeration-7d0c165d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u=n.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},c={getAttribute:(e,t)=>e.field(t)};async function f(t,r,a){if(!t||!t.symbol)return p;const n=t.where,o=x(t),f=n?await import('./WhereClause-55dc94e0.js'):null;let d;if("arcade"===o.type){const t=await s(o.expression,a,r);d={type:"arcade",evaluate(r){try{const e=t.evaluate({$feature:"attributes"in r?t.repurposeFeature(r):t.repurposeAdapter(r)});if(null!=e)return e.toString()}catch(a){u.error(new s$1("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:r,expression:o}));}return null},needsHydrationToEvaluate:()=>null==_(o.expression)};}else d={type:"simple",evaluate:e=>o.expression.replace(/{[^}]*}/g,(t=>{const a=t.slice(1,-1),n=r.get(a);if(!n)return t;let o=null;if("attributes"in e){e&&e.attributes&&(o=e.attributes[n.name]);}else o=e.field(n.name);return null==o?"":m(o,n)}))};if(n){let e;try{e=f.WhereClause.create(n,r);}catch(y){return p}const t=d.evaluate;d.evaluate=r=>{const a="attributes"in r?void 0:c;return e.testFeature(r,a)?t(r):null};}return d}function m(e,t){if(null==e)return "";const l=t.domain;if(l)if("codedValue"===l.type||"coded-value"===l.type){const t=e;for(const e of l.codedValues)if(e.code===t)return e.name}else if("range"===l.type){const t=+e,r="range"in l?l.range[0]:l.minValue,a="range"in l?l.range[1]:l.maxValue;if(r<=t&&t<=a)return l.name}let i=e;return "date"===t.type||"esriFieldTypeDate"===t.type?i=L(i,S("short-date")):J(t)&&(i=m$1(+i)),i||""}

export { f as createLabelFunction, m as formatField };
