import './Loadable-d16b3d7d.js';
import { r } from './Message-70b34921.js';
import { G } from './unitUtils-b17203be.js';
import { M } from './Polyline-ccd8fb47.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a(t,n,a,o=new M){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=r(o)&&!o.equals(a.spatialReference)?G(o)/G(a.spatialReference):n*i;}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}new M;

export { a };
