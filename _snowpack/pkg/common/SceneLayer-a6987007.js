import { e, a } from './JSONSupport-9346590f.js';
import { M } from './PopupTemplate-d97f5e88.js';
import './UniqueValueRenderer-260b50e9.js';
import { n as n$2 } from './jsonUtils-cb46c967.js';
import { D, L } from './Loadable-d16b3d7d.js';
import { w as w$1, s as s$4, g } from './promiseUtils-2ff2b194.js';
import { n as n$1, r, t as t$1 } from './Message-70b34921.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { i as i$1 } from './watchUtils-06a91cc9.js';
import { y, n, e as e$2 } from './subclass-fe5fcf78.js';
import { e as e$3 } from './reader-fa0f173d.js';
import { b } from './Layer-aafbe66d.js';
import { i } from './APIKeyMixin-7fe44a14.js';
import { p as p$1 } from './ArcGISService-32a080a6.js';
import { l, c as c$2, a as l$4, f, s as s$5, o } from './OperationalLayer-a01538e1.js';
import { w } from './PortalLayer-722467e6.js';
import { s as s$1 } from './ScaleRangeLayer-9b1bf210.js';
import { R } from './SceneService-9fbf3dec.js';
import { s as s$3 } from './capabilities-a266bb8d.js';
import { p as p$2, c as c$1, r as r$1 } from './labelingInfo-c6f27ee6.js';
import { l as l$2 } from './FetchAssociatedFeatureLayer-9e2b7c4c.js';
import { l as l$5 } from './fieldProperties-4363f1e0.js';
import { e as e$1 } from './FieldsIndex-f71b4f3d.js';
import { c } from './fieldUtils-22be41cd.js';
import { s as s$2, l as l$3, u, m } from './I3SLayerDefinitions-9dc7be70.js';
import { E } from './LabelClass-e4354cdb.js';
import { i as i$2 } from './FeatureLayer-a1f2dd15.js';
import { t } from './styleUtils-58b9b121.js';
import { b as b$1 } from './Query-619f76b0.js';
import { a as a$1 } from './popupUtils-5b007a8e.js';
import { r as r$2 } from './opacityUtils-b92214c2.js';
import './Collection-32506e74.js';
import './Point-ee7951c3.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './enumeration-7d0c165d.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './Identifiable-3ad643f8.js';
import './symbols-9e680ec7.js';
import './SimpleLineSymbol-9959d1ea.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './persistableUrlUtils-59858a7e.js';
import './collectionUtils-a13e45d8.js';
import './Portal-ff63481f.js';
import './Polyline-ccd8fb47.js';
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
import './arcgisLayerUrl-cb5a8728.js';
import './TimeExtent-02acfb1c.js';
import './asyncUtils-015dfd6e.js';
import './PortalItem-4692b2a9.js';
import './multiOriginJSONSupportUtils-510f5718.js';
import './HeightModelInfo-992659fb.js';
import './I3SIndexInfo-b77c2e24.js';
import './uuid-630c0c55.js';
import './resourceUtils-d1624f52.js';
import './Field-728fb193.js';
import './fieldType-6799091f.js';
import './labelUtils-7d1afc11.js';
import './defaults-31c9613a.js';
import './defaultsJSON-0467bd38.js';
import './Handles-af859b7b.js';
import './workers-bd1ea274.js';
import './queryZScale-688c1e0e.js';
import './zscale-9df5d655.js';
import './FeatureSet-d8329cbc.js';
import './BlendLayer-b9fc1ffb.js';
import './CustomParametersMixin-79fc7530.js';
import './RefreshableLayer-a609d261.js';
import './TemporalLayer-f1ac30a1.js';
import './TimeInfo-ba3374ff.js';
import './featureReductionUtils-78800e19.js';
import './FeatureType-97537d09.js';
import './TopFeaturesQuery-b22907ac.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s=class extends a{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo";}};e([y({type:String,json:{read:!0,write:!0}})],s.prototype,"name",void 0),e([y({type:String,json:{read:!0,write:!0}})],s.prototype,"field",void 0),e([y({type:[Number],json:{read:!0,write:!0}})],s.prototype,"currentRangeExtent",void 0),e([y({type:[Number],json:{read:!0,write:!0}})],s.prototype,"fullRangeExtent",void 0),e([y({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=e([n("esri.layers.support.RangeInfo")],s);var p=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const Z=["3DObject","Point"],B=n$1.getLogger("esri.layers.SceneLayer"),H=l$5();let J=class extends(R(p$1(l(w(s$1(l$1(i(b)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0;}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,s,o,i;const a=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(s=r.domains)?void 0:s[e];return a&&"inherited"!==a.type?a:null!=(o=null==(i=this.getField(e))?void 0:i.domain)?o:null}getFeatureType(e){return e&&r(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return r(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return r(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return r(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new e$1(this.fields)}readNodePages(e,t,r){return "Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:s$2.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo();}get geometryType(){return Y[this.profile]||"mesh"}set renderer(e){c(e,this.fieldsIndex),this._set("renderer",e);}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=r(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:s$3,{query:t,editing:{supportsGlobalId:r$1,supportsRollbackOnFailure:s,supportsUploadWithItemId:o,supportsReturnServiceEditsInSourceSpatialReference:i},data:{supportsZ:n,supportsM:p,isVersioned:l,supportsAttachment:d},operations:{supportsEditing:y,supportsUpdate:u,supportsQuery:c,supportsQueryAttachments:f}}=e,h=e.operations.supportsChangeTracking;return {query:t,editing:{supportsGlobalId:r$1,supportsReturnServiceEditsInSourceSpatialReference:i,supportsRollbackOnFailure:s,supportsGeometryUpdate:!1,supportsUploadWithItemId:o},data:{supportsAttachment:d,supportsZ:n,supportsM:p,isVersioned:l},operations:{supportsQuery:c,supportsQueryAttachments:f,supportsEditing:y&&h,supportsAdd:!1,supportsDelete:!1,supportsUpdate:u&&h}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled");}get defaultPopupTemplate(){return r(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return !e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return !e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return r(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&X[r]?X[r]:(B.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t$1=r(e)?e.signal:null,r$1=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w$1).then((()=>this._fetchService(t$1))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t$1),this._setAssociatedFeatureLayer(t$1)]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>t(this,{origin:"service"},t$1))).then((()=>c(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r$1),Promise.resolve(this)}createQuery(){const e=new b$1;return "mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(B.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return a$1(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return r(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),t$1(this.associatedLayer))throw new s$4("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load();}catch(e){throw new s$4("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new s$4("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new s$4("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.statisticsInfo)if(o.name===r.name){const e=D(this.parsedUrl.path,o.href);return L(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s$4("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(0,e)}async applyEdits(e,t){const r=await import('./editingSupport-8af28cc0.js');if(await this.load(),t$1(this.associatedLayer))throw new s$4(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&-1===Z.indexOf(e.layerType))throw new s$4("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$4("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s$4("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});function t(e,t){let r=!1,s=!1;if(null==e)r=!0,s=!0;else {const o=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,s=o;break;case"vertex-reference-frame":r=!0,s=!o;break;default:r=!1;}}if(!r)throw new s$4("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!s)throw new s$4("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference);}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else {if("mesh-pyramids"!==this.profile)throw new s$4("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject");}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r$1=!!(r(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),s={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r$1,supportsLayerQuery:r$1};this._fieldUsageInfo[e.name]=s;}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides();}_applyAssociatedLayerFieldsOverrides(){if(t$1(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()));}e&&this._set("fields",e);}_applyAssociatedLayerPopupOverrides(){if(t$1(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=e$2(this);for(let r=0;r<e.length;r++){const s=e[r],o=this.originIdOf(s),i=this.associatedLayer.originIdOf(s);o<i&&(2===i||3===i)&&t.setAtOrigin(s,this.associatedLayer[s],i);}}async _setAssociatedFeatureLayer(e){if(-1===["mesh-pyramids","points"].indexOf(this.profile))return;const t=new l$2(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch();}catch(r){g(r)||this._logWarningOnPopupEnabled();}}_logWarningOnPopupEnabled(){i$1(this,["popupTemplate","popupEnabled"],(()=>this.popupEnabled&&null!=this.popupTemplate)).then((()=>()=>{const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?B.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):B.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`);}));}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&B.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&B.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"));}};e([y({types:{key:"type",base:p$2,typeMap:{selection:c$1}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],J.prototype,"featureReduction",void 0),e([y({type:[p],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],J.prototype,"rangeInfos",void 0),e([y({json:{read:!1}})],J.prototype,"associatedLayer",void 0),e([y({type:["show","hide"]})],J.prototype,"listMode",void 0),e([y({type:["ArcGISSceneServiceLayer"]})],J.prototype,"operationalLayerType",void 0),e([y({json:{read:!1},readOnly:!0})],J.prototype,"type",void 0),e([y({...H.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],J.prototype,"fields",void 0),e([y()],J.prototype,"types",null),e([y()],J.prototype,"typeIdField",null),e([y()],J.prototype,"formTemplate",null),e([y({readOnly:!0})],J.prototype,"fieldsIndex",null),e([y({type:i$2,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],J.prototype,"floorInfo",void 0),e([y(H.outFields)],J.prototype,"outFields",void 0),e([y({type:s$2,readOnly:!0,json:{read:!1}})],J.prototype,"nodePages",void 0),e([e$3("service","nodePages",["nodePages","pointNodePages"])],J.prototype,"readNodePages",null),e([y({type:[l$3],readOnly:!0})],J.prototype,"materialDefinitions",void 0),e([y({type:[u],readOnly:!0})],J.prototype,"textureSetDefinitions",void 0),e([y({type:[m],readOnly:!0})],J.prototype,"geometryDefinitions",void 0),e([y({readOnly:!0})],J.prototype,"serviceUpdateTimeStamp",void 0),e([y({readOnly:!0})],J.prototype,"attributeStorageInfo",void 0),e([y({readOnly:!0})],J.prototype,"statisticsInfo",void 0),e([y({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],J.prototype,"definitionExpression",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],J.prototype,"path",void 0),e([y(c$2)],J.prototype,"elevationInfo",null),e([y({type:String})],J.prototype,"geometryType",null),e([y(l$4)],J.prototype,"labelsVisible",void 0),e([y({type:[E],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:r$1},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$1},write:!0}})],J.prototype,"labelingInfo",void 0),e([y(f)],J.prototype,"legendEnabled",void 0),e([y({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r,s;if("number"==typeof e&&e>=0&&e<=1)return e;const o=null==(r=t.layerDefinition)||null==(s=r.drawingInfo)?void 0:s.transparency;return void 0!==o?r$2(o):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],J.prototype,"opacity",void 0),e([y({types:n$2,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],J.prototype,"renderer",null),e([y({json:{read:!1}})],J.prototype,"cachedDrawingInfo",void 0),e([e$3("service","cachedDrawingInfo")],J.prototype,"readCachedDrawingInfo",null),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"capabilities",null),e([y({type:Boolean,json:{read:!1}})],J.prototype,"editingEnabled",null),e([y(s$5)],J.prototype,"popupEnabled",void 0),e([y({type:M,json:{name:"popupInfo",write:!0}})],J.prototype,"popupTemplate",void 0),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"defaultPopupTemplate",null),e([y({type:String,json:{read:!1}})],J.prototype,"objectIdField",void 0),e([e$3("service","objectIdField",["objectIdField","fields"])],J.prototype,"readObjectIdField",null),e([y({type:String,json:{read:!1}})],J.prototype,"globalIdField",void 0),e([e$3("service","globalIdField",["globalIdField","fields"])],J.prototype,"readGlobalIdField",null),e([y({readOnly:!0,type:String,json:{read:!1}})],J.prototype,"displayField",null),e([y({type:String,json:{read:!1}})],J.prototype,"profile",void 0),e([e$3("service","profile",["store.profile"])],J.prototype,"readProfile",null),e([y({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],J.prototype,"normalReferenceFrame",void 0),e([y(o)],J.prototype,"screenSizePerspectiveEnabled",void 0),J=e([n("esri.layers.SceneLayer")],J);const X={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Y={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};var ee=J;

export default ee;
