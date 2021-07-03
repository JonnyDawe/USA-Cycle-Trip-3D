import { p as p$1, e } from './JSONSupport-9346590f.js';
import { d as n, n as n$1 } from './Loadable-d16b3d7d.js';
import { a } from './HandleOwner-fbf91095.js';
import { r } from './Identifiable-3ad643f8.js';
import { n as n$2 } from './Message-70b34921.js';
import { y, n as n$3 } from './subclass-fe5fcf78.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p=class extends(a(r(n(n$1.EventedMixin(p$1))))){constructor(e){super(e),this.layer=null,this.parent=null;}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer&&this.layer.title||"no title";throw n$2.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e),e}}));}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return !this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return !this.suspended&&!0===this.layer.legendEnabled}get updating(){return !!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return !0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible");}canResume(){return !this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return !1}};e([y()],p.prototype,"fullOpacity",null),e([y()],p.prototype,"layer",void 0),e([y()],p.prototype,"parent",void 0),e([y({readOnly:!0})],p.prototype,"suspended",null),e([y({readOnly:!0})],p.prototype,"suspendInfo",null),e([y({readOnly:!0})],p.prototype,"legendEnabled",null),e([y({type:Boolean,readOnly:!0})],p.prototype,"updating",null),e([y({readOnly:!0})],p.prototype,"updatingProgress",null),e([y()],p.prototype,"visible",null),p=e([n$3("esri.views.layers.LayerView")],p);var d=p;

export { d };
