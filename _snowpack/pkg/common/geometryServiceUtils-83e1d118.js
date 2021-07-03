import { d as s } from './Message-70b34921.js';
import { s as s$1 } from './promiseUtils-2ff2b194.js';
import { G } from './Portal-ff63481f.js';
import { a } from './ProjectParameters-0d0884dd.js';
import './JSONSupport-9346590f.js';
import './subclass-fe5fcf78.js';
import './intl-21ab9759.js';
import './jsonMap-e142bd84.js';
import './locale-b874fc68.js';
import './Loadable-d16b3d7d.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './assets-73c8998f.js';
import './jsonUtils-f0a19240.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i(o=null,i){if(s.geometryServiceUrl){return new((await import('./GeometryService-69f6e1e5.js')).default)({url:s.geometryServiceUrl})}if(!o)throw new s$1("internal:geometry-service-url-not-configured");let n;if(n="portal"in o?o.portal||G.getDefault():o,await n.load({signal:i}),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url){return new((await import('./GeometryService-69f6e1e5.js')).default)({url:n.helperServices.geometry.url})}throw new s$1("internal:geometry-service-url-not-configured")}async function n(e,t,n=null,a$1){const l=await i(n,a$1),s=new a;s.geometries=[e],s.outSpatialReference=t;const c=await l.project(s,{signal:a$1});if(c&&Array.isArray(c)&&1===c.length)return c[0];throw new s$1("internal:geometry-service-projection-failed")}

export { i as create, n as projectGeometry };
