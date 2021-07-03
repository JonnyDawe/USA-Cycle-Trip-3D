import { e as e$1 } from './JSONSupport-9346590f.js';
import { n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { L as L$1 } from './Loadable-d16b3d7d.js';
import { u, d, a as c, p as p$2, f, o } from './networkService-116d4dd6.js';
import { L } from './normalizeUtils-5edbbb73.js';
import { e, p as p$3 } from './Task-41e0c8b8.js';
import './promiseUtils-2ff2b194.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './enumeration-7d0c165d.js';
import './Graphic-bb07b7e4.js';
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
import './jsonUtils-f0a19240.js';
import './FeatureSet-d8329cbc.js';
import './Field-728fb193.js';
import './fieldType-6799091f.js';
import './GPMessage-6f6d167d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p$1=o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});async function m(r,m,l){const c$1=[],f$1=[],y={},B={},h=e(r);return m.stops&&m.stops.features&&u(m.stops.features,f$1,"stops.features",y),m.pointBarriers&&m.pointBarriers.features&&u(m.pointBarriers.features,f$1,"pointBarriers.features",y),m.polylineBarriers&&m.polylineBarriers.features&&u(m.polylineBarriers.features,f$1,"polylineBarriers.features",y),m.polygonBarriers&&m.polygonBarriers.features&&u(m.polygonBarriers.features,f$1,"polygonBarriers.features",y),L(f$1).then((e=>{for(const r in y){const t=y[r];c$1.push(r),B[r]=e.slice(t[0],t[1]);}return d(B,c$1)?c(h.path):Promise.resolve({dontCheck:!0})})).then((r=>{("dontCheck"in r?r.dontCheck:r.hasZ)||p$2(B,c$1);for(const e in B)B[e].forEach(((r,t)=>{m.get(e)[t].geometry=r;}));const t={...l,query:{...h.query,...p$1.toQueryParams(m),f:"json"}},{path:s}=h,o="/solve",i=s.endsWith(o)?s:s+o;return L$1(i,t)})).then((e=>f(e)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t=class extends p$3{constructor(r){super(r);}solve(r,s){return m(this.url,r,s)}};t=e$1([n("esri.tasks.RouteTask")],t);var p=t;

export default p;
