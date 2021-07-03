import { L, z, h as ht, U as U$1 } from './Loadable-d16b3d7d.js';
import { c as c$2, e as c$3, f as a$2 } from './symbols-9e680ec7.js';
import { e as e$1, c as s$1 } from './Message-70b34921.js';
import { s as s$2 } from './promiseUtils-2ff2b194.js';
import { c, G } from './Portal-ff63481f.js';
import { c as c$1 } from './persistableUrlUtils-59858a7e.js';
import { i } from './jsonUtils-4c6963ee.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a$1(a){return a=a||e$1.location.hostname,e.some((c=>{var t;return null!=(null==(t=a)?void 0:t.match(c))}))}function t$1(a,t){return a&&(t=t||e$1.location.hostname)?null!=t.match(r$1)||null!=t.match(m)?a.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(s)?a.replace("static.arcgis.com","staticqa.arcgis.com"):a:a}const r$1=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,m=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,e=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,r$1,n,/^jsapps.esri.com$/,m,s];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a=()=>!!s$1("enable-feature:force-wosr"),r=()=>!!s$1("enable-feature:disable-context-navigation"),t=()=>!!s$1("enable-feature:direct-3d-object-feature-layer-display");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const b={};function d(e,t){return P(e,t).then((t=>({data:t.data,baseUrl:ht(e),styleUrl:e})))}function h(e,t,r){const o=t.portal||G.getDefault();let s;const n=`${o.url} - ${o.user&&o.user.username} - ${e}`;return b[n]||(b[n]=j(e,o,r).then((e=>(s=e,e.fetchData()))).then((t=>({data:t,baseUrl:s.itemUrl,styleName:e})))),b[n]}function j(e,t,r){return t.load(r).then((()=>{const o=new c({disableExtraQuery:!0,query:`owner:${D} AND type:${R} AND typekeywords:"${e}"`});return t.queryItems(o,r)})).then((({results:t})=>{let o=null;const n=e.toLowerCase();if(t&&Array.isArray(t))for(const e of t){if(e.typeKeywords.some((e=>e.toLowerCase()===n))&&e.type===R&&e.owner===D){o=e;break}}if(!o)throw new s$2("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return o.load(r)}))}function g(e,t,r){return e.styleUrl?d(e.styleUrl,r):e.styleName?h(e.styleName,t,r):Promise.reject(new s$2("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function w(e,t,r,o){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?E(e,t,o):g(e,t,o).then((s=>U(s,e.name,t,r,o))):Promise.reject(new s$2("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function U(e,n,i$1,m,u){const b=e.data,d={portal:i$1.portal,url:U$1(e.baseUrl),origin:"portal-item"},h=b.items.find((e=>e.name===n));if(!h){const e=`The symbol name '${n}' could not be found`;return Promise.reject(new s$2("symbolstyleutils:symbol-name-not-found",e,{symbolName:n}))}let j=c$1(S(h,m),d),g=h.thumbnail&&h.thumbnail.href;const w=h.thumbnail&&h.thumbnail.imageData;a$1()&&(j=t$1(j),g=t$1(g));const U={portal:i$1.portal,url:U$1(ht(j)),origin:"portal-item"};return P(j,u).then((r=>{const o="cimRef"===m?N(r.data):r.data,s=i(o,U);if(s&&c$2(s)){if(g){const e=c$1(g,d);s.thumbnail=new c$3({url:e});}else w&&(s.thumbnail=new c$3({url:`data:image/png;base64,${w}`}));e.styleUrl?s.styleOrigin=new a$2({portal:i$1.portal,styleUrl:e.styleUrl,name:n}):e.styleName&&(s.styleOrigin=new a$2({portal:i$1.portal,styleName:e.styleName,name:n}));}return s}))}function N(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function S(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!a())for(const r of e.formatInfos)if("gltf"===r.type)return r.href;return e.webRef}function $(e){for(const t of e.typeKeywords)if(/^Esri.*Style$/.test(t)&&"Esri Style"!==t)return t}function E(e,t,r){const o=q.replace(/\{SymbolName\}/gi,e.name);return P(o,r).then((e=>{const r=N(e.data);return i(r,{portal:t.portal,url:U$1(ht(o)),origin:"portal-item"})}))}function P(t,r){const o={responseType:"json",query:{f:"json"},...r};return L(z(t),o)}const D="esri_en",R="Style",q="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";

var styleUtils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	fetchStyle: g,
	fetchSymbolFromStyle: U,
	resolveWebStyleSymbol: w,
	styleNameFromItem: $
});

export { t as a, g, r, styleUtils as s, t$1 as t };
