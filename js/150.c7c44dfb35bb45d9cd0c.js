(self.webpackChunk=self.webpackChunk||[]).push([[150],{10150:(e,t,i)=>{"use strict";i.r(t),i.d(t,{S:()=>ie,r:()=>N});var a=i(78155),r=i(20215),s=i(88903),l=i(80219),n=i(83731),o=i(36845),d=i(32422),c=i(41290),h=i(44844),u=(i(80987),i(30316)),p=i(60816),y=i(93242),g=(i(71542),i(62654),i(72105)),w=i(79679),v=(i(95186),i(67726),i(65352),i(98548),i(7571),i(20736)),m=(i(92858),i(73574),i(30665),i(71391)),_=(i(59312),i(15346)),b=(i(53185),i(65311),i(14215),i(93875)),f=i(58275),V=i(86897),C=(i(21142),i(58576)),x=i(40130),P=i(31516),E=i(50822);function S(e){e.vertex.uniforms.add("camPos","vec3").add("perScreenPixelRatio","float").add("screenSize","float"),e.vertex.code.add(g.t`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - camPos));
return viewDirectionDistance*perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSize * computeRenderPixelSizeAt(anchor) + anchor;
}`)}(0,w.v)(),(0,g.x)(),(0,d.ae)(),new v.b({x:0,y:0,z:0,spatialReference:null}),Object.freeze({__proto__:null,build:function(e){const t=new g.n;return t.include(g.r,{linearDepth:!1}),t.include(S,{}),t.include(g.N,e),t.fragment.include(g.j),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.fragment.uniforms.add("color","vec4"),t.attributes.add("position","vec3"),t.varyings.add("vWorldPosition","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),e.screenSizeEnabled&&t.attributes.add("offset","vec3"),e.shadingEnabled&&(t.vertex.uniforms.add("viewNormal","mat4"),t.fragment.uniforms.add("shadedColor","vec4").add("shadingDirection","vec3"),t.attributes.add("normal","vec3"),t.varyings.add("vViewNormal","vec3")),t.vertex.code.add(g.t`
    void main(void) {
      vWorldPosition = ${e.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),e.shadingEnabled&&t.vertex.code.add(g.t`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),t.vertex.code.add(g.t`
    ${e.multipassTerrainEnabled?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),e.multipassTerrainEnabled&&(t.fragment.include(g.L),t.include(g.ap,e)),t.fragment.code.add(g.t`
    void main() {
      discardBySlice(vWorldPosition);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),e.shadingEnabled?t.fragment.code.add(g.t`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(color, shadedColor, shadingFactor);`):t.fragment.code.add(g.t`vec4 finalColor = color;`),t.fragment.code.add(g.t`
      if (finalColor.a < ${g.t.float(g.Q)}) {
        discard;
      }
      ${7===e.output?g.t`gl_FragColor = vec4(finalColor.a);`:""}

      ${0===e.output?g.t`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),t}});class D extends g.b{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}(0,a.e)([(0,g.a)({count:8})],D.prototype,"output",void 0),(0,a.e)([(0,g.a)({count:3})],D.prototype,"cullFace",void 0),(0,a.e)([(0,g.a)()],D.prototype,"slicePlaneEnabled",void 0),(0,a.e)([(0,g.a)()],D.prototype,"transparent",void 0),(0,a.e)([(0,g.a)()],D.prototype,"writeDepth",void 0),(0,a.e)([(0,g.a)()],D.prototype,"screenSizeEnabled",void 0),(0,a.e)([(0,g.a)()],D.prototype,"shadingEnabled",void 0),(0,a.e)([(0,g.a)({count:4})],D.prototype,"transparencyPassType",void 0),(0,a.e)([(0,g.a)()],D.prototype,"multipassTerrainEnabled",void 0),(0,a.e)([(0,g.a)()],D.prototype,"cullAboveGround",void 0),(0,p.j)((0,p.n)(),[.5,-.5,-.5]),g.ab,(0,l.c)("mac");const L=[1,.5,0],z=[...L,.7],k=[0,0,0,.04],W=[...L,.5];function N(){const e=new g.n;return e.extensions.add("GL_OES_standard_derivatives"),e.vertex.uniforms.add("proj","mat4").add("view","mat4"),e.attributes.add("position","vec3"),e.attributes.add("uv0","vec2"),e.varyings.add("vUV","vec2"),e.vertex.code.add(g.t`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),e.fragment.uniforms.add("backgroundColor","vec4").add("gridColor","vec4").add("ratio","float").add("gridWidth","float"),e.fragment.code.add(g.t`void main() {
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
}`),e}var O=Object.freeze({__proto__:null,build:N});class j extends g.c{initializeProgram(e){const t=j.shader.get().build();return new g.d(e.rctx,t,g.o)}bindPass(e,t){(0,g.h)(this.program,t.camera.projectionMatrix),this.program.setUniform4fv("backgroundColor",e.backgroundColor),this.program.setUniform4fv("gridColor",e.gridColor),this.program.setUniform1f("gridWidth",e.gridWidth)}bindDraw(e){(0,g.a2)(this.program,e),this.program.rebindTextures()}initializePipeline(){return(0,b.g)({blending:(0,b.e)(1,1,771,771),depthTest:{func:513},colorWrite:b.r})}}j.shader=new g.f(O,(()=>i.e(486).then(i.bind(i,90486))));class F extends g.a6{constructor(e){super(e,M)}intersect(e,t,i,a,r,s,l){return(0,g.b9)(e,t,a,r,s,void 0,l)}createBufferWriter(){return new d.s(d.t)}getGLMaterial(e){return 0===e.output?new G(e):void 0}}class G extends g.aj{constructor(e){super(e),this._technique=new j(this._techniqueRep.constructionContext,null),this.updateParameters()}updateParameters(){}beginSlot(e){return 8===e}bind(e){this._technique.bindPass(this._material.params,e)}}(0,a.e)([(0,g.aO)()],G.prototype,"_technique",void 0);const M={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4,...g.ab};class T extends f.c{constructor(e){super(e),this._material=null,this._renderOccluded=4,this._gridWidth=1,this._gridColor=(0,V.t)(1,0,0,1),this._backgroundColor=(0,V.t)(1,0,0,1),this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(e){this._gridWidth!==e&&(this._gridWidth=e,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(e){(0,_.a)(this._gridColor,e),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){(0,_.a)(this._backgroundColor,e),this._updateMaterial()}createExternalResources(){this._material=new F(this.materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(e){(0,l.r)(this._material)&&e(this._material)}createGeometries(e){if((0,l.r)(this._material)){const t=d.q.createSquareGeometry();e.addGeometry(t,this._material)}}get materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded}}_updateMaterial(){(0,l.r)(this._material)&&this._material.setParameterValues(this.materialParameters)}}var A;let R=A=class extends a.a{constructor(e){super(e),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}clone(){return new A({position:(0,l.y)(this.position),heading:this.heading,tilt:this.tilt,width:this.width,height:this.height})}equals(e){return this.heading===e.heading&&this.tilt===e.tilt&&(0,l.r)(this.position)&&(0,l.r)(e.position)&&this.position.equals(e.position)&&this.width===e.width&&this.height===e.height}};(0,a.e)([(0,s.y)({readOnly:!0,json:{read:!1,write:!0}})],R.prototype,"type",void 0),(0,a.e)([(0,s.y)({type:v.b}),(0,C.g)()],R.prototype,"position",void 0),(0,a.e)([(0,s.y)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,C.g)(),(0,v.c)((e=>m.V.normalize((0,s.u)(e),0,!0)))],R.prototype,"heading",void 0),(0,a.e)([(0,s.y)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,C.g)(),(0,v.c)((e=>m.V.normalize((0,s.u)(e),0,!0)))],R.prototype,"tilt",void 0),(0,a.e)([(0,s.y)({type:Number,nonNullable:!0}),(0,C.g)()],R.prototype,"width",void 0),(0,a.e)([(0,s.y)({type:Number,nonNullable:!0}),(0,C.g)()],R.prototype,"height",void 0),R=A=(0,a.e)([(0,s.n)("esri.widgets.Slice.SlicePlane")],R);var U=R;const B=l.n.getLogger("esri.views.3d.interactive.analysisTools.slice.sliceToolUtils");function $(e,t,i){const a=t.worldUpAtPosition(e.origin,w.c.get()),r=e.basis1,s=q(e,a),l=Math.round(s/I)*I;return(0,d.ak)(e,l-s,r,i)}function q(e,t){return(0,g.bf)(t,e.basis2,e.basis1)+I}(0,g.x)();const I=Math.PI/2,H=l.n.getLogger("esri.views.3d.interactive.graphics.Slice.SliceController");let Q=class extends a.p{constructor(e){super(e),this._handles=new n.u,this._internalChange=!1,this._currentSlicePlane=null,this.state="pending"}get ready(){return"ready"===this.state}initialize(){this._handles.add(this.layerView.layerViewData.excludedLayers.on("before-add",(e=>{const t=e.item;null!=t&&(t instanceof c.b||t instanceof h.E)?t instanceof c.b&&function(e){switch(e.type){case"building-scene":case"csv":case"direct-line-measurement":case"area-measurement":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"kml":case"line-of-sight":case"map-notes":case"ogc-feature":case"point-cloud":case"route":case"slice":case"scene":case"stream":case"voxel":case"subtype-group":case"unknown":case"unsupported":case"wfs":case null:return!1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"imagery-tile":case"map-image":case"open-street-map":case"tile":case"vector-tile":case"wcs":case"web-tile":case"wms":case"wmts":return!0;default:return(0,u.n)(e.type),!1}}(t)?(H.error("excludedLayers",`Layer '${t.title}, id:${t.id}' of type '${t.type}' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead.`),e.preventDefault()):this.layerView.layerViewData.excludedLayers.includes(t)&&e.preventDefault():(H.error("excludedLayers","Invalid layer type, layer must derive from Layer or BuildingComponentSublayer"),e.preventDefault())}))),this._handles.add((0,o.j)(this.view,"ready",(()=>this._initialize()),!0))}_initialize(){switch(this.state){case"pending":break;case"destroyed":return;case"ready":throw new Error("state error")}(function(e,t){J.has(e)||J.set(e,{all:[],activeController:null}),J.get(e).all.push(t)})(this.view,this),this._handles.add([this.layerView.layerViewData.watch("plane",(()=>{this._internalChange||this._updateSlicePlaneFromBoundedPlane(),this._updateLayerViews()}),!0),this.layerView.layerViewData.watch("excludeGroundSurface",(()=>this._updateLayerViews()),!0),this.layerView.layerViewData.excludedLayers.on("change",(()=>this._updateLayerViews())),this.layerView.watch(["active","visible"],(()=>{this._updateActiveController(),this._updateViewSlicePlane()}),!0),this.view.allLayerViews.on("change",(()=>this._updateLayerViews()))]),this._handles.add([this.analysis.watch("plane",(()=>{this._internalChange||(this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane())}),!0)],"analysis"),this._set("state","ready"),this._updateActiveController(),this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane()}destroy(){switch(this.state){case"destroyed":case"pending":return}this.layerView.active=!1,function(e,t){if(!J.has(e))throw new Error("view expected in global slice register");const i=J.get(e),a=i.all.lastIndexOf(t);if(-1===a)throw new Error("controller expected in global slice register");i.all.splice(a,1),0===i.all.length&&J.delete(e)}(this.view,this),this._handles.destroy(),this.view.slicePlane=null,this.set("view",null),this._set("state","destroyed")}async whenReady(){return await(0,o.j)(this,"ready"),this}_updateBoundedPlaneFromSlicePlane(){const e=this.analysis.plane,t=this._currentSlicePlane;if((0,l.t)(t)&&(0,l.t)(e)||(0,l.r)(t)&&(0,l.r)(e)&&e.equals(t))return;let i=null,a=null;(0,l.r)(e)&&(i=function(e,t,i=(0,d.an)()){return(0,l.t)(e)||(0,l.t)(e.position)?null:t.toRenderCoords(e.position,i.origin)?(t.worldBasisAtPosition(i.origin,0,i.basis1),t.worldBasisAtPosition(i.origin,1,i.basis2),(0,d.aj)(i.basis2,i.basis1,i.origin,i.plane),(0,d.ak)(i,-(0,p.g)(e.heading),(0,d.al)(i),i),(0,d.ak)(i,(0,p.g)(e.tilt),i.basis1,i),(0,p.d)(i.basis1,i.basis1,e.width/2),(0,p.d)(i.basis2,i.basis2,e.height/2),(0,d.am)(i),i):(B.error(`Failed to project slice plane position, projection from ${e.position.spatialReference.wkid} is not supported`),null)}(e,this.view.renderCoordsHelper,(0,d.an)()),(0,l.r)(i)?a={heading:e.heading,tilt:e.tilt,position:e.position,width:e.width,height:e.height}:console.warn("Failed slice plane conversion.")),this._currentSlicePlane=a,(0,l.r)(i)&&!this.analysis.tiltEnabled&&$(i,this.view.renderCoordsHelper,i),this._internalChange=!0,this.layerView.layerViewData.plane=i,this._internalChange=!1}_updateSlicePlaneFromBoundedPlane(){const e=this.layerView.layerViewData.plane,t=function(e,t,i,a=new U){if((0,l.t)(e))return null;const r=(0,l.r)(a.position)?a.position:new v.b;t.fromRenderCoords(e.origin,r,i),a.position=r;const s=t.worldUpAtPosition(e.origin,w.c.get()),n=t.worldBasisAtPosition(e.origin,1,w.c.get());return a.width=2*(0,p.s)(e.basis1),a.height=2*(0,p.s)(e.basis2),a.tilt=(0,p.N)(q(e,s)),a.heading=(0,p.N)(function(e,t,i){return(0,g.bf)(e.basis1,i,t)-I}(e,s,n)),a}(e,this.view.renderCoordsHelper,this.view.spatialReference,new U);let i=null;(0,l.r)(t)&&(i={heading:t.heading,tilt:t.tilt,position:t.position,width:t.width,height:t.height}),this._currentSlicePlane=i,(0,l.r)(e)&&(this.analysis.tiltEnabled||$(e,this.view.renderCoordsHelper,e)),this._internalChange=!0,this.analysis.plane=t,this._internalChange=!1,this._updateViewSlicePlane()}_updateActiveController(){if(K)return;const e=X(this.view);if(this.layerView.active)(0,l.r)(e.activeController)&&e.activeController!==this?(K=!0,e.activeController.layerView.active=!1,K=!1):(0,l.r)(e.activeController)&&e.activeController,this._updateLayerViews(),e.activeController=this;else{if((0,l.r)(e.activeController)&&e.activeController!==this)return;(0,l.r)(e.activeController)&&e.activeController===this&&(e.activeController=null,this._updateLayerViews())}}_updateViewSlicePlane(){"ready"===this.state&&function(e){const t=X(e).activeController;(0,l.r)(t)&&(0,l.r)(t.layerView.layerViewData.plane)&&t.layerView.visible?e.slicePlane=t.layerView.layerViewData.plane:e.slicePlane=null}(this.view)}_updateLayerViews(){const e=(0,l.r)(this.layerView.layerViewData.plane)&&this.layerView.visible&&this.layerView.active,t=[],i=e=>{"layers"in e?e.layers.forEach(i):t.push(e)};this.layerView.layerViewData.excludedLayers.forEach(i),this.view.allLayerViews.forEach((i=>{"slicePlaneEnabled"in i&&(i.slicePlaneEnabled=e&&t.indexOf(i.layer)<0),"sublayerViews"in i&&i.sublayerViews.forEach((i=>{i.slicePlaneEnabled=e&&t.indexOf(i.sublayer)<0}))})),null!=this.view.basemapTerrain&&(this.view.basemapTerrain.slicePlaneEnabled=e&&!this.layerView.layerViewData.excludeGroundSurface)}};(0,a.e)([(0,s.y)({readOnly:!0})],Q.prototype,"state",void 0),(0,a.e)([(0,s.y)()],Q.prototype,"view",void 0),(0,a.e)([(0,s.y)()],Q.prototype,"analysis",void 0),(0,a.e)([(0,s.y)()],Q.prototype,"layerView",void 0),(0,a.e)([(0,s.y)()],Q.prototype,"ready",null),Q=(0,a.e)([(0,s.n)("esri.views.3d.interactive.graphics.Slice.SliceController")],Q);const J=new Map;let K=!1;function X(e){return J.get(e)}let Y=class extends a.p{constructor(e){super(e),this._handles=new n.u,this._gridVisualElement=null,this._outlineVisualElement=null,this.state="pending"}get ready(){return"ready"===this.state}set showGrid(e){this._set("showGrid",e),this._updateMaterials()}set editable(e){this._set("editable",e),this._updateMaterials()}initialize(){this._initialize()}async _initialize(){switch(this.state){case"pending":break;case"destroyed":return;case"ready":throw new Error("state error")}if(await(0,o.j)(this.view,"ready",!0),(0,l.t)(this.layerView.layerViewData))throw new Error("expected internal object to be valid");var e;this._gridVisualElement=(e=this.view,new T({view:e,attached:!0,backgroundColor:[...k],gridColor:W,gridWidth:4,renderOccluded:4})),this._outlineVisualElement=function(e){return new f.m({view:e,attached:!0,color:z,width:1,writeDepthEnabled:!1,renderOccluded:4,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]]})}(this.view),this._handles.add([this.analysis.watch("opacity",(()=>this._updateMaterials()),!0)],"analysis"),this._handles.add([this.layerView.watch("visible",(()=>this._updateMaterials()),!0),this.layerView.layerViewData.watch("plane",(()=>this._updatePlane()),!0),this.layerView.watch("active",(()=>this._updateMaterials()),!0)],"internal"),this._updatePlane(),this._set("state","ready")}destroy(){switch(this.state){case"destroyed":case"pending":return}this._handles.destroy(),this._gridVisualElement=(0,l.k)(this._gridVisualElement),this._outlineVisualElement=(0,l.k)(this._outlineVisualElement),this.set("view",null),this._set("state","destroyed")}async whenReady(){return await(0,o.j)(this,"ready"),this}_update(){switch(this.state){case"pending":case"destroyed":return}}_updatePlane(){const e=this.layerView.layerViewData.plane,t=(0,l.r)(e)?function(e,t){return function(e,t,i,a){const r=(0,p.j)(w.c.get(),e),s=(0,p.j)(w.c.get(),t),l=(0,p._)(w.c.get(),r,s);return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=0,a[4]=s[0],a[5]=s[1],a[6]=s[2],a[7]=0,a[8]=l[0],a[9]=l[1],a[10]=l[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}(e.basis1,e.basis2,e.origin,t)}(e,w.f.get()):null;if(this._outlineVisualElement.width=1,(0,l.r)(e)){const i=(0,p.a)(w.c.get(),(0,p.s)(e.basis1),(0,p.s)(e.basis2),1),a=(0,y.q)(w.f.get(),i),r=(0,y.e)(a,t,a);this._outlineVisualElement.transform=r,this._gridVisualElement.transform=r}this._updateMaterials()}_updateMaterials(){const e=this.layerView.layerViewData.plane&&this.analysis.visible,t=this.layerView.active,i=[z[0],z[1],z[2],z[3]];this._outlineVisualElement.color=i,this._outlineVisualElement.width=this.editable?1:2,this._outlineVisualElement.stipplePattern=t?null:(0,d.a5)(5);const a=[k[0],k[1],k[2],k[3]],r=(0,l.r)(this.layerView.layerViewData)&&this.showGrid?W:[0,0,0,0];this._gridVisualElement.backgroundColor=a,this._gridVisualElement.gridColor=r,this._gridVisualElement.visible=e,this._outlineVisualElement.visible=e}};(0,a.e)([(0,s.y)({readOnly:!0})],Y.prototype,"state",void 0),(0,a.e)([(0,s.y)()],Y.prototype,"view",void 0),(0,a.e)([(0,s.y)()],Y.prototype,"analysis",void 0),(0,a.e)([(0,s.y)()],Y.prototype,"layerView",void 0),(0,a.e)([(0,s.y)()],Y.prototype,"ready",null),(0,a.e)([(0,s.y)({value:!1})],Y.prototype,"showGrid",null),(0,a.e)([(0,s.y)({value:!0})],Y.prototype,"editable",null),Y=(0,a.e)([(0,s.n)("esri.views.3d.interactive.graphics.Slice.SliceView")],Y);let Z=class extends a.p{constructor(){super(...arguments),this.plane=null,this.excludeGroundSurface=!1}get excludedLayers(){return this._get("excludedLayers")||new x.L}set excludedLayers(e){this._set("excludedLayers",(0,P.n)(e,this._get("excludedLayers")))}};(0,a.e)([(0,s.y)()],Z.prototype,"plane",void 0),(0,a.e)([(0,s.y)()],Z.prototype,"excludeGroundSurface",void 0),(0,a.e)([(0,s.y)({cast:P.t})],Z.prototype,"excludedLayers",null),Z=(0,a.e)([(0,s.n)("esri.views.3d.interactive.graphics.Slice.SliceInternal")],Z);let ee=class extends((0,d.m)(E.d)){constructor(){super(...arguments),this.type="slice-3d",this.analysisView=null,this.analysisController=null,this._initialized=(0,r.E)(),this.layerViewData=new Z,this.active=!0,this.showGrid=!1,this.editable=!1}initialize(){this.analysisView=new Y({view:this.view,analysis:this.layer,layerView:this}),this.analysisController=new Q({view:this.view,analysis:this.layer,layerView:this}),this._initialized.resolve()}destroy(){this.analysisView.destroy(),this.analysisView=null,this.analysisController.destroy(),this.analysisController=null}async when(){return this.destroyed?null:(await this._initialized.promise,this.destroyed?null:(await this.analysisView.whenReady(),this.destroyed?null:(await this.analysisController.whenReady(),this)))}get testData(){return{view:this.analysisView,controller:this.analysisController}}};(0,a.e)([(0,s.y)()],ee.prototype,"type",void 0),(0,a.e)([(0,s.y)()],ee.prototype,"layerViewData",void 0),(0,a.e)([(0,s.y)()],ee.prototype,"layer",void 0),(0,a.e)([(0,s.y)()],ee.prototype,"active",void 0),(0,a.e)([(0,s.y)({aliasOf:"analysisView.showGrid"})],ee.prototype,"showGrid",void 0),(0,a.e)([(0,s.y)({aliasOf:"analysisView.editable"})],ee.prototype,"editable",void 0),ee=(0,a.e)([(0,s.n)("esri.views.3d.layers.SliceLayerView3D")],ee);var te=ee,ie=Object.freeze({__proto__:null,default:te,get SliceLayerView3D(){return ee}})}}]);