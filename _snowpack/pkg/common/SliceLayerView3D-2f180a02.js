import { e as e$1, a as a$6, p as p$2 } from './JSONSupport-9346590f.js';
import { E as E$1 } from './promiseUtils-2ff2b194.js';
import { y as y$1, u, n as n$4 } from './subclass-fe5fcf78.js';
import { c as s, r as r$5, y as y$2, n as n$5, t as t$7, k as l$3 } from './Message-70b34921.js';
import { u as u$1 } from './Handles-af859b7b.js';
import { j as j$3 } from './watchUtils-06a91cc9.js';
import { ae as p$1, s as f$1, t as o$2, q as P$1, aj as B, ak as ps, al as ms, am as K, an as G, a5 as n$7, m as p$3 } from './SceneView-f849f26b.js';
import { b as b$4 } from './Layer-aafbe66d.js';
import { E } from './BuildingComponentSublayer-d732fe3c.js';
import './Loadable-d16b3d7d.js';
import { n as n$6 } from './compilerUtils-7bbb76dc.js';
import { j as j$2, n as n$2, _ as _$1, g as b$3, d as d$4, s as s$1, N, a as o$3 } from './mathUtils-a477cc74.js';
import { q, e as e$4 } from './mat4-8eb66d33.js';
import './vec33-d394808f.js';
import './quat-44770d30.js';
import { x as a$1, t as t$1, n as n$1, r as r$1, N as c$2, j as e, L as a$2, ap as r$2, Q as o, a as r$3, b as e$2, ab as d$3, c as t$2, d as n$3, o as o$1, h as t$3, a2 as a$3, f as t$4, aO as i$2, aj as t$5, a6 as a$4, b9 as h, bf as i$3 } from './objectResourceUtils-59d1d140.js';
import { v, c as c$3, f as f$2 } from './DefaultMaterial_COLOR_GAMMA-7c4a23ef.js';
import './mat3-6cb40036.js';
import './vec2-513a0296.js';
import './unitUtils-b17203be.js';
import './Polyline-ccd8fb47.js';
import './projection-c73dd3c4.js';
import { b as b$2, c as c$5 } from './Point-ee7951c3.js';
import './SpatialReference-843b1520.js';
import './Graphic-bb07b7e4.js';
import './dehydratedFeatures-f49828b8.js';
import { V as U$1 } from './DefaultUI-99d89841.js';
import './vec2f64-3fb878b3.js';
import { a as a$5 } from './vec4-8546ad05.js';
import './aaBoundingBox-c0155c39.js';
import './BufferView-3733efba.js';
import './Texture-454f8135.js';
import { g as g$1, e as e$3, r as r$4 } from './FramebufferObject-238df962.js';
import { c as c$4, m as m$2 } from './LineVisualElement-5e33774f.js';
import { t as t$6 } from './rasterUtils-8b815ad2.js';
import './ImageMaterialTechnique-ab4b1440.js';
import { g as g$2 } from './persistable-9892fb5d.js';
import { L } from './Collection-32506e74.js';
import { t as t$8, n as n$8 } from './collectionUtils-a13e45d8.js';
import { d as d$5 } from './LayerView-0b9de845.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
v();a$1();p$1();new b$2({x:0,y:0,z:0,spatialReference:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i$1(i){i.vertex.uniforms.add("camPos","vec3").add("perScreenPixelRatio","float").add("screenSize","float"),i.vertex.code.add(t$1`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - camPos));
return viewDirectionDistance*perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSize * computeRenderPixelSizeAt(anchor) + anchor;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(t){const c=new n$1;return c.include(r$1,{linearDepth:!1}),c.include(i$1,{}),c.include(c$2,t),c.fragment.include(e),c.vertex.uniforms.add("proj","mat4").add("view","mat4"),c.fragment.uniforms.add("color","vec4"),c.attributes.add("position","vec3"),c.varyings.add("vWorldPosition","vec3"),t.multipassTerrainEnabled&&c.varyings.add("depth","float"),t.screenSizeEnabled&&c.attributes.add("offset","vec3"),t.shadingEnabled&&(c.vertex.uniforms.add("viewNormal","mat4"),c.fragment.uniforms.add("shadedColor","vec4").add("shadingDirection","vec3"),c.attributes.add("normal","vec3"),c.varyings.add("vViewNormal","vec3")),c.vertex.code.add(t$1`
    void main(void) {
      vWorldPosition = ${t.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),t.shadingEnabled&&c.vertex.code.add(t$1`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),c.vertex.code.add(t$1`
    ${t.multipassTerrainEnabled?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),t.multipassTerrainEnabled&&(c.fragment.include(a$2),c.include(r$2,t)),c.fragment.code.add(t$1`
    void main() {
      discardBySlice(vWorldPosition);
      ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),t.shadingEnabled?c.fragment.code.add(t$1`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(color, shadedColor, shadingFactor);`):c.fragment.code.add(t$1`vec4 finalColor = color;`),c.fragment.code.add(t$1`
      if (finalColor.a < ${t$1.float(o)}) {
        discard;
      }
      ${7===t.output?t$1`gl_FragColor = vec4(finalColor.a);`:""}

      ${0===t.output?t$1`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${t.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),c}Object.freeze({__proto__:null,build:t});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class j$1 extends e$2{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}e$1([r$3({count:8})],j$1.prototype,"output",void 0),e$1([r$3({count:3})],j$1.prototype,"cullFace",void 0),e$1([r$3()],j$1.prototype,"slicePlaneEnabled",void 0),e$1([r$3()],j$1.prototype,"transparent",void 0),e$1([r$3()],j$1.prototype,"writeDepth",void 0),e$1([r$3()],j$1.prototype,"screenSizeEnabled",void 0),e$1([r$3()],j$1.prototype,"shadingEnabled",void 0),e$1([r$3({count:4})],j$1.prototype,"transparencyPassType",void 0),e$1([r$3()],j$1.prototype,"multipassTerrainEnabled",void 0),e$1([r$3()],j$1.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
({color:[1,1,1,1],shadingTint:[0,0,0,.25],shadingDirection:j$2(n$2(),[.5,-.5,-.5]),transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,screenSizeEnabled:!1,screenSize:14,shadingEnabled:!0,...d$3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function b$1(e,t,r,n){const c=j$2(c$3.get(),e),i=j$2(c$3.get(),t),l=_$1(c$3.get(),c,i);return n[0]=c[0],n[1]=c[1],n[2]=c[2],n[3]=0,n[4]=i[0],n[5]=i[1],n[6]=i[2],n[7]=0,n[8]=l[0],n[9]=l[1],n[10]=l[2],n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
s("mac")?"Meta":"Control";const l$2=.7,n=[1,.5,0],x=2,C$1=1,S$1=[...n,l$2],U=[0,0,0,.04],b=[...n,.5];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r(){const r=new n$1;return r.extensions.add("GL_OES_standard_derivatives"),r.vertex.uniforms.add("proj","mat4").add("view","mat4"),r.attributes.add("position","vec3"),r.attributes.add("uv0","vec2"),r.varyings.add("vUV","vec2"),r.vertex.code.add(t$1`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),r.fragment.uniforms.add("backgroundColor","vec4").add("gridColor","vec4").add("ratio","float").add("gridWidth","float"),r.fragment.code.add(t$1`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
gl_FragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),r}var a=Object.freeze({__proto__:null,build:r});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class d$2 extends t$2{initializeProgram(r){const e=d$2.shader.get().build();return new n$3(r.rctx,e,o$1)}bindPass(e,i){t$3(this.program,i.camera.projectionMatrix),this.program.setUniform4fv("backgroundColor",e.backgroundColor),this.program.setUniform4fv("gridColor",e.gridColor),this.program.setUniform1f("gridWidth",e.gridWidth);}bindDraw(r){a$3(this.program,r),this.program.rebindTextures();}initializePipeline(){return g$1({blending:e$3(1,1,771,771),depthTest:{func:513},colorWrite:r$4})}}d$2.shader=new t$4(a,(()=>import('./SlicePlaneMaterial.glsl-5570b942.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class l$1 extends a$4{constructor(t){super(t,m$1);}intersect(t,r,e,i,s,o,a){return h(t,r,i,s,o,void 0,a)}createBufferWriter(){return new f$1(o$2)}getGLMaterial(t){return 0===t.output?new c$1(t):void 0}}class c$1 extends t$5{constructor(t){super(t),this._technique=new d$2(this._techniqueRep.constructionContext,null),this.updateParameters();}updateParameters(){}beginSlot(t){return 8===t}bind(t){this._technique.bindPass(this._material.params,t);}}e$1([i$2()],c$1.prototype,"_technique",void 0);const m$1={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4,...d$3};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class d$1 extends c$4{constructor(r){super(r),this._material=null,this._renderOccluded=4,this._gridWidth=1,this._gridColor=t$6(1,0,0,1),this._backgroundColor=t$6(1,0,0,1),this.applyProps(r);}get renderOccluded(){return this._renderOccluded}set renderOccluded(r){r!==this._renderOccluded&&(this._renderOccluded=r,this._updateMaterial());}get gridWidth(){return this._gridWidth}set gridWidth(r){this._gridWidth!==r&&(this._gridWidth=r,this._updateMaterial());}get gridColor(){return this._gridColor}set gridColor(r){a$5(this._gridColor,r),this._updateMaterial();}get backgroundColor(){return this._backgroundColor}set backgroundColor(r){a$5(this._backgroundColor,r),this._updateMaterial();}createExternalResources(){this._material=new l$1(this.materialParameters);}destroyExternalResources(){this._material=null;}forEachExternalMaterial(e){r$5(this._material)&&e(this._material);}createGeometries(e){if(r$5(this._material)){const r=P$1.createSquareGeometry();e.addGeometry(r,this._material);}}get materialParameters(){return {backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded}}_updateMaterial(){r$5(this._material)&&this._material.setParameterValues(this.materialParameters);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l;let c=l=class extends a$6{constructor(t){super(t),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10;}clone(){return new l({position:y$2(this.position),heading:this.heading,tilt:this.tilt,width:this.width,height:this.height})}equals(t){return this.heading===t.heading&&this.tilt===t.tilt&&r$5(this.position)&&r$5(t.position)&&this.position.equals(t.position)&&this.width===t.width&&this.height===t.height}};e$1([y$1({readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),e$1([y$1({type:b$2}),g$2()],c.prototype,"position",void 0),e$1([y$1({type:Number,nonNullable:!0,range:{min:0,max:360}}),g$2(),c$5((t=>U$1.normalize(u(t),0,!0)))],c.prototype,"heading",void 0),e$1([y$1({type:Number,nonNullable:!0,range:{min:0,max:360}}),g$2(),c$5((t=>U$1.normalize(u(t),0,!0)))],c.prototype,"tilt",void 0),e$1([y$1({type:Number,nonNullable:!0}),g$2()],c.prototype,"width",void 0),e$1([y$1({type:Number,nonNullable:!0}),g$2()],c.prototype,"height",void 0),c=l=e$1([n$4("esri.widgets.Slice.SlicePlane")],c);var d=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const Ge=n$5.getLogger("esri.views.3d.interactive.analysisTools.slice.sliceToolUtils");function xe(e,t,s){const i=t.worldUpAtPosition(e.origin,c$3.get()),r=e.basis1,o=ct(e,i),n=Math.round(o/ft)*ft;return ps(e,n-o,r,s)}function Ve(e,t){return b$1(e.basis1,e.basis2,e.origin,t)}function tt(e){return new m$2({view:e,attached:!0,color:S$1,width:C$1,writeDepthEnabled:!1,renderOccluded:4,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]]})}function st(e){return new d$1({view:e,attached:!0,backgroundColor:[...U],gridColor:b,gridWidth:4,renderOccluded:4})}function at(e,t,i,n=new d){if(t$7(e))return null;const a=r$5(n.position)?n.position:new b$2;t.fromRenderCoords(e.origin,a,i),n.position=a;const c=t.worldUpAtPosition(e.origin,c$3.get()),l=t.worldBasisAtPosition(e.origin,1,c$3.get());return n.width=2*s$1(e.basis1),n.height=2*s$1(e.basis2),n.tilt=N(ct(e,c)),n.heading=N(lt(e,c,l)),n}function ct(e,t){return i$3(t,e.basis2,e.basis1)+ft}function lt(e,t,s){return i$3(e.basis1,s,t)-ft}function mt(e,t,s=G()){return t$7(e)||t$7(e.position)?null:t.toRenderCoords(e.position,s.origin)?(t.worldBasisAtPosition(s.origin,0,s.basis1),t.worldBasisAtPosition(s.origin,1,s.basis2),B(s.basis2,s.basis1,s.origin,s.plane),ps(s,-b$3(e.heading),ms(s),s),ps(s,b$3(e.tilt),s.basis1,s),d$4(s.basis1,s.basis1,e.width/2),d$4(s.basis2,s.basis2,e.height/2),K(s),s):(Ge.error(`Failed to project slice plane position, projection from ${e.position.spatialReference.wkid} is not supported`),null)}function gt(t){switch(t.type){case"building-scene":case"csv":case"direct-line-measurement":case"area-measurement":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"kml":case"line-of-sight":case"map-notes":case"ogc-feature":case"point-cloud":case"route":case"slice":case"scene":case"stream":case"voxel":case"subtype-group":case"unknown":case"unsupported":case"wfs":case null:return !1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"imagery-tile":case"map-image":case"open-street-map":case"tile":case"vector-tile":case"wcs":case"web-tile":case"wms":case"wmts":return !0;default:return n$6(t.type),!1}}a$1();const ft=Math.PI/2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const V=n$5.getLogger("esri.views.3d.interactive.graphics.Slice.SliceController");let f=class extends p$2{constructor(e){super(e),this._handles=new u$1,this._internalChange=!1,this._currentSlicePlane=null,this.state="pending";}get ready(){return "ready"===this.state}initialize(){this._handles.add(this.layerView.layerViewData.excludedLayers.on("before-add",(e=>{const i=e.item;null!=i&&(i instanceof b$4||i instanceof E)?i instanceof b$4&&gt(i)?(V.error("excludedLayers",`Layer '${i.title}, id:${i.id}' of type '${i.type}' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead.`),e.preventDefault()):this.layerView.layerViewData.excludedLayers.includes(i)&&e.preventDefault():(V.error("excludedLayers","Invalid layer type, layer must derive from Layer or BuildingComponentSublayer"),e.preventDefault());}))),this._handles.add(j$3(this.view,"ready",(()=>this._initialize()),!0));}_initialize(){switch(this.state){case"pending":break;case"destroyed":return;case"ready":throw new Error("state error")}C(this.view,this),this._handles.add([this.layerView.layerViewData.watch("plane",(()=>{this._internalChange||this._updateSlicePlaneFromBoundedPlane(),this._updateLayerViews();}),!0),this.layerView.layerViewData.watch("excludeGroundSurface",(()=>this._updateLayerViews()),!0),this.layerView.layerViewData.excludedLayers.on("change",(()=>this._updateLayerViews())),this.layerView.watch(["active","visible"],(()=>{this._updateActiveController(),this._updateViewSlicePlane();}),!0),this.view.allLayerViews.on("change",(()=>this._updateLayerViews()))]),this._handles.add([this.analysis.watch("plane",(()=>{this._internalChange||(this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane());}),!0)],"analysis"),this._set("state","ready"),this._updateActiveController(),this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane();}destroy(){switch(this.state){case"destroyed":case"pending":return}this.layerView.active=!1,P(this.view,this),this._handles.destroy(),this.view.slicePlane=null,this.set("view",null),this._set("state","destroyed");}async whenReady(){return await j$3(this,"ready"),this}_updateBoundedPlaneFromSlicePlane(){const e=this.analysis.plane,i=this._currentSlicePlane;if(t$7(i)&&t$7(e)||r$5(i)&&r$5(e)&&e.equals(i))return;let t=null,a=null;r$5(e)&&(t=mt(e,this.view.renderCoordsHelper,G()),r$5(t)?a={heading:e.heading,tilt:e.tilt,position:e.position,width:e.width,height:e.height}:console.warn("Failed slice plane conversion.")),this._currentSlicePlane=a,r$5(t)&&!this.analysis.tiltEnabled&&xe(t,this.view.renderCoordsHelper,t),this._internalChange=!0,this.layerView.layerViewData.plane=t,this._internalChange=!1;}_updateSlicePlaneFromBoundedPlane(){const e=this.layerView.layerViewData.plane,i=at(e,this.view.renderCoordsHelper,this.view.spatialReference,new d);let t=null;r$5(i)&&(t={heading:i.heading,tilt:i.tilt,position:i.position,width:i.width,height:i.height}),this._currentSlicePlane=t,r$5(e)&&(this.analysis.tiltEnabled||xe(e,this.view.renderCoordsHelper,e)),this._internalChange=!0,this.analysis.plane=i,this._internalChange=!1,this._updateViewSlicePlane();}_updateActiveController(){if(_)return;const e=S(this.view);if(this.layerView.active)r$5(e.activeController)&&e.activeController!==this?(_=!0,e.activeController.layerView.active=!1,_=!1):r$5(e.activeController)&&e.activeController,this._updateLayerViews(),e.activeController=this;else {if(r$5(e.activeController)&&e.activeController!==this)return;r$5(e.activeController)&&e.activeController===this&&(e.activeController=null,this._updateLayerViews());}}_updateViewSlicePlane(){"ready"===this.state&&g(this.view);}_updateLayerViews(){const e=r$5(this.layerView.layerViewData.plane)&&this.layerView.visible&&this.layerView.active,i=[],t=e=>{"layers"in e?e.layers.forEach(t):i.push(e);};this.layerView.layerViewData.excludedLayers.forEach(t),this.view.allLayerViews.forEach((t=>{"slicePlaneEnabled"in t&&(t.slicePlaneEnabled=e&&i.indexOf(t.layer)<0),"sublayerViews"in t&&t.sublayerViews.forEach((t=>{t.slicePlaneEnabled=e&&i.indexOf(t.sublayer)<0;}));})),null!=this.view.basemapTerrain&&(this.view.basemapTerrain.slicePlaneEnabled=e&&!this.layerView.layerViewData.excludeGroundSurface);}};e$1([y$1({readOnly:!0})],f.prototype,"state",void 0),e$1([y$1()],f.prototype,"view",void 0),e$1([y$1()],f.prototype,"analysis",void 0),e$1([y$1()],f.prototype,"layerView",void 0),e$1([y$1()],f.prototype,"ready",null),f=e$1([n$4("esri.views.3d.interactive.graphics.Slice.SliceController")],f);const m=new Map;let _=!1;function g(e){const i=S(e).activeController;r$5(i)&&r$5(i.layerView.layerViewData.plane)&&i.layerView.visible?e.slicePlane=i.layerView.layerViewData.plane:e.slicePlane=null;}function C(e,i){m.has(e)||m.set(e,{all:[],activeController:null}),m.get(e).all.push(i);}function S(e){return m.get(e)}function P(e,i){if(!m.has(e))throw new Error("view expected in global slice register");const t=m.get(e),a=t.all.lastIndexOf(i);if(-1===a)throw new Error("controller expected in global slice register");t.all.splice(a,1),0===t.all.length&&m.delete(e);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let j=class extends p$2{constructor(e){super(e),this._handles=new u$1,this._gridVisualElement=null,this._outlineVisualElement=null,this.state="pending";}get ready(){return "ready"===this.state}set showGrid(e){this._set("showGrid",e),this._updateMaterials();}set editable(e){this._set("editable",e),this._updateMaterials();}initialize(){this._initialize();}async _initialize(){switch(this.state){case"pending":break;case"destroyed":return;case"ready":throw new Error("state error")}if(await j$3(this.view,"ready",!0),t$7(this.layerView.layerViewData))throw new Error("expected internal object to be valid");this._gridVisualElement=st(this.view),this._outlineVisualElement=tt(this.view),this._handles.add([this.analysis.watch("opacity",(()=>this._updateMaterials()),!0)],"analysis"),this._handles.add([this.layerView.watch("visible",(()=>this._updateMaterials()),!0),this.layerView.layerViewData.watch("plane",(()=>this._updatePlane()),!0),this.layerView.watch("active",(()=>this._updateMaterials()),!0)],"internal"),this._updatePlane(),this._set("state","ready");}destroy(){switch(this.state){case"destroyed":case"pending":return}this._handles.destroy(),this._gridVisualElement=l$3(this._gridVisualElement),this._outlineVisualElement=l$3(this._outlineVisualElement),this.set("view",null),this._set("state","destroyed");}async whenReady(){return await j$3(this,"ready"),this}_update(){switch(this.state){case"pending":case"destroyed":return}}_updatePlane(){const e=this.layerView.layerViewData.plane,t=r$5(e)?Ve(e,f$2.get()):null;if(this._outlineVisualElement.width=C$1,r$5(e)){const i=o$3(c$3.get(),s$1(e.basis1),s$1(e.basis2),1),s=q(f$2.get(),i),a=e$4(s,t,s);this._outlineVisualElement.transform=a,this._gridVisualElement.transform=a;}this._updateMaterials();}_updateMaterials(){const e=this.layerView.layerViewData.plane&&this.analysis.visible,t=this.layerView.active,i=[S$1[0],S$1[1],S$1[2],S$1[3]];this._outlineVisualElement.color=i,this._outlineVisualElement.width=this.editable?C$1:x,this._outlineVisualElement.stipplePattern=t?null:n$7(5);const s=[U[0],U[1],U[2],U[3]],a=!!r$5(this.layerView.layerViewData)&&this.showGrid?b:[0,0,0,0];this._gridVisualElement.backgroundColor=s,this._gridVisualElement.gridColor=a,this._gridVisualElement.visible=e,this._outlineVisualElement.visible=e;}};e$1([y$1({readOnly:!0})],j.prototype,"state",void 0),e$1([y$1()],j.prototype,"view",void 0),e$1([y$1()],j.prototype,"analysis",void 0),e$1([y$1()],j.prototype,"layerView",void 0),e$1([y$1()],j.prototype,"ready",null),e$1([y$1({value:!1})],j.prototype,"showGrid",null),e$1([y$1({value:!0})],j.prototype,"editable",null),j=e$1([n$4("esri.views.3d.interactive.graphics.Slice.SliceView")],j);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let i=class extends p$2{constructor(){super(...arguments),this.plane=null,this.excludeGroundSurface=!1;}get excludedLayers(){return this._get("excludedLayers")||new L}set excludedLayers(e){this._set("excludedLayers",n$8(e,this._get("excludedLayers")));}};e$1([y$1()],i.prototype,"plane",void 0),e$1([y$1()],i.prototype,"excludeGroundSurface",void 0),e$1([y$1({cast:t$8})],i.prototype,"excludedLayers",null),i=e$1([n$4("esri.views.3d.interactive.graphics.Slice.SliceInternal")],i);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let y=class extends(p$3(d$5)){constructor(){super(...arguments),this.type="slice-3d",this.analysisView=null,this.analysisController=null,this._initialized=E$1(),this.layerViewData=new i,this.active=!0,this.showGrid=!1,this.editable=!1;}initialize(){this.analysisView=new j({view:this.view,analysis:this.layer,layerView:this}),this.analysisController=new f({view:this.view,analysis:this.layer,layerView:this}),this._initialized.resolve();}destroy(){this.analysisView.destroy(),this.analysisView=null,this.analysisController.destroy(),this.analysisController=null;}async when(){return this.destroyed?null:(await this._initialized.promise,this.destroyed?null:(await this.analysisView.whenReady(),this.destroyed?null:(await this.analysisController.whenReady(),this)))}get testData(){return {view:this.analysisView,controller:this.analysisController}}};e$1([y$1()],y.prototype,"type",void 0),e$1([y$1()],y.prototype,"layerViewData",void 0),e$1([y$1()],y.prototype,"layer",void 0),e$1([y$1()],y.prototype,"active",void 0),e$1([y$1({aliasOf:"analysisView.showGrid"})],y.prototype,"showGrid",void 0),e$1([y$1({aliasOf:"analysisView.editable"})],y.prototype,"editable",void 0),y=e$1([n$4("esri.views.3d.layers.SliceLayerView3D")],y);var p=y;

var SliceLayerView3D = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': p,
  get SliceLayerView3D () { return y; }
});

export { SliceLayerView3D as S, r };
