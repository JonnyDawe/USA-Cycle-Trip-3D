/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(){return [0,0]}function r(n){return [n[0],n[1]]}function t(n,r){return [n,r]}function e(r){const t=n(),e=Math.min(2,r.length);for(let n=0;n<e;++n)t[n]=r[n];return t}function a(n,r){return new Float64Array(n,r,2)}function u(){return n()}function o(){return t(1,1)}function s(){return t(1,0)}function c(){return t(0,1)}const f=u(),i=o(),l=s(),_=c();Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,fromArray:e,createView:a,zeros:u,ones:o,unitX:s,unitY:c,ZEROS:f,ONES:i,UNIT_X:l,UNIT_Y:_});

export { a, e, f, n, r, t };
