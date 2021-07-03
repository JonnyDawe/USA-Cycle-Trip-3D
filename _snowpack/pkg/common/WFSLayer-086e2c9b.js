import { e as e$1, o as o$2 } from './JSONSupport-9346590f.js';
import { f, i, U } from './Loadable-d16b3d7d.js';
import { M as M$2 } from './PopupTemplate-d97f5e88.js';
import './UniqueValueRenderer-260b50e9.js';
import { a as m$1 } from './jsonUtils-cb46c967.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { r, f as e, c as s$1, o as o$1 } from './Message-70b34921.js';
import { y, n } from './subclass-fe5fcf78.js';
import { e as e$3 } from './reader-fa0f173d.js';
import { b } from './Layer-aafbe66d.js';
import { B as B$1, s, A } from './promiseUtils-2ff2b194.js';
import { a } from './HandleOwner-fbf91095.js';
import { d } from './watchUtils-06a91cc9.js';
import { p } from './workers-bd1ea274.js';
import { a as a$1, u } from './clientSideDefaults-b49b5cc7.js';
import { D, X, _, W, v } from './wfsUtils-5b8dfefb.js';
import g from './FeatureSet-d8329cbc.js';
import { M as M$1 } from './Polyline-ccd8fb47.js';
import { t } from './BlendLayer-b9fc1ffb.js';
import { e as e$2 } from './CustomParametersMixin-79fc7530.js';
import { l, x, a as l$2, f as f$1, s as s$4 } from './OperationalLayer-a01538e1.js';
import { w } from './PortalLayer-722467e6.js';
import { o } from './RefreshableLayer-a609d261.js';
import { s as s$2 } from './ScaleRangeLayer-9b1bf210.js';
import { c } from './TemporalLayer-f1ac30a1.js';
import { p as p$1, c as c$3, b as b$2, r as r$1 } from './labelingInfo-c6f27ee6.js';
import { u as u$1, c as c$2, s as s$3 } from './featureReductionUtils-78800e19.js';
import { y as y$1 } from './Field-728fb193.js';
import { l as l$3 } from './fieldProperties-4363f1e0.js';
import { c as c$1, m } from './fieldUtils-22be41cd.js';
import { E } from './LabelClass-e4354cdb.js';
import { b as b$1 } from './Query-619f76b0.js';
import { a as a$2 } from './popupUtils-5b007a8e.js';
import { k as k$1 } from './SpatialReference-843b1520.js';
import './Point-ee7951c3.js';
import './jsonMap-e142bd84.js';
import './Collection-32506e74.js';
import './enumeration-7d0c165d.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './Identifiable-3ad643f8.js';
import './symbols-9e680ec7.js';
import './SimpleLineSymbol-9959d1ea.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './opacityUtils-b92214c2.js';
import './persistableUrlUtils-59858a7e.js';
import './collectionUtils-a13e45d8.js';
import './Portal-ff63481f.js';
import './jsonUtils-4c6963ee.js';
import './ColorStop-ed1033bb.js';
import './diffUtils-530d997b.js';
import './sizeVariableUtils-6d1564c8.js';
import './visualVariableUtils-86a9e524.js';
import './Graphic-bb07b7e4.js';
import './uid-6beaca4c.js';
import './jsonUtils-f0a19240.js';
import './compilerUtils-7bbb76dc.js';
import './lengthUtils-824a0190.js';
import './unitUtils-b17203be.js';
import './styleUtils-8b593a34.js';
import './LRUCache-eed24cc2.js';
import './MemCache-b33cfc4b.js';
import './Handles-af859b7b.js';
import './QueryEngineCapabilities-377cef5c.js';
import './defaultsJSON-0467bd38.js';
import './_rollupPluginBabelHelpers-58331421.js';
import './projection-c73dd3c4.js';
import './mat4-8eb66d33.js';
import './aaBoundingRect-68336c41.js';
import './geojson-d55288bb.js';
import './OptimizedFeature-ccef5b1d.js';
import './fieldType-6799091f.js';
import './TimeExtent-02acfb1c.js';
import './asyncUtils-015dfd6e.js';
import './PortalItem-4692b2a9.js';
import './TimeInfo-ba3374ff.js';
import './FieldsIndex-f71b4f3d.js';
import './labelUtils-7d1afc11.js';
import './defaults-31c9613a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let j=class extends(a(f)){constructor(){super(...arguments),this.capabilities=a$1(!1,!1),this.type="wfs",this._updateCustomParameters=B$1((()=>{var e;const t=this.layer.customParameters;return null==(e=this._connection)?void 0:e.invoke("setCustomParameters",t)}));}load(e){var t;const r$1=null!=(t=r(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r$1})),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return g.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return {count:r.count,extent:M$1.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async refresh(e={}){await this.load(e);const{extent:t}=await this._connection.invoke("refresh",void 0,e);return this.sourceJSON.extent=t,{extent:t}}async _createLoadOptions(e$1){const{url:r,customParameters:o,name:s$1,namespaceUri:a,spatialReference:n,fields:c,geometryType:p,swapXY:l}=this.layer;if(!r)throw new s("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities=this.wfsCapabilities||await D(r,{customParameters:o,...e$1});const u=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e]))?await X(this.wfsCapabilities,s$1,a,{spatialReference:n,customParameters:o,signal:null==e$1?void 0:e$1.signal}):{..._(c),geometryType:p,name:s$1,namespaceUri:a,spatialReference:n,swapXY:l},m=e(W(this.wfsCapabilities.readFeatureTypes(),u.name,u.namespaceUri)),d=i.toJSON(u.geometryType);return {customParameters:o,featureType:m,fields:u.fields.map((e=>e.toJSON())),geometryField:u.geometryField,geometryType:d,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:u.objectIdField,spatialReference:u.spatialReference.toJSON(),swapXY:u.swapXY}}async _startWorker(e){const[t,r]=await A([this._createLoadOptions(e),p("WFSSourceWorker",{...e,strategy:s$1("feature-layers-workers")?"dedicated":"local"})]),s=t.error||r.error||null,a=r.value||null;if(s)throw a&&a.close(),s;const i=t.value;this._connection=r.value;const{extent:n}=await this._connection.invoke("load",i,e);this.sourceJSON={extent:n,fields:i.fields,geometryType:i.geometryType,objectIdField:i.objectIdField,geometryField:i.geometryField,drawingInfo:u(i.geometryType),name:i.featureType.title,wfsInfo:{name:i.featureType.name,featureUrl:i.getFeatureUrl,maxFeatures:3e3,swapXY:i.swapXY,supportedSpatialReferences:i.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:i.featureType.namespaceUri}},this.handles.add(d(this.layer,"customParameters",(()=>this._updateCustomParameters().catch((()=>{})))));}};e$1([y()],j.prototype,"capabilities",void 0),e$1([y({constructOnly:!0})],j.prototype,"layer",void 0),e$1([y()],j.prototype,"sourceJSON",void 0),e$1([y()],j.prototype,"type",void 0),e$1([y()],j.prototype,"wfsCapabilities",void 0),j=e$1([n("esri.layers.graphics.sources.WFSSource")],j);var O=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var N;const M=l$3();let k=N=class extends(e$2(t(c(o(s$2(l(w(l$1(b))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new O({layer:this}),this.spatialReference=k$1.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0;}static fromWFSLayerInfo(e){const{customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:u}=e;return new N({customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:u})}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),c$1(this.renderer,this.fieldsIndex),m(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,r){return u$1(e,r)}writeWebSceneFeatureReduction(e,r,t,i){c$2(e,r,"layerDefinition.featureReduction",i);}writeFields(e,r,t){const i=e.filter((e=>e.name!==v));this.geometryField&&i.unshift(new y$1({name:this.geometryField,alias:this.geometryField,type:"geometry"})),o$1(t,i.map((e=>e.toJSON())),r);}get parsedUrl(){return this.url?U(this.url):null}set renderer(e){c$1(e,this.fieldsIndex),this._set("renderer",e);}createPopupTemplate(e){return a$2(this,e)}createQuery(){const e=new b$1;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:t}=this;return e.timeExtent=null!=r&&null!=t?t.offset(-r.value,r.unit):t||null,e}getFieldDomain(e,r){var t;return null==(t=this.getField(e))?void 0:t.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),r))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(b$1.from(e)||this.createQuery(),r)))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(b$1.from(e)||this.createQuery(),r)))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(b$1.from(e)||this.createQuery(),r)))}refresh(){this.source.refresh().then((e=>{this.read(e,{origin:"service"}),super.refresh();}));}};e$1([y({readOnly:!0,aliasOf:"source.capabilities"})],k.prototype,"capabilities",void 0),e$1([y({type:String})],k.prototype,"copyright",void 0),e$1([y({readOnly:!0})],k.prototype,"createQueryVersion",null),e$1([y({json:{read:{source:"wfsInfo.customParameters"},write:{target:"wfsInfo.customParameters",ignoreOrigin:!0}}})],k.prototype,"customParameters",void 0),e$1([y({readOnly:!0})],k.prototype,"defaultPopupTemplate",null),e$1([y({type:String})],k.prototype,"definitionExpression",void 0),e$1([y({type:String})],k.prototype,"displayField",void 0),e$1([y({type:x})],k.prototype,"elevationInfo",void 0),e$1([y({types:{key:"type",base:p$1,typeMap:{selection:c$3,cluster:b$2}},json:{write:{target:"layerDefinition.featureReduction"}}})],k.prototype,"featureReduction",void 0),e$1([e$3("featureReduction",["layerDefinition.featureReduction"])],k.prototype,"readFeatureReduction",null),e$1([o$2("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:s$3}})],k.prototype,"writeWebSceneFeatureReduction",null),e$1([y({readOnly:!0,json:{read:{source:"wfsInfo.featureUrl"},write:{target:"wfsInfo.featureUrl",ignoreOrigin:!0,isRequired:!0}}})],k.prototype,"featureUrl",void 0),e$1([y({type:[y$1],json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields",ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"fields"}}}}})],k.prototype,"fields",void 0),e$1([o$2("fields")],k.prototype,"writeFields",null),e$1([y(M.fieldsIndex)],k.prototype,"fieldsIndex",void 0),e$1([y({type:M$1,json:{origins:{service:{read:{source:"extent"}}}}})],k.prototype,"fullExtent",void 0),e$1([y()],k.prototype,"geometryField",void 0),e$1([y({type:i.apiValues,json:{read:{source:"layerDefinition.geometryType",reader:i.read},write:{target:"layerDefinition.geometryType",writer:i.write,ignoreOrigin:!0},origins:{service:{read:i.read}}}})],k.prototype,"geometryType",void 0),e$1([y({type:String})],k.prototype,"id",void 0),e$1([y(l$2)],k.prototype,"labelsVisible",void 0),e$1([y({type:[E],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:r$1},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],k.prototype,"labelingInfo",void 0),e$1([y(f$1)],k.prototype,"legendEnabled",void 0),e$1([y({type:["show","hide"]})],k.prototype,"listMode",void 0),e$1([y({type:String})],k.prototype,"objectIdField",void 0),e$1([y({type:["WFS"]})],k.prototype,"operationalLayerType",void 0),e$1([y({json:{read:{source:"wfsInfo.maxFeatures"},write:{target:"wfsInfo.maxFeatures",ignoreOrigin:!0,isRequired:!0}}})],k.prototype,"maxFeatures",void 0),e$1([y({readOnly:!0,json:{read:{source:"mode"},write:{target:"mode",ignoreOrigin:!0,isRequired:!0}}})],k.prototype,"mode",void 0),e$1([y({json:{read:{source:"wfsInfo.name"},write:{target:"wfsInfo.name",ignoreOrigin:!0,isRequired:!0}}})],k.prototype,"name",void 0),e$1([y({json:{read:{source:"wfsInfo.wfsNamespace"},write:{target:"wfsInfo.wfsNamespace",ignoreOrigin:!0,isRequired:!0}}})],k.prototype,"namespaceUri",void 0),e$1([y(M.outFields)],k.prototype,"outFields",void 0),e$1([y({readOnly:!0})],k.prototype,"parsedUrl",null),e$1([y(s$4)],k.prototype,"popupEnabled",void 0),e$1([y({type:M$2,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],k.prototype,"popupTemplate",void 0),e$1([y({types:m$1,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],k.prototype,"renderer",null),e$1([y({type:Boolean})],k.prototype,"screenSizePerspectiveEnabled",void 0),e$1([y({readOnly:!0})],k.prototype,"source",void 0),e$1([y({type:k$1,json:{read:{source:"layerDefinition.spatialReference"},write:{target:"layerDefinition.spatialReference",ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"extent.spatialReference"}}}}})],k.prototype,"spatialReference",void 0),e$1([y({readOnly:!0,json:{read:{source:"wfsInfo.supportedSpatialReferences"},write:{target:"wfsInfo.supportedSpatialReferences",ignoreOrigin:!0,isRequired:!0}}})],k.prototype,"spatialReferences",void 0),e$1([y({json:{read:{source:"wfsInfo.swapXY"},write:{target:"wfsInfo.swapXY",ignoreOrigin:!0,isRequired:!0}}})],k.prototype,"swapXY",void 0),e$1([y({json:{read:{source:"title"},write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"name"}}}}})],k.prototype,"title",void 0),e$1([y({json:{read:!1},readOnly:!0})],k.prototype,"type",void 0),e$1([y({type:String,json:{write:!0}})],k.prototype,"url",void 0),e$1([y({readOnly:!0,json:{read:{source:"wfsInfo.version"},write:{target:"wfsInfo.version",ignoreOrigin:!0,isRequired:!0}}})],k.prototype,"version",void 0),e$1([y({aliasOf:"source.wfsCapabilities"})],k.prototype,"wfsCapabilities",void 0),k=N=e$1([n("esri.layers.WFSLayer")],k);var B=k;

export default B;
