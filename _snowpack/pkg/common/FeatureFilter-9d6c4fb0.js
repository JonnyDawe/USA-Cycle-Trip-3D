import { s as s$1 } from './promiseUtils-2ff2b194.js';
import { n, r } from './Message-70b34921.js';
import { i } from './aaBoundingRect-68336c41.js';
import { c } from './Polyline-ccd8fb47.js';
import { a as v, v as v$1, n as n$1 } from './spatialQuerySupport-1a961a68.js';
import { b } from './Query-619f76b0.js';
import { u as u$1 } from './FeatureStore2D-8ca68eed.js';
import './JSONSupport-9346590f.js';
import './subclass-fe5fcf78.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './SpatialReference-843b1520.js';
import './jsonUtils-f0a19240.js';
import './featureConversionUtils-3ad98dca.js';
import './OptimizedFeature-ccef5b1d.js';
import './OptimizedFeatureSet-be12a9b8.js';
import './projectionSupport-87ac6706.js';
import './projection-c73dd3c4.js';
import './mathUtils-a477cc74.js';
import './unitUtils-b17203be.js';
import './jsonMap-e142bd84.js';
import './mat4-8eb66d33.js';
import './assets-73c8998f.js';
import './Loadable-d16b3d7d.js';
import './json-1b357c88.js';
import './normalizeUtils-5edbbb73.js';
import './TimeExtent-02acfb1c.js';
import './enumeration-7d0c165d.js';
import './Field-728fb193.js';
import './fieldUtils-22be41cd.js';
import './fieldType-6799091f.js';
import './CircularArray-891e6a66.js';
import './TileStore-c9add4a8.js';
import './FeatureSetReader-bf914a8a.js';
import './centroid-80fbdb27.js';
import './diffUtils-530d997b.js';
import './Collection-32506e74.js';
import './FieldsIndex-f71b4f3d.js';
import './definitions-8237c146.js';
import './Utils-12055aa8.js';
import './Texture-454f8135.js';
import './visualVariablesUtils-d2faa315.js';
import './SimpleLineSymbol-9959d1ea.js';
import './Color-ae84a22a.js';
import './visualVariablesUtils-32ef6e0c.js';
import './quickselect-f4197880.js';
import './TileKey-86c6b8c5.js';
import './TileInfoView-a80dd3da.js';
import './Queue-a5bdb7c1.js';
import './aaBoundingBox-c0155c39.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=n.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(r,s){const n=await import('./WhereClause-55dc94e0.js');try{const o=n.WhereClause.create(r,s);if(!o.isStandardized){const r=new s$1("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(r);}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const m=n.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),_=1,u=2;class p{constructor(t){this._geometryBounds=i(),this._idToVisibility=new Map,this._serviceInfo=t;}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0);}));}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,_);}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&_),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?_|u:0);})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return b.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await v(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where;}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds;}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await v$1(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i;}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=n$1(this._serviceInfo.timeInfo,e.timeExtent,u$1);else {const i=new s$1("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.error(i);}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return !this.where||this._clause(t)}_filterById(t){return (!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return !0;const e=t.readHydratedGeometry();return !!e&&this._spatialQueryOperator(e)}_filterByTime(t){return !r(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&_||(this._idToVisibility.set(i,_),t.push(i));})),t}}

export default p;
