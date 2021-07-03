import { e } from './JSONSupport-9346590f.js';
import { f, t as t$1, i as i$1 } from './Loadable-d16b3d7d.js';
import { M as M$2 } from './PopupTemplate-d97f5e88.js';
import './UniqueValueRenderer-260b50e9.js';
import { a as m$1 } from './jsonUtils-cb46c967.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { y, n } from './subclass-fe5fcf78.js';
import { t, r } from './Message-70b34921.js';
import { b } from './Layer-aafbe66d.js';
import { s } from './promiseUtils-2ff2b194.js';
import { d, k } from './SpatialReference-843b1520.js';
import { q, M, N, x, S as S$1, k as k$1, v as v$1, T } from './ogcFeatureUtils-d0541d53.js';
import { i } from './APIKeyMixin-7fe44a14.js';
import { t as t$2 } from './BlendLayer-b9fc1ffb.js';
import { e as e$1 } from './CustomParametersMixin-79fc7530.js';
import { l, x as x$1, a as l$2, f as f$1, s as s$2 } from './OperationalLayer-a01538e1.js';
import { w } from './PortalLayer-722467e6.js';
import { o } from './RefreshableLayer-a609d261.js';
import { s as s$1 } from './ScaleRangeLayer-9b1bf210.js';
import { c } from './TemporalLayer-f1ac30a1.js';
import { p, c as c$2, b as b$2, r as r$1 } from './labelingInfo-c6f27ee6.js';
import { d as d$1 } from './FeatureType-97537d09.js';
import { y as y$1 } from './Field-728fb193.js';
import { l as l$3 } from './fieldProperties-4363f1e0.js';
import { c as c$1, m } from './fieldUtils-22be41cd.js';
import { E } from './LabelClass-e4354cdb.js';
import { b as b$1 } from './Query-619f76b0.js';
import { a } from './popupUtils-5b007a8e.js';
import { M as M$1 } from './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
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
import './_rollupPluginBabelHelpers-58331421.js';
import './featureConversionUtils-3ad98dca.js';
import './OptimizedFeature-ccef5b1d.js';
import './OptimizedFeatureSet-be12a9b8.js';
import './geojson-d55288bb.js';
import './clientSideDefaults-b49b5cc7.js';
import './QueryEngineCapabilities-377cef5c.js';
import './defaultsJSON-0467bd38.js';
import './FieldsIndex-f71b4f3d.js';
import './fieldType-6799091f.js';
import './FeatureSet-d8329cbc.js';
import './TimeExtent-02acfb1c.js';
import './asyncUtils-015dfd6e.js';
import './PortalItem-4692b2a9.js';
import './TimeInfo-ba3374ff.js';
import './labelUtils-7d1afc11.js';
import './defaults-31c9613a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const S="http://www.opengis.net/def/crs/OGC/1.3/CRS84";let v=class extends f{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature";}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:r},layer:{apiKey:o,capabilities:i,customParameters:p}}=this;return {capabilities:i,collection:e,layerDefinition:t,queryParameters:{apiKey:o,customParameters:p},spatialReference:s,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){const s=this.getFeatureDefinition();return this.load(t).then((()=>q(s,e,t)))}queryFeaturesJSON(e,t={}){const s=this.getFeatureDefinition();return this.load(t).then((()=>M(s,e,t)))}queryObjectIds(e,t={}){return null}supportsSpatialReference(e){return !(!e.isWGS84&&!e.isWebMercator)||this.featureDefinition.supportedCrs.some((t$1=>{const s=N(t$1);return !t(s)&&d(s,e)}))}_conformsToType(e,t){var s;const r=new RegExp(`^${t}$`,"i");return null!=(s=e.conformsTo.some((e=>r.test(e))))&&s}_getCapabilities(e,t){var s,r$1,i,p,n,a,u;const l=r(t)?null==(s=t.components)?void 0:s.parameters:null;return {attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(r$1=null!=(i=null==l||null==(p=l.limit)||null==(n=p.schema)?void 0:n.maximum)?i:null==l||null==(a=l.limitFeatures)||null==(u=a.schema)?void 0:u.maximum)?r$1:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const s=null==(t=e.extent)?void 0:t.spatial;if(!s)return null;const r=s.bbox[0],o=4===r.length,i=r[0],p=r[1],n=o?void 0:r[2];return {xmin:i,ymin:p,xmax:o?r[2]:r[3],ymax:o?r[3]:r[4],zmin:n,zmax:o?void 0:r[5],spatialReference:k.WGS84.toJSON()}}_getSpatialReference(e){var t$1;const s=null!=(t$1=e.storageCrs)?t$1:S,o=N(s);return t(o)?k.WGS84:o}_getSupportedSpatialReferences(e,t){var s;const r="#/crs",o=null!=(s=e.crs)?s:[S],i=o.includes(r)?o.filter((e=>e!==r)).concat(t.crs):o,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((e=>!p.test(e)))}async _loadOGCServices(e,s$1){const r$1=r(s$1)?s$1.signal:null,{apiKey:i,collectionId:p,customParameters:n,fields:a,geometryType:u,hasZ:l,objectIdField:h,timeInfo:S,url:v}=e,R={fields:null==a?void 0:a.map((e=>e.toJSON())),geometryType:t$1.toJSON(u),hasZ:l,objectIdField:h,timeInfo:null==S?void 0:S.toJSON()},x$1={apiKey:i,customParameters:n,signal:r$1},C=await x(v,x$1),[w,j]=await Promise.all([S$1(C,x$1),k$1(C,x$1)]);if(!this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new s("ogc-feature-layer:no-geojson-support","Server does not support geojson");const O=j.collections.find((e=>e.id===p));if(!O)throw new s("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const F=this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await v$1(C,x$1):null,b=await T(O,R,x$1),D=this._getCapabilities(b.hasZ,F),P=this._getExtent(O),T$1=this._getSpatialReference(O).toJSON(),_=this._getSupportedSpatialReferences(O,j);b.extent=P,this.featureDefinition={capabilities:D,collection:O,layerDefinition:b,queryParameters:{},spatialReference:T$1,supportedCrs:_};}};e([y()],v.prototype,"featureDefinition",void 0),e([y({constructOnly:!0})],v.prototype,"layer",void 0),e([y()],v.prototype,"type",void 0),v=e([n("esri.layers.graphics.sources.OGCFeatureSource")],v);var R=v;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const G=l$3();let U=class extends(i(e$1(t$2(c(s$1(l(w(o(l$1(b)))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new R({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null;}destroy(){var e;null==(e=this.source)||e.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){c$1(e,this.fieldsIndex),this._set("renderer",e);}on(e,r){return super.on(e,r)}createPopupTemplate(e){return a(this,e)}createQuery(){return new b$1}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var t;let o,i=!1;const s=null==r||null==(t=r.feature)?void 0:t.attributes,p=this.typeIdField&&(null==s?void 0:s[this.typeIdField]);return null!=p&&this.types&&(i=this.types.some((r=>{var t,i;return r.id==p&&(o=null==(t=r.domains)?void 0:t[e],"inherited"===(null==(i=o)?void 0:i.type)&&(o=this._getLayerDomain(e)),!0)}))),i||o||(o=this._getLayerDomain(e)),o}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),r))).then((e=>{var r;return null==e||null==(r=e.features)||r.forEach((e=>{e.layer=e.sourceLayer=this;})),e}))}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),c$1(this.renderer,this.fieldsIndex),m(this.timeInfo,this.fieldsIndex);}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};e([y({readOnly:!0,json:{origins:{service:{read:!0}}}})],U.prototype,"capabilities",void 0),e([y({type:String,json:{write:!0}})],U.prototype,"collectionId",void 0),e([y({type:String})],U.prototype,"copyright",void 0),e([y({readOnly:!0})],U.prototype,"defaultPopupTemplate",null),e([y({type:String})],U.prototype,"definitionExpression",void 0),e([y({readOnly:!0,type:String,json:{origins:{service:{read:{source:"collection.description"}}}}})],U.prototype,"description",void 0),e([y({type:String})],U.prototype,"displayField",void 0),e([y({type:x$1})],U.prototype,"elevationInfo",void 0),e([y({types:{key:"type",base:p,typeMap:{selection:c$2,cluster:b$2}}})],U.prototype,"featureReduction",void 0),e([y({type:[y$1],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],U.prototype,"fields",void 0),e([y(G.fieldsIndex)],U.prototype,"fieldsIndex",void 0),e([y({readOnly:!0,type:M$1,json:{origins:{service:{read:{source:"layerDefinition.extent"}}}}})],U.prototype,"fullExtent",void 0),e([y({type:i$1.apiValues,json:{origins:{service:{read:{source:"layerDefinition.geometryType",reader:i$1.read}}}}})],U.prototype,"geometryType",void 0),e([y({type:Boolean,json:{origins:{service:{read:{source:"layerDefinition.hasZ"}}}}})],U.prototype,"hasZ",void 0),e([y({type:[E],json:{origins:{"web-map":{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:r$1},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}}}})],U.prototype,"labelingInfo",void 0),e([y(l$2)],U.prototype,"labelsVisible",void 0),e([y(f$1)],U.prototype,"legendEnabled",void 0),e([y({type:String,json:{origins:{service:{read:{source:"layerDefinition.objectIdField"}}}}})],U.prototype,"objectIdField",void 0),e([y({type:["OGCFeatureLayer"]})],U.prototype,"operationalLayerType",void 0),e([y(s$2)],U.prototype,"popupEnabled",void 0),e([y({type:M$2,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],U.prototype,"popupTemplate",void 0),e([y({types:m$1,json:{origins:{service:{read:{source:"layerDefinition.drawingInfo.renderer"},write:!1}},read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer"}}})],U.prototype,"renderer",null),e([y({type:Boolean})],U.prototype,"screenSizePerspectiveEnabled",void 0),e([y({readOnly:!0})],U.prototype,"source",void 0),e([y({readOnly:!0,type:k,json:{origins:{service:{read:!0}}}})],U.prototype,"spatialReference",void 0),e([y({type:String,json:{origins:{service:{read:{source:"collection.title"}},"web-map":{write:{ignoreOrigin:!0}}}}})],U.prototype,"title",void 0),e([y({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),e([y({type:String,readOnly:!0})],U.prototype,"typeIdField",void 0),e([y({type:[d$1]})],U.prototype,"types",void 0),e([y({type:String,json:{write:!0}})],U.prototype,"url",void 0),U=e([n("esri.layers.OGCFeatureLayer")],U);var B=U;

export default B;
