import { t as t$1 } from './zscale-9df5d655.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(t,o,r){if(!r||!r.features||!r.hasZ)return;const f=t$1(r.geometryType,o,t.outSpatialReference);if(f)for(const e of r.features)f(e.geometry);}

export { t };
