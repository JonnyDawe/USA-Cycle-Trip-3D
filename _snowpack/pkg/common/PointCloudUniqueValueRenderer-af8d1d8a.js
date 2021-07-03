import { e as e$1, a as a$7 } from './JSONSupport-9346590f.js';
import { y as y$1 } from './Message-70b34921.js';
import { y, n as n$2, N } from './subclass-fe5fcf78.js';
import { r } from './enumeration-7d0c165d.js';
import { c as c$4, a as a$8 } from './ColorStop-ed1033bb.js';
import { o as o$1 } from './Color-ae84a22a.js';
import { o, s as s$1 } from './jsonMap-e142bd84.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s;let p$3=s=class extends a$7{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255;}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e$1([y({type:String,json:{write:!0}})],p$3.prototype,"field",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],p$3.prototype,"minValue",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],p$3.prototype,"maxValue",void 0),p$3=s=e$1([n$2("esri.renderers.support.pointCloud.ColorModulation")],p$3);var i$2=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p$2=new o({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let i$1=class extends a$7{};e$1([y({type:p$2.apiValues,readOnly:!0,nonNullable:!0,json:{type:p$2.jsonValues,read:!1,write:p$2.write}})],i$1.prototype,"type",void 0),i$1=e$1([n$2("esri.renderers.support.pointCloud.PointSizeAlgorithm")],i$1);var a$6=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var i;let p$1=i=class extends a$6{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null;}clone(){return new i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e$1([r({pointCloudFixedSizeAlgorithm:"fixed-size"})],p$1.prototype,"type",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],p$1.prototype,"size",void 0),e$1([y({type:Boolean,json:{write:!0}})],p$1.prototype,"useRealWorldSymbolSizes",void 0),p$1=i=e$1([n$2("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],p$1);var l$4=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p;let c$3=p=class extends a$6{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1;}clone(){return new p({scaleFactor:this.scaleFactor})}};e$1([r({pointCloudSplatAlgorithm:"splat"})],c$3.prototype,"type",void 0),e$1([y({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c$3.prototype,"scaleFactor",void 0),c$3=p=e$1([n$2("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c$3);var a$5=c$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e={key:"type",base:a$6,typeMap:{"fixed-size":l$4,splat:a$5}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u$1=s$1()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let c$2=class extends a$7{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return {pointSizeAlgorithm:y$1(this.pointSizeAlgorithm),colorModulation:y$1(this.colorModulation),pointsPerInch:y$1(this.pointsPerInch)}}};e$1([y({type:u$1.apiValues,readOnly:!0,nonNullable:!0,json:{type:u$1.jsonValues,read:!1,write:u$1.write}})],c$2.prototype,"type",void 0),e$1([y({types:e,json:{write:!0}})],c$2.prototype,"pointSizeAlgorithm",void 0),e$1([y({type:i$2,json:{write:!0}})],c$2.prototype,"colorModulation",void 0),e$1([y({json:{write:!0},nonNullable:!0,type:Number})],c$2.prototype,"pointsPerInch",void 0),c$2=e$1([n$2("esri.renderers.PointCloudRenderer")],c$2),function(o$1){o$1.fieldTransformTypeKebabDict=new o({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});}(c$2||(c$2={}));var a$4=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var a$3;let l$3=a$3=class extends a$7{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null;}clone(){return new a$3({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:y$1(this.color)})}};e$1([y({type:String,json:{write:!0}})],l$3.prototype,"description",void 0),e$1([y({type:String,json:{write:!0}})],l$3.prototype,"label",void 0),e$1([y({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],l$3.prototype,"minValue",void 0),e$1([y({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],l$3.prototype,"maxValue",void 0),e$1([y({type:o$1,json:{type:[N],write:!0}})],l$3.prototype,"color",void 0),l$3=a$3=e$1([n$2("esri.renderers.support.pointCloud.ColorClassBreakInfo")],l$3);var c$1=l$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$1;let a$2=n$1=class extends a$4{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null;}clone(){return new n$1({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:y$1(this.colorClassBreakInfos),legendOptions:y$1(this.legendOptions)})}};e$1([r({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],a$2.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],a$2.prototype,"field",void 0),e$1([y({type:c$4,json:{write:!0}})],a$2.prototype,"legendOptions",void 0),e$1([y({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],a$2.prototype,"fieldTransformType",void 0),e$1([y({type:[c$1],json:{write:!0}})],a$2.prototype,"colorClassBreakInfos",void 0),a$2=n$1=e$1([n$2("esri.renderers.PointCloudClassBreaksRenderer")],a$2);var d$1=a$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$2;let d=l$2=class extends a$4{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null;}clone(){return new l$2({...this.cloneProperties(),field:y$1(this.field),fieldTransformType:y$1(this.fieldTransformType),stops:y$1(this.stops),legendOptions:y$1(this.legendOptions)})}};e$1([r({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],d.prototype,"field",void 0),e$1([y({type:c$4,json:{write:!0}})],d.prototype,"legendOptions",void 0),e$1([y({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),e$1([y({type:[a$8],json:{write:!0}})],d.prototype,"stops",void 0),d=l$2=e$1([n$2("esri.renderers.PointCloudStretchRenderer")],d);var a$1=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$1;let c=l$1=class extends a$7{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null;}clone(){return new l$1({description:this.description,label:this.label,values:y$1(this.values),color:y$1(this.color)})}};e$1([y({type:String,json:{write:!0}})],c.prototype,"description",void 0),e$1([y({type:String,json:{write:!0}})],c.prototype,"label",void 0),e$1([y({type:[String],json:{write:!0}})],c.prototype,"values",void 0),e$1([y({type:o$1,json:{type:[N],write:!0}})],c.prototype,"color",void 0),c=l$1=e$1([n$2("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);var n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l;let u=l=class extends a$4{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null;}clone(){return new l({...this.cloneProperties(),field:y$1(this.field),fieldTransformType:y$1(this.fieldTransformType),colorUniqueValueInfos:y$1(this.colorUniqueValueInfos),legendOptions:y$1(this.legendOptions)})}};e$1([r({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],u.prototype,"field",void 0),e$1([y({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),e$1([y({type:[n],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),e$1([y({type:c$4,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=l=e$1([n$2("esri.renderers.PointCloudUniqueValueRenderer")],u);var a=u;

export { a, a$1 as b, a$4 as c, d$1 as d };
