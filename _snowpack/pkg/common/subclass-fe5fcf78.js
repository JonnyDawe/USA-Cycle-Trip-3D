import { n as n$7, r as r$5, y as y$5, m as m$3, s as s$7, o as o$7 } from './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n$6=n$7.getLogger("esri.core.Accessor");function r$4(e){return null==e?e:new Date(e)}function t$2(e){return null==e?e:!!e}function o$6(e){return null==e?e:e.toString()}function u$7(e){return null==e?e:(e=parseFloat(e),isNaN(e)?0:e)}function a$5(e){return null==e?e:Math.round(parseFloat(e))}function s$6(e){return e&&e.constructor&&void 0!==e.constructor.__accessorMetadata__}function l$4(e,n){return null!=n&&e&&!(n instanceof e)}function i$8(e){return e&&"isCollection"in e}function c$5(e){return e&&e.Type?"function"==typeof e.Type?e.Type:e.Type.base:null}function f$6(e,n){if(!n||!n.constructor||!i$8(n.constructor))return p$4(e,n)?n:new e(n);const r=c$5(e.prototype.itemType),t=c$5(n.constructor.prototype.itemType);return r?t?r===t?n:r.prototype.isPrototypeOf(t.prototype)?new e(n):(p$4(e,n),n):new e(n):n}function p$4(e,r){return !!s$6(r)&&(n$6.error("Accessor#set","Assigning an instance of '"+(r.declaredClass||"unknown")+"' which is not a subclass of '"+v$2(e)+"'"),!0)}function y$4(e,n){return null==n?n:i$8(e)?f$6(e,n):l$4(e,n)?p$4(e,n)?n:new e(n):n}function v$2(e){return e&&e.prototype&&e.prototype.declaredClass||"unknown"}function g$3(e){switch(e){case Number:return u$7;case N:return a$5;case Boolean:return t$2;case String:return o$6;case Date:return r$4;default:return y$4.bind(null,e)}}function d$2(e,n){const r=g$3(e);return 1===arguments.length?r:r(n)}function h$3(e,n,r){return 1===arguments.length?h$3.bind(null,e):n?Array.isArray(n)?n.map((n=>e(n,r))):[e(n,r)]:n}function b(e,n){return 1===arguments.length?h$3(d$2.bind(null,e)):h$3(d$2.bind(null,e),n)}function m$2(e,n,r){return 0!==n&&Array.isArray(r)?r.map((r=>m$2(e,n-1,r))):e(r)}function w(e,n,r){if(2===arguments.length)return w.bind(null,e,n);if(!r)return r;let t=n,o=r=m$2(e,n,r);for(;t>0&&Array.isArray(o);)t--,o=o[0];if(void 0!==o)for(let u=0;u<t;u++)r=[r];return r}function A$1(e,n,r){return 2===arguments.length?w(d$2.bind(null,e),n):w(d$2.bind(null,e),n,r)}function $(e){return !!Array.isArray(e)&&!e.some((n=>{const r=typeof n;return !("string"===r||"number"===r||"function"===r&&e.length>1)}))}function j$2(e,r){if(2===arguments.length)return j$2(e).call(null,r);const t=new Set,o=e.filter((e=>"function"!=typeof e)),u=e.filter((e=>"function"==typeof e));for(const n of e)"string"!=typeof n&&"number"!=typeof n||t.add(n);let a=null,s=null;return (e,r)=>{if(null==e)return e;const i=typeof e,c="string"===i||"number"===i;return c&&(t.has(e)||u.some((e=>"string"===i&&e===String||"number"===i&&e===Number)))||"object"===i&&u.some((n=>!l$4(e,n)))?e:(c&&o.length?(a||(a=o.map((e=>"string"==typeof e?`'${e}'`:`${e}`)).join(", ")),n$6.error("Accessor#set",`'${e}' is not a valid value for this property, only the following values are valid: ${a}`)):"object"==typeof e&&u.length?(s||(s=u.map((e=>v$2(e))).join(", ")),n$6.error("Accessor#set",`'${e}' is not a valid value for this property, value must be one of ${s}`)):n$6.error("Accessor#set",`'${e}' is not a valid value for this property`),r&&(r.valid=!1),null)}}function k(e,r){if(2===arguments.length)return k(e).call(null,r);const t={},o=[],u=[];for(const n in e.typeMap){const r=e.typeMap[n];t[n]=d$2(r),o.push(v$2(r)),u.push(n);}const a=()=>`'${o.join("', '")}'`,i=()=>`'${u.join("', '")}'`,c="string"==typeof e.key?n=>n[e.key]:e.key;return r=>{if(e.base&&!l$4(e.base,r))return r;if(null==r)return r;const o=c(r)||e.defaultKeyValue,u=t[o];if(!u)return n$6.error("Accessor#set",`Invalid property value, value needs to be one of ${a()}, or a plain object that can autocast (having .type = ${i()})`),null;if(!l$4(e.typeMap[o],r))return r;if("string"==typeof e.key&&!s$6(r)){const n={};for(const t in r)t!==e.key&&(n[t]=r[t]);return u(n)}return u(r)}}class N{}const S={native:e=>({type:"native",value:e}),array:e=>({type:"array",value:e}),oneOf:e=>({type:"one-of",values:e})};function T(e){if(!e||!("type"in e))return !1;switch(e.type){case"native":case"array":case"one-of":return !0}return !1}function M(e){switch(e.type){case"native":return d$2(e.value);case"array":return h$3(M(e.value));case"one-of":return _$1(e);default:return null}}function _$1(e){let r=null;return (t,o)=>C(t,e)?t:(null==r&&(r=B(e)),n$6.error("Accessor#set",`Invalid property value, value needs to be of type ${r}`),o&&(o.valid=!1),null)}function B(e){switch(e.type){case"native":switch(e.value){case Number:return "number";case String:return "string";case Boolean:return "boolean";case N:return "integer";case Date:return "date";default:return v$2(e.value)}case"array":return `array of ${B(e.value)}`;case"one-of":{const n=e.values.map((e=>B(e)));return `one of ${n.slice(0,n.length-1)} or ${n[n.length-1]}`}}return "unknown"}function C(e,n){if(null==e)return !0;switch(n.type){case"native":switch(n.value){case Number:case N:return "number"==typeof e;case Boolean:return "boolean"==typeof e;case String:return "string"==typeof e}return e instanceof n.value;case"array":return !!Array.isArray(e)&&!e.some((e=>!C(e,n.value)));case"one-of":return n.values.some((n=>C(e,n)))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$3(r){return n$5((()=>r.forEach((r=>r$5(r)&&r.remove()))))}function n$5(e){return {remove:()=>{e&&(e(),e=void 0);}}}function u$6(e,r){const o=setTimeout(e,r);return n$5((()=>clearTimeout(o)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$5(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function i$7(r,n){return null!=r&&r.metadatas&&null!=r.metadatas[n]}function u$5(r,n,t){if(t){return a$4(r,n,{policy:t,path:""})}return a$4(r,n,null)}function a$4(r,e,i){return e?Object.keys(e).reduce((function(r,o){let u=null,l="merge";if(i&&(u=i.path?`${i.path}.${o}`:o,l=i.policy(u)),"replace"===l)return r[o]=e[o],r;if(void 0===r[o])return r[o]=y$5(e[o]),r;let f=r[o],s=e[o];if(f===s)return r;if(Array.isArray(s)||Array.isArray(r))f=f?Array.isArray(f)?r[o]=f.concat():r[o]=[f]:r[o]=[],s&&(Array.isArray(s)||(s=[s]),s.forEach((r=>{-1===f.indexOf(r)&&f.push(r);})));else if(s&&"object"==typeof s)if(i){const n=i.path;i.path=m$3(u),r[o]=a$4(f,s,i),i.path=n;}else r[o]=a$4(f,s,null);else r.hasOwnProperty(o)&&!e.hasOwnProperty(o)||(r[o]=s);return r}),r||{}):r}function l$3(r){return r?"string"==typeof r&&-1===r.indexOf(".")?r:f$5(r):r}function f$5(r){return Array.isArray(r)?r:r.split(".")}function s$5(r){return r.indexOf(",")>-1?r.split(",").map((r=>r.trim())):[r.trim()]}function c$4(r){if(Array.isArray(r)){const n=[];for(const t of r)n.push(...s$5(t));return n}return s$5(r)}function y$3(n,t,e,i){const o=c$4(t);if(1!==o.length){const t=o.map((r=>i(n,r,e)));return r$3(t)}return i(n,o[0],e)}function h$2(r){let n=!1;return ()=>{n||(n=!0,r());}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$4(t,e){const i="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(i,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const o=e$5(e);return i$7(o,i)?o.get(i):e[i]}function i$6(t,n,r){if(null==t)return t;const o=e$4(n[r],t);return !o&&r<n.length-1?void 0:r===n.length-1?o:i$6(o,n,r+1)}function o$5(n,r,o=0){return "string"==typeof r&&-1===r.indexOf(".")?e$4(r,n):i$6(n,f$5(r),o)}function u$4(t,n){return o$5(t,n)}function f$4(t,n){return void 0!==o$5(n,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class o$4{constructor(t){this.autoDestroy=!1,this.properties=t;}}function n$4(r){let n=r.constructor.__accessorMetadata__;const c=Object.prototype.hasOwnProperty.call(r.constructor,"__accessorMetadata__");if(n){if(!c){const e=Object.create(n.properties),c=n.autoDestroy;for(const r in e)e[r]=y$5(e[r]);n=new o$4(e),n.autoDestroy=c,Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});}}else n=new o$4({}),Object.defineProperty(r.constructor,"__accessorMetadata__",{value:n,enumerable:!1,configurable:!0,writable:!0});return m$3(r.constructor.__accessorMetadata__)}function c$3(t){return n$4(t).properties}function s$4(t,e){const r=c$3(t);let o=r[e];return o||(o=r[e]={}),o}function i$5(t,e){return u$5(t,e,_)}const p$3=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function _(t){return p$3.test(t)?"replace":"merge"}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$1(e,r,s){if(e&&r)if("object"==typeof r)for(const o of Object.getOwnPropertyNames(r))t$1(e,o,r[o]);else {if(-1!==r.indexOf(".")){const i=r.split("."),f=i.splice(i.length-1,1)[0];return void t$1(u$4(e,i),f,s)}e[r]=s;}}n$7.getLogger("esri.core.accessorSupport.set");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const g$2=n$7.getLogger("esri.core.accessorSupport.decorators.property");function y$2(t={}){return (n,o,s)=>{if(n===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${n.name}.${o}. Accessor does not support static properties.`);const i=s$4(n,o);s&&(s.get||s.set?(i.get=s.get||i.get,i.set=s.set||i.set):"value"in s&&("value"in t&&g$2.warn(`@property() will redefine the value of "${o}" on "${n.constructor.name}" already defined in the metadata`,t),i.value=t.value=s.value)),null!=t.readOnly&&(i.readOnly=t.readOnly);const a=t.aliasOf;if(a){const t="string"==typeof a?a:a.source,e="string"==typeof a?null:!0===a.overridable;let r;i.dependsOn=[t],i.get=function(){let e=u$4(this,t);if("function"==typeof e){r||(r=t.split(".").slice(0,-1).join("."));const n=u$4(this,r);n&&(e=e.bind(n));}return e},i.readOnly||(i.set=e?function(t){void 0!==t?this._override(o,t):this._clearOverride(o);}:function(e){t$1(this,t,e);});}const u=t.type,c=t.types;i.cast||(u?i.cast=v$1(u):c&&(Array.isArray(c)?i.cast=h$3(k(c[0])):i.cast=k(c))),t.range&&(i.cast=j$1(i.cast,t.range)),i$5(i,t);}}function h$1(t,e,r){const n=s$4(t,r);n.json||(n.json={});let o=n.json;return void 0!==e&&(o.origins||(o.origins={}),o.origins[e]||(o.origins[e]={}),o=o.origins[e]),o}function v$1(t){let e=0,r=t;if(T(t))return M(t);for(;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],e++;const l=r;if($(l))return 0===e?j$2(l):w(j$2(l),e);if(1===e)return b(l);if(e>1)return A$1(l,e);const f=t;return f.from?f.from:d$2(f)}function j$1(t,e){return r=>{let n=+t(r);return null!=e.step&&(n=Math.round(n/e.step)*e.step),null!=e.min&&(n=Math.max(e.min,n)),null!=e.max&&(n=Math.min(e.max,n)),n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$3(n){if(n.json&&n.json.origins){const o=n.json.origins,e={"web-document":["web-scene","web-map"]};for(const n in e)if(o[n]){const s=o[n];e[n].forEach((n=>{o[n]=s;})),delete o[n];}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t extends s$7{constructor(e,r,s){if(super(e,r,s),!(this instanceof t))return new t(e,r,s)}}t.prototype.type="warning";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$3(e){return !!e&&e.prototype&&e.prototype.declaredClass&&0===e.prototype.declaredClass.indexOf("esri.core.Collection")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i$4=n$7.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");function p$2(t,r,n){var o,i;t&&(!n&&!r.read||null!=(o=r.read)&&o.reader||!1===(null==(i=r.read)?void 0:i.enabled)||d$1(t)&&o$7("read.reader",u$3(t),r));}function u$3(t){var e;const r=null!=(e=t.ndimArray)?e:0;if(r>1)return c$2(t);if(1===r)return a$3(t);if("type"in t&&l$2(t.type)){var n,o;const e=null==(n=t.type.prototype)||null==(o=n.itemType)?void 0:o.Type,r=a$3("function"==typeof e?{type:e}:{types:e});return (e,n,o)=>{const i=r(e,n,o);return i?new t.type(i):i}}return s$3(t)}function s$3(t){return "type"in t?y$1(t.type):j(t.types)}function y$1(t){return t.prototype.read?(e,r,n)=>{if(null==e)return e;const o=typeof e;if("object"!==o)return void i$4.error(`Expected JSON value of type 'object' to deserialize type '${t.prototype.declaredClass}', but got '${o}'`);const p=new t;return p.read(e,n),p}:t.fromJSON}function f$3(t,e,r,n){return 0!==n&&Array.isArray(e)?e.map((e=>f$3(t,e,r,n-1))):t(e,void 0,r)}function c$2(t){var e;const r=s$3(t),n=f$3.bind(null,r),o=null!=(e=t.ndimArray)?e:0;return (t,e,r)=>{if(null==t)return t;t=n(t,r,o);let i=o,p=t;for(;i>0&&Array.isArray(p);)i--,p=p[0];if(void 0!==p)for(let n=0;n<i;n++)t=[t];return t}}function a$3(t){const e=s$3(t);return (t,r,n)=>{if(null==t)return t;if(Array.isArray(t)){const r=[];for(const o of t){const t=e(o,void 0,n);void 0!==t&&r.push(t);}return r}const o=e(t,void 0,n);return void 0!==o?[o]:void 0}}function l$2(t){if(!e$3(t))return !1;const e=t.prototype.itemType;return !(!e||!e.Type)&&("function"==typeof e.Type?v(e.Type):m$1(e.Type))}function d$1(t){return "types"in t?m$1(t.types):v(t.type)}function v(t){return !Array.isArray(t)&&(!!t&&t.prototype&&("read"in t.prototype||"fromJSON"in t||l$2(t)))}function m$1(t){for(const e in t.typeMap){if(!v(t.typeMap[e]))return !1}return !0}function j(t$1){var e;let n=null;const o=null!=(e=t$1.errorContext)?e:"type";return (e,p,u)=>{if(null==e)return e;const s=typeof e;if("object"!==s)return void i$4.error(`Expected JSON value of type 'object' to deserialize, but got '${s}'`);n||(n=g$1(t$1));const y=t$1.key;if("string"!=typeof y)return;const f=e[y],c=f?n[f]:t$1.defaultKeyValue?t$1.typeMap[t$1.defaultKeyValue]:void 0;if(!c){const t$1=`Type '${f||"unknown"}' is not supported`;return u&&u.messages&&e&&u.messages.push(new t(`${o}:unsupported`,t$1,{definition:e,context:u})),void i$4.error(t$1)}const a=new c;return a.read(e,u),a}}function g$1(t){const e={};for(const i in t.typeMap){var r,o;const p=t.typeMap[i],u=n$4(p.prototype);if("function"==typeof t.key)continue;const s=u.properties[t.key];if(!s)continue;null!=(r=s.json)&&r.type&&Array.isArray(s.json.type)&&1===s.json.type.length&&"string"==typeof s.json.type[0]&&(e[s.json.type[0]]=p);const y=null==(o=s.json)?void 0:o.write;if(!y||!y.writer){e[i]=p;continue}const f=y.target,c="string"==typeof f?f:t.key,a={};y.writer(i,a,c),a[c]&&(e[a[c]]=p);}return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$2(e){if(e.json||(e.json={}),o$3(e.json),n$2(e.json),r$2(e.json),e.json.origins)for(const t in e.json.origins)o$3(e.json.origins[t]),n$2(e.json.origins[t]),r$2(e.json.origins[t]);return !0}function r$2(e){e.name&&(e.read&&"object"==typeof e.read?void 0===e.read.source&&(e.read.source=e.name):e.read={source:e.name},e.write&&"object"==typeof e.write?void 0===e.write.target&&(e.write.target=e.name):e.write={target:e.name});}function o$3(e){"boolean"==typeof e.read?e.read={enabled:e.read}:"function"==typeof e.read?e.read={enabled:!0,reader:e.read}:e.read&&"object"==typeof e.read&&void 0===e.read.enabled&&(e.read.enabled=!0);}function n$2(e){"boolean"==typeof e.write?e.write={enabled:e.write}:"function"==typeof e.write?e.write={enabled:!0,writer:e.write}:e.write&&"object"==typeof e.write&&void 0===e.write.enabled&&(e.write.enabled=!0);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$1(r,n){var i;if(!n.write||n.write.writer||!1===n.write.enabled&&!n.write.overridePolicy)return;const o=null!=(i=null==r?void 0:r.ndimArray)?i:0;r&&(1===o||"type"in r&&e$3(r.type))?n.write.writer=u$2:n.write.writer=o>1?l$1(o):e$1;}function e$1(t,n,e,o){o$7(e,i$3(t,o),n);}function i$3(r,t){return r&&"function"==typeof r.write?r.write({},t):r&&"function"==typeof r.toJSON?r.toJSON():"number"==typeof r?o$2(r):r}function o$2(r){return r===-1/0?-Number.MAX_VALUE:r===1/0?Number.MAX_VALUE:isNaN(r)?null:r}function u$2(t,n,e,o){let u;null===t?u=null:t&&"function"==typeof t.map?(u=t.map((r=>i$3(r,o))),"function"==typeof u.toArray&&(u=u.toArray())):u=[i$3(t,o)],o$7(e,u,n);}function f$2(r,t,n){return 0!==n&&Array.isArray(r)?r.map((r=>f$2(r,t,n-1))):i$3(r,t)}function l$1(t){return function(n,e,i,o){let u;if(null===n)u=null;else {u=f$2(n,o,t);let r=t,e=u;for(;r>0&&Array.isArray(e);)r--,e=e[0];if(void 0!==e)for(let t=0;t<r;t++)u=[u];}o$7(i,u,e);}}

