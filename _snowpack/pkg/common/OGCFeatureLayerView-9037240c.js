import { e } from './JSONSupport-9346590f.js';
import { s } from './promiseUtils-2ff2b194.js';
import { y, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=t=>{let a=class extends t{initialize(){const{layer:e,view:s$1}=this;e.source.supportsSpatialReference(s$1.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})));}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],a.prototype,"layer",void 0),e([y({readOnly:!0})],a.prototype,"availableFields",null),a=e([n("esri.views.layers.OGCFeatureLayerView")],a),a};

export { t };
