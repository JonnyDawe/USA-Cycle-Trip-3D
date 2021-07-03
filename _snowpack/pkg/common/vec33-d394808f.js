import { n as n$2 } from './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$3(){return [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r$1(e){return [e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n$1(e,r,n,t,a,o,c,u,s,f,i,l,_,I,b,m){return [e,r,n,t,a,o,c,u,s,f,i,l,_,I,b,m]}function t$1(e,r){return new Float64Array(e,r,16)}const a=e$3();Object.freeze({__proto__:null,create:e$3,clone:r$1,fromValues:n$1,createView:t$1,IDENTITY:a});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e$2=n$2.getLogger("esri.views.3d.support.buffer.math");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$1(e,f,r){if(e.count!==f.count)return void e$2.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],u=r[1],d=r[2],s=r[4],c=r[5],i=r[6],a=r[8],p=r[9],y=r[10],B=r[12],m=r[13],h=r[14],l=e.typedBuffer,S=e.typedBufferStride,b=f.typedBuffer,v=f.typedBufferStride;for(let t=0;t<o;t++){const e=t*S,f=t*v,r=b[f],o=b[f+1],M=b[f+2];l[e]=n*r+s*o+a*M+B,l[e+1]=u*r+c*o+p*M+m,l[e+2]=d*r+i*o+y*M+h;}}function f(e,f,r){if(e.count!==f.count)return void e$2.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],u=r[1],d=r[2],s=r[3],c=r[4],i=r[5],a=r[6],p=r[7],y=r[8],B=e.typedBuffer,m=e.typedBufferStride,h=f.typedBuffer,l=f.typedBufferStride;for(let t=0;t<o;t++){const e=t*m,f=t*l,r=h[f],o=h[f+1],S=h[f+2];B[e]=n*r+s*o+a*S,B[e+1]=u*r+c*o+p*S,B[e+2]=d*r+i*o+y*S;}}function r(t,e,f){const r=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*d;o[t]=f*u[e],o[t+1]=f*u[e+1],o[t+2]=f*u[e+2];}}function o(t,e){const f=Math.min(t.count,e.count),r=t.typedBuffer,o=t.typedBufferStride,n=e.typedBuffer,u=e.typedBufferStride;for(let d=0;d<f;d++){const t=d*o,e=d*u,f=n[e],s=n[e+1],c=n[e+2],i=Math.sqrt(f*f+s*s+c*c);if(i>0){const e=1/i;r[t]=e*f,r[t+1]=e*s,r[t+2]=e*c;}}}function n(t,e,f){const r=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*d;o[t]=u[e]>>f,o[t+1]=u[e+1]>>f,o[t+2]=u[e+2]>>f;}}Object.freeze({__proto__:null,transformMat4:e$1,transformMat3:f,scale:r,normalize:o,shiftRight:n});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e,t,n){const d=e.typedBuffer,f=e.typedBufferStride,r=t.typedBuffer,u=t.typedBufferStride,l=n?n.count:t.count;let o=(n&&n.dstIndex?n.dstIndex:0)*f,c=(n&&n.srcIndex?n.srcIndex:0)*u;for(let s=0;s<l;++s)d[o]=r[c],d[o+1]=r[c+1],d[o+2]=r[c+2],o+=f,c+=u;}function t(e,t,n,d,f){var r,u;const l=e.typedBuffer,o=e.typedBufferStride,c=null!=(r=null==f?void 0:f.count)?r:e.count;let s=(null!=(u=null==f?void 0:f.dstIndex)?u:0)*o;for(let p=0;p<c;++p)l[s]=t,l[s+1]=n,l[s+2]=d,s+=o;}Object.freeze({__proto__:null,copy:e,fill:t});

export { a, e$1 as b, e as c, r as d, e$3 as e, f, e$2 as g, t as h, n as i, n$1 as n, o, r$1 as r, t$1 as t };
