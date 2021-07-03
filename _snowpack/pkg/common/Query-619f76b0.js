import { e, a as a$3, o as o$1 } from './JSONSupport-9346590f.js';
import { i, e as i$1 } from './Loadable-d16b3d7d.js';
import { y as y$3 } from './TimeExtent-02acfb1c.js';
import { s, o } from './jsonMap-e142bd84.js';
import { y as y$2, r as r$1 } from './Message-70b34921.js';
import { y, N, n as n$2, d, D as u, w as k$1, B as y$4 } from './subclass-fe5fcf78.js';
import { c as c$6, b as b$1 } from './Point-ee7951c3.js';
import { r } from './enumeration-7d0c165d.js';
import { p as p$3 } from './jsonUtils-f0a19240.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { y as y$1 } from './Field-728fb193.js';
import { k } from './SpatialReference-843b1520.js';
import { M } from './Polyline-ccd8fb47.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var a$2;let c$5=a$2=class extends a$3{constructor(r){super(r),this.type="map-layer";}clone(){const{mapLayerId:r,gdbVersion:o}=this;return new a$2({mapLayerId:r,gdbVersion:o})}};e([r({mapLayer:"map-layer"})],c$5.prototype,"type",void 0),e([y({type:N,json:{write:!0}})],c$5.prototype,"mapLayerId",void 0),e([y({type:String,json:{write:!0}})],c$5.prototype,"gdbVersion",void 0),c$5=a$2=e([n$2("esri.layers.support.source.MapLayerSource")],c$5);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var c$4;let a$1=c$4=class extends a$3{constructor(e){super(e),this.type="query-table";}clone(){var e;const{workspaceId:r,query:o,oidFields:t,spatialReference:p,geometryType:s}=this,i={workspaceId:r,query:o,oidFields:t,spatialReference:null!=(e=null==p?void 0:p.clone())?e:void 0,geometryType:s};return new c$4(i)}};e([r({queryTable:"query-table"})],a$1.prototype,"type",void 0),e([y({type:String,json:{write:!0}})],a$1.prototype,"workspaceId",void 0),e([y({type:String,json:{write:!0}})],a$1.prototype,"query",void 0),e([y({type:String,json:{write:!0}})],a$1.prototype,"oidFields",void 0),e([y({type:k,json:{write:!0}})],a$1.prototype,"spatialReference",void 0),e([r(i)],a$1.prototype,"geometryType",void 0),a$1=c$4=e([n$2("esri.layers.support.source.QueryTableDataSource")],a$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$2;let c$3=p$2=class extends a$3{constructor(r){super(r),this.type="raster";}clone(){const{workspaceId:r,dataSourceName:o}=this;return new p$2({workspaceId:r,dataSourceName:o})}};e([r({raster:"raster"})],c$3.prototype,"type",void 0),e([y({type:String,json:{write:!0}})],c$3.prototype,"dataSourceName",void 0),e([y({type:String,json:{write:!0}})],c$3.prototype,"workspaceId",void 0),c$3=p$2=e([n$2("esri.layers.support.source.RasterDataSource")],c$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$1;let c$2=p$1=class extends a$3{constructor(r){super(r),this.type="table";}clone(){const{workspaceId:r,gdbVersion:o,dataSourceName:e}=this;return new p$1({workspaceId:r,gdbVersion:o,dataSourceName:e})}};e([r({table:"table"})],c$2.prototype,"type",void 0),e([y({type:String,json:{write:!0}})],c$2.prototype,"workspaceId",void 0),e([y({type:String,json:{write:!0}})],c$2.prototype,"gdbVersion",void 0),e([y({type:String,json:{write:!0}})],c$2.prototype,"dataSourceName",void 0),c$2=p$1=e([n$2("esri.layers.support.source.TableDataSource")],c$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var f$1,m$2;const j=s()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let T=f$1=class extends a$3{constructor(e){super(e),this.type="join-table";}readLeftTableSource(e,r,o){return g$1()(e,r,o)}castLeftTableSource(e){return k$1(L(),e)}readRightTableSource(e,r,o){return g$1()(e,r,o)}castRightTableSource(e){return k$1(L(),e)}clone(){var e,r;const{leftTableKey:o,rightTableKey:t,leftTableSource:a,rightTableSource:s,joinType:l}=this,p={leftTableKey:o,rightTableKey:t,leftTableSource:null!=(e=null==a?void 0:a.clone())?e:void 0,rightTableSource:null!=(r=null==s?void 0:s.clone())?r:void 0,joinType:l};return new f$1(p)}};e([r({joinTable:"join-table"})],T.prototype,"type",void 0),e([y({type:String,json:{write:!0}})],T.prototype,"leftTableKey",void 0),e([y({type:String,json:{write:!0}})],T.prototype,"rightTableKey",void 0),e([y({json:{write:!0}})],T.prototype,"leftTableSource",void 0),e([e$1("leftTableSource")],T.prototype,"readLeftTableSource",null),e([c$6("leftTableSource")],T.prototype,"castLeftTableSource",null),e([y({json:{write:!0}})],T.prototype,"rightTableSource",void 0),e([e$1("rightTableSource")],T.prototype,"readRightTableSource",null),e([c$6("rightTableSource")],T.prototype,"castRightTableSource",null),e([r(j)],T.prototype,"joinType",void 0),T=f$1=e([n$2("esri.layers.support.source.JoinTableDataSource")],T);let h=null;function g$1(){return h||(h=u({types:L()})),h}let v=null;function L(){return v||(v={key:"type",base:null,typeMap:{"data-layer":K,"map-layer":c$5}}),v}const w$1={key:"type",base:null,typeMap:{"join-table":T,"query-table":a$1,raster:c$3,table:c$2}};let K=m$2=class extends a$3{constructor(e){super(e),this.type="data-layer";}clone(){const{fields:e,dataSource:r}=this;return new m$2({fields:e,dataSource:r})}};e([r({dataLayer:"data-layer"})],K.prototype,"type",void 0),e([y({type:[y$1],json:{write:!0}})],K.prototype,"fields",void 0),e([y({types:w$1,json:{write:!0}})],K.prototype,"dataSource",void 0),K=m$2=e([n$2("esri.layers.support.source.DataLayerSource")],K),K.from=d(K);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$1;const c$1=new o({upperLeft:"upper-left",lowerLeft:"lower-left"});let m$1=n$1=class extends a$3{constructor(e){super(e),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1;}clone(){return new n$1(y$2({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};e([y({type:M,json:{write:{overridePolicy(){return {enabled:"view"===this.mode}}}}})],m$1.prototype,"extent",void 0),e([y({type:["view","edit"],json:{write:!0}})],m$1.prototype,"mode",void 0),e([y({type:String,json:{read:c$1.read,write:c$1.write}})],m$1.prototype,"originPosition",void 0),e([y({type:Number,json:{write:{overridePolicy(){return {enabled:"view"===this.mode}}}}})],m$1.prototype,"tolerance",void 0),m$1=n$1=e([n$2("esri.rest.support.QuantizationParameters")],m$1);var a=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var c;const p=new o({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete"});let n=c=class extends a$3{constructor(t){super(t),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null;}writeStatisticParameters(t,e){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(e.statisticParameters=y$2(t));}clone(){return new c({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:y$2(this.statisticParameters)})}};e([y({type:Number,json:{write:!0}})],n.prototype,"maxPointCount",void 0),e([y({type:Number,json:{write:!0}})],n.prototype,"maxRecordCount",void 0),e([y({type:Number,json:{write:!0}})],n.prototype,"maxVertexCount",void 0),e([y({type:String,json:{write:!0}})],n.prototype,"onStatisticField",void 0),e([y({type:String,json:{write:!0}})],n.prototype,"outStatisticFieldName",void 0),e([y({type:String,json:{read:{source:"statisticType",reader:p.read},write:{target:"statisticType",writer:p.write}}})],n.prototype,"statisticType",void 0),e([y({type:Object})],n.prototype,"statisticParameters",void 0),e([o$1("statisticParameters")],n.prototype,"writeStatisticParameters",null),n=c=e([n$2("esri.rest.support.StatisticDefinition")],n);var m=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var f;const w=new o({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),g=new o({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let R=f=class extends a$3{constructor(t){super(t),this.aggregateIds=null,this.cacheHint=void 0,this.datumTransformation=null,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.units=null,this.where=null;}static from(t){return y$4(f,t)}castDatumTransformation(t){return "number"==typeof t||"object"==typeof t?t:null}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime();}writeParameterValues(t,e){if(t){const r={};for(const e in t){const o=t[e];Array.isArray(o)?r[e]=o.map((t=>t instanceof Date?t.getTime():t)):o instanceof Date?r[e]=o.getTime():r[e]=o;}e.parameterValues=r;}}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1";}writeWhere(t,e){e.where=t||"1=1";}clone(){return new f(y$2({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:r$1(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))}};R.MAX_MAX_RECORD_COUNT_FACTOR=5,e([y({json:{write:!0}})],R.prototype,"aggregateIds",void 0),e([y({type:Boolean,json:{write:!0}})],R.prototype,"cacheHint",void 0),e([y({json:{write:!0}})],R.prototype,"datumTransformation",void 0),e([c$6("datumTransformation")],R.prototype,"castDatumTransformation",null),e([y({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],R.prototype,"distance",void 0),e([y({type:K,json:{write:!0}})],R.prototype,"dynamicDataSource",void 0),e([y({type:String,json:{write:!0}})],R.prototype,"formatOf3DObjects",void 0),e([y({type:String,json:{write:!0}})],R.prototype,"gdbVersion",void 0),e([y({types:i$1,json:{read:p$3,write:!0}})],R.prototype,"geometry",void 0),e([y({type:Number,json:{write:!0}})],R.prototype,"geometryPrecision",void 0),e([y({type:[String],json:{write:!0}})],R.prototype,"groupByFieldsForStatistics",void 0),e([y({type:String,json:{write:!0}})],R.prototype,"having",void 0),e([y({type:Date})],R.prototype,"historicMoment",void 0),e([o$1("historicMoment")],R.prototype,"writeHistoricMoment",null),e([y({type:Number,json:{write:!0}})],R.prototype,"maxAllowableOffset",void 0),e([y({type:Number,cast:t=>t<1?1:t>f.MAX_MAX_RECORD_COUNT_FACTOR?f.MAX_MAX_RECORD_COUNT_FACTOR:t,json:{write:{overridePolicy:t=>({enabled:t>1})}}})],R.prototype,"maxRecordCountFactor",void 0),e([y({type:["xyFootprint"],json:{write:!0}})],R.prototype,"multipatchOption",void 0),e([y({type:Number,json:{read:{source:"resultRecordCount"}}})],R.prototype,"num",void 0),e([y({json:{write:!0}})],R.prototype,"objectIds",void 0),e([y({type:[String],json:{write:!0}})],R.prototype,"orderByFields",void 0),e([y({type:[String],json:{write:!0}})],R.prototype,"outFields",void 0),e([y({type:k,json:{name:"outSR",write:!0}})],R.prototype,"outSpatialReference",void 0),e([y({type:[m],json:{write:{enabled:!0,overridePolicy(){return {enabled:r$1(this.outStatistics)&&this.outStatistics.length>0}}}}})],R.prototype,"outStatistics",void 0),e([y({json:{write:!0}})],R.prototype,"parameterValues",void 0),e([o$1("parameterValues")],R.prototype,"writeParameterValues",null),e([y({type:b$1,json:{write:!0}})],R.prototype,"pixelSize",void 0),e([y({type:a,json:{write:!0}})],R.prototype,"quantizationParameters",void 0),e([y({type:[Object],json:{write:!0}})],R.prototype,"rangeValues",void 0),e([y({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return {enabled:"relation"===this.spatialRelationship}}}}})],R.prototype,"relationParameter",void 0),e([y({type:String,json:{write:!0}})],R.prototype,"resultType",void 0),e([y({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnCentroid",void 0),e([y({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnDistinctValues",void 0),e([y({type:Boolean,json:{default:!0,write:!0}})],R.prototype,"returnExceededLimitFeatures",void 0),e([y({type:Boolean,json:{write:!0}})],R.prototype,"returnGeometry",void 0),e([y({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnQueryGeometry",void 0),e([y({type:Boolean,json:{default:!1,write:!0}})],R.prototype,"returnM",void 0),e([y({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],R.prototype,"returnZ",void 0),e([y({type:k,json:{write:!0}})],R.prototype,"sourceSpatialReference",void 0),e([r(w,{ignoreUnknown:!1,name:"spatialRel"})],R.prototype,"spatialRelationship",void 0),e([y({type:Number,json:{read:{source:"resultOffset"}}})],R.prototype,"start",void 0),e([o$1("start"),o$1("num")],R.prototype,"writeStart",null),e([y({type:String,json:{write:!0}})],R.prototype,"sqlFormat",void 0),e([y({type:String,json:{write:!0}})],R.prototype,"text",void 0),e([y({type:y$3,json:{write:!0}})],R.prototype,"timeExtent",void 0),e([r(g,{ignoreUnknown:!1}),y({json:{write:{overridePolicy(t){return {enabled:t&&this.distance>0}}}}})],R.prototype,"units",void 0),e([y({type:String,json:{write:{overridePolicy(t){return {enabled:null!=t||this.start>0}}}}})],R.prototype,"where",void 0),e([o$1("where")],R.prototype,"writeWhere",null),R=f=e([n$2("esri.rest.support.Query")],R);var b=R;

export { K, a, b, c$5 as c, m };
