/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r(){const r=new Float32Array(4);return r[3]=1,r}function n(r){const n=new Float32Array(4);return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n}function e(r,n,e,t){const a=new Float32Array(4);return a[0]=r,a[1]=n,a[2]=e,a[3]=t,a}function t(r,n){return new Float32Array(r,n,4)}Object.freeze({__proto__:null,create:r,clone:n,fromValues:e,createView:t});

export { n, r, t };