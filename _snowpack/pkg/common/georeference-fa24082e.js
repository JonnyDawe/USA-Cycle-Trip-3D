import { r as r$2, t as t$1 } from './Message-70b34921.js';
import { A as A$1, p, e as O$2, H as H$1, T as T$1, I as I$3 } from './unitUtils-b17203be.js';
import { A, P as P$1, I as I$1, a as e, e as e$6 } from './quat-44770d30.js';
import { i, f, c, h, e as e$3, C as C$1, B as B$2 } from './mat4-8eb66d33.js';
import { e as e$2, b as e$4, a as a$2, c as e$5, f as f$1 } from './vec33-d394808f.js';
import { j } from './mat3-6cb40036.js';
import { S as Sn, x as xn } from './projection-c73dd3c4.js';
import { e as e$1, a as a$1 } from './JSONSupport-9346590f.js';
import { y, n } from './subclass-fe5fcf78.js';
import { h as r$1, g as b$2, N as N$1, n as n$1, i as t, I as I$2, F, k as r$3 } from './mathUtils-a477cc74.js';
import { b as b$3 } from './Point-ee7951c3.js';
import { T, i as i$1 } from './BufferView-3733efba.js';
import { M as M$1, _ as _$1, R, v as v$1, F as F$1, B as B$3, V as V$1, k as k$2, L as L$2 } from './projection-7d8c2528.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a(n=b$1){return [n[0],n[1],n[2],n[3]]}function k$1(n,r,t=a()){return r$1(v(t),n),t[3]=r,t}function q$1(n,c,s=a()){return A(d,v(n),x$1(n)),A(w,v(c),x$1(c)),P$1(d,w,d),U$1(s,N$1(I$1(v(s),d)))}function v(n){return n}function x$1(r){return b$2(r[3])}function U$1(n,r){return n[3]=r,n}const b$1=[0,0,1,0],d=e(),w=e();a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var L$1;let B$1=L$1=class extends a$1{constructor(r){super(r),this.origin=n$1(),this.translation=n$1(),this.rotation=a(),this.scale=t(1,1,1),this.geographic=!0;}get localMatrix(){const r=e$2();return i(r,r,this.scale),f(r,r,x$1(this.rotation),v(this.rotation)),c(r,r,this.translation),r}get localMatrixInverse(){return h(e$2(),this.localMatrix)}applyLocal(r,o){return I$2(o,r,this.localMatrix)}applyLocalInverse(r,o){return I$2(o,r,this.localMatrixInverse)}project(r,o){const t=new Float64Array(r.length),s=T.fromTypedArray(t),e=T.fromTypedArray(r);if(this.geographic){const r=A$1(p(o)),i=e$2();return Sn(o,this.origin,i,r),e$3(i,i,this.localMatrix),e$4(s,e,i),xn(t,r,0,t,o,0,t.length/3),t}const{localMatrix:i,origin:a}=this;C$1(i,a$2)?e$5(s,e):e$4(s,e,i);for(let n=0;n<t.length;n+=3)t[n+0]+=a[0],t[n+1]+=a[1],t[n+2]+=a[2];return t}getOriginPoint(r){const[o,t,s]=this.origin;return new b$3({x:o,y:t,z:s,spatialReference:r})}equals(r){return r$2(r)&&this.geographic===r.geographic&&F(this.origin,r.origin)&&B$2(this.localMatrix,r.localMatrix)}clone(){const r={origin:r$3(this.origin),translation:r$3(this.translation),rotation:a(this.rotation),scale:r$3(this.scale),geographic:this.geographic};return new L$1(r)}};e$1([y({type:[Number],nonNullable:!0,json:{write:!0}})],B$1.prototype,"origin",void 0),e$1([y({type:[Number],nonNullable:!0,json:{write:!0}})],B$1.prototype,"translation",void 0),e$1([y({type:[Number],nonNullable:!0,json:{write:!0}})],B$1.prototype,"rotation",void 0),e$1([y({type:[Number],nonNullable:!0,json:{write:!0}})],B$1.prototype,"scale",void 0),e$1([y({type:Boolean,nonNullable:!0,json:{write:!0}})],B$1.prototype,"geographic",void 0),e$1([y()],B$1.prototype,"localMatrix",null),e$1([y()],B$1.prototype,"localMatrixInverse",null),B$1=L$1=e$1([n("esri.geometry.support.MeshTransform")],B$1);var O$1=B$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r(r,e){var i;return r.isGeographic||r.isWebMercator&&(null==(i=null==e?void 0:e.geographic)||i)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function x(n,r$1,t){return r(r$1.spatialReference,t)?B(n,r$1,t):b(n,r$1,t)}function _(t,o,e){const{position:a,normal:i,tangent:l}=t;if(t$1(o))return {position:a,normal:i,tangent:l};const s=o.localMatrix;return x({position:V$1(a,new Float64Array(a.length),s),normal:r$2(i)?k$2(i,new Float32Array(i.length),s):null,tangent:r$2(l)?L$2(l,new Float32Array(l.length),s):null},o.getOriginPoint(e),{geographic:o.geographic})}function k(n,r$1,t){if(null!=t&&t.useTransform){var o;const{position:e,normal:a,tangent:i}=n;return {vertexAttributes:{position:e,normal:a,tangent:i},transform:new O$1({origin:[r$1.x,r$1.y,null!=(o=r$1.z)?o:0],geographic:r(r$1.spatialReference,t)})}}return {vertexAttributes:x(n,r$1,t),transform:null}}function M(n,r$1,t){return r(r$1.spatialReference,t)?G(n,r$1,t):Y(n,r$1,t)}function P(r$1,t,o,e){if(t$1(t))return M(r$1,o,e);const a=_(r$1,t,o.spatialReference);return o.equals(t.getOriginPoint(o.spatialReference))?Y(a,o,e):r(o.spatialReference,e)?G(a,o,e):Y(a,o,e)}function b(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=e[c+0]*s+a,o[c+1]=e[c+1]*s+i,o[c+2]=e[c+2]*f+l;return {position:o,normal:n.normal,tangent:n.tangent}}function B(n,r,t){const o=r.spatialReference,e=O(r,t,D),a=new Float64Array(n.position.length),i=L(n.position,e,o,a),l=j(I,e);return {position:i,normal:N(i,a,n.normal,l,o),tangent:S(i,a,n.tangent,l,o)}}function L(n,r,t,o){e$4(T.fromTypedArray(o),T.fromTypedArray(n),r);const e=new Float64Array(n.length);return M$1(o,e,t)}function N(r,t,o,e,a){if(t$1(o))return null;const i=new Float32Array(o.length);return f$1(i$1.fromTypedArray(i),i$1.fromTypedArray(o),e),_$1(i,r,t,a,i),i}function S(r,t,o,e,a){if(t$1(o))return null;const i=new Float32Array(o.length);f$1(i$1.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),i$1.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),e);for(let n=3;n<i.length;n+=4)i[n]=o[n];return R(i,r,t,a,i),i}function Y(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=(e[c+0]-a)/s,o[c+1]=(e[c+1]-i)/s,o[c+2]=(e[c+2]-l)/f;return {position:o,normal:n.normal,tangent:n.tangent}}function G(n,r,t){const o=r.spatialReference;O(r,t,D);const e=h(H,D),a=new Float64Array(n.position.length),l=U(n.position,o,e,a),s=j(I,e);return {position:l,normal:q(n.normal,n.position,a,o,s),tangent:V(n.tangent,n.position,a,o,s)}}function O(n,r,t){Sn(n.spatialReference,[n.x,n.y,n.z||0],t,O$2(n.spatialReference));const{horizontal:o,vertical:e}=C(r?r.unit:null,n.spatialReference);return i(t,t,[o,o,e]),t}function U(n,r,t,o){const e=v$1(n,r,o),a=T.fromTypedArray(e),i=new Float64Array(e.length),l=T.fromTypedArray(i);return e$4(l,a,t),i}function q(r,t,o,e,a){if(t$1(r))return null;const i=F$1(r,t,o,e,new Float32Array(r.length)),l=i$1.fromTypedArray(i);return f$1(l,l,a),i}function V(r,t,o,e,a){if(t$1(r))return null;const i=B$3(r,t,o,e,new Float32Array(r.length)),l=i$1.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return f$1(l,l,a),i}function C(r,a){if(t$1(r))return J;const i=a.isGeographic?1:H$1(a),l=a.isGeographic?1:T$1(a),s=I$3(1,r,"meters");return {horizontal:s*i,vertical:s*l}}const D=e$2(),H=e$2(),I=e$6(),J={horizontal:1,vertical:1};

export { M, O$1 as O, P, _, a, x$1 as b, k$1 as c, k, q$1 as q, r, v, x };
