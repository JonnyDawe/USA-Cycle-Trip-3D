import { e, o, a } from './JSONSupport-9346590f.js';
import './Loadable-d16b3d7d.js';
import { y as y$2 } from './Message-70b34921.js';
import { y as y$1, n, z as t } from './subclass-fe5fcf78.js';
import { g } from './persistable-9892fb5d.js';
import { n as nn, f as fn } from './projection-c73dd3c4.js';
import { j } from './Polyline-ccd8fb47.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l;let y=l=class extends a{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!nn(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new t("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new j;fn(e,p,s.layer.spatialReference),r[o]=p.toJSON(s);}else r[o]=e.toJSON(s);delete r[o].spatialReference;}clone(){return new l({geometry:y$2(this.geometry),type:this.type})}};e([y$1({type:j}),g()],y.prototype,"geometry",void 0),e([o(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e([y$1({type:["clip","mask","replace"],nonNullable:!0}),g()],y.prototype,"type",void 0),y=l=e([n("esri.layers.support.SceneModification")],y);var f=y;

export { f };
