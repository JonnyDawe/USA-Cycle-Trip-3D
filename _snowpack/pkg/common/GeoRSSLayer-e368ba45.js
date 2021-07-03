import { e } from './JSONSupport-9346590f.js';
import { r, d as s$1 } from './Message-70b34921.js';
import { p as pt, L as L$1 } from './Loadable-d16b3d7d.js';
import { n as n$1, y as y$1, S } from './symbols-9e680ec7.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { w as w$1 } from './promiseUtils-2ff2b194.js';
import { y, n } from './subclass-fe5fcf78.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { b } from './Layer-aafbe66d.js';
import { t } from './BlendLayer-b9fc1ffb.js';
import { l, g, f, p } from './OperationalLayer-a01538e1.js';
import { w } from './PortalLayer-722467e6.js';
import { o } from './RefreshableLayer-a609d261.js';
import { s } from './ScaleRangeLayer-9b1bf210.js';
import { a, m } from './SimpleLineSymbol-9959d1ea.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './enumeration-7d0c165d.js';
import './fieldUtils-22be41cd.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './opacityUtils-b92214c2.js';
import './persistableUrlUtils-59858a7e.js';
import './Collection-32506e74.js';
import './collectionUtils-a13e45d8.js';
import './Portal-ff63481f.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './Identifiable-3ad643f8.js';
import './TimeExtent-02acfb1c.js';
import './lengthUtils-824a0190.js';
import './unitUtils-b17203be.js';
import './asyncUtils-015dfd6e.js';
import './PortalItem-4692b2a9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const C=["atom","xml"],L={base:a,key:"type",typeMap:{"simple-line":m},errorContext:"symbol"},k={base:a,key:"type",typeMap:{"picture-marker":n$1,"simple-marker":y$1},errorContext:"symbol"},F={base:a,key:"type",typeMap:{"simple-fill":S},errorContext:"symbol"};let M=class extends(t(o(l(w(s(l$1(b))))))){constructor(...e){super(...e),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,o){return "string"==typeof e?{url:e,...o}:e}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?pt(this.url,C)||"GeoRSS":e||""}set title(e){this._set("title",e);}readFeatureCollections(e,o){return o.featureCollection.layers.forEach((e=>{const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&o.outline&&-1!==o.outline.style.indexOf("esriSFS")&&(o.outline.style="esriSLSSolid");})),o.featureCollection.layers}load(e){const o=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(w$1).then((()=>this._fetchService(o)))),Promise.resolve(this)}async _fetchService(e){const{data:t}=await L$1(s$1.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(t,{origin:"service"});}};e([y()],M.prototype,"description",void 0),e([y({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],M.prototype,"title",null),e([y()],M.prototype,"featureCollections",void 0),e([e$1("service","featureCollections",["featureCollection.layers"])],M.prototype,"readFeatureCollections",null),e([y(g)],M.prototype,"id",void 0),e([y(f)],M.prototype,"legendEnabled",void 0),e([y({types:L,json:{write:!0}})],M.prototype,"lineSymbol",void 0),e([y({type:["show","hide"]})],M.prototype,"listMode",void 0),e([y({types:k,json:{write:!0}})],M.prototype,"pointSymbol",void 0),e([y({types:F,json:{write:!0}})],M.prototype,"polygonSymbol",void 0),e([y({type:["GeoRSS"]})],M.prototype,"operationalLayerType",void 0),e([y()],M.prototype,"outSpatialReference",void 0),e([y(p)],M.prototype,"url",void 0),e([y({readOnly:!0,json:{read:!1},value:"geo-rss"})],M.prototype,"type",void 0),M=e([n("esri.layers.GeoRSSLayer")],M);var O=M;

export default O;
