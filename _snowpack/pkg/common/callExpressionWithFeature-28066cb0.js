import { s as s$1 } from './promiseUtils-2ff2b194.js';
import { n } from './Message-70b34921.js';
import { U, v, q, k } from './quantizationUtils-28a0adf6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function s(e,t,o,n$1,a){const s=e.referencesGeometry()&&a?u(t,n$1,a):t,i=e.repurposeFeature(s);try{return e.evaluate({...o,$feature:i})}catch(c){return n.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const i=new Map;function u(e,r,t){const{transform:o,hasZ:n,hasM:a}=t;i.has(r)||i.set(r,c(r));const s=i.get(r)(e.geometry,o,n,a);return {...e,geometry:s}}function c(s){const i={};switch(s){case"esriGeometryPoint":return (e,r,t,o)=>k(r,i,e,t,o);case"esriGeometryPolygon":return (e,r,t,o)=>q(r,i,e,t,o);case"esriGeometryPolyline":return (e,r,t,n)=>v(r,i,e,t,n);case"esriGeometryMultipoint":return (e,r,o,n)=>U(r,i,e,o,n);default:return n.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s$1("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}

export { s };
