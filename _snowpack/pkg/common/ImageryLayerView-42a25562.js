import { e } from './JSONSupport-9346590f.js';
import { s } from './promiseUtils-2ff2b194.js';
import { r } from './Message-70b34921.js';
import { y, n } from './subclass-fe5fcf78.js';
import { b as b$1 } from './Point-ee7951c3.js';
import { u as u$1 } from './OperationalLayer-a01538e1.js';
import { b } from './Query-619f76b0.js';
import { d } from './popupUtils-fde61b0c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,o){const{layer:s$1}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s$1});const{popupEnabled:i}=s$1,u=d(s$1,o);if(!i||!r(u))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields(),c=new b;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new b$1(l,l,this.view.spatialReference):new b$1(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},d$1={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:w,signal:r(o)?o.signal:null};return s$1.queryVisibleRasters(c,d$1).then((e=>e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return e([y()],m.prototype,"layer",void 0),e([y()],m.prototype,"suspended",void 0),e([y(u$1)],m.prototype,"timeExtent",void 0),e([y()],m.prototype,"view",void 0),m=e([n("esri.views.layers.ImageryLayerView")],m),m};

export { u };
