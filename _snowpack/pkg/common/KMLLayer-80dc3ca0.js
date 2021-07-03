import { i, e, o as o$1 } from './JSONSupport-9346590f.js';
import { n, f, p as pt } from './Loadable-d16b3d7d.js';
import { L } from './Collection-32506e74.js';
import { p } from './CollectionFlattener-af542a66.js';
import { r, V as u } from './Message-70b34921.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { w as w$2 } from './promiseUtils-2ff2b194.js';
import { d, y, n as n$1 } from './subclass-fe5fcf78.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { k } from './SpatialReference-843b1520.js';
import { b } from './Layer-aafbe66d.js';
import { t } from './BlendLayer-b9fc1ffb.js';
import { l, p as p$1 } from './OperationalLayer-a01538e1.js';
import { w as w$1 } from './PortalLayer-722467e6.js';
import { o } from './RefreshableLayer-a609d261.js';
import { s } from './ScaleRangeLayer-9b1bf210.js';
import { j as j$1, x } from './watchUtils-06a91cc9.js';
import { c } from './Point-ee7951c3.js';
import { j as j$2, S as S$1, g as g$1, d as d$1 } from './kmlUtils-105433bd.js';
import { M } from './Polyline-ccd8fb47.js';
import './jsonMap-e142bd84.js';
import './HandleOwner-fbf91095.js';
import './Handles-af859b7b.js';
import './Identifiable-3ad643f8.js';
import './TimeExtent-02acfb1c.js';
import './persistableUrlUtils-59858a7e.js';
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
import './lengthUtils-824a0190.js';
import './unitUtils-b17203be.js';
import './opacityUtils-b92214c2.js';
import './asyncUtils-015dfd6e.js';
import './Portal-ff63481f.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './PortalItem-4692b2a9.js';
import './PopupTemplate-d97f5e88.js';
import './aaBoundingBox-c0155c39.js';
import './aaBoundingRect-68336c41.js';
import './jsonUtils-cb46c967.js';
import './UniqueValueRenderer-260b50e9.js';
import './symbols-9e680ec7.js';
import './SimpleLineSymbol-9959d1ea.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './collectionUtils-a13e45d8.js';
import './jsonUtils-4c6963ee.js';
import './ColorStop-ed1033bb.js';
import './diffUtils-530d997b.js';
import './sizeVariableUtils-6d1564c8.js';
import './visualVariableUtils-86a9e524.js';
import './Graphic-bb07b7e4.js';
import './uid-6beaca4c.js';
import './jsonUtils-f0a19240.js';
import './compilerUtils-7bbb76dc.js';
import './styleUtils-8b593a34.js';
import './LRUCache-eed24cc2.js';
import './MemCache-b33cfc4b.js';
import './FeatureSet-d8329cbc.js';
import './Field-728fb193.js';
import './fieldType-6799091f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var j;let S=j=class extends(n.EventedMixin(i(f))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null;}initialize(){j$1(this,"networkLink").then((()=>x(this,"visible"))).then((()=>this.load()));}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=r(e)?e.signal:null,s=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=j$2(e.sublayers);this.fullExtent=M.fromJSON(t),this.sourceJSON=e;const s=d(L.ofType(j),S$1(j,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers");}));return this.addResolvingPromise(s),Promise.resolve(this)}set sublayers(e){const r=this._get("sublayers");r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))]),this._set("sublayers",e);}castSublayers(e){return d(L.ofType(j),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"));}readVisible(e,r){return !!r.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}_fetchService(e,r){return g$1(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((e=>d$1(e.data)))}};e([y()],S.prototype,"description",void 0),e([y()],S.prototype,"id",void 0),e([y({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),e([y({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),e([y({value:null,json:{write:{allowNull:!0}}})],S.prototype,"sublayers",null),e([c("sublayers")],S.prototype,"castSublayers",null),e([y({value:null,json:{read:{source:"name",reader:e=>u(e)}}})],S.prototype,"title",void 0),e([y({value:!0})],S.prototype,"visible",null),e([e$1("visible",["visibility"])],S.prototype,"readVisible",null),e([y()],S.prototype,"sourceJSON",void 0),e([y({value:null})],S.prototype,"layer",null),e([y({type:M})],S.prototype,"fullExtent",void 0),S=j=e([n$1("esri.layers.support.KMLSublayer")],S);var g=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const w=["kml","xml"];let E=class extends(t(o(s(l(w$1(l$1(b))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new p({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=k.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null;}initialize(){this.watch("sublayers",((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null;})),e&&e.forEach((e=>{e.parent=this,e.layer=this;}));}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")));}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders;}readSublayers(e,r,t){return S$1(g,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift();}r.visibleFolders=t;}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?pt(this.url,w)||"KML":e||""}set title(e){this._set("title",e);}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t));};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(w$2).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy();}async _fetchService(e){const r=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:g$1(this.url,this.outSpatialReference,this.refreshInterval,e))),t=d$1(r.data);t&&this.read(t,{origin:"service"});}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const r=t=>{if(t.sublayers)for(const o of t.sublayers.items)r(o),o.visible&&o.fullExtent&&(e?e.union(o.fullExtent):e=o.fullExtent.clone());};return r(this),e}};e([y({readOnly:!0})],E.prototype,"allSublayers",void 0),e([y({type:k})],E.prototype,"outSpatialReference",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],E.prototype,"path",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],E.prototype,"legendEnabled",void 0),e([y({type:["show","hide","hide-children"]})],E.prototype,"listMode",void 0),e([y({type:["KML"]})],E.prototype,"operationalLayerType",void 0),e([y({})],E.prototype,"resourceInfo",void 0),e([y({type:L.ofType(g),json:{write:{ignoreOrigin:!0}}})],E.prototype,"sublayers",void 0),e([e$1(["web-map","portal-item"],"sublayers",["visibleFolders"])],E.prototype,"readSublayersFromItemOrWebMap",null),e([e$1("service","sublayers",["sublayers"])],E.prototype,"readSublayers",null),e([o$1("sublayers")],E.prototype,"writeSublayers",null),e([y({readOnly:!0,json:{read:!1}})],E.prototype,"type",void 0),e([y({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],E.prototype,"title",null),e([y(p$1)],E.prototype,"url",void 0),e([y({readOnly:!0})],E.prototype,"visibleSublayers",null),e([y({type:M})],E.prototype,"extent",void 0),e([y()],E.prototype,"fullExtent",null),E=e([n$1("esri.layers.KMLLayer")],E);var F=E;

export default F;
