import { e, a } from './JSONSupport-9346590f.js';
import { y, n } from './subclass-fe5fcf78.js';
import { f as e$2 } from './Message-70b34921.js';
import { L as L$1 } from './Loadable-d16b3d7d.js';
import { i, u as u$1, d as d$1, a as c$2, p as p$2, o } from './networkService-116d4dd6.js';
import { L } from './normalizeUtils-5edbbb73.js';
import { e as e$3, p as p$3 } from './Task-41e0c8b8.js';
import { h } from './Graphic-bb07b7e4.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { k } from './SpatialReference-843b1520.js';
import { p as p$1 } from './jsonUtils-f0a19240.js';
import { b } from './Point-ee7951c3.js';
import { m, j } from './Polyline-ccd8fb47.js';
import './promiseUtils-2ff2b194.js';
import './jsonMap-e142bd84.js';
import './enumeration-7d0c165d.js';
import './FeatureSet-d8329cbc.js';
import './Field-728fb193.js';
import './fieldUtils-22be41cd.js';
import './fieldType-6799091f.js';
import './PopupTemplate-d97f5e88.js';
import './Collection-32506e74.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './Identifiable-3ad643f8.js';
import './symbols-9e680ec7.js';
import './SimpleLineSymbol-9959d1ea.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './opacityUtils-b92214c2.js';
import './persistableUrlUtils-59858a7e.js';
import './collectionUtils-a13e45d8.js';
import './Portal-ff63481f.js';
import './uid-6beaca4c.js';
import './GPMessage-6f6d167d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u(r){return r.features.map((o=>{const s=k.fromJSON(r.spatialReference),i=h.fromJSON(o);return e$2(i.geometry).spatialReference=s,i}))}function f(r){return r.features.map((e=>(e.geometry.spatialReference=r.spatialReference,p$1(e.geometry))))}let d=class extends a{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null;}readFacilities(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readIncidents(r,e){return u(e.saPolylines)}readServiceAreaPolygons(r,e){return u(e.saPolygons)}};e([y({type:[b]})],d.prototype,"facilities",void 0),e([e$1("facilities")],d.prototype,"readFacilities",null),e([y({type:[i]})],d.prototype,"messages",void 0),e([y({type:[b]})],d.prototype,"pointBarriers",void 0),e([e$1("pointBarriers",["barriers"])],d.prototype,"readPointBarriers",null),e([y({type:[m]})],d.prototype,"polylineBarriers",void 0),e([e$1("polylineBarriers")],d.prototype,"readPolylineBarriers",null),e([y({type:[j]})],d.prototype,"polygonBarriers",void 0),e([e$1("polygonBarriers")],d.prototype,"readPolygonBarriers",null),e([y({type:[h]})],d.prototype,"serviceAreaPolylines",void 0),e([e$1("serviceAreaPolylines",["saPolylines"])],d.prototype,"readIncidents",null),e([y({type:[h]})],d.prototype,"serviceAreaPolygons",void 0),e([e$1("serviceAreaPolygons",["saPolygons"])],d.prototype,"readServiceAreaPolygons",null),d=e([n("esri.rest.support.ServiceAreaSolveResult")],d);var g=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});async function c$1(e,c,f){const p=[],m=[],B={},y={},h=e$3(e);return c.facilities&&c.facilities.features&&u$1(c.facilities.features,m,"facilities.features",B),c.pointBarriers&&c.pointBarriers.features&&u$1(c.pointBarriers.features,m,"pointBarriers.features",B),c.polylineBarriers&&c.polylineBarriers.features&&u$1(c.polylineBarriers.features,m,"polylineBarriers.features",B),c.polygonBarriers&&c.polygonBarriers.features&&u$1(c.polygonBarriers.features,m,"polygonBarriers.features",B),L(m).then((r=>{for(const e in B){const t=B[e];p.push(e),y[e]=r.slice(t[0],t[1]);}return d$1(y,p)?c$2(h.path).catch((()=>({dontCheck:!0}))):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||p$2(y,p);for(const r in y)y[r].forEach(((e,t)=>{c.get(r)[t].geometry=e;}));let t={query:{...h.query,f:"json",...l.toQueryParams(c)}};return f&&(t={...f,...t}),L$1(`${h.path}/solveServiceArea`,t)})).then((r=>g.fromJSON(r.data)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p=class extends p$3{constructor(r){super(r),this.url=null;}solve(r,s){return c$1(this.url,r,s)}};e([y()],p.prototype,"url",void 0),p=e([n("esri.tasks.ServiceAreaTask")],p);var c=p;

export default c;
