import { s } from './promiseUtils-2ff2b194.js';
import { r, y as y$1, j as t } from './Message-70b34921.js';
import { F as o$1 } from './subclass-fe5fcf78.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile"]),l=new Set(["csv","feature","geo-rss","group","imagery","imagery-tile","kml","map-image","map-notes","ogc-feature","tile","unknown","unsupported","vector-tile","web-tile","wfs"]);function c(e){return "basemap"===e.layerContainerType?o:"operational-layers"===e.layerContainerType?l:null}function p(e){return !("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function u(e,t){if(t.restrictedWebMapWriting){const r$1=c(t);return !r(r$1)||r$1.has(e.type)&&!p(e)}return !0}function m(e,t$1){if(p(e)){const n=t("featureCollection.layers",t$1),i=n&&n[0]&&n[0].layerDefinition;i&&d(e,i);}else if("stream"===e.type){d(e,t$1.layerDefinition=t$1.layerDefinition||{});}else "group"!==e.type&&d(e,t$1);}function d(e,t){"maxScale"in e&&(t.maxScale=o$1(e.maxScale)),"minScale"in e&&(t.minScale=o$1(e.minScale));}function f(e,t){if(m(e,t),"blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=o$1(e.opacity),t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(p(e)){const n=t.featureCollection;n&&(n.showLegend=e.legendEnabled);}else t.showLegend=e.legendEnabled;}function y(r$1,i,o){if(!("write"in r$1)||!r$1.write)return o&&o.messages&&o.messages.push(new s("layer:unsupported",`Layers (${r$1.title}, ${r$1.id}) of type '${r$1.declaredClass}' cannot be persisted`,{layer:r$1})),null;if(u(r$1,o)){const e={};return r$1.write(e,o)?e:null}return r(i)&&f(r$1,i=y$1(i)),i}

export { y };
