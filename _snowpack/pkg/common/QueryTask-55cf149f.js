import { e, a as a$5 } from './JSONSupport-9346590f.js';
import { d as d$4, s as s$7 } from './promiseUtils-2ff2b194.js';
import { r as r$1, c as s$6, t as t$4 } from './Message-70b34921.js';
import { y as y$1, N, n as n$7 } from './subclass-fe5fcf78.js';
import { b, K } from './Query-619f76b0.js';
import { e as e$1, p as p$3 } from './Task-41e0c8b8.js';
import { L, k as j, l as i$1, D, U } from './Loadable-d16b3d7d.js';
import { t as t$1, p as p$2, S, f, y as y$2, c as c$2 } from './query-de9ba206.js';
import { u as u$3, l as l$2, v } from './TopFeaturesQuery-b22907ac.js';
import { M } from './Polyline-ccd8fb47.js';
import g$1 from './FeatureSet-d8329cbc.js';
import { n as n$8 } from './compilerUtils-7bbb76dc.js';
import { a as ae, e as ee } from './featureConversionUtils-3ad98dca.js';
import { t as t$2 } from './zscale-9df5d655.js';
import { d as d$3 } from './jsonUtils-f0a19240.js';
import { L as L$1 } from './normalizeUtils-5edbbb73.js';
import { t as t$3 } from './queryZScale-688c1e0e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$6(n){const{exifInfo:e,exifName:a,tagName:u}=n;if(!e||!a||!u)return null;const f=e.find((n=>n.name===a));return f?t({tagName:u,tags:f.tags}):null}function t(n){const{tagName:t,tags:e}=n;if(!e||!t)return null;const a=e.find((n=>n.name===t));return a&&a.value||null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s$5;const p$1={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let d$2=s$5=class extends a$5{constructor(o){super(o),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null;}get orientationInfo(){const{exifInfo:o}=this,t=n$6({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:o});return p$1[t]||null}clone(){return new s$5({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};e([y$1({type:String})],d$2.prototype,"contentType",void 0),e([y$1()],d$2.prototype,"exifInfo",void 0),e([y$1({readOnly:!0})],d$2.prototype,"orientationInfo",null),e([y$1({type:N})],d$2.prototype,"id",void 0),e([y$1({type:String})],d$2.prototype,"globalId",void 0),e([y$1({type:String})],d$2.prototype,"keywords",void 0),e([y$1({type:String})],d$2.prototype,"name",void 0),e([y$1({json:{read:!1}})],d$2.prototype,"parentGlobalId",void 0),e([y$1({json:{read:!1}})],d$2.prototype,"parentObjectId",void 0),e([y$1({type:N})],d$2.prototype,"size",void 0),e([y$1({json:{read:!1}})],d$2.prototype,"url",void 0),d$2=s$5=e([n$7("esri.layers.support.AttachmentInfo")],d$2);var l$1=d$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$5(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o}function a$4(o,s){const n={};for(const a of o){const{parentObjectId:o,parentGlobalId:c,attachmentInfos:i}=a;for(const a of i){const{id:i}=a,m=j(i$1(`${s}/${o}/attachments/${i}`)),p=l$1.fromJSON(a);p.set({url:m,parentObjectId:o,parentGlobalId:c}),n[o]?n[o].push(p):n[o]=[p];}}return n}function c$1(t,e,r){let a={query:t$1({...t.query,f:"json",...n$5(e)})};return r&&(a={...r,...a,query:{...r.query,...a.query}}),L(t.path+"/queryAttachments",a)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function a$3(a,m,n){const s=e$1(a);return c$1(s,u$3.from(m),{...n}).then((t=>a$4(t.data.attachmentGroups,s.path)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function n$4(n,s,m){const p=e$1(n);return p$2(p,b.from(s),{...m}).then((o=>o.data.count))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function m$2(m,n,s){const p=e$1(m);return S(p,b.from(n),{...s}).then((t=>({count:t.data.count,extent:M.fromJSON(t.data.extent)})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function s$4(s,e,m){const n=e$1(s);return f(n,b.from(e),{...m}).then((o=>o.data.objectIds))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function a$2(o,s,a){const n=e$1(o),i={...a},p=b.from(s),{data:u}=await y$2(n,p,p.sourceSpatialReference,i);return u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i(e,t){return t}function o$1(e,t,r,s){switch(r){case 0:return u$2(e,t+s,0);case 1:return "lowerLeft"===e.originPosition?u$2(e,t+s,1):d$1(e,t+s,1)}}function n$3(e,t,r,s){switch(r){case 2:return u$2(e,t,2);default:return o$1(e,t,r,s)}}function a$1(e,t,r,s){switch(r){case 2:return u$2(e,t,3);default:return o$1(e,t,r,s)}}function h(e,t,r,s){switch(r){case 3:return u$2(e,t,3);default:return n$3(e,t,r,s)}}function u$2({translate:e,scale:t},r,s){return e[s]+r*t[s]}function d$1({translate:e,scale:t},r,s){return e[s]-r*t[s]}class l{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=i,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){};}createFeatureResult(){return {fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=t$2(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(t)for(const r of e.features)t(r.geometry);}createSpatialReference(){return {}}addField(e,t){e.fields.push(t);const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null;};}addFeature(e,t){e.features.push(t);}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this.deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;default:n$8(t.geometryType);}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this.AttributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t);}addQueryGeometry(e,s){const{queryGeometry:i,queryGeometryType:o}=s,n=ae(i.clone(),i,!1,!1,this.transform),a=ee(n,o,!1,!1);e.queryGeometryType=o,e.queryGeometry={...a};}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t;}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r);}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r);}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(s);}createPolygonGeometry(e){return {rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return {paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return {points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(t,r),i=e[e.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),i.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=s;}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?h:t?n$3:r?a$1:o$1}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function n$2(o,s,n){const p=e$1(o),i={...n},u=b.from(s),m=!u.quantizationParameters,{data:f}=await c$2(p,u,new l({sourceSpatialReference:u.sourceSpatialReference,applyTransform:m}),i);return f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),!o.outFields||null!=t&&t.returnCountOnly?delete o.outFields:-1!==o.outFields.indexOf("*")?o.outFields="*":o.outFields=o.outFields.join(","),o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function r(e,t,o){const r=await s$3(e,t,o),n=r.data,a=n.geometryType,d=n.spatialReference,i={};for(const s of n.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:d,hasZ:!!n.hasZ,hasM:!!n.hasM,features:s.relatedRecords};if(null!=s.objectId)i[s.objectId]=e;else for(const t in s)s.hasOwnProperty(t)&&"relatedRecords"!==t&&(i[s[t]]=e);}return {...r,data:i}}async function n$1(e,t,o){const r=await s$3(e,t,o,{returnCountOnly:!0}),n=r.data,a={};for(const s of n.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return {...r,data:a}}async function s$3(r,n,s={},a){const d=t$1({...r.query,f:"json",...a,...o(n,a)});return L(r.path+"/queryRelatedRecords",{...s,query:{...s.query,...d}})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function n(e,n,u){n=l$2.from(n);const a=e$1(e);return r(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=g$1.fromJSON(r[t]))),e}))}async function u$1(r,o,n){o=l$2.from(o);const u=e$1(r);return n$1(u,o,{...n}).then((t=>t.data))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u="Layer does not support extent calculation.";function y(t,r){var n,i;const s=t.geometry,l=t.toJSON(),u=l;if(r$1(s)&&(u.geometry=JSON.stringify(s),u.geometryType=d$3(s),u.inSR=s.spatialReference.wkid||JSON.stringify(s.spatialReference)),null!=(n=l.topFilter)&&n.groupByFields&&(u.topFilter.groupByFields=l.topFilter.groupByFields.join(",")),null!=(i=l.topFilter)&&i.orderByFields&&(u.topFilter.orderByFields=l.topFilter.orderByFields.join(",")),l.topFilter&&(u.topFilter=JSON.stringify(u.topFilter)),l.objectIds&&(u.objectIds=l.objectIds.join(",")),l.orderByFields&&(u.orderByFields=l.orderByFields.join(",")),l.outFields&&!(null!=r&&r.returnCountOnly||null!=r&&r.returnExtentOnly||null!=r&&r.returnIdsOnly)?-1!==l.outFields.indexOf("*")?u.outFields="*":u.outFields=l.outFields.join(","):delete u.outFields,l.outSR?u.outSR=l.outSR.wkid||JSON.stringify(l.outSR):s&&l.returnGeometry&&(u.outSR=u.inSR),l.returnGeometry&&delete l.returnGeometry,l.timeExtent){const t=l.timeExtent,{start:e,end:r}=t;null==e&&null==r||(u.time=e===r?e:`${null==e?"null":e},${null==r?"null":r}`),delete l.timeExtent;}return u}async function m$1(t,e,r,n){const o=await c(t,e,"json",n);return t$3(e,r,o.data),o}async function d(t,r,n){return r$1(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):c(t,r,"json",n,{returnIdsOnly:!0})}async function p(t,r,n){return r$1(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):c(t,r,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(u);if(e.hasOwnProperty("count"))throw new Error(u);return t}))}function a(t,r,n){return r$1(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):c(t,r,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function c(o,s,u,m={},d={}){const p="string"==typeof o?U(o):o,a=s.geometry?[s.geometry]:[];return m.responseType="pbf"===u?"array-buffer":"json",L$1(a,null,m).then((n=>{const o=n&&n[0];r$1(o)&&((s=s.clone()).geometry=o);const i=t$1({...p.query,f:u,...d,...y(s,d)});return L(D(p.path,"queryTopFeatures"),{...m,query:{...i,...m.query}})}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function s$2(s,p,u,a){const m=e$1(s),i={...a},{data:f}=await m$1(m,v.from(p),u,i);return g$1.fromJSON(f)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function s$1(s,e,p){const a=e$1(s);return (await d(a,v.from(e),{...p})).data.objectIds}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function m(m,s,n){const p$1=e$1(m),a=await p(p$1,v.from(s),{...n});return {count:a.data.count,extent:M.fromJSON(a.data.extent)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function s(s,e,p){const u=e$1(s);return (await a(u,v.from(e),{...p})).data.count}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let g=class extends p$3{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null;}execute(e,t){return this.executeJSON(e,t).then((r=>this.featureSetFromJSON(e,r,t)))}async executeJSON(e,t){var o;const s={...this.requestOptions,...t},i=this._normalizeQuery(e),u=null!=(null==(o=e.outStatistics)?void 0:o[0]),n=s$6("featurelayer-pbf-statistics"),a=!u||n;let c;if("pbf"===this.format&&a)try{c=await n$2(this.url,i,s);}catch(p){if("query:parsing-pbf"!==p.name)throw p;this.format="json";}return "json"!==this.format&&a||(c=await a$2(this.url,i,s)),this._normalizeFields(c.fields),c}async featureSetFromJSON(e,t,r){if(!(this._queryIs3DObjectFormat(e)&&r$1(this.infoFor3D)&&t.features&&t.features.length))return g$1.fromJSON(t);const{meshFeatureSetFromJSON:s}=await d$4(import('./meshFeatureSet-4e5694f2.js'),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){const r={...this.requestOptions,...t},o=this._normalizeQuery(e);return n$4(this.url,o,r)}executeForExtent(e,t){const r={...this.requestOptions,...t},o=this._normalizeQuery(e);return m$2(this.url,o,r)}executeForIds(e,t){const r={...this.requestOptions,...t},o=this._normalizeQuery(e);return s$4(this.url,o,r)}executeRelationshipQuery(e,t){e=l$2.from(e);const r={...this.requestOptions,...t};return (this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),n(this.url,e,r)}executeRelationshipQueryForCount(e,t){e=l$2.from(e);const r={...this.requestOptions,...t};return (this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),u$1(this.url,e,r)}executeAttachmentQuery(e,t){const r={...this.requestOptions,...t};return a$3(this.url,e,r)}executeTopFeaturesQuery(e,t){const r={...this.requestOptions,...t};return s$2(this.parsedUrl,e,this.sourceSpatialReference,r)}executeForTopIds(e,t){const r={...this.requestOptions,...t};return s$1(this.parsedUrl,e,r)}executeForTopExtents(e,t){const r={...this.requestOptions,...t};return m(this.parsedUrl,e,r)}executeForTopCount(e,t){const r={...this.requestOptions,...t};return s(this.parsedUrl,e,r)}_normalizeQuery(e){let r=b.from(e);if(r.sourceSpatialReference=r.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(r=r===e?r.clone():r,r.gdbVersion=e.gdbVersion||this.gdbVersion,r.dynamicDataSource=e.dynamicDataSource?K.from(e.dynamicDataSource):this.dynamicDataSource),r$1(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){r=r===e?r.clone():r,r.formatOf3DObjects=null;for(const e of this.infoFor3D.queryFormats){if("3D_glb"===e.id){r.formatOf3DObjects=e.id;break}"3D_gltf"!==e.id||r.formatOf3DObjects||(r.formatOf3DObjects=e.id);}if(!r.formatOf3DObjects)throw new s$7("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t$4(r.outFields)||!r.outFields.includes("*")){r=r===e?r.clone():r,t$4(r.outFields)&&(r.outFields=[]);const{originX:t,originY:o,originZ:i,translationX:u,translationY:n,translationZ:a,scaleX:c,scaleY:p,scaleZ:m,rotationX:f,rotationY:l,rotationZ:h,rotationDeg:d}=this.infoFor3D.transformFieldRoles;r.outFields.push(t,o,i,u,n,a,c,p,m,f,l,h,d);}}return r}_normalizeFields(e){if(r$1(this.fieldsIndex)&&r$1(e))for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON());}}_queryIs3DObjectFormat(e){return r$1(this.infoFor3D)&&e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};e([y$1({type:K})],g.prototype,"dynamicDataSource",void 0),e([y$1()],g.prototype,"fieldsIndex",void 0),e([y$1()],g.prototype,"format",void 0),e([y$1()],g.prototype,"gdbVersion",void 0),e([y$1()],g.prototype,"infoFor3D",void 0),e([y$1()],g.prototype,"sourceSpatialReference",void 0),g=e([n$7("esri.tasks.QueryTask")],g);var Q=g;

export { Q, a$4 as a, l$1 as l };
