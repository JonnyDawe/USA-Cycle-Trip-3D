import { b as b$2, l as l$4 } from './UniqueValueRenderer-260b50e9.js';
import { m as m$3 } from './jsonUtils-cb46c967.js';
import { s as s$4 } from './promiseUtils-2ff2b194.js';
import { f as e$5, n as n$7, y as y$4, c as s$3, t as t$5, r as r$3, q as c$6 } from './Message-70b34921.js';
import { u as u$4, o as o$8 } from './SimpleLineSymbol-9959d1ea.js';
import { i as i$4 } from './jsonUtils-4c6963ee.js';
import { m as m$2, A as A$3, E as E$2, X as X$1 } from './Utils-12055aa8.js';
import { f as f$2, A as A$4 } from './MaterialKey-5b784827.js';
import { o as o$6 } from './visualVariablesUtils-32ef6e0c.js';
import { h as h$3, t as t$4 } from './CIMSymbolHelper-6b8d9205.js';
import { k as k$3 } from './definitions-8237c146.js';
import { t as t$2, b as n$4, h as h$2, a as n$5, o as o$5, i as i$2, c as c$4, n as n$6, d as e$4, e as e$6 } from './vec2f32-556b449a.js';
import { r as r$2, D as D$2, o as o$7, l as l$2, _ as _$1 } from './vec2-513a0296.js';
import { i as i$3 } from './aaBoundingRect-68336c41.js';
import { c as c$5 } from './Polyline-ccd8fb47.js';
import { l as l$3 } from './jsonUtils-f0a19240.js';
import { a as a$3, k as k$2 } from './normalizeUtils-5edbbb73.js';
import { S as S$2 } from './SpatialReference-843b1520.js';
import { t as t$3 } from './Rect-b93f4c2a.js';
import { V as M$3 } from './mathUtils-a477cc74.js';
import { C as C$2 } from './BidiEngine-e1f5d573.js';
import { x as x$4 } from './MD5-e12d5739.js';
import { e as e$7, o as o$9 } from './JSONSupport-9346590f.js';
import { y as y$3, n as n$8 } from './subclass-fe5fcf78.js';
import { n as n$9 } from './sizeVariableUtils-6d1564c8.js';
import { o as o$a } from './jsonMap-e142bd84.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i$1=new C$2;function n$3(r){if(!i$1.hasBidiChar(r))return [r,!1];let n;return n="rtl"===i$1.checkContextual(r)?"IDNNN":"ICNNN",[i$1.bidiTransform(r,n,"VLYSN"),!0]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var e$3,t$1;function r$1(t){switch(t){case"left":return e$3.Left;case"right":return e$3.Right;case"center":case"justify":return e$3.Center}}function n$2(e){switch(e){case"top":return t$1.Top;case"middle":return t$1.Center;case"baseline":return t$1.Baseline;case"bottom":return t$1.Bottom}}function a$2(r){switch(r){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return [e$3.Right,t$1.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return [e$3.Center,t$1.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return [e$3.Left,t$1.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return [e$3.Right,t$1.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":return [e$3.Center,t$1.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return [e$3.Left,t$1.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return [e$3.Right,t$1.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return [e$3.Center,t$1.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return [e$3.Left,t$1.Top];case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return [e$3.Center,t$1.Baseline];default:return console.debug(`Found invalid placement type ${r}`),[e$3.Center,t$1.Center]}}function c$3(t){switch(t){case e$3.Right:return -1;case e$3.Center:return 0;case e$3.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${t}`),0}}function o$4(e){switch(e){case t$1.Top:return 1;case t$1.Center:return 0;case t$1.Bottom:case t$1.Baseline:return -1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function s$2(t){switch(t){case"left":return e$3.Left;case"right":return e$3.Right;case"center":case"justify":return e$3.Center}}!function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right";}(e$3||(e$3={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline";}(t$1||(t$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e$2{constructor(t,e,s,r){this.center=t$2(t,e),this.centerT=n$4(),this.halfWidth=s/2,this.halfHeight=r/2,this.width=s,this.height=r;}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t;}set y(t){this.center[1]=t;}clone(){return new e$2(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(h,i=4){const e=Math.abs(h.centerT[0]-this.centerT[0]),s=Math.abs(h.centerT[1]-this.centerT[1]),r=(h.halfWidth+this.halfWidth+i)/e,n=(h.halfHeight+this.halfHeight+i)/s,a=Math.min(r,n);return M$3(a)}extend(t){const h=Math.min(this.xmin,t.xmin),i=Math.min(this.ymin,t.ymin),e=Math.max(this.xmax,t.xmax)-h,s=Math.max(this.ymax,t.ymax)-i,r=h+e/2,n=i+s/2;this.width=e,this.height=s,this.halfWidth=e/2,this.halfHeight=s/2,this.x=r,this.y=n;}static deserialize(t){const h=t.readF32(),i=t.readF32(),s=t.readInt32(),r=t.readInt32();return new e$2(h,i,s,r)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u$3=26,g=4,_=u$3+g,p$3=u$3-6,x$3=3,w$1=8,y$2=Math.PI/180;class T$2{constructor(t,s,e,i){this._rotationT=n$5(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255,this._bounds=null;const h=e.rect,o=new Float32Array(8);t*=i,s*=i;const r=e.code?h.width*i:e.metrics.width,a=e.code?h.height*i:e.metrics.height;o[0]=t,o[1]=s,o[2]=t+r,o[3]=s,o[4]=t,o[5]=s+a,o[6]=t+r,o[7]=s+a,this._data=o,this._setTextureCoords(h),this._scale=i,this._mosaic=e,this.x=t,this.y=s,this.maxOffset=Math.max(t+r,s+a);}get width(){return this._mosaic.metrics.width*this._scale}get mosaic(){return this._mosaic}set angle(e){this._angle=e,n$6(this._rotationT),c$4(this._rotationT,this._rotationT,-e),this._setOffsets(this._data);}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){if(!this._bounds){const{height:t,width:s}=this._mosaic.metrics,i=s*this._scale,h=Math.abs(t)*this._scale,r=new Float32Array(8);r[0]=this.x,r[1]=this.y,r[2]=this.x+i,r[3]=this.y,r[4]=this.x,r[5]=this.y+h,r[6]=this.x+i,r[7]=this.y+h;const a=o$5(n$5(),this._rotationT,this._T);e$4(r,r,a);let c=1/0,d=1/0,f=0,l=0;for(let e=0;e<4;e++){const t=r[2*e],s=r[2*e+1];c=Math.min(c,t),d=Math.min(d,s),f=Math.max(f,t),l=Math.max(l,s);}const u=f-c,g=l-d,_=c+u/2,p=d+g/2;this._bounds=new e$2(_,p,u,g);}return this._bounds}setTransform(t){this._T=t,this._offsets=null;}_setOffsets(t){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const s=this._offsets,i=new Float32Array(8),h=o$5(n$5(),this._rotationT,this._T);e$4(i,t,h),s.upperLeft=m$2(i[0]*w$1,i[1]*w$1),s.upperRight=m$2(i[2]*w$1,i[3]*w$1),s.lowerLeft=m$2(i[4]*w$1,i[5]*w$1),s.lowerRight=m$2(i[6]*w$1,i[7]*w$1);}_setTextureCoords({x:t,y:s,width:e,height:i}){this._texcoords={upperLeft:m$2(t,s),upperRight:m$2(t+e,s),lowerLeft:m$2(t,s+i),lowerRight:m$2(t+e,s+i)};}}const M$2=(t,s)=>({code:0,page:0,sdf:!0,rect:new t$3(0,0,11,8),textureBinding:s,metrics:{advance:0,height:4,width:t,left:0,top:0}});class B$2{constructor(t,s,e){this._rotation=0,this._decorate(t,s,e),this.glyphs=t,this.bounds=this._createBounds(t),this.isMultiline=s.length>1,this._hasRotation=0!==e.angle,this._T=this._createGlyphTransform(this.bounds,e);for(const i of t)i.setTransform(this._T);}setRotation(t){if(0===t&&0===this._rotation)return;this._rotation=t;const s=this._T,h=h$2(n$5(),t);o$5(s,h,s);for(const e of this.glyphs)e.setTransform(this._T);}_decorate(t,s,e){if(!e.decoration||"none"===e.decoration||!t.length)return;const i=e.scale,h="underline"===e.decoration?_:p$3,n=t[0].textureBinding;for(const o of s){const s=o.startX*i,e=o.startY*i,r=(o.width+o.glyphWidthEnd)*i;t.push(new T$2(s,e+h*i,M$2(r,n),1));}}get boundsT(){const t=this.bounds,s=r$2(n$4(),t.x,t.y);if(D$2(s,s,this._T),this._hasRotation){const e=Math.max(t.width,t.height);return new e$2(s[0],s[1],e,e)}return new e$2(s[0],s[1],t.width,t.height)}_createBounds(t){let s=1/0,e=1/0,i=0,h=0;for(const r of t)s=Math.min(s,r.xTopLeft),e=Math.min(e,r.yTopLeft),i=Math.max(i,r.xTopLeft+r.width),h=Math.max(h,r.yBottomRight);const n=i-s,o=h-e;return new e$2(s+n/2,e+o/2,n,o)}_createGlyphTransform(t,e){const i=y$2*e.angle,o=n$5(),a=n$4();return i$2(o,o,r$2(a,e.xOffset,-e.yOffset)),e.isCIM?c$4(o,o,i):(i$2(o,o,r$2(a,t.x,t.y)),c$4(o,o,i),i$2(o,o,r$2(a,-t.x,-t.y))),o}}class b$1{constructor(t,s,e,i,h,n){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(s,e)),this.end=Math.max(0,Math.max(s,e)),this.end<t.length&&(this.glyphWidthEnd=t[this.end].metrics.width),this.width=i,this.yMin=h,this.yMax=n;}}const R$2=t=>10===t,L$2=t=>32===t;function v$3(t,s,e){const i=new Array,h=1/e.scale,n=e.maxLineWidth*h,o=s?t.length-1:0,r=s?-1:t.length,a=s?-1:1;let c=o,d=0,f=0,l=c,m=l,u=0,g=1/0,_=0;for(;c!==r;){const{code:s,metrics:e}=t[c],h=Math.abs(e.top);if(R$2(s)||L$2(s)||(g=Math.min(g,h),_=Math.max(_,h+e.height)),R$2(s))c!==o&&(i.push(new b$1(t,l,c-a,d,g,_)),g=1/0,_=0),d=0,l=c+a,m=c+a,f=0;else if(L$2(s))m=c+a,f=0,u=e.advance,d+=e.advance;else if(d>n){if(m!==l){const s=m-2*a;d-=u,i.push(new b$1(t,l,s,d-f,g,_)),g=1/0,_=0,l=m,d=f;}else i.push(new b$1(t,l,c-a,d,g,_)),g=1/0,_=0,l=c,m=c,d=0;d+=e.advance,f+=e.advance;}else d+=e.advance,f+=e.advance;c+=a;}const p=new b$1(t,l,c-a,d,g,_);return p.start>=0&&p.end<t.length&&i.push(p),i}function j$1(t,s){let e=0;for(let n=0;n<t.length;n++){const{width:s}=t[n];e=Math.max(s,e);}const i="underline"===s.decoration?g:0,h=t[0].yMin;return {x:0,y:h,height:t[t.length-1].yMax+s.lineHeight*(t.length-1)+i-h,width:e}}function A$2(t,s,e){const i=e.scale,h=new Array,n=v$3(t,s,e),o=j$1(n,e),{vAlign:r,hAlign:a}=e,c=r===t$1.Baseline?1:0,f=c?0:r-1,l=(1-c)*-o.y+f*(o.height/2)+(c?1:0)*-u$3;for(let d=0;d<n.length;d++){const{start:s,end:o,width:r}=n[d];let c=-1*(a+1)*(r/2)-x$3;const f=d*e.lineHeight+l-x$3;n[d].startX=c,n[d].startY=f;for(let e=s;e<=o;e++){const s=t[e];if(R$2(s.code))continue;const n=new T$2(c+s.metrics.left,f-s.metrics.top,s,i);c+=s.metrics.advance,h.push(n);}}return new B$2(h,n,e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$1(e){if(!e)return A$3.NONE;let r=0;for(const i of e)if("size"===i.type){const t=o$6(i);r|=t,"outline"===i.target&&(r|=t<<4);}else "color"===i.type?r|=A$3.COLOR:"opacity"===i.type?r|=A$3.OPACITY:"rotation"===i.type&&(r|=A$3.ROTATION);return r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const k$1=Math.PI/180,I$1=.04,U$1=n$5(),v$2=n$4(),z$1=512,P$1=50;function T$1(t,e){if(!e.isWrappable)return null;const[s,n]=a$3(e);return t[2]>n?[i$3([t[0],t[1],n,t[3]]),i$3([s,t[1],s+t[2]-n,t[3]])]:t[0]<s?[i$3([s,t[1],t[2],t[3]]),i$3([n-(s-t[0]),t[1],n,t[3]])]:null}function A$1(t,e,s,n,o,r,i){if(!n||!s.symbol)return t[0]=t[1]=t[2]=t[3]=0,e[0]=e[1]=e[2]=e[3]=0,t;const a=n;if(!l$3(a)){c$5(t,a);let n=e[0];0===n&&(n=N$1(s),e[0]=n);const r=o*n/2;return t[0]-=r,t[1]-=r,t[2]+=r,t[3]+=r,t}{const n=a.x,c=a.y;"esriTS"===s.symbol.type&&0===e[2]&&0===e[3]&&Q$1(e,s.symbol,s.mosaicItem),V$1(t,n,c,s.symbol,e,o,r,i);}return t}function C$1(t){return "text"===t||"esriTS"===t}function H$1(t){return "simple-marker"===t||"picture-marker"===t||"esriSMS"===t||"esriPMS"===t}function W$1(e){switch(e$5(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}const q$1=n$4(),R$1=n$4(),B$1=n$4(),E$1=n$4(),F$1=n$4(),L$1=n$4(),O$1=n$4();function D$1(t,e,s,n){r$2(B$1,e,s);const o=t.paths;let r,i,h,f,u,p,g,y,b,M=1/0;for(let d=0;d<o.length;d++){const t=o[d];if(!(t.length<2))for(let o=1;o<t.length;o++)r=t[o-1][0],h=t[o-1][1],i=t[o][0],f=t[o][1],u=Math.min(r,i)-n,p=Math.min(h,f)-n,g=Math.max(r,i)+n,y=Math.max(h,f)+n,e<u||e>g||s<p||s>y||(r$2(q$1,r,h),r$2(R$1,i,f),o$7(E$1,R$1,q$1),o$7(F$1,q$1,B$1),l$2(L$1,E$1,_$1(E$1,F$1)/_$1(E$1,E$1)),o$7(O$1,F$1,L$1),b=_$1(O$1,O$1),M>b&&(M=b));}return Math.sqrt(M)<=n}function G$1(t,i,c,m,l,f){let u,p;const g=u$4(c.xoffset),y=u$4(c.yoffset),b=k$1*c.angle,M=k$1*f;switch(c.type){case"esriSMS":u=p=u$4(c.size);break;case"esriPMS":u=u$4(c.width),p=u$4(c.height);}l<I$1&&(m=I$1*m/l);const d=n$6(U$1);i$2(d,d,r$2(v$2,t,i)),c$4(d,d,M-b),e$6(d,d,r$2(v$2,m,-m)),i$2(d,d,r$2(v$2,g,-y));const x=[0,0];D$2(x,r$2(v$2,-.5*u,-.5*p),d);const S=[0,0];D$2(S,r$2(v$2,-.5*u,.5*p),d);const j=[0,0];D$2(j,r$2(v$2,.5*u,-.5*p),d);const w=[0,0];return D$2(w,r$2(v$2,.5*u,.5*p),d),{rings:[[x,j,w,S,x]]}}function J$1(t,i,c,m,l,f){const u=h$3.getEnvelope(c.data);if(!u)return null;l<I$1&&(m=I$1*m/l);const p=u$4(u.width),g=u$4(u.height),y=u$4(u.x),b=u$4(u.y),M=0*k$1,x=k$1*f,S=n$6(U$1);i$2(S,S,r$2(v$2,t,i)),c$4(S,S,x-M),e$6(S,S,r$2(v$2,m,m));const j=[0,0];D$2(j,r$2(v$2,y,b+g),S);const w=[0,0];D$2(w,r$2(v$2,y,b),S);const z=[0,0];D$2(z,r$2(v$2,y+p,b+g),S);const P=[0,0];return D$2(P,r$2(v$2,y+p,b),S),{rings:[[j,z,P,w,j]]}}function K$1(t,i,c,m,l,f){const u=u$4(c.xoffset),p=u$4(c.yoffset),g=k$1*c.angle,y=k$1*f,b=n$6(U$1);i$2(b,b,r$2(v$2,t,i)),c$4(b,b,y),e$6(b,b,r$2(v$2,l,-l));const M=m[0]+m[2]/2,d=m[1]+m[3]/2;i$2(b,b,r$2(v$2,u,-p)),i$2(b,b,r$2(v$2,M,d)),c$4(b,b,g),i$2(b,b,r$2(v$2,-M,-d));const x=[0,0];D$2(x,r$2(v$2,m[0],m[1]),b);const S=[0,0];D$2(S,r$2(v$2,m[0],m[1]+m[3]),b);const j=[0,0];D$2(j,r$2(v$2,m[0]+m[2],m[1]),b);const w=[0,0];return D$2(w,r$2(v$2,m[0]+m[2],m[1]+m[3]),b),{rings:[[x,j,w,S,x]]}}function N$1(t){switch(t.symbol.type){case"esriSFS":case"esriPFS":{const e=t.symbol.outline;return e?e.width:0}case"esriSLS":return u$4(t.symbol.width);case"esriSMS":return u$4(t.symbol.size);case"esriPMS":return u$4(Math.max(t.symbol.width,t.symbol.height));case"esriTS":{const e=[0,0,0,0];Q$1(e,t.symbol,t.mosaicItem);const s=Math.max(Math.abs(e[0]),Math.abs(e[1]));return Math.max(e[2],e[3])+s}case"expanded-cim":{const s=h$3.getEnvelope(t.symbol.data);return s.width!==-1/0&&s.height!==-1/0||(s.width=10,s.height=10,s.x=0,s.y=0),u$4(Math.sqrt(s.width*s.width+s.height*s.height))}case"composite-symbol":{if(!t.symbol.layers.length)return 0;const e=t.symbol.layers.length-1;return N$1({symbol:t.symbol.layers[e],mosaicItem:null})}case"label":default:return 0}}function Q$1(t,s,n){if(!n||0===n.glyphMosaicItems.length)return t;const o=n$3(s.text)[1],r=n.glyphMosaicItems,i=A$2(r,o,{scale:u$4(s.font.size)/24,angle:s.angle,xOffset:s.xoffset,yOffset:s.yoffset,hAlign:r$1(s.horizontalAlignment||"center"),vAlign:n$2(s.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(s.lineWidth||512,512)),lineHeight:30*Math.max(.25,Math.min(s.lineHeight||1,4)),decoration:s.font.decoration||"none",isCIM:!1}).bounds;return t[0]=u$4(i.x-i.halfWidth),t[1]=u$4(i.y-i.halfHeight),t[2]=u$4(i.width),t[3]=u$4(i.height),t}function V$1(t,e,s,n,o,r,i,a){let c;switch(n.type){case"esriSMS":case"esriPMS":c=G$1(e,s,n,r,i,0);break;case"esriTS":c=K$1(e,s,n,o,r,0);break;case"cim":case"CIMSymbolReference":case"expanded-cim":c=J$1(e,s,n,r,i,0);}let m,l,h=0;for(let p=0;p<c.rings[0].length-1;p++)l=c.rings[0][p],m=(e-l[0])*(e-l[0])+(s-l[1])*(s-l[1]),h=Math.max(h,m);h=Math.sqrt(h);let f=k$2(e-h,a),u=k$2(e+h,a);if(f>u){const t=S$2(a);if(t){const[e,s]=t.valid;f=e,u=s;}}return t[0]=f,t[1]=s-h,t[2]=u,t[3]=s+h,t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s$1={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1},o$3=.707;function a$1(t){if(!("visualVariables"in t))return 0;if(!t.hasVisualVariables("size"))return 0;const e=t.getVisualVariablesForType("size");if(!e[0])return 0;const i=e[0];if("stops"===i.transformationType)return i.stops.map((t=>t.size)).reduce(x$2,0);if("clamped-linear"===i.transformationType){let t=-1/0,e=-1/0;return t="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map((t=>t.size)).reduce(x$2,0),e="number"==typeof i.minSize?i.minSize:i.minSize.stops.map((t=>t.size)).reduce(x$2,0),Math.max(t,e)}return "real-world-size"===i.transformationType?30:void 0}function m$1(t){return t.type in s$1}async function u$2(e,i,r){if(!e||r&&"cluster"===r.type)return 0;if("heatmap"===e.type)return Math.round(3*e.blurRadius);if("dot-density"===e.type)return 0;if("dictionary"===e.type)return "esriGeometryPoint"===i||"esriGeometryMultipoint"===i?100:200;const n=e.getSymbols(),s=a$1(e),o=[];for(const t of n)o.push(d$1(t,s));const m=await Promise.all(o);return u$4(m.reduce(x$2,0))}const c$2=[0,0,0,0];function l$1(t,e){return null==t?e:t}function p$2(t,e){return null==t.outline?e:l$1(t.outline.width,e)}const f$1={sdf:!0,code:99,metrics:k$3.metrics,rect:new t$4(0,0,24,24),page:0,textureBinding:2};function h$1(t){const e=t.text&&t.text.length;if(!e)return {glyphMosaicItems:[f$1]};const i=[];for(let r=0;r<e;r++)i.push({...f$1,code:t.text.charCodeAt(r)});return {glyphMosaicItems:i}}async function y$1(t,i){if("simple-marker"===t.type){const e=Math.max(l$1(t.size,12),i);return M$1(t)+e*o$3}if("picture-marker"===t.type){const e=Math.max(l$1(t.height,12),i),r=l$1(t.width,12)*(e/l$1(t.height,12))/2,n=e/2;return M$1(t)+Math.sqrt(r*r+n*n)}if("text"===t.type){const e=h$1(t);Q$1(c$2,t.toJSON(),e);const i=Math.abs(c$2[0]),r=Math.abs(c$2[1]),s=c$2[2],o=c$2[3];return Math.max(i,r)+Math.max(s,o)}if("simple-line"===t.type){const e=t,r=Math.max(l$1(e.width,.75),i)/2;return e.marker?Math.max(6*e.width,2*i):r}if("simple-fill"===t.type||"picture-fill"===t.type)return Math.max(p$2(t,0),i)/2;if("cim"===t.type){const i=h$3.getEnvelope(t.data);return i?Math.sqrt(i.width*i.width+i.height*i.height):0}return "web-style"===t.type?y$1(await t.fetchCIMSymbol(),i):0}async function d$1(t,e){return m$1(t)?Math.min(await y$1(t,e),75):0}function M$1(t){const e=l$1(t.xoffset,0),i=l$1(t.yoffset,0);return Math.sqrt(e*e+i*i)}function x$2(t,e){return Math.max(t,e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o$2=8,t=o$2-2,r=n$7.getLogger("esri.renderers.visualVariables.support.utils"),s=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const l=e.clone(),o=l.visualVariables.map((e=>n$1(e)?i(e):e));return l.visualVariables=o,l};function a(e){return e.map((e=>n$1(e)?i(e.clone()):e))}function n$1(e){return ("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function i(e){return e.stops=b(e.type,e.stops),e}function u$1(e,l,o){return (1-o)*e+o*l}function c$1(e,o){const[r,...s]=o,a=s.pop(),n=s[0].value,i=s[s.length-1].value,c=(i-n)/t,p=[];for(let t=n;t<i;t+=c){let r=0;for(;t>=s[r].value;)r++;const a=s[r],n=o[r-1],i=t-n.value,c=a.value===n.value?1:i/(a.value-n.value);if("color"===e){const e=s[r],l=o[r-1],a=e.color.clone();a.r=u$1(l.color.r,a.r,c),a.g=u$1(l.color.g,a.g,c),a.b=u$1(l.color.b,a.b,c),a.a=u$1(l.color.a,a.a,c),p.push({value:t,color:a,label:e.label});}else if("size"===e){const e=s[r],a=o[r-1],n=o$8(e.size),i=u$1(o$8(a.size),n,c);p.push({value:t,size:i,label:e.label});}else {const e=s[r],l=u$1(o[r-1].opacity,e.opacity,c);p.push({value:t,opacity:l,label:e.label});}}return [r,...p,a]}function p$1(e){const[l,...o]=e,r=o.pop();for(;o.length>t;){let e=0,l=0;for(let t=1;t<o.length;t++){const r=o[t-1],s=o[t],a=Math.abs(s.value-r.value);a>l&&(l=a,e=t);}o.splice(e,1);}return [l,...o,r]}function b(e,l){return l.length<=o$2?l:(r.warn(`Found ${l.length} Visual Variable stops, but MapView only supports ${o$2}. Displayed stops will be simplified.`),l.length>2*o$2?c$1(e,l):p$1(l))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l;let n=l=class extends b$2{writeLevels(e,s,i){for(const t in e){const e=this.levels[t];return void(s.stops=e)}}clone(){return new l({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:n$9(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:n$9(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:y$4(this.levels)})}};e$7([y$3()],n.prototype,"levels",void 0),e$7([o$9("levels")],n.prototype,"writeLevels",null),n=l=e$7([n$8("esri.views.2d.engine.LevelDependentSizeVariable")],n);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o$1=n$7.getLogger("esri.views.2d.layers.support.clusterUtils");s$3.add("esri-cluster-arcade-enabled",!0);const u=s$3("esri-cluster-arcade-enabled"),c=(e,i,t,s)=>{const a=i.clone();if(!m(a))return a;if(t.fields)for(const r of t.fields)x$1(e,r);if("visualVariables"in a){const i=(a.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),n=d(i);i.forEach((i=>{"rotation"===i.type?i.field?i.field=y(e,i.field,"avg_angle"):i.valueExpression&&(i.field=S$1(e,i.valueExpression,"avg_angle"),i.valueExpression=null):i.normalizationField?(i.field=y(e,i.field,"norm",i.normalizationField),i.normalizationField=null):i.field?i.field=y(e,i.field,"avg"):(i.field=S$1(e,i.valueExpression,"avg"),i.valueExpression=null);})),t$5(n)&&!p(i)&&(i.push(f(t,s)),a.dynamicClusterSize=!0),a.visualVariables=i;}switch(a.type){case"simple":break;case"unique-value":a.field?a.field=y(e,a.field,"mode"):a.valueExpression&&(a.field=S$1(e,a.valueExpression,"mode"),a.valueExpression=null);break;case"class-breaks":a.normalizationField?(a.field=y(e,a.field,"norm",a.normalizationField),a.normalizationField=null):a.field?a.field=y(e,a.field,"avg"):(a.field=S$1(e,a.valueExpression,"avg"),a.valueExpression=null);}return a},d=e=>{for(const i of e)if("size"===i.type)return i;return null},p=e=>{for(const i of e)if("cluster_count"===i.field)return !0;return !1},f=(e,i)=>{const t=[new l$4({value:0,size:0}),new l$4({value:1})];if(t$5(i))return new b$2({field:"cluster_count",stops:[...t,new l$4({value:2,size:0})]});const s=Object.keys(i).reduce(((r,s)=>({...r,[s]:[...t,new l$4({value:Math.max(2,i[s].minValue),size:e.clusterMinSize}),new l$4({value:Math.max(3,i[s].maxValue),size:e.clusterMaxSize})]})),{});return new n({field:"cluster_count",levels:s})},m=i=>{const t=t=>o$1.error(new s$4("Unsupported-renderer",t,{renderer:i}));if("unique-value"===i.type){if(i.field2||i.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===i.type){if(i.normalizationField){const e=i.normalizationType;if("field"!==e)return t(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}}else if("simple"!==i.type)return t(`FeatureReductionCluster does not support renderers of type ${i.type}`),!1;if(!u){if("valueExpression"in i&&i.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in i&&i.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return !0};function v$1(e,i,t){switch(e){case"avg":case"avg_angle":return `cluster_avg_${i}`;case"mode":return `cluster_type_${i}`;case"norm":{const e=t,r="field",a=i.toLowerCase()+",norm:"+r+","+e.toLowerCase();return "cluster_avg_"+x$4(a)}}}function x$1(i,t){const{name:r,outStatistic:a}=t,{onStatisticField:n,onStatisticValueExpression:l,statisticType:u}=a;if(l){const e=x$4(l.toLowerCase());i.push({name:r,outStatistic:{onStatisticField:e,onStatisticValueExpression:l,statisticType:u}});}else n?i.push({name:r,outStatistic:{onStatisticField:n,statisticType:u}}):o$1.error(new s$4("mapview-unsupported-field","Unable to handle field",{field:t}));}function S$1(e,i,t){const r=x$4(i),a="mode"===t?`cluster_type_${r}`:`cluster_avg_${r}`;return e.some((e=>e.name===a))||e.push({name:a,outStatistic:{onStatisticField:r,onStatisticValueExpression:i,statisticType:t}}),a}function y(e,i,t,r){if("cluster_count"===i||e.some((e=>e.name===i)))return i;const s=v$1(t,i,r);return e.some((e=>e.name===s))||("norm"===t?e.push({name:s,outStatistic:{onStatisticField:i,onStatisticNormalizationField:r,statisticType:t}}):e.push({name:s,outStatistic:{onStatisticField:i,statisticType:t}})),s}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o=new o$a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const h=n$7.getLogger("esri.views.2d.layers.features.schemaUtils"),x="ValidationError",v={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function w(e){return f$2(e)}function I(e){return e}function E(e){switch(e.type){case"line-marker":var t;return {type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style};default:return i$4(e.toJSON()).toJSON()}}function S(e,t,r){if(!e)return null;let i=0,n=!1,s=0;switch(r$3(t)&&(s=a$1(t),"visualVariables"in t&&(i=e$1(t.visualVariables||[]),n="dot-density"===t.type)),e.type){case"simple-fill":case"picture-fill":return F(e,i,n,r);case"simple-marker":case"picture-marker":return z(e,i,s,r);case"simple-line":return V(e,i,r);case"text":return j(e,i,s,r);case"label":return T(e,i,r);case"cim":return {type:"cim",rendererKey:i,data:e.data,maxVVSize:s};case"web-style":return {...E(e),type:"web-style",hash:e.hash(),rendererKey:i,maxVVSize:s};default:throw new Error(`symbol not supported ${e.type}`)}}function F(e,t,r,i){const n=A$4(E$2.FILL,t,!1,r),l=i?w(n):n,s=e.clone(),a=s.outline;s.outline=null;const o=[],d={materialKey:l,hash:s.hash(),...E(s)};if(o.push(d),a){const e=A$4(E$2.LINE,t,!0,!1),r={materialKey:i?w(e):e,hash:a.hash(),...E(a)};o.push(r);}return {type:"composite-symbol",layers:o,hash:o.reduce(((e,t)=>t.hash+e),"")}}function V(e,t,r){const i=A$4(E$2.LINE,t,!1,!1),n=r?w(i):i,l=e.clone(),s=l.marker;l.marker=null;const a=[];if(a.push({materialKey:n,hash:l.hash(),...E(l)}),s){var o;const e=A$4(E$2.MARKER,t,!1,!1),i=r?w(e):e;s.color=null!=(o=s.color)?o:l.color,a.push({materialKey:i,hash:s.hash(),lineWidth:l.width,...E(s)});}return {type:"composite-symbol",layers:a,hash:a.reduce(((e,t)=>t.hash+e),"")}}function z(e,t,r,i){const n=A$4(E$2.MARKER,t,!1,!1),l=i?w(n):n,s=E(e);return {materialKey:l,hash:e.hash(),...s,angle:e.angle,maxVVSize:r}}function j(e,t,r,i){const n=A$4(E$2.TEXT,t,!1,!1),l=i?w(n):n,s=E(e);return {materialKey:l,hash:e.hash(),...s,angle:e.angle,maxVVSize:r}}function N(e,r){const i=e.labelPlacement,n=v[r];if(!e.symbol)return h.warn("No ILabelClass symbol specified."),!0;if(!n)return h.error(new s$4("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${r} is not supported`)),!0;if(!n.some((e=>e===i))){const t=n[0];i&&h.warn(`Found invalid label placement type ${i} for ${r}. Defaulting to ${t}`),e.labelPlacement=t;}return !1}function R(e,t){const r=y$4(e);return r.some((e=>N(e,t)))?[]:r}function T(e,t,r){const i=e.toJSON(),n=A$4(E$2.LABEL,t,!1,!1,i.labelPlacement);return {materialKey:r?w(n):n,hash:e.hash(),...i,labelPlacement:i.labelPlacement}}function M(e){return s$3("esri-2d-update-debug")&&console.debug("Created new schema",k(e,!0)),k(e)}function k(e,t=!1){try{var r,i;const n=U(e,t),l={};n.map((t=>K(l,e,t)));return {source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(r=e.historicMoment)?void 0:r.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(i=e.timeExtent)?void 0:i.toJSON()},attributes:{fields:{},indexCount:0},processors:n,targets:l}}catch(n){if(n.fieldName===x)return h.error(n),null;throw n}}function K(e,r,i){switch(i.target){case"feature":return void L(e,J(r),i);case"aggregate":{if(!("featureReduction"in r))return;const n=r.featureReduction;if("selection"===n.type)throw new s$4(x,"Mapview does not support `selection` reduction type",n);return L(e,J(r),i),void B(e,n,i)}}}function O(e,t){for(const r in t){const i=t[r];if(i.target!==e.name)continue;const n=e.attributes[r];n?(n.context.mesh=n.context.mesh||i.context.mesh,n.context.storage=n.context.storage||i.context.storage):e.attributes[r]=i;}return e}function J(e){var t,r,i,n,l;return [null!=(t=null==(r=e.filter)?void 0:r.toJSON())?t:null,null!=(i=null==(n=e.effect)||null==(l=n.filter)?void 0:l.toJSON())?i:null]}function L(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),O(e.feature,r.attributes.fields),e}function B(e,t,r){return e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:u$4(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(u$4(t.clusterMaxSize)/64),fields:r.aggregateFields}}),O(e.aggregate,r.attributes.fields),e}function D(e,t){return t.field?P(e,{...t,type:"field",field:t.field}):t.valueExpression?P(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function P(e,t){switch(t.type){case"expression":{const r=I(t.valueExpression);if(!e.fields[r]){const i=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:i};}return {fieldIndex:e.fields[r].fieldIndex}}case"label-expression":{const r=I(JSON.stringify(t.label));if(!e.fields[r]){const i=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:i};}return {fieldIndex:e.fields[r].fieldIndex}}case"field":{const r=t.field;return "aggregate"===t.target&&e.fields[r]||(e.fields[r]={...t,name:r}),{field:r}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function U(e,t=!1){const r=new Array;let i=0;return r.push($(e,i++,t)),r}function C(e,t,r,i,n,l=!1){const s=P(t,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:r.labelExpression,labelExpressionInfo:r.labelExpressionInfo?{expression:r.labelExpressionInfo.expression}:null,symbol:!!r.symbol,where:r.where}}),{fieldIndex:a}=s;return {...S(r,e,l),fieldIndex:a,target:i,index:n}}function $(r,i,n=!1){const s={indexCount:0,fields:{}},a="featureReduction"in r&&r.featureReduction,o=a?"aggregate":"feature";if("sublayers"in r){const e={type:"subtype",subtypeField:r.subtypeField,renderers:{}},i={type:"subtype",mapping:{},target:"feature"},a={type:"subtype",classes:{}},u={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:i,mesh:{matcher:e,aggregateMatcher:null,labels:a}},d=new Set;let f=0;for(const{renderer:c,subtypeCode:p,labelingInfo:m,labelsVisible:y}of r.sublayers){const r=W(s,o,c,n),u=A(s,o,c),g=y&&m;if("visualVariables"in c&&c.visualVariables&&c.visualVariables.length)throw new s$4(x,"Visual variables are currently not supported for subtype layers");if("dictionary"===r.type)throw new s$4(x,"Dictionary renderer is not supported in subtype layers");if("subtype"===r.type)throw new s$4(x,"Nested subtype renderers is not supported");if(r$3(u)&&"subtype"===u.type)throw new s$4(x,"Nested subtype storage is not supported");if(r$3(u)&&"dot-density"===u.type)throw new s$4(x,"Dot density attributes are not supported in subtype layers");if(d.has(p))throw new s$4(x,"Subtype codes for sublayers must be unique");d.add(p),e.renderers[p]=r,i.mapping[p]=u,g&&(a.classes[p]=g.map((e=>C(c,s,e,"feature",f++,n))));}return u}switch(r.renderer.type){case"heatmap":{const{blurRadius:e,fieldOffset:t,field:i}=r.renderer;return {type:"heatmap",aggregateFields:[],attributes:s,target:o,storage:null,mesh:{blurRadius:e,fieldOffset:t,field:D(s,{target:o,field:i,resultType:"numeric"}).field}}}default:{const i=[],l="aggregate"===o?c(i,r.renderer,a,null):r.renderer;q(s,i);const u=W(s,o,l,n);let d=null;const f=A(s,o,l),c$1=e(r.geometryType);let p=r.labelsVisible&&r.labelingInfo||[],m=[];if(a){if("selection"===a.type)throw new s$4(x,"Mapview does not support `selection` reduction type",a);if(a.symbol){const t=new m$3({symbol:a.symbol,visualVariables:"visualVariables"in l?l.visualVariables:null});d=W(s,o,t,n);}m=a&&a.labelsVisible&&a.labelingInfo||[];}p=R(p,c$1),m=R(m,c$1);let y=0;const h=[...p.map((e=>C(l,s,e,"feature",y++,n))),...m.map((e=>C(l,s,e,"aggregate",y++,n)))];return {type:"symbol",target:o,attributes:s,aggregateFields:i,storage:f,mesh:{matcher:u,labels:{type:"simple",classes:h},aggregateMatcher:d}}}}}function q(e,t){const r={mesh:!0,storage:!0};for(const i of t){const{name:t,outStatistic:n}=i,{statisticType:l,onStatisticField:s}=n;let a=null,o=null,u=null;const d="numeric",f="feature";if("onStatisticValueExpression"in n){o=P(e,{type:"expression",target:f,valueExpression:n.onStatisticValueExpression,resultType:d}).fieldIndex;}else if("onStatisticNormalizationField"in n){a=P(e,{type:"field",target:f,field:s,resultType:d}).field,u=n.onStatisticNormalizationField;}else {a=P(e,{type:"field",target:f,field:s,resultType:d}).field;}P(e,{type:"statistic",target:"aggregate",name:t,context:r,inField:a,inNormalizationField:u,inFieldIndex:o,statisticType:l});}}function A(e,t,r){switch(r.type){case"dot-density":return G(e,t,r.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return H(e,t,r.visualVariables);case"heatmap":return null}}function G(e,t,r){if(!r||!r.length)return {type:"dot-density",mapping:[],target:t};return {type:"dot-density",mapping:r.map(((r,i)=>{const{field:n,fieldIndex:l}=D(e,{valueExpression:r.valueExpression,field:r.field,resultType:"numeric",target:t});return {binding:i,field:n,fieldIndex:l}})),target:t}}function H(e,t,r){if(!r||!r.length)return {type:"visual-variable",mapping:[],target:t};const i={storage:!0},n="numeric";return {type:"visual-variable",mapping:a(r).map((r=>{var l;const s=X$1(r.type),{field:a,fieldIndex:o}=D(e,{target:t,valueExpression:r.valueExpression,field:r.field,context:i,resultType:n});switch(r.type){case"size":return "$view.scale"===r.valueExpression?null:{type:"size",binding:s,field:a,fieldIndex:o,normalizationField:D(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field,valueRepresentation:null!=(l=r.valueRepresentation)?l:null};case"color":return {type:"color",binding:s,field:a,fieldIndex:o,normalizationField:D(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field};case"opacity":return {type:"opacity",binding:s,field:a,fieldIndex:o,normalizationField:D(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field};case"rotation":return {type:"rotation",binding:s,field:a,fieldIndex:o}}})).filter((e=>e)),target:t}}function W(e,t,r,i=!1){const n=c$6(e,{indexCount:0,fields:{}});switch(r.type){case"simple":case"dot-density":return X(n,r,"dot-density"===r.type,i);case"class-breaks":return Q(n,t,r,i);case"unique-value":return Y(n,t,r,i);case"dictionary":return Z(n,r,i)}}function X(e,t,r,i=!1){const n=t.getSymbols();return {type:"simple",symbol:S(n.length?n[0]:null,t,i),isDotDensity:r}}function Q(e,t,r,i=!1){const n={mesh:!0,use:"renderer.field"},l=r.backgroundFillSymbol,{field:s,fieldIndex:a}=D(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:n}),o=r.normalizationType,u="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,d=r.classBreakInfos.map((e=>({symbol:S(e.symbol,r,i),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return {type:"interval",attributes:e.fields,field:s,fieldIndex:a,backgroundFillSymbol:S(l,r,i),defaultSymbol:S(r.defaultSymbol,r,i),intervals:d,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:u,isMaxInclusive:r.isMaxInclusive}}function Y(e,r,i,n=!1){const l=[],s=i.backgroundFillSymbol,a={target:r,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new s$4(x,"Expected renderer.field to be a string",i);const{field:o,fieldIndex:u}=D(e,{...a,field:i.field,valueExpression:i.valueExpression});for(const t of i.uniqueValueInfos)l.push({value:""+t.value,symbol:S(t.symbol,i,n)});return {type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:D(e,{...a,field:i.field2}).field,field3:D(e,{...a,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:S(s,i),defaultSymbol:S(i.defaultSymbol,i),map:l}}function Z(e,t,r=!1){return {type:"dictionary",renderer:t.toJSON()}}

export { A$1 as A, C$1 as C, D$1 as D, G$1 as G, H$1 as H, J$1 as J, K$1 as K, M, P$1 as P, S, T$1 as T, W$1 as W, W as a, A$2 as b, n$2 as c, a$2 as d, c$3 as e, e as f, d as g, f as h, c as i, s as j, m, n$3 as n, o$4 as o, r$1 as r, s$2 as s, u$2 as u, z$1 as z };
