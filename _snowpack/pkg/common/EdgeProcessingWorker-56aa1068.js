import { n as n$2 } from './deduplicate-b910185f.js';
import { y as y$2, u as u$4, i as i$1, c as c$2, l as l$2, p as p$3, o as o$1, m as m$1, T, h as h$2, a as a$3, b, d as d$3, A as A$2, O as O$1, x, g as g$2, w as w$2, E, L, B, F as F$1, I as I$1, U, j as j$1, V as V$1, M, S, k, q, v as v$1, z as z$1, C, D as D$1, G as G$1, H as H$1 } from './BufferView-3733efba.js';
import { A as A$1 } from './InterleavedLayout-b66a6862.js';
import { R as t$3, T as m$2 } from './JSONSupport-9346590f.js';
import { u as u$3, j, n, g as b$1, a as o$2, h as r$1, z as z$2, _, x as x$1, H as H$2, c as c$3, q as q$1 } from './mathUtils-a477cc74.js';
import { M as n$1 } from './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$2(t,o=0){const n=t.stride;return t.fieldNames.filter((e=>{const o=t.fields.get(e).optional;return !(o&&o.glPadding)})).map((r=>{const i=t.fields.get(r),s=i.constructor.ElementCount,u=e$1(i.constructor.ElementType),f=i.offset,l=!(!i.optional||!i.optional.glNormalized);return {name:r,stride:n,count:s,type:u,offset:f,normalized:l,divisor:o}}))}function e$1(t){const e=o[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const o={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e=A$1().vec3f("position").u16("componentIndex").u16("u16padding"),i=A$1().vec2u8("sideness"),t$1=t$2(i),a$2=A$1().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),r=a$2.clone().vec3f("normal"),s=a$2.clone().vec3f("normalA").vec3f("normalB"),p$2=new Map([["position0",0],["position1",1],["componentIndex",2],["variantOffset",3],["variantStroke",4],["variantExtension",5],["normal",6],["normalA",6],["normalB",7],["sideness",8]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a$1{updateSettings(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?f$1:p$1;}write(t,o,e){const n=this.edgeHashFunction(e);W.seed=n;const i=W.getIntRange(0,255),r=W.getIntRange(0,this.settings.variants-1),s=.7,a=W.getFloat(),c=255*(.5*g$1(-(1-Math.min(a/s,1))+Math.max(0,a-s)/(1-s),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,i),t.variantStroke.set(o,r),t.variantExtension.set(o,c);}trim(t,o){return t.slice(0,o)}}const c$1=new Float32Array(6),m=new Uint32Array(c$1.buffer),u$2=new Uint32Array(1);function p$1(t){const o=c$1;o[0]=t.position0[0],o[1]=t.position0[1],o[2]=t.position0[2],o[3]=t.position1[0],o[4]=t.position1[1],o[5]=t.position1[2],u$2[0]=5381;for(let e=0;e<m.length;e++)u$2[0]=31*u$2[0]+m[e];return u$2[0]}function f$1(t){const o=c$1;o[0]=h$1(t.position0[0]),o[1]=h$1(t.position0[1]),o[2]=h$1(t.position0[2]),o[3]=h$1(t.position1[0]),o[4]=h$1(t.position1[1]),o[5]=h$1(t.position1[2]),u$2[0]=5381;for(let e=0;e<m.length;e++)u$2[0]=31*u$2[0]+m[e];return u$2[0]}const l$1=1e4;function h$1(t){return Math.round(t*l$1)/l$1}function g$1(t,o){const e=t<0?-1:1;return Math.abs(t)**o*e}class d$2{constructor(){this.commonWriter=new a$1;}updateSettings(t){this.commonWriter.updateSettings(t);}allocate(t){return r.createBuffer(t)}write(t,n,i){this.commonWriter.write(t,n,i),u$3(y$1,i.faceNormal0,i.faceNormal1),j(y$1,y$1),t.normal.setVec(n,y$1);}trim(t,o){return this.commonWriter.trim(t,o)}}d$2.Layout=r,d$2.glLayout=t$2(r,1);class w$1{constructor(){this.commonWriter=new a$1;}updateSettings(t){this.commonWriter.updateSettings(t);}allocate(t){return s.createBuffer(t)}write(t,o,e){this.commonWriter.write(t,o,e),t.normalA.setVec(o,e.faceNormal0),t.normalB.setVec(o,e.faceNormal1);}trim(t,o){return this.commonWriter.trim(t,o)}}w$1.Layout=s,w$1.glLayout=t$2(s,1);const y$1=n(),W=new t$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function z(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:F(e.layout)}}function D(e){return G(e.layout).createView(e.buffer)}function F(e){const t=new Array;return e.fields.forEach(((e,r)=>{const o={...e,constructor:J(e.constructor)};t.push([r,o]);})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}function G(e){const t=A$1();return t.stride=e.stride,t.fieldNames=e.fieldNames,e.fields.forEach((e=>t.fields.set(e[0],{...e[1],constructor:K(e[1].constructor)}))),t}const H=[y$2,u$4,i$1,c$2,l$2,p$3,o$1,m$1,T,h$2,a$3,b,d$3,A$2,O$1,x,g$2,w$2,E,L,B,F$1,I$1,U,j$1,V$1,M,S,k,q,v$1,z$1,C,D$1,G$1,H$1];function J(e){return `${e.ElementType}_${e.ElementCount}`}function K(e){return O.get(e)}const O=new Map;H.forEach((e=>O.set(J(e),e)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++;};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o);}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o;}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n;}else {const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n;}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x);}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o;}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1;},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o;};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++);}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++;}}return A}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p=-1;function u$1(n,i,l,g=V){const f=n.vertices.position,m=n.vertices.componentIndex,u=b$1(g.anglePlanar),I=b$1(g.angleSignificantEdge),N=Math.cos(I),j=Math.cos(u),x=y.edge,F=x.position0,E=x.position1,U=x.faceNormal0,k=x.faceNormal1,D=w(n),M=v(n),P=M.length/4,S=i.allocate(P);let b=0;const L=P,q=l.allocate(L);let z=0,B=0,C=0;const G=m$2(0,P),H=new Float32Array(P);n$1(H,((e,t,n)=>{f.getVec(M[4*t+0],F),f.getVec(M[4*t+1],E),n[t]=q$1(F,E);})),G.sort(((e,t)=>H[t]-H[e]));const J=new Array,K=new Array;for(let e=0;e<P;e++){const t=G[e],n=H[t],o=M[4*t+0],r=M[4*t+1],g=M[4*t+2],v=M[4*t+3],w=v===p;if(f.getVec(o,F),f.getVec(r,E),w)o$2(U,D[3*g+0],D[3*g+1],D[3*g+2]),r$1(k,U),x.componentIndex=m.get(o),x.cosAngle=z$2(U,k);else {if(o$2(U,D[3*g+0],D[3*g+1],D[3*g+2]),o$2(k,D[3*v+0],D[3*v+1],D[3*v+2]),x.componentIndex=m.get(o),x.cosAngle=z$2(U,k),d$1(x,j))continue;x.cosAngle<-.9999&&r$1(k,U);}B+=n,C++,w||h(x,N)?(i.write(S,b++,x),J.push(n)):A(x,u)&&(l.write(q,z++,x),K.push(n));}const O=new Float32Array(J.reverse()),Q=new Float32Array(K.reverse());return {regular:{instancesData:i.trim(S,b),lodInfo:{lengths:O}},silhouette:{instancesData:l.trim(q,z),lodInfo:{lengths:Q}},averageEdgeLength:B/C}}function h(e,t){return e.cosAngle<t}function d$1(e,t){return e.cosAngle>t}function A(e,t){const o=x$1(e.cosAngle),r=y.fwd,s=y.ortho;H$2(r,e.position1,e.position0);return o*(z$2(_(s,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}function v(e){const t=e.faces.length/3,n=e.faces,o=e.neighbors;let r=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],s=o[3*a+2],c=n[3*a+0],i=n[3*a+1],l=n[3*a+2];r+=e===p||c<i?1:0,r+=t===p||i<l?1:0,r+=s===p||l<c?1:0;}const s=new Int32Array(4*r);let c=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],r=o[3*a+2],i=n[3*a+0],l=n[3*a+1],g=n[3*a+2];(e===p||i<l)&&(s[c++]=i,s[c++]=l,s[c++]=a,s[c++]=e),(t===p||l<g)&&(s[c++]=l,s[c++]=g,s[c++]=a,s[c++]=t),(r===p||g<i)&&(s[c++]=g,s[c++]=i,s[c++]=a,s[c++]=r);}return s}function w(e){const t=e.faces.length/3,n=e.vertices.position,o=e.faces,r=I.v0,s=I.v1,c=I.v2,a=new Float32Array(3*t);for(let i=0;i<t;i++){const e=o[3*i+0],t=o[3*i+1],m=o[3*i+2];n.getVec(e,r),n.getVec(t,s),n.getVec(m,c),c$3(s,s,r),c$3(c,c,r),_(r,s,c),j(r,r),a[3*i+0]=r[0],a[3*i+1]=r[1],a[3*i+2]=r[2];}return a}const y={edge:{position0:n(),position1:n(),faceNormal0:n(),faceNormal1:n(),componentIndex:0,cosAngle:0},ortho:n(),fwd:n()},I={v0:n(),v1:n(),v2:n()},V={anglePlanar:4,angleSignificantEdge:35};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function a(e){const t=u(e),n=f(t),r=[t.data.buffer];return {result:c(n,r),transferList:r}}function f(e){const t=g(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return d.updateSettings(e.writerSettings),l.updateSettings(e.writerSettings),u$1(t,d,l)}function u(e$1){return {data:e.createView(e$1.dataBuffer),indices:"Uint32Array"===e$1.indicesType?new Uint32Array(e$1.indicesBuffer):"Uint16Array"===e$1.indicesType?new Uint16Array(e$1.indicesBuffer):void 0,indicesLength:e$1.indicesLength,writerSettings:e$1.writerSettings,skipDeduplicate:e$1.skipDeduplicate}}function c(e,t){t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer);return {regular:{instancesData:z(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:z(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function g(n,i,s,o){if(i){return {faces:s,facesLength:o,neighbors:t(s,o,n.count),vertices:n}}const a=n$2(n.buffer,n.stride/4,{originalIndices:s,originalIndicesLength:o}),f=t(a.indices,o,a.uniqueCount);return {faces:a.indices,facesLength:a.indices.length,neighbors:f,vertices:e.createView(a.buffer)}}const d=new d$2,l=new w$1;

var EdgeProcessingWorker = /*#__PURE__*/Object.freeze({
	__proto__: null,
	work: f,
	wrappedWork: a
});

export { D, EdgeProcessingWorker as E, t$1 as a, d$2 as d, e, f, i, p$2 as p, t$2 as t, w$1 as w };
