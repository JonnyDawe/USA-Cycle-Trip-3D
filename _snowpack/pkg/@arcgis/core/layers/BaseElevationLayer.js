import { e } from '../../../common/JSONSupport-9346590f.js';
import '../../../common/Loadable-d16b3d7d.js';
import { s } from '../../../common/promiseUtils-2ff2b194.js';
import { y, n } from '../../../common/subclass-fe5fcf78.js';
import '../../../common/Message-70b34921.js';
import { K } from '../../../common/aaBoundingRect-68336c41.js';
import { b } from '../../../common/Layer-aafbe66d.js';
import { S } from '../../../common/TileInfo-c32d8db8.js';
import { k } from '../../../common/SpatialReference-843b1520.js';
import { M } from '../../../common/Polyline-ccd8fb47.js';
import '../../../common/Point-ee7951c3.js';
import '../../../common/reader-fa0f173d.js';
import '../../../common/jsonMap-e142bd84.js';
import '../../../common/Identifiable-3ad643f8.js';
import '../../../common/unitUtils-b17203be.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l={id:"0/0/0",level:0,row:0,col:0,extent:null};let c=class extends b{constructor(){super(...arguments),this.tileInfo=S.create({spatialReference:k.WebMercator,size:256}),this.fullExtent=new M(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,k.WebMercator),this.spatialReference=k.WebMercator,this.type="base-elevation";}getTileBounds(e,t,r,o){const s=o||K;return l.level=e,l.row=t,l.col=r,l.extent=s,this.tileInfo.updateTileInfo(l),l.extent=null,s}fetchTile(){throw new s("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented")}queryElevation(e,t){return this._importElevationQuery().then((r=>(new r.ElevationQuery).query(this,e,t)))}createElevationSampler(e,t){return this._importElevationQuery().then((r=>(new r.ElevationQuery).createSampler(this,e,t)))}_importElevationQuery(){return import('../../../common/ElevationQuery-df4ff059.js')}};e([y({type:S})],c.prototype,"tileInfo",void 0),e([y({type:["show","hide"]})],c.prototype,"listMode",void 0),e([y()],c.prototype,"fullExtent",void 0),e([y()],c.prototype,"spatialReference",void 0),e([y({readOnly:!0,value:"base-elevation"})],c.prototype,"type",void 0),c=e([n("esri.layers.BaseElevationLayer")],c);var m=c;

export default m;
