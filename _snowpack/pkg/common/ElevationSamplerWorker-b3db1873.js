import { r, c as s$1 } from './Message-70b34921.js';
import { h } from './PooledRBush-0ff19c83.js';
import { _ } from './georeference-fa24082e.js';
import './JSONSupport-9346590f.js';
import './subclass-fe5fcf78.js';
import './promiseUtils-2ff2b194.js';
import './quickselect-f4197880.js';
import './unitUtils-b17203be.js';
import './jsonMap-e142bd84.js';
import './SpatialReference-843b1520.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './quat-44770d30.js';
import './mathUtils-a477cc74.js';
import './vec4-8546ad05.js';
import './mat4-8eb66d33.js';
import './vec33-d394808f.js';
import './mat3-6cb40036.js';
import './projection-c73dd3c4.js';
import './Polyline-ccd8fb47.js';
import './assets-73c8998f.js';
import './Loadable-d16b3d7d.js';
import './aaBoundingRect-68336c41.js';
import './BufferView-3733efba.js';
import './vec2-513a0296.js';
import './projection-7d8c2528.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class o{async createIndex(e,n){const o=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new h;const s=this.createMeshData(e),a=r(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this.createPooledRBush();return e.components?this.createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this.createIndexAllThread(r,t)}createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let o=0;o<t.length;o+=9)r[n++]=s(t,o+0,o+3,o+6);return e.load(r),{result:e.toJSON()}}createIndexComponentsThread(e,t,r){let n=0;for(const s of r)n+=s.length/3;const o=new Array(n);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)o[a++]=s(t,3*i[e+0],3*i[e+1],3*i[e+2]);return e.load(o),{result:e.toJSON()}}createMeshData(e){const t=(e.transform?_({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}createPooledRBush(){return new h(9,s$1("csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function s(e,t,r,n){return {minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}

export default o;
export { o as ElevationSamplerWorker };
