import { s as s$2 } from './promiseUtils-2ff2b194.js';
import { y as y$2, r as r$1, j as t$4, o as o$3, t as t$5 } from './Message-70b34921.js';
import { e, a as a$2 } from './JSONSupport-9346590f.js';
import { y as y$1, n as n$2 } from './subclass-fe5fcf78.js';
import { r } from './enumeration-7d0c165d.js';
import { o as o$2 } from './jsonMap-e142bd84.js';
import './Loadable-d16b3d7d.js';
import { k as k$1 } from './SpatialReference-843b1520.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t$3;let p$3=t$3=class extends a$2{constructor(r){super(r),this.name=null,this.code=null;}clone(){return new t$3({name:this.name,code:this.code})}};e([y$1({type:String,json:{write:!0}})],p$3.prototype,"name",void 0),e([y$1({type:[String,Number],json:{write:!0}})],p$3.prototype,"code",void 0),p$3=t$3=e([n$2("esri.layers.support.CodedValue")],p$3);var c$3=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c$2=new o$2({inherited:"inherited",codedValue:"coded-value",range:"range"});let a$1=class extends a$2{constructor(r){super(r),this.name=null,this.type=null;}};e([y$1({type:String,json:{write:!0}})],a$1.prototype,"name",void 0),e([r(c$2)],a$1.prototype,"type",void 0),a$1=e([n$2("esri.layers.support.Domain")],a$1);var i$3=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$2;let d$2=p$2=class extends i$3{constructor(e){super(e),this.codedValues=null,this.type="coded-value";}getName(e){let o=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(o=e.name),!!o)));}return o}clone(){return new p$2({codedValues:y$2(this.codedValues),name:this.name})}};e([y$1({type:[c$3],json:{write:!0}})],d$2.prototype,"codedValues",void 0),e([r({codedValue:"coded-value"})],d$2.prototype,"type",void 0),d$2=p$2=e([n$2("esri.layers.support.CodedValueDomain")],d$2);var i$2=d$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t$2;let p$1=t$2=class extends i$3{constructor(r){super(r),this.type="inherited";}clone(){return new t$2}};e([r({inherited:"inherited"})],p$1.prototype,"type",void 0),p$1=t$2=e([n$2("esri.layers.support.InheritedDomain")],p$1);var c$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s$1;let n$1=s$1=class extends i$3{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range";}clone(){return new s$1({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};e([y$1({type:Number,json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range&&r.range[1]},write:{enabled:!1,overridePolicy(){return {enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,r,a){r[a]=[this.minValue||0,e];}}}})],n$1.prototype,"maxValue",void 0),e([y$1({type:Number,json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range&&r.range[0]},write:{target:"range",writer(e,r,a){r[a]=[e,this.maxValue||0];}}}})],n$1.prototype,"minValue",void 0),e([r({range:"range"})],n$1.prototype,"type",void 0),n$1=s$1=e([n$2("esri.layers.support.RangeDomain")],n$1);var i$1=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var o$1;function t$1(e,n){switch(e.type){case"range":{const a="range"in e?e.range[0]:e.minValue,r="range"in e?e.range[1]:e.maxValue;if(+n<a||+n>r)return o$1.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==n)))return o$1.INVALID_CODED_VALUE}return null}!function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value";}(o$1||(o$1={}));const u$1={key:"type",base:i$3,typeMap:{range:i$1,"coded-value":i$2,inherited:c$1}};function d$1(n){if(!n||!n.type)return null;switch(n.type){case"range":return i$1.fromJSON(n);case"codedValue":return i$2.fromJSON(n);case"inherited":return c$1.fromJSON(n)}return null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t;async function a(){return t||(t=(async()=>{const e=await import('./arcadeUtils-e7a1e061.js').then(function (n) { return n.aq; });return await e.arcade.load(),{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),t}const s=(e,r,t)=>o.create(e,r,t,null,["$feature"]),i=(e,r,t)=>o.create(e,r,t,null,["$feature","$view"]),n=(e,r,t,a)=>o.create(e,r,t,a,["$feature","$view"]);class o{constructor(e,r,t,a,s,i,c,n){this.script=e,this.evaluate=s;const o=Array.isArray(c)?c:c.fields;this.fields=o,this._syntaxTree=a,this._arcade=r,this._arcadeDictionary=t,this._arcadeFeature=i,this._spatialReference=n,this._referencesGeometry=r.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale");}static async create(t,s,i,c,n,l){const{arcade:u,Feature:p,Dictionary:d}=await a(),f=k$1.fromJSON(s),y=u.parseScript(t,l),h=n.reduce(((e,r)=>({...e,[r]:null})),{});let m=null;r$1(c)&&(m=new d(c),m.immutable=!0,h.$config=null);const _=u.scriptUsesGeometryEngine(y)&&u.enableGeometrySupport(),F=u.scriptUsesFeatureSet(y)&&u.enableFeatureSetSupport(),w=u.scriptIsAsync(y)&&u.enableAsyncSupport(),S={vars:h,spatialReference:f,useAsync:!!w},b=new d;b.immutable=!1,b.setField("scale",0);const $=u.compileScript(y,S),x=e=>("$view"in e&&e.$view&&(b.setField("scale",e.$view.scale),e.$view=b),m&&(e.$config=m),$({vars:e,spatialReference:f}));return await Promise.all([_,F,w]),new o(t,u,d,y,x,new p,i,f)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}repurposeAdapter(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],f=["field","normalizationField"];function c(e,n){if(null!=e&&null!=n)for(const i of Array.isArray(e)?e:[e])if(d(u,i,n),"visualVariables"in i&&i.visualVariables)for(const e of i.visualVariables)d(f,e,n);}function d(e,n,i){if(e)for(const l of e){const e=t$4(l,n),o=e&&"function"!=typeof e&&i.get(e);o&&o$3(l,o.name,n);}}function m(e,n){if(null!=e&&null!=n&&n.fields.length)if("startField"in e){const i=n.get(e.startField),t=n.get(e.endField);e.startField=i&&i.name||null,e.endField=t&&t.name||null;}else {const i=n.get(e.startTimeField),t=n.get(e.endTimeField);e.startTimeField=i&&i.name||null,e.endTimeField=t&&t.name||null;}}const y=new Set;function p(e,n){return e&&n?(y.clear(),g(y,e,n),Array.from(y).sort()):[]}function g(e,n,i){var t;if(i)if(null!=n&&null!=(t=n.fields)&&t.length)if(i.includes("*"))for(const{name:r}of n.fields)e.add(r);else for(const r of i)F(e,n,r);else {if(i.includes("*"))return e.clear(),void e.add("*");for(const n of i)e.add(n);}}function F(e,n,i){if("string"==typeof i)if(n){const t=n.get(i);t&&e.add(t.name);}else e.add(i);}function I(e,i){return t$5(i)||t$5(e)?[]:i.includes("*")?e.fields.map((e=>e.name)):i}async function T(e,n,i){if(!i)return;const{arcadeUtils:t}=await a(),r=t.extractFieldNames(i);for(const l of r)F(e,n,l);}async function x(n,i,t){if(t&&"1=1"!==t){const r=(await import('./WhereClause-55dc94e0.js')).WhereClause.create(t,i);if(!r.isStandardized)throw new s$2("fieldUtils:collectFilterFields","Where clause is not standardized");g(n,i,r.fieldNames);}}function h({displayField:e,fields:n}){return e||(n&&n.length?w(n,"name-or-title")||w(n,"unique-identifier")||w(n,"type-or-category")||S(n):null)}function S(e){for(const n of e){if(!n||!n.name)continue;const e=n.name.toLowerCase();if(e.indexOf("name")>-1||e.indexOf("title")>-1)return n.name}return null}function w(e,n){for(const i of e)if(i&&i.valueType&&i.valueType===n)return i.name;return null}async function A(e,n){if(!n)return;const i=t$4("elevationInfo.featureExpressionInfo",n);return i?i.collectRequiredFields(e,n.fieldsIndex):void 0}async function N(e,n,i){i.outStatistic.onStatisticValueExpression?T(e,n,i.outStatistic.onStatisticValueExpression):e.add(i.outStatistic.onStatisticField);}async function E(e,n,i){n&&i&&"cluster"===i.type&&i.fields&&await Promise.all(i.fields.map((i=>N(e,n.fieldsIndex,i))));}async function V(e,n,t){n&&(n.timeInfo&&r$1(t)&&t.timeExtent&&g(e,n.fieldsIndex,[n.timeInfo.startField,n.timeInfo.endField]),n.floorInfo&&g(e,n.fieldsIndex,[n.floorInfo.floorField]),r$1(t)&&r$1(t.where)&&await x(e,n.fieldsIndex,t.where));}function D(e){if(!e)return [];const n="editFieldsInfo"in e&&e.editFieldsInfo;return n?p(e.fieldsIndex,[n&&n.creatorField,n&&n.creationDateField,n&&n.editorField,n&&n.editDateField]):[]}async function L(e,n){const{labelingInfo:i,fieldsIndex:t}=n;i&&i.length&&await Promise.all(i.map((n=>U(e,t,n))));}async function U(e,n,i){if(!i)return;const t=i.getLabelExpression(),r=i.where;if("arcade"===t.type)await T(e,n,t.expression);else {const i=t.expression.match(/{[^}]*}/g);i&&i.forEach((i=>{F(e,n,i.slice(1,-1));}));}await x(e,n,r);}function j(e){const n=e.defaultValue;return void 0!==n&&M(e,n)?n:e.nullable?null:void 0}function z(e){return "number"==typeof e&&!isNaN(e)&&isFinite(e)}function k(e){return null===e||z(e)}const P="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function R(e){return null===e||P(e)}function C(e){return null!=e&&"string"==typeof e}function G(e){return null===e||C(e)}function q(){return !0}function M(e,n){let i;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":i=e.nullable?R:P;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":i=e.nullable?k:z;break;case"string":case"esriFieldTypeString":i=e.nullable?G:C;break;default:i=q;}return 1===arguments.length?i:i(n)}const W=["integer","small-integer","single","double"],Y=new Set([...W,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function J(e){return null!=e&&Y.has(e.type)}function X(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}var K,Q;function Z(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function ee(e,n){return e.nullable&&null===n?null:J(e)&&!ne(e.type,Number(n))?K.OUT_OF_RANGE:M(e,n)?e.domain?t$1(e.domain,n):null:Q.INVALID_TYPE}function ne(e,n){const i="string"==typeof e?te(e):e;return !!i&&(i.isInteger?P(n)&&n>=i.min&&n<=i.max:n>=i.min&&n<=i.max)}function te(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return le;case"esriFieldTypeInteger":case"integer":return oe;case"esriFieldTypeSingle":case"single":return ae;case"esriFieldTypeDouble":case"double":return se}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range";}(K||(K={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type";}(Q||(Q={}));const le={min:-32768,max:32767,isInteger:!0},oe={min:-2147483648,max:2147483647,isInteger:!0},ae={min:-34e37,max:12e37,isInteger:!1},se={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function ue(e,n,i){switch(e){case o$1.INVALID_CODED_VALUE:return `Value ${i} is not in the coded domain - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case o$1.VALUE_OUT_OF_RANGE:return `Value ${i} is out of the range of valid values - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case Q.INVALID_TYPE:return `Value ${i} is not a valid value for the field type - field: ${n.name}, type: ${n.type}, nullable: ${n.nullable}`;case K.OUT_OF_RANGE:{const{min:e,max:t}=te(n.type);return `Value ${i} is out of range for the number type - field: ${n.name}, type: ${n.type}, value range is ${e} to ${t}`}}}function fe(e,n){return !ce(e,n,null)}function ce(e,n,t){if(!n||!n.attributes||!e){if(r$1(t))for(const n of e)t.add(n);return !0}const r=n.attributes;let l=!1;for(const o of e)if(!(o in r)){if(l=!0,!r$1(t))break;t.add(o);}return l}

export { A, D, E, F, I, J, L, T, V, X, Z, a, c$1 as b, c, d$1 as d, i$1 as e, fe as f, g, h, i$2 as i, i as j, j as k, ee as l, m, n, ue as o, p, o as q, ce as r, s, c$3 as t, u$1 as u };
