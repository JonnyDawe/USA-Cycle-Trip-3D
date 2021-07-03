import { i } from './aaBoundingRect-68336c41.js';
import { g } from './Bitmap-77e47ee2.js';
import { r } from './TiledDisplayObject-38ffcb88.js';
import { g as g$1 } from './brushes-b53a5560.js';
import { I } from './Utils-12055aa8.js';
import { o } from './TileContainer-b847de65.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s extends r{constructor(e,s,r,i=null){super(e,s,r,r),this.bitmap=new g(i,"standard",!1),this.bitmap.coordScale=r,this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t);}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t);}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class n extends o{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s$1){const t=this._tileInfoView.getTileBounds(i(),s$1);return new s(s$1,t,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[g$1.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===I.MAP&&super.doRender(e);}}

export { n };
