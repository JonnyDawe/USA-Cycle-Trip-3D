import { e } from './JSONSupport-9346590f.js';
import { s, A } from './promiseUtils-2ff2b194.js';
import { r } from './Message-70b34921.js';
import { y, n } from './subclass-fe5fcf78.js';
import { u } from './OperationalLayer-a01538e1.js';
import { n as n$1 } from './ExportImageParameters-4acfb7aa.js';
import { s as s$1 } from './clickToleranceUtils-30a0811c.js';
import { a } from './fieldUtils-22be41cd.js';
import { t, d } from './popupUtils-fde61b0c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c=c=>{let y$1=class extends c{initialize(){this.exportImageParameters=new n$1({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,s$2){const{layer:a}=this;if(!e)return Promise.reject(new s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const p=this.get("view.scale"),i=[],l=async e=>{const r$1=0===e.minScale||p<=e.minScale,o=0===e.maxScale||p>=e.maxScale;if(e.visible&&r$1&&o)if(e.sublayers)e.sublayers.forEach(l);else if(e.popupEnabled){const r$1=d(e,{...s$2,defaultPopupTemplateEnabled:!1});r(r$1)&&i.unshift({sublayer:e,popupTemplate:r$1});}},c=a.sublayers.toArray().reverse().map(l);await Promise.all(c);const y=i.map((async({sublayer:r$1,popupTemplate:o})=>{await r$1.load().catch((()=>{}));const a=r$1.createQuery(),p=r(s$2)?s$2.event:null,i=s$1({renderer:r$1.renderer,event:p}),l=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=l,a.outFields=await t(r$1,o);const u=await this._loadArcadeModules(o);u&&u.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=l.width/i);return (await r$1.queryFeatures(a)).features}));return (await A(y)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return a()}};return e([y()],y$1.prototype,"exportImageParameters",void 0),e([y({readOnly:!0})],y$1.prototype,"exportImageVersion",null),e([y()],y$1.prototype,"layer",void 0),e([y()],y$1.prototype,"suspended",void 0),e([y(u)],y$1.prototype,"timeExtent",void 0),y$1=e([n("esri.views.layers.MapImageLayerView")],y$1),y$1};

export { c };