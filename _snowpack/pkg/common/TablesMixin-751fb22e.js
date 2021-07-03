import { e } from './JSONSupport-9346590f.js';
import { L } from './Collection-32506e74.js';
import { n as n$3 } from './collectionUtils-a13e45d8.js';
import { n as n$1 } from './Message-70b34921.js';
import { U } from './promiseUtils-2ff2b194.js';
import { y as y$1, n as n$2 } from './subclass-fe5fcf78.js';
import { b } from './Layer-aafbe66d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l$1(e){return e&&"group"===e.type}function d(e,r,t){let s,o;if(e)for(let i=0,a=e.length;i<a;i++){if(s=e.getItemAt(i),s[r]===t)return s;if(l$1(s)&&(o=d(s.layers,r,t),o))return o}}const y=n$1.getLogger("esri.support.LayersMixin"),p$1=s=>{let l=class extends s{constructor(...e){super(...e),this.layers=new L;const t=e=>{e.parent&&"remove"in e.parent&&e.parent.remove(e);},s=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||y.error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`);},o=e=>{e.parent=null,this.layerRemoved(e);};this.layers.on("before-add",(e=>t(e.item))),this.layers.on("after-add",(e=>s(e.item))),this.layers.on("after-remove",(e=>o(e.item)));}destroy(){const e=this.layers.removeAll();for(const r of e)this.layerRemoved(r),r.destroy();this.layers.destroy();}set layers(e){this._set("layers",n$3(e,this._get("layers")));}add(e,r){const t=this.layers;if(r=t.getNextIndex(r),e instanceof b){const s=e;s.parent===this?this.reorder(s,r):t.add(s,r);}else U(e)?e.then((e=>{this.destroyed||this.add(e,r);})):y.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.");}addMany(e,r){const t=this.layers;r=t.getNextIndex(r),e.slice().forEach((e=>{e.parent!==this?(t.add(e,r),r+=1):this.reorder(e,r);}));}findLayerById(e){return d(this.layers,"id",e)}findLayerByUid(e){return d(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,r){return this.layers.reorder(e,r)}layerAdded(e){}layerRemoved(e){}};return e([y$1()],l.prototype,"layers",null),l=e([n$2("esri.support.LayersMixin")],l),l};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n="esri.support.TablesMixin",a=n$1.getLogger(n);function l(t){return t&&"group"===t.type}function p(t,e,r){if(t)for(let s=0,o=t.length;s<o;s++){const o=t.getItemAt(s);if(o[e]===r)return o;if(l(o)){const t=p(o.tables,e,r);if(t)return t}}}const c=s=>{let l=class extends s{constructor(...t){super(...t),this.tables=new L,this.tables.on("after-add",(t=>{const e=t.item;e.parent&&e.parent!==this&&"tables"in e.parent&&e.parent.tables.remove(e),e.parent=this,"feature"!==e.type&&a.error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as a table and will therefore be ignored.`);})),this.tables.on("after-remove",(t=>{t.item.parent=null;}));}destroy(){const t=this.tables.removeAll();for(const e of t)e.destroy();this.tables.destroy();}set tables(t){this._set("tables",n$3(t,this._get("tables")));}findTableById(t){return p(this.tables,"id",t)}findTableByUid(t){return p(this.tables,"uid",t)}};return e([y$1()],l.prototype,"tables",null),l=e([n$2(n)],l),l};

export { c, p$1 as p };
