import { x, g } from './Point-ee7951c3.js';
import { projectGeometry as n } from './geometryServiceUtils-83e1d118.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(t){const l=t.view.spatialReference,s=t.layer.fullExtent,i=s&&s.spatialReference;return i?i.equals(l)?Promise.resolve(s.clone()):x(i,l)?Promise.resolve(g(s,l)):t.view.state.isLocal?n(s,l,t.layer.portalItem).then((e=>!t.destroyed&&e?e:void 0)).catch((()=>null)):Promise.resolve(null):Promise.resolve(null)}

export { t };
