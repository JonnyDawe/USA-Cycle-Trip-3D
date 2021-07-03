import { e, a } from './JSONSupport-9346590f.js';
import { y, n } from './subclass-fe5fcf78.js';
import { r } from './Message-70b34921.js';
import { L as L$1 } from './Loadable-d16b3d7d.js';
import { c as c$2, i, u, d as d$1, a as c$3, p as p$1, o } from './networkService-116d4dd6.js';
import { L } from './normalizeUtils-5edbbb73.js';
import { e as e$2, p as p$2 } from './Task-41e0c8b8.js';
import { h } from './Graphic-bb07b7e4.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { k } from './SpatialReference-843b1520.js';
import g$1 from './FeatureSet-d8329cbc.js';
import { b } from './Point-ee7951c3.js';
import { m, j as j$1 } from './Polyline-ccd8fb47.js';
import './promiseUtils-2ff2b194.js';
import './jsonMap-e142bd84.js';
import './enumeration-7d0c165d.js';
import './GPMessage-6f6d167d.js';
import './jsonUtils-f0a19240.js';
import './PopupTemplate-d97f5e88.js';
import './Collection-32506e74.js';
import './fieldUtils-22be41cd.js';
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
import './Field-728fb193.js';
import './fieldType-6799091f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function d(r$1){return r$1.features.map((o=>{const s=k.fromJSON(r$1.spatialReference),i=h.fromJSON(o);return r(i.geometry)&&(i.geometry.spatialReference=s),i}))}function f(r){return g$1.fromJSON(r).features.map((r=>r.geometry))}let g=class extends a{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null;}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return d(r)}};e([y({type:[c$2]})],g.prototype,"directions",void 0),e([y({type:[b]})],g.prototype,"facilities",void 0),e([e$1("facilities")],g.prototype,"readFacilities",null),e([y({type:[b]})],g.prototype,"incidents",void 0),e([e$1("incidents")],g.prototype,"readIncidents",null),e([y({type:[i]})],g.prototype,"messages",void 0),e([y({type:[b]})],g.prototype,"pointBarriers",void 0),e([e$1("pointBarriers",["barriers"])],g.prototype,"readPointBarriers",null),e([y({type:[m]})],g.prototype,"polylineBarriers",void 0),e([e$1("polylineBarriers")],g.prototype,"readPolylineBarriers",null),e([y({type:[j$1]})],g.prototype,"polygonBarriers",void 0),e([e$1("polygonBarriers")],g.prototype,"readPolygonBarriers",null),e([y({type:[h]})],g.prototype,"routes",void 0),e([e$1("routes")],g.prototype,"readRoutes",null),g=e([n("esri.rest.support.ClosestFacilitySolveResult")],g);var j=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function c$1(r,c,m){const f=[],p=[],y={},B={},d=e$2(r);return c.incidents&&c.incidents.features&&u(c.incidents.features,p,"incidents.features",y),c.facilities&&c.facilities.features&&u(c.facilities.features,p,"facilities.features",y),c.pointBarriers&&c.pointBarriers.features&&u(c.pointBarriers.features,p,"pointBarriers.features",y),c.polylineBarriers&&c.polylineBarriers.features&&u(c.polylineBarriers.features,p,"polylineBarriers.features",y),c.polygonBarriers&&c.polygonBarriers.features&&u(c.polygonBarriers.features,p,"polygonBarriers.features",y),L(p).then((e=>{for(const r in y){const t=y[r];f.push(r),B[r]=e.slice(t[0],t[1]);}return d$1(B,f)?c$3(d.path):Promise.resolve({dontCheck:!0})})).then((r=>{("dontCheck"in r?r.dontCheck:r.hasZ)||p$1(B,f);for(const e in B)B[e].forEach(((r,t)=>{c.get(e)[t].geometry=r;}));let t={query:{...d.query,f:"json",...l.toQueryParams(c)}};return m&&(t={...m,...t}),L$1(`${d.path}/solveClosestFacility`,t)})).then((e=>j.fromJSON(e.data)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let c=class extends p$2{constructor(r){super(r),this.url=null;}solve(r,s){return c$1(this.url,r,s)}};e([y()],c.prototype,"url",void 0),c=e([n("esri.tasks.ClosestFacilityTask")],c);var p=c;

export default p;
