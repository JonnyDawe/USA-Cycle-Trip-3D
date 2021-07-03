import { e as e$1, a as a$a, o as o$4, p as p$i } from './JSONSupport-9346590f.js';
import { L as L$2 } from './Collection-32506e74.js';
import { y as y$1, n as n$5 } from './Message-70b34921.js';
import { U } from './promiseUtils-2ff2b194.js';
import { y, n as n$4, N, w as k } from './subclass-fe5fcf78.js';
import { c as c$c } from './Point-ee7951c3.js';
import { e as e$2 } from './reader-fa0f173d.js';
import { g, T as T$1 } from './fieldUtils-22be41cd.js';
import { s as s$5, o as o$3 } from './jsonMap-e142bd84.js';
import { r as r$4 } from './enumeration-7d0c165d.js';
import { L as L$1, S as S$1, m as m$1, u as u$2 } from './intl-21ab9759.js';
import { r as r$5 } from './Identifiable-3ad643f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$2(o,t){const e=t?{...t,source:o}:o;return y({aliasOf:e})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s$4=class extends a$a{constructor(r){super(r),this.type=null;}};e$1([y({type:["attachments","custom","fields","media","text"],readOnly:!0,json:{read:!1,write:!0}})],s$4.prototype,"type",void 0),s$4=e$1([n$4("esri.popup.content.Content")],s$4);var p$h=s$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s$3;let i$8=s$3=class extends p$h{constructor(t){super(t),this.description=null,this.displayType=null,this.title=null,this.type="attachments";}clone(){return new s$3({description:this.description,displayType:this.displayType,title:this.title})}};e$1([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],i$8.prototype,"description",void 0),e$1([y({type:["preview","list"],json:{write:!0}})],i$8.prototype,"displayType",void 0),e$1([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],i$8.prototype,"title",void 0),e$1([y({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],i$8.prototype,"type",void 0),i$8=s$3=e$1([n$4("esri.popup.content.AttachmentsContent")],i$8);var p$g=i$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$f;let i$7=p$f=class extends p$h{constructor(o){super(o),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom";}clone(){return new p$f({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?y$1(this.outFields):null})}};e$1([y()],i$7.prototype,"creator",void 0),e$1([y()],i$7.prototype,"destroyer",void 0),e$1([y()],i$7.prototype,"outFields",void 0),e$1([y({type:["custom"],readOnly:!0})],i$7.prototype,"type",void 0),i$7=p$f=e$1([n$4("esri.popup.content.CustomContent")],i$7);var c$b=i$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a$9=s$5()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});a$9.toJSON.bind(a$9);a$9.fromJSON.bind(a$9);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$3;let u$1=n$3=class extends a$a{constructor(r){super(r),this.dateFormat=null,this.digitSeparator=!1,this.places=null;}clone(){return new n$3({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(r){return this.dateFormat?L$1(r,S$1(this.dateFormat)):m$1(r,u$2(this))}};e$1([r$4(a$9)],u$1.prototype,"dateFormat",void 0),e$1([y({type:Boolean,json:{write:!0}})],u$1.prototype,"digitSeparator",void 0),e$1([y({type:N,json:{write:!0}})],u$1.prototype,"places",void 0),u$1=n$3=e$1([n$4("esri.popup.support.FieldInfoFormat")],u$1);var l$3=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var a$8;let n$2=a$8=class extends a$a{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0;}clone(){return new a$8({fieldName:this.fieldName,format:this.format?y$1(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};e$1([y({type:String,json:{write:!0}})],n$2.prototype,"fieldName",void 0),e$1([y({type:l$3,json:{write:!0}})],n$2.prototype,"format",void 0),e$1([y({type:Boolean,json:{write:!0,default:!1}})],n$2.prototype,"isEditable",void 0),e$1([y({type:String,json:{write:!0}})],n$2.prototype,"label",void 0),e$1([r$4(new o$3({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],n$2.prototype,"stringFieldOption",void 0),e$1([y({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],n$2.prototype,"statisticType",void 0),e$1([y({type:String,json:{write:!0}})],n$2.prototype,"tooltip",void 0),e$1([y({type:Boolean,json:{write:!0}})],n$2.prototype,"visible",void 0),n$2=a$8=e$1([n$4("esri.popup.FieldInfo")],n$2);var c$a=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$1;let l$2=n$1=class extends p$h{constructor(o){super(o),this.description=null,this.fieldInfos=null,this.title=null,this.type="fields";}writeFieldInfos(o,e){e.fieldInfos=o&&o.map((o=>o.toJSON()));}clone(){return new n$1({description:this.description,fieldInfos:Array.isArray(this.fieldInfos)?y$1(this.fieldInfos):null,title:this.title})}};e$1([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],l$2.prototype,"description",void 0),e$1([y({type:[c$a]})],l$2.prototype,"fieldInfos",void 0),e$1([o$4("fieldInfos")],l$2.prototype,"writeFieldInfos",null),e$1([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],l$2.prototype,"title",void 0),e$1([y({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],l$2.prototype,"type",void 0),l$2=n$1=e$1([n$4("esri.popup.content.FieldsContent")],l$2);var c$9=l$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p$e=class extends a$a{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null;}};e$1([y({type:String,json:{write:!0}})],p$e.prototype,"altText",void 0),e$1([y({type:String,json:{write:!0}})],p$e.prototype,"caption",void 0),e$1([y({type:String,json:{write:!0}})],p$e.prototype,"title",void 0),e$1([y({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],p$e.prototype,"type",void 0),p$e=e$1([n$4("esri.popup.content.mixins.MediaInfo")],p$e);var s$2=p$e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$d;let i$6=p$d=class extends p$i{constructor(o){super(o),this.tooltip=null,this.value=null,this.x=null,this.y=null;}clone(){return new p$d({tooltip:this.tooltip,value:this.value})}};e$1([y()],i$6.prototype,"tooltip",void 0),e$1([y()],i$6.prototype,"value",void 0),e$1([o$2("value")],i$6.prototype,"x",void 0),e$1([o$2("tooltip")],i$6.prototype,"y",void 0),i$6=p$d=e$1([n$4("esri.popup.content.support.ChartMediaInfoValueSeries")],i$6);var c$8=i$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$c;let l$1=p$c=class extends a$a{constructor(o){super(o),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null;}clone(){return new p$c({fields:y$1(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}};e$1([y({type:[String],json:{write:!0}})],l$1.prototype,"fields",void 0),e$1([y({type:String,json:{write:!0}})],l$1.prototype,"normalizeField",void 0),e$1([y({type:[c$8],json:{read:!1}})],l$1.prototype,"series",void 0),e$1([y({type:String,json:{write:!0}})],l$1.prototype,"tooltipField",void 0),l$1=p$c=e$1([n$4("esri.popup.content.support.ChartMediaInfoValue")],l$1);var n=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p$b=class extends s$2{constructor(r){super(r),this.type=null,this.value=null;}};e$1([y({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],p$b.prototype,"type",void 0),e$1([y({type:n,json:{write:!0}})],p$b.prototype,"value",void 0),p$b=e$1([n$4("esri.popup.content.mixins.ChartMediaInfo")],p$b);var a$7=p$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c$7=s$5()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var a$6;let p$a=a$6=class extends a$7{constructor(r){super(r),this.type="bar-chart";}clone(){return new a$6({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$1([y({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:c$7.write}})],p$a.prototype,"type",void 0),p$a=a$6=e$1([n$4("esri.popup.content.BarChartMediaInfo")],p$a);var i$5=p$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$9;let a$5=p$9=class extends a$7{constructor(t){super(t),this.type="column-chart";}clone(){return new p$9({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$1([y({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:c$7.write}})],a$5.prototype,"type",void 0),a$5=p$9=e$1([n$4("esri.popup.content.ColumnChartMediaInfo")],a$5);var c$6=a$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t$1;let p$8=t$1=class extends a$a{constructor(r){super(r),this.linkURL=null,this.sourceURL=null;}clone(){return new t$1({linkURL:this.linkURL,sourceURL:this.sourceURL})}};e$1([y({type:String,json:{write:!0}})],p$8.prototype,"linkURL",void 0),e$1([y({type:String,json:{write:!0}})],p$8.prototype,"sourceURL",void 0),p$8=t$1=e$1([n$4("esri.popup.content.support.ImageMediaInfoValue")],p$8);var c$5=p$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$7;let i$4=p$7=class extends s$2{constructor(e){super(e),this.refreshInterval=null,this.type="image",this.value=null;}clone(){return new p$7({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};e$1([y({type:Number,json:{write:!0}})],i$4.prototype,"refreshInterval",void 0),e$1([y({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],i$4.prototype,"type",void 0),e$1([y({type:c$5,json:{write:!0}})],i$4.prototype,"value",void 0),i$4=p$7=e$1([n$4("esri.popup.content.ImageMediaInfo")],i$4);var a$4=i$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var i$3;let p$6=i$3=class extends a$7{constructor(t){super(t),this.type="line-chart";}clone(){return new i$3({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$1([y({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:c$7.write}})],p$6.prototype,"type",void 0),p$6=i$3=e$1([n$4("esri.popup.content.LineChartMediaInfo")],p$6);var a$3=p$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$5;let i$2=p$5=class extends a$7{constructor(t){super(t),this.type="pie-chart";}clone(){return new p$5({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e$1([y({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:c$7.write}})],i$2.prototype,"type",void 0),i$2=p$5=e$1([n$4("esri.popup.content.PieChartMediaInfo")],i$2);var a$2=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const m={base:s$2,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":i$5,"column-chart":c$6,"line-chart":a$3,"pie-chart":a$2,image:a$4}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l;let I=l=class extends p$h{constructor(o){super(o),this.activeMediaInfoIndex=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media";}readMediaInfos(o){return o&&o.map((o=>"image"===o.type?a$4.fromJSON(o):"barchart"===o.type?i$5.fromJSON(o):"columnchart"===o.type?c$6.fromJSON(o):"linechart"===o.type?a$3.fromJSON(o):"piechart"===o.type?a$2.fromJSON(o):void 0)).filter(Boolean)}writeMediaInfos(o,e){e.mediaInfos=o&&o.map((o=>o.toJSON()));}clone(){return new l({activeMediaInfoIndex:this.activeMediaInfoIndex,description:this.description,mediaInfos:this.mediaInfos?y$1(this.mediaInfos):null,title:this.title})}};e$1([y()],I.prototype,"activeMediaInfoIndex",void 0),e$1([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],I.prototype,"description",void 0),e$1([y({types:[m]})],I.prototype,"mediaInfos",void 0),e$1([e$2("mediaInfos")],I.prototype,"readMediaInfos",null),e$1([o$4("mediaInfos")],I.prototype,"writeMediaInfos",null),e$1([y({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],I.prototype,"title",void 0),e$1([y({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],I.prototype,"type",void 0),I=l=e$1([n$4("esri.popup.content.MediaContent")],I);var u=I;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s$1;let p$4=s$1=class extends p$h{constructor(t){super(t),this.text=null,this.type="text";}clone(){return new s$1({text:this.text})}};e$1([y({type:String,json:{write:!0}})],p$4.prototype,"text",void 0),e$1([y({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],p$4.prototype,"type",void 0),p$4=s$1=e$1([n$4("esri.popup.content.TextContent")],p$4);var c$4=p$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r$3={base:null,key:"type",typeMap:{attachment:p$g,media:u,text:c$4,field:c$9}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s;let p$3=s=class extends a$a{constructor(r){super(r),this.name=null,this.title=null,this.expression=null,this.returnType=null;}clone(){return new s({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e$1([y({type:String,json:{write:!0}})],p$3.prototype,"name",void 0),e$1([y({type:String,json:{write:!0}})],p$3.prototype,"title",void 0),e$1([y({type:String,json:{write:!0}})],p$3.prototype,"expression",void 0),e$1([y({type:["string","number"],json:{write:!0}})],p$3.prototype,"returnType",void 0),p$3=s=e$1([n$4("esri.popup.ExpressionInfo")],p$3);var i$1=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var e;let p$2=e=class extends a$a{constructor(o){super(o),this.returnTopmostRaster=null,this.showNoDataRecords=null;}clone(){return new e({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};e$1([y({type:Boolean,json:{write:!0}})],p$2.prototype,"returnTopmostRaster",void 0),e$1([y({type:Boolean,json:{write:!0}})],p$2.prototype,"showNoDataRecords",void 0),p$2=e=e$1([n$4("esri.popup.LayerOptions")],p$2);var a$1=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t;let p$1=t=class extends a$a{constructor(r){super(r),this.field=null,this.order=null;}clone(){return new t({field:this.field,order:this.order})}};e$1([y({type:String,json:{write:!0}})],p$1.prototype,"field",void 0),e$1([y({type:["asc","desc"],json:{write:!0}})],p$1.prototype,"order",void 0),p$1=t=e$1([n$4("esri.popup.support.RelatedRecordsInfoFieldOrder")],p$1);var c$3=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var d;let c$2=d=class extends a$a{constructor(r){super(r),this.showRelatedRecords=null,this.orderByFields=null;}clone(){return new d({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?y$1(this.orderByFields):null})}};e$1([y({type:Boolean,json:{write:!0}})],c$2.prototype,"showRelatedRecords",void 0),e$1([y({type:[c$3],json:{write:!0}})],c$2.prototype,"orderByFields",void 0),c$2=d=e$1([n$4("esri.popup.RelatedRecordsInfo")],c$2);var i=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var r$2;let p=r$2=class extends(r$5(p$i)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0;}clone(){return new r$2({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};e$1([y()],p.prototype,"active",void 0),e$1([y()],p.prototype,"className",void 0),e$1([y()],p.prototype,"disabled",void 0),e$1([y()],p.prototype,"id",void 0),e$1([y()],p.prototype,"indicator",void 0),e$1([y()],p.prototype,"title",void 0),e$1([y()],p.prototype,"type",void 0),e$1([y()],p.prototype,"visible",void 0),p=r$2=e$1([n$4("esri.support.actions.ActionBase")],p);var c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var o$1;let r$1=o$1=class extends c$1{constructor(s){super(s),this.image=null,this.type="button";}clone(){return new o$1({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};e$1([y()],r$1.prototype,"image",void 0),r$1=o$1=e$1([n$4("esri.support.Action.ActionButton")],r$1);var c=r$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var o;let r=o=class extends c$1{constructor(s){super(s),this.image=null,this.type="toggle",this.value=!1;}clone(){return new o({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};e$1([y()],r.prototype,"image",void 0),e$1([y()],r.prototype,"value",void 0),r=o=e$1([n$4("esri.support.Action.ActionToggle")],r);var a=r;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var O;const S=L$2.ofType({key:"type",defaultKeyValue:"button",base:c$1,typeMap:{button:c,toggle:a}}),T={base:p$h,key:"type",typeMap:{media:u,custom:c$b,text:c$4,attachments:p$g,fields:c$9}},b="esri.PopupTemplate",R=n$5.getLogger(b),L=["attachments","fields","media","text"];let J=O=class extends a$a{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null;}castContent(t){return Array.isArray(t)?t.map((t=>k(T,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||U(t)?t:(R.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:o}=e;return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(e):this._readPopupInfo(e)}writeContent(t,e,o,s){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>-1!==L.indexOf(t.type))).map((t=>t&&t.toJSON(s))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type&&this._writeTextContent(t,e);}))):e.description=t;}writeFieldInfos(t,e,o,s){const{content:i}=this,r=Array.isArray(i)?i:null;if(t){const o=r?r.filter((t=>"fields"===t.type)):[],i=o.length&&o.every((t=>{var e;return null==(e=t.fieldInfos)?void 0:e.length}));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(s);return i&&(e.visible=!1),e}));}if(r)for(const n of r)"fields"===n.type&&this._writeFieldsContent(n,e);}writeLayerOptions(t,e,o,s){e[o]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(s);}writeTitle(t,e){e.title=t||"";}clone(){const{actions:t}=this,e=t?y$1(t.toArray()):[];return new O({actions:e,content:Array.isArray(this.content)?y$1(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?y$1(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?y$1(this.fieldInfos):null,layerOptions:this.layerOptions?y$1(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?y$1(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?y$1(this.relatedRecordsInfo):null})}async collectRequiredFields(t,e){await this._collectExpressionInfoFields(t,e,this.expressionInfos),g(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)]);}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const o=y$1(t.fieldInfos);Array.isArray(e.fieldInfos)?o.forEach((t=>{const o=e.fieldInfos.find((e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase()));o?o.visible=!0:e.fieldInfos.push(t);})):e.fieldInfos=o;}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0);}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text);}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const o=y$1(t.mediaInfos);Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...o]:e.mediaInfos=o;}_readPopupInfoElements({description:t,mediaInfos:e,popupElements:o}){const s={description:!1,mediaInfos:!1};return o.map((o=>"media"===o.type?(o.mediaInfos||!e||s.mediaInfos||(o.mediaInfos=e,s.mediaInfos=!0),u.fromJSON(o)):"text"===o.type?(o.text||!t||s.description||(o.text=t,s.description=!0),c$4.fromJSON(o)):"attachments"===o.type?p$g.fromJSON(o):"fields"===o.type?c$9.fromJSON(o):void 0)).filter(Boolean)}_readPopupInfo({description:t,mediaInfos:e,showAttachments:o}){const s=[];return t?s.push(new c$4({text:t})):s.push(new c$9),Array.isArray(e)&&e.length&&s.push(u.fromJSON({mediaInfos:e})),o&&s.push(p$g.fromJSON({displayType:"list"})),s.length?s:t}_getContentElementFields(t){if(!t||"attachments"===t.type)return [];if("custom"===t.type)return t.outFields||[];if("fields"===t.type)return this._getFieldInfoFields(t.fieldInfos||this.fieldInfos);if("media"===t.type){return (t.mediaInfos||[]).reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[])}return "text"===t.type?this._extractFieldNames(t.text):void 0}_getMediaInfoFields(t){const{caption:e,title:o,value:s}=t,i=s||{},{fields:r=[],normalizeField:n,tooltipField:p,sourceURL:l,linkURL:a}=i,d=[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(l),...this._extractFieldNames(a),...r];return n&&d.push(n),p&&d.push(p),d}_getContentFields(t){return "string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,o){o&&await Promise.all(o.map((o=>T$1(t,e,o.expression))));}_getFieldInfoFields(t){return t?t.filter((t=>void 0===t.visible||!!t.visible)).map((t=>t.fieldName)).filter((t=>-1===t.indexOf("relationships/")&&-1===t.indexOf("expression/"))):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:o,type:s}=t,i="button"===s||"toggle"===s?t.image:"";return [...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(i)]}_getTitleFields(t){return "string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return [];const e=/{[^}]*}/g,o=t.match(e);if(!o)return [];const s=/\{(\w+):.+\}/,i=o.filter((t=>!(0===t.indexOf("{relationships/")||0===t.indexOf("{expression/")))).map((t=>t.replace(s,"{$1}")));return i?i.map((t=>t.slice(1,-1))):[]}};e$1([y({type:S})],J.prototype,"actions",void 0),e$1([y()],J.prototype,"content",void 0),e$1([c$c("content")],J.prototype,"castContent",null),e$1([e$2("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],J.prototype,"readContent",null),e$1([o$4("content",{popupElements:{type:L$2.ofType(r$3)},showAttachments:{type:Boolean},mediaInfos:{type:L$2.ofType(m)},description:{type:String}})],J.prototype,"writeContent",null),e$1([y({type:[i$1],json:{write:!0}})],J.prototype,"expressionInfos",void 0),e$1([y({type:[c$a]})],J.prototype,"fieldInfos",void 0),e$1([o$4("fieldInfos")],J.prototype,"writeFieldInfos",null),e$1([y({type:a$1})],J.prototype,"layerOptions",void 0),e$1([o$4("layerOptions")],J.prototype,"writeLayerOptions",null),e$1([y({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],J.prototype,"lastEditInfoEnabled",void 0),e$1([y()],J.prototype,"outFields",void 0),e$1([y()],J.prototype,"overwriteActions",void 0),e$1([y()],J.prototype,"returnGeometry",void 0),e$1([y({json:{type:String}})],J.prototype,"title",void 0),e$1([o$4("title")],J.prototype,"writeTitle",null),e$1([y({type:i,json:{write:!0}})],J.prototype,"relatedRecordsInfo",void 0),J=O=e$1([n$4(b)],J);var M=J;

export { M, c$a as a, c$9 as b, c$3 as c, c$8 as d, c$4 as e, c as f, c$1 as g, a as h, i$1 as i, l$3 as l, o$2 as o, p$g as p };
