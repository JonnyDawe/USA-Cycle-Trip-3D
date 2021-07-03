import { e } from './JSONSupport-9346590f.js';
import './Loadable-d16b3d7d.js';
import { t } from './Message-70b34921.js';
import { y, n } from './subclass-fe5fcf78.js';
import { P } from './mat4-8eb66d33.js';
import { e as e$1 } from './vec33-d394808f.js';
import { h as r, I, n as n$1 } from './mathUtils-a477cc74.js';
import { x as xn } from './projection-c73dd3c4.js';
import { b } from './TileTreeDebugger-3cb920ad.js';
import { j as j$1 } from './Polyline-ccd8fb47.js';
import './promiseUtils-2ff2b194.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonMap-e142bd84.js';
import './unitUtils-b17203be.js';
import './assets-73c8998f.js';
import './aaBoundingRect-68336c41.js';
import './Color-ae84a22a.js';
import './Graphic-bb07b7e4.js';
import './PopupTemplate-d97f5e88.js';
import './Collection-32506e74.js';
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
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
let a=class extends b{constructor(e){super(e);}getTiles(){const e=this.lv.getVisibleNodes(),r=this.view.renderSpatialReference,s=this.nodeSR;return e.map((e=>h(e,r,s))).sort(((e,r)=>e.lij[0]===r.lij[0]?e.label>r.label?-1:1:e.lij[0]-r.lij[0]))}};function h(e,s,o){const i=e.serviceObb;if(t(i)||t(s))return null;P(f,i.quaternion),r(j,i.center),xn(j,o,0,j,s,0,1),f[12]=j[0],f[13]=j[1],f[14]=j[2];const l=[[],[],[]];r(j,i.halfSize),I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[0]=-j[0],I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[0]=-j[0],j[1]=-j[1],I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),r(j,i.halfSize),j[1]=-j[1],I(j,j,f),xn(j,s,0,j,o,0,1),l[0].push([j[0],j[1]]),l[1].push(l[0][0]),l[1].push(l[0][1]),r(j,i.halfSize),j[0]=-j[0],j[2]=-j[2],I(j,j,f),xn(j,s,0,j,o,0,1),l[1].push([j[0],j[1]]),r(j,i.halfSize),j[2]=-j[2],I(j,j,f),xn(j,s,0,j,o,0,1),l[1].push([j[0],j[1]]),l[2].push(l[0][0]),l[2].push(l[0][3]),r(j,i.halfSize),j[1]=-j[1],j[2]=-j[2],I(j,j,f),xn(j,s,0,j,o,0,1),l[2].push([j[0],j[1]]),l[2].push(l[1][3]);const n=new j$1({rings:l,spatialReference:o});return {lij:[e.level,e.childCount,0],label:e.id,geometry:n}}e([y({constructOnly:!0})],a.prototype,"lv",void 0),e([y({constructOnly:!0})],a.prototype,"nodeSR",void 0),a=e([n("esri.views.3d.layers.support.I3STreeDebugger")],a);const f=e$1(),j=n$1();

export { a as I3STreeDebugger };
