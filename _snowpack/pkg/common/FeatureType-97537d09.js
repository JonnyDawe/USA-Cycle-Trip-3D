import { e, o as o$1, a as a$1 } from './JSONSupport-9346590f.js';
import { i as p, y as y$1 } from './Message-70b34921.js';
import { y, n as n$1 } from './subclass-fe5fcf78.js';
import { e as e$1 } from './reader-fa0f173d.js';
import { b as c, i, e as i$1 } from './fieldUtils-22be41cd.js';
import { o } from './jsonMap-e142bd84.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a=new o({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let n=class extends a$1{constructor(o){super(o),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null;}writeDrawingTool(o,r){r.drawingTool=a.toJSON(o);}writePrototype(o,r){r.prototype=p(y$1(o),!0);}writeThumbnail(o,r){r.thumbnail=p(y$1(o));}};e([y({json:{write:!0}})],n.prototype,"name",void 0),e([y({json:{write:!0}})],n.prototype,"description",void 0),e([y({json:{read:a.read,write:a.write}})],n.prototype,"drawingTool",void 0),e([o$1("drawingTool")],n.prototype,"writeDrawingTool",null),e([y({json:{write:!0}})],n.prototype,"prototype",void 0),e([o$1("prototype")],n.prototype,"writePrototype",null),e([y({json:{write:!0}})],n.prototype,"thumbnail",void 0),e([o$1("thumbnail")],n.prototype,"writeThumbnail",null),n=e([n$1("esri.layers.support.FeatureTemplate")],n);var u=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let l=class extends a$1{constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null;}readDomains(o){const r={};for(const e in o)if(o.hasOwnProperty(e)){const t=o[e];switch(t.type){case"range":r[e]=i$1.fromJSON(t);break;case"codedValue":r[e]=i.fromJSON(t);break;case"inherited":r[e]=c.fromJSON(t);}}return r}writeDomains(o,r){const t={};for(const e in o)o.hasOwnProperty(e)&&(t[e]=o[e]&&o[e].toJSON());p(t),r.domains=t;}readTemplates(o){return o&&o.map((o=>new u(o)))}writeTemplates(o,r){r.templates=o&&o.map((o=>o.toJSON()));}};e([y({json:{write:!0}})],l.prototype,"id",void 0),e([y({json:{write:!0}})],l.prototype,"name",void 0),e([y({json:{write:!0}})],l.prototype,"domains",void 0),e([e$1("domains")],l.prototype,"readDomains",null),e([o$1("domains")],l.prototype,"writeDomains",null),e([y({json:{write:!0}})],l.prototype,"templates",void 0),e([e$1("templates")],l.prototype,"readTemplates",null),e([o$1("templates")],l.prototype,"writeTemplates",null),l=e([n$1("esri.layers.support.FeatureType")],l);var d=l;

export { d, u };
