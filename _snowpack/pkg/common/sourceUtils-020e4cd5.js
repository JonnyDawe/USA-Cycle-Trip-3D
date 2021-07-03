import { s } from './SpatialReference-843b1520.js';
import { J, X, Z, l as ee, o as ue } from './fieldUtils-22be41cd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null;}}class l{constructor(t){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t;}}function u(t){return new l(t)}class a{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t;}}function c(t){return new a(t)}const f=new Set;function d(t,e,r,s,o=!1,l){f.clear();for(const a in r){const s=t.get(a);if(!s)continue;const c=r[a],d=m(s,c);if(d!==c&&l&&l.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:s,originalValue:c,sanitizedValue:d}}),f.add(s.name),s&&(o||s.editable)){const t=ee(s,d);if(t)return u(ue(t,s,d));e[s.name]=d;}}if(s)for(const n of s)if(!f.has(n.name))return u(`missing required field "${n.name}"`);return null}function m(t,n){let i=n;return "string"==typeof n&&J(t)?i=parseFloat(n):null!=n&&X(t)&&"string"!=typeof n&&(i=String(n)),Z(i)}let p;function h(e,n){if(!e||!s(n))return e;if("rings"in e||"paths"in e){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,e)}return e}async function g(){return p||(p=await import('./geometryEngineJSON-f904353f.js'),p)}async function y(e,n){!s(e)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g();}

export { c, d, h, u, y };