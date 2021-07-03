import { e } from './JSONSupport-9346590f.js';
import { y as y$1 } from './TimeExtent-02acfb1c.js';
import { l, v, e as e$2 } from './TimeInfo-ba3374ff.js';
import { y, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { m } from './fieldUtils-22be41cd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c=f=>{let c=class extends f{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0;}readOffset(e,t){const r=t.timeInfo.exportOptions;if(!r)return null;const i=r.timeOffset,s=e$2.fromJSON(r.timeOffsetUnits);return i&&s?new l({value:i,unit:s}):null}set timeInfo(e){m(e,this.fieldsIndex),this._set("timeInfo",e);}};return e([y({type:y$1,json:{write:!1}})],c.prototype,"timeExtent",void 0),e([y({type:l})],c.prototype,"timeOffset",void 0),e([e$1("service","timeOffset",["timeInfo.exportOptions"])],c.prototype,"readOffset",null),e([y({value:null,type:v,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"timeInfo",null),e([y({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],c.prototype,"useViewTime",void 0),c=e([n("esri.layers.mixins.TemporalLayer")],c),c};

export { c };
