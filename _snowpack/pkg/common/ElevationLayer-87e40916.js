import { e } from './JSONSupport-9346590f.js';
import { L, C } from './Loadable-d16b3d7d.js';
import { s as s$1, w as w$1, h as h$1, a } from './promiseUtils-2ff2b194.js';
import { n, h, r } from './Message-70b34921.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { y, n as n$2 } from './subclass-fe5fcf78.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { v } from './HeightModelInfo-992659fb.js';
import { b } from './Layer-aafbe66d.js';
import { s } from './ArcGISCachedService-a0e4ba98.js';
import { p } from './ArcGISService-32a080a6.js';
import { l, p as p$1 } from './OperationalLayer-a01538e1.js';
import { w } from './PortalLayer-722467e6.js';
import { n as n$1 } from './LercDecoder-00822609.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './unitUtils-b17203be.js';
import './Identifiable-3ad643f8.js';
import './serviceTileInfoProperty-27440fb5.js';
import './TileInfo-c32d8db8.js';
import './aaBoundingRect-68336c41.js';
import './TilemapCache-fbae412c.js';
import './Handles-af859b7b.js';
import './Collection-32506e74.js';
import './LRUCache-eed24cc2.js';
import './MemCache-b33cfc4b.js';
import './watchUtils-06a91cc9.js';
import './arcgisLayerUrl-cb5a8728.js';
import './persistableUrlUtils-59858a7e.js';
import './TimeExtent-02acfb1c.js';
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
import './lengthUtils-824a0190.js';
import './opacityUtils-b92214c2.js';
import './asyncUtils-015dfd6e.js';
import './Portal-ff63481f.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './PortalItem-4692b2a9.js';
import './workers-bd1ea274.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const T=n.getLogger("esri.layers.ElevationLayer");let x=class extends(s(p(l(w(l$1(b)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=n$1();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=h(this._lercDecoder);}set minScale(e){this.constructed&&T.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`);}get minScale(){}set maxScale(e){this.constructed&&T.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`);}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return !0;throw new s$1("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(w$1).then((()=>this._fetchImageService(r$1)))),Promise.resolve(this)}fetchTile(e,t,o,i){const a=r((i=i||{signal:null}).signal)?i.signal:i.signal=h$1().signal,l={responseType:"array-buffer",signal:a},p={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,i))).then((()=>L(this.getTileUrl(e,t,o),l))).then((e=>this._lercDecoder.decode(e.data,p,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=C({...this.parsedUrl.query,blankTile:!o&&null});return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-df4ff059.js');a(r);return (new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-df4ff059.js');a(r);return (new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},o=await L(this.parsedUrl.path,t);o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl});}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};e([y({json:{read:{source:"copyrightText"}}})],x.prototype,"copyright",void 0),e([y({readOnly:!0,type:v})],x.prototype,"heightModelInfo",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],x.prototype,"path",void 0),e([y({type:["show","hide"]})],x.prototype,"listMode",void 0),e([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],x.prototype,"minScale",null),e([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],x.prototype,"maxScale",null),e([y({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],x.prototype,"opacity",void 0),e([y({type:["ArcGISTiledElevationServiceLayer"]})],x.prototype,"operationalLayerType",void 0),e([y()],x.prototype,"sourceJSON",void 0),e([y({json:{read:!1},value:"elevation",readOnly:!0})],x.prototype,"type",void 0),e([y(p$1)],x.prototype,"url",void 0),e([y()],x.prototype,"version",void 0),e([e$1("version",["currentVersion"])],x.prototype,"readVersion",null),x=e([n$2("esri.layers.ElevationLayer")],x),x.prototype.fetchTile.__isDefault__=!0;var _=x;

export default _;
