(self.webpackChunk=self.webpackChunk||[]).push([[4343],{54343:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>p});var s=i(78155),r=i(80219),a=i(36845),n=i(88903),l=i(32422),o=i(47910),d=i(50822),h=i(71391),y=i(67390),m=i(732);i(20215),i(80987),i(98548),i(20736),i(4169),i(92858),i(31531),i(73574),i(82906),i(40130),i(52957),i(29126),i(6585),i(3621),i(63358),i(62121),i(81135),i(94527),i(17762),i(60816),i(61888),i(29832),i(31516),i(52109),i(89710),i(55688),i(15015),i(95629),i(9612),i(76326),i(4807),i(30316),i(18559),i(32769),i(83731),i(42296),i(17331),i(41290),i(95559),i(68631),i(26779),i(82361),i(65352),i(7571),i(93242),i(58404),i(79679),i(71542),i(16063),i(43194),i(62654),i(15346),i(65311),i(67726),i(59312),i(72105),i(80657),i(5250),i(95186),i(53185),i(60183),i(93875),i(14215),i(20868),i(72600),i(334),i(37762),i(92722),i(25290),i(7552),i(78082),i(27270),i(37191),i(30665),i(28090),i(47365),i(67079),i(84796),i(53902),i(13895),i(91236),i(4618),i(24776),i(29831),i(87405),i(48643),i(84320),i(93450),i(11838),i(39068),i(3629),i(97431),i(32892),i(41374),i(86897),i(41392),i(79949),i(6660),i(6783),i(75200),i(29218),i(49293),i(30494),i(43231),i(81578),i(71394),i(13564),i(56803),i(18143),i(2903),i(85570),i(71470),i(80136),i(91507),i(85289),i(98843),i(91790),i(52737),i(16040),i(34396),i(49878),i(84271),i(94449),i(97325),i(79506),i(98420),i(54223),i(8725),i(51218),i(21793),i(15576),i(28941),i(19438),i(15022),i(56416),i(92758),i(78435),i(40481),i(78730),i(2570),i(71666),i(72257),i(41822),i(99987);let g=class extends((0,o.p)((0,h.aa)((0,l.l)((0,l.m)(d.d))))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage();const e=this.updateFullExtent();this.addResolvingPromise(e);const t=(0,a.x)(this.view,"basemapTerrain.tilingSchemeLocked").then((()=>{const e=this.view.basemapTerrain.tilingScheme,{tileInfo:t}=this.layer,i=["png","png24","png32","jpg","mixed"].indexOf(t.format)>-1&&e.compatibleWith(t);this.isAlignedMapTile=i;const s=i?t:e.toTileInfo();this._set("tileInfo",s),this.updatingHandles.add(this,"layer.renderer",(()=>this.refresh())),this.updatingHandles.add(this,"layer.interpolation",(()=>this.refresh())),this.updatingHandles.add(this,"layer.bandIds",(()=>this.refresh())),this.updatingHandles.add(this,"layer.multidimensionalDefinition",(()=>this.refresh()))}));this.addResolvingPromise(t)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const e=document.createElement("canvas"),t=e.getContext("2d"),[i,s]=this.tileInfo.size;return e.width=i,e.height=s,t.clearRect(0,0,i,s),t.getImageData(0,0,i,s)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){const e=this.tileInfo.lods,t=this.layer.tileInfo.lods,i=e[0].scale,s=t[t.length-1].scale;return this.levelRangeFromScaleRange(i,s)}async fetchTile(e,t,i,s){const a=this.tileInfo,n=this._canSymbolizeInWebGL(),o={tileInfo:a,requestRawData:n,signal:(0,r.f)(s.signal),requestAsImageElement:this.isAlignedMapTile},d=await this.layer.fetchTile(e,t,i,o);if(d instanceof HTMLImageElement)return d;let h=d&&d.pixelBlock;if(!h)return this._blankTile;if(!n&&(h=await this.layer.applyRenderer(d),null==h))return this._blankTile;const y=new l.ai([e,t,i],h,a.size[0],a.size[1]);return n?(y.symbolizerRenderer=this.layer.symbolizer.rendererJSON,y.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),y.transformGrid=d.transformGrid):y.isRendereredSource=!0,y.interpolation=this.layer.interpolation,y.bandIds=this.layer.bandIds,y}_getSymbolizerOptions(e){const t=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:t,y:t},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){this._canSymbolizeInWebGL()&&JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))}createFetchPopupFeaturesQueryGeometry(e,t){return(0,y.a)(e,t,this.view)}refresh(){this.emit("data-changed")}async doRefresh(e){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){return(0,m.r)().supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL}};(0,s.e)([(0,n.y)({readOnly:!0})],g.prototype,"_blankTile",null),(0,s.e)([(0,n.y)({readOnly:!0})],g.prototype,"imageFormatIsOpaque",null),(0,s.e)([(0,n.y)({readOnly:!0})],g.prototype,"hasMixedImageFormats",null),(0,s.e)([(0,n.y)({readOnly:!0})],g.prototype,"dataLevelRange",null),g=(0,s.e)([(0,n.n)("esri.views.3d.layers.ImageryTileLayerView3D")],g);const p=g}}]);