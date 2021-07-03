import { e } from './JSONSupport-9346590f.js';
import './Loadable-d16b3d7d.js';
import { y, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { r } from './serviceTileInfoProperty-27440fb5.js';
import { j } from './TilemapCache-fbae412c.js';
import { k } from './SpatialReference-843b1520.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s=s=>{let l=class extends s{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null;}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new j({layer:this}):null}};return e([y({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),e([y()],l.prototype,"minScale",void 0),e([e$1("service","minScale")],l.prototype,"readMinScale",null),e([y()],l.prototype,"maxScale",void 0),e([e$1("service","maxScale")],l.prototype,"readMaxScale",null),e([y({type:k})],l.prototype,"spatialReference",void 0),e([y({readOnly:!0})],l.prototype,"supportsBlankTile",null),e([y(r)],l.prototype,"tileInfo",void 0),e([y()],l.prototype,"tilemapCache",void 0),e([e$1("service","tilemapCache",["capabilities"])],l.prototype,"readTilemapCache",null),e([y()],l.prototype,"version",void 0),l=e([n("esri.layers.mixins.ArcGISCachedService")],l),l};

export { s };
