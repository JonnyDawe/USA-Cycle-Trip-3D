import { l as c$1, e } from './JSONSupport-9346590f.js';
import { L } from './Collection-32506e74.js';
import { a } from './HandleOwner-fbf91095.js';
import { r, t } from './Message-70b34921.js';
import { y, n } from './subclass-fe5fcf78.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let c=class extends(a(L)){constructor(t){super(t),this.getCollections=null;}initialize(){this.handles.add(c$1((()=>this.refresh())));}destroy(){this.getCollections=null;}refresh(){const t$1=r(this.getCollections)?this.getCollections():null;if(t(t$1))return void this.removeAll();let o=0;for(const e of t$1)r(e)&&(o=this._processCollection(o,e));this.splice(o,this.length);}_createNewInstance(t){return new L(t)}_processCollection(t,o){if(!o)return t;const e=this.itemFilterFunction?this.itemFilterFunction:t=>!!t;for(const s of o)if(s){if(e(s)){const o=this.indexOf(s,t);o>=0?o!==t&&this.reorder(s,t):this.add(s,t),++t;}if(this.getChildrenFunction){const o=this.getChildrenFunction(s);if(Array.isArray(o))for(const e of o)t=this._processCollection(t,e);else t=this._processCollection(t,o);}}return t}};e([y()],c.prototype,"getCollections",void 0),e([y()],c.prototype,"getChildrenFunction",void 0),e([y()],c.prototype,"itemFilterFunction",void 0),c=e([n("esri.core.CollectionFlattener")],c);var p=c;

export { p };
