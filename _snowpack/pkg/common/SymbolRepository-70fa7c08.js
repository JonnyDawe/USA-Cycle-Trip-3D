import { L } from './Loadable-d16b3d7d.js';
import { c as s$3, r as r$6, t as t$4 } from './Message-70b34921.js';
import { e as e$2 } from './ItemCache-2457b327.js';
import { g, A } from './promiseUtils-2ff2b194.js';
import { p as p$2 } from './workers-bd1ea274.js';
import './FramebufferObject-238df962.js';
import { r as r$4 } from './Texture-454f8135.js';
import { t as t$2 } from './Rect-b93f4c2a.js';
import { n as n$2 } from './pbf-9fd5cf83.js';
import { b as p$1 } from './CIMSymbolHelper-6b8d9205.js';
import { r as r$5 } from './TileIndex-d9b4f06c.js';
import { e as e$3 } from './TileKey-86c6b8c5.js';
import { a1 as n$3 } from './DefaultUI-99d89841.js';
import { t as t$3, e as e$4 } from './config-b1f55e66.js';
import { o as o$2, l as l$2 } from './VectorTile-a034e4bb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e$1{constructor(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new t$2(0,0,e,t));}get width(){return this._width}get height(){return this._height}allocate(e,t){if(e>this._width||t>this._height)return new t$2;let i=null,s=-1;for(let h=0;h<this._free.length;++h){const w=this._free[h];e<=w.width&&t<=w.height&&(null===i||w.y<=i.y&&w.x<=i.x)&&(i=w,s=h);}return null===i?new t$2:(this._free.splice(s,1),i.width<i.height?(i.width>e&&this._free.push(new t$2(i.x+e,i.y,i.width-e,t)),i.height>t&&this._free.push(new t$2(i.x,i.y+t,i.width,i.height-t))):(i.width>e&&this._free.push(new t$2(i.x+e,i.y,i.width-e,i.height)),i.height>t&&this._free.push(new t$2(i.x,i.y+t,e,i.height-t))),new t$2(i.x,i.y,e,t))}release(h){for(let e=0;e<this._free.length;++e){const t=this._free[e];if(t.y===h.y&&t.height===h.height&&t.x+t.width===h.x)t.width+=h.width;else if(t.x===h.x&&t.width===h.width&&t.y+t.height===h.y)t.height+=h.height;else if(h.y===t.y&&h.height===t.height&&h.x+h.width===t.x)t.x=h.x,t.width+=h.width;else {if(h.x!==t.x||h.width!==t.width||h.y+h.height!==t.y)continue;t.y=h.y,t.height+=h.height;}this._free.splice(e,1),this.release(h);}this._free.push(h);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s$2{constructor(t,i,s){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=t,this.height=i,this._glyphSource=s,this._binPack=new e$1(t-4,i-4),this._glyphData.push(new Uint8Array(t*i)),this._dirties.push(!0),this._textures.push(void 0);}getGlyphItems(t,s){const h=[],r=this._glyphSource,n=new Set,o=1/256;for(const e of s){const t=Math.floor(e*o);n.add(t);}const a=[];return n.forEach((e=>{if(e<=256){const i=t+e;if(this._rangePromises.has(i))a.push(this._rangePromises.get(i));else {const s=r.getRange(t,e).then((()=>{this._rangePromises.delete(i);}),(()=>{this._rangePromises.delete(i);}));this._rangePromises.set(i,s),a.push(s);}}})),Promise.all(a).then((()=>{let n=this._glyphIndex[t];n||(n={},this._glyphIndex[t]=n);for(const o of s){const s=n[o];if(s){h[o]={sdf:!0,rect:s.rect,metrics:s.metrics,page:s.page,code:o};continue}const a=r.getGlyph(t,o);if(!a||!a.metrics)continue;const l=a.metrics;let c;if(0===l.width)c=new t$2(0,0,0,0);else {const t=3,i=l.width+2*t,s=l.height+2*t;let h=i%4?4-i%4:4,r=s%4?4-s%4:4;1===h&&(h=5),1===r&&(r=5),c=this._binPack.allocate(i+h,s+r),c.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new e$1(this.width-4,this.height-4),c=this._binPack.allocate(i+h,s+r));const n=this._glyphData[this._currentPage],o=a.bitmap;let g,p;if(o)for(let e=0;e<s;e++){g=i*e,p=this.width*(c.y+e+1)+c.x;for(let t=0;t<i;t++)n[p+t+1]=o[g+t];}}n[o]={rect:c,metrics:l,tileIDs:null,page:this._currentPage},h[o]={sdf:!0,rect:c,metrics:l,page:this._currentPage,code:o},this._dirties[this._currentPage]=!0;}return h}))}removeGlyphs(t){for(const e in this._glyphIndex){const i=this._glyphIndex[e];if(!i)continue;let s;for(const e in i)if(s=i[e],s.tileIDs.delete(t),0===s.tileIDs.size){const t=this._glyphData[s.page],h=s.rect;let r,n;for(let e=0;e<h.height;e++)for(r=this.width*(h.y+e)+h.x,n=0;n<h.width;n++)t[r+n]=0;delete i[e],this._dirties[s.page]=!0;}}}bind(e,i,s,h=0){this._textures[s]||(this._textures[s]=new r$4(e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));const r=this._textures[s];r.setSamplingMode(i),this._dirties[s]&&r.setData(this._glyphData[s]),e.bindTexture(r,h),this._dirties[s]=!1;}dispose(){this._binPack=null;for(const t of this._textures)t&&t.dispose();this._textures.length=0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s$1{constructor(t){if(this._metrics=[],this._bitmaps=[],t)for(;t.next();)switch(t.tag()){case 1:{const e=t.getMessage();for(;e.next();)switch(e.tag()){case 3:{const t=e.getMessage();let s,a,r,n,i,c,g;for(;t.next();)switch(t.tag()){case 1:s=t.getUInt32();break;case 2:a=t.getBytes();break;case 3:r=t.getUInt32();break;case 4:n=t.getUInt32();break;case 5:i=t.getSInt32();break;case 6:c=t.getSInt32();break;case 7:g=t.getUInt32();break;default:t.skip();}t.release(),s&&(this._metrics[s]={width:r,height:n,left:i,top:c,advance:g},this._bitmaps[s]=a);break}default:e.skip();}e.release();break}default:t.skip();}}getMetrics(t){return this._metrics[t]}getBitmap(t){return this._bitmaps[t]}}class a{constructor(){this._ranges=[];}getRange(t){return this._ranges[t]}addRange(t,e){this._ranges[t]=e;}}class r$3{constructor(t){this._glyphInfo={},this._baseURL=t;}getRange(a,r){const n=this._getFontStack(a);if(n.getRange(r))return Promise.resolve();const i=256*r,c=i+255,g=this._baseURL.replace("{fontstack}",a).replace("{range}",i+"-"+c);return L(g,{responseType:"array-buffer"}).then((t=>{n.addRange(r,new s$1(new n$2(new Uint8Array(t.data),new DataView(t.data))));})).catch((()=>{n.addRange(r,new s$1);}))}getGlyph(t,e){const s=this._getFontStack(t);if(!s)return;const a=Math.floor(e/256);if(a>256)return;const r=s.getRange(a);return r?{metrics:r.getMetrics(e),bitmap:r.getBitmap(e)}:void 0}_getFontStack(t){let e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new a),e}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const h="dasharray-";class r$2{constructor(t,i,s=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(t<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=t,this._pageHeight=i,s>0&&(this._maxItemSize=s),this._binPack=new e$1(t-4,i-4);}dispose(){this._binPack=null,this._mosaicRects={};for(const t of this._textures)t&&t.dispose();this._textures.length=0;}getWidth(t){return t>=this._size.length?-1:this._size[t][0]}getHeight(t){return t>=this._size.length?-1:this._size[t][1]}getPageSize(t){return t>=this._size.length?null:this._size[t]}setSpriteSource(t){if(this.dispose(),this.pixelRatio=t.devicePixelRatio,0===this._mosaicsData.length){this._binPack=new e$1(this._pageWidth-4,this._pageHeight-4);const t=Math.floor(this._pageWidth),i=Math.floor(this._pageHeight),s=new Uint32Array(t*i);this._mosaicsData[0]=s,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0);}this._sprites=t;}getSpriteItem(t,i=!1){let e,s,r=this._mosaicRects[t];if(r)return r;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;if(t&&t.startsWith(h)?([e,s]=this._rasterizeDash(t),i=!0):e=this._sprites.getSpriteInfo(t),!e||!e.width||!e.height||e.width<0||e.height<0)return null;const a=e.width,o=e.height,[n,_,g]=this._allocateImage(a,o);return n.width<=0?null:(this._copy(n,e,_,g,i,s),r={rect:n,width:a,height:o,sdf:e.sdf,simplePattern:!1,pixelRatio:e.pixelRatio,page:_},this._mosaicRects[t]=r,r)}getSpriteItems(t){const i={};for(const e of t)i[e.name]=this.getSpriteItem(e.name,e.repeat);return i}getMosaicItemPosition(t,i){const e=this.getSpriteItem(t,i),s=e&&e.rect;if(!s)return null;s.width=e.width,s.height=e.height;const h=e.width,r=e.height,a=2;return {tl:[s.x+a,s.y+a],br:[s.x+a+h,s.y+a+r],page:e.page}}bind(t,e,s=0,h=0){this._textures[s]||(this._textures[s]=new r$4(t,{pixelFormat:6408,dataType:5121,wrapMode:33071,width:this._size[s][0],height:this._size[s][1]},new Uint8Array(this._mosaicsData[s].buffer)));const r=this._textures[s];r.setSamplingMode(e),this._dirties[s]&&r.setData(new Uint8Array(this._mosaicsData[s].buffer)),t.bindTexture(r,h),this._dirties[s]=!1;}static _copyBits(t,i,e,s,h,r,a,o,n,_,g){let p=s*i+e,c=o*r+a;if(g){c-=r;for(let a=-1;a<=_;a++,p=((a+_)%_+s)*i+e,c+=r)for(let i=-1;i<=n;i++)h[c+i]=t[p+(i+n)%n];}else for(let l=0;l<_;l++){for(let i=0;i<n;i++)h[c+i]=t[p+i];p+=i,c+=r;}}_copy(t,i,e,s,h,a){if(!this._sprites||"loaded"!==this._sprites.loadStatus||e>=this._mosaicsData.length)return;const o=new Uint32Array(a?a.buffer:this._sprites.image.buffer),n=this._mosaicsData[e];n&&o||console.error("Source or target images are uninitialized!");const _=2,g=a?i.width:this._sprites.width;r$2._copyBits(o,g,i.x,i.y,n,s[0],t.x+_,t.y+_,i.width,i.height,h),this._dirties[e]=!0;}_allocateImage(t,i){t+=2,i+=2;const h=Math.max(t,i);if(this._maxItemSize&&this._maxItemSize<h){const e=new t$2(0,0,t,i);return this._mosaicsData.push(new Uint32Array(t*i)),this._dirties.push(!0),this._size.push([t,i]),this._textures.push(void 0),[e,this._mosaicsData.length-1,[t,i]]}let r=t%4?4-t%4:4,a=i%4?4-i%4:4;1===r&&(r=5),1===a&&(a=5);const o=this._binPack.allocate(t+r,i+a);return o.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new e$1(this._pageWidth-4,this._pageHeight-4),this._allocateImage(t,i)):[o,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(i){const e=/\[(.*?)\]/,s=i.match(e);if(!s)return null;const h=s[1].split(",").map(Number),r=i.slice(i.lastIndexOf("-")+1),[a,o,n]=p$1.rasterizeDash(h,r);return [{x:0,y:0,width:o,height:n,sdf:!0,pixelRatio:1},new Uint8Array(a.buffer)]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$1(t,e,n,o,l,i){t.fillStyle=e,t.fillRect(n,o,l,i);}function e(t,e,n,o,l,i){t.strokeStyle=e,t.strokeRect(n,o,l,i);}function n$1(t,e){t.strokeStyle="black";const n=e.cellSize,o=e.rows,l=e.columns;for(let i=0;i<o;i++){const o=e.cells[i],r=i*n,s=(i+1)*n;for(let e=0;e<l;e++){const l=o[e],i=e*n,d=(e+1)*n;t.strokeRect(i,r,d-i,s-r),t.fillText(`cells:${l.length}`,i+4,r+12);}}}function o$1(n,o){const l=window.COLLISION_XRAY;for(let i=0;i<o.length;++i){const r=!o[i].unique.show;if(l||!r)for(const s of o[i].colliders){if(!s.enabled)continue;const d=!o[i].unique.parts[s.partIndex].show;if(!l&&d)continue;const a=s.xScreen,c=s.yScreen,m=s.dxScreen,h=s.dyScreen;n.globalAlpha=r||d?.2:1,t$1(n,"green",a-1,c-1,3,3),e(n,"red",a+m,c+h,s.width,s.height),t$1(n,"blue",a+m-1,c+h-1,3,3),n.globalAlpha=1;}}}function l$1(t,e,n){if(!window.PERFORMANCE_RECORDING_STORAGE)return;const o=window.PERFORMANCE_RECORDING_STORAGE;o.perf=o.perf||{};const l=o.perf;l[t]=l[t]||{start:null,time:0,min:void 0,max:void 0,samples:[],unit:n},l[t].time+=e,l[t].samples.push(e),(null==l[t].min||e<l[t].min)&&(l[t].min=e),(null==l[t].max||e>l[t].max)&&(l[t].max=e);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p=new e$2(10),y=new Map;class f{constructor(e,t,s){this._vectorTileLayer=e,this._styleRepository=t,this.devicePixelRatio=s,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null;}destroy(){this._connection&&(this._connection.close(),this._connection=null),this._styleRepository=null,this._vectorTileLayer=null,this._spriteMosaic&&(this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic=null);}get spriteMosaic(){return this._spriteSourcePromise.then((()=>this._spriteMosaic))}get glyphMosaic(){return this._glyphMosaic}async start(e){const s=this._vectorTileLayer,r=s.sourceNameToSource,i=[];for(const t in r)i.push(this._fetchTileMap(r[t],e));this._spriteSourcePromise=this._vectorTileLayer.loadSpriteSource(this.devicePixelRatio,e),this._spriteSourcePromise.then((e=>{this._spriteMosaic=new r$2(1024,1024,250),this._spriteMosaic.setSpriteSource(e);}));const c=this._styleRepository,h=new r$3(c.glyphs);return this._glyphMosaic=new s$2(1024,1024,h),this._broadcastPromise=p$2("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then((r=>(this._connection=r,Promise.all(this._connection.broadcast("setStyle",{style:s.currentStyleInfo.style,vectorTileLayerMaxBuffers:s$3("vectortilelayer-max-buffers")},e))))),Promise.all(i)}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=new Promise(((t,s)=>{Promise.all(this._connection.broadcast("updateStyle",e)).then(t,s);})),this._broadcastPromise}async setStyle(e,s){await this._broadcastPromise,this._styleRepository=e;const r=this._vectorTileLayer.sourceNameToSource,i=[];for(const t in r)i.push(this._fetchTileMap(r[t],null));this._spriteSourcePromise=this._vectorTileLayer.loadSpriteSource(this.devicePixelRatio,null),this._spriteSourcePromise.then((e=>{this._spriteMosaic=new r$2(1024,1024,250),this._spriteMosaic.setSpriteSource(e);}));const o=new r$3(e.glyphs);return this._glyphMosaic=new s$2(1024,1024,o),this._broadcastPromise=new Promise(((e,r)=>{Promise.all(this._connection.broadcast("setStyle",{style:s,vectorTileLayerMaxBuffers:s$3("vectortilelayer-max-buffers")})).then(e,r);})),i.push(this._broadcastPromise),Promise.all(i)}fetchTileData(e,t){return this._getRefKeys(e,t).then((e=>{const s=this._vectorTileLayer.sourceNameToSource,r=[];for(const t in s)r.push(t);return this._getSourcesData(r,e,t)}))}parseTileData(e,t){const s=e&&e.data;if(!s)return Promise.resolve(null);const{sourceName2DataAndRefKey:r,transferList:i}=s;return 0===Object.keys(r).length?Promise.resolve(null):this._broadcastPromise.then((()=>this._connection.getAvailableClient().then((s=>s.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:r,styleLayerUIDs:e.styleLayerUIDs},{...t,transferList:i}).then((e=>({tileData:e})))))))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}perfReport({key:e,milliseconds:t}){l$1(e,t,"ms");}async _getTilePayload(e,t,s){const i=e$3.pool.acquire(e.id),o=this._vectorTileLayer.sourceNameToSource[t].getSourceTileUrl(i.level,i.row,i.col);e$3.pool.release(i);try{return {protobuff:await this.request(o,s),sourceName:t}}catch(a){if(g(a))throw a;return {protobuff:null,sourceName:t}}}request(t,s){return L(t,{responseType:"array-buffer",...s}).then((({data:e})=>e))}async _fetchTileMap(t,s){if(t.capabilities.operations.supportsTileMap&&t.tileIndex)return Promise.resolve();if(!t.tileMapURL)return;const i=p.get(t.tileMapURL);if(i)return void(t.tileIndex=i);let o;if(y.has(t.tileMapURL)){try{o=await y.get(t.tileMapURL),t.tileIndex=new r$5(o.data);}catch(l){if(g(l))throw l}return}const a=L(t.tileMapURL,s);y.set(t.tileMapURL,a);try{o=await a,y.delete(t.tileMapURL),p.put(t.tileMapURL,t.tileIndex),t.tileIndex=new r$5(o.data);}catch(l){if(y.delete(t.tileMapURL),g(l))throw l}}_getRefKeys(e,t){const s=this._vectorTileLayer.sourceNameToSource,r=new Array;for(const i in s){const o=s[i].getRefKey(e,t);r.push(o);}return A(r)}_getSourcesData(e,t,s){const r=[];for(let i=0;i<t.length;i++)if(null==t[i].value||null==e[i])r.push(null);else {const o=this._getTilePayload(t[i].value,e[i],s);r.push(o);}return A(r).then((e=>{const s={},r=[];for(let i=0;i<e.length;i++)if(e[i].value&&e[i].value&&e[i].value.protobuff&&e[i].value.protobuff.byteLength>0){const o=t[i].value.id;s[e[i].value.sourceName]={refKey:o,protobuff:e[i].value.protobuff},r.push(e[i].value.protobuff);}return {sourceName2DataAndRefKey:s,transferList:r}}))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o(e,t,n,o,r,s){const{iconRotationAlignment:i,textRotationAlignment:l,iconTranslate:a,iconTranslateAnchor:c,textTranslate:h,textTranslateAnchor:u}=o;let d=0;for(const y of e.colliders){const[e,o]=0===y.partIndex?a:h,x=0===y.partIndex?c:u,g=y.minLod<=s&&s<=y.maxLod;d+=g?0:1,y.enabled=g,y.xScreen=y.xTile*r[0]+y.yTile*r[3]+r[6],y.yScreen=y.xTile*r[1]+y.yTile*r[4]+r[7],0===x?(y.xScreen+=n*e-t*o,y.yScreen+=t*e+n*o):(y.xScreen+=e,y.yScreen+=o),1===(0===y.partIndex?i:l)?(y.dxScreen=y.dxPixels,y.dyScreen=y.dyPixels):(y.dxScreen=n*(y.dxPixels+y.width/2)-t*(y.dyPixels+y.height/2)-y.width/2,y.dyScreen=t*(y.dxPixels+y.width/2)+n*(y.dyPixels+y.height/2)-y.height/2);}e.colliders.length>0&&d===e.colliders.length&&(e.unique.show=!1);}class r$1{constructor(o,r,s,i,l,a){this._symbols=o,this._styleRepository=i,this._zoom=l,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new o$2(r,s,t$3),this._si=Math.sin(Math.PI*a/180),this._co=Math.cos(Math.PI*a/180);for(const t of o)for(const n of t.symbols)this._allNeededMatrices.has(n.tile)||this._allNeededMatrices.set(n.tile,n$3(n.tile.transforms.tileUnitsToPixels));}work(e){const t=this._gridIndex;function n(e){const n=e.xScreen+e.dxScreen,o=e.yScreen+e.dyScreen,r=n+e.width,s=o+e.height,[i,l,a,c]=t.getCellSpan(n,o,r,s);for(let h=l;h<=c;h++)for(let e=i;e<=a;e++){const i=t.cells[h][e];for(const e of i){const t=e.xScreen+e.dxScreen,i=e.yScreen+e.dyScreen,l=t+e.width,a=i+e.height;if(!(r<t||n>l||s<i||o>a))return !0}}return !1}const r=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const t=this._symbols[this._currentLayerCursor],s=this._getProperties(t.styleLayerUID);for(;this._currentSymbolCursor<t.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-r>e)return !1;const i=t.symbols[this._currentSymbolCursor];if(!i.unique.show)continue;o(i,this._si,this._co,s,this._allNeededMatrices.get(i.tile),this._zoom);const l=i.unique;if(!l.show)continue;const{iconAllowOverlap:a,iconIgnorePlacement:c,textAllowOverlap:h,textIgnorePlacement:u}=s;for(const e of i.colliders){if(!e.enabled)continue;const t=l.parts[e.partIndex];if(!t.show)continue;!(e.partIndex?h:a)&&n(e)&&(e.hard?l.show=!1:t.show=!1);}if(l.show)for(const e of i.colliders){if(!e.enabled)continue;if(e.partIndex?u:c)continue;if(!l.parts[e.partIndex].show)continue;const t=e.xScreen+e.dxScreen,n=e.yScreen+e.dyScreen,o=t+e.width,r=n+e.height,[s,i,a,h]=this._gridIndex.getCellSpan(t,n,o,r);for(let l=i;l<=h;l++)for(let t=s;t<=a;t++){this._gridIndex.cells[l][t].push(e);}}}}return !0}_getProperties(e){const t=this._styleProps.get(e);if(t)return t;const n=this._zoom,o=this._styleRepository.getStyleLayerByUID(e),r=0!==o.getLayoutValue("symbol-placement",n);let s=o.getLayoutValue("icon-rotation-alignment",n);2===s&&(s=r?0:1);let i=o.getLayoutValue("text-rotation-alignment",n);2===i&&(i=r?0:1);const l=o.getPaintValue("icon-translate",n),a=o.getPaintValue("icon-translate-anchor",n),c=o.getPaintValue("text-translate",n),h=o.getPaintValue("text-translate-anchor",n),u={iconAllowOverlap:o.getLayoutValue("icon-allow-overlap",n),iconIgnorePlacement:o.getLayoutValue("icon-ignore-placement",n),textAllowOverlap:o.getLayoutValue("text-allow-overlap",n),textIgnorePlacement:o.getLayoutValue("text-ignore-placement",n),iconRotationAlignment:s,textRotationAlignment:i,iconTranslateAnchor:a,iconTranslate:l,textTranslateAnchor:h,textTranslate:c};return this._styleProps.set(e,u),u}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(o,e){if(o.priority-e.priority)return o.priority-e.priority;const t=o.tile.key,i=e.tile.key;return t.world-i.world?t.world-i.world:t.level-i.level?t.level-i.level:t.row-i.row?t.row-i.row:t.col-i.col?t.col-i.col:o.xTile-e.xTile?o.xTile-e.xTile:o.yTile-e.yTile}class i$1{constructor(o,e,t,i,s,r){this._visibleTiles=o,this._symbolRepository=e,this._createCollisionJob=t,this._assignTileSymbolsOpacity=i,this._symbolLayerSorter=s,this._isLayerVisible=r,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0;}get running(){return this._running}setScreenSize(o,e){this._screenWidth===o&&this._screenHeight===e||this.restart(),this._screenWidth=o,this._screenHeight=e;}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0;}continue(o){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const e=performance.now();if(!this._selectionJob.work(o))return !1;if(this._selectionJobCompleted=!0,0===(o=Math.max(0,o-(performance.now()-e))))return !1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const e=performance.now();if(!this._collisionJob.work(o))return !1;if(this._collisionJobCompleted=!0,0===(o=Math.max(0,o-(performance.now()-e))))return !1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const e=performance.now();if(!this._opacityJob.work(o))return !1;if(this._opacityJobCompleted=!0,0===(o=Math.max(0,o-(performance.now()-e))))return !1}return this._running=!1,!0}_createSelectionJob(){const o=this._symbolRepository.uniqueSymbols,e=[];let i=0,s=0;const r=this._isLayerVisible;function n(n){let l;const c=performance.now();for(;s<o.length;s++,i=0){const t=o[s],h=t.styleLayerUID;if(!r(h)){e[s]||(e[s]={styleLayerUID:h,symbols:[]});continue}e[s]=e[s]||{styleLayerUID:h,symbols:[]};const a=e[s];for(;i<t.uniqueSymbols.length;i++){if(l=t.uniqueSymbols[i],i%100==99&&performance.now()-c>n)return !1;let o=null,e=!1,s=!1;for(const t of l.tileSymbols)if(t.selectedForRendering=!1,!s||!e){const i=t.tile;(!o||i.isCoverage||i.neededForCoverage&&!e)&&(o=t,(i.neededForCoverage||i.isCoverage)&&(s=!0),i.isCoverage&&(e=!0));}if(o.selectedForRendering=!0,s){a.symbols.push(o),l.show=!0;for(const o of l.parts)o.show=!0;}else l.show=!1;}}for(const o of e)o.symbols.sort(t);return !0}const l=this._symbolLayerSorter;return {work:n,get sortedSymbols(){return e.sort(l)}}}_createOpacityJob(){const e=this._assignTileSymbolsOpacity,t=this._visibleTiles;let i=0;function r(o,t){const i=o.symbols;for(const[e,r]of i)s(r,t);e(o,t);for(const e of o.childrenTiles)r(e,t);}return {work(e){const s=performance.now();for(;i<t.length;i++){if(performance.now()-s>e)return !1;const n=t[i];if(r$6(n.parentTile))continue;r(n,performance.now());}return !0}}}}function s(o,t){for(const i of o){const o=i.unique;for(const i of o.parts){const s=i.targetOpacity>.5?1:-1;i.startOpacity+=s*((t-i.startTime)/e$4),i.startOpacity=Math.min(Math.max(i.startOpacity,0),1),i.startTime=t,i.targetOpacity=o.show&&i.show?1:0;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=32,i=8,n=64;class r{constructor(e,s,o){this.tileCoordRange=e,this._visibleTiles=s,this._createUnique=o,this._tiles=new Map,this._uniqueSymbolsReferences=new Map;}get uniqueSymbols(){return t$4(this._uniqueSymbolLayerArray)&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}add(e,s){this._uniqueSymbolLayerArray=null;let t=this._tiles.get(e.id);t||(t={symbols:new Map},this._tiles.set(e.id,t));const r=new Map;if(s)for(const o of s)t.symbols.has(o)&&(r.set(o,t.symbols.get(o)),t.symbols.delete(o));else for(const[o,l]of e.layerData)t.symbols.has(o)&&(r.set(o,t.symbols.get(o)),t.symbols.delete(o));this._removeSymbols(r);const y=e.symbols,a=new Map;for(const[f,c]of y){let e=c.length;if(e>=l){let s=this.tileCoordRange;do{s/=2,e/=4;}while(e>i&&s>n);const l=new o$2(this.tileCoordRange,this.tileCoordRange,s);a.set(f,{flat:c,index:l}),t.symbols.set(f,{flat:c,index:l});for(const e of c)l.getCell(e.xTile,e.yTile).push(e);}else a.set(f,{flat:c}),t.symbols.set(f,{flat:c});}this._addSymbols(e.key,y);}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(const[s,o]of this._tiles){const t=new Map;for(const s of e)o.symbols.has(s)&&(t.set(s,o.symbols.get(s)),o.symbols.delete(s));this._removeSymbols(t),0===o.symbols.size&&this._tiles.delete(s);}}removeTile(e){this._uniqueSymbolLayerArray=null;const s=this._tiles.get(e.id);if(!s)return;const o=new Map;for(const[t,l]of e.symbols)s.symbols.has(t)&&(o.set(t,s.symbols.get(t)),s.symbols.delete(t));this._removeSymbols(o),0===s.symbols.size&&this._tiles.delete(e.id);}_removeSymbols(e){for(const[s,{flat:o}]of e)for(const e of o){const o=e.unique,t=o.tileSymbols,l=t.length-1;for(let s=0;s<l;s++)if(t[s]===e){t[s]=t[l];break}if(t.length=l,0===l){const e=this._uniqueSymbolsReferences.get(s);e.delete(o),0===e.size&&this._uniqueSymbolsReferences.delete(s);}e.unique=null;}}_addSymbols(s,o){if(0===o.size)return;const t=this._visibleTiles;for(const e of t)e.parentTile||e.key.world!==s.world||e.key.level===s.level&&!e.key.equals(s)||this._matchSymbols(e,s,o);for(const[l,i]of o)for(const s of i)if(t$4(s.unique)){const e=this._createUnique();s.unique=e,e.tileSymbols.push(s);let o=this._uniqueSymbolsReferences.get(l);o||(o=new Set,this._uniqueSymbolsReferences.set(l,o)),o.add(e);}}_matchSymbols(e,o,l){if(e.key.level>o.level){const s=e.key.level-o.level;if(e.key.row>>s!==o.row||e.key.col>>s!==o.col)return}if(o.level>e.key.level){const s=o.level-e.key.level;if(o.row>>s!==e.key.row||o.col>>s!==e.key.col)return}if(o.equals(e.key)){for(const s of e.childrenTiles)this._matchSymbols(s,o,l);return}const i=new Map;for(const[n,r]of l){const l=[];for(const s of r){const i=l$2(this.tileCoordRange,s.xTile,o.level,o.col,e.key.level,e.key.col),n=l$2(this.tileCoordRange,s.yTile,o.level,o.row,e.key.level,e.key.row);i>=0&&i<this.tileCoordRange&&n>=0&&n<this.tileCoordRange&&l.push({symbol:s,xTransformed:i,yTransformed:n});}const y=[],a=e.key.level<o.level?1:1<<e.key.level-o.level,f=this._tiles.get(e.id).symbols.get(n);if(f){const e=f.flat;for(const o of l){let t,l=!1;const i=o.xTransformed,n=o.yTransformed;t=r$6(f.index)?f.index.getCell(i,n):e;const r=o.symbol,c=r.hash;for(const e of t)if(c===e.hash&&Math.abs(i-e.xTile)<=a&&Math.abs(n-e.yTile)<=a){const s=e.unique;r.unique=s,s.tileSymbols.push(r),l=!0;break}l||y.push(r);}}y.length>0&&i.set(n,y);}for(const s of e.childrenTiles)this._matchSymbols(s,o,i);}_createUniqueSymbolLayerArray(){const e=this._uniqueSymbolsReferences,s=new Array(e.size);let o,t=0;for(const[l,i]of e){const e=new Array(i.size);o=0;for(const s of i)e[o++]=s;s[t]={styleLayerUID:l,uniqueSymbols:e},t++;}return s}}

export { r$1 as a, f, i$1 as i, n$1 as n, o$1 as o, r };
