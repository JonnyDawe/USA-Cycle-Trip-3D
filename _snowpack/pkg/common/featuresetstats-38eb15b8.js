import { J, l as k, Z, w, E, aj as l$1, M as O } from './arcadeUtils-e7a1e061.js';
import { x, c as s, L } from './promiseUtils-2ff2b194.js';
import { WhereClause as f } from './WhereClause-55dc94e0.js';
import './Point-ee7951c3.js';
import './JSONSupport-9346590f.js';
import './Message-70b34921.js';
import './subclass-fe5fcf78.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './Polyline-ccd8fb47.js';
import './number-85e98a72.js';
import './locale-b874fc68.js';
import './jsonUtils-f0a19240.js';
import './Field-728fb193.js';
import './jsonMap-e142bd84.js';
import './enumeration-7d0c165d.js';
import './fieldUtils-22be41cd.js';
import './Loadable-d16b3d7d.js';
import './fieldType-6799091f.js';
import './featureConversionUtils-3ad98dca.js';
import './OptimizedFeature-ccef5b1d.js';
import './OptimizedFeatureSet-be12a9b8.js';
import './FeatureSetReader-bf914a8a.js';
import './centroid-80fbdb27.js';
import './sizeVariableUtils-6d1564c8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l(n,e,c,s,l,m){if(1===s.length){if(Z(s[0]))return x(l$1(n,s[0],O(s[1],-1)));if(E(s[0]))return x(l$1(n,s[0].toArray(),O(s[1],-1)))}else if(2===s.length){if(Z(s[0]))return x(l$1(n,s[0],O(s[1],-1)));if(E(s[0]))return x(l$1(n,s[0].toArray(),O(s[1],-1)));if(k(s[0]))return s[0].load().then((t=>d(f.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,O(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&k(s[0]))return s[0].load().then((t=>d(f.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,O(s[2],1e3),e.abortSignal)))));return x(l$1(n,s,-1))}function d(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const i={name:e[n]};u.push(t.evaluateIdentifier(r,i));}return s(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return x(n)}catch(e){return L(e)}}function m(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("max",t,r,e,n,i)}))},i.functions.count=function(a,o){return i.standardFunctionAsync(a,o,(function(i,a,o){if(J(o,1,1),k(o[0]))return o[0].count(i.abortSignal);if(Z(o[0])||w(o[0]))return o[0].length;if(E(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))});}

export { m as registerFunctions };
