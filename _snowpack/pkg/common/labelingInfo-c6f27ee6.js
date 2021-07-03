import { e as e$1, a } from './JSONSupport-9346590f.js';
import { M } from './PopupTemplate-d97f5e88.js';
import { D } from './symbols-9e680ec7.js';
import { y as y$1 } from './Message-70b34921.js';
import { o } from './SimpleLineSymbol-9959d1ea.js';
import { y, n as n$1 } from './subclass-fe5fcf78.js';
import { s, a as l } from './OperationalLayer-a01538e1.js';
import { E } from './LabelClass-e4354cdb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t$2=class extends a{constructor(){super(...arguments),this.type=null;}};e$1([y({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],t$2.prototype,"type",void 0),t$2=e$1([n$1("esri.layers.support.FeatureReduction")],t$2);var p$3=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var r$1;let e=r$1=class extends a{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null;}clone(){return new r$1({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};e$1([y({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),e$1([y({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),e$1([y({type:String,json:{write:!0}})],e.prototype,"onStatisticValueExpression",void 0),e=r$1=e$1([n$1("esri.layers.support.OutStatistic")],e);var p$2=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$1;let i=p$1=class extends a{constructor(){super(...arguments),this.name=null;}clone(){return new p$1({name:this.name,outStatistic:this.outStatistic.clone()})}};e$1([y({type:String,json:{write:!0}})],i.prototype,"name",void 0),e$1([y({type:p$2,json:{write:!0}})],i.prototype,"outStatistic",void 0),i=p$1=e$1([n$1("esri.layers.support.AggregateField")],i);var c$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var m;let d=m=class extends a{constructor(e){super(e),this.type="cluster",this.clusterRadius=o("80px"),this.clusterMinSize=o("12px"),this.clusterMaxSize=o("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null;}clone(){return new m({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:y$1(this.labelingInfo),labelsVisible:this.labelsVisible,fields:y$1(this.fields),popupEnabled:this.popupEnabled,popupTemplate:y$1(this.popupTemplate)})}};e$1([y({type:["cluster"],readOnly:!0,json:{write:!0}})],d.prototype,"type",void 0),e$1([y({type:Number,cast:e=>"auto"===e?e:o(e),json:{write:!0}})],d.prototype,"clusterRadius",void 0),e$1([y({type:Number,cast:o,json:{write:!0}})],d.prototype,"clusterMinSize",void 0),e$1([y({type:Number,cast:o,json:{write:!0}})],d.prototype,"clusterMaxSize",void 0),e$1([y(s)],d.prototype,"popupEnabled",void 0),e$1([y({type:M,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],d.prototype,"popupTemplate",void 0),e$1([y({types:D})],d.prototype,"symbol",void 0),e$1([y({type:[E],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],d.prototype,"labelingInfo",void 0),e$1([y(l)],d.prototype,"labelsVisible",void 0),e$1([y({type:[c$1],json:{write:!0}})],d.prototype,"fields",void 0),d=m=e$1([n$1("esri.layers.support.FeatureReductionCluster")],d);var b=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t$1;let p=t$1=class extends p$3{constructor(r){super(r),this.type="selection";}clone(){return new t$1}};e$1([y({type:["selection"]})],p.prototype,"type",void 0),p=t$1=e$1([n$1("esri.layers.support.FeatureReductionSelection")],p);var c=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n=/\[([^\[\]]+)\]/gi;function r(r,i,o){return r?r.map((r=>{const s=new E;if(s.read(r,o),s.labelExpression){const e=i.fields||i.layerDefinition&&i.layerDefinition.fields||this.fields;s.labelExpression=s.labelExpression.replace(n,((n,r)=>`[${t(r,e)}]`));}return s})):null}function t(e,n){if(!n)return e;const r=e.toLowerCase();for(let t=0;t<n.length;t++){const e=n[t].name;if(e.toLowerCase()===r)return e}return e}

export { b, c, p$3 as p, r };
