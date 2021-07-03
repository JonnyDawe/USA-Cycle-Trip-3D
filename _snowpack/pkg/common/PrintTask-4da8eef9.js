import { e as e$1, p as p$9, a as a$1 } from './JSONSupport-9346590f.js';
import { o as o$4 } from './jsonMap-e142bd84.js';
import { y as y$2, n as n$2, d as d$2 } from './subclass-fe5fcf78.js';
import { r, d as s$4 } from './Message-70b34921.js';
import { L as L$2, z as z$1, V as V$2, a as n$4, v as r$1 } from './Loadable-d16b3d7d.js';
import { v as v$1, m as m$3, s as s$5 } from './promiseUtils-2ff2b194.js';
import { e as e$3, c as c$2, u as u$3 } from './SimpleLineSymbol-9959d1ea.js';
import { M as M$1, j as j$1 } from './Polyline-ccd8fb47.js';
import { getSize as V$1, getColor as d$3, getOpacity as v$2, getRotationAngle as b$1, getSizeRangeAtScale as U } from './visualVariableUtils-86a9e524.js';
import { k as k$1 } from './SpatialReference-843b1520.js';
import { L as L$1 } from './normalizeUtils-5edbbb73.js';
import { y as y$3 } from './Field-728fb193.js';
import { n as n$3, e as e$2, p as p$a } from './Task-41e0c8b8.js';
import g$2 from './FeatureSet-d8329cbc.js';
import { a as a$2 } from './GPMessage-6f6d167d.js';
import { b as b$2 } from './Query-619f76b0.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './enumeration-7d0c165d.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './Graphic-bb07b7e4.js';
import './PopupTemplate-d97f5e88.js';
import './Collection-32506e74.js';
import './fieldUtils-22be41cd.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './Identifiable-3ad643f8.js';
import './symbols-9e680ec7.js';
import './opacityUtils-b92214c2.js';
import './persistableUrlUtils-59858a7e.js';
import './collectionUtils-a13e45d8.js';
import './Portal-ff63481f.js';
import './uid-6beaca4c.js';
import './jsonUtils-f0a19240.js';
import './compilerUtils-7bbb76dc.js';
import './lengthUtils-824a0190.js';
import './unitUtils-b17203be.js';
import './sizeVariableUtils-6d1564c8.js';
import './fieldType-6799091f.js';
import './TimeExtent-02acfb1c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let i$3=class extends p$9{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1;}};e$1([y$2({type:k$1})],i$3.prototype,"outSpatialReference",void 0),e$1([y$2({type:M$1})],i$3.prototype,"processExtent",void 0),e$1([y$2({type:k$1})],i$3.prototype,"processSpatialReference",void 0),e$1([y$2({nonNullable:!0})],i$3.prototype,"returnFeatureCollection",void 0),e$1([y$2({nonNullable:!0})],i$3.prototype,"returnM",void 0),e$1([y$2({nonNullable:!0})],i$3.prototype,"returnZ",void 0),i$3=e$1([n$2("esri/rest/geoprocessor/GPOptions")],i$3),i$3.from=d$2(i$3);var n$1=i$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p$8=class extends a$1{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null;}};e$1([y$2({type:M$1})],p$8.prototype,"extent",void 0),e$1([y$2()],p$8.prototype,"height",void 0),e$1([y$2()],p$8.prototype,"href",void 0),e$1([y$2()],p$8.prototype,"opacity",void 0),e$1([y$2()],p$8.prototype,"rotation",void 0),e$1([y$2()],p$8.prototype,"scale",void 0),e$1([y$2()],p$8.prototype,"visible",void 0),e$1([y$2()],p$8.prototype,"width",void 0),p$8=e$1([n$2("esri.layer.support.MapImage")],p$8);var i$2=p$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s$3=class extends a$1{constructor(r){super(r),this.itemId=null,this.url=null;}};e$1([y$2({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],s$3.prototype,"itemId",void 0),e$1([y$2({type:String,json:{write:!0}})],s$3.prototype,"url",void 0),s$3=e$1([n$2("esri.rest.support.DataFile")],s$3);var p$7=s$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i$1=new o$4({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let p$6=class extends a$1{constructor(r){super(r),this.distance=0,this.units=null;}};e$1([y$2({json:{write:!0}})],p$6.prototype,"distance",void 0),e$1([y$2({json:{read:i$1.read,write:i$1.write}})],p$6.prototype,"units",void 0),p$6=e$1([n$2("esri/rest/support/LinearUnit")],p$6);var c$1=p$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u$2=new o$4({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let o$3=class extends a$1{constructor(e){super(e),this.dataType=null,this.value=null;}};e$1([y$2({json:{read:u$2.read,write:u$2.write}})],o$3.prototype,"dataType",void 0),e$1([y$2()],o$3.prototype,"value",void 0),o$3=e$1([n$2("esri.rest.support.ParameterValue")],o$3);var i=o$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let e=class extends a$1{constructor(r){super(r),this.format=null,this.itemId=null,this.url=null;}};e$1([y$2()],e.prototype,"format",void 0),e$1([y$2({json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),e$1([y$2()],e.prototype,"url",void 0),e=e$1([n$2("esri/rest/support/RasterData")],e);var p$5=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function m$2(t,r,u,l,s){const n={},i={},c=[];return p$4(l,c,n),L$1(c).then((a=>{const{outSpatialReference:c,processExtent:m,processSpatialReference:p,returnFeatureCollection:f,returnM:G,returnZ:v}=u,{path:S}=e$2(t);for(const e in n){const t=n[e];i[e]=a.slice(t[0],t[1]);}const y=c?c.wkid||c:null,D=p?p.wkid||p:null,J="execute"===r?{returnFeatureCollection:f||void 0,returnM:G||void 0,returnZ:v||void 0}:null,M=P$1({...m?{context:{extent:m,outSR:y,processSR:D}}:{"env:outSR":y,"env:processSR":D},...l,...J,f:"json"},null,i),N={...s,query:M};return L$2(`${S}/${r}`,N)}))}function p$4(e,a,t){for(const r in e){const o=e[r];if(o&&"object"==typeof o&&o instanceof g$2){const{features:e}=o;t[r]=[a.length,a.length+e.length],e.forEach((e=>{a.push(e.geometry);}));}}}function f$1(e){const a=e.dataType,o=i.fromJSON(e);switch(a){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return o;case"GPDate":o.value=new Date(o.value);break;case"GPDataFile":o.value=p$7.fromJSON(o.value);break;case"GPLinearUnit":o.value=c$1.fromJSON(o.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const a=e.value.url;o.value=a?p$7.fromJSON(o.value):g$2.fromJSON(o.value);break}case"GPRasterData":case"GPRasterDataLayer":{const a=e.value.mapImage;o.value=a?i$2.fromJSON(a):p$5.fromJSON(o.value);break}case"GPField":o.value=y$3.fromJSON(o.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return o;case"GPMultiValue:GPDate":{const e=o.value;o.value=e.map((e=>new Date(e)));break}case"GPMultiValue:GPDataFile":o.value=o.value.map((e=>p$7.fromJSON(e)));break;case"GPMultiValue:GPLinearUnit":o.value=o.value.map((e=>c$1.fromJSON(e)));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":o.value=o.value.map((e=>g$2.fromJSON(e)));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":o.value=o.value.map((e=>e?i$2.fromJSON(e):p$5.fromJSON(o.value)));break;case"GPMultiValue:GPField":o.value=o.value.map((e=>y$3.fromJSON(e)));}return o}function P$1(e,a,t){for(const r in e){const a=e[r];Array.isArray(a)?e[r]=JSON.stringify(a.map((e=>P$1({item:e},!0).item))):a instanceof Date&&(e[r]=a.getTime());}return n$3(e,a,t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function o$2(o,m,a,p){return a=n$1.from(a||{}),m$2(o,"execute",a,m,p).then((s=>{const t=s.data.results||[],o=s.data.messages||[];return {results:t.map(f$1),messages:o.map((s=>a$2.fromJSON(s)))}}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$3;const h$1=new o$4({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let m$1=p$3=class extends a$1{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null;}cancelJob(e){const{jobId:s,sourceUrl:o}=this,{path:r}=e$2(o),i={...this.requestOptions,...e,query:{f:"json"}};this._clearTimer();return L$2(`${r}/jobs/${s}/cancel`,i).then((e=>{const t=p$3.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}destroy(){clearInterval(this._timer);}checkJobStatus(e){const{path:s}=e$2(this.sourceUrl),o={...this.requestOptions,...e,query:{f:"json"}},r=`${s}/jobs/${this.jobId}`;return L$2(r,o).then((({data:e})=>{const t=p$3.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}fetchResultData(e,s,o){s=n$1.from(s);const{returnFeatureCollection:r,returnM:i,returnZ:a,outSpatialReference:c}=s,{path:j}=e$2(this.sourceUrl),p=P$1({returnFeatureCollection:r||void 0,returnM:i||void 0,returnZ:a||void 0,outSR:c,returnType:"data",f:"json"},null),h={...this.requestOptions,...o,query:p},m=`${j}/jobs/${this.jobId}/results/${e}`;return L$2(m,h).then((e=>f$1(e.data)))}fetchResultImage(e,s,o){const{path:r}=e$2(this.sourceUrl),i={...s.toJSON(),f:"json"},a=P$1(i),c={...this.requestOptions,...o,query:a},u=`${r}/jobs/${this.jobId}/results/${e}`;return L$2(u,c).then((e=>f$1(e.data)))}async fetchResultMapImageLayer(){const{path:e}=e$2(this.sourceUrl),t=e.indexOf("/GPServer/"),s=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new((await import('./MapImageLayer-871055b9.js')).default)({url:s})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:s,statusCallback:o}=e;return new Promise(((e,a)=>{v$1(s,(()=>{this._clearTimer(),a(m$3());})),this._clearTimer();const c=setInterval((()=>{this._timer||a(m$3()),this.checkJobStatus(this.requestOptions).then((t=>{const{jobStatus:s}=t;switch(this.jobStatus=s,s){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":o&&o(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),a(this);}}));}),t);this._timer=c;}))}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null);}};e$1([y$2()],m$1.prototype,"jobId",void 0),e$1([y$2({json:{read:h$1.read}})],m$1.prototype,"jobStatus",void 0),e$1([y$2({type:[a$2]})],m$1.prototype,"messages",void 0),e$1([y$2()],m$1.prototype,"requestOptions",void 0),e$1([y$2({json:{write:!0}})],m$1.prototype,"sourceUrl",void 0),m$1=p$3=e$1([n$2("esri.rest.support.JobInfo")],m$1);var d$1=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function s$2(s,m,n,f){return n=n$1.from(n||{}),m$2(s,"submitJob",n,m,f).then((o=>{const r=d$1.fromJSON(o.data);return r.sourceUrl=s,r}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p$2=new o$4({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"});p$2.fromJSON.bind(p$2);const g$1=p$2.toJSON.bind(p$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=new o$4({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"});t.fromJSON.bind(t);const o$1=t.toJSON.bind(t);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o="simple-marker",a="picture-marker",u$1="simple-line",l="simple-fill",s$1="shield-label-symbol",y$1="text";function f(f,p){const{graphic:c,renderer:m,symbol:g}=p,d=g.type;if(d===y$1||d===s$1||!("visualVariables"in m)||!m.visualVariables)return;const b=m.getVisualVariablesForType("size"),h=m.getVisualVariablesForType("color"),w=m.getVisualVariablesForType("opacity"),V=m.getVisualVariablesForType("rotation"),T=b&&b[0],v=h&&h[0],G=w&&w[0],k=V&&V[0];if(T){const t=d===o?g.style:null,n=V$1(T,c,{shape:t});null!=n&&(d===o?f.size=e$3(n):d===a?(f.width=e$3(n),f.height=e$3(n)):d===u$1?f.width=e$3(n):f.outline&&(f.outline.width=e$3(n)));}if(v){const e=d$3(v,c);(e&&d===o||d===u$1||d===l)&&(f.color=e?e.toJSON():void 0);}if(G){const e=v$2(G,c);null!=e&&f.color&&(f.color[3]=Math.round(255*e));}k&&(f.angle=-b$1(m,c));}function p$1(){return {layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function c(){return {layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function m(){return {layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function g(){return {layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function d(e,r=15){const t=e.canvas.width,n=e.canvas.height,i=e.getImageData(0,0,t,n).data;let o,a,u,l,s,y;e:for(a=n;a--;)for(o=t;o--;)if(i[4*(t*a+o)+3]>r){y=a;break e}if(!y)return null;e:for(o=t;o--;)for(a=y+1;a--;)if(i[4*(t*a+o)+3]>r){s=o;break e}e:for(o=0;o<=s;++o)for(a=y+1;a--;)if(i[4*(t*a+o)+3]>r){u=o;break e}e:for(a=0;a<=y;++a)for(o=u;o<=s;++o)if(i[4*(t*a+o)+3]>r){l=a;break e}return {x:u,y:l,width:s-u,height:y-l}}function b(e,r){const t=e.allLayerViews.items;if(r===e.scale)return t.filter((e=>!e.suspended));const n=new Array;for(const i of t)k(i.parent)&&!n.includes(i.parent)||!i.visible||r&&"isVisibleAtScale"in i&&!i.isVisibleAtScale(r)||n.push(i);return n}function h(e){return e&&"bing-maps"===e.type}function w(e){return e&&"csv"===e.type}function V(e){return e&&"feature"===e.type}function T(e){return e&&"geojson"===e.type}function v(e){return e&&"graphics"===e.type}function G$1(e){return e&&"group"===e.type}function k(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function S(e){return e&&"imagery"===e.type}function D(e){return e&&"kml"===e.type}function L(e){return e&&"map-image"===e.type}function P(e){return e&&"map-notes"===e.type}function I(e){return e&&"open-street-map"===e.type}function F(e){return e&&"stream"===e.type}function j(e){return e&&"tile"===e.type}function x(e){return e&&"vector-tile"===e.type}function A(e){return e&&"web-tile"===e.type}function M(e){return e&&"wms"===e.type}function z(e){return e&&"wmts"===e.type}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s=class extends p$9{constructor(o){super(o),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0;}};e$1([y$2()],s.prototype,"attributionVisible",void 0),e$1([y$2()],s.prototype,"exportOptions",void 0),e$1([y$2()],s.prototype,"forceFeatureAttributes",void 0),e$1([y$2()],s.prototype,"format",void 0),e$1([y$2()],s.prototype,"label",void 0),e$1([y$2()],s.prototype,"layout",void 0),e$1([y$2()],s.prototype,"layoutOptions",void 0),e$1([y$2()],s.prototype,"outScale",void 0),e$1([y$2()],s.prototype,"scalePreserved",void 0),e$1([y$2()],s.prototype,"showLabels",void 0),s=e$1([n$2("esri.rest.support.PrintTemplate")],s);var p=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const _={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},q=new o$4({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),W=new o$4({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),B=new b$2({returnGeometry:!0}),G=new Map;async function Q(e,t,r){const a=Z(e);let n=G.get(a);return Promise.resolve().then((()=>n?{data:n.gpMetadata}:(n={gpServerUrl:a,is11xService:!1,legendLayerNameMap:[],legendLayers:[]},L$2(a,{query:{f:"json"}})))).then((e=>(n.gpMetadata=e.data,n.cimVersion=n.gpMetadata.cimVersion,n.is11xService=!!n.cimVersion,G.set(a,n),X(t,n)))).then((i=>{const a=Ie(n);let s;const o=e=>"sync"===a?e.results&&e.results[0]&&e.results[0].value:s.fetchResultData("Output_File",null,r).then((e=>e.value));return "async"===a?s$2(e,i,null,r).then((e=>(s=e,e.waitForJobCompletion({interval:t.updateDelay}).then(o)))):o$2(e,i,null,r).then(o)}))}async function X(e,t){t=t||{is11xService:!1,legendLayerNameMap:[],legendLayers:[]};const i=e.template||new p;null==i.showLabels&&(i.showLabels=!0);const a=i.exportOptions;let n;const s=o$1(i.layout);if(a){if(n={dpi:a.dpi},"map_only"===s.toLowerCase()||""===s){const e=a.width,t=a.height;n.outputSize=[e,t];}}const o=i.layoutOptions;let l;if(o){let e,t;"Miles"===o.scalebarUnit||"Kilometers"===o.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==o.scalebarUnit&&"Feet"!==o.scalebarUnit||(e="Meters",t="Feet"),l={titleText:o.titleText,authorText:o.authorText,copyrightText:o.copyrightText,customTextElements:o.customTextElements,scaleBarOptions:{metricUnit:q.toJSON(e),metricLabel:_[e],nonMetricUnit:q.toJSON(t),nonMetricLabel:_[t]}};}let u=null;o&&o.legendLayers&&(u=o.legendLayers.map((e=>{t.legendLayerNameMap[e.layerId]=e.title;const i={id:e.layerId};return e.subLayerIds&&(i.subLayerIds=e.subLayerIds),i})));const c=await Y(e,i,t);if(c.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),i=/[\u0600-\u06FF]/,a=t=>{const r=t.text,a=t.font,n=a&&a.family&&a.family.toLowerCase();r&&a&&("arial"===n||"arial unicode ms"===n)&&(a.family=e.test(r)?"Arial Unicode MS":"Arial","normal"!==a.style&&i.test(r)&&(a.family="Arial Unicode MS"));},n=()=>{throw new s$5("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};c.operationalLayers.forEach((e=>{var i,r,s;null!=(i=e.featureCollection)&&i.layers?e.featureCollection.layers.forEach((e=>{var i,r,s,o;if(null!=(i=e.layerDefinition)&&null!=(r=i.drawingInfo)&&null!=(s=r.renderer)&&s.symbol){const i=e.layerDefinition.drawingInfo.renderer;"esriTS"===i.symbol.type?a(i.symbol):"CIMSymbolReference"!==i.symbol.type||t.is11xService||n();}null!=(o=e.featureSet)&&o.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?a(e.symbol):"CIMSymbolReference"!==e.symbol.type||t.is11xService||n());}));})):!t.is11xService&&null!=(r=e.layerDefinition)&&null!=(s=r.drawingInfo)&&s.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&n();}));}e.outSpatialReference&&(c.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(c,{exportOptions:n,layoutOptions:l||{}}),Object.assign(c.layoutOptions,{legendOptions:{operationalLayers:null!=u?u:t.legendLayers.slice()}}),t.legendLayers.length=0,G.set(t.gpServerUrl,t);const y={Web_Map_as_JSON:JSON.stringify(c),Format:g$1(i.format),Layout_Template:s};return e.extraParameters&&Object.assign(y,e.extraParameters),y}async function Y(e,t,i){const r$1=e.view;let a=r$1.spatialReference;const s={operationalLayers:await ee(r$1,t,i)};let o=i.ssExtent||e.extent||r$1.extent;if(a&&a.isWrappable&&(o=o.clone()._normalize(!0),a=o.spatialReference),s.mapOptions={extent:o&&o.toJSON(),spatialReference:a&&a.toJSON(),showAttribution:t.attributionVisible},i.ssExtent=null,r$1.background&&(s.background=r$1.background.toJSON()),r$1.rotation&&(s.mapOptions.rotation=-r$1.rotation),t.scalePreserved&&(s.mapOptions.scale=t.outScale||r$1.scale),r$1.timeExtent){const e=r(r$1.timeExtent.start)?r$1.timeExtent.start.getTime():null,t=r(r$1.timeExtent.end)?r$1.timeExtent.end.getTime():null;s.mapOptions.time=[e,t];}return s}function Z(e){let t=e;const i=t.lastIndexOf("/GPServer/");return i>0&&(t=t.slice(0,i+9)),t}async function ee(e,t,i){const r=[],a={layerView:null,printTemplate:t,view:e};let n=0;t.scalePreserved&&(n=t.outScale||e.scale);const s=b(e,n);for(const o of s){const e=o.layer;if(!e.loaded||G$1(e))continue;let t;a.layerView=o,t=h(e)?te(e):w(e)?await ie(e,a,i):V(e)?await ae(e,a,i):T(e)?await ne(e,a,i):v(e)?await se(e,a,i):S(e)?oe(e,i):D(e)?await le(e,a,i):L(e)?ue(e,a,i):P(e)?await ce(a,i):I(e)?ye():F(e)?await me(e,a,i):j(e)?pe(e):x(e)?await de(e,a,i):A(e)?ge(e):M(e)?he(e):z(e)?be(e):await fe(e,a,i),t&&(Array.isArray(t)?r.push(...t):(t.id=e.id,t.title=i.legendLayerNameMap[e.id]||e.title,t.opacity=e.opacity,t.minScale=e.minScale||0,t.maxScale=e.maxScale||0,r.push(t)));}if(n&&r.forEach((e=>{e.minScale=0,e.maxScale=0;})),e.graphics&&e.graphics.length){const a=await re(null,e.graphics,t,i);a&&r.push(a);}return r}function te(e){return {culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async function ie(e,{layerView:t,printTemplate:i},r){let a;if(r.legendLayers&&r.legendLayers.push({id:e.id}),!r.is11xService){return re(e,await ve(t),i,r)}return a={type:"CSV"},e.write(a,{origin:"web-map"}),delete a.popupInfo,delete a.layerType,a.showLabels=i.showLabels&&e.labelsVisible,a}async function re(e,t,i,r){let a;const n=c(),s=g(),o=m(),l=p$1(),u=m();if(u.layerDefinition.name="textLayer",delete u.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?n.layerDefinition.name=s.layerDefinition.name=o.layerDefinition.name=l.layerDefinition.name=r.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();n.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t,l.layerDefinition.drawingInfo.renderer=t;}if(i.showLabels&&e.labelsVisible&&"function"==typeof e.write){var c$1,f$1;const t=null==(c$1=e.write({},{origin:"web-map"}).layerDefinition)||null==(f$1=c$1.drawingInfo)?void 0:f$1.labelingInfo;t&&(a=!0,n.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t,l.layerDefinition.drawingInfo.labelingInfo=t);}}let m$1;null!=e&&e.renderer||a||(delete n.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo);const p=null==e?void 0:e.fieldsIndex,d=null==e?void 0:e.renderer;if(p){if(d&&"function"==typeof d.collectRequiredFields){const e=new Set;await d.collectRequiredFields(e,p),m$1=Array.from(e);}const e=p.fields.map((e=>e.toJSON()));n.layerDefinition.fields=e,s.layerDefinition.fields=e,o.layerDefinition.fields=e,l.layerDefinition.fields=e;}const g$1=t&&t.length;let h;for(let w=0;w<g$1;w++){const a=t[w]||t.getItemAt(w);if(!1===a.visible||!a.geometry)continue;if(h=a.toJSON(),h.hasOwnProperty("popupTemplate")&&delete h.popupTemplate,h.geometry&&h.geometry.z&&delete h.geometry.z,h.symbol&&h.symbol.outline&&"esriCLS"===h.symbol.outline.type&&!r.is11xService)continue;!r.is11xService&&h.symbol&&h.symbol.outline&&h.symbol.outline.color&&h.symbol.outline.color[3]&&(h.symbol.outline.color[3]=255);const c=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!h.symbol&&e&&e.renderer&&c&&!r.is11xService){const t=e.renderer,i=await t.getSymbolAsync(a);if(!i)continue;h.symbol=i.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&f(h.symbol,{renderer:t,graphic:a,symbol:i});}if(h.symbol&&(h.symbol.angle||delete h.symbol.angle,De(h.symbol)?h.symbol=await Se(h.symbol,r):h.symbol.text&&delete h.attributes),(!i||!i.forceFeatureAttributes)&&m$1&&m$1.length){const e={};m$1.forEach((t=>{h.attributes&&h.attributes.hasOwnProperty(t)&&(e[t]=h.attributes[t]);})),h.attributes=e;}"polygon"===a.geometry.type?n.featureSet.features.push(h):"polyline"===a.geometry.type?s.featureSet.features.push(h):"point"===a.geometry.type?h.symbol&&h.symbol.text?u.featureSet.features.push(h):o.featureSet.features.push(h):"multipoint"===a.geometry.type?l.featureSet.features.push(h):"extent"===a.geometry.type&&(h.geometry=j$1.fromExtent(a.geometry).toJSON(),n.featureSet.features.push(h));}const b=[n,s,l,o,u].filter((e=>e.featureSet.features.length>0));for(const y of b){const e=y.featureSet.features.every((e=>e.symbol));!e||i&&i.forceFeatureAttributes||y.featureSet.features.forEach((e=>{delete e.attributes;})),e&&delete y.layerDefinition.drawingInfo,y.layerDefinition.drawingInfo&&y.layerDefinition.drawingInfo.renderer&&await xe(y.layerDefinition.drawingInfo.renderer,r);}return b.length?{featureCollection:{layers:b},showLabels:a}:null}async function ae(e,t,i){var r,a;let n;i.legendLayers&&i.legendLayers.push({id:e.id});const s=e.renderer;if(e.featureReduction||s&&"dot-density"===s.type&&(!i.is11xService||parseFloat(i.cimVersion)<2.6))return fe(e,t,i);const{layerView:o,printTemplate:l,view:u}=t,c=s&&("valueExpression"in s&&s.valueExpression||"hasVisualVariables"in s&&s.hasVisualVariables()),y="feature-layer"!==(null==(r=e.source)?void 0:r.type)&&"ogc-feature"!==(null==(a=e.source)?void 0:a.type);if(!i.is11xService&&c||e.featureReduction||y||!s||"field"in s&&null!=s.field&&("string"!=typeof s.field||!e.getField(s.field))){const t=await ve(o);n=await re(e,t,l,i);}else {var m,p;if(n={id:(d=e.write()).id,title:d.title,opacity:d.opacity,minScale:d.minScale,maxScale:d.maxScale,url:d.url,layerDefinition:d.layerDefinition},n.showLabels=l.showLabels&&e.labelsVisible,we(n,e),null!=(m=n.layerDefinition)&&null!=(p=m.drawingInfo)&&p.renderer&&(delete n.layerDefinition.minScale,delete n.layerDefinition.maxScale,await xe(n.layerDefinition.drawingInfo.renderer,i),"visualVariables"in s&&s.visualVariables&&s.visualVariables[0])){const e=s.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=U(e,u.scale);n.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,n.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize;}}}var d;return n}async function ne(e,{layerView:t,printTemplate:i},r){r.legendLayers&&r.legendLayers.push({id:e.id});return re(e,await ve(t),i,r)}async function se(e,{printTemplate:t},i){return re(e,null,t,i)}function oe(e,t){t.legendLayers&&t.legendLayers.push({id:e.id});const i={bandIds:e.bandIds,compressionQuality:e.compressionQuality,format:e.format,interpolation:e.interpolation};if((e.mosaicRule||e.definitionExpression)&&(i.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(t.is11xService)e.renderingRule&&(i.renderingRule=e.renderingRule.toJSON()),e.renderer&&(i.layerDefinition=i.layerDefinition||{},i.layerDefinition.drawingInfo=i.layerDefinition.drawingInfo||{},i.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else {const t=e.exportImageServiceParameters.combineRendererWithRenderingRule();t&&(i.renderingRule=t.toJSON());}return we(i,e),i}async function le(e,t,i){const r=t.printTemplate;if(i.is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=z$1(e.url),t}{const a=[],n=t.layerView;n.allVisibleMapImages.forEach(((t,i)=>{const r={id:`${e.id}_image${i}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?r.imageData=t.href.substr(22):r.url=t.href,a.push(r);}));const s=[...n.allVisiblePoints.items,...n.allVisiblePolylines.items,...n.allVisiblePolygons.items],o={id:e.id,...await re(null,s,r,i)};return a.push(o),a}}function ue(e,{view:t},i){let r;const a={id:e.id,subLayerIds:[]};let n=[];const s=t.scale,o=e=>{const t=0===s,i=0===e.minScale||s<=e.minScale,r=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||i&&r))if(e.sublayers)e.sublayers.forEach(o);else {const t=e.toExportImageJSON(),i={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};n.unshift(i),a.subLayerIds.push(e.id);}};return e.sublayers&&e.sublayers.forEach(o),n.length&&(n=n.map((({id:e,name:t,layerDefinition:i})=>({id:e,name:t,layerDefinition:i}))),r={layers:n,visibleLayers:e.capabilities.exportMap.supportsDynamicLayers?void 0:a.subLayerIds},we(r,e),i.legendLayers.push(a)),r}async function ce({layerView:e,printTemplate:t},i){const r$1=[],a=e.layer;if(r(a.featureCollections))for(const n of a.featureCollections){const e=await re(n,n.source,t,i);e&&r$1.push(...e.featureCollection.layers);}else if(r(a.sublayers))for(const n of a.sublayers){const e=await re(null,n.graphics,t,i);e&&r$1.push(...e.featureCollection.layers);}return {featureCollection:{layers:r$1}}}function ye(){return {type:"OpenStreetMap"}}async function fe(e,{printTemplate:t,view:i},r){const a={type:"image"},n={format:"png",ignoreBackground:!0,layers:[e],rotation:0},o=r.ssExtent||i.extent.clone();let l=96,u=!0,y=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(l=e.dpi),e.width>0&&(u=e.width%2==i.width%2),e.height>0&&(y=e.height%2==i.height%2);}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===i.scale)&&96===l&&(!u||!y)&&(n.area={x:0,y:0,width:i.width,height:i.height},u||(n.area.width-=1),y||(n.area.height-=1),!r.ssExtent)){const e=i.toMap(c$2(n.area.width,n.area.height));o.ymin=e.y,o.xmax=e.x,r.ssExtent=o;}a.extent=o.clone()._normalize(!0).toJSON();const f=await i.takeScreenshot(n),{data:m}=V$2(f.dataUrl);return a.imageData=m,a}async function me(e,{layerView:t,printTemplate:i},r){r.legendLayers&&r.legendLayers.push({id:e.id});return re(e,await ve(t),i,r)}function pe(e){const t={customParameters:e.customParameters};return we(t,e),t}async function de(e,i,r){if(r.is11xService&&e.serviceUrl&&e.styleUrl){const i=n$4&&n$4.findCredential(e.styleUrl),a=n$4&&n$4.findCredential(e.serviceUrl);if(!i&&!a||"2.1.0"!==r.cimVersion){const t={type:"VectorTileLayer"};return t.styleUrl=z$1(e.styleUrl),i&&(t.token=i.token),a&&a.token!==t.token&&(t.additionalTokens=[{url:e.serviceUrl,token:a.token}]),t}}return fe(e,i,r)}function ge(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}function he(e){let t;const i=[],r=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(r):e.name&&i.unshift(e.name));};return e.sublayers&&e.sublayers.forEach(r),i.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:i,url:z$1(e.url),version:e.version}),t}function be(e){const t=e.activeLayer;return {type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:z$1(e.url)}}function we(i,r){if(r.url)if(i.url=z$1(i.url||r.url),"apiKey"in r&&r.apiKey)i.token=r.apiKey;else if(s$4.apiKey&&r$1(r.url))i.token=s$4.apiKey;else {var a,n;i.token=null==(a=n$4)||null==(n=a.findCredential(r.url))?void 0:n.token;}}async function Se(e,t){t.canvas||(t.canvas=document.createElement("canvas"));const r=1024;t.canvas.width=r,t.canvas.height=r;const a=t.canvas.getContext("2d");let n,s;if(e.path){var u;const t=new Path2D(e.path);t.closePath(),a.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",a.fill(t);const i=d(a);if(!i)return null;a.clearRect(0,0,r,r);const l=u$3(e.size)/Math.max(i.width,i.height);a.scale(l,l);const c=r/l,y=c/2-i.width/2-i.x,f=c/2-i.height/2-i.y;if(a.translate(y,f),Array.isArray(e.color)&&a.fill(t),null!=(u=e.outline)&&u.width&&Array.isArray(e.outline.color)){const r=e.outline;a.lineWidth=u$3(r.width)/l,a.lineJoin="round",a.strokeStyle=`rgba(${r.color[0]},${r.color[1]},${r.color[2]},${r.color[3]/255})`,a.stroke(t),i.width+=a.lineWidth,i.height+=a.lineWidth;}i.width*=l,i.height*=l;const m=a.getImageData(r/2-i.width/2,r/2-i.height/2,Math.ceil(i.width),Math.ceil(i.height));n=m.width,s=m.height,a.canvas.width=n,a.canvas.height=s,a.putImageData(m,0,0);}else {const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,r=(await L$2(t,{responseType:"image"})).data;n=u$3(e.width),s=u$3(e.height),a.canvas.width=n,a.canvas.height=s,a.drawImage(r,0,0,a.canvas.width,a.canvas.height);}return {type:"esriPMS",imageData:a.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:e$3(s),width:e$3(n),xoffset:e.xoffset,yoffset:e.yoffset}}async function xe(e,t){const i=e.type;if("simple"===i&&De(e.symbol))e.symbol=await Se(e.symbol,t);else if("uniqueValue"===i||"classBreaks"===i){De(e.defaultSymbol)&&(e.defaultSymbol=await Se(e.defaultSymbol,t));const r=e["uniqueValue"===i?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)De(e.symbol)&&(e.symbol=await Se(e.symbol,t));}}async function ve(e){return e.queryFeatures(B).then((e=>e.features))}function Ie(e){return e.gpMetadata&&e.gpMetadata.executionType?W.fromJSON(e.gpMetadata.executionType):"sync"}function De(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n=new o$4({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let u=class extends p$a{constructor(...t){super(...t),this._gpMetadata=null,this.updateDelay=1e3;}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?n.fromJSON(this._gpMetadata.executionType):"sync"}execute(t,e){return t&&(t.updateDelay=this.updateDelay),Q(this.url,t,{...this.requestOptions,...e})}async _getGpPrintParams(t){const e=Z(this.url),r=G.get(e);return X(t,r)}};e$1([y$2()],u.prototype,"_gpMetadata",void 0),e$1([y$2({readOnly:!0})],u.prototype,"mode",null),e$1([y$2()],u.prototype,"updateDelay",void 0),u=e$1([n$2("esri.tasks.PrintTask")],u);var y=u;

export default y;