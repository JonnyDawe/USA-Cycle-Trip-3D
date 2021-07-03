import { e } from './JSONSupport-9346590f.js';
import { s, A } from './promiseUtils-2ff2b194.js';
import { r } from './Message-70b34921.js';
import { y, n } from './subclass-fe5fcf78.js';
import { s as s$1 } from './clickToleranceUtils-30a0811c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{async fetchPopupFeatures(e,s$2){const{layer:a}=this;if(!e)return Promise.reject(new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));if("tile"!==a.type)return Promise.reject(new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type}));const i=this.get("view.scale"),c=a.allSublayers.toArray().filter((e=>{const r=0===e.minScale||i<=e.minScale,t=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return A(c.map((async r$1=>{const o=r$1.createQuery(),a=r(s$2)?s$2.event:null,i=s$1({renderer:r$1.renderer,event:a});o.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),o.outFields=await r$1.popupTemplate.getRequiredFields();return (await r$1.queryFeatures(o)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([y()],c.prototype,"layer",void 0),c=e([n("esri.layers.mixins.TileLayerView")],c),c};

export { i };
