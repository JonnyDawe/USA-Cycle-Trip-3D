import { e, a as a$1, o as o$1 } from './JSONSupport-9346590f.js';
import { y, n, N } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { o } from './Color-ae84a22a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s;let p=s=class extends a$1{constructor(){super(...arguments),this.title=null;}clone(){return new s({title:this.title})}};e([y({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=e([n("esri.renderers.support.LegendOptions")],p);var c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var c;let i=c=class extends a$1{constructor(o){super(o),this.color=null,this.label=null,this.value=null;}writeValue(o,r,e){r[e]=null==o?0:o;}clone(){return new c({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};e([y({type:o,json:{type:[N],write:!0}})],i.prototype,"color",void 0),e([y({type:String,json:{write:!0}})],i.prototype,"label",void 0),e([y({type:Number,json:{write:{allowNull:!0}}})],i.prototype,"value",void 0),e([o$1("value")],i.prototype,"writeValue",null),i=c=e([n("esri.renderers.visualVariables.support.ColorStop")],i);var a=i;

export { a, c$1 as c };
