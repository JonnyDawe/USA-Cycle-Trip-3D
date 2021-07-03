import { r as r$1, J as o } from './Message-70b34921.js';
import { w } from './quat-44770d30.js';
import { r } from './quatf32-b1c8b796.js';
import { W as P } from './mathUtils-a477cc74.js';
import { t, n } from './vec3f32-97630458.js';
import { x as xn } from './projection-c73dd3c4.js';
import { k } from './SpatialReference-843b1520.js';
import { c as c$1, a, u, m } from './PointCloudWorkerUtil-9cb099c9.js';
import './vec4-8546ad05.js';
import './promiseUtils-2ff2b194.js';
import './unitUtils-b17203be.js';
import './jsonMap-e142bd84.js';
import './Point-ee7951c3.js';
import './JSONSupport-9346590f.js';
import './subclass-fe5fcf78.js';
import './reader-fa0f173d.js';
import './mat4-8eb66d33.js';
import './Polyline-ccd8fb47.js';
import './assets-73c8998f.js';
import './Loadable-d16b3d7d.js';
import './aaBoundingRect-68336c41.js';
import './PointCloudUniqueValueRenderer-af8d1d8a.js';
import './enumeration-7d0c165d.js';
import './ColorStop-ed1033bb.js';
import './Color-ae84a22a.js';
import './I3SBinaryReader-37d895b6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class p{transform(e){const a=this._transform(e),o$1=[a.points.buffer,a.rgb.buffer];r$1(a.pointIdFilterMap)&&o$1.push(a.pointIdFilterMap.buffer);for(const t of a.attributes)"buffer"in t.values&&o(t.values.buffer)&&t.values.buffer!==a.rgb.buffer&&o$1.push(t.values.buffer);return Promise.resolve({result:a,transferList:o$1})}_transform(r){const e=c$1(r.schema,r.geometryBuffer);let a$1=e.length/3,o=null;const f=[],i=a(r.primaryAttributeData,e,a$1);r$1(r.primaryAttributeData)&&i&&f.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:i});const n=a(r.modulationAttributeData,e,a$1);r$1(r.modulationAttributeData)&&n&&f.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:n});let p=u(r.rendererInfo,i,n,a$1);if(r.filterInfo&&r.filterInfo.length>0&&r$1(r.filterAttributesData)){const t=r.filterAttributesData.map((t=>{const r=a(t,e,a$1),o={attributeInfo:t.attributeInfo,values:r};return f.push(o),o}));o=new Uint32Array(a$1),a$1=m(e,p,o,r.filterInfo,t);}for(const t of r.userAttributesData){const r=a(t,e,a$1);f.push({attributeInfo:t.attributeInfo,values:r});}3*a$1<p.length&&(p=new Uint8Array(p.buffer.slice(0,3*a$1))),this._applyElevationOffsetInPlace(e,a$1,r.elevationOffset);const c=this._transformCoordinates(e,a$1,r.obb,k.fromJSON(r.inSR),k.fromJSON(r.outSR));return {obb:r.obb,points:c,rgb:p,attributes:f,pointIdFilterMap:o}}_transformCoordinates(t$1,r,a,s,u){if(!xn(t$1,s,0,t$1,u,0,r))throw Error("Can't reproject");const l=t(a.center[0],a.center[1],a.center[2]),b=n(),m=n();w(c,a.quaternion);const p=new Float32Array(3*r);for(let e=0;e<r;e++)b[0]=t$1[3*e]-l[0],b[1]=t$1[3*e+1]-l[1],b[2]=t$1[3*e+2]-l[2],P(m,b,c),a.halfSize[0]=Math.max(a.halfSize[0],Math.abs(m[0])),a.halfSize[1]=Math.max(a.halfSize[1],Math.abs(m[1])),a.halfSize[2]=Math.max(a.halfSize[2],Math.abs(m[2])),p[3*e]=b[0],p[3*e+1]=b[1],p[3*e+2]=b[2];return p}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e;}}const c=r();function h(){return new p}

export default h;
