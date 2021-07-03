import { e, o as o$1 } from './JSONSupport-9346590f.js';
import './Loadable-d16b3d7d.js';
import { h as h$1 } from './Graphic-bb07b7e4.js';
import { S, y as y$2, i as y$3 } from './symbols-9e680ec7.js';
import { L } from './Collection-32506e74.js';
import { s as s$1 } from './promiseUtils-2ff2b194.js';
import { y as y$4, t as t$1, r, o } from './Message-70b34921.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { y, n as n$1, z as t$2 } from './subclass-fe5fcf78.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { n as nn, V, D, H } from './projection-c73dd3c4.js';
import { L as L$1 } from './normalizeUtils-5edbbb73.js';
import { k as k$1, d } from './SpatialReference-843b1520.js';
import { W as We } from './FeatureLayer-a1f2dd15.js';
import { b } from './Layer-aafbe66d.js';
import { t } from './BlendLayer-b9fc1ffb.js';
import { s } from './ScaleRangeLayer-9b1bf210.js';
import { u, m } from './GraphicsCollection-60679841.js';
import { x, l } from './OperationalLayer-a01538e1.js';
import { n as n$2 } from './objectIdUtils-6e93b705.js';
import { w } from './PortalLayer-722467e6.js';
import { y as y$1 } from './Field-728fb193.js';
import { m as m$1 } from './SimpleLineSymbol-9959d1ea.js';
import { M } from './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './jsonMap-e142bd84.js';
import './PopupTemplate-d97f5e88.js';
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './Identifiable-3ad643f8.js';
import './uid-6beaca4c.js';
import './jsonUtils-f0a19240.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './opacityUtils-b92214c2.js';
import './persistableUrlUtils-59858a7e.js';
import './collectionUtils-a13e45d8.js';
import './Portal-ff63481f.js';
import './unitUtils-b17203be.js';
import './mat4-8eb66d33.js';
import './aaBoundingRect-68336c41.js';
import './UniqueValueRenderer-260b50e9.js';
import './jsonUtils-4c6963ee.js';
import './ColorStop-ed1033bb.js';
import './diffUtils-530d997b.js';
import './sizeVariableUtils-6d1564c8.js';
import './visualVariableUtils-86a9e524.js';
import './compilerUtils-7bbb76dc.js';
import './lengthUtils-824a0190.js';
import './styleUtils-8b593a34.js';
import './jsonUtils-cb46c967.js';
import './LRUCache-eed24cc2.js';
import './MemCache-b33cfc4b.js';
import './Handles-af859b7b.js';
import './HeightModelInfo-992659fb.js';
import './workers-bd1ea274.js';
import './queryZScale-688c1e0e.js';
import './zscale-9df5d655.js';
import './FeatureSet-d8329cbc.js';
import './fieldType-6799091f.js';
import './APIKeyMixin-7fe44a14.js';
import './ArcGISService-32a080a6.js';
import './arcgisLayerUrl-cb5a8728.js';
import './CustomParametersMixin-79fc7530.js';
import './RefreshableLayer-a609d261.js';
import './TemporalLayer-f1ac30a1.js';
import './TimeExtent-02acfb1c.js';
import './TimeInfo-ba3374ff.js';
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
import './asyncUtils-015dfd6e.js';
import './TopFeaturesQuery-b22907ac.js';
import './popupUtils-5b007a8e.js';
import './PortalItem-4692b2a9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let n=class extends(t(s(b))){constructor(r){super(r),this.elevationInfo=null,this.graphics=new u,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1;}destroy(){this.removeAll(),this.graphics.destroy();}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r);}removeMany(r){this.graphics.removeMany(r);}on(r,e){return super.on(r,e)}graphicChanged(r){this.emit("graphic-update",r);}};e([y({type:x})],n.prototype,"elevationInfo",void 0),e([y(m())],n.prototype,"graphics",void 0),e([y({type:["show","hide"]})],n.prototype,"listMode",void 0),e([y()],n.prototype,"screenSizePerspectiveEnabled",void 0),e([y({readOnly:!0})],n.prototype,"type",void 0),e([y({constructOnly:!0})],n.prototype,"internal",void 0),n=e([n$1("esri.layers.GraphicsLayer")],n);var h=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function F(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const G=new y$1({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),_=new y$1({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let P=class extends h{constructor(){super(...arguments),this.visibilityMode="inherited";}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer;})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null;}));}get sublayers(){return this.graphics}};e([y({readOnly:!0})],P.prototype,"sublayers",null),e([y()],P.prototype,"layer",void 0),e([y({readOnly:!0})],P.prototype,"visibilityMode",void 0),P=e([n$1("esri.layers.MapNotesLayer.MapNotesSublayer")],P);const k=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new S).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new m$1).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new y$2).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new y$2).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new y$3).toJSON()}];let z=class extends(t(s(l(w(l$1(b)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=k$1.WGS84,this.sublayers=new L(k.map((e=>new P({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited";}readCapabilities(e,t,r){return {operations:{supportsMapNotesEditing:!F(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,o){if(!F(t))return null;const i=t.layers.map((e=>{const t=new We;return t.read(e,o),t}));return new L({items:i})}readLegacyfeatureCollectionJSON(e,t){return F(t)?y$4(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new M({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:k$1.WGS84});const r=k$1.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?M.fromJSON(r).union(e):e}),new M({spatialReference:r}))}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?k$1.fromJSON(t.layers[0].layerDefinition.spatialReference):k$1.WGS84}readSublayers(e,o,i){if(F(o))return null;const l=[];for(let r=0;r<o.layers.length;r++){var a;const{layerDefinition:e,featureSet:i}=o.layers[r],n=null!=(a=e.geometryType)?a:i.geometryType,s=k.find((t=>{var r,o,i;return n===t.geometryTypeJSON&&(null==(r=e.drawingInfo)||null==(o=r.renderer)||null==(i=o.symbol)?void 0:i.type)===t.identifyingSymbol.type}));if(s){const r=new P({id:s.layerId,title:e.name,layer:this,graphics:i.features.map((({geometry:e,symbol:r,attributes:o,popupInfo:i})=>h$1.fromJSON({attributes:o,geometry:e,symbol:r,popupTemplate:i})))});l.push(r);}}return new L(l)}writeSublayers(e,t,r$1,i){const{minScale:n,maxScale:p}=this;if(t$1(e))return;const y=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing){var m;if(y)null==i||null==(m=i.messages)||m.push(new s$1("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"));return}const u=[];let c=this.spatialReference.toJSON();e:for(const o of e)for(const e of o.graphics)if(r(e.geometry)){c=e.geometry.spatialReference.toJSON();break e}for(const o of k){const t=e.find((e=>o.layerId===e.id));this._writeMapNoteSublayer(u,t,o,n,p,c,i);}o("featureCollection.layers",u,t);}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=y$4(e),Object.assign(e,e.featureCollection)),super.read(e,t);}async beforeSave(){if(t$1(this.sublayers))return;let e=null;const t=[];for(const o of this.sublayers)for(const r$1 of o.graphics)if(r(r$1.geometry)){const o=r$1.geometry;e?d(o.spatialReference,e)||(nn(o.spatialReference,e)||V()||await D(),r$1.geometry=H(o,e)):e=o.spatialReference,t.push(r$1);}const r$1=await L$1(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r$1[t]));}_findSublayer(e){var t,r;return t$1(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,o,a,n,s){const p=[];if(!t$1(t)){for(const e of t.graphics)this._writeMapNote(p,e,r.geometryType,s);this._normalizeObjectIds(p,G),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:y$4(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[G.toJSON(),_.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}});}}_writeMapNote(e,t,r$1,o){if(t$1(t))return;const{geometry:i,symbol:n,popupTemplate:s}=t;if(t$1(i))return;var y,m;if(i.type!==r$1)return void(null==o||null==(y=o.messages)||y.push(new t$2("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r$1}" layer`,{graphic:t})));if(t$1(n))return void(null==o||null==(m=o.messages)||m.push(new t$2("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const u={attributes:{...t.attributes},geometry:i.toJSON(),symbol:n.toJSON()};r(s)&&(u.popupInfo=s.toJSON()),e.push(u);}_normalizeObjectIds(e,t){const r=t.name;let o=n$2(r,e)+1;const i=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:e}=l;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r]);}}};e([y({readOnly:!0})],z.prototype,"capabilities",void 0),e([e$1(["portal-item","web-map"],"capabilities",["layers"])],z.prototype,"readCapabilities",null),e([y({readOnly:!0})],z.prototype,"featureCollections",void 0),e([e$1(["web-map","portal-item"],"featureCollections",["layers"])],z.prototype,"readFeatureCollections",null),e([y({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],z.prototype,"featureCollectionJSON",void 0),e([e$1(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],z.prototype,"readLegacyfeatureCollectionJSON",null),e([y({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],z.prototype,"featureCollectionType",void 0),e([y({json:{write:!1}})],z.prototype,"fullExtent",void 0),e([e$1(["web-map","portal-item"],"fullExtent",["layers"])],z.prototype,"readFullExtent",null),e([y({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return {enabled:null!=this.featureCollectionJSON}}}}}}})],z.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],z.prototype,"listMode",void 0),e([y({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"minScale",void 0),e([e$1(["web-map","portal-item"],"minScale",["layers"])],z.prototype,"readMinScale",null),e([y({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"maxScale",void 0),e([e$1(["web-map","portal-item"],"maxScale",["layers"])],z.prototype,"readMaxScale",null),e([y({readOnly:!0})],z.prototype,"multipointLayer",null),e([y({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],z.prototype,"operationalLayerType",void 0),e([y({readOnly:!0})],z.prototype,"pointLayer",null),e([y({readOnly:!0})],z.prototype,"polygonLayer",null),e([y({readOnly:!0})],z.prototype,"polylineLayer",null),e([y({type:k$1})],z.prototype,"spatialReference",void 0),e([e$1(["web-map","portal-item"],"spatialReference",["layers"])],z.prototype,"readSpatialReference",null),e([y({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],z.prototype,"sublayers",void 0),e([e$1("web-map","sublayers",["layers"])],z.prototype,"readSublayers",null),e([o$1("web-map","sublayers")],z.prototype,"writeSublayers",null),e([y({readOnly:!0})],z.prototype,"textLayer",null),e([y()],z.prototype,"title",void 0),e([y({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),z=e([n$1("esri.layers.MapNotesLayer")],z);var B=z;

export default B;
