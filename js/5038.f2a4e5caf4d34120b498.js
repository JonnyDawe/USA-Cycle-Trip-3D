(self.webpackChunk=self.webpackChunk||[]).push([[5038],{85038:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h});var l=i(78155),a=i(20215),r=i(80219),s=i(88903),n=i(7571),o=i(32422),y=i(50822),f=i(71391),u=i(49038),d=i(67390);i(60816),i(65352),i(31531),i(92858),i(20736),i(4169),i(93242),i(98548),i(63358),i(80987),i(58404),i(73574),i(82906),i(40130),i(52957),i(29126),i(6585),i(3621),i(62121),i(81135),i(94527),i(17762),i(61888),i(29832),i(31516),i(52109),i(89710),i(55688),i(15015),i(95629),i(9612),i(76326),i(4807),i(30316),i(18559),i(32769),i(83731),i(36845),i(42296),i(17331),i(41290),i(95559),i(68631),i(26779),i(82361),i(79679),i(71542),i(16063),i(43194),i(62654),i(15346),i(65311),i(67726),i(59312),i(72105),i(80657),i(5250),i(95186),i(53185),i(60183),i(93875),i(14215),i(20868),i(72600),i(334),i(37762),i(92722),i(25290),i(7552),i(78082),i(27270),i(37191),i(30665),i(28090),i(47365),i(67079),i(84796),i(53902),i(13895),i(91236),i(4618),i(24776),i(29831),i(87405),i(48643),i(84320),i(93450),i(11838),i(39068),i(3629),i(97431),i(32892),i(41374),i(86897),i(41392),i(79949),i(6660),i(6783),i(75200),i(29218),i(49293),i(30494),i(71394),i(13564),i(56803),i(18143),i(2903),i(85570),i(71470),i(80136),i(91507),i(85289),i(98843),i(91790),i(52737),i(16040),i(34396),i(49878),i(84271),i(94449),i(97325),i(79506),i(98420),i(54223),i(8725),i(51218),i(21793),i(15576),i(28941),i(19438),i(15022),i(56416),i(92758),i(78435),i(40481),i(78730),i(2570),i(71666),i(72257),i(41822),i(99987);let p=class extends((0,f.aa)((0,o.l)((0,u.i)((0,o.m)(y.d))))){constructor(){super(...arguments),this.type="tile-3d"}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){if(this.tileInfo){const e=this.tileInfo.lods,t=e[0].scale,i=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,i)}return{minLevel:0,maxLevel:0}}initialize(){if("web-tile"===this.layer.type){const e=this.layer.get("fullExtent.spatialReference"),t=this.layer.get("tileInfo.spatialReference");if((0,r.t)(e)||(0,r.t)(t)||!(0,n.n)(e,t)){const e="defaults"===this.layer.originOf("fullExtent")||(0,r.t)(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new a.s("layerview:incompatible-fullextent",e)))}}this._addTilingSchemeMatchPromise()}createFetchPopupFeaturesQueryGeometry(e,t){return(0,d.a)(e,t,this.view)}async doRefresh(e){this.suspended||this.emit("data-changed")}};(0,l.e)([(0,s.y)({readOnly:!0})],p.prototype,"imageFormatIsOpaque",null),(0,l.e)([(0,s.y)({readOnly:!0})],p.prototype,"hasMixedImageFormats",null),(0,l.e)([(0,s.y)({aliasOf:"layer.fullExtent"})],p.prototype,"fullExtent",void 0),(0,l.e)([(0,s.y)()],p.prototype,"layer",void 0),(0,l.e)([(0,s.y)({aliasOf:"layer.tileInfo"})],p.prototype,"tileInfo",void 0),(0,l.e)([(0,s.y)({readOnly:!0})],p.prototype,"dataLevelRange",null),p=(0,l.e)([(0,s.n)("esri.views.3d.layers.TileLayerView3D")],p);const h=p}}]);