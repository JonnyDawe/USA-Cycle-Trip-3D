import { e, a, o as o$1 } from './JSONSupport-9346590f.js';
import { o } from './jsonMap-e142bd84.js';
import { G } from './unitUtils-b17203be.js';
import { y, N, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { b, g } from './Point-ee7951c3.js';
import { k, s, S as S$1, R, d } from './SpatialReference-843b1520.js';
import { i as i$1 } from './aaBoundingRect-68336c41.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l;let p=l=class extends a{constructor(e){super(e),this.level=0,this.levelValue=null,this.resolution=0,this.scale=0;}clone(){return new l({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})}};e([y({type:N,json:{write:!0}})],p.prototype,"level",void 0),e([y({type:String,json:{write:!0}})],p.prototype,"levelValue",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"resolution",void 0),e([y({type:Number,json:{write:!0}})],p.prototype,"scale",void 0),p=l=e([n("esri.layers.support.LOD")],p);var i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var v;const w=new o({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let x=v=class extends a{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null;}static create(e={}){const{resolutionFactor:t=1,scales:o,size:s$1=256,spatialReference:i=k.WebMercator,numLODs:l=24}=e;if(!s(i)){const e=[];if(o)for(let t=0;t<o.length;t++){const r=o[t];e.push({level:t,scale:r,resolution:r});}else {let t=5e-4;for(let o=l-1;o>=0;o--)e.unshift({level:o,scale:t,resolution:t}),t*=2;}return new v({dpi:96,lods:e,origin:new b(0,0,i),size:[s$1,s$1],spatialReference:i})}const n=S$1(i),a=e.origin?new b({x:e.origin.x,y:e.origin.y,spatialReference:i}):new b(n?{x:n.origin[0],y:n.origin[1],spatialReference:i}:{x:0,y:0,spatialReference:i}),u=96,d=1/(G(i)*39.37*u),g=[];if(o)for(let r=0;r<o.length;r++){const e=o[r],t=e*d;g.push({level:r,scale:e,resolution:t});}else {let e=R(i)?512/s$1*591657527.5917094:256/s$1*591657527.591555;const o=Math.ceil(l/t);g.push({level:0,scale:e,resolution:e*d});for(let r=1;r<o;r++){const o=e/2**t,s=o*d;g.push({level:r,scale:o,resolution:s}),e=o;}}return new v({dpi:u,lods:g,origin:a,size:[s$1,s$1],spatialReference:i})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const o=S$1(e);return e.isWrappable&&Math.abs(o.origin[0]-t.x)<=o.dx}return !1}readOrigin(e,t){return b.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,o=0;const r=[];this._levelToLOD={},e&&(t=-1/0,o=1/0,e.forEach((e=>{r.push(e.scale),t=e.scale>t?e.scale:t,o=e.scale<o?e.scale:o,this._levelToLOD[e.level]=e;}))),this._set("scales",r),this._set("minScale",t),this._set("maxScale",o),this._set("lods",e),this._initializeUpsampleLevels();}readSize(e,t){return [t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[0];}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];{const o=Math.floor(e),r=o+1;return t[o]/(t[o]/t[r])**(e-o)}}scaleToZoom(e){const t=this.scales,o=t.length-1;let r=0;for(;r<o;r++){const o=t[r],s=t[r+1];if(o<=e)return r;if(s===e)return r+1;if(o>e&&s<e)return r+Math.log(o/e)/Math.log(o/s)}return r}snapScale(e,t=.95){const o=this.scaleToZoom(e);return o%Math.floor(o)>=t?this.zoomToScale(Math.ceil(o)):this.zoomToScale(Math.floor(o))}tileAt(e,t,o,r){const s=this.lodAt(e);if(!s)return null;let i,l;if("number"==typeof t)i=t,l=o;else if(d(t.spatialReference,this.spatialReference))i=t.x,l=t.y,r=o;else {const e=g(t,this.spatialReference);if(!e)return null;i=e.x,l=e.y,r=o;}const n=s.resolution*this.size[0],a=s.resolution*this.size[1];return r||(r={id:null,level:0,row:0,col:0,extent:i$1()}),r.level=e,r.row=Math.floor((this.origin.y-l)/a+.001),r.col=Math.floor((i-this.origin.x)/n+.001),this.updateTileInfo(r),r}updateTileInfo(e,t=0){let o=this.lodAt(e.level);if(!o&&1===t){const t=this.lods[this.lods.length-1];t.level<e.level&&(o=t);}if(!o)return;const r=e.level-o.level,s=o.resolution*this.size[0]/2**r,i=o.resolution*this.size[1]/2**r;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=i$1()),e.extent[0]=this.origin.x+e.col*s,e.extent[1]=this.origin.y-(e.row+1)*i,e.extent[2]=e.extent[0]+s,e.extent[3]=e.extent[1]+i;}upsampleTile(e){const t=this._upsampleLevels[e.level];return !(!t||-1===t.parentLevel)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const{resolution:o}=this.lodAt(t.level),r=o*this.size[0],s=o*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*s,e[2]=e[0]+r,e[3]=e[1]+s,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return v.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let o=0;o<e.length;o++){const r=e[o];this._upsampleLevels[r.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/r.resolution:0},t=r;}}};e([y({type:Number,json:{write:!0}})],x.prototype,"compressionQuality",void 0),e([y({type:Number,json:{write:!0}})],x.prototype,"dpi",void 0),e([y({type:String,json:{read:w.read,write:w.write,origins:{"web-scene":{read:!1,write:!1}}}})],x.prototype,"format",void 0),e([y({readOnly:!0})],x.prototype,"isWrappable",null),e([y({type:b,json:{write:!0}})],x.prototype,"origin",void 0),e([e$1("origin")],x.prototype,"readOrigin",null),e([y({type:[i],value:null,json:{write:!0}})],x.prototype,"lods",null),e([y({readOnly:!0})],x.prototype,"minScale",void 0),e([y({readOnly:!0})],x.prototype,"maxScale",void 0),e([y({readOnly:!0})],x.prototype,"scales",void 0),e([y({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],x.prototype,"size",void 0),e([e$1("size",["rows","cols"])],x.prototype,"readSize",null),e([o$1("size",{cols:{type:N},rows:{type:N}})],x.prototype,"writeSize",null),e([y({type:k,json:{write:!0}})],x.prototype,"spatialReference",void 0),x=v=e([n("esri.layers.support.TileInfo")],x);var S=x;

export { S, i };
