import { e, p as p$1, m as u$1, j as v } from './JSONSupport-9346590f.js';
import { u } from './Handles-af859b7b.js';
import { y, n, o } from './subclass-fe5fcf78.js';
import { t } from './Message-70b34921.js';
import { d as d$1, C } from './watchUtils-06a91cc9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let l=class extends p$1{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new u,this.scheduleHandleId=0,this.pendingPromises=new Set;}destroy(){this.removeAll(),this.handles.destroy();}add(e,s,t,r=0){const d=0!=(1&r),n=++this.handleId;d||this.installSyncUpdatingWatch(e,s,n);const a=0!=(2&r)?d$1(e,s,t,d):e.watch(s,t,d);return this.handles.add(a,n),{remove:()=>this.handles.remove(n)}}addOnCollectionPropertyChange(e,s,t,r=0){const d=0!=(2&r),i=++this.handleId;return this.handles.add([C(e,s,"after-changes",this.createSyncUpdatingCallback()),C(e,s,"change",t,d?e=>{t({added:e.items,removed:[],moved:[],target:e});}:void 0)],i),{remove:()=>{this.handles.remove(i);}}}addOnCollectionChange(e,s,t=0){const r=0!=(2&t),d=++this.handleId;return this.handles.add([e.on("after-changes",this.createSyncUpdatingCallback()),e.on("change",s)],d),r&&s({added:e.items,removed:[],moved:[],target:e}),{remove:()=>{this.handles.remove(d);}}}addPromise(e){if(t(e))return e;const s=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(p)||this._set("updating",!1));}},s),this.pendingPromises.add(e),this._set("updating",!0);const t$1=()=>this.handles.remove(s);return e.then(t$1,t$1),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1);}installSyncUpdatingWatch(e,s,t){const r=this.createSyncUpdatingCallback(),d=u$1((()=>o(e,s)),r);return this.handles.add(d,t),d}createSyncUpdatingCallback(){return ()=>{this.handles.remove(p),++this.scheduleHandleId;const e=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add(v((()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(p));})),p);}}};e([y({readOnly:!0})],l.prototype,"updating",void 0),l=e([n("esri.views.support.WatchUpdatingTracking")],l);const p=-42;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a=s=>{let a=class extends s{destroy(){this.destroyed||(this.handles.destroy(),this.updatingHandles.destroy());}get handles(){return this._get("handles")||new u}get updatingHandles(){return this._get("updatingHandles")||new l}};return e([y({readOnly:!0})],a.prototype,"handles",null),e([y({readOnly:!0})],a.prototype,"updatingHandles",null),a=e([n("esri.core.HandleOwner")],a),a};let d=class extends(a(p$1)){};d=e([n("esri.core.HandleOwner")],d);

export { a, d, l };
