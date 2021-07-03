(self.webpackChunk=self.webpackChunk||[]).push([[7863],{17863:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A});var i,o=r(78155),n=r(80987),s=r(82906),a=r(34396),l=r(94449),p=r(81135),d=r(20215),y=r(80219),u=r(79506),c=r(88903),h=r(4169),f=r(41290),m=r(54223),v=r(51218),g=r(13895),b=r(15576),w=r(28941),S=r(19438),I=r(15022),R=r(2570),x=r(72257),j=r(52957),F=r(78435),T=r(92758),D=r(41822),k=r(18143),N=r(99987),O=r(92858),P=r(98548);r(20736),r(31531),r(40130),r(29126),r(6585),r(3621),r(63358),r(62121),r(5250),r(94527),r(17762),r(60816),r(49878),r(84271),r(52109),r(61888),r(48643),r(73574),r(89710),r(30316),r(4618),r(65352),r(29832),r(31516),r(80657),r(97325),r(3629),r(8725),r(91236),r(9612),r(76326),r(56416),r(47365),r(67079),r(53902),r(40481),r(78730);let E=i=class extends o.a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new i({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,o.e)([(0,c.y)({type:Number,json:{write:!0}})],E.prototype,"age",void 0),(0,o.e)([(0,c.y)({type:Number,json:{write:!0}})],E.prototype,"ageReceived",void 0),(0,o.e)([(0,c.y)({type:Number,json:{write:!0}})],E.prototype,"displayCount",void 0),(0,o.e)([(0,c.y)({type:Number,json:{write:!0}})],E.prototype,"maxObservations",void 0),E=i=(0,o.e)([(0,c.n)("esri.layers.support.PurgeOptions")],E);var L=E;const _=y.n.getLogger("esri.layers.StreamLayer"),C=(0,x.l)();let U=class extends((0,v.t)((0,I.c)((0,S.s)((0,w.o)((0,m.p)((0,g.l)((0,b.w)((0,u.l)(f.b))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new L,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=O.k.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in y.e))return this.addResolvingPromise(Promise.reject(new d.s("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,y.r)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(d.w).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return(0,R.u)(e,t)}writeWebSceneFeatureReduction(e,t,r,i){(0,R.c)(e,t,"layerDefinition.featureReduction",i)}set renderer(e){(0,j.c)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=(0,l.p)(i,t,r)||void 0;return e||_.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new a.P({defaultSymbol:W(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:W(e.symbol,e,r)})))}):new l.m({symbol:W(t.defaultSymbol,t,r)})}writeRenderer(e,t,r,i){(0,l.o)(e,t,r,i)}writeWebSceneRenderer(e,t,r,i){(0,l.o)(e,t,"layerDefinition.drawingInfo.renderer",i)}createPopupTemplate(e){return(0,N.a)(this,e)}createQuery(){const e=new k.b;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var t;if(this.webSocketUrl){var r;if(null==(r=this.timeInfo)||!r.trackIdField)throw new d.s("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new d.s("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new d.s("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new d.s("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await(0,n.L)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...null!=(t=this.sourceJSON)?t:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,j.c)(this.renderer,this.fieldsIndex),(0,j.m)(this.timeInfo,this.fieldsIndex),(0,D.t)(this,{origin:"service"})}};(0,o.e)([(0,c.y)({type:String})],U.prototype,"copyright",void 0),(0,o.e)([(0,c.y)({readOnly:!0})],U.prototype,"defaultPopupTemplate",null),(0,o.e)([(0,c.y)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],U.prototype,"definitionExpression",void 0),(0,o.e)([(0,c.y)({type:String})],U.prototype,"displayField",void 0),(0,o.e)([(0,c.y)({type:g.x})],U.prototype,"elevationInfo",void 0),(0,o.e)([(0,h.e)("featureReduction",["layerDefinition.featureReduction"])],U.prototype,"readFeatureReduction",null),(0,o.e)([(0,o.o)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:R.s}})],U.prototype,"writeWebSceneFeatureReduction",null),(0,o.e)([(0,c.y)(C.fields)],U.prototype,"fields",void 0),(0,o.e)([(0,c.y)(C.fieldsIndex)],U.prototype,"fieldsIndex",void 0),(0,o.e)([(0,c.y)({type:P.M})],U.prototype,"geometryDefinition",void 0),(0,o.e)([(0,c.y)({type:n.i.apiValues,json:{read:{reader:n.i.read}}})],U.prototype,"geometryType",void 0),(0,o.e)([(0,c.y)(g.a)],U.prototype,"labelsVisible",void 0),(0,o.e)([(0,c.y)({type:[F.E],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:T.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],U.prototype,"labelingInfo",void 0),(0,o.e)([(0,c.y)(g.f)],U.prototype,"legendEnabled",void 0),(0,o.e)([(0,c.y)({type:["show","hide"]})],U.prototype,"listMode",void 0),(0,o.e)([(0,c.y)({type:c.N})],U.prototype,"maxReconnectionAttempts",void 0),(0,o.e)([(0,c.y)({type:c.N})],U.prototype,"maxReconnectionInterval",void 0),(0,o.e)([(0,c.y)(g.j)],U.prototype,"maxScale",void 0),(0,o.e)([(0,c.y)(g.v)],U.prototype,"minScale",void 0),(0,o.e)([(0,c.y)({type:String})],U.prototype,"objectIdField",void 0),(0,o.e)([(0,c.y)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],U.prototype,"operationalLayerType",void 0),(0,o.e)([(0,c.y)(g.s)],U.prototype,"popupEnabled",void 0),(0,o.e)([(0,c.y)({type:s.M,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],U.prototype,"popupTemplate",void 0),(0,o.e)([(0,c.y)({type:L})],U.prototype,"purgeOptions",void 0),(0,o.e)([(0,c.y)({types:l.a,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],U.prototype,"renderer",null),(0,o.e)([(0,h.e)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,h.e)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],U.prototype,"readRenderer",null),(0,o.e)([(0,o.o)("renderer")],U.prototype,"writeRenderer",null),(0,o.e)([(0,o.o)("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:l.n}})],U.prototype,"writeWebSceneRenderer",null),(0,o.e)([(0,c.y)(g.o)],U.prototype,"screenSizePerspectiveEnabled",void 0),(0,o.e)([(0,c.y)({type:O.k,json:{origins:{service:{read:{source:"spatialReference"}}}}})],U.prototype,"spatialReference",void 0),(0,o.e)([(0,c.y)({json:{read:!1}})],U.prototype,"type",void 0),(0,o.e)([(0,c.y)(g.p)],U.prototype,"url",void 0),(0,o.e)([(0,c.y)({type:Number})],U.prototype,"updateInterval",void 0),(0,o.e)([(0,c.y)({type:String})],U.prototype,"webSocketUrl",void 0),U=(0,o.e)([(0,c.n)("esri.layers.StreamLayer")],U);const W=(0,c.D)({types:p.M}),A=U}}]);