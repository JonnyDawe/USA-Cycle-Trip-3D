import { e as e$2, a, o as o$3, b as p$3, d as d$2 } from './JSONSupport-9346590f.js';
import { s as s$2 } from './promiseUtils-2ff2b194.js';
import { y as y$1, n as n$1 } from './subclass-fe5fcf78.js';
import { r as r$1 } from './Message-70b34921.js';
import { y as y$2 } from './TimeExtent-02acfb1c.js';
import { M } from './Polyline-ccd8fb47.js';
import { k } from './SpatialReference-843b1520.js';
import { p as p$2 } from './persistableUrlUtils-59858a7e.js';
import { s as s$1, o as o$2 } from './jsonMap-e142bd84.js';
import { e as e$3 } from './reader-fa0f173d.js';
import { T } from './fieldUtils-22be41cd.js';
import { m as m$2 } from './lengthUtils-824a0190.js';
import { r as r$2 } from './opacityUtils-b92214c2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e$1={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,OGCFeatureLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$1;let i=p$1=class extends a{async collectRequiredFields(r,e){return T(r,e,this.expression)}clone(){return new p$1({expression:this.expression,title:this.title})}};e$2([y$1({type:String,json:{write:!0}})],i.prototype,"expression",void 0),e$2([y$1({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=p$1=e$2([n$1("esri.layers.support.FeatureExpressionInfo")],i);var c$2=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(n){return null!=m$2[n]}function r(n){return 1/(m$2[n]||1)}function e(){const n=Object.keys(m$2);return n.sort(),n}const o$1=e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$2;const m$1=s$1()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d$1=new o$2({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let c$1=l$2=class extends a{constructor(){super(...arguments),this.offset=null;}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write(null,t),"0"===e.expression&&(r.featureExpression={value:0});}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):r$1(e)||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e);}set unit(e){this._set("unit",e);}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l$2({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};e$2([y$1({type:c$2,json:{write:!0}})],c$1.prototype,"featureExpressionInfo",void 0),e$2([e$3("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],c$1.prototype,"readFeatureExpressionInfo",null),e$2([o$3("featureExpressionInfo",{featureExpressionInfo:{type:c$2},"featureExpression.value":{type:[0]}})],c$1.prototype,"writeFeatureExpressionInfo",null),e$2([y$1({type:m$1.apiValues,nonNullable:!0,json:{type:m$1.jsonValues,read:m$1.read,write:{writer:m$1.write,isRequired:!0}}})],c$1.prototype,"mode",null),e$2([y$1({type:Number,json:{write:!0}})],c$1.prototype,"offset",void 0),e$2([y$1({type:o$1,json:{type:String,read:d$1.read,write:d$1.write}})],c$1.prototype,"unit",null),c$1=l$2=e$2([n$1("esri.layers.support.ElevationInfo")],c$1);var x=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},s={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,i){r[i]=!e;}}}},l$1={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},p={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:p$2}}},f={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},c={value:null,type:x,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function d(e){return {type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const m={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},y={...m,json:{...m.json,origins:{"web-document":{...m.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,i)=>i&&"service"!==i.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?r$2(r.layerDefinition.drawingInfo.transparency):void 0:r$2(r.drawingInfo.transparency)}}},u={type:y$2,readOnly:!0,get(){var e,r;if(null==(e=this.layer)||!e.timeInfo)return null;const i=null==(r=this.view)?void 0:r.timeExtent,n=this.layer.timeExtent,t=this.layer.useViewTime?i&&n?i.intersection(n):i||n:n;if(!t||t.isEmpty)return t;const a=this.layer.timeOffset,o=a?t.offset(-a.value,a.unit):t,s=this._get("timeExtent");return o.equals(s)?s:o}},w={type:M,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,n)=>{const t=M.fromJSON(e);return null!=n.spatialReference&&"object"==typeof n.spatialReference&&(t.spatialReference=k.fromJSON(n.spatialReference)),t}}}},read:!1}},g={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},v={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},j={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=l=>{let y=class extends l{constructor(){super(...arguments),this.title=null;}writeListMode(e,r,i,t){(t&&"ground"===t.layerContainerType||e&&p$3(this,i,{},t))&&(r[i]=e);}writeOperationalLayerType(e,r,i,t){!e||t&&"tables"===t.layerContainerType||(r.layerType=e);}writeTitle(e,r){r.title=e||"Layer";}read(e,r){r&&(r.layer=this),d$2(this,e,(r=>super.read(e,r)),r);}write(e,i){if(i&&i.origin){const e=`${i.origin}/${i.layerContainerType||"operational-layers"}`,t=e$1[e];let o=t&&t[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(o=!1),!o)return i.messages&&i.messages.push(new s$2("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const t=super.write(e,{...i,layer:this}),o=!!i&&!!i.messages&&!!i.messages.filter((e=>e instanceof s$2&&"web-document-write:property-required"===e.name)).length;return !this.url&&o?null:t}beforeSave(){}};return e$2([y$1({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],y.prototype,"id",void 0),e$2([y$1({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],y.prototype,"listMode",void 0),e$2([o$3("listMode")],y.prototype,"writeListMode",null),e$2([y$1({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],y.prototype,"operationalLayerType",void 0),e$2([o$3("operationalLayerType")],y.prototype,"writeOperationalLayerType",null),e$2([y$1(m)],y.prototype,"opacity",void 0),e$2([y$1({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],y.prototype,"title",void 0),e$2([o$3("title")],y.prototype,"writeTitle",null),e$2([y$1({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],y.prototype,"visible",void 0),y=e$2([n$1("esri.layers.mixins.OperationalLayer")],y),y};

export { l$1 as a, c, d, f, g, j, l, m, n, o, p, r, s, u, v, w, x, y };
