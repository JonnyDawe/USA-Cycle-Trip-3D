import { e } from './JSONSupport-9346590f.js';
import './Loadable-d16b3d7d.js';
import { d } from './watchUtils-06a91cc9.js';
import { n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { o } from './aaBoundingRect-68336c41.js';
import { b } from './TileTreeDebugger-3cb920ad.js';
import { j } from './Polyline-ccd8fb47.js';
import './promiseUtils-2ff2b194.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './Graphic-bb07b7e4.js';
import './PopupTemplate-d97f5e88.js';
import './Collection-32506e74.js';
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './Identifiable-3ad643f8.js';
import './symbols-9e680ec7.js';
import './SimpleLineSymbol-9959d1ea.js';
import './opacityUtils-b92214c2.js';
import './persistableUrlUtils-59858a7e.js';
import './collectionUtils-a13e45d8.js';
import './Portal-ff63481f.js';
import './uid-6beaca4c.js';
import './jsonUtils-f0a19240.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p=class extends b{constructor(e){super(e),this.enablePolygons=!1;}initialize(){d(this,"enabled",(e=>this.view.basemapTerrain.renderPatchBorders=e));}getTiles(){return this.view.basemapTerrain.test.getRenderedTiles().map((e=>({...e,geometry:j.fromExtent(o(e.extent,this.view.basemapTerrain.spatialReference))})))}};p=e([n("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],p);

export { p as TerrainTileTree3DDebugger };
