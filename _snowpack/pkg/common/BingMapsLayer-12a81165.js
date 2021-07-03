import { e } from './JSONSupport-9346590f.js';
import { L } from './Loadable-d16b3d7d.js';
import { s as s$1 } from './promiseUtils-2ff2b194.js';
import { o as o$1 } from './jsonMap-e142bd84.js';
import { r, t as t$1 } from './Message-70b34921.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { y as y$2, n } from './subclass-fe5fcf78.js';
import { k } from './SpatialReference-843b1520.js';
import { M } from './Polyline-ccd8fb47.js';
import { i } from './aaBoundingRect-68336c41.js';
import { b as b$1 } from './Layer-aafbe66d.js';
import { t } from './BlendLayer-b9fc1ffb.js';
import { o } from './RefreshableLayer-a609d261.js';
import { s } from './ScaleRangeLayer-9b1bf210.js';
import { S } from './TileInfo-c32d8db8.js';
import { l } from './OperationalLayer-a01538e1.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './Identifiable-3ad643f8.js';
import './unitUtils-b17203be.js';
import './TimeExtent-02acfb1c.js';
import './persistableUrlUtils-59858a7e.js';
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
import './lengthUtils-824a0190.js';
import './opacityUtils-b92214c2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u={id:"0/0/0",level:0,row:0,col:0,extent:null};let y$1=class extends(t(s(o(b$1)))){constructor(){super(...arguments),this.tileInfo=S.create({spatialReference:k.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,k.WebMercator),this.spatialReference=k.WebMercator;}getTileBounds(e,t,r,o){const s=o||i();return u.level=e,u.row=t,u.col=r,u.extent=s,this.tileInfo.updateTileInfo(u),u.extent=null,s}fetchTile(e,r,o,s={}){const{signal:i,timestamp:l}=s,p=this.getTileUrl(e,r,o),a={responseType:"image",signal:i};return null!=l&&(a.query={_ts:s.timestamp}),L(p,a).then((e=>e.data))}getTileUrl(){throw new s$1("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};e([y$2({type:S})],y$1.prototype,"tileInfo",void 0),e([y$2({type:["show","hide"]})],y$1.prototype,"listMode",void 0),e([y$2({readOnly:!0,value:"base-tile"})],y$1.prototype,"type",void 0),e([y$2()],y$1.prototype,"fullExtent",void 0),e([y$2()],y$1.prototype,"spatialReference",void 0),y$1=e([n("esri.layers.BaseTileLayer")],y$1);var d=y$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const y=new o$1({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),h="https://dev.virtualearth.net";let m=class extends(t(l(l$1(d)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new S({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:k.WebMercator},spatialReference:k.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0;}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e);}get copyright(){return r(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return y.toJSON(this.style)}get bingLogo(){return r(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new s$1("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,r){if(!this.loaded||t$1(this.bingMetadata))return null;const o=this.bingMetadata.resourceSets[0].resources[0],a=o.imageUrlSubdomains[t%o.imageUrlSubdomains.length],i=this._getQuadKey(e,t,r);return o.imageUrl.replace("{subdomain}",a).replace("{quadkey}",i)}async fetchAttributionData(){return this.load().then((()=>{if(t$1(this.bingMetadata))return null;return {contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return L(`${h}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new s$1("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new s$1("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new s$1("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new s$1("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return L(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new s$1("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey;})).catch((e=>{throw new s$1("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,r){let o="";for(let a=e;a>0;a--){let e=0;const s=1<<a-1;0!=(r&s)&&(e+=1),0!=(t&s)&&(e+=2),o+=e.toString();}return o}};e([y$2({json:{read:!1,write:!1},value:null})],m.prototype,"bingMetadata",null),e([y$2({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],m.prototype,"type",void 0),e([y$2({type:S})],m.prototype,"tileInfo",void 0),e([y$2({type:String,readOnly:!0,json:{read:!1,write:!1}})],m.prototype,"copyright",null),e([y$2({type:String,json:{write:!1,read:!1}})],m.prototype,"key",void 0),e([y$2({type:y.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:y.read}}})],m.prototype,"style",void 0),e([y$2({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],m.prototype,"operationalLayerType",null),e([y$2({type:String,json:{write:!1,read:!1}})],m.prototype,"culture",void 0),e([y$2({type:String,json:{write:!1,read:!1}})],m.prototype,"region",void 0),e([y$2({type:String,json:{write:!0,read:!0}})],m.prototype,"portalUrl",void 0),e([y$2({type:Boolean,json:{write:!1,read:!1}})],m.prototype,"hasAttributionData",void 0),e([y$2({type:String,readOnly:!0})],m.prototype,"bingLogo",null),m=e([n("esri.layers.BingMapsLayer")],m);var b=m;

export default b;