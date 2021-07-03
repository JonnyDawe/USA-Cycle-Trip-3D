import { u } from './SimpleLineSymbol-9959d1ea.js';
import { o as o$1 } from './FramebufferObject-238df962.js';
import './Message-70b34921.js';
import { r as r$1 } from './Texture-454f8135.js';
import { r } from './brushes-b53a5560.js';
import './JSONSupport-9346590f.js';
import './subclass-fe5fcf78.js';
import './promiseUtils-2ff2b194.js';
import './jsonMap-e142bd84.js';
import './enumeration-7d0c165d.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';
import './reader-fa0f173d.js';
import './definitions-8237c146.js';
import './rasterUtils-8b815ad2.js';
import './Utils-12055aa8.js';
import './ShaderCompiler-b2adc15a.js';
import './DefaultUI-99d89841.js';
import './Handles-af859b7b.js';
import './Collection-32506e74.js';
import './Loadable-d16b3d7d.js';
import './Polyline-ccd8fb47.js';
import './Point-ee7951c3.js';
import './SpatialReference-843b1520.js';
import './watchUtils-06a91cc9.js';
import './Map-566c621c.js';
import './Basemap-ad33b4b0.js';
import './collectionUtils-a13e45d8.js';
import './loadAll-37e49bde.js';
import './asyncUtils-015dfd6e.js';
import './Portal-ff63481f.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './PortalItem-4692b2a9.js';
import './writeUtils-7e5aaca1.js';
import './compilerUtils-7bbb76dc.js';
import './opacityUtils-b92214c2.js';
import './CollectionFlattener-af542a66.js';
import './HandleOwner-fbf91095.js';
import './basemapUtils-9ae6960d.js';
import './TablesMixin-751fb22e.js';
import './Layer-aafbe66d.js';
import './Identifiable-3ad643f8.js';
import './TimeExtent-02acfb1c.js';
import './PopupTemplate-d97f5e88.js';
import './fieldUtils-22be41cd.js';
import './HeightModelInfo-992659fb.js';
import './unitUtils-b17203be.js';
import './GraphicsCollection-60679841.js';
import './Graphic-bb07b7e4.js';
import './symbols-9e680ec7.js';
import './persistableUrlUtils-59858a7e.js';
import './uid-6beaca4c.js';
import './jsonUtils-f0a19240.js';
import './Queue-a5bdb7c1.js';
import './widget-734a78a2.js';
import './uuid-630c0c55.js';
import './QueryTask-55cf149f.js';
import './Query-619f76b0.js';
import './Field-728fb193.js';
import './fieldType-6799091f.js';
import './Task-41e0c8b8.js';
import './query-de9ba206.js';
import './normalizeUtils-5edbbb73.js';
import './pbfQueryUtils-9ef2116f.js';
import './pbf-9fd5cf83.js';
import './OptimizedFeature-ccef5b1d.js';
import './OptimizedFeatureSet-be12a9b8.js';
import './queryZScale-688c1e0e.js';
import './zscale-9df5d655.js';
import './TopFeaturesQuery-b22907ac.js';
import './FeatureSet-d8329cbc.js';
import './featureConversionUtils-3ad98dca.js';
import './FeatureLayer-a1f2dd15.js';
import './UniqueValueRenderer-260b50e9.js';
import './jsonUtils-4c6963ee.js';
import './ColorStop-ed1033bb.js';
import './diffUtils-530d997b.js';
import './sizeVariableUtils-6d1564c8.js';
import './visualVariableUtils-86a9e524.js';
import './lengthUtils-824a0190.js';
import './styleUtils-8b593a34.js';
import './jsonUtils-cb46c967.js';
import './LRUCache-eed24cc2.js';
import './MemCache-b33cfc4b.js';
import './MultiOriginJSONSupport-859401da.js';
import './workers-bd1ea274.js';
import './APIKeyMixin-7fe44a14.js';
import './ArcGISService-32a080a6.js';
import './arcgisLayerUrl-cb5a8728.js';
import './BlendLayer-b9fc1ffb.js';
import './CustomParametersMixin-79fc7530.js';
import './OperationalLayer-a01538e1.js';
import './PortalLayer-722467e6.js';
import './RefreshableLayer-a609d261.js';
import './ScaleRangeLayer-9b1bf210.js';
import './TemporalLayer-f1ac30a1.js';
import './TimeInfo-ba3374ff.js';
import './labelingInfo-c6f27ee6.js';
import './LabelClass-e4354cdb.js';
import './labelUtils-7d1afc11.js';
import './defaults-31c9613a.js';
import './defaultsJSON-0467bd38.js';
import './featureReductionUtils-78800e19.js';
import './FeatureType-97537d09.js';
import './fieldProperties-4363f1e0.js';
import './FieldsIndex-f71b4f3d.js';
import './styleUtils-58b9b121.js';
import './popupUtils-5b007a8e.js';
import './utils-4028018e.js';
import './ItemCache-2457b327.js';
import './vec2f32-556b449a.js';
import './mat3-6cb40036.js';
import './vec2-513a0296.js';
import './vec2f64-3fb878b3.js';
import './capabilities-39806eb7.js';
import './config-b1f55e66.js';
import './GeometryUtils-d396765a.js';
import './MaterialKey-5b784827.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s=[1,0],o=[0,1];class a{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}};}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null);}draw(t,r$1,a){const{context:l,state:n,painter:u$1,pixelRatio:h}=t,{materialManager:p}=u$1,d=this._programDesc,c=r$1.width,m=r$1.height,_=[Math.round(c/2),Math.round(m/2)],{blurRadius:f,offsetX:B,offsetY:g,color:b}=a,F=[h*u(B/2),h*u(g/2)];this._createOrResizeResources(t,c,m,_);const w=this._horizontalBlurFBO,x=this._verticalBlurFBO;l.setStencilWriteMask(0),l.setStencilTestEnabled(!1),l.setDepthWriteEnabled(!1),l.setDepthTestEnabled(!1);const T=this._layerFBOTexture;r$1.copyToTexture(0,0,c,m,0,0,T),this._quad||(this._quad=new r(l,[-1,-1,1,-1,-1,1,1,1])),l.setViewport(0,0,_[0],_[1]);const O=this._quad;O.bind(),l.setBlendingEnabled(!1);const v=p.getProgram(t,d.blur,[{name:"radius",value:Math.ceil(f)}]);l.useProgram(v),l.bindFramebuffer(w),l.bindTexture(r$1.colorTexture,4),v.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),v.setUniform2fv("u_offset",F),v.setUniform1i("u_colorTexture",4),v.setUniform2fv("u_texSize",_),v.setUniform2fv("u_direction",s),v.setUniform1f("u_sigma",f),O.draw(),l.bindFramebuffer(x),l.bindTexture(w.colorTexture,5),v.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),v.setUniform2fv("u_offset",[0,0]),v.setUniform1i("u_colorTexture",5),v.setUniform2fv("u_direction",o),O.draw(),l.bindFramebuffer(r$1),l.setViewport(0,0,c,m);const z=p.getProgram(t,d.composite);l.useProgram(z),l.bindTexture(x.colorTexture,2),z.setUniform1i("u_blurTexture",2),l.bindTexture(T,3),z.setUniform1i("u_layerFBOTexture",3),z.setUniform4fv("u_shadowColor",[b[3]*(b[0]/255),b[3]*(b[1]/255),b[3]*(b[2]/255),b[3]]),O.draw(),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!0),l.setBlendFunction(1,771),O.unbind();}_createOrResizeResources(e,i,s,o){const{context:a}=e;this._horizontalBlurFBO&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(o[0],o[1]):this._horizontalBlurFBO=new o$1(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(o[0],o[1]):this._verticalBlurFBO=new o$1(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new r$1(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}));}}

export { a as DropShadow };
