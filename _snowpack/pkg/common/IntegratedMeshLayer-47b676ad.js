import { i, e } from './JSONSupport-9346590f.js';
import { w as w$1, s as s$1 } from './promiseUtils-2ff2b194.js';
import { u } from './Handles-af859b7b.js';
import { g, r, t } from './Message-70b34921.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { C } from './watchUtils-06a91cc9.js';
import { y, n as n$1 } from './subclass-fe5fcf78.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { g as g$1 } from './persistable-9892fb5d.js';
import { b } from './Layer-aafbe66d.js';
import { i as i$1 } from './APIKeyMixin-7fe44a14.js';
import { p } from './ArcGISService-32a080a6.js';
import { l, c as c$1 } from './OperationalLayer-a01538e1.js';
import { w } from './PortalLayer-722467e6.js';
import { s } from './ScaleRangeLayer-9b1bf210.js';
import { R } from './SceneService-9fbf3dec.js';
import { s as s$2, l as l$2, u as u$1, m as m$1 } from './I3SLayerDefinitions-9dc7be70.js';
import { U, L as L$1 } from './Loadable-d16b3d7d.js';
import { L } from './Collection-32506e74.js';
import { f as f$1 } from './SceneModification-c5ce4fa5.js';
import { c } from './persistableUrlUtils-59858a7e.js';
import './multiOriginJSONSupportUtils-510f5718.js';
import './uuid-630c0c55.js';
import './Identifiable-3ad643f8.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './SpatialReference-843b1520.js';
import './arcgisLayerUrl-cb5a8728.js';
import './TimeExtent-02acfb1c.js';
import './jsonMap-e142bd84.js';
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
import './HeightModelInfo-992659fb.js';
import './I3SIndexInfo-b77c2e24.js';
import './resourceUtils-d1624f52.js';
import './projection-c73dd3c4.js';
import './mathUtils-a477cc74.js';
import './mat4-8eb66d33.js';
import './aaBoundingRect-68336c41.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var m;let n=m=class extends(i(L.ofType(f$1))){constructor(r){super(r),this.url=null;}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new m({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const e of r)this.add(f$1.fromJSON(e,o));}static fromJSON(r,o){const e=new m;return e._readModifications(r,o),e}static async fromUrl(r,e,t){const c={url:U(r),origin:"service"},p=await L$1(r,{responseType:"json",signal:g(t,"signal")}),n=e.toJSON(),f=[];for(const o of p.data)f.push(f$1.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},c));return new m({url:r,items:f})}};e([y({type:String})],n.prototype,"url",void 0),n=m=e([n$1("esri.layers.support.SceneModifications")],n);var f=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let O=class extends(R(p(l(w(s(l$1(i$1(b)))))))){constructor(...e){super(...e),this.handles=new u,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null;}destroy(){this.handles.destroy();}initialize(){this.handles.add(C(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:c(e,r),context:r};}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=g(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(r){w$1(r);}if(await this._fetchService(t),r(this._modificationsSource)){const t=await f.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,t);}beforeSave(){if(!t(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s$1("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}};e([y({type:String,readOnly:!0})],O.prototype,"geometryType",void 0),e([y({type:["show","hide"]})],O.prototype,"listMode",void 0),e([y({type:["IntegratedMeshLayer"]})],O.prototype,"operationalLayerType",void 0),e([y({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),e([y({type:s$2,readOnly:!0})],O.prototype,"nodePages",void 0),e([y({type:[l$2],readOnly:!0})],O.prototype,"materialDefinitions",void 0),e([y({type:[u$1],readOnly:!0})],O.prototype,"textureSetDefinitions",void 0),e([y({type:[m$1],readOnly:!0})],O.prototype,"geometryDefinitions",void 0),e([y({readOnly:!0})],O.prototype,"serviceUpdateTimeStamp",void 0),e([y({type:f}),g$1({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],O.prototype,"modifications",void 0),e([e$1(["web-scene","portal-item"],"modifications")],O.prototype,"readModifications",null),e([y(c$1)],O.prototype,"elevationInfo",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),O=e([n$1("esri.layers.IntegratedMeshLayer")],O);var M=O;

export default M;
