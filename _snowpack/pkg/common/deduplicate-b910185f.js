import { O as i } from './mathUtils-a477cc74.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(n,f,i$1){var u;const c=n.byteLength/(4*f),s=new Uint32Array(n,0,c*f);let a=new Uint32Array(c);const h=null!=(u=null==i$1?void 0:i$1.minReduction)?u:0,d=(null==i$1?void 0:i$1.originalIndices)||null,g=d?d.length:0,y=(null==i$1?void 0:i$1.componentOffsets)||null;let U=0;if(y)for(let t=0;t<y.length-1;t++){const n=y[t+1]-y[t];n>U&&(U=n);}else U=c;const w=Math.floor(1.1*U)+1;(null==o||o.length<2*w)&&(o=new Uint32Array(i(2*w)));for(let t=0;t<2*w;t++)o[t]=0;let A=0;const m=!!y&&!!d,b=m?g:c,p=m?new Uint32Array(g):null,v=1.96;let M=0!==h?Math.ceil(4*v*v/(h*h)*h*(1-h)):b,q=1,x=y?y[1]:b;for(let t=0;t<b;t++){if(t===M){const n=1-A/t;if(n+v*Math.sqrt(n*(1-n)/t)<h)return null;M*=2;}if(t===x){for(let t=0;t<2*w;t++)o[t]=0;if(d)for(let t=y[q-1];t<y[q];t++)p[t]=a[d[t]];x=y[++q];}const n=m?d[t]:t,l=n*f,i=r(s,l,f);let u=i%w,c=A;for(;0!==o[2*u+1];){if(o[2*u]===i){const t=o[2*u+1]-1;if(e(s,l,t*f,f)){c=a[t];break}}u++,u>=w&&(u-=w);}c===A&&(o[2*u]=i,o[2*u+1]=n+1,A++),a[n]=c;}if(0!==h&&1-A/c<h)return null;if(m){for(let t=y[q-1];t<p.length;t++)p[t]=a[d[t]];a=p;}const j=new Uint32Array(f*A);A=0;for(let t=0;t<b;t++)if(a[t]===A){l(s,(m?d[t]:t)*f,j,A*f,f),A++;}if(d&&!m){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=a[d[n]];a=t;}return {buffer:j.buffer,indices:a,uniqueCount:A}}function e(t,n,e,l){for(let r=0;r<l;r++)if(t[n+r]!==t[e+r])return !1;return !0}function l(t,n,e,l,r){for(let o=0;o<r;o++)e[l+o]=t[n+o];}function r(t,n,e){let l=0;for(let r=0;r<e;r++)l=t[n+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let o=null;

export { n };
