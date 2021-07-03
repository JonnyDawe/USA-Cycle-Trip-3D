import { e } from './JSONSupport-9346590f.js';
import { M as M$1 } from './PopupTemplate-d97f5e88.js';
import './UniqueValueRenderer-260b50e9.js';
import { n as n$5 } from './jsonUtils-cb46c967.js';
import { f, d as n$3, L } from './Loadable-d16b3d7d.js';
import { s as s$1 } from './promiseUtils-2ff2b194.js';
import { o } from './jsonMap-e142bd84.js';
import { n as n$2, r as r$1, t } from './Message-70b34921.js';
import { y, N, n as n$1 } from './subclass-fe5fcf78.js';
import { r as r$2 } from './enumeration-7d0c165d.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { M } from './Polyline-ccd8fb47.js';
import { k } from './SpatialReference-843b1520.js';
import { W as We } from './FeatureLayer-a1f2dd15.js';
import { r } from './Identifiable-3ad643f8.js';
import { O } from './MultiOriginJSONSupport-859401da.js';
import { d, x, s as s$3 } from './OperationalLayer-a01538e1.js';
import { s } from './capabilities-a266bb8d.js';
import { l as l$2 } from './fieldProperties-4363f1e0.js';
import { e as e$2 } from './FieldsIndex-f71b4f3d.js';
import { n as n$4 } from './I3SIndexInfo-b77c2e24.js';
import { s as s$2, l as l$1, u, m } from './I3SLayerDefinitions-9dc7be70.js';
import { b } from './Query-619f76b0.js';
import { a } from './popupUtils-5b007a8e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let l=class extends(r(O)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1;}readTitle(e,r){return "string"==typeof r.alias?r.alias:"string"==typeof r.name?r.name:""}readIdOnlyOnce(e){return -1!==this.id?this.id:"number"==typeof e?e:void 0}};e([y({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],l.prototype,"title",void 0),e([e$1("service","title",["alias","name"])],l.prototype,"readTitle",null),e([y()],l.prototype,"layer",void 0),e([y({type:N,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),e([e$1("service","id")],l.prototype,"readIdOnlyOnce",null),e([y(d(String))],l.prototype,"modelName",void 0),e([y(d(Boolean))],l.prototype,"isEmpty",void 0),e([y({type:Boolean,json:{name:"visibility",write:!0}})],l.prototype,"visible",void 0),e([y({type:Number,json:{write:!0}})],l.prototype,"opacity",void 0),l=e([n$1("esri.layers.buildingSublayers.BuildingSublayer")],l);var n=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const D=n$2.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),Q=l$2();let R=class extends(f.LoadableMixin(n$3(n))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object";}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new e$2(this.fields)}readAssociatedLayer(e,r){const t=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return r$1(t)&&"number"==typeof o?new We({portalItem:t,layerId:o}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return r$1(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=r$1(e)?e.signal:null,t=this._fetchService(r).then((()=>{this.indexInfo=n$4(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,D,r);}));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){return a(this,e)}async _fetchService(e){const r=(await L(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl});}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var t,o,s,i;const a=null==(t=this.getFeatureType(null==r?void 0:r.feature))||null==(o=t.domains)?void 0:o[e];return a&&"inherited"!==a.type?a:null!=(s=null==(i=this.getField(e))?void 0:i.domain)?s:null}getFeatureType(e){return e&&r$1(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return r$1(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return r$1(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return "3d-object"===this.layerType?"mesh":"point"}get profile(){return "3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=r$1(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:s,{query:r,data:{supportsZ:t,supportsM:o,isVersioned:s$1}}=e;return {query:r,data:{supportsZ:t,supportsM:o,isVersioned:s$1}}}createQuery(){const e=new b;return "mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryExtent(e||this.createQuery(),r)))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatureCount(e||this.createQuery(),r)))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatures(e||this.createQuery(),r))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=this.layer,r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryObjectIds(e||this.createQuery(),r)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:r$1(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return r$1(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),t(this.associatedLayer))throw new s$1("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load();}catch(e){throw new s$1("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};e([y({readOnly:!0})],R.prototype,"parsedUrl",null),e([y({type:s$2,readOnly:!0})],R.prototype,"nodePages",void 0),e([y({type:[l$1],readOnly:!0})],R.prototype,"materialDefinitions",void 0),e([y({type:[u],readOnly:!0})],R.prototype,"textureSetDefinitions",void 0),e([y({type:[m],readOnly:!0})],R.prototype,"geometryDefinitions",void 0),e([y({readOnly:!0})],R.prototype,"serviceUpdateTimeStamp",void 0),e([y({readOnly:!0})],R.prototype,"store",void 0),e([y({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],R.prototype,"rootNode",void 0),e([y({readOnly:!0})],R.prototype,"attributeStorageInfo",void 0),e([y(Q.fields)],R.prototype,"fields",void 0),e([y({readOnly:!0})],R.prototype,"fieldsIndex",null),e([y({readOnly:!0,type:We})],R.prototype,"associatedLayer",void 0),e([e$1("service","associatedLayer",["associatedLayerID"])],R.prototype,"readAssociatedLayer",null),e([y(Q.outFields)],R.prototype,"outFields",void 0),e([y({type:String,readOnly:!0})],R.prototype,"objectIdField",null),e([y({readOnly:!0,type:String,json:{read:!1}})],R.prototype,"displayField",null),e([y({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],R.prototype,"apiKey",void 0),e([y({readOnly:!0,type:M,aliasOf:"layer.fullExtent"})],R.prototype,"fullExtent",void 0),e([y({readOnly:!0,type:k,aliasOf:"layer.spatialReference"})],R.prototype,"spatialReference",void 0),e([y({readOnly:!0,aliasOf:"layer.version"})],R.prototype,"version",void 0),e([y({readOnly:!0,type:x,aliasOf:"layer.elevationInfo"})],R.prototype,"elevationInfo",void 0),e([y({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],R.prototype,"minScale",void 0),e([y({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],R.prototype,"maxScale",void 0),e([y({type:["hide","show"],json:{write:!0}})],R.prototype,"listMode",void 0),e([y({types:n$5,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],R.prototype,"renderer",void 0),e([y({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],R.prototype,"definitionExpression",void 0),e([y(s$3)],R.prototype,"popupEnabled",void 0),e([y({type:M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],R.prototype,"popupTemplate",void 0),e([y({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],R.prototype,"normalReferenceFrame",void 0),e([y({readOnly:!0,json:{read:!1}})],R.prototype,"defaultPopupTemplate",null),e([y()],R.prototype,"types",null),e([y()],R.prototype,"typeIdField",null),e([y({json:{write:!1}}),r$2(new o({"3DObject":"3d-object",Point:"point"}))],R.prototype,"layerType",void 0),e([y()],R.prototype,"geometryType",null),e([y()],R.prototype,"profile",null),e([y({readOnly:!0,json:{read:!1}})],R.prototype,"capabilities",null),R=e([n$1("esri.layers.buildingSublayers.BuildingComponentSublayer")],R);var E=R;

export { E, n };
