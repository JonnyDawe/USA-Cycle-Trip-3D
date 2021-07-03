(self.webpackChunk=self.webpackChunk||[]).push([[5511],{55511:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>_});var s=i(78155),a=i(20215),l=i(80219),r=i(88903),h=i(2395),n=i(31280),o=i(93443),u=i(29218),c=i(85774),f=i(50822),g=i(71391),p=i(49038),w=i(67390);i(3429),i(58404),i(98548),i(20736),i(4169),i(92858),i(12046),i(95186),i(60816),i(24776),i(93875),i(14215),i(75200),i(80987),i(31531),i(6783),i(26799),i(43356),i(86897),i(5772),i(79766),i(2098),i(78191),i(79061),i(80163),i(1045),i(17762),i(334),i(93242),i(87405),i(67726),i(59312),i(29831),i(89710),i(40130),i(31516),i(36845),i(13564),i(32769),i(83731),i(62121),i(55688),i(15015),i(95629),i(9612),i(52109),i(6585),i(3621),i(63358),i(76326),i(4807),i(30316),i(29126),i(61888),i(18559),i(42296),i(17331),i(41290),i(91236),i(82906),i(52957),i(82361),i(65352),i(71394),i(73574),i(81135),i(94527),i(29832),i(95559),i(68631),i(56803),i(18143),i(47365),i(67079),i(2903),i(85570),i(71470),i(80136),i(91507),i(85289),i(98843),i(91790),i(52737),i(16040),i(34396),i(5250),i(49878),i(84271),i(48643),i(4618),i(80657),i(94449),i(97325),i(3629),i(79506),i(26779),i(98420),i(54223),i(8725),i(51218),i(21793),i(13895),i(15576),i(28941),i(19438),i(15022),i(56416),i(92758),i(78435),i(53902),i(40481),i(78730),i(2570),i(71666),i(72257),i(41822),i(99987),i(11838),i(39068);const d=l.n.getLogger("esri.views.2d.layers.TileLayerView2D"),m=[0,0];let y=class extends((0,p.i)((0,g.aa)((0,h.r)((0,n.l)(f.d))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new a.s("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new a.s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.refresh()})),i&&this.addResolvingPromise(Promise.reject(i))}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new o.h(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new c.p({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new c.c({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return(0,w.a)(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))}isUpdating(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(m,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,t){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,s=!(0,l.t)(t)&&t.signal;if(!i)try{return await this._fetchImage(e,s)}catch(e){if(!(0,a.g)(e)&&!this.resampling)return this._createBlankImage();throw e}const r=new u.e(0,0,0,0);let h;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:s}),r.level!==e.level&&!this.resampling)return this._createBlankImage();h=await this._fetchImage(r,s)}catch(t){if((0,a.g)(t))throw t;h=await this._fetchImage(e,s)}const{level:n,row:o,col:c}=r;return this.resampling&&n!==e.level?this._resampleImage(h,n,o,c,e.level,e.row,e.col):h}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(e){(0,a.g)(e)||d.error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})}_resampleImage(e,t,i,s,a,l,r){const h=this._tileInfoView.tileInfo.size,n=this._tileInfoView.getTileResolution(t),o=this._tileInfoView.getTileResolution(a);let u=this._tileInfoView.getLODInfoAt(a);const c=u.getXForColumn(r),f=u.getYForRow(l);u=this._tileInfoView.getLODInfoAt(t);const g=u.getXForColumn(s),p=u.getYForRow(i),w=Math.round((c-g)/n),d=Math.round(-(f-p)/n),m=Math.round(h[0]*(o/n)),y=Math.round(h[1]*(o/n)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,w,d,m,y,0,0,h[0],h[1]),_}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return[t.width,t.height]=e,t}};(0,s.e)([(0,r.y)()],y.prototype,"resampling",null),y=(0,s.e)([(0,r.n)("esri.views.2d.layers.TileLayerView2D")],y);const _=y}}]);