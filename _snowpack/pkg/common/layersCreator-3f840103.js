import { L } from './Collection-32506e74.js';
import './Message-70b34921.js';
import { A } from './promiseUtils-2ff2b194.js';
import { a } from './lazyLayerLoader-bc724e31.js';
import b from './PortalItem-4692b2a9.js';
import { t, l as l$1 } from './portalLayers-78c06e19.js';
import { t as t$1 } from './styleUtils-58b9b121.js';
import './JSONSupport-9346590f.js';
import './subclass-fe5fcf78.js';
import './Loadable-d16b3d7d.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './assets-73c8998f.js';
import './Portal-ff63481f.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './layersLoader-d4900878.js';
import './jsonContext-160b4385.js';
import './asyncUtils-015dfd6e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r(e,t){return n$1(e,t,"notes","Map Notes")}function o(e,t){return n$1(e,t,"route","Route Layer")}async function n$1(r,o,n,i){if(!r.layerType||"ArcGISFeatureLayer"!==r.layerType)return !1;if(r.url)return !1;if(r.featureCollectionType&&r.featureCollectionType===n)return !0;if(r.itemId){const n=new b({id:r.itemId,portal:o});return await n.load(),"Feature Collection"===n.type&&t(n,i)}return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function n(e,a,t){if(!a)return;const y=[];for(const r of a){const e=I(r,t);"GroupLayer"===r.layerType?y.push(M(e,r,t)):y.push(e);}const i=await A(y);for(const r of i)!r.value||t.filter&&!t.filter(r.value)||e.add(r.value);}const l={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},c={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},s={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},S={ArcGISFeatureLayer:"FeatureLayer"},u={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function I(e,r){return d(await T(e,r),e,r)}async function d(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&m(r)&&await G(t,r,a.context),await t$1(t,a.context),t}async function T(e,r$1){const o$1=r$1.context,n=g(o$1);let l=e.layerType||e.type;!l&&r$1&&r$1.defaultLayerType&&(l=r$1.defaultLayerType);const c=n[l];let s=c?a[c]:a.UnknownLayer;const p=o$1&&o$1.portal;if(f(e)){if(e.itemId){const r=new b({id:e.itemId,portal:p});await r.load();const y=(await l$1(r)).className||"UnknownLayer";s=a[y];}}else "ArcGISFeatureLayer"===l?await r(e,p)?s=a.MapNotesLayer:await o(e,p)?s=a.RouteLayer:m(e)&&(s=a.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?s=a.WMTSLayer:"WFS"===l&&"2.0.0"!==e.wfsInfo.version&&(s=a.UnsupportedLayer);return s()}function m(e){if("ArcGISFeatureLayer"!==e.layerType||f(e))return !1;const r=e.featureCollection;return !!(r&&r.layers&&r.layers.length>1)}function f(e){return "Feature Collection"===e.type}function g(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=s;break;case"ground":r=c;break;default:r=l;}break;default:switch(e.layerContainerType){case"basemap":r=u;break;case"tables":r=S;break;default:r=p;}}return r}async function M(r,a,t){const y=new L,i=n(y,Array.isArray(a.layers)?a.layers:[],t),L$1=await r;if(await i,"group"===L$1.type)return L$1.layers.addMany(y),L$1}async function G(e,r,t){const y=a.FeatureLayer,i=await y(),L=r.featureCollection,o=L.showLegend,n=L.layers.map((e=>{const r=new i;return r.read(e,t),null!=o&&r.read({showLegend:o},t),r}));e.layers.addMany(n);}

export { n as populateOperationalLayers };
