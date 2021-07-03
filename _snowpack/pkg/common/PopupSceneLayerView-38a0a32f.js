import { e } from './JSONSupport-9346590f.js';
import { s } from './promiseUtils-2ff2b194.js';
import { r } from './Message-70b34921.js';
import { n } from './subclass-fe5fcf78.js';
import { I, r as ce } from './fieldUtils-22be41cd.js';
import { d, t } from './popupUtils-fde61b0c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c=c=>{let u=class extends c{_validateFetchPopupFeatures(e){const{layer:s$1}=this,{popupEnabled:t}=s$1;if(!t)return new s("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s$1});return d(s$1,e)?void 0:new s("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s$1})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,r$1){const t$1=this._validateFetchPopupFeatures(r$1);if(t$1)return Promise.reject(t$1);const c=r(r$1)?r$1.clientGraphics:null;if(!c||0===c.length)return Promise.resolve([]);const u=[],n=[],l="scene"===this.layer.type&&r(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,h=I(this.layer.fieldsIndex,await t(l,d(this.layer,r$1)));await this.prepareFetchPopupFeatures(h);const y=new Set;for(const s of c)ce(h,s,y)?n.push(s):u.push(s);return 0===n.length?Promise.resolve(u):this.whenGraphicAttributes(n,[...y]).catch((()=>n)).then((e=>u.concat(e)))}};return u=e([n("esri.views.3d.layers.support.PopupSceneLayerView")],u),u};

export { c };
