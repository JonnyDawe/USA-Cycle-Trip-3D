import { e } from './JSONSupport-9346590f.js';
import './Loadable-d16b3d7d.js';
import { u } from './Handles-af859b7b.js';
import { y, n as n$1 } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { b } from './TileTreeDebugger-3cb920ad.js';
import { l } from './HandleOwner-fbf91095.js';
import { j } from './Polyline-ccd8fb47.js';
import './promiseUtils-2ff2b194.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './Collection-32506e74.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './Graphic-bb07b7e4.js';
import './PopupTemplate-d97f5e88.js';
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
import './watchUtils-06a91cc9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p=class extends b{constructor(e){super(e),this.watchUpdatingTracking=new l,this.handles=new u;}initialize(){this.handles.add(this.view.featureTiles.addClient()),this.watchUpdatingTracking.addOnCollectionPropertyChange(this.view.featureTiles,"tiles",(()=>this.update()),2);}destroy(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy();}getTiles(){const e=e=>{const[t,r,s]=e.lij;return j.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(t,r,s))};return this.view.featureTiles.tiles.toArray().sort(((e,t)=>e.loadPriority-t.loadPriority)).map((t=>({...t,geometry:e(t)})))}};e([y({readOnly:!0})],p.prototype,"watchUpdatingTracking",void 0),e([y({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],p.prototype,"updating",void 0),p=e([n$1("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],p);var n=p;

export default n;
export { p as FeatureTileTree3DDebugger };
