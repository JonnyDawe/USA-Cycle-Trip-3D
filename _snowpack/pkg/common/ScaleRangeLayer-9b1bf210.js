import { e } from './JSONSupport-9346590f.js';
import { y, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s=s=>{let t=class extends s{constructor(){super(...arguments),this.minScale=0,this.maxScale=0;}get scaleRangeId(){return `${this.minScale},${this.maxScale}`}};return e([y({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),e([y({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),e([y({readOnly:!0})],t.prototype,"scaleRangeId",null),t=e([n("esri.layers.mixins.ScaleRangeLayer")],t),t};

export { s };
