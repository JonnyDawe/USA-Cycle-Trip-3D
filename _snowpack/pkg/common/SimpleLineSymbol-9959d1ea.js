import { e as e$1, a as a$2, o as o$3 } from './JSONSupport-9346590f.js';
import { o as o$1 } from './jsonMap-e142bd84.js';
import { y as y$2 } from './Message-70b34921.js';
import { y as y$1, n as n$2 } from './subclass-fe5fcf78.js';
import { r as r$1 } from './enumeration-7d0c165d.js';
import { o as o$2 } from './Color-ae84a22a.js';
import { e as e$2 } from './reader-fa0f173d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p$2=new o$1({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let c$2=0,m$2=class extends a$2{constructor(r){super(r),this.id="sym"+c$2++,this.type=null;}set color(r){this._set("color",r);}readColor(r){return r&&null!=r[0]?[r[0],r[1],r[2],r[3]/255]:r}async collectRequiredFields(r,e){}hash(){return JSON.stringify(this.toJSON())}clone(){}};e$1([y$1({type:p$2.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:p$2.write}}})],m$2.prototype,"type",void 0),e$1([y$1({type:o$2,value:new o$2([0,0,0,1]),json:{write:{allowNull:!0}}})],m$2.prototype,"color",null),e$1([e$2("color")],m$2.prototype,"readColor",null),m$2=e$1([n$2("esri.symbols.Symbol")],m$2);var a$1=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n$1=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,t="screenUtils.toPt: input not recognized!",r=96;function u(n){return n?n/72*r:0}function e(n){return n?72*n/r:0}function o(r){if("string"==typeof r){if(n$1.test(r)){const t=r.match(n$1),u=Number(t[1]),o=t[3]&&t[3].toLowerCase(),c="-"===r.charAt(0),i="px"===o?e(u):u;return c?-i:i}return console.warn(t),null}return r}function c$1(n=0,t=0){return {x:n,y:t}}function i$1(n=0,t=0){return [n,t]}function s(n=0,t=0){return y([n,t])}function x(n=0,t=0,r=0){return p$1([n,t,r])}function y(n){return n}function p$1(n){return n}function d$1(n,t){return t?(t[0]=n.x,t[1]=n.y,t.length>2&&(t[2]=0),t):[n.x,n.y]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let i=class extends a$1{constructor(r){super(r),this.type="simple-line",this.width=.75;}hash(){return `${this.type}.${this.width}`}};e$1([r$1({esriSLS:"simple-line"},{readOnly:!0})],i.prototype,"type",void 0),e$1([y$1({type:Number,cast:o,json:{write:!0}})],i.prototype,"width",void 0),i=e$1([n$2("esri.symbols.LineSymbol")],i);var c=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var a;let n=a=class extends a$2{constructor(r){super(r),this.placement="begin-end",this.type="line-marker",this.style="arrow";}writeStyle(r,o,e,t){"web-map"===(null==t?void 0:t.origin)?o[e]="arrow":o[e]=r;}set color(r){this._set("color",r);}readColor(r){return r&&null!=r[0]?[r[0],r[1],r[2],r[3]/255]:r}writeColor(r,o,e,t){"web-map"===(null==t?void 0:t.origin)||(o[e]=r);}clone(){return new a({color:y$2(this.color),placement:this.placement,style:this.style})}hash(){var r;return `${this.placement}.${null==(r=this.color)?void 0:r.hash()}.${this.style}`}};e$1([y$1({type:["begin","end","begin-end"],json:{write:!0}})],n.prototype,"placement",void 0),e$1([r$1({"line-marker":"line-marker"},{readOnly:!0}),y$1({json:{origins:{"web-map":{write:!1}}}})],n.prototype,"type",void 0),e$1([y$1({type:["arrow","circle","square","diamond","cross","x"]})],n.prototype,"style",void 0),e$1([o$3("style")],n.prototype,"writeStyle",null),e$1([y$1({type:o$2,value:null,json:{write:{allowNull:!0}}})],n.prototype,"color",null),e$1([e$2("color")],n.prototype,"readColor",null),e$1([o$3("color")],n.prototype,"writeColor",null),n=a=e$1([n$2("esri.symbols.LineSymbolMarker")],n);var m$1=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p;const h=new o$1({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let d=p=class extends c{constructor(...r){super(...r),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2;}normalizeCtorArgs(r,o$1,e,s,i,l){if(r&&"string"!=typeof r)return r;const n={};return null!=r&&(n.style=r),null!=o$1&&(n.color=o$1),null!=e&&(n.width=o(e)),null!=s&&(n.cap=s),null!=i&&(n.join=i),null!=l&&(n.miterLimit=o(l)),n}clone(){var r;return new p({color:y$2(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null==(r=this.marker)?void 0:r.clone()})}hash(){var r,o;return `${super.hash()}.${null==(r=this.color)?void 0:r.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${null==(o=this.marker)?void 0:o.hash()}`}};e$1([r$1({esriSLS:"simple-line"},{readOnly:!0})],d.prototype,"type",void 0),e$1([y$1({type:h.apiValues,json:{read:h.read,write:h.write}})],d.prototype,"style",void 0),e$1([y$1({type:["butt","round","square"],json:{write:{overridePolicy:(r,o,e)=>({enabled:"round"!==r&&(null==e||null==e.origin)})}}})],d.prototype,"cap",void 0),e$1([y$1({type:["miter","round","bevel"],json:{write:{overridePolicy:(r,o,e)=>({enabled:"round"!==r&&(null==e||null==e.origin)})}}})],d.prototype,"join",void 0),e$1([y$1({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":m$1}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],d.prototype,"marker",void 0),e$1([y$1({type:Number,json:{read:!1,write:!1}})],d.prototype,"miterLimit",void 0),d=p=e$1([n$2("esri.symbols.SimpleLineSymbol")],d);var m=d;

export { a$1 as a, c$1 as c, d$1 as d, e, i$1 as i, m, o, p$1 as p, s, u, x };
