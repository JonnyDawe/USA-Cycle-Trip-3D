import { U, L, p as pt } from './Loadable-d16b3d7d.js';
import { s as s$1 } from './promiseUtils-2ff2b194.js';
import { c as s$2 } from './Message-70b34921.js';
import { a } from './number-85e98a72.js';
import { J } from './projection-c73dd3c4.js';
import { t as t$1 } from './json-1b357c88.js';
import { d, u as u$1, k, I } from './SpatialReference-843b1520.js';
import { M } from './Point-ee7951c3.js';
import { t as t$2, a as t$3 } from './OptimizedFeature-ccef5b1d.js';
import { u as u$2 } from './FeatureStore-423b44b6.js';
import { p } from './projectionSupport-87ac6706.js';
import { H } from './QueryEngine-fd0ee569.js';
import { u as u$3 } from './clientSideDefaults-b49b5cc7.js';
import { e as e$1 } from './FieldsIndex-f71b4f3d.js';
import './subclass-fe5fcf78.js';
import './Polyline-ccd8fb47.js';
import './JSONSupport-9346590f.js';
import './jsonMap-e142bd84.js';
import './locale-b874fc68.js';
import './mathUtils-a477cc74.js';
import './unitUtils-b17203be.js';
import './mat4-8eb66d33.js';
import './assets-73c8998f.js';
import './aaBoundingRect-68336c41.js';
import './reader-fa0f173d.js';
import './aaBoundingBox-c0155c39.js';
import './featureConversionUtils-3ad98dca.js';
import './jsonUtils-f0a19240.js';
import './OptimizedFeatureSet-be12a9b8.js';
import './PooledRBush-0ff19c83.js';
import './quickselect-f4197880.js';
import './optimizedFeatureQueryEngineAdapter-ccc9dcb9.js';
import './centroid-80fbdb27.js';
import './MemCache-b33cfc4b.js';
import './normalizeUtils-5edbbb73.js';
import './ItemCache-2457b327.js';
import './WhereClause-55dc94e0.js';
import './QueryEngineCapabilities-377cef5c.js';
import './quantizationUtils-28a0adf6.js';
import './utils-7cd87224.js';
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
import './spatialQuerySupport-1a961a68.js';
import './PromiseQueue-edaf4a34.js';
import './basemapUtils-9ae6960d.js';
import './Basemap-ad33b4b0.js';
import './Collection-32506e74.js';
import './collectionUtils-a13e45d8.js';
import './loadAll-37e49bde.js';
import './asyncUtils-015dfd6e.js';
import './Portal-ff63481f.js';
import './intl-21ab9759.js';
import './PortalItem-4692b2a9.js';
import './writeUtils-7e5aaca1.js';
import './defaultsJSON-0467bd38.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n=/^\s*"([\S\s]*)"\s*$/,t=/""/g,e="\n",o=[","," ",";","|","\t"];function r(n,t){const e={},o=n.length;for(let r=0;r<o;r++)e[n[r]]=t[r];return e}function*i(n,t,e){let o=0;for(;o<=n.length;){const r=n.indexOf(t,o),i=n.substring(o,r>-1?r:void 0);o+=i.length+t.length,e&&!i.trim()||(yield i);}}function c(n){const t=n.includes("\r\n")?"\r\n":e;return i(n,t,!0)}function f(n,t){return i(n,t,!1)}function s(n){const t=n.trim();let e=0,r="";for(const i of o){const n=t.split(i).length;n>e&&(e=n,r=i);}return ""===r?null:r}function*l(o,i,c){let s="",l="",d=0,g=[];n:for(;;){const{value:h,done:x}=o.next();if(x)return;const p=f(h,c);t:for(;;){const{value:e,done:o}=p.next();if(o)break t;if(s+=l+e,l="",d+=u(e),d%2==0){if(d>0){const e=n.exec(s);if(!e){g=[],s="",d=0;continue n}g.push(e[1].replace(t,'"'));}else g.push(s);s="",d=0;}else l=c;}0===d?(yield r(i,g),g=[]):l=e;}}function u(n){let t=0,e=0;for(e=n.indexOf('"',e);e>=0;)t++,e=n.indexOf('"',e+1);return t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const b=u$3("esriGeometryPoint"),T=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],j=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],w=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],E=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,D=["csv"],q=[0,0];class S{constructor(e,t){this.x=e,this.y=t;}}const v=function(){const e=a(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),r=e.factor;return function(n){const o=t.exec(n);if(e.factor=r,!o)return NaN;let l=o[1];if(!o[1]){if(!o[2])return NaN;l=o[2],e.factor*=-1;}return l=l.replace(i,"").replace(e.decimal,"."),+l*e.factor}}(),C="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;class O{constructor(){this._fieldsIndex=null,this._queryEngine=null;}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null;}async load(e,t={}){const[i]=await Promise.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)]),n=this._parse(i,e);if(this._queryEngine=this._createQueryEngine(i,n),n.layerDefinition.extent=this._queryEngine.fullExtent,n.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;n.layerDefinition.timeInfo.timeExtent=[e,t];}return n}async applyEdits(){throw new s$1("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}async _fetch(i,n){if(!i)throw new s$1("csv-source:invalid-source","url not defined");const o=U(i);return (await L(o.path,{query:o.query,responseType:"text",signal:n.signal})).data}_parse(e,i){const n=i.parsing||{},r={columnDelimiter:n.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},l=c(e);let{value:s$2}=l.next();if(!s$2)throw new s$1("csv","CSV is empty",{csv:e});if(s$2=s$2.trim(),!n.columnDelimiter){const e=s(s$2);if(!e)throw new s$1("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");r.columnDelimiter=e;}const a=s$2.split(r.columnDelimiter),d=r.layerDefinition={name:pt(i.url,D)||"csv",drawingInfo:b,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const e=this._inferLocationInfo(a);if(!n.longitudeField&&!e.longitudeFieldName||!n.latitudeField&&!e.latitudeFieldName)throw new s$1("csv","Unable to identify latitudeField and/or longitudeField from CSV");r.locationInfo={longitudeFieldName:n.longitudeField||e.longitudeFieldName,latitudeFieldName:n.latitudeField||e.latitudeFieldName};}const u=this._inferFields(l,r.columnDelimiter,a,r.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of u){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;Object.assign(t,i),t.name=e;}}}d.fields=u;if(!d.fields.some((e=>"esriFieldTypeOID"===e.type&&(d.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};d.objectIdField=e.name,d.fields.unshift(e);}if(this._fieldsIndex=new e$1(d.fields),d.timeInfo){const e=d.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null;}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null;}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null;}e.startTimeField||e.endTimeField||(d.timeInfo=null);}return r}_inferLocationInfo(e){let t=null,i=null;const n=t=>e.find((e=>e.toLowerCase()===t));return w.some((e=>(t=n(e),!!t))),j.some((e=>(i=n(e),!!i))),{longitudeFieldName:t,latitudeFieldName:i}}_inferFields(e,t,i,n){const r=[],o=l(e,i,t),l$1=[];e:for(;l$1.length<10;){const{value:e,done:t}=o.next();if(t)break e;l$1.push(e);}for(const s of i)if(s===n.longitudeFieldName||s===n.latitudeFieldName)r.push({name:s,type:"esriFieldTypeDouble",alias:s});else {const e=l$1.map((e=>e[s])),t=this._inferFieldType(e),i={name:s,type:null,alias:s};switch(t){case"integer":i.type="esriFieldTypeInteger";break;case"double":i.type="esriFieldTypeDouble";break;case"date":i.type="esriFieldTypeDate",i.length=36;break;default:i.type="esriFieldTypeString",i.length=255;}r.push(i);}return r}_inferFieldType(e){if(!e.length)return "string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else {let t=v(e);if(!isNaN(t))return /[.,]/.test(e)||!C(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else {if(t=Number(e),!isNaN(t))return "double";if(-1===e.indexOf(","))i=!0;else {if(e=e.replace(",","."),t=Number(e),!isNaN(t))return "double";i=!0;}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return "string"}return "string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}_isValidDate(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return !1;let n=!0;if(s$2("chrome")&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!E.test(e[i]),i++;n=!t;}}return n}_createQueryEngine(e,t){const{latitudeFieldName:i,longitudeFieldName:n}=t.locationInfo,{objectIdField:r,fields:o,extent:u,timeInfo:y}=t.layerDefinition;let h=[];const N=[],_=new Set,b=new Set,j=[];for(const{name:l,type:s}of o)"esriFieldTypeDate"===s?_.add(l):T.indexOf(s)>-1&&b.add(l),l!==r&&j.push(l);let w=0;const E=c(e);E.next();const D=l(E,j,t.columnDelimiter);e:for(;;){const{value:e,done:t}=D.next();if(t)break e;const o=this._parseCoordinateValue(e[i]),l=this._parseCoordinateValue(e[n]);if(null!=l&&null!=o&&!isNaN(o)&&!isNaN(l)){e[i]=o,e[n]=l;for(const t in e)if(t!==i&&t!==n)if(_.has(t)){const i=new Date(e[t]);e[t]=this._isValidDate(i,e[t])?i.getTime():null;}else if(b.has(t)){const i=v(e[t]);isNaN(i)?e[t]=null:e[t]=i;}e[r]=w,w++,h.push(new S(l,o)),N.push(e);}}if(!d({wkid:4326},u.spatialReference))if(u$1(u.spatialReference))for(const l of h)[l.x,l.y]=M(l.x,l.y,q);else h=J(t$1,h,k.WGS84,u.spatialReference,null);const C=new u$2({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),O=new H({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:y,objectIdField:r,spatialReference:u.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:C}),V=[];for(let l=0;l<h.length;l++){const{x:e,y:t}=h[l],i=N[l];i[r]=l+1,V.push(new t$2(new t$3([],[e,t]),i,null,i[r]));}return C.addMany(V),O}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=v(e);return (isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await p(I,e);}catch{throw new s$1("csv-layer","Projection not supported")}}}

export default O;
export { j as csvLatitudeFieldNames, w as csvLongitudeFieldNames };
