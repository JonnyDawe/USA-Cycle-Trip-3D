(self.webpackChunk=self.webpackChunk||[]).push([[8323],{92399:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c,ElevationSamplerWorker:()=>s}),n(33807);var r=n(80219),o=n(38624),a=n(36154);n(78155),n(88903),n(20215),n(57424),n(65352),n(31531),n(92858),n(20736),n(4169),n(62654),n(60816),n(15346),n(93242),n(71542),n(95186),n(7571),n(98548),n(63358),n(80987),n(58404),n(65311),n(67726),n(32892);class s{async createIndex(e,t){const n=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new o.h;const a=this.createMeshData(e),s=(0,r.r)(t)?await t.invoke("createIndexThread",a,{transferList:n}):this.createIndexThread(a).result;return this.createPooledRBush().fromJSON(s)}createIndexThread(e){const t=new Float64Array(e.position),n=this.createPooledRBush();return e.components?this.createIndexComponentsThread(n,t,e.components.map((e=>new Uint32Array(e)))):this.createIndexAllThread(n,t)}createIndexAllThread(e,t){const n=new Array(t.length/9);let r=0;for(let e=0;e<t.length;e+=9)n[r++]=i(t,e+0,e+3,e+6);return e.load(n),{result:e.toJSON()}}createIndexComponentsThread(e,t,n){let r=0;for(const e of n)r+=e.length/3;const o=new Array(r);let a=0;for(const e of n)for(let n=0;n<e.length;n+=3)o[a++]=i(t,3*e[n+0],3*e[n+1],3*e[n+2]);return e.load(o),{result:e.toJSON()}}createMeshData(e){const t=(e.transform?(0,a._)({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return!e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}createPooledRBush(){return new o.h(9,(0,r.c)("csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function i(e,t,n,r){return{minX:Math.min(e[t+0],e[n+0],e[r+0]),maxX:Math.max(e[t+0],e[n+0],e[r+0]),minY:Math.min(e[t+1],e[n+1],e[r+1]),maxY:Math.max(e[t+1],e[n+1],e[r+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[n+0],e[n+1],e[n+2]],p2:[e[r+0],e[r+1],e[r+2]]}}const c=s}}]);