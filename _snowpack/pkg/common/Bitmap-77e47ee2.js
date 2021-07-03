import { r as r$1, M, h, b, i } from './mat3-6cb40036.js';
import { a0 as r } from './DefaultUI-99d89841.js';
import { t } from './vec2f32-556b449a.js';
import './FramebufferObject-238df962.js';
import './Message-70b34921.js';
import { r as r$2 } from './Texture-454f8135.js';
import { a } from './DisplayObject-8d4c95bb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i;}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),l=i.pixelBlock.getAsRGBA(),h=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);h.data.set(l),e.putImageData(h,0,0);}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return {width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function d(t){return t&&"render"in t}function c(t){return t&&!("render"in t)}function l(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function x(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new r$2(t,s)}class g extends a{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:r()},this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this);}destroy(){this._texture&&(this._texture.dispose(),this._texture=null);}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t;}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture();}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t;}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context);}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender());}setTransform(h$1){const o=r$1(this.transforms.dvs),[u,a]=h$1.toScreenNoRotation([0,0],this.x,this.y),d=this.resolution/this.pixelRatio/h$1.resolution,c=d*this.width,l=d*this.height,x=Math.PI*this.rotation/180;M(o,o,t(u,a)),M(o,o,t(c/2,l/2)),h(o,o,-x),M(o,o,t(-c/2,-l/2)),b(o,o,t(c,l)),i(this.transforms.dvs,h$1.displayViewMat3,o);}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode));}bind(t,e){this._texture&&t.bindTexture(this._texture,e);}updateTexture(t){var e$1;if(!this.stage)return null==(e$1=this._texture)||e$1.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=x(t,this.sourceWidth,this.sourceHeight):this._texture=x(t));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),d(i))if(i instanceof e){const t=i.getRenderedRasterPixels();this._texture.setData(t.renderedRasterPixels);}else this._texture.setData(l(i));else c(i)&&this._texture.setData(i);this.ready();}else this._texture.setData(null);}onAttach(){this.invalidateTexture();}onDetach(){this.invalidateTexture();}}

export { e, g };
