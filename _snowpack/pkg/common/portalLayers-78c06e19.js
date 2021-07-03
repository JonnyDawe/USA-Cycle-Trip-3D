import { s } from './promiseUtils-2ff2b194.js';
import { a } from './lazyLayerLoader-bc724e31.js';
import b from './PortalItem-4692b2a9.js';
import { m as m$1, h as h$1, f as f$1, n } from './layersLoader-d4900878.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(e,t){return !!e.typeKeywords&&e.typeKeywords.indexOf(t)>-1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i(e){return !e.portalItem||e.portalItem instanceof b||(e={...e,portalItem:new b(e.portalItem)}),u(e.portalItem).then((r=>{const t={portalItem:e.portalItem,...r.properties},a=r.constructor;return Promise.resolve(new a(t))}))}function u(e){return e.load().then(l).then(y)}function l(r){switch(r.type){case"Map Service":return m(r);case"Feature Service":return p(r);case"Feature Collection":return L(r);case"Scene Service":return f(r);case"Image Service":return d(r);case"Stream Service":return S();case"Vector Tile Service":return I();case"KML":return N();case"WFS":return h();case"WMTS":return w();case"WMS":return g();case"Feed":return v();default:return Promise.reject(new s("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type}))}}function y(e){return (0, a[e.className])().then((r=>({constructor:r,properties:e.properties})))}function m(e){return M(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}function p(e){return T(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return {className:"GroupLayer"}}))}function f(e){return T(e).then((r=>{if("object"==typeof r){const t={};let a;if(null!=r.id?(t.layerId=r.id,a=`${e.url}/layers/${r.id}`):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(r))if(-1!==e.typeKeywords.indexOf(t))return {className:r[t]}}return n(a).then((e=>{let r="SceneLayer";const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return {className:"GroupLayer"}}))}async function L(e){await e.load();if(t(e,"Map Notes"))return {className:"MapNotesLayer"};if(t(e,"Route Layer"))return {className:"RouteLayer"};const r=await e.fetchData();return 1===h$1(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function d(e){var r,t,a;await e.load();const n$1=null!=(r=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?r:[];if(n$1.indexOf("elevation 3d layer")>-1)return {className:"ElevationLayer"};if(n$1.indexOf("tiled imagery")>-1)return {className:"ImageryTileLayer"};const o=await e.fetchData(),s=null==o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===s)return {className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return {className:"ImageryLayer"};return "map"===(null==(a=(await n(e.url)).cacheType)?void 0:a.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function S(){return {className:"StreamLayer"}}function I(){return {className:"VectorTileLayer"}}function N(){return {className:"KMLLayer"}}function h(){return {className:"WFSLayer"}}function g(){return {className:"WMSLayer"}}function w(){return {className:"WMTSLayer"}}function v(){return {className:"StreamLayer"}}function M(e){return n(e.url).then((e=>e.tileInfo))}function T(e){return !e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async r=>{if("Feature Service"===e.type)return j(r=await m$1(r,e.url));return h$1(r)>0?j(r):n(e.url).then(j)}))}function j(e){return 1===h$1(e)&&{id:f$1(e)}}

var portalLayers = /*#__PURE__*/Object.freeze({
	__proto__: null,
	fromItem: i,
	selectLayerClassPath: l
});

export { l, portalLayers as p, t };
