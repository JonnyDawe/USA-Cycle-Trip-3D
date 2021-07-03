import { e, a, o as o$2 } from './JSONSupport-9346590f.js';
import { L, i as i$1 } from './Loadable-d16b3d7d.js';
import { M as M$1 } from './PopupTemplate-d97f5e88.js';
import { P } from './UniqueValueRenderer-260b50e9.js';
import { p as p$2, m, o as o$1, a as m$2, n as n$2 } from './jsonUtils-cb46c967.js';
import { M as M$2 } from './symbols-9e680ec7.js';
import { s as s$1, w as w$1 } from './promiseUtils-2ff2b194.js';
import { n as n$1, e as e$1, r } from './Message-70b34921.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { y, n, N, D as u$1 } from './subclass-fe5fcf78.js';
import { e as e$2 } from './reader-fa0f173d.js';
import { b } from './Layer-aafbe66d.js';
import { p as p$1 } from './ArcGISService-32a080a6.js';
import { t as t$1 } from './BlendLayer-b9fc1ffb.js';
import { l, x, a as l$2, f, j, v, s as s$3, o as o$3, p as p$3 } from './OperationalLayer-a01538e1.js';
import { w } from './PortalLayer-722467e6.js';
import { o } from './RefreshableLayer-a609d261.js';
import { s } from './ScaleRangeLayer-9b1bf210.js';
import { c } from './TemporalLayer-f1ac30a1.js';
import { u, c as c$1, s as s$2 } from './featureReductionUtils-78800e19.js';
import { l as l$3 } from './fieldProperties-4363f1e0.js';
import { c as c$2, m as m$1 } from './fieldUtils-22be41cd.js';
import { E } from './LabelClass-e4354cdb.js';
import { r as r$1 } from './labelingInfo-c6f27ee6.js';
import { t as t$2 } from './styleUtils-58b9b121.js';
import { b as b$1 } from './Query-619f76b0.js';
import { a as a$1 } from './popupUtils-5b007a8e.js';
import { k } from './SpatialReference-843b1520.js';
import { M } from './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './jsonMap-e142bd84.js';
import './Collection-32506e74.js';
import './enumeration-7d0c165d.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './Identifiable-3ad643f8.js';
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
import './LRUCache-eed24cc2.js';
import './MemCache-b33cfc4b.js';
import './arcgisLayerUrl-cb5a8728.js';
import './TimeExtent-02acfb1c.js';
import './asyncUtils-015dfd6e.js';
import './PortalItem-4692b2a9.js';
import './TimeInfo-ba3374ff.js';
import './Field-728fb193.js';
import './fieldType-6799091f.js';
import './FieldsIndex-f71b4f3d.js';
import './labelUtils-7d1afc11.js';
import './defaults-31c9613a.js';
import './defaultsJSON-0467bd38.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t;let p=t=class extends a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1;}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([y({type:Number,json:{write:!0}})],p.prototype,"age",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"ageReceived",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"displayCount",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"maxObservations",void 0),p=t=e([n("esri.layers.support.PurgeOptions")],p);var i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const $=n$1.getLogger("esri.layers.StreamLayer"),ee=l$3();let re=class extends(t$1(c(s(o(p$1(l(w(l$1(b))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new i,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=k.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){if(!("WebSocket"in e$1))return this.addResolvingPromise(Promise.reject(new s$1("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(w$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,r){return u(e,r)}writeWebSceneFeatureReduction(e,r,t,o){c$1(e,r,"layerDefinition.featureReduction",o);}set renderer(e){c$2(e,this.fieldsIndex),this._set("renderer",e);}readRenderer(e,r,s){const n=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(n){const e=p$2(n,r,s)||void 0;return e||$.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:s}),e}if(r.defaultSymbol)return r.types&&r.types.length?new P({defaultSymbol:te(r.defaultSymbol,r,s),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:te(e.symbol,e,s)})))}):new m({symbol:te(r.defaultSymbol,r,s)})}writeRenderer(e,r,t,o){o$1(e,r,t,o);}writeWebSceneRenderer(e,r,t,o){o$1(e,r,"layerDefinition.drawingInfo.renderer",o);}createPopupTemplate(e){return a$1(this,e)}createQuery(){const e=new b$1;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var r;if(!!this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new s$1("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new s$1("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new s$1("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new s$1("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl;}else if(!this.sourceJSON){const{data:r}=await L(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r;}return this.sourceJSON={...null!=(r=this.sourceJSON)?r:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),c$2(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex),t$2(this,{origin:"service"})}};e([y({type:String})],re.prototype,"copyright",void 0),e([y({readOnly:!0})],re.prototype,"defaultPopupTemplate",null),e([y({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],re.prototype,"definitionExpression",void 0),e([y({type:String})],re.prototype,"displayField",void 0),e([y({type:x})],re.prototype,"elevationInfo",void 0),e([e$2("featureReduction",["layerDefinition.featureReduction"])],re.prototype,"readFeatureReduction",null),e([o$2("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:s$2}})],re.prototype,"writeWebSceneFeatureReduction",null),e([y(ee.fields)],re.prototype,"fields",void 0),e([y(ee.fieldsIndex)],re.prototype,"fieldsIndex",void 0),e([y({type:M})],re.prototype,"geometryDefinition",void 0),e([y({type:i$1.apiValues,json:{read:{reader:i$1.read}}})],re.prototype,"geometryType",void 0),e([y(l$2)],re.prototype,"labelsVisible",void 0),e([y({type:[E],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:r$1},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],re.prototype,"labelingInfo",void 0),e([y(f)],re.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],re.prototype,"listMode",void 0),e([y({type:N})],re.prototype,"maxReconnectionAttempts",void 0),e([y({type:N})],re.prototype,"maxReconnectionInterval",void 0),e([y(j)],re.prototype,"maxScale",void 0),e([y(v)],re.prototype,"minScale",void 0),e([y({type:String})],re.prototype,"objectIdField",void 0),e([y({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],re.prototype,"operationalLayerType",void 0),e([y(s$3)],re.prototype,"popupEnabled",void 0),e([y({type:M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],re.prototype,"popupTemplate",void 0),e([y({type:i})],re.prototype,"purgeOptions",void 0),e([y({types:m$2,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],re.prototype,"renderer",null),e([e$2("service","renderer",["drawingInfo.renderer","defaultSymbol"]),e$2("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],re.prototype,"readRenderer",null),e([o$2("renderer")],re.prototype,"writeRenderer",null),e([o$2("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:n$2}})],re.prototype,"writeWebSceneRenderer",null),e([y(o$3)],re.prototype,"screenSizePerspectiveEnabled",void 0),e([y({type:k,json:{origins:{service:{read:{source:"spatialReference"}}}}})],re.prototype,"spatialReference",void 0),e([y({json:{read:!1}})],re.prototype,"type",void 0),e([y(p$3)],re.prototype,"url",void 0),e([y({type:Number})],re.prototype,"updateInterval",void 0),e([y({type:String})],re.prototype,"webSocketUrl",void 0),re=e([n("esri.layers.StreamLayer")],re);const te=u$1({types:M$2});var oe=re;

export default oe;
