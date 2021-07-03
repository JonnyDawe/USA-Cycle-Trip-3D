import { e } from './JSONSupport-9346590f.js';
import { h } from './Graphic-bb07b7e4.js';
import { L } from './Collection-32506e74.js';
import { t, n as n$2 } from './collectionUtils-a13e45d8.js';
import { n } from './Message-70b34921.js';
import { y, n as n$1 } from './subclass-fe5fcf78.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p=L.ofType(h);n.getLogger("esri.support.GraphicsCollection");let a=class extends p{constructor(e){super(e),this.on("before-add",(e=>{e.item||e.preventDefault();})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(({item:e})=>{e.layer=null;}));}destroy(){this._unownAll();}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._unownAll(),this._set("owner",e),this._ownAll());}_createNewInstance(e){return new p(e)}_ownAll(){this.items.forEach((e=>this._own(e)));}_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner;}_unownAll(){this.items.forEach((e=>this._unown(e)));}_unown(e){e.layer===this.owner&&(e.layer=null);}};e([y()],a.prototype,"owner",null),a=e([n$1("esri.support.GraphicsCollection")],a);const m=(e="graphics")=>({type:a,cast:t,set(o){const r=n$2(o,this._get(e),a);r.owner=this,this._set(e,r);}});var u=a;

export { a, m, u };
