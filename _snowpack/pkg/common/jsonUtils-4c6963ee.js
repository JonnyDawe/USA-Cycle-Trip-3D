import { c, b, k as d, l as b$1, y, n, S, a as h, i as y$1, m as b$2, A, o as k } from './symbols-9e680ec7.js';
import { s } from './promiseUtils-2ff2b194.js';
import { m as m$1 } from './SimpleLineSymbol-9959d1ea.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function p(p,S$1=!1,a=!1,c$1=!0){if(!p)return {symbol:null};let j;if(c(p)||p instanceof b)j=p.clone();else if("cim"===p.type)j=d.fromCIMSymbol(p);else if(p instanceof m$1)j=b$1.fromSimpleLineSymbol(p);else if(p instanceof y)j=d.fromSimpleMarkerSymbol(p);else if(p instanceof n)j=d.fromPictureMarkerSymbol(p);else if(p instanceof S)j=h.fromSimpleFillSymbol(p);else {if(!(p instanceof y$1))return {error:new s("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${p.type||p.declaredClass}' is unsupported in 3D`,{symbol:p})};j=c$1?b$2.fromTextSymbol(p):d.fromTextSymbol(p);}if(S$1&&(j.id=p.id),a&&c(j))for(let o=0;o<j.symbolLayers.length;++o)j.symbolLayers.getItemAt(o)._ignoreDrivers=!0;return {symbol:j}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(e,s,o,n){const r=m(e,{},n);r&&(s[o]=r);}function m(e,t,m){if(!e)return null;if(m&&"web-scene"===m.origin&&!(e instanceof A)&&!(e instanceof b)){const o="cim"!==e.type?p(e):{symbol:null,error:new s("symbol-conversion:unsupported-cim-symbol","CIM symbol is unsupported in web scenes",{symbol:e})};return o.symbol?o.symbol.write(t,m):(m.messages&&m.messages.push(new s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:m,error:o.error})),null)}return m&&"web-map"===m.origin&&"web-style"===e.type?(m.messages&&m.messages.push(new s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:e,context:m})),null):e.write(t,m)}function i(s,o){return k(s,null,o)}

export { i, p, t };
