import { e, a as a$3 } from './JSONSupport-9346590f.js';
import { L } from './Collection-32506e74.js';
import { p as p$7 } from './CollectionFlattener-af542a66.js';
import { s as s$1, w as w$1 } from './promiseUtils-2ff2b194.js';
import { y as y$1, n as n$4, r as r$1 } from './Message-70b34921.js';
import { n as n$6 } from './loadAll-37e49bde.js';
import { l as l$4 } from './MultiOriginJSONSupport-859401da.js';
import { f, d as n$5, L as L$1, D } from './Loadable-d16b3d7d.js';
import { y, n as n$3 } from './subclass-fe5fcf78.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { k } from './SpatialReference-843b1520.js';
import { b } from './Layer-aafbe66d.js';
import { E as E$1 } from './BuildingComponentSublayer-d732fe3c.js';
import { d as d$3 } from './BuildingGroupSublayer-9ec86e44.js';
import { i as i$2 } from './APIKeyMixin-7fe44a14.js';
import { p as p$6 } from './ArcGISService-32a080a6.js';
import { l as l$3, w as w$2, d as d$4, c as c$4 } from './OperationalLayer-a01538e1.js';
import { w } from './PortalLayer-722467e6.js';
import { s } from './ScaleRangeLayer-9b1bf210.js';
import { R } from './SceneService-9fbf3dec.js';
import { o } from './uuid-630c0c55.js';
import { r } from './enumeration-7d0c165d.js';
import { C as t$4 } from './symbols-9e680ec7.js';
import { l as l$5 } from './FetchAssociatedFeatureLayer-9e2b7c4c.js';
import './HandleOwner-fbf91095.js';
import './Handles-af859b7b.js';
import './watchUtils-06a91cc9.js';
import './asyncUtils-015dfd6e.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './jsonMap-e142bd84.js';
import './Identifiable-3ad643f8.js';
import './PopupTemplate-d97f5e88.js';
import './fieldUtils-22be41cd.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './UniqueValueRenderer-260b50e9.js';
import './jsonUtils-4c6963ee.js';
import './SimpleLineSymbol-9959d1ea.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './ColorStop-ed1033bb.js';
import './diffUtils-530d997b.js';
import './Portal-ff63481f.js';
import './opacityUtils-b92214c2.js';
import './sizeVariableUtils-6d1564c8.js';
import './visualVariableUtils-86a9e524.js';
import './Graphic-bb07b7e4.js';
import './uid-6beaca4c.js';
import './jsonUtils-f0a19240.js';
import './compilerUtils-7bbb76dc.js';
import './lengthUtils-824a0190.js';
import './unitUtils-b17203be.js';
import './persistableUrlUtils-59858a7e.js';
import './collectionUtils-a13e45d8.js';
import './styleUtils-8b593a34.js';
import './jsonUtils-cb46c967.js';
import './LRUCache-eed24cc2.js';
import './MemCache-b33cfc4b.js';
import './FeatureLayer-a1f2dd15.js';
import './HeightModelInfo-992659fb.js';
import './workers-bd1ea274.js';
import './queryZScale-688c1e0e.js';
import './zscale-9df5d655.js';
import './FeatureSet-d8329cbc.js';
import './Field-728fb193.js';
import './fieldType-6799091f.js';
import './BlendLayer-b9fc1ffb.js';
import './CustomParametersMixin-79fc7530.js';
import './RefreshableLayer-a609d261.js';
import './TemporalLayer-f1ac30a1.js';
import './TimeExtent-02acfb1c.js';
import './TimeInfo-ba3374ff.js';
import './arcgisLayerUrl-cb5a8728.js';
import './labelingInfo-c6f27ee6.js';
import './LabelClass-e4354cdb.js';
import './labelUtils-7d1afc11.js';
import './defaults-31c9613a.js';
import './defaultsJSON-0467bd38.js';
import './featureReductionUtils-78800e19.js';
import './FeatureType-97537d09.js';
import './fieldProperties-4363f1e0.js';
import './FieldsIndex-f71b4f3d.js';
import './Query-619f76b0.js';
import './styleUtils-58b9b121.js';
import './TopFeaturesQuery-b22907ac.js';
import './popupUtils-5b007a8e.js';
import './capabilities-a266bb8d.js';
import './I3SIndexInfo-b77c2e24.js';
import './I3SLayerDefinitions-9dc7be70.js';
import './PortalItem-4692b2a9.js';
import './multiOriginJSONSupportUtils-510f5718.js';
import './resourceUtils-d1624f52.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t$3=class extends a$3{constructor(){super(...arguments),this.type=null;}};e([y({type:String,readOnly:!0,json:{write:!0}})],t$3.prototype,"type",void 0),t$3=e([n$3("esri.layers.support.BuildingFilterAuthoringInfo")],t$3);var p$5=t$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$4;let i$1=p$4=class extends a$3{constructor(){super(...arguments),this.filterType=null,this.filterValues=null;}clone(){return new p$4({filterType:this.filterType,filterValues:y$1(this.filterValues)})}};e([y({type:String,json:{write:!0}})],i$1.prototype,"filterType",void 0),e([y({type:[String],json:{write:!0}})],i$1.prototype,"filterValues",void 0),i$1=p$4=e([n$3("esri.layers.support.BuildingFilterAuthoringInfoType")],i$1);var l$2=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var c$3;const l$1=L.ofType(l$2);let m$5=c$3=class extends a$3{clone(){return new c$3({filterTypes:y$1(this.filterTypes)})}};e([y({type:l$1,json:{write:!0}})],m$5.prototype,"filterTypes",void 0),m$5=c$3=e([n$3("esri.layers.support.BuildingFilterAuthoringInfoBlock")],m$5);var n$2=m$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$3;const l=L.ofType(n$2);let n$1=p$3=class extends p$5{constructor(){super(...arguments),this.type="checkbox";}clone(){return new p$3({filterBlocks:y$1(this.filterBlocks)})}};e([y({type:["checkbox"]})],n$1.prototype,"type",void 0),e([y({type:l,json:{write:!0}})],n$1.prototype,"filterBlocks",void 0),n$1=p$3=e([n$3("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n$1);var m$4=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p$2=class extends a$3{};e([y({readOnly:!0,json:{read:!1}})],p$2.prototype,"type",void 0),p$2=e([n$3("esri.layers.support.BuildingFilterMode")],p$2);var t$2=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t$1;let p$1=t$1=class extends t$2{constructor(){super(...arguments),this.type="solid";}clone(){return new t$1}};e([y({type:["solid"],readOnly:!0,json:{write:!0}})],p$1.prototype,"type",void 0),p$1=t$1=e([n$3("esri.layers.support.BuildingFilterModeSolid")],p$1);var i=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var c$2;let m$3=c$2=class extends t$2{constructor(){super(...arguments),this.type="wire-frame",this.edges=null;}clone(){return new c$2({edges:y$1(this.edges)})}};e([r({wireFrame:"wire-frame"})],m$3.prototype,"type",void 0),e([y(t$4)],m$3.prototype,"edges",void 0),m$3=c$2=e([n$3("esri.layers.support.BuildingFilterModeWireFrame")],m$3);var a$2=m$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t;let p=t=class extends t$2{constructor(){super(...arguments),this.type="x-ray";}clone(){return new t}};e([y({type:["x-ray"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=e([n$3("esri.layers.support.BuildingFilterModeXRay")],p);var c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var a$1;const d$2={nonNullable:!0,types:{key:"type",base:t$2,typeMap:{solid:i,"wire-frame":a$2,"x-ray":c$1}},json:{read:r=>{switch(r&&r.type){case"solid":return i.fromJSON(r);case"wireFrame":return a$2.fromJSON(r);case"x-ray":return c$1.fromJSON(r);default:return}},write:{enabled:!0,isRequired:!0}}};let c=a$1=class extends a$3{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new i,this.title="";}clone(){return new a$1({filterExpression:this.filterExpression,filterMode:y$1(this.filterMode),title:this.title})}};e([y({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"filterExpression",void 0),e([y(d$2)],c.prototype,"filterMode",void 0),e([y({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"title",void 0),c=a$1=e([n$3("esri.layers.support.BuildingFilterBlock")],c);var m$2=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var u$1;const d$1=L.ofType(m$2);let m$1=u$1=class extends a$3{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=o(),this.name=null;}clone(){return new u$1({description:this.description,filterBlocks:y$1(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:y$1(this.filterAuthoringInfo)})}};e([y({type:String,json:{write:!0}})],m$1.prototype,"description",void 0),e([y({type:d$1,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"filterBlocks",void 0),e([y({types:{key:"type",base:p$5,typeMap:{checkbox:m$4}},json:{read:r=>{switch(r&&r.type){case"checkbox":return m$4.fromJSON(r);default:return null}},write:!0}})],m$1.prototype,"filterAuthoringInfo",void 0),e([y({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"id",void 0),e([y({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"name",void 0),m$1=u$1=e([n$3("esri.layers.support.BuildingFilter")],m$1);var a=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u=n$4.getLogger("esri.layers.support.BuildingSummaryStatistics");let n=class extends a$3{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null;}};e([y({type:String})],n.prototype,"fieldName",void 0),e([y({type:String})],n.prototype,"modelName",void 0),e([y({type:String})],n.prototype,"label",void 0),e([y({type:Number})],n.prototype,"min",void 0),e([y({type:Number})],n.prototype,"max",void 0),e([y({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],n.prototype,"mostFrequentValues",void 0),e([y({type:[Number]})],n.prototype,"subLayerIds",void 0),n=e([n$3("esri.layers.support.BuildingFieldStatistics")],n);let m=class extends(f.LoadableMixin(n$5(a$3))){constructor(){super(...arguments),this.url=null;}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(u.error("building summary statistics are not loaded"),null)}load(e){const r=r$1(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const t=(await L$1(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"});}};e([y({constructOnly:!0,type:String})],m.prototype,"url",void 0),e([y({readOnly:!0,type:[n],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=e([n$3("esri.layers.support.BuildingSummaryStatistics")],m);var d=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const A=n$4.getLogger("esri.layers.BuildingSceneLayer"),E=L.ofType(a),_=y$1(d$3.sublayersProperty);_.json.origins["web-scene"]={type:[E$1],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_.json.origins["portal-item"]={type:[E$1],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let P=class extends(R(p$6(l$3(w(s(l$4(i$2(b)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new p$7({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new E,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene";}normalizeCtorArgs(e){return "string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy();}readSublayers(e,r,t){const s=d$3.readSublayers(e,r,t);return d$3.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){d$3.forEachSublayer(e,(e=>e.read(r.get(e.id),t)));}readSublayerOverrides(e,r){const t=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?t.set(i.id,i):r.messages.push(new s$1("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return {overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];d$3.forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r);})),s.length>0&&(r.sublayers=s);}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach((e=>{r.sublayers.push(y$1(e));}));}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t;}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=D(this.parsedUrl.path,r.statisticsHRef);return new d({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}load(e){const r=r$1(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w$1).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return n$6(this,(e=>{d$3.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r);})),this.summaryStatistics&&e(this.summaryStatistics);}))}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new s$1("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return ["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&A.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&A.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"));}async _fetchAssociatedFeatureService(e){const r=new l$5(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem();}catch(t){A.warn("Associated feature service item could not be loaded",t);}}};e([y({type:["BuildingSceneLayer"]})],P.prototype,"operationalLayerType",void 0),e([y({readOnly:!0})],P.prototype,"allSublayers",void 0),e([y(_)],P.prototype,"sublayers",void 0),e([e$1("service","sublayers")],P.prototype,"readSublayers",null),e([y({type:E,nonNullable:!0,json:{write:!0}})],P.prototype,"filters",void 0),e([y({type:String,json:{write:!0}})],P.prototype,"activeFilterId",void 0),e([y({readOnly:!0,type:d})],P.prototype,"summaryStatistics",void 0),e([e$1("summaryStatistics",["statisticsHRef"])],P.prototype,"readSummaryStatistics",null),e([y({type:[String],json:{read:!1}})],P.prototype,"outFields",void 0),e([y(w$2)],P.prototype,"fullExtent",void 0),e([y({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),e([y(d$4(k))],P.prototype,"spatialReference",void 0),e([y(c$4)],P.prototype,"elevationInfo",null),e([y({json:{read:!1},readOnly:!0})],P.prototype,"type",void 0),e([y()],P.prototype,"associatedFeatureServiceItem",void 0),P=e([n$3("esri.layers.BuildingSceneLayer")],P);var K=P;

export default K;
