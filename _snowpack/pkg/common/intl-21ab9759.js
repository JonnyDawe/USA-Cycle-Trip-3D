import { s as s$4 } from './jsonMap-e142bd84.js';
import { i as i$5, p } from './locale-b874fc68.js';
import { m as m$3, n as n$1, b as r$1, j as t, r as r$2, e as e$1 } from './Message-70b34921.js';
import { s as s$5, E } from './promiseUtils-2ff2b194.js';
import { L as L$1 } from './Loadable-d16b3d7d.js';
import { a as a$5 } from './assets-73c8998f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r={year:"numeric",month:"numeric",day:"numeric"},n={year:"numeric",month:"long",day:"numeric"},a$4={year:"numeric",month:"short",day:"numeric"},h$1={year:"numeric",month:"long",weekday:"long",day:"numeric"},m$2={hour:"numeric",minute:"numeric"},i$4={...m$2,second:"numeric"},s$3={"short-date":r,"short-date-short-time":{...r,...m$2},"short-date-short-time-24":{...r,...m$2,hour12:!1},"short-date-long-time":{...r,...i$4},"short-date-long-time-24":{...r,...i$4,hour12:!1},"short-date-le":r,"short-date-le-short-time":{...r,...m$2},"short-date-le-short-time-24":{...r,...m$2,hour12:!1},"short-date-le-long-time":{...r,...i$4},"short-date-le-long-time-24":{...r,...i$4,hour12:!1},"long-month-day-year":n,"long-month-day-year-short-time":{...n,...m$2},"long-month-day-year-short-time-24":{...n,...m$2,hour12:!1},"long-month-day-year-long-time":{...n,...i$4},"long-month-day-year-long-time-24":{...n,...i$4,hour12:!1},"day-short-month-year":a$4,"day-short-month-year-short-time":{...a$4,...m$2},"day-short-month-year-short-time-24":{...a$4,...m$2,hour12:!1},"day-short-month-year-long-time":{...a$4,...i$4},"day-short-month-year-long-time-24":{...a$4,...i$4,hour12:!1},"long-date":h$1,"long-date-short-time":{...h$1,...m$2},"long-date-short-time-24":{...h$1,...m$2,hour12:!1},"long-date-long-time":{...h$1,...i$4},"long-date-long-time-24":{...h$1,...i$4,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":m$2,"long-time":i$4},l$2=s$4()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});l$2.toJSON.bind(l$2);l$2.fromJSON.bind(l$2);const u$3={ar:"ar-u-nu-latn-ca-gregory"};let c$3=new WeakMap,D=s$3["short-date-short-time"];function T(t){const e=t||D;if(!c$3.has(e)){const t=i$5(),r=u$3[i$5()]||t;c$3.set(e,new Intl.DateTimeFormat(r,e));}return c$3.get(e)}function S(t){return s$3[t]||null}function L(t,o){return T(o).format(t)}p((()=>{c$3=new WeakMap,D=s$3["short-date-short-time"];}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a$3={ar:"ar-u-nu-latn"};let e=new WeakMap,o$1={};function i$3(r){const i=r||o$1;if(!e.has(i)){const t=i$5(),o=a$3[i$5()]||t;e.set(i,new Intl.NumberFormat(o,r));}return m$3(e.get(i))}function u$2(t={}){const n={};return null!=t.digitSeparator&&(n.useGrouping=t.digitSeparator),null!=t.places&&(n.minimumFractionDigits=n.maximumFractionDigits=t.places),n}function m$1(t,n){return i$3(n).format(t)}p((()=>{e=new WeakMap,o$1={};}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i$2=n$1.getLogger("esri.intl");function s$2(t,r,n={}){const{format:o={}}=n;return r$1(t,(t=>u$1(t,r,o)))}function u$1(t$1,e,n){let o,i;const s=t$1.indexOf(":");if(-1===s?o=t$1.trim():(o=t$1.slice(0,s).trim(),i=t$1.slice(s+1).trim()),!o)return "";const u=t(o,e);if(null==u)return "";const m=n[i]||n[o];return m?c$2(u,m):i?a$2(u,i):f$1(u)}function c$2(t,r){switch(r.type){case"date":return L(t,r.intlOptions);case"number":return m$1(t,r.intlOptions);default:return i$2.warn("missing format descriptor for key {key}"),f$1(t)}}function a$2(t,r){switch(r.toLowerCase()){case"dateformat":return L(t);case"numberformat":return m$1(t);default:return i$2.warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?L(t):/^numberformat/i.test(r)?m$1(t):f$1(t)}}function f$1(t){switch(typeof t){case"string":return t;case"number":return m$1(t);case"boolean":return ""+t;default:return t instanceof Date?L(t):""}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s$1=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o={ar:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function i$1(t){var e;return null!=(e=o[t])&&e}const a$1=[],c$1=new Map;function d(t){for(const e of c$1.keys())m(t.pattern,e)&&c$1.delete(e);}function l$1(t){return a$1.includes(t)||(d(t),a$1.unshift(t)),{remove(){const e=a$1.indexOf(t);e>-1&&(a$1.splice(e,1),d(t));}}}async function u(t){const e=i$5();c$1.has(t)||c$1.set(t,f(t,e));const r=c$1.get(t);return await _.add(r),r}function h(t){if(!s$1.test(t))return null;const[,e,n]=s$1.exec(t),r=e+(n?"-"+n.toUpperCase():"");return i$1(r)?r:i$1(e)?e:null}async function f(e,n){const r=[];for(const t of a$1)if(m(t.pattern,e))try{return await t.fetchMessageBundle(e,n)}catch(s){r.push(s);}if(r.length)throw new s$5("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r});throw new s$5("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}function m(t,e){return "string"==typeof t?e.startsWith(t):t.test(e)}p((()=>{c$1.clear();}));const _=new class{constructor(){this._numLoading=0;}async waitForAll(){this._dfd&&await this._dfd.promise;}add(t){return this._increase(),t.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=E());}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function s(e,n,r,s){const a=n.exec(r);if(!a)throw new s$5("esri-intl:invalid-bundle",`Bundle id "${r}" is not compatible with the pattern "${n}"`);const c=a[1]?`${a[1]}/`:"",l=a[2],h$1=h(s),u=`${c}${l}.json`,w=h$1?`${c}${l}_${h$1}.json`:u;let f;try{f=await i(e(w));}catch(d){if(w===u)throw new s$5("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:d});try{f=await i(e(u));}catch(d){throw new s$5("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:d})}}return f}async function i(t){if(r$2(l.fetchBundleAsset))return l.fetchBundleAsset(t);const n=await L$1(t,{responseType:"text"});return JSON.parse(n.data)}class a{constructor({base:e="",pattern:t,location:r=new URL(window.location.href)}){let o;o="string"==typeof r?e=>new URL(e,new URL(r,e$1.location)).href:r instanceof URL?e=>new URL(e,r).href:r,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=o,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`);}fetchMessageBundle(e,t){return s(this.getAssetUrl,this.matcher,e,t)}}function c(e){return new a(e)}const l={};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
l$1(c({pattern:"esri/",location:a$5}));

export { L, S, u as a, m$1 as m, s$2 as s, u$2 as u };
