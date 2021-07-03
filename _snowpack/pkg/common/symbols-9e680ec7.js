import { y as y$7, n as n$d, N, z as t$8, D as u$9, w as k$2 } from './subclass-fe5fcf78.js';
import { e as e$2, o as o$2, a as a$f, p as p$h } from './JSONSupport-9346590f.js';
import { y as y$8, w as c$i, r as r$4, n as n$f } from './Message-70b34921.js';
import { r as r$2 } from './enumeration-7d0c165d.js';
import { e as e$3 } from './reader-fa0f173d.js';
import { T as T$1 } from './fieldUtils-22be41cd.js';
import { a as a$e, o as o$4, e as e$4, m as m$9 } from './SimpleLineSymbol-9959d1ea.js';
import { o as o$3 } from './Color-ae84a22a.js';
import { r as r$3, n as n$e } from './opacityUtils-b92214c2.js';
import { c as c$j } from './Point-ee7951c3.js';
import { G, Q, z, X, P as P$1, D as D$1, V } from './Loadable-d16b3d7d.js';
import { s as s$3, o as o$5 } from './jsonMap-e142bd84.js';
import { c as c$k, i as i$4, m as m$a, p as p$i } from './persistableUrlUtils-59858a7e.js';
import { L as L$1 } from './Collection-32506e74.js';
import { n as n$g, t as t$9 } from './collectionUtils-a13e45d8.js';
import { G as G$1 } from './Portal-ff63481f.js';
import { s as s$4, a as a$g } from './promiseUtils-2ff2b194.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$c;let l$j=n$c=class extends a$e{constructor(r){super(r),this.data=null,this.type="cim";}readData(r,o){return o}writeData(r,o){if(r)for(const t in r)o[t]=r[t];}async collectRequiredFields(r,o){if("CIMSymbolReference"===this.data.type){const t=this.data.primitiveOverrides;if(t){const e=t.map((t=>{const e=t.valueExpressionInfo;return T$1(r,o,e.expression)}));await Promise.all(e);}}}clone(){return new n$c({data:y$8(this.data)})}hash(){return c$i(JSON.stringify(this.data)).toString()}};e$2([y$7({json:{write:!1}})],l$j.prototype,"color",void 0),e$2([y$7({json:{write:!0}})],l$j.prototype,"data",void 0),e$2([e$3("data",["symbol"])],l$j.prototype,"readData",null),e$2([o$2("data")],l$j.prototype,"writeData",null),e$2([r$2({CIMSymbolReference:"cim"},{readOnly:!0})],l$j.prototype,"type",void 0),l$j=n$c=e$2([n$d("esri.symbols.CIMSymbol")],l$j);var d$9=l$j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p$g=class extends a$f{constructor(e){super(e),this.enabled=!0,this.type=null;}writeEnabled(e,r,o){e||(r[o]=e);}};e$2([y$7({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],p$g.prototype,"enabled",void 0),e$2([o$2("enabled")],p$g.prototype,"writeEnabled",null),e$2([y$7({type:["icon","object","line","path","fill","water","extrude","text"],readOnly:!0})],p$g.prototype,"type",void 0),p$g=e$2([n$d("esri.symbols.Symbol3DLayer")],p$g);var a$d=p$g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function s$2(e,t){const n=null!=t.transparency?r$3(t.transparency):1,s=t.color;return s&&Array.isArray(s)?new o$3([s[0]||0,s[1]||0,s[2]||0,n]):null}function a$c(r,e){e.color=r.toJSON().slice(0,3);const t=n$e(r.a);0!==t&&(e.transparency=t);}const c$h={type:o$3,json:{type:[N],default:null,read:{source:["color","transparency"],reader:s$2},write:{target:{color:{type:[N]},transparency:{type:N}},writer:a$c}}},p$f={type:Number,cast:o$4,json:{write:!0}},l$i={type:[Number],cast:r=>null!=r?r:Array.isArray(r)?r.map(o$4):null,json:{read:!1,write:!1}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let l$h=class extends a$f{constructor(o){super(o),this.color=new o$3([0,0,0,1]),this.extensionLength=0,this.size=e$4(1);}clone(){}cloneProperties(){return {color:y$8(this.color),size:this.size,extensionLength:this.extensionLength}}};e$2([y$7({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],l$h.prototype,"type",void 0),e$2([y$7(c$h)],l$h.prototype,"color",void 0),e$2([y$7({...p$f,json:{write:{overridePolicy:o=>({enabled:!!o})}}})],l$h.prototype,"extensionLength",void 0),e$2([y$7(p$f)],l$h.prototype,"size",void 0),l$h=e$2([n$d("esri.symbols.edges.Edges3D")],l$h);var m$8=l$h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t$7;let c$g=t$7=class extends m$8{constructor(r){super(r),this.type="sketch";}clone(){return new t$7(this.cloneProperties())}};e$2([r$2({sketch:"sketch"},{readOnly:!0})],c$g.prototype,"type",void 0),c$g=t$7=e$2([n$d("esri.symbols.edges.SketchEdges3D")],c$g);var p$e=c$g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t$6;let p$d=t$6=class extends m$8{constructor(r){super(r),this.type="solid";}clone(){return new t$6(this.cloneProperties())}};e$2([r$2({solid:"solid"},{readOnly:!0})],p$d.prototype,"type",void 0),p$d=t$6=e$2([n$d("esri.symbols.support.SolidEdges3D")],p$d);var c$f=p$d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t$5={types:{key:"type",base:m$8,typeMap:{solid:c$f,sketch:p$e}},json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$c;let l$g=p$c=class extends a$f{constructor(){super(...arguments),this.color=null;}clone(){return new p$c({color:r$4(this.color)?this.color.clone():null})}};e$2([y$7(c$h)],l$g.prototype,"color",void 0),l$g=p$c=e$2([n$d("esri.symbols.support.Symbol3DMaterial")],l$g);var m$7=l$g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$f;let m$6=l$f=class extends a$d{constructor(e){super(e),this.type="extrude",this.size=1,this.material=null,this.castShadows=!0,this.edges=null;}clone(){return new l$f({edges:this.edges&&this.edges.clone(),enabled:this.enabled,material:r$4(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size})}};e$2([r$2({Extrude:"extrude"},{readOnly:!0})],m$6.prototype,"type",void 0),e$2([y$7({type:Number,json:{write:{enabled:!0,isRequired:!0}},nonNullable:!0})],m$6.prototype,"size",void 0),e$2([y$7({type:m$7,json:{write:!0}})],m$6.prototype,"material",void 0),e$2([y$7({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],m$6.prototype,"castShadows",void 0),e$2([y$7(t$5)],m$6.prototype,"edges",void 0),m$6=l$f=e$2([n$d("esri.symbols.ExtrudeSymbol3DLayer")],m$6);var c$e=m$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let l$e=class extends a$e{constructor(e){super(e),this.outline=null,this.type=null;}hash(){return `${this.type}.${this.outline&&this.outline.hash()}`}};e$2([y$7({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":m$9}},json:{default:null,write:!0}})],l$e.prototype,"outline",void 0),e$2([y$7({type:["simple-fill","picture-fill"],readOnly:!0})],l$e.prototype,"type",void 0),l$e=e$2([n$d("esri.symbols.FillSymbol")],l$e);var p$b=l$e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t$4=class extends a$f{constructor(r){super(r);}clone(){}};e$2([y$7({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],t$4.prototype,"type",void 0),t$4=e$2([n$d("esri.symbols.patterns.Pattern3D")],t$4);var p$a=t$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var a$b=["backward-diagonal","cross","diagonal-cross","forward-diagonal","horizontal","none","solid","vertical"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$9;let c$d=p$9=class extends p$a{constructor(r){super(r),this.type="style",this.style="solid";}clone(){return new p$9({style:this.style})}};e$2([y$7({type:["style"]})],c$d.prototype,"type",void 0),e$2([y$7({type:a$b,json:{read:!0,write:!0}})],c$d.prototype,"style",void 0),c$d=p$9=e$2([n$d("esri.symbols.patterns.StylePattern3D")],c$d);var i$3=c$d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$1(t,r,s){if(!t)return t;switch(t.type){case"style":{const r=new i$3;return r.read(t,s),r}}}const s$1={types:{key:"type",base:p$a,typeMap:{style:i$3}},json:{read:r$1,write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o$1=new o$3("white");new o$3("black");const e$1=new o$3([255,255,255,0]);function t$3(n){return 0===n.r&&0===n.g&&0===n.b}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var c$c;let p$8=c$c=class extends m$7{clone(){return new c$c({color:r$4(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode})}};e$2([r$2({multiply:"multiply",replace:"replace",tint:"tint"})],p$8.prototype,"colorMixMode",void 0),p$8=c$c=e$2([n$d("esri.symbols.support.Symbol3DFillMaterial")],p$8);var l$d=p$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$b;let a$a=n$b=class extends a$f{constructor(){super(...arguments),this.color=new o$3([0,0,0,1]),this.size=e$4(1),this.stipplePattern=null,this.stippleOffColor=null;}clone(){return new n$b({color:r$4(this.color)?this.color.clone():null,size:this.size,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})}};e$2([y$7(c$h)],a$a.prototype,"color",void 0),e$2([y$7(p$f)],a$a.prototype,"size",void 0),e$2([y$7(l$i)],a$a.prototype,"stipplePattern",void 0),e$2([y$7({type:o$3})],a$a.prototype,"stippleOffColor",void 0),a$a=n$b=e$2([n$d("esri.symbols.support.Symbol3DOutline")],a$a);var f$4=a$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var y$6;let d$8=y$6=class extends a$d{constructor(t){super(t),this.type="fill",this.material=null,this.pattern=null,this.castShadows=!0,this.outline=null,this.edges=null;}clone(){return new y$6({edges:r$4(this.edges)?this.edges.clone():null,enabled:this.enabled,material:r$4(this.material)?this.material.clone():null,pattern:r$4(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:r$4(this.outline)?this.outline.clone():null})}static fromSimpleFillSymbol(t){return new y$6({material:{color:(t.color||e$1).clone()},pattern:t.style&&"solid"!==t.style?new i$3({style:t.style}):null,outline:t.outline?new f$4({size:t.outline.width||0,color:(t.outline.color||o$1).clone()}):null})}};e$2([r$2({Fill:"fill"},{readOnly:!0})],d$8.prototype,"type",void 0),e$2([y$7({type:l$d,json:{write:!0}})],d$8.prototype,"material",void 0),e$2([y$7(s$1)],d$8.prototype,"pattern",void 0),e$2([y$7({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],d$8.prototype,"castShadows",void 0),e$2([y$7({type:f$4,json:{write:!0}})],d$8.prototype,"outline",void 0),e$2([y$7(t$5)],d$8.prototype,"edges",void 0),d$8=y$6=e$2([n$d("esri.symbols.FillSymbol3DLayer")],d$8);var h$7=d$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var a$9;let l$c=a$9=class extends a$f{constructor(t){super(t),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal";}castSize(t){return o$4(t)}clone(){return new a$9({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return `${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}};e$2([y$7({type:["underline","line-through","none"],json:{default:"none",write:!0}})],l$c.prototype,"decoration",void 0),e$2([y$7({type:String,json:{write:!0}})],l$c.prototype,"family",void 0),e$2([y$7({type:Number,json:{write:{overridePolicy:(t,o,e)=>({enabled:!e||!e.textSymbol3D})}}})],l$c.prototype,"size",void 0),e$2([c$j("size")],l$c.prototype,"castSize",null),e$2([y$7({type:["normal","italic","oblique"],json:{default:"normal",write:!0}})],l$c.prototype,"style",void 0),e$2([y$7({type:["normal","bold","bolder","lighter"],json:{default:"normal",write:!0}})],l$c.prototype,"weight",void 0),l$c=a$9=e$2([n$d("esri.symbols.Font")],l$c);var n$a=l$c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$b;const d$7=s$3()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"});let h$6=l$b=class extends a$f{constructor(r){super(r);}readHref(r,e,o){return r?c$k(r,o):e.dataURI}writeHref(r,e,o,c){r&&(G(r)?e.dataURI=r:(e.href=i$4(r,c),Q(e.href)&&(e.href=z(e.href))));}clone(){return new l$b({href:this.href,primitive:this.primitive})}};e$2([y$7({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],h$6.prototype,"href",void 0),e$2([e$3("href")],h$6.prototype,"readHref",null),e$2([o$2("href",{href:{type:String},dataURI:{type:String}})],h$6.prototype,"writeHref",null),e$2([r$2(d$7)],h$6.prototype,"primitive",void 0),h$6=l$b=e$2([n$d("esri.symbols.support.IconSymbol3DLayerResource")],h$6);const j$5="circle";var y$5=h$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t$2;let p$7=t$2=class extends p$h{constructor(){super(...arguments),this.x=0,this.y=0;}clone(){return new t$2({x:this.x,y:this.y})}};e$2([y$7({type:Number})],p$7.prototype,"x",void 0),e$2([y$7({type:Number})],p$7.prototype,"y",void 0),p$7=t$2=e$2([n$d("esri.symbols.support.Symbol3DAnchorPosition2D")],p$7);var c$b=p$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var d$6;const f$3=n$f.getLogger("esri.symbols.IconSymbol3DLayer");let b$3=d$6=class extends a$d{constructor(o){super(o),this.material=null,this.resource=null,this.type="icon",this.size=12,this.anchor="center",this.anchorPosition=void 0,this.outline=void 0;}clone(){return new d$6({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:r$4(this.material)?this.material.clone():null,outline:r$4(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})}static fromSimpleMarkerSymbol(o){const t=o.color||o$1,r=j$4(o),e=o.outline&&o.outline.width>0?{size:o.outline.width,color:(o.outline.color||o$1).clone()}:null;return new d$6({size:o.size,resource:{primitive:w(o.style)},material:{color:t},outline:e,anchor:r?"relative":void 0,anchorPosition:r})}static fromPictureMarkerSymbol(o){const t=!o.color||t$3(o.color)?o$1:o.color,r=j$4(o);return new d$6({size:o.width<=o.height?o.height:o.width,resource:{href:o.url},material:{color:t.clone()},anchor:r?"relative":void 0,anchorPosition:r})}static fromCIMSymbol(o){return new d$6({resource:{href:X({mediaType:"application/json",data:JSON.stringify(o.data)})}})}};function j$4(o){const t="width"in o?o.width:o.size,r="height"in o?o.height:o.size,e=v$1(o.xoffset),i=v$1(o.yoffset);return (e||i)&&t&&r?{x:-e/t,y:i/r}:null}function v$1(o){return isFinite(o)?o:0}e$2([y$7({type:m$7,json:{write:!0}})],b$3.prototype,"material",void 0),e$2([y$7({type:y$5,json:{write:!0}})],b$3.prototype,"resource",void 0),e$2([r$2({Icon:"icon"},{readOnly:!0})],b$3.prototype,"type",void 0),e$2([y$7(p$f)],b$3.prototype,"size",void 0),e$2([r$2({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),y$7({json:{default:"center"}})],b$3.prototype,"anchor",void 0),e$2([y$7({type:p$7,json:{type:[Number],read:{reader:o=>new p$7({x:o[0],y:o[1]})},write:{writer:(o,t)=>{t.anchorPosition=[o.x,o.y];},overridePolicy(){return {enabled:"relative"===this.anchor}}}}})],b$3.prototype,"anchorPosition",void 0),e$2([y$7({type:f$4,json:{write:!0}})],b$3.prototype,"outline",void 0),b$3=d$6=e$2([n$d("esri.symbols.IconSymbol3DLayer")],b$3);const g$2={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};function w(o){const t=g$2[o];return t||(f$3.warn(`${o} cannot be mapped to Icon symbol. Fallback to "circle"`),"circle")}var S$3=b$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var u$8;let f$2=u$8=class extends a$d{constructor(t){super(t),this.material=null,this.type="line",this.join="miter",this.cap="butt",this.size=e$4(1),this.stipplePattern=null,this.stippleOffColor=null;}clone(){return new u$8({enabled:this.enabled,material:r$4(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})}static fromSimpleLineSymbol(t){return new u$8({size:t.width||1,cap:t.cap||"butt",join:t.join||"miter",material:{color:(t.color||o$1).clone()}})}};e$2([y$7({type:m$7,json:{write:!0}})],f$2.prototype,"material",void 0),e$2([r$2({Line:"line"},{readOnly:!0})],f$2.prototype,"type",void 0),e$2([y$7({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],f$2.prototype,"join",void 0),e$2([y$7({type:["butt","square","round"],json:{write:!0,default:"butt"}})],f$2.prototype,"cap",void 0),e$2([y$7(p$f)],f$2.prototype,"size",void 0),e$2([y$7(l$i)],f$2.prototype,"stipplePattern",void 0),e$2([y$7({type:o$3})],f$2.prototype,"stippleOffColor",void 0),f$2=u$8=e$2([n$d("esri.symbols.LineSymbol3DLayer")],f$2);var y$4=f$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$9;const a$8=s$3()({sphere:"sphere",cylinder:"cylinder",cube:"cube",cone:"cone",diamond:"diamond",tetrahedron:"tetrahedron",invertedCone:"inverted-cone"});let m$5=n$9=class extends a$f{clone(){return new n$9({href:this.href,primitive:this.primitive})}};e$2([y$7({type:String,json:{read:m$a,write:p$i}})],m$5.prototype,"href",void 0),e$2([r$2(a$8)],m$5.prototype,"primitive",void 0),m$5=n$9=e$2([n$d("esri.symbols.support.ObjectSymbol3DLayerResource")],m$5);const d$5="sphere";var u$7=m$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var e;let p$6=e=class extends p$h{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0;}clone(){return new e({x:this.x,y:this.y,z:this.z})}};e$2([y$7({type:Number})],p$6.prototype,"x",void 0),e$2([y$7({type:Number})],p$6.prototype,"y",void 0),e$2([y$7({type:Number})],p$6.prototype,"z",void 0),p$6=e=e$2([n$d("esri.symbols.support.Symbol3DAnchorPosition3D")],p$6);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$8;let c$a=n$8=class extends a$d{constructor(o){super(o),this.material=null,this.castShadows=!0,this.resource=null,this.type="object",this.width=void 0,this.height=void 0,this.depth=void 0,this.anchor=void 0,this.anchorPosition=void 0,this.heading=void 0,this.tilt=void 0,this.roll=void 0;}clone(){return new n$8({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),depth:this.depth,enabled:this.enabled,height:this.height,material:r$4(this.material)?this.material.clone():null,castShadows:this.castShadows,resource:this.resource&&this.resource.clone(),width:this.width})}get isPrimitive(){return !this.resource||"string"!=typeof this.resource.href}};e$2([y$7({type:m$7,json:{write:!0}})],c$a.prototype,"material",void 0),e$2([y$7({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],c$a.prototype,"castShadows",void 0),e$2([y$7({type:u$7,json:{write:!0}})],c$a.prototype,"resource",void 0),e$2([r$2({Object:"object"},{readOnly:!0})],c$a.prototype,"type",void 0),e$2([y$7({type:Number,json:{write:!0}})],c$a.prototype,"width",void 0),e$2([y$7({type:Number,json:{write:!0}})],c$a.prototype,"height",void 0),e$2([y$7({type:Number,json:{write:!0}})],c$a.prototype,"depth",void 0),e$2([r$2({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),y$7({json:{default:"origin"}})],c$a.prototype,"anchor",void 0),e$2([y$7({type:p$6,json:{type:[Number],read:{reader:o=>new p$6({x:o[0],y:o[1],z:o[2]})},write:{writer:(o,t)=>{t.anchorPosition=[o.x,o.y,o.z];},overridePolicy(){return {enabled:"relative"===this.anchor}}}}})],c$a.prototype,"anchorPosition",void 0),e$2([y$7({type:Number,json:{write:!0}})],c$a.prototype,"heading",void 0),e$2([y$7({type:Number,json:{write:!0}})],c$a.prototype,"tilt",void 0),e$2([y$7({type:Number,json:{write:!0}})],c$a.prototype,"roll",void 0),e$2([y$7({readOnly:!0})],c$a.prototype,"isPrimitive",null),c$a=n$8=e$2([n$d("esri.symbols.ObjectSymbol3DLayer")],c$a);var l$a=c$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var a$7;let l$9=a$7=class extends a$d{constructor(t){super(t),this.material=null,this.castShadows=!0,this.type="path",this.profile="circle",this.join="miter",this.cap="butt",this.width=void 0,this.height=void 0,this.anchor="center",this.profileRotation="all";}get size(){return this.width&&this.height?this.width===this.height?this.width:void 0:this.width?this.width:this.height?this.height:void 0}set size(t){this.width=t,this.height=t;}readSize(t,e){return e.height||e.width?t:e.size}clone(){return new a$7({enabled:this.enabled,material:r$4(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,anchor:this.anchor})}};e$2([y$7({type:m$7,json:{write:!0}})],l$9.prototype,"material",void 0),e$2([y$7({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],l$9.prototype,"castShadows",void 0),e$2([r$2({Path:"path"},{readOnly:!0})],l$9.prototype,"type",void 0),e$2([y$7({type:Number})],l$9.prototype,"size",null),e$2([e$3("size")],l$9.prototype,"readSize",null),e$2([y$7({type:["circle","quad"],json:{write:!0,default:"circle"}})],l$9.prototype,"profile",void 0),e$2([y$7({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],l$9.prototype,"join",void 0),e$2([y$7({type:["none","butt","square","round"],json:{write:!0,default:"butt"}})],l$9.prototype,"cap",void 0),e$2([y$7({type:Number,json:{write:{enabled:!0,target:{width:{type:Number},size:{type:Number}}}}})],l$9.prototype,"width",void 0),e$2([y$7({type:Number,json:{write:!0}})],l$9.prototype,"height",void 0),e$2([y$7({type:["center","bottom","top"],json:{write:!0,default:"center"}})],l$9.prototype,"anchor",void 0),e$2([y$7({type:["heading","all"],json:{write:!0,default:"all"}})],l$9.prototype,"profileRotation",void 0),l$9=a$7=e$2([n$d("esri.symbols.PathSymbol3DLayer")],l$9);var d$4=l$9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var m$4;let l$8=m$4=class extends a$f{constructor(){super(...arguments),this.color=new o$3([0,0,0,1]),this.size=0;}clone(){return new m$4({color:y$8(this.color),size:this.size})}};e$2([y$7(c$h)],l$8.prototype,"color",void 0),e$2([y$7(p$f)],l$8.prototype,"size",void 0),l$8=m$4=e$2([n$d("esri.symbols.support.Symbol3DHalo")],l$8);var a$6=l$8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var h$5;let u$6=h$5=class extends a$d{constructor(t){super(t),this._userSize=void 0,this.halo=null,this.material=null,this.text=void 0,this.type="text";}get font(){return this._get("font")||null}set font(t){t&&this._userSize&&(t.size=this._userSize),this._set("font",t);}writeFont(t,o,e,r){const s={...r,textSymbol3D:!0};o.font=t.write({},s),delete o.font.size;}get size(){return null!=this._userSize?this._userSize:this.font&&null!=this.font.size?this.font.size:9}set size(t){this._userSize=t,this.font&&(this.font.size=this._userSize),this.notifyChange("size");}clone(){return new h$5({enabled:this.enabled,font:this.font&&y$8(this.font),halo:this.halo&&y$8(this.halo),material:r$4(this.material)?this.material.clone():null,size:this.size,text:this.text})}static fromTextSymbol(t){const o=f$1(t.haloColor,t.haloSize),e=t.font?t.font.clone():new n$a;return new h$5({size:e.size,font:e,halo:o,material:t.color?{color:t.color.clone()}:null,text:t.text})}};function f$1(t,e){return t&&e>0?{color:y$8(t),size:e}:null}e$2([y$7({type:n$a,json:{write:!0}})],u$6.prototype,"font",null),e$2([o$2("font")],u$6.prototype,"writeFont",null),e$2([y$7({type:a$6,json:{write:!0}})],u$6.prototype,"halo",void 0),e$2([y$7({type:m$7,json:{write:!0}})],u$6.prototype,"material",void 0),e$2([y$7(p$f),y$7()],u$6.prototype,"size",null),e$2([y$7({type:String,json:{write:!0}})],u$6.prototype,"text",void 0),e$2([r$2({Text:"text"},{readOnly:!0})],u$6.prototype,"type",void 0),u$6=h$5=e$2([n$d("esri.symbols.TextSymbol3DLayer")],u$6);var y$3=u$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$7;let c$9=l$7=class extends a$d{constructor(e){super(e),this.color=m$3.clone(),this.type="water",this.waterbodySize="medium",this.waveDirection=null,this.waveStrength="moderate";}clone(){return new l$7({color:y$8(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})}};e$2([y$7({type:o$3,nonNullable:!0,json:{type:[N],write:(e,o,r)=>o[r]=e.toArray(1),default:()=>m$3.clone(),defaultEquals:e=>e.toCss(!0)===m$3.toCss(!0)}})],c$9.prototype,"color",void 0),e$2([r$2({Water:"water"},{readOnly:!0})],c$9.prototype,"type",void 0),e$2([y$7({type:["small","medium","large"],json:{write:!0,default:"medium"}})],c$9.prototype,"waterbodySize",void 0),e$2([y$7({type:Number,json:{write:!0,default:null}})],c$9.prototype,"waveDirection",void 0),e$2([y$7({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],c$9.prototype,"waveStrength",void 0),c$9=l$7=e$2([n$d("esri.symbols.WaterSymbol3DLayer")],c$9);const m$3=new o$3([0,119,190]);var n$7=c$9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$5;let l$6=p$5=class extends p$h{constructor(){super(...arguments),this.portal=null;}clone(){return new p$5({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}};e$2([y$7({type:String})],l$6.prototype,"name",void 0),e$2([y$7({type:String})],l$6.prototype,"styleUrl",void 0),e$2([y$7({type:String})],l$6.prototype,"styleName",void 0),e$2([y$7({type:G$1})],l$6.prototype,"portal",void 0),l$6=p$5=e$2([n$d("esri.symbols.support.StyleOrigin")],l$6);var a$5=l$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t$1;let p$4=t$1=class extends p$h{clone(){return new t$1({url:this.url})}};e$2([y$7({type:String})],p$4.prototype,"url",void 0),p$4=t$1=e$2([n$d("esri.symbols.support.Thumbnail")],p$4);var c$8=p$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const v={icon:S$3,object:l$a,line:y$4,path:d$4,fill:h$7,extrude:c$e,text:y$3,water:n$7},C=L$1.ofType({base:a$d,key:"type",typeMap:v,errorContext:"symbol-layer"}),T=n$f.getLogger("esri.symbols.Symbol3D");let k$1=class extends a$e{constructor(e){super(e),this.styleOrigin=null,this.thumbnail=null,this.type=null;const o=this.__accessor__&&this.__accessor__.metadatas&&this.__accessor__.metadatas.symbolLayers,t=o&&o.type||L$1;this._set("symbolLayers",new t);}get color(){return null}set color(e){T.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.");}set symbolLayers(e){n$g(e,this._get("symbolLayers"));}readStyleOrigin(e,r,o){if(e.styleUrl&&e.name){const r=c$k(e.styleUrl,o);return new a$5({styleUrl:r,name:e.name})}if(e.styleName&&e.name)return new a$5({portal:o&&o.portal||G$1.getDefault(),styleName:e.styleName,name:e.name});o&&o.messages&&o.messages.push(new t$8("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:o,definition:e}));}writeStyleOrigin(e,r,o,t){if(e.styleUrl&&e.name){let o=i$4(e.styleUrl,t);Q(o)&&(o=z(o)),r.styleOrigin={styleUrl:o,name:e.name};}else e.styleName&&e.name&&(e.portal&&t&&t.portal&&!P$1(e.portal.restUrl,t.portal.restUrl)?t&&t.messages&&t.messages.push(new t$8("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):r.styleOrigin={styleName:e.styleName,name:e.name});}normalizeCtorArgs(e){return e instanceof a$d||e&&v[e.type]?{symbolLayers:[e]}:Array.isArray(e)?{symbolLayers:e}:e}};e$2([y$7({json:{read:!1,write:!1}})],k$1.prototype,"color",null),e$2([y$7({type:C,nonNullable:!0,json:{write:!0}}),c$j(t$9)],k$1.prototype,"symbolLayers",null),e$2([y$7({type:a$5})],k$1.prototype,"styleOrigin",void 0),e$2([e$3("styleOrigin")],k$1.prototype,"readStyleOrigin",null),e$2([o$2("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],k$1.prototype,"writeStyleOrigin",null),e$2([y$7({type:c$8,json:{read:!1}})],k$1.prototype,"thumbnail",void 0),e$2([y$7({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],k$1.prototype,"type",void 0),k$1=e$2([n$d("esri.symbols.Symbol3D")],k$1);var A=k$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t=class extends a$f{constructor(r){super(r),this.visible=!0;}clone(){}};e$2([y$7({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"type",void 0),e$2([y$7({readOnly:!0})],t.prototype,"visible",void 0),t=e$2([n$d("esri.symbols.callouts.Callout3D")],t);var p$3=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$5;let a$4=l$5=class extends a$f{constructor(){super(...arguments),this.color=new o$3("white");}clone(){return new l$5({color:y$8(this.color)})}};e$2([y$7(c$h)],a$4.prototype,"color",void 0),a$4=l$5=e$2([n$d("esri.symbols.callouts.LineCallout3DBorder")],a$4);var i$2=a$4;Object.freeze({__proto__:null,get LineCallout3DBorder(){return a$4},default:i$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var u$5;let d$3=u$5=class extends p$3{constructor(o){super(o),this.type="line",this.color=new o$3([0,0,0,1]),this.size=e$4(1),this.border=null;}get visible(){return this.size>0&&r$4(this.color)&&this.color.a>0}clone(){return new u$5({color:y$8(this.color),size:this.size,border:y$8(this.border)})}};e$2([r$2({line:"line"},{readOnly:!0})],d$3.prototype,"type",void 0),e$2([y$7(c$h)],d$3.prototype,"color",void 0),e$2([y$7(p$f)],d$3.prototype,"size",void 0),e$2([y$7({type:i$2,json:{write:!0}})],d$3.prototype,"border",void 0),e$2([y$7({readOnly:!0})],d$3.prototype,"visible",null),d$3=u$5=e$2([n$d("esri.symbols.callouts.LineCallout3D")],d$3);var j$3=d$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r(t){if(!t)return !1;const e=t.verticalOffset;return !!e&&!(e.screenLength<=0||e.maxWorldLength<=0)}function n$6(t){if(!t)return !1;if(!t.supportsCallout||!t.supportsCallout())return !1;const e=t.callout;return !!e&&(!!e.visible&&!!r(t))}function o(t){return "point-3d"===t.type||"label-3d"===t.type}const l$4={types:{key:"type",base:p$3,typeMap:{line:j$3}},json:{write:!0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$2;let n$5=p$2=class extends a$f{constructor(){super(...arguments),this.screenLength=0,this.minWorldLength=0;}clone(){return new p$2({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})}};e$2([y$7(p$f)],n$5.prototype,"screenLength",void 0),e$2([y$7({type:Number,json:{write:!0,default:0}})],n$5.prototype,"minWorldLength",void 0),e$2([y$7({type:Number,json:{write:!0}})],n$5.prototype,"maxWorldLength",void 0),n$5=p$2=e$2([n$d("esri.symbols.support.Symbol3DVerticalOffset")],n$5);var i$1=n$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var u$4;const n$4=L$1.ofType({base:null,key:"type",typeMap:{text:y$3}});let f=u$4=class extends A{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.styleOrigin=null,this.symbolLayers=new n$4,this.type="label-3d";}supportsCallout(){return !0}hasVisibleCallout(){return n$6(this)}hasVisibleVerticalOffset(){return r(this)}clone(){return new u$4({styleOrigin:y$8(this.styleOrigin),symbolLayers:y$8(this.symbolLayers),thumbnail:y$8(this.thumbnail),callout:y$8(this.callout),verticalOffset:y$8(this.verticalOffset)})}static fromTextSymbol(t){return new u$4({symbolLayers:[y$3.fromTextSymbol(t)]})}};e$2([y$7({type:i$1,json:{write:!0}})],f.prototype,"verticalOffset",void 0),e$2([y$7(l$4)],f.prototype,"callout",void 0),e$2([y$7({json:{read:!1,write:!1}})],f.prototype,"styleOrigin",void 0),e$2([y$7({type:n$4})],f.prototype,"symbolLayers",void 0),e$2([r$2({LabelSymbol3D:"label-3d"},{readOnly:!0})],f.prototype,"type",void 0),f=u$4=e$2([n$d("esri.symbols.LabelSymbol3D")],f);var b$2=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$3;const a$3=L$1.ofType({base:null,key:"type",typeMap:{line:y$4,path:d$4}}),n$3=L$1.ofType({base:null,key:"type",typeMap:{line:y$4,path:d$4}});let c$7=l$3=class extends A{constructor(o){super(o),this.symbolLayers=new a$3,this.type="line-3d";}clone(){return new l$3({styleOrigin:y$8(this.styleOrigin),symbolLayers:y$8(this.symbolLayers),thumbnail:y$8(this.thumbnail)})}static fromSimpleLineSymbol(o){return new l$3({symbolLayers:[y$4.fromSimpleLineSymbol(o)]})}};e$2([y$7({type:a$3,json:{type:n$3}})],c$7.prototype,"symbolLayers",void 0),e$2([r$2({LineSymbol3D:"line-3d"},{readOnly:!0})],c$7.prototype,"type",void 0),c$7=l$3=e$2([n$d("esri.symbols.LineSymbol3D")],c$7);var b$1=c$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p$1=class extends a$e{constructor(e){super(e),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9;}hash(){return `${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};e$2([y$7({type:Number,json:{read:e=>e&&-1*e,write:(e,t)=>t.angle=e&&-1*e}})],p$1.prototype,"angle",void 0),e$2([y$7({type:["simple-marker","picture-marker"],readOnly:!0})],p$1.prototype,"type",void 0),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],p$1.prototype,"xoffset",void 0),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],p$1.prototype,"yoffset",void 0),e$2([y$7({type:Number,cast:e=>"auto"===e?e:o$4(e),json:{write:!0}})],p$1.prototype,"size",void 0),p$1=e$2([n$d("esri.symbols.MarkerSymbol")],p$1);var i=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$2;const y$2=L$1.ofType({base:null,key:"type",typeMap:{fill:h$7}});let c$6=l$2=class extends A{constructor(o){super(o),this.symbolLayers=new y$2,this.type="mesh-3d";}clone(){return new l$2({styleOrigin:y$8(this.styleOrigin),symbolLayers:y$8(this.symbolLayers),thumbnail:y$8(this.thumbnail)})}};e$2([y$7({type:y$2})],c$6.prototype,"symbolLayers",void 0),e$2([r$2({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],c$6.prototype,"type",void 0),c$6=l$2=e$2([n$d("esri.symbols.MeshSymbol3D")],c$6);var a$2=c$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function s(a,r,t){return r.imageData?X({mediaType:r.contentType||"image/png",isBase64:!0,data:r.imageData}):l$1(r.url,t)}function l$1(e,t){return p(t)&&!Q(e)&&t.layer.parsedUrl?D$1(t.layer.parsedUrl.path,"images",e):c$k(e,t)}function u$3(e,a,r,n){if(G(e)){const t=V(e);a.contentType=t.mediaType,a.imageData=t.data,r&&r.imageData===a.imageData&&r.url&&p$i(r.url,a,"url",n);}else p$i(e,a,"url",n);}const m$2={json:{read:{source:["imageData","url"],reader:s},write:{writer(e,a,r,t){u$3(e,a,this.source,t);}}}},c$5={readOnly:!0,json:{read:{source:["imageData","url"],reader(e,a,r){const t={};return a.imageData&&(t.imageData=a.imageData),a.contentType&&(t.contentType=a.contentType),a.url&&(t.url=l$1(a.url,r)),t}}}};function p(e){return e&&("service"===e.origin||"portal-item"===e.origin)&&e.layer&&("feature"===e.layer.type||"stream"===e.layer.type)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var c$4;let u$2=c$4=class extends p$b{constructor(...t){super(...t),this.type="picture-fill",this.url=null,this.xscale=1,this.yscale=1,this.width=12,this.height=12,this.xoffset=0,this.yoffset=0,this.source=null;}normalizeCtorArgs(t,o,e,r){if(t&&"string"!=typeof t&&null==t.imageData)return t;const i={};return t&&(i.url=t),o&&(i.outline=o),null!=e&&(i.width=o$4(e)),null!=r&&(i.height=o$4(r)),i}clone(){const t=new c$4({color:y$8(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});return t._set("source",y$8(this.source)),t}hash(){var t;return `${super.hash()}.${null==(t=this.color)?void 0:t.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`}};e$2([r$2({esriPFS:"picture-fill"},{readOnly:!0})],u$2.prototype,"type",void 0),e$2([y$7(m$2)],u$2.prototype,"url",void 0),e$2([y$7({type:Number,json:{write:!0}})],u$2.prototype,"xscale",void 0),e$2([y$7({type:Number,json:{write:!0}})],u$2.prototype,"yscale",void 0),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],u$2.prototype,"width",void 0),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],u$2.prototype,"height",void 0),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],u$2.prototype,"xoffset",void 0),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],u$2.prototype,"yoffset",void 0),e$2([y$7(c$5)],u$2.prototype,"source",void 0),u$2=c$4=e$2([n$d("esri.symbols.PictureFillSymbol")],u$2);var a$1=u$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l;let a=l=class extends i{constructor(...r){super(...r),this.color=null,this.type="picture-marker",this.url=null,this.source=null,this.height=12,this.width=12,this.size=null;}normalizeCtorArgs(r,t,o){if(r&&"string"!=typeof r&&null==r.imageData)return r;const s={};return r&&(s.url=r),null!=t&&(s.width=o$4(t)),null!=o&&(s.height=o$4(o)),s}readHeight(r,t){return t.size||r}readWidth(r,t){return t.size||r}clone(){const r=new l({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});return r._set("source",y$8(this.source)),r}hash(){return `${super.hash()}.${this.height}.${this.url}.${this.width}`}};e$2([y$7({json:{write:!1}})],a.prototype,"color",void 0),e$2([r$2({esriPMS:"picture-marker"},{readOnly:!0})],a.prototype,"type",void 0),e$2([y$7(m$2)],a.prototype,"url",void 0),e$2([y$7(c$5)],a.prototype,"source",void 0),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],a.prototype,"height",void 0),e$2([e$3("height",["height","size"])],a.prototype,"readHeight",null),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],a.prototype,"width",void 0),e$2([y$7({json:{write:!1}})],a.prototype,"size",void 0),a=l=e$2([n$d("esri.symbols.PictureMarkerSymbol")],a);var n$2=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var S$2;const h$4=L$1.ofType({base:null,key:"type",typeMap:{icon:S$3,object:l$a,text:y$3}}),j$2=L$1.ofType({base:null,key:"type",typeMap:{icon:S$3,object:l$a}});let L=S$2=class extends A{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.symbolLayers=new h$4,this.type="point-3d";}writeSymbolLayers(t,e,r,s){const l=t.filter((t=>"text"!==t.type));if(s&&s.messages&&l.length<t.length){const e=t.find((t=>"text"===t.type));s.messages.push(new s$4("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:e}));}e[r]=l.map((t=>t.write({},s))).toArray();}supportsCallout(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return !1;for(const t of this.symbolLayers.items)switch(t.type){case"icon":case"text":case"object":continue;default:return !1}return !0}hasVisibleCallout(){return n$6(this)}hasVisibleVerticalOffset(){return r(this)}clone(){return new S$2({verticalOffset:y$8(this.verticalOffset),callout:y$8(this.callout),styleOrigin:y$8(this.styleOrigin),symbolLayers:y$8(this.symbolLayers),thumbnail:y$8(this.thumbnail)})}static fromSimpleMarkerSymbol(t){return new S$2({symbolLayers:[S$3.fromSimpleMarkerSymbol(t)]})}static fromPictureMarkerSymbol(t){return new S$2({symbolLayers:[S$3.fromPictureMarkerSymbol(t)]})}static fromCIMSymbol(t){if(t.data&&t.data.symbol){const e=t.data.symbol;if("CIMPointSymbol"===e.type&&e.callout)return new S$2({symbolLayers:[S$3.fromCIMSymbol(t)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}})}return new S$2({symbolLayers:[S$3.fromCIMSymbol(t)]})}static fromTextSymbol(t){return new S$2({symbolLayers:[y$3.fromTextSymbol(t)]})}};e$2([y$7({type:i$1,json:{write:!0}})],L.prototype,"verticalOffset",void 0),e$2([y$7(l$4)],L.prototype,"callout",void 0),e$2([y$7({type:h$4,json:{type:j$2,origins:{"web-scene":{type:j$2}}}})],L.prototype,"symbolLayers",void 0),e$2([o$2("web-scene","symbolLayers")],L.prototype,"writeSymbolLayers",null),e$2([r$2({PointSymbol3D:"point-3d"},{readOnly:!0})],L.prototype,"type",void 0),L=S$2=e$2([n$d("esri.symbols.PointSymbol3D")],L);var d$2=L;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var j$1;const S$1=L$1.ofType({base:null,key:"type",typeMap:{extrude:c$e,fill:h$7,icon:S$3,line:y$4,object:l$a,text:y$3,water:n$7}}),d$1=L$1.ofType({base:null,key:"type",typeMap:{extrude:c$e,fill:h$7,icon:S$3,line:y$4,object:l$a,water:n$7}});let g$1=j$1=class extends A{constructor(e){super(e),this.symbolLayers=new S$1,this.type="polygon-3d";}writeSymbolLayers(e,o,t,s){const y=e.filter((e=>"text"!==e.type));if(s&&s.messages&&y.length<e.length){const o=e.find((e=>"text"===e.type));s.messages.push(new s$4("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:o}));}o[t]=y.map((e=>e.write({},s))).toArray();}clone(){return new j$1({styleOrigin:y$8(this.styleOrigin),symbolLayers:y$8(this.symbolLayers),thumbnail:y$8(this.thumbnail)})}static fromJSON(e){const o=new j$1;if(o.read(e),2===o.symbolLayers.length&&"fill"===o.symbolLayers.getItemAt(0).type&&"line"===o.symbolLayers.getItemAt(1).type){const r=o.symbolLayers.getItemAt(0),t=o.symbolLayers.getItemAt(1);!t.enabled||e.symbolLayers&&e.symbolLayers[1]&&!1===e.symbolLayers[1].enable||(r.outline={size:t.size,color:r$4(t.material)?t.material.color:null}),o.symbolLayers.removeAt(1);}return o}static fromSimpleFillSymbol(e){return new j$1({symbolLayers:[h$7.fromSimpleFillSymbol(e)]})}};e$2([y$7({type:S$1,json:{type:d$1}})],g$1.prototype,"symbolLayers",void 0),e$2([o$2("web-scene","symbolLayers")],g$1.prototype,"writeSymbolLayers",null),e$2([r$2({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],g$1.prototype,"type",void 0),g$1=j$1=e$2([n$d("esri.symbols.PolygonSymbol3D")],g$1);var h$3=g$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var c$3;const n$1=new o$5({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let m$1=c$3=class extends p$b{constructor(...o){super(...o),this.color=new o$3([0,0,0,.25]),this.outline=new m$9,this.type="simple-fill",this.style="solid";}normalizeCtorArgs(o,r,s){if(o&&"string"!=typeof o)return o;const e={};return o&&(e.style=o),r&&(e.outline=r),s&&(e.color=s),e}clone(){return new c$3({color:y$8(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return `${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};e$2([y$7()],m$1.prototype,"color",void 0),e$2([y$7()],m$1.prototype,"outline",void 0),e$2([r$2({esriSFS:"simple-fill"},{readOnly:!0})],m$1.prototype,"type",void 0),e$2([y$7({type:n$1.apiValues,json:{read:n$1.read,write:n$1.write}})],m$1.prototype,"style",void 0),m$1=c$3=e$2([n$d("esri.symbols.SimpleFillSymbol")],m$1);var S=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var h$2;const m=new o$5({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});let u$1=h$2=class extends i{constructor(...r){super(...r),this.color=new o$3([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new m$9;}normalizeCtorArgs(r,e,o,t){if(r&&"string"!=typeof r)return r;const i={};return r&&(i.style=r),null!=e&&(i.size=o$4(e)),o&&(i.outline=o),t&&(i.color=t),i}writeColor(r,e){r&&"x"!==this.style&&"cross"!==this.style&&(e.color=r.toJSON()),null===r&&(e.color=null);}set path(r){this.style="path",this._set("path",r);}clone(){return new h$2({angle:this.angle,color:y$8(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){var r;return `${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${null==(r=this.outline)?void 0:r.hash()}`}};e$2([y$7()],u$1.prototype,"color",void 0),e$2([o$2("color")],u$1.prototype,"writeColor",null),e$2([r$2({esriSMS:"simple-marker"},{readOnly:!0})],u$1.prototype,"type",void 0),e$2([y$7()],u$1.prototype,"size",void 0),e$2([y$7({type:m.apiValues,json:{read:m.read,write:m.write}})],u$1.prototype,"style",void 0),e$2([y$7({type:String,json:{write:!0}})],u$1.prototype,"path",null),e$2([y$7({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":m$9}},json:{default:null,write:!0}})],u$1.prototype,"outline",void 0),u$1=h$2=e$2([n$d("esri.symbols.SimpleMarkerSymbol")],u$1);var y$1=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var d;let c$2=d=class extends a$e{constructor(...t){super(...t),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new n$a,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment=null,this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1;}normalizeCtorArgs(t,o,e){if(t&&"string"!=typeof t)return t;const i={};return t&&(i.text=t),o&&(i.font=o),e&&(i.color=e),i}writeLineWidth(t,o,e,i){i&&"string"!=typeof i?i.origin:o[e]=t;}castLineWidth(t){return o$4(t)}writeLineHeight(t,o,e,i){i&&"string"!=typeof i?i.origin:o[e]=t;}clone(){return new d({angle:this.angle,backgroundColor:y$8(this.backgroundColor),borderLineColor:y$8(this.borderLineColor),borderLineSize:this.borderLineSize,color:y$8(this.color),font:this.font&&this.font.clone(),haloColor:y$8(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return `${this.backgroundColor&&this.backgroundColor.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color.hash()}.${this.font&&this.font.hash()}.${this.haloColor&&this.haloColor.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}};e$2([y$7({type:o$3,json:{write:!0}})],c$2.prototype,"backgroundColor",void 0),e$2([y$7({type:o$3,json:{write:!0}})],c$2.prototype,"borderLineColor",void 0),e$2([y$7({type:Number,json:{write:!0}})],c$2.prototype,"borderLineSize",void 0),e$2([y$7({type:n$a,json:{write:!0}})],c$2.prototype,"font",void 0),e$2([y$7({type:["left","right","center","justify"],json:{write:!0}})],c$2.prototype,"horizontalAlignment",void 0),e$2([y$7({type:Boolean,json:{write:!0}})],c$2.prototype,"kerning",void 0),e$2([y$7({type:o$3,json:{write:!0}})],c$2.prototype,"haloColor",void 0),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],c$2.prototype,"haloSize",void 0),e$2([y$7({type:Boolean,json:{write:!0}})],c$2.prototype,"rightToLeft",void 0),e$2([y$7({type:Boolean,json:{write:!0}})],c$2.prototype,"rotated",void 0),e$2([y$7({type:String,json:{write:!0}})],c$2.prototype,"text",void 0),e$2([r$2({esriTS:"text"},{readOnly:!0})],c$2.prototype,"type",void 0),e$2([y$7({type:["baseline","top","middle","bottom"],json:{write:!0}})],c$2.prototype,"verticalAlignment",void 0),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],c$2.prototype,"xoffset",void 0),e$2([y$7({type:Number,cast:o$4,json:{write:!0}})],c$2.prototype,"yoffset",void 0),e$2([y$7({type:Number,json:{read:t=>t&&-1*t,write:(t,o)=>o.angle=t&&-1*t}})],c$2.prototype,"angle",void 0),e$2([y$7({type:Number,json:{write:!0}})],c$2.prototype,"width",void 0),e$2([y$7({type:Number})],c$2.prototype,"lineWidth",void 0),e$2([o$2("lineWidth")],c$2.prototype,"writeLineWidth",null),e$2([c$j("lineWidth")],c$2.prototype,"castLineWidth",null),e$2([y$7({type:Number})],c$2.prototype,"lineHeight",void 0),e$2([o$2("lineHeight")],c$2.prototype,"writeLineHeight",null),c$2=d=e$2([n$d("esri.symbols.TextSymbol")],c$2);var y=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n;const c$1=n$f.getLogger("esri.symbols.WebStyleSymbol");let u=n=class extends a$e{constructor(t){super(t),this.styleName=null,this.portal=null,this.styleUrl=null,this.thumbnail=null,this.name=null,this.type="web-style";}read(t,o){this.portal=o?o.portal:void 0,super.read(t,o);}clone(){return new n({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}fetchSymbol(t){return this._fetchSymbol("webRef",t)}fetchCIMSymbol(t){return this._fetchSymbol("cimRef",t)}async _fetchSymbol(t,o){const e=await h$1();a$g(o);const s=e.resolveWebStyleSymbol(this,{portal:this.portal},t,o);return s.catch((t=>{c$1.error("#fetchSymbol()","Failed to create symbol from style",t);})),s}};function h$1(){return import('./styleUtils-8b593a34.js').then(function (n) { return n.s; })}e$2([y$7({json:{write:!1}})],u.prototype,"color",void 0),e$2([y$7({type:String,json:{write:!0}})],u.prototype,"styleName",void 0),e$2([y$7({type:G$1,json:{write:!1}})],u.prototype,"portal",void 0),e$2([y$7({type:String,json:{read:m$a,write:p$i}})],u.prototype,"styleUrl",void 0),e$2([y$7({type:c$8,json:{read:!1}})],u.prototype,"thumbnail",void 0),e$2([y$7({type:String,json:{write:!0}})],u.prototype,"name",void 0),e$2([r$2({styleSymbolReference:"web-style"},{readOnly:!0})],u.prototype,"type",void 0),u=n=e$2([n$d("esri.symbols.WebStyleSymbol")],u);var b=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function x(e){if(!e)return !1;switch(e.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":case"cim":return !0;default:return !1}}function c(e){if(!e)return !1;switch(e.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return !0;default:return !1}}const j={base:a$e,key:"type",typeMap:{"simple-fill":S,"picture-fill":a$1,"picture-marker":n$2,"simple-line":m$9,"simple-marker":y$1,text:y,"label-3d":b$2,"line-3d":b$1,"mesh-3d":a$2,"point-3d":d$2,"polygon-3d":h$3,"web-style":b,cim:d$9},errorContext:"symbol"},D={base:a$e,key:"type",typeMap:{"picture-marker":n$2,"simple-marker":y$1,text:y,"web-style":b,cim:d$9},errorContext:"symbol"},k=u$9({types:j}),M={base:a$e,key:"type",typeMap:{"simple-fill":S,"picture-fill":a$1,"picture-marker":n$2,"simple-line":m$9,"simple-marker":y$1,text:y,"line-3d":b$1,"mesh-3d":a$2,"point-3d":d$2,"polygon-3d":h$3,"web-style":b,cim:d$9},errorContext:"symbol"},P={base:a$e,key:"type",typeMap:{text:y,"label-3d":b$2},errorContext:"symbol"},h={base:a$e,key:"type",typeMap:{"line-3d":b$1,"mesh-3d":a$2,"point-3d":d$2,"polygon-3d":h$3,"web-style":b},errorContext:"symbol"},F={base:a$e,key:"type",typeMap:{"label-3d":b$2},errorContext:"symbol"},g=k$2(j);

export { A, c$b as B, t$5 as C, D, F, M, P, S, h$3 as a, b, c, d$9 as d, c$8 as e, a$5 as f, g, h, y as i, j, d$2 as k, b$1 as l, b$2 as m, n$2 as n, k as o, m$7 as p, c$h as q, d$5 as r, o as s, j$5 as t, S$3 as u, y$3 as v, a$2 as w, x, y$1 as y, h$7 as z };
