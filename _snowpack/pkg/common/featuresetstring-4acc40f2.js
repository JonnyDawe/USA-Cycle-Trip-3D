import { J, k as b, K, X, i as h, al as D, l as k, am as oe, an as re, ao as ie, ap as H, M as O } from './arcadeUtils-e7a1e061.js';
import './Point-ee7951c3.js';
import './JSONSupport-9346590f.js';
import './Message-70b34921.js';
import './subclass-fe5fcf78.js';
import './promiseUtils-2ff2b194.js';
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
function m(e){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?h.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:D[e.field.type],codedValues:e.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):h.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:D[e.field.type],min:e.domain.min,max:e.domain.max}):null}function l(f){"async"===f.mode&&(f.functions.domain=function(n,c){return f.standardFunctionAsync(n,c,(function(n,c,u){if(J(u,2,3),u[0]instanceof b){return m(u[0].fullDomain(K(u[1]),void 0===u[2]?void 0:X(u[2])))}if(k(u[0]))return u[0]._ensureLoaded().then((()=>m(oe(K(u[1]),u[0],null,void 0===u[2]?void 0:X(u[2])))));throw new Error("Invalid Parameter")}))},f.functions.subtypes=function(r,o){return f.standardFunctionAsync(r,o,(function(r,o,i){if(J(i,1,1),i[0]instanceof b){const e=i[0].subtypes();return e?h.convertObjectToArcadeDictionary(e):null}if(k(i[0]))return i[0]._ensureLoaded().then((()=>{const e=i[0].subtypes();return e?h.convertObjectToArcadeDictionary(e):null}));throw new Error("Invalid Parameter")}))},f.functions.domainname=function(n,u){return f.standardFunctionAsync(n,u,(function(n,u,d){if(J(d,2,4),d[0]instanceof b)return d[0].domainValueLookup(K(d[1]),d[2],void 0===d[3]?void 0:X(d[3]));if(k(d[0]))return d[0]._ensureLoaded().then((()=>{const n=oe(K(d[1]),d[0],null,void 0===d[3]?void 0:X(d[3]));return re(n,d[2])}));throw new Error("Invalid Parameter")}))},f.signatures.push({name:"domainname",min:"2",max:"4"}),f.functions.domaincode=function(n,c){return f.standardFunctionAsync(n,c,(function(n,c,d){if(J(d,2,4),d[0]instanceof b)return d[0].domainCodeLookup(K(d[1]),d[2],void 0===d[3]?void 0:X(d[3]));if(k(d[0]))return d[0]._ensureLoaded().then((()=>{const n=oe(K(d[1]),d[0],null,void 0===d[3]?void 0:X(d[3]));return ie(n,d[2])}));throw new Error("Invalid Parameter")}))},f.signatures.push({name:"domaincode",min:"2",max:"4"})),f.functions.text=function(n,e){return f.standardFunctionAsync(n,e,(function(n,e,r){if(J(r,1,2),!k(r[0]))return H(r[0],r[1]);{const e=O(r[1],"");if(""===e)return r[0].castToText();if("schema"===e.toLowerCase())return r[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return r[0].convertToText("featureset",n.abortSignal)}}))},f.functions.gdbversion=function(n,r){return f.standardFunctionAsync(n,r,(function(n,r,o){if(J(o,1,1),o[0]instanceof b)return o[0].gdbVersion();if(k(o[0]))return o[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},f.functions.schema=function(r,o){return f.standardFunctionAsync(r,o,(function(r,o,i){if(J(i,1,1),k(i[0]))return i[0].load().then((()=>h.convertObjectToArcadeDictionary(i[0].schema())));if(i[0]instanceof b){const e=i[0].schema();return e?h.convertObjectToArcadeDictionary(e):null}throw new Error("Invalid Parameter")}))};}

export { l as registerFunctions };
