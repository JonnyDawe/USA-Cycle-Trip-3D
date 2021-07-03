import { e as e$1, a, o as o$1 } from './JSONSupport-9346590f.js';
import { i as i$3, M } from './PopupTemplate-d97f5e88.js';
import { D, L } from './Loadable-d16b3d7d.js';
import { w as w$1, s as s$1 } from './promiseUtils-2ff2b194.js';
import { y as y$1, n as n$3, o, r as r$1 } from './Message-70b34921.js';
import { l as l$3 } from './MultiOriginJSONSupport-859401da.js';
import { y, n as n$2, N as N$1 } from './subclass-fe5fcf78.js';
import { e as e$2 } from './reader-fa0f173d.js';
import { b } from './Layer-aafbe66d.js';
import { i as i$2 } from './APIKeyMixin-7fe44a14.js';
import { p as p$3 } from './ArcGISService-32a080a6.js';
import { l as l$2, s as s$2, c as c$1, f } from './OperationalLayer-a01538e1.js';
import { w } from './PortalLayer-722467e6.js';
import { s } from './ScaleRangeLayer-9b1bf210.js';
import { R as R$1 } from './SceneService-9fbf3dec.js';
import { r } from './enumeration-7d0c165d.js';
import { y as y$2 } from './Field-728fb193.js';
import { l as l$4 } from './fieldProperties-4363f1e0.js';
import { c as a$1, d as d$1, b as a$2, a as a$3 } from './PointCloudUniqueValueRenderer-af8d1d8a.js';
import { a as a$4 } from './popupUtils-5b007a8e.js';
import './Collection-32506e74.js';
import './Point-ee7951c3.js';
import './SpatialReference-843b1520.js';
import './fieldUtils-22be41cd.js';
import './jsonMap-e142bd84.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './assets-73c8998f.js';
import './Identifiable-3ad643f8.js';
import './Polyline-ccd8fb47.js';
import './arcgisLayerUrl-cb5a8728.js';
import './persistableUrlUtils-59858a7e.js';
import './TimeExtent-02acfb1c.js';
import './lengthUtils-824a0190.js';
import './unitUtils-b17203be.js';
import './opacityUtils-b92214c2.js';
import './asyncUtils-015dfd6e.js';
import './Portal-ff63481f.js';
import './PortalItem-4692b2a9.js';
import './multiOriginJSONSupportUtils-510f5718.js';
import './HeightModelInfo-992659fb.js';
import './I3SIndexInfo-b77c2e24.js';
import './uuid-630c0c55.js';
import './resourceUtils-d1624f52.js';
import './fieldType-6799091f.js';
import './FieldsIndex-f71b4f3d.js';
import './ColorStop-ed1033bb.js';
import './Color-ae84a22a.js';
import './mathUtils-a477cc74.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t=class extends a{constructor(r){super(r),this.field=null,this.type=null;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};e$1([y({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),e$1([y({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=e$1([n$2("esri.layers.pointCloudFilters.PointCloudFilter")],t);var l$1=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var d;let p$2=d=class extends l$1{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield";}clone(){return new d({field:this.field,requiredClearBits:y$1(this.requiredClearBits),requiredSetBits:y$1(this.requiredSetBits)})}};e$1([y({type:[N$1],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredSetBits}}}}})],p$2.prototype,"requiredClearBits",void 0),e$1([y({type:[N$1],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredClearBits}}}}})],p$2.prototype,"requiredSetBits",void 0),e$1([r({pointCloudBitfieldFilter:"bitfield"})],p$2.prototype,"type",void 0),p$2=d=e$1([n$2("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p$2);var u$2=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$1;let p$1=n$1=class extends l$1{constructor(r){super(r),this.includedReturns=[],this.type="return";}clone(){return new n$1({field:this.field,includedReturns:y$1(this.includedReturns)})}};e$1([y({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p$1.prototype,"includedReturns",void 0),e$1([r({pointCloudReturnFilter:"return"})],p$1.prototype,"type",void 0),p$1=n$1=e$1([n$2("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p$1);var u$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p;let l=p=class extends l$1{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[];}clone(){return new p({field:this.field,mode:this.mode,values:y$1(this.values)})}};e$1([y({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"mode",void 0),e$1([r({pointCloudValueFilter:"value"})],l.prototype,"type",void 0),e$1([y({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"values",void 0),l=p=e$1([n$2("esri.layers.pointCloudFilters.PointCloudValueFilter")],l);var u=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e={key:"type",base:l$1,typeMap:{value:u,bitfield:u$2,return:u$1}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var i$1;let c=i$1=class extends a$1{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null;}clone(){return new i$1({...this.cloneProperties(),field:y$1(this.field)})}};e$1([r({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),e$1([y({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i$1=e$1([n$2("esri.renderers.PointCloudRGBRenderer")],c);var n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i={key:"type",base:a$1,typeMap:{"point-cloud-class-breaks":d$1,"point-cloud-rgb":n,"point-cloud-stretch":a$2,"point-cloud-unique-value":a$3},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const N=n$3.getLogger("esri.layers.PointCloudLayer"),R=l$4();let O=class extends(R$1(p$3(l$2(w(s(l$3(i$2(b)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new y$2;return "FieldTypeInteger"===e.type&&((e=y$1(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new y$2({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}writeRenderer(e,r,t,o$1){o("layerDefinition.drawingInfo.renderer",e.write(null,o$1),r);}load(e){const r=r$1(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w$1).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=a$4(this,e);return this.formatPopupTemplateReturnsField(r),this.formatPopupTemplateRGBField(r),r}formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$3({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded";}formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$3({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded";}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new s$1("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new s$1("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=D(this.parsedUrl.path,`./statistics/${o.key}`);return L(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new s$1("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s$1("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return ["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&N.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&N.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"));}};e$1([y({type:["PointCloudLayer"]})],O.prototype,"operationalLayerType",void 0),e$1([y(s$2)],O.prototype,"popupEnabled",void 0),e$1([y({type:M,json:{name:"popupInfo",write:!0}})],O.prototype,"popupTemplate",void 0),e$1([y({readOnly:!0,json:{read:!1}})],O.prototype,"defaultPopupTemplate",null),e$1([y({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],O.prototype,"opacity",void 0),e$1([y({type:["show","hide"]})],O.prototype,"listMode",void 0),e$1([y({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],O.prototype,"filters",void 0),e$1([y({type:[y$2]})],O.prototype,"fields",void 0),e$1([y(R.fieldsIndex)],O.prototype,"fieldsIndex",void 0),e$1([e$2("service","fields",["fields","attributeStorageInfo"])],O.prototype,"readServiceFields",null),e$1([y(R.outFields)],O.prototype,"outFields",void 0),e$1([y({readOnly:!0})],O.prototype,"attributeStorageInfo",void 0),e$1([y(c$1)],O.prototype,"elevationInfo",null),e$1([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),e$1([y(f)],O.prototype,"legendEnabled",void 0),e$1([y({types:i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],O.prototype,"renderer",void 0),e$1([o$1("renderer")],O.prototype,"writeRenderer",null),e$1([y({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),O=e$1([n$2("esri.layers.PointCloudLayer")],O);var _=O;

export default _;
