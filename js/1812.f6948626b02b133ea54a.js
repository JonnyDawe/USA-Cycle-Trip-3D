(self.webpackChunk=self.webpackChunk||[]).push([[1812],{61812:(e,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>y});var t=s(78155),r=s(73574),a=s(40130),h=s(80219),n=s(36845),o=s(88903),l=s(31280),c=s(68874),p=s(68683),d=s(50822);s(20215),s(80987),s(98548),s(20736),s(4169),s(92858),s(31531),s(82906),s(52957),s(29126),s(6585),s(3621),s(63358),s(62121),s(81135),s(94527),s(17762),s(60816),s(61888),s(29832),s(31516),s(52109),s(89710),s(1045),s(75200),s(334),s(93242),s(5772),s(14215),s(32769),s(83731),s(58404),s(71470),s(29986),s(7571),s(65352),s(26882),s(2566),s(43356),s(85774),s(67726),s(93443),s(13564),s(29218),s(84352),s(29831),s(90258),s(84271),s(25894),s(13513),s(57424),s(18143),s(91236),s(47365),s(67079),s(13838),s(83991),s(34396),s(5250),s(49878),s(48643),s(30316),s(4618),s(80657),s(94449),s(97325),s(3629),s(78191),s(50388),s(24776),s(76119),s(60978),s(40481),s(78730),s(2098),s(87405),s(11107),s(98128),s(97431),s(28090),s(93875),s(3805),s(6783),s(95186),s(71391),s(55688),s(15015),s(95629),s(9612),s(76326),s(4807),s(18559),s(42296),s(17331),s(41290),s(82361),s(71394),s(95559),s(68631),s(56803),s(2903),s(85570),s(80136),s(91507),s(85289),s(98843),s(91790),s(52737),s(16040),s(79506),s(26779),s(98420),s(54223),s(8725),s(51218),s(21793),s(13895),s(15576),s(28941),s(19438),s(15022),s(56416),s(92758),s(78435),s(53902),s(2570),s(71666),s(72257),s(41822),s(99987),s(11838),s(39068),s(59312),s(79061),s(80163),s(26799),s(86897),s(79766),s(33180);const u="sublayers",g="layerView",w=Object.freeze({remove(){},pause(){},resume(){}});let f=class extends((0,l.l)(d.d)){async fetchPopupFeatures(e){return(await Promise.all(Array.from(this.graphicsViews(),(i=>i.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){(0,h.r)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():(0,h.r)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,i){if(this.suspended)return null;const s=Array.from(this.graphicsViews(),(async s=>{const t=await s.hitTest(e,i);if(t){if((0,h.r)(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(s);!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate)}return t}return null}));return(await Promise.all(s)).filter((e=>!!e))[0]||null}highlight(e){let i;if("number"==typeof e?i=[e]:e instanceof r.h?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.L.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),!i.length)return w;for(const e of this.graphicsViews())e.addHighlight(i);return{remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(i)}}}update(e){for(const i of this.graphicsViews())i.processUpdate(e)}attach(){const e=this.view,i=()=>this.requestUpdate(),s=this.layer.featureCollections;if((0,h.r)(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new c.i(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const r=new p.i({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([(0,n.d)(t,"visible",(e=>r.container.visible=e)),(0,n.d)(r,"updating",(()=>this.notifyChange("updating")))],g)}}else(0,h.r)(this.layer.sublayers)&&this.handles.add((0,n.C)(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u)}detach(){this._destroyGraphicsViews(),this.handles.remove(u)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(g);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),(0,h.t)(this.layer.sublayers))return;const e=[],i=this.view,s=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new c.i(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new p.i({view:i,graphics:t.graphics,requestUpdateCallback:s,container:r});this.handles.add([t.on("graphic-update",a.graphicUpdateHandler),(0,n.d)(t,"visible",(e=>a.container.visible=e)),(0,n.d)(a,"updating",(()=>this.notifyChange("updating")))],g),this.container.addChild(a.container),e.push(a)}this._graphicsViews=e}};f=(0,t.e)([(0,o.n)("esri.views.2d.layers.MapNotesLayerView2D")],f);const y=f}}]);