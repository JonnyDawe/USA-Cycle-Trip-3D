(self.webpackChunk=self.webpackChunk||[]).push([[7370],{67370:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>_});var s=i(78155),l=i(83731),a=i(20215),r=i(88903),h=(i(80219),i(20736)),n=i(2395),u=i(31280),c=i(93443),d=i(85774),o=i(50822),f=i(71391);i(40130),i(80987),i(98548),i(92858),i(31531),i(4169),i(3429),i(58404),i(12046),i(95186),i(60816),i(24776),i(93875),i(14215),i(75200),i(6783),i(29218),i(26799),i(43356),i(86897),i(5772),i(79766),i(2098),i(78191),i(79061),i(80163),i(1045),i(17762),i(334),i(93242),i(87405),i(67726),i(59312),i(29831),i(89710),i(31516),i(36845),i(13564),i(32769),i(62121),i(55688),i(15015),i(95629),i(9612),i(52109),i(6585),i(3621),i(63358),i(76326),i(4807),i(30316),i(29126),i(61888),i(18559),i(42296),i(17331),i(41290),i(91236),i(82906),i(52957),i(82361),i(65352),i(71394),i(73574),i(81135),i(94527),i(29832),i(95559),i(68631),i(56803),i(18143),i(47365),i(67079),i(2903),i(85570),i(71470),i(80136),i(91507),i(85289),i(98843),i(91790),i(52737),i(16040),i(34396),i(5250),i(49878),i(84271),i(48643),i(4618),i(80657),i(94449),i(97325),i(3629),i(79506),i(26779),i(98420),i(54223),i(8725),i(51218),i(21793),i(13895),i(15576),i(28941),i(19438),i(15022),i(56416),i(92758),i(78435),i(53902),i(40481),i(78730),i(2570),i(71666),i(72257),i(41822),i(99987),i(11838),i(39068);const p=[102113,102100,3857,3785,900913];let y=class extends((0,f.aa)((0,n.r)((0,u.l)(o.d)))){constructor(){super(...arguments),this._handles=new l.u,this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e=this.layer.activeLayer,t=this.tileMatrixSet;if(!t)return;const i=t.tileInfo.spatialReference;let s=e.fullExtent&&e.fullExtent.clone();i.isWebMercator?s=(0,h.d)(s):i.isWGS84||(s=t.fullExtent),this._tileInfoView=new c.h(t.tileInfo,s),this._fetchQueue=new d.p({tileInfoView:this._tileInfoView,process:e=>this.fetchTile(e)}),this._tileStrategy=new d.c({cachePolicy:"keep",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh()))),super.attach()}detach(){super.detach(),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){return this._fetchQueue.length>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;[i.x,i.y]=this._tileInfoView.getTileCoords([0,0],t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._tileInfoView.getTileCoords(i,t.key);const s={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then((e=>{t.bitmap.source=e,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t)})).catch((e=>{(0,a.g)(e)||(t.bitmap.source=null,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t))}))};return s.promise.finally((()=>s.fulfilled=!0)),this._tileRequests.set(t,s),this.requestUpdate(),t}releaseTile(e){const t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){return this.layer.fetchTile(e.level,e.row,e.col)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t})).catch((t=>{(0,a.g)(t)||(e.bitmap.source=null)})).finally((()=>{e.requestRender(),this.notifyChange("updating"),t.fulfilled=!0}))};this._tileRequests.set(e,t)})),this.notifyChange("updating")}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>p.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i}};(0,s.e)([(0,r.y)()],y.prototype,"suspended",void 0),(0,s.e)([(0,r.y)({readOnly:!0})],y.prototype,"tileMatrixSet",null),y=(0,s.e)([(0,r.n)("esri.views.2d.layers.WMTSLayerView2D")],y);const _=y}}]);