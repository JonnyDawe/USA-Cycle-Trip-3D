import { m, j, u as u$1, M } from './Polyline-ccd8fb47.js';
import { p as p$1, b } from './Point-ee7951c3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u(o){return void 0!==o.xmin&&void 0!==o.ymin&&void 0!==o.xmax&&void 0!==o.ymax}function s(o){return void 0!==o.points}function l(o){return void 0!==o.x&&void 0!==o.y}function f(o){return void 0!==o.paths}function y(o){return void 0!==o.rings}function p(m$1){return m$1?m$1 instanceof p$1?m$1:l(m$1)?b.fromJSON(m$1):f(m$1)?m.fromJSON(m$1):y(m$1)?j.fromJSON(m$1):s(m$1)?u$1.fromJSON(m$1):u(m$1)?M.fromJSON(m$1):null:null}function d(o){return o?l(o)?"esriGeometryPoint":f(o)?"esriGeometryPolyline":y(o)?"esriGeometryPolygon":u(o)?"esriGeometryEnvelope":s(o)?"esriGeometryMultipoint":null:null}const v={esriGeometryPoint:b,esriGeometryPolyline:m,esriGeometryPolygon:j,esriGeometryEnvelope:M,esriGeometryMultipoint:u$1};function G(o){return o&&v[o]||null}

export { G, d, f, l, p, s, u, y };