function i$2(r,o){return a$2(r,"read",o)}function s$2(r,o){return a$2(r,"write",o)}function a$2(r,o,t){let n=r&&r.json;if(r&&r.json&&r.json.origins&&t){const e=r.json.origins[t.origin];e&&("any"===o||o in e)&&(n=e);}return n}function p$1(r){const o=y(r);if(r.json.origins)for(const n in r.json.origins){const i=r.json.origins[n];p$2(o,i,!1),n$1(o,i);}p$2(o,r.json,!0),n$1(o,r.json);}function y(r){return r.type?f$1(r):u$1(r)}function f$1(o){if(!o.type)return;let t=0,n=o.type;for(;Array.isArray(n)&&!$(n);)n=n[0],t++;return {type:n,ndimArray:t}}function u$1(r){if(!r.types)return;let o=0,t=r.types;for(;Array.isArray(t);)t=t[0],o++;return {types:t,ndimArray:o}}const c$1={processPrototypePropertyMetadata(r,t){e$2(t)&&(n$3(t),p$1(t));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o$1=[c$1];function e(t,e){for(const r of o$1)if(r.processPrototypePropertyMetadata)for(const o in t){const s=t[o];r.processPrototypePropertyMetadata(o,s,t,e);}}function r$1(t,e){for(const r of o$1)if(r.processClassPropertyMetadata)for(const o in t){const s=t[o];r.processClassPropertyMetadata(o,s,t,e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let o,r=[];const s$1=n$7.getLogger("esri.core.Accessor");function i$1(t){void 0!==o&&o.onObservableAccessed(t);}let l=!1,f=!1;function a$1(t,n,e){if(l)return g(t,n,e);u(t);const o=n.call(e);return p(),o}function g(t,n,e){const o=l;l=!0,u(t);let r=null;try{r=n.call(e);}catch(c){f&&s$1.error(c);}return p(),l=o,r}function u(t){o=t,r.push(t);}function p(){const t=r.pop();o=r.length>0?r[r.length-1]:void 0,void 0!==t&&t.onTrackingEnd();}function d(t,n){if(32&n.flags)return;const e=f;f=!1,64&n.flags?g(n,n.metadata.get,t):h(t,n),f=e;}const m=[];function h(t,e){128&e.flags||(e.flags|=128,g(e,(()=>{const o=e.metadata.dependsOn||m;for(const e of o)if("string"==typeof e&&-1===e.indexOf("."))A(t,e,!1);else {const o=f$5(e);for(let n=0,e=t;n<o.length&&null!=e&&"object"==typeof e;++n)e=A(e,o[n],n!==o.length-1);}})),e.flags&=-129);}function A(t,n,o){const r="?"===n[n.length-1]?n.slice(0,-1):n;if(null!=t.getItemAt||Array.isArray(t)){const n=parseInt(r,10);if(!isNaN(n))return Array.isArray(t)?t[n]:t.getItemAt(n)}const s=e$5(t),c=null==s?void 0:s.properties.get(r);return c&&(i$1(c),d(t,c)),o?t[r]:void 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s=new Set,i=new Set;function n(t){return o=>{o.prototype.declaredClass=t,e(n$4(o.prototype).properties,t),c(o);const n=[],a=[];let l=o.prototype;for(;l;)l.hasOwnProperty("initialize")&&!s.has(l.initialize)&&(s.add(l.initialize),n.push(l.initialize)),l.hasOwnProperty("destroy")&&!i.has(l.destroy)&&(i.add(l.destroy),a.push(l.destroy)),l=Object.getPrototypeOf(l);s.clear(),i.clear();class p extends o{constructor(...e){if(super(...e),this.constructor===p&&"function"==typeof this.postscript){if(n.length&&Object.defineProperty(this,"initialize",{enumerable:!1,configurable:!0,value(){for(let e=n.length-1;e>=0;e--)n[e].call(this);}}),a.length){let e=!1;Object.defineProperty(this,"destroy",{enumerable:!1,configurable:!0,value(){if(!e){e=!0;for(let e=0;e<a.length;e++)a[e].call(this);}}});}this.postscript(...e);}}}return p.__accessorMetadata__=n$4(o.prototype),p.prototype.declaredClass=t,p}}function a(e,t){return null==t.get?function(){const t=this.__accessor__.properties.get(e);if(void 0===t)return;i$1(t);const r=this.__accessor__.store;return r.has(e)?r.get(e):t.metadata.value}:function(){const t=this.__accessor__.properties.get(e);if(void 0!==t)return t.getComputed()}}function c(e){const o=e.prototype,s=o.declaredClass,i=n$4(o).properties;r$1(i,s);const n={};for(const t of Object.getOwnPropertyNames(i)){const e=i[t];n[t]={enumerable:!0,configurable:!0,get:a(t,e),set(r){const o=this.__accessor__;if(void 0!==o){if(!Object.isFrozen(this)){if(o.initialized&&e.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${t}' of ${this.declaredClass}`);if(2===o.lifecycle&&e.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${t}' of ${this.declaredClass}`);o.set(t,r);}}else Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:r});}};}Object.defineProperties(e.prototype,n);}

export { n$5 as A, y$4 as B, a$5 as C, u$3 as D, o$6 as E, o$2 as F, u$6 as G, j$1 as H, N, S, a$1 as a, h as b, d as c, d$2 as d, e$5 as e, y$3 as f, h$2 as g, h$1 as h, i$1 as i, n$4 as j, u$4 as k, l$3 as l, i$2 as m, n, o$5 as o, a$2 as p, f$4 as q, s$2 as r, s$4 as s, t$1 as t, u$7 as u, u$5 as v, k as w, r$3 as x, y$2 as y, t as z };