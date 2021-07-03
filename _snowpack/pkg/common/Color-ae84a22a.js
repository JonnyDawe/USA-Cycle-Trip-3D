import { o as o$1 } from './mathUtils-a477cc74.js';
import { r as r$1 } from './Message-70b34921.js';
import { C as a$2 } from './subclass-fe5fcf78.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,5,10]};function r(r){var l;return null!=(l=e[r.toLowerCase()])?l:null}function l(e){const l=r(e);return l?[...l]:l}function a$1(e,r,l){l<0&&++l,l>1&&--l;const a=6*l;return a<1?e+(r-e)*a:2*l<1?r:3*l<2?e+(r-e)*(2/3-l)*6:e}function n$1(e,r,l,n=1){const i=(e%360+360)%360/360,o=l<=.5?l*(r+1):l+r-l*r,t=2*l-o;return [Math.round(256*a$1(t,o,i+1/3)),Math.round(256*a$1(t,o,i)),Math.round(256*a$1(t,o,i-1/3)),n]}function i(e){const r=e.length>5,l=r?8:4,a=(1<<l)-1,n=r?1:17,i=r?9===e.length:5===e.length;let o=Number("0x"+e.substr(1));if(isNaN(o))return null;const t=[0,0,0,1];let u;return i&&(u=o&a,o>>=l,t[3]=n*u/255),u=o&a,o>>=l,t[2]=n*u,u=o&a,o>>=l,t[1]=n*u,u=o&a,o>>=l,t[0]=n*u,t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(t){return o$1(a$2(t),0,255)}function a(t,r,s){return t=Number(t),isNaN(t)?s:t<r?r:t>s?s:t}class o{constructor(t){this.r=255,this.g=255,this.b=255,this.a=1,t&&this.setColor(t);}static blendColors(t,r,s,i=new o){return i.r=Math.round(t.r+(r.r-t.r)*s),i.g=Math.round(t.g+(r.g-t.g)*s),i.b=Math.round(t.b+(r.b-t.b)*s),i.a=t.a+(r.a-t.a)*s,i._sanitize()}static fromRgb(r,s){const i=r.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(i){const r=i[2].split(/\s*,\s*/),e=i[1];if("rgb"===e&&3===r.length||"rgba"===e&&4===r.length){const t=r[0];if("%"===t.charAt(t.length-1)){const t=r.map((t=>2.56*parseFloat(t)));return 4===r.length&&(t[3]=parseFloat(r[3])),o.fromArray(t,s)}return o.fromArray(r.map((t=>parseFloat(t))),s)}if("hsl"===e&&3===r.length||"hsla"===e&&4===r.length)return o.fromArray(n$1(parseFloat(r[0]),parseFloat(r[1])/100,parseFloat(r[2])/100,parseFloat(r[3])),s)}return null}static fromHex(t,r=new o){if(4!==t.length&&7!==t.length||"#"!==t[0])return null;const s=4===t.length?4:8,i=(1<<s)-1;let e=Number("0x"+t.substr(1));return isNaN(e)?null:(["b","g","r"].forEach((t=>{const n=e&i;e>>=s,r[t]=4===s?17*n:n;})),r.a=1,r)}static fromArray(t,r=new o){return r._set(Number(t[0]),Number(t[1]),Number(t[2]),Number(t[3])),isNaN(r.a)&&(r.a=1),r._sanitize()}static fromString(t,s){const i=r(t);return i&&o.fromArray(i,s)||o.fromRgb(t,s)||o.fromHex(t,s)}static fromJSON(t){return t&&new o([t[0],t[1],t[2],t[3]/255])}static toUnitRGB(t){return r$1(t)?[t.r/255,t.g/255,t.b/255]:null}static toUnitRGBA(t){return r$1(t)?[t.r/255,t.g/255,t.b/255,null!=t.a?t.a:1]:null}get isBright(){return .299*this.r+.587*this.g+.114*this.b>=127}setColor(t){if("string"==typeof t)o.fromString(t,this);else if(Array.isArray(t))o.fromArray(t,this);else {var r,s,i,e;this._set(null!=(r=t.r)?r:0,null!=(s=t.g)?s:0,null!=(i=t.b)?i:0,null!=(e=t.a)?e:1),t instanceof o||this._sanitize();}return this}toRgb(){return [this.r,this.g,this.b]}toRgba(){return [this.r,this.g,this.b,this.a]}toHex(){const t=this.r.toString(16),r=this.g.toString(16),s=this.b.toString(16);return `#${t.length<2?"0"+t:t}${r.length<2?"0"+r:r}${s.length<2?"0"+s:s}`}toCss(t=!1){const r=this.r+", "+this.g+", "+this.b;return t?`rgba(${r}, ${this.a})`:`rgb(${r})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(t=0){const r=n(this.r),s=n(this.g),i=n(this.b);return 0===t||1!==this.a?[r,s,i,n(255*this.a)]:[r,s,i]}clone(){return new o(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}_sanitize(){return this.r=Math.round(a(this.r,0,255)),this.g=Math.round(a(this.g,0,255)),this.b=Math.round(a(this.b,0,255)),this.a=a(this.a,0,1),this}_set(t,r,s,i){this.r=t,this.g=r,this.b=s,this.a=i;}}o.prototype.declaredClass="esri.Color";

export { i, l, n$1 as n, o, r };
