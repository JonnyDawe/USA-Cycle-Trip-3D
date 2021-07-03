(self.webpackChunk=self.webpackChunk||[]).push([[8851],{8851:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>M});var s=i(78155),r=i(73574),l=i(20215),a=i(83731),n=i(80219),o=i(88903),h=i(84271),d=i(58404),c=i(78185),u=i(97325),y=i(93443),_=i(29218),p=i(6660),f=i(80987),g=i(87682),v=i(5772),m=i(79061),T=i(6783),b=i(82030),w=i(31280),C=i(25290),S=i(85774),I=i(50822);i(82906),i(40130),i(20736),i(4169),i(92858),i(52957),i(29126),i(31531),i(6585),i(3621),i(63358),i(62121),i(81135),i(94527),i(17762),i(60816),i(61888),i(29832),i(31516),i(52109),i(98548),i(89710),i(39068),i(3629),i(26779),i(93875),i(14215),i(91507),i(50388),i(36542),i(21779),i(36845),i(71391),i(55688),i(15015),i(95629),i(9612),i(76326),i(4807),i(30316),i(18559),i(32769),i(42296),i(17331),i(41290),i(91236),i(82361),i(65352),i(71394),i(13564),i(95559),i(68631),i(56803),i(18143),i(47365),i(67079),i(2903),i(85570),i(71470),i(80136),i(85289),i(98843),i(91790),i(52737),i(29831),i(16040),i(34396),i(5250),i(49878),i(48643),i(4618),i(80657),i(94449),i(79506),i(98420),i(54223),i(8725),i(51218),i(21793),i(13895),i(15576),i(28941),i(19438),i(15022),i(56416),i(92758),i(78435),i(53902),i(40481),i(78730),i(2570),i(71666),i(72257),i(41822),i(99987),i(11838),i(24776),i(95186),i(67726),i(59312),i(80163),i(26799),i(43356),i(86897),i(79766),i(2098),i(78191),i(1045),i(75200),i(334),i(93242),i(87405),i(34534);const R=(e,t)=>e+1/(1<<2*t);class D{constructor(e,t){this._tiles=new Map,this._tileCache=new u.e(40,(e=>e.dispose())),this._viewSize=[0,0],this._visibleTiles=new Map,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this._container=t}destroy(){for(const[e,t]of this._tiles)t.dispose();this._tiles=null,this._tileCache.clear(),this._tileCache=null}update(e){this._updateCacheSize(e);const t=this.tileInfoView,i=t.getTileCoverage(e.state,0,"smallest"),{spans:s,lodInfo:r}=i,{level:l}=r,a=new Set,n=new Set;for(const{row:e,colFrom:t,colTo:i}of s)for(let s=t;s<=i;s++){const t=_.e.getId(l,e,r.normalizeCol(s),r.getWorldForColumn(s)),i=this._getOrAcquireTile(t);a.add(t),i.processed()?this._addToContainer(i):n.add(new _.e(t))}for(const[e,t]of this._tiles)t.isCoverage=a.has(e);for(const e of n)this._findPlaceholdersForMissingTiles(e,a);let o=!1;for(const[e,s]of this._tiles)s.neededForCoverage=a.has(e),s.neededForCoverage||s.isHoldingForFade&&t.intersects(i,s.key)&&a.add(e),s.isFading&&(o=!0);for(const[e,t]of this._tiles)a.has(e)||this._releaseTile(e);return y.l.pool.release(i),!o}clear(){this._tiles.clear(),this._tileCache.clear(),this._visibleTiles.clear()}clearCache(){this._tileCache.clear()}_findPlaceholdersForMissingTiles(e,t){const i=[];for(const[s,r]of this._tiles)this._addPlaceholderChild(i,r,e,t);const s=i.reduce(R,0);Math.abs(1-s)<1e-6||this._addPlaceholderParent(e.id,t)}_addPlaceholderChild(e,t,i,s){t.key.level<=i.level||!t.hasData()||function(e,t){const i=t.level-e.level;return e.row===t.row>>i&&e.col===t.col>>i&&e.world===t.world}(i,t.key)&&(this._addToContainer(t),s.add(t.id),e.push(t.key.level-i.level))}_addPlaceholderParent(e,t){let i=e;for(;;){if(i=L(i),!i||t.has(i))return;const e=this._getTile(i);if(e&&e.hasData())return this._addToContainer(e),void t.add(e.id)}}_getOrAcquireTile(e){let t=this._tiles.get(e);return t||(t=this._tileCache.pop(e),t||(t=this.acquireTile(new _.e(e))),this._tiles.set(e,t),t)}_getTile(e){let t=this._tiles.get(e);return t||(t=this._tileCache.pop(e),t&&this._tiles.set(e,t),t)}_releaseTile(e){const t=this._tiles.get(e);this.releaseTile(t),this._removeFromContainer(t),this._tiles.delete(e),t.hasData()?this._tileCache.put(e,t,1):t.dispose()}_addToContainer(e){let t;const i=[],s=this._container;if(s.contains(e))return;const r=this._visibleTiles;for(const[s,l]of r)this._canConnectDirectly(e,l)&&i.push(l),(0,n.t)(t)&&this._canConnectDirectly(l,e)&&(t=l);if((0,n.r)(t)){for(const s of i)t.childrenTiles.delete(s),e.childrenTiles.add(s),s.parentTile=e;t.childrenTiles.add(e),e.parentTile=t}else for(const t of i)e.childrenTiles.add(t),t.parentTile=e;r.set(e.id,e),s.addChild(e)}_removeFromContainer(e){if(this._visibleTiles.delete(e.id),this._container.removeChild(e),(0,n.r)(e.parentTile)){e.parentTile.childrenTiles.delete(e);for(const t of e.childrenTiles)(0,n.r)(e.parentTile)&&e.parentTile.childrenTiles.add(t)}for(const t of e.childrenTiles)t.parentTile=e.parentTile;e.parentTile=null,e.childrenTiles.clear()}_canConnectDirectly(e,t){const i=e.key;let{level:s,row:r,col:l,world:a}=t.key;const n=this._visibleTiles;for(;s>0;){if(s--,r>>=1,l>>=1,i.level===s&&i.row===r&&i.col===l&&i.world===a)return!0;if(n.has(`${s}/${r}/${l}/${a}`))return!1}return!1}_updateCacheSize(e){const t=e.state.size;if(t[0]===this._viewSize[0]&&t[1]===this._viewSize[1])return;const i=Math.ceil(t[0]/512)+1,s=Math.ceil(t[1]/512)+1;this._viewSize[0]=t[0],this._viewSize[1]=t[1],this._tileCache.maxSize=5*i*s}}function L(e){const[t,i,s,r]=e.split("/"),l=parseInt(t,10);return 0===l?null:`${l-1}/${parseInt(i,10)>>1}/${parseInt(s,10)>>1}/${parseInt(r,10)}`}class H extends f.n{constructor(e,t){super(),this.styleRepository=e,this._tileToHandle=new Map,this._viewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._declutterViewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._completed=!1,this._symbolRepository=new c.r(4096,t,(()=>new p.s)),this._symbolDeclutterer=new c.i(t,this._symbolRepository,((e,t,i)=>new c.a(e,t,i,this.styleRepository,this._zoom,this._viewState.rotation)),((e,t)=>{e.allSymbolsFadingOut=!0,e.lastOpacityUpdate=t,(0,p.h)(e,t,!0),e.decluttered=!0,e.requestRender()}),((e,t)=>this.styleRepository.getStyleLayerByUID(e.styleLayerUID).z-this.styleRepository.getStyleLayerByUID(t.styleLayerUID).z),(e=>{const t=this.styleRepository.getStyleLayerByUID(e).getLayoutProperty("visibility");return!t||1!==t.getValue()}))}addTile(e){e.decluttered=!1,this._tileToHandle.set(e,e.on("symbols-changed",(()=>{this._symbolRepository.add(e),this.restartDeclutter()}))),this._symbolRepository.add(e),this.restartDeclutter()}removeTile(e){const t=this._tileToHandle.get(e);t&&(this._symbolRepository.removeTile(e),this.restartDeclutter(),t.remove(),this._tileToHandle.delete(e))}update(e,t){return this._zoom=e,this._viewState={scale:t.scale,rotation:t.rotation,center:[t.center[0],t.center[1]],size:[t.size[0],t.size[1]]},this._continueDeclutter(),this._completed}restartDeclutter(){this._completed=!1,this._symbolDeclutterer.restart(),this._notifyUnstable()}clear(){this._completed=!1,this._symbolRepository=null,this._symbolDeclutterer.restart(),this._tileToHandle.forEach((e=>e.remove())),this._tileToHandle.clear()}get stale(){return this._zoom!==this._declutterZoom||this._viewState.size[0]!==this._declutterViewState.size[0]||this._viewState.size[1]!==this._declutterViewState.size[1]||this._viewState.scale!==this._declutterViewState.scale||this._viewState.rotation!==this._declutterViewState.rotation}deleteStyleLayers(e){this._symbolRepository.deleteStyleLayers(e)}_continueDeclutter(){this._completed&&!this.stale||(this._symbolDeclutterer.running||(this._declutterZoom=this._zoom,this._declutterViewState.center[0]=this._viewState.center[0],this._declutterViewState.center[1]=this._viewState.center[1],this._declutterViewState.rotation=this._viewState.rotation,this._declutterViewState.scale=this._viewState.scale,this._declutterViewState.size[0]=this._viewState.size[0],this._declutterViewState.size[1]=this._viewState.size[1],this._symbolDeclutterer.restart()),this._symbolDeclutterer.setScreenSize(this._viewState.size[0],this._viewState.size[1]),this._completed=this._symbolDeclutterer.continue(g.c),this._completed&&this._scheduleNotifyStable())}_scheduleNotifyStable(){(0,n.r)(this._stableNotificationHandle)&&clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=setTimeout((()=>{this._stableNotificationHandle=null,this.emit("fade-complete")}),1.5*g.e)}_notifyUnstable(){(0,n.r)(this._stableNotificationHandle)&&(clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=null),this.emit("fade-start")}}const P=1e-6;function k(e,t){if(e){const i=e.getLayoutProperty("visibility");if(!i||1!==i.getValue()&&(void 0===e.minzoom||e.minzoom<t+P)&&(void 0===e.maxzoom||e.maxzoom>=t-P))return!0}return!1}class z extends m.o{constructor(e){super(e),this._backgroundTiles=[],this._pointToCallbacks=new Map,this._fading=!1}destroy(){this.removeAllChildren(),this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null),(0,n.r)(this._symbolFader)&&(this._symbolFader.clear(),this._symbolFader=null),this._styleRepository=null,this._backgroundTiles=[],this._pointToCallbacks.clear()}setStyleResources(e,t,i){if(this._spriteMosaic=e,this._glyphMosaic=t,this._styleRepository=i,(0,n.t)(this._symbolFader)){const e=new H(this._styleRepository,this.children);e.on("fade-start",(()=>{this.emit("fade-start"),this._fading=!0,this.requestRender()})),e.on("fade-complete",(()=>{this.emit("fade-complete"),this._fading=!1,this.requestRender()})),this._symbolFader=e}(0,n.f)(this._symbolFader).styleRepository=i}deleteStyleLayers(e){(0,n.r)(this._symbolFader)&&this._symbolFader.deleteStyleLayers(e)}async hitTest(e,t){const i=[e,t],s=(0,l.D)();return this._pointToCallbacks.set(i,s),this.requestRender(),s.promise}enterTileInvalidation(){for(const e of this.children)e.invalidating=!0}createRenderParams(e){return{...super.createRenderParams(e),renderPass:null,styleLayer:null,styleLayerUID:-1,glyphMosaic:this._glyphMosaic,spriteMosaic:this._spriteMosaic,hasClipping:!!this._clippingInfos}}doRender(e){!this.visible||e.drawPhase!==v.I.MAP&&e.drawPhase!==v.I.DEBUG||void 0===this._spriteMosaic||super.doRender(e)}addChild(e){return super.addChild(e),(0,n.r)(this._symbolFader)?this._symbolFader.addTile(e):e.decluttered=!0,this.requestRender(),e}removeChild(e){return(0,n.r)(this._symbolFader)&&this._symbolFader.removeTile(e),this.requestRender(),super.removeChild(e)}renderChildren(e){if(e.drawPhase!==v.I.DEBUG){if(this._doRender(e),this._pointToCallbacks.size>0){const{context:t}=e,i=t.getBoundFramebufferObject();e.drawPhase=v.I.HITTEST;const s=e.painter.effects.hittest;s.bind(e),this._doRender(e),s.draw(e,this._pointToCallbacks),t.bindFramebuffer(i)}}else super.renderChildren(e)}removeAllChildren(){for(let e=0;e<this.children.length;e++){const t=this.children[e];(0,n.r)(this._symbolFader)&&this._symbolFader.removeTile(t),t.dispose()}super.removeAllChildren()}getStencilTarget(){return this.children.filter((e=>e.neededForCoverage&&e.hasData()))}restartDeclutter(){(0,n.r)(this._symbolFader)&&this._symbolFader.restartDeclutter()}_doRender(e){const{context:t}=e,i=this._styleRepository;if(!i)return;const s=i.layers;let r=!0;e.drawPhase===v.I.HITTEST&&(r=!1),i.backgroundBucketIds.length>0&&(e.renderPass="background",this._renderBackgroundLayers(e,i.backgroundBucketIds)),super.renderChildren(e),e.drawPhase===v.I.MAP&&this._fade(e.displayLevel,e.state);const l=this.children.filter((e=>e.visible&&e.hasData()));if(l&&0!==l.length){for(const e of l)e.triangleCount=0;t.setStencilWriteMask(0),t.setColorMask(!0,!0,!0,!0),t.setStencilOp(7680,7680,7681),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!1),t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!0),t.setDepthFunction(515),t.setClearDepth(1),t.clear(t.gl.DEPTH_BUFFER_BIT),e.renderPass="opaque";for(let t=s.length-1;t>=0;t--)this._renderStyleLayer(s[t],e,l);t.setDepthWriteEnabled(!1),t.setBlendingEnabled(r),t.setBlendFunctionSeparate(1,771,1,771),e.renderPass="translucent";for(let t=0;t<s.length;t++)this._renderStyleLayer(s[t],e,l);t.setDepthTestEnabled(!1),e.renderPass="symbol";for(let t=0;t<s.length;t++)this._renderStyleLayer(s[t],e,l);if(t.bindVAO(),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0),e.drawPhase===v.I.MAP){const e=window.COLLISION_DEBUG_CTX;if(e&&(0,n.r)(this._symbolFader)&&(e.clearRect(0,0,e.canvas.width,e.canvas.height),!this._fading||window.COLLISION_XRAY))for(const t of this.children)if(t.symbols){const i=[];if(t.symbols.forEach((e=>{i.push(...e)})),window.COLLISION_SHOW_GRID){var a,o,h;const t=null==(a=this._symbolFader)||null==(o=a._symbolDeclutterer)||null==(h=o._collisionJob)?void 0:h._gridIndex;t&&(0,c.n)(e,t)}(0,c.o)(e,i)}}}}_fade(e,t){(0,n.r)(this._symbolFader)&&(this._symbolFader.update(e,t)||this.requestRender())}_renderStyleLayer(e,t,i){const{painter:s,renderPass:r}=t;if(void 0===e)return;const l=e.getLayoutProperty("visibility");if(l&&1===l.getValue())return;let a;switch(e.type){case 0:return;case 1:if("opaque"!==r&&"translucent"!==t.renderPass)return;a="vtlFill";break;case 2:if("translucent"!==r)return;a="vtlLine";break;case 4:if("symbol"!==r)return;a="vtlCircle";break;case 3:if("symbol"!==r)return;a="vtlSymbol"}if(i=3===e.type?i.filter((e=>e.decluttered)):i.filter((e=>e.neededForCoverage)),"vtlSymbol"!==a){const s=t.displayLevel;if(0===i.length||void 0!==e.minzoom&&e.minzoom>=s+P||void 0!==e.maxzoom&&e.maxzoom<s-P)return}const n=e.uid;t.styleLayerUID=n,t.styleLayer=e;for(const e of i)if(e.layerData.has(n)){s.renderObjects(t,i,a);break}}_renderBackgroundLayers(e,t){const{context:i,displayLevel:s,painter:r,state:l}=e,a=this._styleRepository;let o=!1;for(const e of t)if(k(a.getLayerById(e),s)){o=!0;break}if(!o)return;const h=this._tileInfoView.getTileCoverage(e.state,0,"smallest"),{spans:c,lodInfo:u}=h,{level:p}=u,f=(0,d.i)(),g=[];if(this._renderPasses){const t=this._renderPasses[0];(0,n.r)(this._clippingInfos)&&(t.brushes[0].prepareState(e,this._clippingInfos[0]),t.brushes[0].drawMany(e,this._clippingInfos))}const m=this._backgroundTiles;let b,w=0;for(const{row:e,colFrom:t,colTo:i}of c)for(let s=t;s<=i;s++){if(w<m.length)b=m[w],b.key.set(p,e,u.normalizeCol(s),u.getWorldForColumn(s)),this._tileInfoView.getTileBounds(f,b.key,!1),b.bounds=f,b.coords[0]=f[0],b.coords[1]=f[3];else{const t=new _.e(p,e,u.normalizeCol(s),u.getWorldForColumn(s));b=new T.r(t,this._tileInfoView.getTileBounds((0,d.i)(),t),[512,512],[4096,4096]),m.push(b)}b.setTransform(l,this._tileInfoView.getTileResolution(b.key)),g.push(b),w++}i.setStencilWriteMask(0),i.setColorMask(!0,!0,!0,!0),i.setStencilOp(7680,7680,7681),i.setStencilFunction(514,0,255);let C=!0;e.drawPhase===v.I.HITTEST&&(C=!1),i.setStencilTestEnabled(C);for(const i of t){const t=a.getLayerById(i);k(t,s)&&(e.styleLayerUID=t.uid,e.styleLayer=t,r.renderObjects(e,g,"vtlBackground"))}y.l.pool.release(h)}}class F extends y.h{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const t=_.e.pool.acquire(e),i=0===t.level?null:_.e.getId(t.level-1,t.row>>1,t.col>>1,t.world);return _.e.pool.release(t),i}getTileCoverage(e,t,i){const s=super.getTileCoverage(e,t,i);if(!s)return s;const r=1<<s.lodInfo.level;return s.spans=s.spans.filter((e=>e.row>=0&&e.row<r)),s}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const t=this._fullCacheLodInfos;if(e>t[0].scale)return t[0].level;let i,s;for(let r=0;r<t.length-1;r++)if(s=t[r+1],e>s.scale)return i=t[r],i.level+(i.scale-e)/(i.scale-s.scale);return t[t.length-1].level}}_initializeFullCacheLODs(e){let t;if(0===e[0].level)t=e.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})));else{const e=this.tileInfo.size[0],i=this.tileInfo.spatialReference;t=C.S.create({size:e,spatialReference:i}).lods.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})))}for(let e=0;e<t.length;e++)this._levelByScale[t[e].scale]=t[e].level;this._fullCacheLodInfos=t}}const U=n.n.getLogger("esri.views.2d.layers.VectorTileLayerView2D");let Q=class extends((0,w.l)(I.d)){constructor(){super(...arguments),this._styleChanges=[],this._handles=new a.u,this._fetchQueue=null,this._parseQueue=null,this._isTileHandlerReady=!1,this.fading=!1}initialize(){const e=this.layer.tileInfo;if(!(e&&e.spatialReference).equals(this.view.spatialReference))return void this.addResolvingPromise(Promise.reject(new l.s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})));const{style:t,spriteUrl:i,glyphsUrl:s}=this.layer.currentStyleInfo;this._styleRepository=new b.g(t,{spriteUrl:i,glyphsUrl:s}),this._tileInfoView=new F(this.layer.tileInfo,this.layer.fullExtent),this._vectorTileContainer=new z(this._tileInfoView),this._tileHandler=new c.f(this.layer,this._styleRepository,window.devicePixelRatio||1),this.container.addChild(this._vectorTileContainer),this.handles.add([this._vectorTileContainer.on("fade-start",(()=>{this.fading=!0,this.notifyChange("updating"),this.requestUpdate()})),this._vectorTileContainer.on("fade-complete",(()=>{this.fading=!1,this.notifyChange("updating"),this.requestUpdate()}))])}destroy(){var e;this._stop(),this.container.removeAllChildren(),this._vectorTileContainer&&(this._vectorTileContainer.destroy(),this._vectorTileContainer=null),null==(e=this._tileHandler)||e.destroy(),this._tileHandler=null}async hitTest(e,t){if(this.suspended||!this._tileHandlerPromise)return null;await this._tileHandlerPromise;const i=await this._vectorTileContainer.hitTest(e,t);if(!i||0===i.length)return null;const s=i[0]-1,l=this._styleRepository,a=l.getStyleLayerByUID(s);if(!a)return null;const n=l.getStyleLayerIndex(a.id),o=new r.h({attributes:{layerId:n,layerName:a.id,layerUID:s}});return o.layer=this.layer,o.sourceLayer=this.layer,o}update(e){if(this._tileHandlerPromise&&this._isTileHandlerReady)return e.pixelRatio!==this._tileHandler.devicePixelRatio?(this._start(),void(this._tileHandler.devicePixelRatio=e.pixelRatio)):void(this._styleChanges.length>0?this._tileHandlerPromise=this._applyStyleChanges():(this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.state=e.state,this._parseQueue.state=e.state,this._tileManager.update(e)||this.requestUpdate(),this._parseQueue.resume(),this._fetchQueue.resume()))}attach(){this._start(),this._handles.add([this.layer.on("paint-change",(e=>{if(e.isDataDriven)this._styleChanges.push({type:0,data:e}),this.notifyChange("updating"),this.requestUpdate();else{const t=this._styleRepository,i=t.getLayerById(e.layer);if(!i)return;const s=3===i.type;t.setPaintProperties(e.layer,e.paint),s&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender()}})),this.layer.on("layout-change",(e=>{const t=this._styleRepository,i=t.getLayerById(e.layer);if(!i)return;const s=(0,h.m)(i.layout,e.layout);if(!(0,n.t)(s)){if((0,h.a)(s,"visibility")&&1===function(e){if((0,n.t)(e))return 0;switch(e.type){case"partial":return Object.keys(e.diff).length;case"complete":return Math.max(Object.keys(e.oldValue).length,Object.keys(e.newValue).length);case"collection":return Object.keys(e.added).length+Object.keys(e.changed).length+Object.keys(e.removed).length}}(s))return t.setLayoutProperties(e.layer,e.layout),3===i.type&&this._vectorTileContainer.restartDeclutter(),void this._vectorTileContainer.requestRender();this._styleChanges.push({type:1,data:e}),this.notifyChange("updating"),this.requestUpdate()}})),this.layer.on("style-layer-visibility-change",(e=>{const t=this._styleRepository,i=t.getLayerById(e.layer);i&&(t.setStyleLayerVisibility(e.layer,e.visibility),3===i.type&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender())})),this.layer.on("style-layer-change",(e=>{this._styleChanges.push({type:2,data:e}),this.notifyChange("updating"),this.requestUpdate()})),this.layer.on("delete-style-layer",(e=>{this._styleChanges.push({type:3,data:e}),this.notifyChange("updating"),this.requestUpdate()})),this.layer.on("load-style",(()=>this._loadStyle()))])}detach(){this._stop(),this._handles.removeAll()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}canResume(){let e=super.canResume();const t=this.layer;if(e&&t.currentStyleInfo){const i=this.view.scale,s=t.currentStyleInfo;if(s&&s.layerDefinition){const t=s.layerDefinition;t.minScale&&t.minScale<i&&(e=!1),t.maxScale&&t.maxScale>i&&(e=!1)}}return e}isUpdating(){const e=this._vectorTileContainer.children;return!this._isTileHandlerReady||!this._fetchQueue||!this._parseQueue||this._fetchQueue.updating||this._parseQueue.updating||e.length>0&&e.filter((e=>e.invalidating)).length>0||this.fading}acquireTile(e){const t=this._createVectorTile(e);return this._tileHandlerPromise.then((()=>{this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e}))).then((e=>{t.once("attach",(()=>this.requestUpdate())),e&&(t.setData(e.tileData),this.requestUpdate(),this.notifyChange("updating"))})).catch((e=>{this.notifyChange("updating"),(0,l.g)(e)||U.error(e)}))})),t}releaseTile(e){const t=e.key.id;this._fetchQueue.abort(t),this._parseQueue.abort(t),this.requestUpdate()}_start(){if(this._stop(),this._tileManager=new D({acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView},this._vectorTileContainer),!this.layer.currentStyleInfo)return;const e=new AbortController,t=this._tileHandler.start({signal:e.signal}).then((()=>{this._fetchQueue=new S.p({tileInfoView:this._tileInfoView,process:(e,t)=>this._getTileData(e,t),concurrency:15}),this._parseQueue=new S.p({tileInfoView:this._tileInfoView,process:(e,t)=>this._parseTileData(e,t),concurrency:8}),this.requestUpdate(),this._isTileHandlerReady=!0}));this._tileHandler.spriteMosaic.then((e=>{this._vectorTileContainer.setStyleResources(e,this._tileHandler.glyphMosaic,this._styleRepository),this.requestUpdate()})),this._tileHandlerAbortController=e,this._tileHandlerPromise=t}_stop(){if(!this._tileHandlerAbortController||!this._vectorTileContainer)return;const e=this._tileHandlerAbortController;e&&e.abort(),this._tileHandlerPromise=null,this._isTileHandlerReady=!1,this._fetchQueue&&(this._fetchQueue.destroy(),this._fetchQueue=null),this._parseQueue&&(this._parseQueue.destroy(),this._parseQueue=null),this._tileManager&&(this._tileManager.destroy(),this._tileManager=null),this._vectorTileContainer.removeAllChildren()}async _getTileData(e,t){const i=await this._tileHandler.fetchTileData(e,t);return this.notifyChange("updating"),i}async _parseTileData(e,t){return this._tileHandler.parseTileData(e,t)}async _applyStyleChanges(){this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this._tileManager.clearCache();const e=this._styleChanges;try{await this._tileHandler.updateStyle(e)}catch(e){U.error("error applying vector-tiles style update",e.message),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0}const t=this._styleRepository,i=[];e.forEach((e=>{if(3!==e.type)return;const s=e.data,r=t.getLayerById(s.layer);r&&i.push(r.uid)}));const s=[];let r;e.forEach((e=>{const i=e.type,l=e.data;switch(i){case 0:t.setPaintProperties(l.layer,l.paint),r=l.layer;break;case 1:t.setLayoutProperties(l.layer,l.layout),r=l.layer;break;case 3:return void t.deleteStyleLayer(l.layer);case 2:t.setStyleLayer(l.layer,l.index),r=l.layer.id}const a=t.getLayerById(r);a&&s.push(a.uid)}));const l=this._vectorTileContainer.children;if(i.length>0){this._vectorTileContainer.deleteStyleLayers(i);for(const e of l)e.deleteLayerData(i)}if(this._fetchQueue.resume(),this._parseQueue.resume(),s.length>0){const e=[];for(const t of l){const i=this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e,styleLayerUIDs:s}))).then((e=>t.setData(e.tileData)));e.push(i)}await Promise.all(e)}this._styleChanges=[],this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate()}async _loadStyle(){const{style:e,spriteUrl:t,glyphsUrl:i}=this.layer.currentStyleInfo,s=(0,n.y)(e);this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this.notifyChange("updating"),this._styleRepository=new b.g(s,{spriteUrl:t,glyphsUrl:i}),this._vectorTileContainer.destroy(),this._tileManager.clear(),this._tileHandlerAbortController.abort(),this._tileHandlerAbortController=(0,l.h)();const{signal:r}=this._tileHandlerAbortController;try{this._tileHandlerPromise=this._tileHandler.setStyle(this._styleRepository,s),await this._tileHandlerPromise}catch(e){if(!(0,l.g)(e))throw e}if(r.aborted)return this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),void this.requestUpdate();const a=await this._tileHandler.spriteMosaic;this._vectorTileContainer.setStyleResources(a,this._tileHandler.glyphMosaic,this._styleRepository),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate()}_createVectorTile(e){const t=this._tileInfoView.getTileBounds((0,d.i)(),e);return new p.d(e,this._styleRepository,t,[512,512])}};(0,s.e)([(0,o.y)()],Q.prototype,"_fetchQueue",void 0),(0,s.e)([(0,o.y)()],Q.prototype,"_parseQueue",void 0),(0,s.e)([(0,o.y)()],Q.prototype,"_isTileHandlerReady",void 0),(0,s.e)([(0,o.y)()],Q.prototype,"suspended",void 0),(0,s.e)([(0,o.y)()],Q.prototype,"fading",void 0),(0,s.e)([(0,o.y)()],Q.prototype,"updating",void 0),Q=(0,s.e)([(0,o.n)("esri.views.2d.layers.VectorTileLayerView2D")],Q);const M=Q}}]);