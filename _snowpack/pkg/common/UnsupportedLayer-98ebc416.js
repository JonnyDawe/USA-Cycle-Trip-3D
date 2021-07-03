import { j as v, e } from './JSONSupport-9346590f.js';
import { s } from './promiseUtils-2ff2b194.js';
import { l } from './MultiOriginJSONSupport-859401da.js';
import { y, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { b } from './Layer-aafbe66d.js';
import { w } from './PortalLayer-722467e6.js';
import './Loadable-d16b3d7d.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './Identifiable-3ad643f8.js';
import './asyncUtils-015dfd6e.js';
import './Portal-ff63481f.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './PortalItem-4692b2a9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let u=class extends(w(l(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unsupported layer type";r&&(s$1+=" "+r),o(new s("layer:unsupported-layer-type",s$1,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([y({readOnly:!0})],u.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],u.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unsupported"})],u.prototype,"type",void 0),u=e([n("esri.layers.UnsupportedLayer")],u);var c=u;

export default c;
