(self.webpackChunk=self.webpackChunk||[]).push([[4078],{54078:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>V}),r(33807);var s=r(78155),i=r(80987),l=r(20215),o=r(80219),a=r(79506),n=r(88903),u=r(4169),p=r(98548),c=r(92858),y=r(41290),h=r(9947),d=r(54223),m=r(51218),f=r(13895),g=r(15576),A=r(19438),S=r(25290),v=r(21779),U=r(28190),x=r(36542),w=r(79762),_=r(6488),b=r(82030),I=r(732);r(20736),r(31531),r(62121),r(8725),r(29832),r(91236),r(52957),r(29126),r(4618),r(65352),r(61888),r(9612),r(52109),r(6585),r(3621),r(63358),r(76326),r(58404),r(83731),r(40130),r(97325),r(3629),r(36845),r(29218),r(17762),r(60816),r(34534),r(43356);const R=o.n.getLogger("esri.layers.support.SpriteSource");class T{constructor(e,t,r,s){this.baseURL=e,this.devicePixelRatio=t,this.maxTextureSize=r,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const e=[];for(const t in this._spritesData)e.push(t);return e.sort(),e}getSpriteInfo(e){return this._spritesData[e]}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(e){this._isRetina=this.devicePixelRatio>1.15;const t=(0,i.U)(this.baseURL),r=t.query?"?"+(0,i.C)(t.query):"",s=this._isRetina?"@2x":"",o=`${t.path}${s}.${this._spriteImageFormat}${r}`,a=`${t.path}${s}.json${r}`;return Promise.all([(0,i.L)(a,e),(0,i.L)(o,{responseType:"image",...e})]).then((([e,r])=>{const s=Object.keys(e.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!r||!r.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=e.data;const i=r.data,o=Math.max(this.maxTextureSize,4096);if(i.width>o||i.height>o){const e=`Sprite resource for style ${t.path} is bigger than the maximum allowed of ${o} pixels}`;throw R.error(e),new l.s("SpriteSource",e)}this.width=i.width,this.height=i.height;const a=document.createElement("canvas"),n=a.getContext("2d");a.width=i.width,a.height=i.height,n.drawImage(i,0,0,i.width,i.height);const u=n.getImageData(0,0,i.width,i.height),p=new Uint8Array(u.data);let c;for(let e=0;e<p.length;e+=4)c=p[e+3]/255,p[e]=p[e]*c,p[e+1]=p[e+1]*c,p[e+2]=p[e+2]*c;this.image=p}))}}class P{constructor(e,t,r){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=t,t&&(this.parsedUrl=(0,i.U)(this.sourceUrl));const s=this.parsedUrl.path,l=this.parsedUrl.query?"?"+(0,i.C)(this.parsedUrl.query):"",a=(0,o.y)(r),n=a.tiles;t&&n.forEach(((e,t)=>{(0,i.Q)(e)||(n[t]=(0,i.D)(s,e)+l)})),this.tileServers=n,r.tileMap&&(this.tileMapURL=(0,i.D)(t,r.tileMap));const u=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim())),c=!!r.exportTilesAllowed,y=!!u&&-1!==u.indexOf("tilemap"),h=c&&r.hasOwnProperty("maxExportTilesCount")?r.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:c,supportsTileMap:y},exportTiles:c?{maxExportTilesCount:+h}:null},this.tileInfo=(0,U.n)(a.tileInfo,a,null,{ignoreMinMaxLOD:!0}),y&&(this.type="vector-tile",this.tilemapCache=new v.j({layer:this}),this.tilemapCache&&(this.tileIndex=new x.r(this.tilemapCache))),this.fullExtent=p.M.fromJSON(r.fullExtent)}getRefKey(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Promise.resolve(e)}getSourceTileUrl(e,t,r){let s=this.tileServers[t%this.tileServers.length];return s=s.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),s}isCompatibleWith(e){const t=this.tileInfo,r=e.tileInfo;if(!t.spatialReference.equals(r.spatialReference))return!1;if(!t.origin.equals(r.origin))return!1;if(Math.round(t.dpi)!==Math.round(r.dpi))return!1;const s=t.lods,i=r.lods,l=Math.min(s.length,i.length);for(let e=0;e<l;e++){const t=s[e],r=i[e];if(t.level!==r.level||Math.round(t.scale)!==Math.round(r.scale))return!1}return!0}}const O=o.d.defaults&&o.d.defaults.io.corsEnabledServers;function L(e){if(!e)return;const t=(0,i.M)(e);O&&-1===O.indexOf(t)&&O.push(t)}function M(...e){let t;for(let r=0;r<e.length;++r)if((0,i.j)(e[r])){if(t){const s=t.split("://")[0];t=s+":"+e[r].trim()}}else t=(0,i.Q)(e[r])?e[r]:(0,i.D)(t,e[r]);return(0,i.g)(t)}async function C(e,t,r,s,o){let a,n,u;if((0,l.a)(o),"string"==typeof r){const e=(0,i.z)(r);L(e);const t=(0,i.U)(e);u=await(0,i.L)(t.path,{query:{f:"json"},responseType:"json",...o}),a=e,n=e}else u={data:r},a=r.jsonUrl||null,n=s;const p=u.data;return u.ssl&&(a&&(a=a.replace(/^http:/i,"https:")),n&&(n=n.replace(/^http:/i,"https:"))),N(p)?(e.styleUrl=a||null,async function(e,t,r,s){const l=r?(0,i.h)(r):i.J;e.styleBase=l,e.style=t,e.styleUrl&&L(e.styleUrl),t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const r=t.sources.esri;r.url?await C(e,"esri",M(l,r.url),void 0,s):o.push(C(e,"esri",r,l,s))}for(const r of Object.keys(t.sources))"esri"!==r&&"vector"===t.sources[r].type&&(t.sources[r].url?o.push(C(e,r,M(l,t.sources[r].url),void 0,s)):t.sources[r].tiles&&o.push(C(e,r,t.sources[r],l,s)));await Promise.all(o)}(e,p,n,o)):function(e){return!N(e)}(p)?e.sourceUrl?D(e,p,n,!1,t,o):(e.sourceUrl=a||null,D(e,p,n,!0,t,o)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function N(e){return!!e.sources}async function D(e,t,r,s,l,o){const a=r?(0,i.g)(r)+"/":i.J,n=function(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}};let s=78271.51696400007,i=295828763.7957775;const l=[],o=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,a=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22;for(let e=0;e<=a;e++)e>=o&&l.push({level:e,scale:i,resolution:s}),s/=2,i/=2;for(const r of e.tiles)L(M(t,r));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:l,spatialReference:{wkid:102100}}}}(t,a),u=new P(l,a,n);if(!s&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(u))return Promise.resolve();null!=u.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(u.fullExtent):t.fullExtent=u.fullExtent.clone()),t.tileInfo.lods.length<u.tileInfo.lods.length&&(t.tileInfo=u.tileInfo)}if(s?(e.sourceBase=a,e.source=t,e.validatedSource=n,e.primarySourceName=l,e.sourceUrl&&L(e.sourceUrl)):L(a),e.sourceNameToSource[l]=u,!e.style)return null==t.defaultStyles?Promise.reject():"string"==typeof t.defaultStyles?C(e,"",M(a,t.defaultStyles,"root.json"),void 0,o):C(e,"",t.defaultStyles,M(a,"root.json"),o)}const E=1e-6;function j(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=E||Math.abs(r.y-s.y)>=E)return!1;let i,l;e.lods[0].scale>t.lods[0].scale?(i=e,l=t):(l=e,i=t);for(let e=i.lods[0].scale;e>=l.lods[l.lods.length-1].scale-E;e/=2)if(Math.abs(e-l.lods[0].scale)<E)return!0;return!1}function B(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;const r=e.size[0],s=e.format,i=e.dpi,l={x:e.origin.x,y:e.origin.y},o=e.spatialReference.toJSON(),a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=a.scale,p=a.resolution,c=n.scale,y=[];let h=u,d=p,m=0;for(;h>c;)y.push({level:m,resolution:d,scale:h}),m++,h/=2,d/=2;return new S.S({size:[r,r],dpi:i,format:s||"pbf",origin:l,lods:y,spatialReference:o})}let Q=class extends((0,m.t)((0,A.s)((0,h.s)((0,d.p)((0,f.l)((0,g.w)((0,a.l)(y.b)))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(o.e.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(l.w).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await(0,i.L)(t,{...e,query:{f:"json"}})).data&&this.read({url:t},(0,w.o)(this.portalItem))})).catch(l.w).then((()=>this._loadStyle(e)));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&(0,i.U)(e.serviceUrl);return t?this._getDefaultAttribution(t.path):null}get capabilities(){const e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const e=this._getPrimarySource();return e?e.fullExtent:null}get parsedUrl(){return this.serviceUrl?(0,i.U)(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&(0,i.j)(e)&&(e=`https:${e}`),t.styleUrl=e}get tileIndexType(){const e=this._getPrimarySource();return e?e.type:""}get tileIndexUrl(){const e=this._getPrimarySource();return e?e.tileMapURL:""}get tileInfo(){var e;const t=[];for(const e in this.sourceNameToSource)t.push(this.sourceNameToSource[e]);let r=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new S.S;if(t.length>1)for(let e=0;e<t.length;e++)j(r,t[e].tileInfo)&&(r=B(r,t[e].tileInfo));return r}get tilemapCache(){const e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}get tileServers(){const e=this._getPrimarySource();return e?e.tileServers:[]}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return _.t.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return _.t.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=(0,I.r)(),s=new T(this.styleRepository.sprite,e,r.maxTextureSize,this.currentStyleInfo.spriteFormat);await s.load(t),this._spriteSourceMap.set(e,s)}return Promise.resolve(this._spriteSourceMap.get(e))}async loadStyle(e,t){const r=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof r&&this.url===r&&!(0,l.b)(this._abortController))return this._loadingPromise;const s=this._abortController;s&&s.abort();const i=(0,l.h)();return this._loadingPromise=new Promise(((e,s)=>{const o={signal:i.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(r,o).then(e,s),(0,l.v)(t,(()=>{i.abort()}))})),this._abortController=i,this._loadingPromise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return(0,o.y)(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return(0,o.y)(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return(0,o.y)(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}getTileUrl(e,t,r){let s=this.tileServers[t%this.tileServers.length];return s=s.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),s}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new l.s("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await async function(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,l]="string"==typeof e?[e,null]:[null,e.jsonUrl],o=s?(0,i.U)(s):null;await C(r,"esri",e,l,t);const a={layerDefinition:r.validatedSource,url:s,parsedUrl:o,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&M(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&M(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return L(a.spriteUrl),L(a.glyphsUrl),a}(e,t);"webp"===r.spriteFormat&&(await function(e){const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise((e=>{const r=new Image;r.onload=()=>{r.onload=r.onerror=null,e(r.width>0&&r.height>0)},r.onerror=()=>{r.onload=r.onerror=null,e(!1)},r.src="data:image/webp;base64,"+t.lossy}))}()||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySourceName",r.primarySourceName),this._set("styleRepository",new b.g(r.style,r)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style",{})}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const l=t[1]||"";for(const e of r)if(e.toLowerCase().indexOf(s)>-1)return(0,i.z)(`//static.arcgis.com/attribution/Vector${l}/${e}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(e){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,e)}};(0,s.e)([(0,n.y)({readOnly:!0})],Q.prototype,"attributionDataUrl",null),(0,s.e)([(0,n.y)({type:["show","hide"]})],Q.prototype,"listMode",void 0),(0,s.e)([(0,n.y)({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],json:{read:!1}})],Q.prototype,"capabilities",null),(0,s.e)([(0,n.y)({readOnly:!0})],Q.prototype,"currentStyleInfo",void 0),(0,s.e)([(0,n.y)({json:{read:!1},readOnly:!0,type:p.M})],Q.prototype,"fullExtent",null),(0,s.e)([(0,n.y)()],Q.prototype,"style",void 0),(0,s.e)([(0,n.y)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],Q.prototype,"isReference",void 0),(0,s.e)([(0,n.y)({type:["VectorTileLayer"]})],Q.prototype,"operationalLayerType",void 0),(0,s.e)([(0,n.y)({readOnly:!0})],Q.prototype,"parsedUrl",null),(0,s.e)([(0,n.y)({readOnly:!0})],Q.prototype,"serviceUrl",null),(0,s.e)([(0,n.y)({type:c.k,readOnly:!0})],Q.prototype,"spatialReference",null),(0,s.e)([(0,n.y)({readOnly:!0})],Q.prototype,"styleRepository",void 0),(0,s.e)([(0,n.y)({readOnly:!0})],Q.prototype,"sourceNameToSource",void 0),(0,s.e)([(0,n.y)({readOnly:!0})],Q.prototype,"primarySourceName",void 0),(0,s.e)([(0,n.y)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],Q.prototype,"styleUrl",null),(0,s.e)([(0,s.o)(["portal-item","web-document"],"styleUrl")],Q.prototype,"writeStyleUrl",null),(0,s.e)([(0,n.y)({json:{read:!1},readOnly:!0})],Q.prototype,"tileIndexType",null),(0,s.e)([(0,n.y)({json:{read:!1},readOnly:!0})],Q.prototype,"tileIndexUrl",null),(0,s.e)([(0,n.y)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:S.S})],Q.prototype,"tileInfo",null),(0,s.e)([(0,n.y)({json:{read:!1},readOnly:!0,type:v.j})],Q.prototype,"tilemapCache",null),(0,s.e)([(0,n.y)({json:{read:!1},readOnly:!0})],Q.prototype,"tileServers",null),(0,s.e)([(0,n.y)({json:{read:!1},readOnly:!0,value:"vector-tile"})],Q.prototype,"type",void 0),(0,s.e)([(0,n.y)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],Q.prototype,"url",void 0),(0,s.e)([(0,n.y)({readOnly:!0})],Q.prototype,"version",void 0),(0,s.e)([(0,u.e)("version",["version","currentVersion"])],Q.prototype,"readVersion",null),(0,s.e)([(0,n.y)({readOnly:!0})],Q.prototype,"compatibleTileInfo256",null),(0,s.e)([(0,n.y)({readOnly:!0})],Q.prototype,"compatibleTileInfo512",null),Q=(0,s.e)([(0,n.n)("esri.layers.VectorTileLayer")],Q);const V=Q}}]);