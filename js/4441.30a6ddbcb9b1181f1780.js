(self.webpackChunk=self.webpackChunk||[]).push([[4441],{84441:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>G});var i=r(78155),s=r(82906),o=(r(34396),r(94449)),a=r(80987),n=r(20215),l=r(80219),p=r(79506),d=r(36845),y=r(88903),u=r(4169),c=r(41290),h=r(98420),f=r(54223),g=r(13895),m=r(15576),v=r(19438),b=r(86315),I=r(51962),w=r(92758),L=r(55753),F=r(72257),S=r(2502),E=r(52957),j=r(65862),O=r(78435),T=r(16040),_=r(41822),P=r(18143),x=r(99987),A=r(61888);r(40130),r(20736),r(92858),r(31531),r(29126),r(6585),r(3621),r(63358),r(62121),r(81135),r(94527),r(17762),r(60816),r(29832),r(31516),r(52109),r(98548),r(5250),r(49878),r(84271),r(48643),r(73574),r(89710),r(30316),r(4618),r(65352),r(80657),r(97325),r(3629),r(8725),r(91236),r(9612),r(76326),r(82361),r(71409),r(68631),r(80962),r(47365),r(67079),r(53902),r(40481),r(78730),r(83731),r(26779),r(85289),r(98843),r(52737),r(51218),r(21793),r(28941),r(15022),r(56416),r(2570),r(71666),r(91790);let D=class extends i.a{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,i.e)([(0,y.y)({type:String,json:{read:!0,write:!0}})],D.prototype,"name",void 0),(0,i.e)([(0,y.y)({type:String,json:{read:!0,write:!0}})],D.prototype,"field",void 0),(0,i.e)([(0,y.y)({type:[Number],json:{read:!0,write:!0}})],D.prototype,"currentRangeExtent",void 0),(0,i.e)([(0,y.y)({type:[Number],json:{read:!0,write:!0}})],D.prototype,"fullRangeExtent",void 0),(0,i.e)([(0,y.y)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],D.prototype,"type",void 0),D=(0,i.e)([(0,y.n)("esri.layers.support.RangeInfo")],D);var R=D;const U=["3DObject","Point"],Q=l.n.getLogger("esri.layers.SceneLayer"),q=(0,F.l)();let N=class extends((0,b.R)((0,f.p)((0,g.l)((0,m.w)((0,v.s)((0,p.l)((0,h.i)(c.b)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,i,s,o;const a=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(i=r.domains)?void 0:i[e];return a&&"inherited"!==a.type?a:null!=(s=null==(o=this.getField(e))?void 0:o.domain)?s:null}getFeatureType(e){return e&&(0,l.r)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,l.r)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,l.r)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,l.r)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new S.e(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:j.s.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return C[this.profile]||"mesh"}set renderer(e){(0,E.c)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,l.r)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:I.s,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:i,supportsUploadWithItemId:s,supportsReturnServiceEditsInSourceSpatialReference:o},data:{supportsZ:a,supportsM:n,isVersioned:p,supportsAttachment:d},operations:{supportsEditing:y,supportsUpdate:u,supportsQuery:c,supportsQueryAttachments:h}}=e,f=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:o,supportsRollbackOnFailure:i,supportsGeometryUpdate:!1,supportsUploadWithItemId:s},data:{supportsAttachment:d,supportsZ:a,supportsM:n,isVersioned:p},operations:{supportsQuery:c,supportsQueryAttachments:h,supportsEditing:y&&f,supportsAdd:!1,supportsDelete:!1,supportsUpdate:u&&f}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return(0,l.r)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return(0,l.r)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&k[r]?k[r]:(Q.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=(0,l.r)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(n.w).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t)]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>(0,_.t)(this,{origin:"service"},t))).then((()=>(0,E.c)(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r),Promise.resolve(this)}createQuery(){const e=new P.b;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(Q.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,x.a)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,l.r)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,l.t)(this.associatedLayer))throw new n.s("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n.s("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new n.s("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new n.s("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.statisticsInfo)if(e.name===r.name){const r=(0,a.D)(this.parsedUrl.path,e.href);return(0,a.L)(r,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new n.s("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(0,e)}async applyEdits(e,t){const i=await r.e(2479).then(r.bind(r,52479));if(await this.load(),(0,l.t)(this.associatedLayer))throw new n.s(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),i.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&-1===U.indexOf(e.layerType))throw new n.s("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.s("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n.s("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});!function(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else{const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=s;break;case"vertex-reference-frame":r=!0,i=!s;break;default:r=!1}}if(!r)throw new n.s("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new n.s("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new n.s("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!((0,l.r)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),i={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=i}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,l.t)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,l.t)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,y.e)(this);for(let r=0;r<e.length;r++){const i=e[r],s=this.originIdOf(i),o=this.associatedLayer.originIdOf(i);s<o&&(2===o||3===o)&&t.setAtOrigin(i,this.associatedLayer[i],o)}}async _setAssociatedFeatureLayer(e){if(-1===["mesh-pyramids","points"].indexOf(this.profile))return;const t=new L.l(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(e){(0,n.g)(e)||this._logWarningOnPopupEnabled()}}_logWarningOnPopupEnabled(){(0,d.i)(this,["popupTemplate","popupEnabled"],(()=>this.popupEnabled&&null!=this.popupTemplate)).then((()=>()=>{const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?Q.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):Q.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}))}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&Q.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Q.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,i.e)([(0,y.y)({types:{key:"type",base:w.p,typeMap:{selection:w.c}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],N.prototype,"featureReduction",void 0),(0,i.e)([(0,y.y)({type:[R],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],N.prototype,"rangeInfos",void 0),(0,i.e)([(0,y.y)({json:{read:!1}})],N.prototype,"associatedLayer",void 0),(0,i.e)([(0,y.y)({type:["show","hide"]})],N.prototype,"listMode",void 0),(0,i.e)([(0,y.y)({type:["ArcGISSceneServiceLayer"]})],N.prototype,"operationalLayerType",void 0),(0,i.e)([(0,y.y)({json:{read:!1},readOnly:!0})],N.prototype,"type",void 0),(0,i.e)([(0,y.y)({...q.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],N.prototype,"fields",void 0),(0,i.e)([(0,y.y)()],N.prototype,"types",null),(0,i.e)([(0,y.y)()],N.prototype,"typeIdField",null),(0,i.e)([(0,y.y)()],N.prototype,"formTemplate",null),(0,i.e)([(0,y.y)({readOnly:!0})],N.prototype,"fieldsIndex",null),(0,i.e)([(0,y.y)({type:T.i,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],N.prototype,"floorInfo",void 0),(0,i.e)([(0,y.y)(q.outFields)],N.prototype,"outFields",void 0),(0,i.e)([(0,y.y)({type:j.s,readOnly:!0,json:{read:!1}})],N.prototype,"nodePages",void 0),(0,i.e)([(0,u.e)("service","nodePages",["nodePages","pointNodePages"])],N.prototype,"readNodePages",null),(0,i.e)([(0,y.y)({type:[j.l],readOnly:!0})],N.prototype,"materialDefinitions",void 0),(0,i.e)([(0,y.y)({type:[j.u],readOnly:!0})],N.prototype,"textureSetDefinitions",void 0),(0,i.e)([(0,y.y)({type:[j.m],readOnly:!0})],N.prototype,"geometryDefinitions",void 0),(0,i.e)([(0,y.y)({readOnly:!0})],N.prototype,"serviceUpdateTimeStamp",void 0),(0,i.e)([(0,y.y)({readOnly:!0})],N.prototype,"attributeStorageInfo",void 0),(0,i.e)([(0,y.y)({readOnly:!0})],N.prototype,"statisticsInfo",void 0),(0,i.e)([(0,y.y)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],N.prototype,"definitionExpression",void 0),(0,i.e)([(0,y.y)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],N.prototype,"path",void 0),(0,i.e)([(0,y.y)(g.c)],N.prototype,"elevationInfo",null),(0,i.e)([(0,y.y)({type:String})],N.prototype,"geometryType",null),(0,i.e)([(0,y.y)(g.a)],N.prototype,"labelsVisible",void 0),(0,i.e)([(0,y.y)({type:[O.E],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:w.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:w.r},write:!0}})],N.prototype,"labelingInfo",void 0),(0,i.e)([(0,y.y)(g.f)],N.prototype,"legendEnabled",void 0),(0,i.e)([(0,y.y)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r,i;if("number"==typeof e&&e>=0&&e<=1)return e;const s=null==(r=t.layerDefinition)||null==(i=r.drawingInfo)?void 0:i.transparency;return void 0!==s?(0,A.r)(s):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],N.prototype,"opacity",void 0),(0,i.e)([(0,y.y)({types:o.n,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],N.prototype,"renderer",null),(0,i.e)([(0,y.y)({json:{read:!1}})],N.prototype,"cachedDrawingInfo",void 0),(0,i.e)([(0,u.e)("service","cachedDrawingInfo")],N.prototype,"readCachedDrawingInfo",null),(0,i.e)([(0,y.y)({readOnly:!0,json:{read:!1}})],N.prototype,"capabilities",null),(0,i.e)([(0,y.y)({type:Boolean,json:{read:!1}})],N.prototype,"editingEnabled",null),(0,i.e)([(0,y.y)(g.s)],N.prototype,"popupEnabled",void 0),(0,i.e)([(0,y.y)({type:s.M,json:{name:"popupInfo",write:!0}})],N.prototype,"popupTemplate",void 0),(0,i.e)([(0,y.y)({readOnly:!0,json:{read:!1}})],N.prototype,"defaultPopupTemplate",null),(0,i.e)([(0,y.y)({type:String,json:{read:!1}})],N.prototype,"objectIdField",void 0),(0,i.e)([(0,u.e)("service","objectIdField",["objectIdField","fields"])],N.prototype,"readObjectIdField",null),(0,i.e)([(0,y.y)({type:String,json:{read:!1}})],N.prototype,"globalIdField",void 0),(0,i.e)([(0,u.e)("service","globalIdField",["globalIdField","fields"])],N.prototype,"readGlobalIdField",null),(0,i.e)([(0,y.y)({readOnly:!0,type:String,json:{read:!1}})],N.prototype,"displayField",null),(0,i.e)([(0,y.y)({type:String,json:{read:!1}})],N.prototype,"profile",void 0),(0,i.e)([(0,u.e)("service","profile",["store.profile"])],N.prototype,"readProfile",null),(0,i.e)([(0,y.y)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],N.prototype,"normalReferenceFrame",void 0),(0,i.e)([(0,y.y)(g.o)],N.prototype,"screenSizePerspectiveEnabled",void 0),N=(0,i.e)([(0,y.n)("esri.layers.SceneLayer")],N);const k={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},C={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},G=N}}]);