import { e, o as o$1, a } from './JSONSupport-9346590f.js';
import { e as i } from './Loadable-d16b3d7d.js';
import { y as y$2 } from './TimeExtent-02acfb1c.js';
import { o } from './jsonMap-e142bd84.js';
import { y as y$3 } from './Message-70b34921.js';
import { y as y$1, n } from './subclass-fe5fcf78.js';
import { p } from './jsonUtils-f0a19240.js';
import { b } from './Query-619f76b0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var d;const m=new o({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=new o({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let h=d=class extends a{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.hiddenIds=new Set,this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null,this.enabled=!1;}writeWhere(e,t){t.where=e||"1=1";}enable(){this._set("enabled",!0);}createQuery(e={}){const{where:t,geometry:r,spatialRelationship:i,timeExtent:s,objectIds:n,units:a,distance:p}=this;return new b({geometry:y$3(r),objectIds:y$3(n),spatialRelationship:i,timeExtent:y$3(s),where:t,units:a,distance:p,...e})}clone(){const{where:e,geometry:t,spatialRelationship:r,hiddenIds:i,timeExtent:s,objectIds:n,units:a,distance:p}=this,l=new Set;return i.forEach((e=>l.add(e))),new d({geometry:y$3(t),hiddenIds:l,objectIds:y$3(n),spatialRelationship:r,timeExtent:y$3(s),where:e,units:a,distance:p})}};e([y$1({type:String})],h.prototype,"where",void 0),e([o$1("where")],h.prototype,"writeWhere",null),e([y$1({types:i,json:{read:p,write:!0}})],h.prototype,"geometry",void 0),e([y$1({type:String,json:{read:{source:"spatialRel",reader:m.read},write:{target:"spatialRel",writer:m.write}}})],h.prototype,"spatialRelationship",void 0),e([y$1({json:{write:(e,t,r)=>t[r]=Array.from(e),read:e=>new Set(e)}})],h.prototype,"hiddenIds",void 0),e([y$1({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],h.prototype,"distance",void 0),e([y$1({type:[Number],json:{write:!0}})],h.prototype,"objectIds",void 0),e([y$1({type:String,json:{read:u.read,write:{writer:u.write,overridePolicy(e){return {enabled:e&&this.distance>0}}}}})],h.prototype,"units",void 0),e([y$1({type:y$2,json:{write:!0}})],h.prototype,"timeExtent",void 0),e([y$1({readOnly:!0})],h.prototype,"enabled",void 0),h=d=e([n("esri.views.layers.support.FeatureFilter")],h);var y=h;

export { y };
