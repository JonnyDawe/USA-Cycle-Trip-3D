import { e, a as a$1, i as i$2, o as o$1, p as p$2 } from './JSONSupport-9346590f.js';
import { U } from './Basemap-ad33b4b0.js';
import { o as o$2 } from './Color-ae84a22a.js';
import { L as L$1 } from './Collection-32506e74.js';
import { n as n$2 } from './collectionUtils-a13e45d8.js';
import { o } from './compilerUtils-7bbb76dc.js';
import { s, a as a$2, A as A$1 } from './promiseUtils-2ff2b194.js';
import { n as n$1, y } from './Message-70b34921.js';
import { f as f$1, n as n$5 } from './Loadable-d16b3d7d.js';
import { n as n$3 } from './loadAll-37e49bde.js';
import { n, y as y$1, N, d } from './subclass-fe5fcf78.js';
import { r } from './enumeration-7d0c165d.js';
import { r as r$1, n as n$4 } from './opacityUtils-b92214c2.js';
import { p as p$3 } from './CollectionFlattener-af542a66.js';
import { c as c$2 } from './Point-ee7951c3.js';
import { c as c$1, u, f as f$2 } from './basemapUtils-9ae6960d.js';
import { c, p as p$1 } from './TablesMixin-751fb22e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t$1;let p=t$1=class extends a$1{constructor(o){super(o),this.type="none";}clone(){return new t$1({type:this.type})}};e([r({none:"none",stayAbove:"stay-above"})],p.prototype,"type",void 0),p=t$1=e([n("esri.ground.NavigationConstraint")],p);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var w;const C=n$1.getLogger("esri.Ground");let S=w=class extends(i$2(f$1)){constructor(r){super(r),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new L$1;const e=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,"elevation"!==r.type&&"base-elevation"!==r.type&&C.error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`);},t=r=>{r.parent=null;};this.layers.on("after-add",(r=>e(r.item))),this.layers.on("after-remove",(r=>t(r.item)));}initialize(){this.when().catch((r=>{C.error("#load()","Failed to load ground",r);})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context);}destroy(){const r=this.layers.removeAll();for(const e of r)e.destroy();this.layers.destroy();}normalizeCtorArgs(r){return r&&"resourceInfo"in r&&(this._set("resourceInfo",r.resourceInfo),delete(r={...r}).resourceInfo),r}set layers(r){this._set("layers",n$2(r,this._get("layers")));}writeLayers(r,e,o$1,t){const i=[];r?(t={...t,layerContainerType:"ground"},r.forEach((r=>{if("write"in r){const e={};o(r)().write(e,t)&&i.push(e);}else t&&t.messages&&t.messages.push(new s("layer:unsupported",`Layers (${r.title}, ${r.id}) of type '${r.declaredClass}' cannot be persisted in the ground`,{layer:r}));})),e.layers=i):e.layers=i;}load(r){return this.addResolvingPromise(this._loadFromSource(r)),Promise.resolve(this)}loadAll(){return n$3(this,(r=>{r(this.layers);}))}async queryElevation(r,e){await this.load({signal:null==e?void 0:e.signal});const{ElevationQuery:o}=await import('./ElevationQuery-df4ff059.js');a$2(e);const t=new o,s=this.layers.filter(L).toArray();return t.queryAll(s,r,e)}async createElevationSampler(r,e){await this.load({signal:null==e?void 0:e.signal});const{ElevationQuery:o}=await import('./ElevationQuery-df4ff059.js');a$2(e);const t=new o,s=this.layers.filter(L).toArray();return t.createSamplerAll(s,r,e)}clone(){const r={opacity:this.opacity,surfaceColor:y(this.surfaceColor),navigationConstraint:y(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(r.loadStatus="loaded"),new w({resourceInfo:this.resourceInfo}).set(r)}read(r,e){this.resourceInfo||this._set("resourceInfo",{data:r,context:e}),super.read(r,e);}_loadFromSource(r){const e=this.resourceInfo;return e?this._loadLayersFromJSON(e.data,e.context,r):Promise.resolve(null)}_loadLayersFromJSON(r,e,o){const t=e&&e.origin||"web-scene",s=e&&e.portal||null,a=e&&e.url||null;return import('./layersCreator-3f840103.js').then((({populateOperationalLayers:e})=>{a$2(o);const i=[];if(r.layers&&Array.isArray(r.layers)){const o={context:{origin:t,url:a,portal:s,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};i.push(e(this.layers,r.layers,o));}return A$1(i)})).then((()=>{}))}};function I(r){return r&&"createElevationSampler"in r}function L(r){return "elevation"===r.type||I(r)}e([y$1({json:{read:!1}})],S.prototype,"layers",null),e([o$1("layers")],S.prototype,"writeLayers",null),e([y$1({readOnly:!0})],S.prototype,"resourceInfo",void 0),e([y$1({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:N,read:{reader:r$1,source:"transparency"},write:{writer:(r,e)=>{e.transparency=n$4(r);},target:"transparency"}}})],S.prototype,"opacity",void 0),e([y$1({type:o$2,json:{type:[N],write:(r,e)=>{e.surfaceColor=r.toJSON().slice(0,3);}}})],S.prototype,"surfaceColor",void 0),e([y$1({type:p,json:{write:!0}})],S.prototype,"navigationConstraint",void 0),S=w=e([n("esri.Ground")],S);var A=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i$1(i){var n;return !!(i&&i.loaded&&"capabilities"in i&&null!=i&&null!=(n=i.capabilities)&&n.operations&&"supportsEditing"in i.capabilities.operations&&!0===i.capabilities.operations.supportsEditing)&&!("editingEnabled"in i&&!i.editingEnabled)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=n$1.getLogger("esri.support.groundUtils"),t={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function a(r){let a;if("string"==typeof r)if(r in t){const o=t[r];a=new A({resourceInfo:{data:{layers:[o]}}});}else i.warn(`Unable to find ground definition for: ${r}. Try "world-elevation"`);else a=d(A,r);return a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const f=n$1.getLogger("esri.Map");let g=class extends(c(p$1(n$5.EventedMixin(p$2)))){constructor(e){super(e),this.allLayers=new p$3({getCollections:()=>{var e,r,s;return [null==(e=this.basemap)?void 0:e.baseLayers,null==(r=this.ground)?void 0:r.layers,this.layers,null==(s=this.basemap)?void 0:s.referenceLayers]},getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=new p$3({getCollections:()=>[this.tables,this.layers],getChildrenFunction:e=>{const r=[];return "tables"in e&&r.push(e.tables),"layers"in e&&r.push(e.layers),r},itemFilterFunction:e=>{const r=e.parent;return r&&"tables"in r&&r.tables.includes(e)}}),this.basemap=null,this.editableLayers=new p$3({getCollections:()=>[this.allLayers],itemFilterFunction:i$1}),this.ground=new A,this._basemapCache=c$1();}destroy(){var e,r;this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),null==(e=this.ground)||e.destroy(),null==(r=this.basemap)||r.destroy(),u(this._basemapCache),this._basemapCache=null;}castBasemap(e){return f$2(e,this._basemapCache)}castGround(e){const r=a(e);return r||(f.error("Map.ground may not be set to null or undefined"),this._get("ground"))}findLayerById(e){return this.allLayers.find((r=>r.id===e))}findTableById(e){return this.allTables.find((r=>r.id===e))}};e([y$1({readOnly:!0,dependsOn:[]})],g.prototype,"allLayers",void 0),e([y$1({readOnly:!0})],g.prototype,"allTables",void 0),e([y$1({type:U})],g.prototype,"basemap",void 0),e([c$2("basemap")],g.prototype,"castBasemap",null),e([y$1({readOnly:!0})],g.prototype,"editableLayers",void 0),e([y$1({type:A,nonNullable:!0})],g.prototype,"ground",void 0),e([c$2("ground")],g.prototype,"castGround",null),g=e([n("esri.Map")],g);var j=g;

export { A, j };
