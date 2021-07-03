import { J, e as en } from './projection-c73dd3c4.js';
import { t } from './json-1b357c88.js';
import { s, d, u as u$1 } from './SpatialReference-843b1520.js';
import { M, y as y$1, x as x$1 } from './Point-ee7951c3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u=[0,0];function h(s,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return [n.x,n.y]=s(t.x,t.y,u),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return [n.xmin,n.ymin]=s(t.xmin,t.ymin,u),[n.xmax,n.ymax]=s(t.xmax,t.ymax,u),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return "rings"in t?{rings:c(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:c(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:l(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:void 0}function c(s,t){const n=[];for(const e of s)n.push(l(e,t));return n}function l(s,t){const n=[];for(const e of s){const s=t(e[0],e[1],[0,0]);n.push(s),e.length>2&&s.push(e[2]),e.length>3&&s.push(e[3]);}return n}async function p(t,n){if(!n)return;const e=Array.isArray(t)?t.map((s=>{var t;return null==(t=s.geometry)?void 0:t.spatialReference})):[t];await en(e.map((s=>({source:s,dest:n}))));}const f=h.bind(null,M),x=h.bind(null,y$1);function y(s$1,o,a){return s$1?(a||(a=o,o=s$1.spatialReference),s(o)&&s(a)&&!d(o,a)?x$1(o,a)?u$1(a)?f(s$1):x(s$1):J(t,[s$1],o,a,null)[0]:s$1):s$1}class g{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this);}async push(s,t,n){if(!s||!s.length||!t||!n||d(t,n))return s;const e={geometries:s,inSpatialReference:t,outSpatialReference:n,resolve:null};return this._jobs.push(e),new Promise((s=>{e.resolve=s,null===this._timer&&(this._timer=setTimeout(this._process,10));}))}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:e,inSpatialReference:r,outSpatialReference:o,resolve:a}=s;x$1(r,o)?u$1(o)?a(e.map(f)):a(e.map(x)):a(J(t,e,r,o,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10));}}const _=new g;function j(s,t,n){return _.push(s,t,n)}

export { j, p, y };
