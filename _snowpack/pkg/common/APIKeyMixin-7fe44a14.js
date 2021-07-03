import { e } from './JSONSupport-9346590f.js';
import { y, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(e){return "portalItem"in e}const i=i=>{let o=class extends i{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):t(this)?null==(e=this.portalItem)?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"));}};return e([y({type:String})],o.prototype,"apiKey",null),o=e([n("esri.layers.mixins.APIKeyMixin")],o),o};

export { i };
