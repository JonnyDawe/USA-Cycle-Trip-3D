import { e } from './JSONSupport-9346590f.js';
import { d } from './HandleOwner-fbf91095.js';
import { y, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s=class extends d{initialize(){}destroy(){}get supportsTileUpdates(){return !1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};e([y({readOnly:!0})],s.prototype,"supportsTileUpdates",null),e([y({constructOnly:!0})],s.prototype,"remoteClient",void 0),e([y({constructOnly:!0})],s.prototype,"service",void 0),e([y()],s.prototype,"spatialReference",null),e([y({constructOnly:!0})],s.prototype,"tileInfo",void 0),e([y({constructOnly:!0})],s.prototype,"tileStore",void 0),s=e([n("esri.views.2d.layers.features.processors.BaseProcessor")],s);var p=s;

export { p };
