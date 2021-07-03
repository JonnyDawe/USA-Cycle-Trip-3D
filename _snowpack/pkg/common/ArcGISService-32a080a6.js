import { e } from './JSONSupport-9346590f.js';
import { r, n as n$1 } from './Message-70b34921.js';
import { y, n } from './subclass-fe5fcf78.js';
import { d, x } from './arcgisLayerUrl-cb5a8728.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p=p=>{let c=class extends p{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=d(this.url);if(r(t)&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t);}set url(t){this._set("url",x(t,n$1.getLogger(this.declaredClass)));}};return e([y()],c.prototype,"title",null),e([y({type:String})],c.prototype,"url",null),c=e([n("esri.layers.mixins.ArcGISService")],c),c};

export { p };
