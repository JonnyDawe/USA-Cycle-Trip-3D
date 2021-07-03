import { L } from './Loadable-d16b3d7d.js';
import { s } from './promiseUtils-2ff2b194.js';
import { d as d$2 } from './jsonUtils-f0a19240.js';
import { I as I$1, d } from './SpatialReference-843b1520.js';
import { X, e as ee, K, W, J } from './featureConversionUtils-3ad98dca.js';
import { u as u$1 } from './FeatureStore-423b44b6.js';
import { y, p } from './projectionSupport-87ac6706.js';
import { H } from './QueryEngine-fd0ee569.js';
import { I, T, k } from './geojson-d55288bb.js';
import { u, i as i$1, n } from './clientSideDefaults-b49b5cc7.js';
import { y as y$1, d as d$1, c, u as u$2, h } from './sourceUtils-020e4cd5.js';
import { e } from './FieldsIndex-f71b4f3d.js';
import { i } from './fieldType-6799091f.js';
import { k as j } from './fieldUtils-22be41cd.js';
import './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import './Polyline-ccd8fb47.js';
import './JSONSupport-9346590f.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './jsonMap-e142bd84.js';
import './OptimizedFeature-ccef5b1d.js';
import './OptimizedFeatureSet-be12a9b8.js';
import './aaBoundingBox-c0155c39.js';
import './aaBoundingRect-68336c41.js';
import './PooledRBush-0ff19c83.js';
import './quickselect-f4197880.js';
import './optimizedFeatureQueryEngineAdapter-ccc9dcb9.js';
import './centroid-80fbdb27.js';
import './projection-c73dd3c4.js';
import './mathUtils-a477cc74.js';
import './unitUtils-b17203be.js';
import './mat4-8eb66d33.js';
import './assets-73c8998f.js';
import './json-1b357c88.js';
import './MemCache-b33cfc4b.js';
import './normalizeUtils-5edbbb73.js';
import './ItemCache-2457b327.js';
import './WhereClause-55dc94e0.js';
import './QueryEngineCapabilities-377cef5c.js';
import './quantizationUtils-28a0adf6.js';
import './utils-7cd87224.js';
import './spatialQuerySupport-1a961a68.js';
import './PromiseQueue-edaf4a34.js';
import './basemapUtils-9ae6960d.js';
import './Basemap-ad33b4b0.js';
import './Collection-32506e74.js';
import './collectionUtils-a13e45d8.js';
import './loadAll-37e49bde.js';
import './asyncUtils-015dfd6e.js';
import './Portal-ff63481f.js';
import './intl-21ab9759.js';
import './locale-b874fc68.js';
import './PortalItem-4692b2a9.js';
import './writeUtils-7e5aaca1.js';
import './defaultsJSON-0467bd38.js';
import './enumeration-7d0c165d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const R={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class D{constructor(){this._queryEngine=null;}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null;}async load(i$2){const a=[];await this._checkProjection(i$2.spatialReference);let l=null;if(i$2.url){l=(await L(i$2.url,{responseType:"json"})).data,await I(l);}const d$1=T(l,{geometryType:i$2.geometryType}),y$1=i$2.fields||d$1.fields||[],b=null!=i$2.hasZ?i$2.hasZ:d$1.hasZ,j$1=d$1.geometryType,_=i$2.objectIdField||("number"===d$1.objectIdFieldType?d$1.objectIdFieldName:"OBJECTID")||"OBJECTID",E=i$2.spatialReference||I$1;let T$1=i$2.timeInfo;if(!j$1)throw new s("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if("string"===d$1.objectIdFieldType&&a.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),y$1===d$1.fields&&d$1.unknownFields.length>0&&a.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:d$1.unknownFields}}),_){let e=null;y$1.some((t=>t.name===_&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):y$1.unshift({alias:_,name:_,type:"esriFieldTypeOID",editable:!1,nullable:!1});}for(const e of y$1){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new s("geojson-layer:invalid-field-name","field name is missing",{field:e});if(e.name===_&&(e.type="esriFieldTypeOID"),-1===i.jsonValues.indexOf(e.type))throw new s("geojson-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const D={};this._requiredFields=[];for(const e of y$1)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=j(e);e.nullable||void 0!==t?D[e.name]=t:this._requiredFields.push(e);}if(this._fieldsIndex=new e(y$1),T$1){if(T$1.startTimeField){const e=this._fieldsIndex.get(T$1.startTimeField);e?(T$1.startTimeField=e.name,e.type="esriFieldTypeDate"):T$1.startTimeField=null;}if(T$1.endTimeField){const e=this._fieldsIndex.get(T$1.endTimeField);e?(T$1.endTimeField=e.name,e.type="esriFieldTypeDate"):T$1.endTimeField=null;}if(T$1.trackIdField){const e=this._fieldsIndex.get(T$1.trackIdField);e?T$1.trackIdField=e.name:(T$1.trackIdField=null,a.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T$1}}));}T$1.startTimeField||T$1.endTimeField||(a.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:T$1}}),T$1=null);}const O={warnings:a,featureErrors:[],layerDefinition:{...R,drawingInfo:u(j$1),templates:i$1(D),extent:null,geometryType:j$1,objectIdField:_,fields:y$1,hasZ:!!b,timeInfo:T$1}};this._queryEngine=new H({fields:y$1,geometryType:j$1,hasM:!1,hasZ:b,objectIdField:_,spatialReference:E,timeInfo:T$1,featureStore:new u$1({geometryType:j$1,hasM:!1,hasZ:b}),cacheSpatialQueries:!0}),this._createDefaultAttributes=n(D,_),this._nextObjectId=d$1.maxObjectId+1;const S=k(l,{geometryType:j$1,hasZ:b,objectIdField:"number"===d$1.objectIdFieldType?_:null});if(!d(E,I$1))for(const e of S)e.geometry&&(e.geometry=X(y(ee(e.geometry,j$1,b,!1),I$1,E)));return this._loadInitialFeatures(O,S),O}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([y$1(t,i),p(e.adds,t),p(e.updates,t)]),this._applyEdits(e)}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:i,objectIdField:s}=this._queryEngine,r=[];for(const n of t){const t=this._createDefaultAttributes(),i=d$1(this._fieldsIndex,t,n.attributes,this._requiredFields,!0,e.warnings);i?e.featureErrors.push(i):(this._assignObjectId(t,n.attributes,!0),n.attributes=t,n.objectId=t[s],r.push(n));}if(i.addMany(r),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i];}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(c(e));this._queryEngine.featureStore.removeManyById(s);}return {fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:r,hasM:n,hasZ:o,objectIdField:l,spatialReference:d,featureStore:u}=this._queryEngine,y$1=[];for(const a of t){if(a.geometry&&r!==d$2(a.geometry)){s.push(u$2("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=d$1(this._fieldsIndex,t,a.attributes,this._requiredFields);if(n)s.push(n);else {if(this._assignObjectId(t,a.attributes),a.attributes=t,null!=a.uid){const t=a.attributes[l];e.uidToObjectId[a.uid]=t;}a.geometry&&(a.geometry=y(h(a.geometry,d),a.geometry.spatialReference,d)),y$1.push(a),s.push(c(a.attributes[l]));}}u.addMany(K([],y$1,r,o,n,l));}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:r,hasZ:n,objectIdField:o,spatialReference:a,featureStore:u}=this._queryEngine;for(const y$1 of t){const{attributes:t,geometry:f}=y$1,m=t&&t[o];if(null==m){e.push(u$2(`Identifier field ${o} missing`));continue}if(!u.has(m)){e.push(u$2(`Feature with object id ${m} missing`));continue}const c$1=W(u.getFeature(m),s,n,r);if(f){if(s!==d$2(f)){e.push(u$2("Incorrect geometry type."));continue}c$1.geometry=y(h(f,a),f.spatialReference,a);}if(t){const i=d$1(this._fieldsIndex,c$1.attributes,t,this._requiredFields);if(i){e.push(i);continue}}u.add(J(c$1,s,n,r,o)),e.push(c(m));}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++;}async _checkProjection(e){try{await p(I$1,e);}catch{throw new s("geojson-layer","Projection not supported")}}}

export default D;
