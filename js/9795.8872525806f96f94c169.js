(self.webpackChunk=self.webpackChunk||[]).push([[9795],{39795:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ce});var s=r(78155),i=r(40130),o=r(18559),l=r(20215),n=r(80219),a=r(95629),y=r(79506),p=r(80987),u=r(88903),d=r(4169),c=r(92858),h=r(41290),v=r(44844),f=r(67075),g=r(98420),b=r(54223),m=r(13895),w=r(15576),S=r(19438),x=r(86315),O=r(68631),B=r(29126),j=r(81135),I=r(55753);r(32769),r(83731),r(36845),r(9612),r(98548),r(20736),r(31531),r(62121),r(82906),r(52957),r(6585),r(3621),r(63358),r(34396),r(5250),r(94527),r(17762),r(60816),r(49878),r(84271),r(52109),r(61888),r(48643),r(73574),r(89710),r(30316),r(4618),r(65352),r(29832),r(31516),r(80657),r(94449),r(97325),r(3629),r(16040),r(82361),r(26779),r(85289),r(98843),r(52737),r(47365),r(67079),r(51218),r(21793),r(28941),r(15022),r(91236),r(56416),r(8725),r(92758),r(78435),r(53902),r(40481),r(78730),r(2570),r(71666),r(72257),r(18143),r(41822),r(91790),r(99987),r(51962),r(71409),r(65862),r(76326),r(80962);let T=class extends s.a{constructor(){super(...arguments),this.type=null}};(0,s.e)([(0,u.y)({type:String,readOnly:!0,json:{write:!0}})],T.prototype,"type",void 0),T=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFilterAuthoringInfo")],T);var F,k=T;let L=F=class extends s.a{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new F({filterType:this.filterType,filterValues:(0,n.y)(this.filterValues)})}};(0,s.e)([(0,u.y)({type:String,json:{write:!0}})],L.prototype,"filterType",void 0),(0,s.e)([(0,u.y)({type:[String],json:{write:!0}})],L.prototype,"filterValues",void 0),L=F=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFilterAuthoringInfoType")],L);var A,E=L;const N=i.L.ofType(E);let R=A=class extends s.a{clone(){return new A({filterTypes:(0,n.y)(this.filterTypes)})}};(0,s.e)([(0,u.y)({type:N,json:{write:!0}})],R.prototype,"filterTypes",void 0),R=A=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],R);var _,M=R;const q=i.L.ofType(M);let P=_=class extends k{constructor(){super(...arguments),this.type="checkbox"}clone(){return new _({filterBlocks:(0,n.y)(this.filterBlocks)})}};(0,s.e)([(0,u.y)({type:["checkbox"]})],P.prototype,"type",void 0),(0,s.e)([(0,u.y)({type:q,json:{write:!0}})],P.prototype,"filterBlocks",void 0),P=_=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],P);var C=P;let K=class extends s.a{};(0,s.e)([(0,u.y)({readOnly:!0,json:{read:!1}})],K.prototype,"type",void 0),K=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFilterMode")],K);var V,J=K;let U=V=class extends J{constructor(){super(...arguments),this.type="solid"}clone(){return new V}};(0,s.e)([(0,u.y)({type:["solid"],readOnly:!0,json:{write:!0}})],U.prototype,"type",void 0),U=V=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFilterModeSolid")],U);var H,z=U;let D=H=class extends J{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new H({edges:(0,n.y)(this.edges)})}};(0,s.e)([(0,B.r)({wireFrame:"wire-frame"})],D.prototype,"type",void 0),(0,s.e)([(0,u.y)(j.C)],D.prototype,"edges",void 0),D=H=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFilterModeWireFrame")],D);var W,X=D;let G=W=class extends J{constructor(){super(...arguments),this.type="x-ray"}clone(){return new W}};(0,s.e)([(0,u.y)({type:["x-ray"],readOnly:!0,json:{write:!0}})],G.prototype,"type",void 0),G=W=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFilterModeXRay")],G);var Q,Y=G;const Z={nonNullable:!0,types:{key:"type",base:J,typeMap:{solid:z,"wire-frame":X,"x-ray":Y}},json:{read:e=>{switch(e&&e.type){case"solid":return z.fromJSON(e);case"wireFrame":return X.fromJSON(e);case"x-ray":return Y.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let $=Q=class extends s.a{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new z,this.title=""}clone(){return new Q({filterExpression:this.filterExpression,filterMode:(0,n.y)(this.filterMode),title:this.title})}};(0,s.e)([(0,u.y)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"filterExpression",void 0),(0,s.e)([(0,u.y)(Z)],$.prototype,"filterMode",void 0),(0,s.e)([(0,u.y)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"title",void 0),$=Q=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFilterBlock")],$);var ee,te=$;const re=i.L.ofType(te);let se=ee=class extends s.a{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,O.o)(),this.name=null}clone(){return new ee({description:this.description,filterBlocks:(0,n.y)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,n.y)(this.filterAuthoringInfo)})}};(0,s.e)([(0,u.y)({type:String,json:{write:!0}})],se.prototype,"description",void 0),(0,s.e)([(0,u.y)({type:re,json:{write:{enabled:!0,isRequired:!0}}})],se.prototype,"filterBlocks",void 0),(0,s.e)([(0,u.y)({types:{key:"type",base:k,typeMap:{checkbox:C}},json:{read:e=>{switch(e&&e.type){case"checkbox":return C.fromJSON(e);default:return null}},write:!0}})],se.prototype,"filterAuthoringInfo",void 0),(0,s.e)([(0,u.y)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],se.prototype,"id",void 0),(0,s.e)([(0,u.y)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],se.prototype,"name",void 0),se=ee=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFilter")],se);var ie=se;const oe=n.n.getLogger("esri.layers.support.BuildingSummaryStatistics");let le=class extends s.a{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,s.e)([(0,u.y)({type:String})],le.prototype,"fieldName",void 0),(0,s.e)([(0,u.y)({type:String})],le.prototype,"modelName",void 0),(0,s.e)([(0,u.y)({type:String})],le.prototype,"label",void 0),(0,s.e)([(0,u.y)({type:Number})],le.prototype,"min",void 0),(0,s.e)([(0,u.y)({type:Number})],le.prototype,"max",void 0),(0,s.e)([(0,u.y)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],le.prototype,"mostFrequentValues",void 0),(0,s.e)([(0,u.y)({type:[Number]})],le.prototype,"subLayerIds",void 0),le=(0,s.e)([(0,u.n)("esri.layers.support.BuildingFieldStatistics")],le);let ne=class extends(p.f.LoadableMixin((0,p.d)(s.a))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(oe.error("building summary statistics are not loaded"),null)}load(e){const t=(0,n.r)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,p.L)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,s.e)([(0,u.y)({constructOnly:!0,type:String})],ne.prototype,"url",void 0),(0,s.e)([(0,u.y)({readOnly:!0,type:[le],json:{read:{source:"summary"}}})],ne.prototype,"fields",null),ne=(0,s.e)([(0,u.n)("esri.layers.support.BuildingSummaryStatistics")],ne);var ae=ne;const ye=n.n.getLogger("esri.layers.BuildingSceneLayer"),pe=i.L.ofType(ie),ue=(0,n.y)(f.d.sublayersProperty);ue.json.origins["web-scene"]={type:[v.E],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},ue.json.origins["portal-item"]={type:[v.E],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let de=class extends((0,x.R)((0,b.p)((0,m.l)((0,w.w)((0,S.s)((0,y.l)((0,g.i)(h.b)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new o.p({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new pe,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=f.d.readSublayers(e,t,r);return f.d.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:t,context:r}){f.d.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages.push(new l.s("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];f.d.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,n.y)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,p.D)(this.parsedUrl.path,t.statisticsHRef);return new ae({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=(0,n.r)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(l.w).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,a.n)(this,(e=>{f.d.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new l.s("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&ye.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&ye.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new I.l(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){ye.warn("Associated feature service item could not be loaded",e)}}};(0,s.e)([(0,u.y)({type:["BuildingSceneLayer"]})],de.prototype,"operationalLayerType",void 0),(0,s.e)([(0,u.y)({readOnly:!0})],de.prototype,"allSublayers",void 0),(0,s.e)([(0,u.y)(ue)],de.prototype,"sublayers",void 0),(0,s.e)([(0,d.e)("service","sublayers")],de.prototype,"readSublayers",null),(0,s.e)([(0,u.y)({type:pe,nonNullable:!0,json:{write:!0}})],de.prototype,"filters",void 0),(0,s.e)([(0,u.y)({type:String,json:{write:!0}})],de.prototype,"activeFilterId",void 0),(0,s.e)([(0,u.y)({readOnly:!0,type:ae})],de.prototype,"summaryStatistics",void 0),(0,s.e)([(0,d.e)("summaryStatistics",["statisticsHRef"])],de.prototype,"readSummaryStatistics",null),(0,s.e)([(0,u.y)({type:[String],json:{read:!1}})],de.prototype,"outFields",void 0),(0,s.e)([(0,u.y)(m.w)],de.prototype,"fullExtent",void 0),(0,s.e)([(0,u.y)({type:["show","hide","hide-children"]})],de.prototype,"listMode",void 0),(0,s.e)([(0,u.y)((0,m.d)(c.k))],de.prototype,"spatialReference",void 0),(0,s.e)([(0,u.y)(m.c)],de.prototype,"elevationInfo",null),(0,s.e)([(0,u.y)({json:{read:!1},readOnly:!0})],de.prototype,"type",void 0),(0,s.e)([(0,u.y)()],de.prototype,"associatedFeatureServiceItem",void 0),de=(0,s.e)([(0,u.n)("esri.layers.BuildingSceneLayer")],de);const ce=de}}]);