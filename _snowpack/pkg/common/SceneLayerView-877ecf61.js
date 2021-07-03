import { y as y$1, r, t, n as n$2, q as c$3 } from './Message-70b34921.js';
import { n } from './attributeUtils-b126a448.js';
import { p as p$2, I, L, V } from './fieldUtils-22be41cd.js';
import { e, z as s$1, p as p$3 } from './JSONSupport-9346590f.js';
import { n as n$1, a as a$1, y as y$2 } from './subclass-fe5fcf78.js';
import { d as d$1 } from './HandleOwner-fbf91095.js';
import { d as d$2 } from './LayerView-0b9de845.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o$2={setAttribute(){},rollback(){},commit(){}};function s(e,r){const s=r.attributes[e.objectIdField],i=e.sessions.get(s);if(i)return i;const a=y$1(r.attributes),u=new Set;if(null==s)return o$2;const c=e.attributeOverrides.createInteractiveEditSession(s),f=new Map,l=(t,e)=>{const n=f.get(t);if(null==n){const n=e.indexOf(s);return f.set(t,n),n}return n};let d=0;const b={setAttribute(t$1,o){if(0!==d)return;const s=e.fieldsIndex.get(t$1);if(t(s))return;const i=e.attributeStorageInfo.findIndex((t=>t.name===s.name));if(i<0)return;c.set(i,o);const a=e.attributeStorageInfo[i];let f=!1;u.add(t$1),e.forEachNode(((t,n)=>{const s=l(t,n);if(-1===s)return;const i=e.getAttributeData(t.index);if(i){const n=i[a.name];n&&(n[s]=o,e.setAttributeData(t.index,i,r),f=!0);}})),f&&e.clearMemCache();},rollback(){if(0===d){for(const t of u)this.setAttribute(t,a[t]);c.rollback(),d=1,e.sessions.delete(s);}},commit(){0===d&&(c.commit(),d=2,e.sessions.delete(s));}};return e.sessions.set(s,b),b}function i$1(t,n){const r$1=a(t,n);if(0===r$1.size)return;const o=new Map;for(let e=0;e<t.attributeStorageInfo.length;e++)o.set(t.attributeStorageInfo[e].name,e);let s=!1;r$1.forEach(((n,r$1)=>{const i=t.getAttributeData(r$1);let a=!1;n.forEach(((n,r$1)=>{const u=r(i)?i[r$1]:null,c=o.get(r$1);for(const{featureIndex:e,value:o,featureId:i}of n)u&&(u[e]=o,a=!0,s=!0),t.attributeOverrides.updateValue(i,c,o);})),a&&t.setAttributeData(r$1,i,null);})),s&&t.clearMemCache();}function a(t,e){const n$1=e.edits.updateFeatures;if(!n$1||0===n$1.length)return new d;const o=f(e),s=new d,i=new Map;for(let r=0;r<t.attributeStorageInfo.length;r++)i.set(t.attributeStorageInfo[r].name,r);const a=t.fieldsIndex,c=t.objectIdField,l=n$1.filter((t=>{const e=n(a,t.attributes,c);return o.has(e)}));return t.forEachNode(((e,n$1)=>{const o=new Set(n$1);for(const i of l){const f=n(a,i.attributes,c);if(!o.has(f))continue;const l=n$1.indexOf(f);for(const n in i.attributes){const r=t.fieldsIndex.normalizeFieldName(n),o=u(s,e.index,r),a=i.attributes[n];o.push({featureIndex:l,featureId:f,value:a});}}})),s}function u(t,e,n){const r=c$2(t,e),o=r.get(n);if(o)return o;const s=new Array;return r.set(n,s),s}function c$2(t,e){const n=t.get(e);if(n)return n;const r=new l;return t.set(e,r),r}function f(t){const e=new Set;if(!t.updatedFeatures)return e;for(const n of t.updatedFeatures)null!=n.objectId&&null==n.error&&e.add(n.objectId);return e}const l=Map,d=Map;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i(){return {requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:i,layer:{fieldsIndex:t},requiredFields:l}=this;return i.outFields?p$2(t,[...I(t,i.outFields),...l]):p$2(t,l)}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c$1=s=>{let a=class extends s{constructor(){super(...arguments),this.asyncUpdateState=new Map;}autoUpdateAsync(t,s){return o$1((s=>this.updateAsync(t,s)),s)}async updateAsync(t,s){if(!this.startAsyncUpdate(t)){try{const e=await s();this._set(t,e);}catch(a){n$2.getLogger(this.declaredClass).warn(`Async update of "${t}" failed. Async update functions should not throw exceptions.`);}this.endAsyncUpdate(t)&&this.updateAsync(t,s);}}startAsyncUpdate(t){var s;const e=null!=(s=this.asyncUpdateState.get(t))?s:0;return 1&e?(this.asyncUpdateState.set(t,2|e),!0):(this.asyncUpdateState.set(t,1|e),!1)}endAsyncUpdate(t){var s;const e=-2&(null!=(s=this.asyncUpdateState.get(t))?s:0);return 2&e?(this.asyncUpdateState.set(t,-3&e),!0):(this.asyncUpdateState.set(t,e),!1)}};return a=e([n$1("esri.core.AsyncUpdate")],a),a};function o$1(t,s){const e=()=>{o&&!p&&t(r);},r=()=>{if(!o||p)return s();o.clear(),p=!0;const t=a$1(o,s);return p=!1,t},c=()=>{o&&(o.destroy(),o=null);};let o=new s$1(e),p=!1;return t(r),{remove:c}}let p$1=class extends(c$1(p$3)){};p$1=e([n$1("esri.core.AsyncUpdate")],p$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p=n$2.getLogger("esri.views.3d.layers.support.SceneLayerViewRequiredFields");let c=class extends(c$1(d$1)){constructor(e){super(e);}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:r},rendererFields:s,labelingFields:t,viewFilterFields:o}=this;return p$2(e,[...c$3(r,[]),...c$3(s,[]),...c$3(t,[]),...c$3(o,[])])}initialize(){const e=this.layerView.layer;this.layer=e,this.handles.add([this.autoUpdateAsync("rendererFields",(()=>{const{fieldsIndex:e,renderer:r}=this.layer;return r?y((s=>r.collectRequiredFields(s,e))):null})),this.autoUpdateAsync("labelingFields",(()=>{const{layer:e}=this;return e.labelsVisible?y((r=>L(r,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,filter:r}=this.layerView;return y((s=>V(s,e,r)))}))]);}};async function y(e){const r=new Set;try{return await e(r),Array.from(r).sort()}catch(s){return p.error(s),null}}e([y$2()],c.prototype,"layerView",void 0),e([y$2()],c.prototype,"layer",void 0),e([y$2()],c.prototype,"requiredFields",null),e([y$2()],c.prototype,"rendererFields",void 0),e([y$2()],c.prototype,"labelingFields",void 0),e([y$2()],c.prototype,"viewFilterFields",void 0),c=e([n$1("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],c);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class o extends d$2{constructor(){super(...arguments),this.layer=null,this.filter=null;}get availableFields(){return []}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return !1}highlight(e){throw new Error("Not implemented")}queryFeatures(e,r){throw new Error("Not implemented")}queryObjectIds(e,r){throw new Error("Not implemented")}queryFeatureCount(e,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,r){throw new Error("Not implemented")}}e([y$2()],o.prototype,"layer",void 0),e([y$2()],o.prototype,"availableFields",null),e([y$2()],o.prototype,"maximumNumberOfFeatures",null),e([y$2({readOnly:!0})],o.prototype,"maximumNumberOfFeaturesExceeded",null),e([y$2()],o.prototype,"filter",void 0);

export { i as a, c, i$1 as i, o, s };
