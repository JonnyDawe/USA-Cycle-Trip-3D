import './FramebufferObject-238df962.js';
import './Message-70b34921.js';
import { r } from './Texture-454f8135.js';
import './promiseUtils-2ff2b194.js';
import './mathUtils-a477cc74.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(){this._size=[0,0];}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null);}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:l,painter:o}=e,{amount:a}=r,n=l.gl,h=this._layerFBOTexture;l.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,h),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!1),l.setDepthTestEnabled(!1),l.setClearColor(0,0,0,0),l.clear(n.COLOR_BUFFER_BIT),o.blitTexture(l,h,9728,a);}_createOrResizeResources(t,r$1,s){const{context:i}=t;this._layerFBOTexture&&this._size[0]===r$1&&this._size[1]===s||(this._size[0]=r$1,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(r$1,s):this._layerFBOTexture=new r(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:r$1,height:s}));}}

export { t as Opacity };
