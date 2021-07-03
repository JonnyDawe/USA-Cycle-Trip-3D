import { G as se, l as k, ak as s, J, K } from './arcadeUtils-e7a1e061.js';
import { g as g$1, c as n } from './SpatialFilter-ad944eb9.js';
import { x, L } from './promiseUtils-2ff2b194.js';
import { p } from './Point-ee7951c3.js';
import { w, A, x as x$1, O, p as p$1, g as g$2, h as h$1 } from './geometryEngineAsync-a7b58556.js';
import './Polyline-ccd8fb47.js';
import './JSONSupport-9346590f.js';
import './Message-70b34921.js';
import './subclass-fe5fcf78.js';
import './SpatialReference-843b1520.js';
import './number-85e98a72.js';
import './locale-b874fc68.js';
import './jsonUtils-f0a19240.js';
import './Field-728fb193.js';
import './jsonMap-e142bd84.js';
import './enumeration-7d0c165d.js';
import './reader-fa0f173d.js';
import './fieldUtils-22be41cd.js';
import './Loadable-d16b3d7d.js';
import './fieldType-6799091f.js';
import './featureConversionUtils-3ad98dca.js';
import './OptimizedFeature-ccef5b1d.js';
import './OptimizedFeatureSet-be12a9b8.js';
import './FeatureSetReader-bf914a8a.js';
import './centroid-80fbdb27.js';
import './sizeVariableUtils-6d1564c8.js';
import './WhereClause-55dc94e0.js';
import './FieldsIndex-f71b4f3d.js';
import './workers-bd1ea274.js';
import './assets-73c8998f.js';
import './intl-21ab9759.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function S(e){return e instanceof p}function h(r,a,R,h,g){return g(r,a,(function(r,a,g){if(g.length<2)return h(new Error("Missing Parameters"));if(null===(g=se(g))[0]&&null===g[1])return x(!1);if(k(g[0]))return g[1]instanceof p?x(new g$1({parentfeatureset:g[0],relation:R,relationGeom:g[1]})):null===g[1]?x(new n({parentfeatureset:g[0]})):h("Spatial Relation cannot accept this parameter type");if(S(g[0])){if(S(g[1])){let n=null;switch(R){case"esriSpatialRelEnvelopeIntersects":n=g$2(s(g[0]),s(g[1]));break;case"esriSpatialRelIntersects":n=g$2(g[0],g[1]);break;case"esriSpatialRelContains":n=p$1(g[0],g[1]);break;case"esriSpatialRelOverlaps":n=O(g[0],g[1]);break;case"esriSpatialRelWithin":n=x$1(g[0],g[1]);break;case"esriSpatialRelTouches":n=A(g[0],g[1]);break;case"esriSpatialRelCrosses":n=w(g[0],g[1]);}return null!==n?n:L(new Error("Unrecognised Relationship"))}return k(g[1])?x(new g$1({parentfeatureset:g[1],relation:R,relationGeom:g[0]})):null===g[1]?x(!1):h("Spatial Relation cannot accept this parameter type")}return null!==g[0]?h("Spatial Relation cannot accept this parameter type"):k(g[1])?x(new n({parentfeatureset:g[1]})):g[1]instanceof p||null===g[1]?x(!1):void 0}))}function g(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return h(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return h(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return h(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return h(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return h(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return h(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return h(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(i,l){return e.standardFunctionAsync(i,l,(function(e,i,l){if(l=se(l),J(l,3,3),S(l[0])&&S(l[1]))return h$1(l[0],l[1],K(l[2]));if(l[0]instanceof p&&null===l[1])return !1;if(l[1]instanceof p&&null===l[0])return !1;if(k(l[0])&&null===l[1])return new n({parentfeatureset:l[0]});if(k(l[1])&&null===l[0])return new n({parentfeatureset:l[1]});if(k(l[0])&&l[1]instanceof p)return l[0].relate(l[1],K(l[2]));if(k(l[1])&&l[0]instanceof p)return l[1].relate(l[0],K(l[2]));if(null===l[0]&&null===l[1])return !1;throw new Error("Illegal Argument")}))});}

export { g as registerFunctions };
