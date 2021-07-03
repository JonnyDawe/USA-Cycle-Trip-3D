import { e } from './JSONSupport-9346590f.js';
import { f } from './Loadable-d16b3d7d.js';
import { y, n } from './subclass-fe5fcf78.js';
import { r, c as s } from './Message-70b34921.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { W as We } from './FeatureLayer-a1f2dd15.js';
import { p } from './workers-bd1ea274.js';
import g from './FeatureSet-d8329cbc.js';
import { M } from './Polyline-ccd8fb47.js';
import { a as a$1 } from './clientSideDefaults-b49b5cc7.js';
import { b } from './Query-619f76b0.js';
import { m, p as p$1 } from './persistableUrlUtils-59858a7e.js';
import { k } from './SpatialReference-843b1520.js';
import './promiseUtils-2ff2b194.js';
import './Point-ee7951c3.js';
import './jsonMap-e142bd84.js';
import './PopupTemplate-d97f5e88.js';
import './Collection-32506e74.js';
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './Identifiable-3ad643f8.js';
import './UniqueValueRenderer-260b50e9.js';
import './symbols-9e680ec7.js';
import './SimpleLineSymbol-9959d1ea.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './opacityUtils-b92214c2.js';
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
import './jsonUtils-cb46c967.js';
import './LRUCache-eed24cc2.js';
import './MemCache-b33cfc4b.js';
import './Handles-af859b7b.js';
import './MultiOriginJSONSupport-859401da.js';
import './HeightModelInfo-992659fb.js';
import './Layer-aafbe66d.js';
import './queryZScale-688c1e0e.js';
import './zscale-9df5d655.js';
import './APIKeyMixin-7fe44a14.js';
import './ArcGISService-32a080a6.js';
import './arcgisLayerUrl-cb5a8728.js';
import './BlendLayer-b9fc1ffb.js';
import './CustomParametersMixin-79fc7530.js';
import './OperationalLayer-a01538e1.js';
import './TimeExtent-02acfb1c.js';
import './PortalLayer-722467e6.js';
import './asyncUtils-015dfd6e.js';
import './PortalItem-4692b2a9.js';
import './RefreshableLayer-a609d261.js';
import './ScaleRangeLayer-9b1bf210.js';
import './TemporalLayer-f1ac30a1.js';
import './TimeInfo-ba3374ff.js';
import './labelingInfo-c6f27ee6.js';
import './LabelClass-e4354cdb.js';
import './labelUtils-7d1afc11.js';
import './defaults-31c9613a.js';
import './defaultsJSON-0467bd38.js';
import './featureReductionUtils-78800e19.js';
import './FeatureType-97537d09.js';
import './fieldProperties-4363f1e0.js';
import './Field-728fb193.js';
import './fieldType-6799091f.js';
import './FieldsIndex-f71b4f3d.js';
import './styleUtils-58b9b121.js';
import './TopFeaturesQuery-b22907ac.js';
import './popupUtils-5b007a8e.js';
import './QueryEngineCapabilities-377cef5c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let a=class extends f{constructor(e){super(e),this.type="csv";}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>g.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:M.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _startWorker(e){this._connection=await p("CSVSourceWorker",{strategy:s("feature-layers-workers")?"dedicated":"local",signal:e});const o=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=o.locationInfo,this.sourceJSON=o.layerDefinition,this.columnDelimiter=o.columnDelimiter;}};e([y()],a.prototype,"type",void 0),e([y()],a.prototype,"url",void 0),e([y()],a.prototype,"delimiter",void 0),e([y()],a.prototype,"fields",void 0),e([y()],a.prototype,"latitudeField",void 0),e([y()],a.prototype,"longitudeField",void 0),e([y()],a.prototype,"spatialReference",void 0),e([y()],a.prototype,"timeInfo",void 0),e([y()],a.prototype,"locationInfo",void 0),e([y()],a.prototype,"sourceJSON",void 0),e([y()],a.prototype,"columnDelimiter",void 0),a=e([n("esri.layers.graphics.sources.CSVSource")],a);var u=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let d=class extends We{constructor(...e){super(...e),this.capabilities=a$1(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.customParameters=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=k.WGS84,this.source=null,this.type="csv";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,r){return null!=r.showLabels?r.showLabels:!!(r.layerDefinition&&r.layerDefinition.drawingInfo&&r.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e);}async createGraphicsSource(e){const r=new u({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",r),await r.load({signal:e}),this.read({locationInfo:r.locationInfo,columnDelimiter:r.columnDelimiter},{origin:"service",url:this.parsedUrl}),r}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b.from(e)||this.createQuery()))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(b.from(e)||this.createQuery())))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(b.from(e)||this.createQuery())))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(b.from(e)||this.createQuery())))}write(e,r){return super.write(e,{...r,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return !1}};e([y({readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"capabilities",void 0),e([y({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],d.prototype,"delimiter",void 0),e([y({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"editingEnabled",void 0),e([y({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],d.prototype,"fields",void 0),e([y({type:Boolean,readOnly:!0})],d.prototype,"isTable",null),e([e$1("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],d.prototype,"readWebMapLabelsVisible",null),e([y({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"latitudeField",void 0),e([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],d.prototype,"customParameters",void 0),e([y({type:["show","hide"]})],d.prototype,"listMode",void 0),e([y({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"locationType",void 0),e([y({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"longitudeField",void 0),e([y({type:["CSV"]})],d.prototype,"operationalLayerType",void 0),e([y()],d.prototype,"outFields",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],d.prototype,"path",void 0),e([y({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"portalItem",void 0),e([y({json:{read:!1},cast:null,type:u,readOnly:!0})],d.prototype,"source",void 0),e([y({json:{read:!1},value:"csv",readOnly:!0})],d.prototype,"type",void 0),e([y({json:{read:m,write:{isRequired:!0,ignoreOrigin:!0,writer:p$1}}})],d.prototype,"url",null),d=e([n("esri.layers.CSVLayer")],d);var c=d;

export default c;
