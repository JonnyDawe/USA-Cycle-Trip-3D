(self.webpackChunk=self.webpackChunk||[]).push([[3650],{3650:(i,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var s=t(78155),r=t(95629),l=t(80219),o=t(79506),a=t(88903),y=t(41290),h=t(51218),n=t(13895),d=t(15576),v=t(19438),b=t(17331),p=t(4807);t(20215),t(9612),t(40130),t(80987),t(98548),t(20736),t(4169),t(92858),t(31531),t(62121),t(91236),t(29832),t(52957),t(29126),t(4618),t(65352),t(61888),t(52109),t(6585),t(3621),t(63358),t(76326),t(31516);let c=class extends((0,h.t)((0,v.s)((0,n.l)((0,d.w)((0,b.c)((0,b.p)((0,o.l)(y.b)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(i,e,t,s){const r=[];if(!i)return r;i.forEach((i=>{const e=(0,p.y)(i,s.webmap?s.webmap.getLayerJSONFromResourceInfo(i):null,s);(0,l.r)(e)&&e.layerType&&r.push(e)})),e.layers=r}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return(0,r.n)(this,(i=>{i(this.layers)}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1)}))}_enforceVisibility(i,e){if(!(0,a.e)(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e}))}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i}))}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};(0,s.e)([(0,a.y)()],c.prototype,"fullExtent",void 0),(0,s.e)([(0,a.y)({json:{read:!1,write:{ignoreOrigin:!0}}})],c.prototype,"layers",void 0),(0,s.e)([(0,s.o)("layers")],c.prototype,"_writeLayers",null),(0,s.e)([(0,a.y)({type:["GroupLayer"]})],c.prototype,"operationalLayerType",void 0),(0,s.e)([(0,a.y)({json:{origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"portalItem",null),(0,s.e)([(0,a.y)()],c.prototype,"spatialReference",void 0),(0,s.e)([(0,a.y)({json:{read:!1},readOnly:!0,value:"group"})],c.prototype,"type",void 0),(0,s.e)([(0,a.y)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],c.prototype,"visibilityMode",null),c=(0,s.e)([(0,a.n)("esri.layers.GroupLayer")],c);const u=c}}]);