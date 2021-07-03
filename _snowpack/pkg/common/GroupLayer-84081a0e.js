import { e as e$1, o } from './JSONSupport-9346590f.js';
import { n } from './loadAll-37e49bde.js';
import { r } from './Message-70b34921.js';
import { l as l$1 } from './MultiOriginJSONSupport-859401da.js';
import { e, y as y$1, n as n$1 } from './subclass-fe5fcf78.js';
import { b } from './Layer-aafbe66d.js';
import { t } from './BlendLayer-b9fc1ffb.js';
import { l } from './OperationalLayer-a01538e1.js';
import { w } from './PortalLayer-722467e6.js';
import { s } from './ScaleRangeLayer-9b1bf210.js';
import { c, p } from './TablesMixin-751fb22e.js';
import { y } from './writeUtils-7e5aaca1.js';
import './promiseUtils-2ff2b194.js';
import './asyncUtils-015dfd6e.js';
import './Collection-32506e74.js';
import './Loadable-d16b3d7d.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './Identifiable-3ad643f8.js';
import './TimeExtent-02acfb1c.js';
import './persistableUrlUtils-59858a7e.js';
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
import './lengthUtils-824a0190.js';
import './unitUtils-b17203be.js';
import './opacityUtils-b92214c2.js';
import './Portal-ff63481f.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './PortalItem-4692b2a9.js';
import './collectionUtils-a13e45d8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let m=class extends(t(s(l(w(c(p(l$1(b)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this);}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0);}_writeLayers(i,e,s,r$1){const o=[];if(!i)return o;i.forEach((i=>{const e=y(i,r$1.webmap?r$1.webmap.getLayerJSONFromResourceInfo(i):null,r$1);r(e)&&e.layerType&&o.push(e);})),e.layers=o;}set portalItem(i){this._set("portalItem",i);}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible);}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return n(this,(i=>{i(this.layers);}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0);}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1);}));}_enforceVisibility(i,e$1){if(!e(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e$1;}));}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i;}));}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};e$1([y$1()],m.prototype,"fullExtent",void 0),e$1([y$1({json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),e$1([o("layers")],m.prototype,"_writeLayers",null),e$1([y$1({type:["GroupLayer"]})],m.prototype,"operationalLayerType",void 0),e$1([y$1({json:{origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",null),e$1([y$1()],m.prototype,"spatialReference",void 0),e$1([y$1({json:{read:!1},readOnly:!0,value:"group"})],m.prototype,"type",void 0),e$1([y$1({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],m.prototype,"visibilityMode",null),m=e$1([n$1("esri.layers.GroupLayer")],m);var u=m;

export default u;
