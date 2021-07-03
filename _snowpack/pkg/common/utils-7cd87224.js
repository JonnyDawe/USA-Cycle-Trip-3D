import './promiseUtils-2ff2b194.js';
import './fieldUtils-22be41cd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return !n&&!t&&!l}function i(e){const{values:n,supportsNullCount:t}=e,l=n.filter((e=>null!=e)).length,o={count:l};return t&&(o.nullcount=n.length-l),o}function r(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=null,u=null,s=null,a=null,c=0;const f=null==e.minValue?-1/0:e.minValue,d=null==e.maxValue?1/0:e.maxValue;for(const p of n)Number.isFinite(p)?p>=f&&p<=d&&(r+=p,o=Math.min(o,p),i=Math.max(i,p),c++):"string"==typeof p&&c++;if(c&&null!=r){u=r/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=f&&t<=d&&(e+=(t-u)**2);a=t?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(a);}else o=null,i=null;const m={avg:u,count:c,max:i,min:o,stddev:s,sum:r,variance:a};return l&&(m.nullcount=n.length-c),m}function u(e,n){return n?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]));})),e):e}function s(e,n,t,l){let o=null;switch(n){case"log":0!==e&&(o=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(o=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(o=e/t);break;case"natural-log":e>0&&(o=Math.log(e));break;case"square-root":e>0&&(o=e**.5);}return o}

export { i, o, r, s, u };
