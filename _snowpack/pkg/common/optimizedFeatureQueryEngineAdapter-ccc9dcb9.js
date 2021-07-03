import { t } from './centroid-80fbdb27.js';
import { a as t$1, t as t$2 } from './OptimizedFeature-ccef5b1d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,r)=>new t$2(r,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(e,o)=>(e.centroid||(e.centroid=t(new t$1,e.geometry,o.hasZ,o.hasM)),e.centroid)};

export { o };
