import { s } from './promiseUtils-2ff2b194.js';
import { d, l } from './jsonUtils-f0a19240.js';
import { I } from './SpatialReference-843b1520.js';
import { K, W, J } from './featureConversionUtils-3ad98dca.js';
import { t, n as n$1 } from './objectIdUtils-6e93b705.js';
import { u as u$1 } from './FeatureStore-423b44b6.js';
import { p, y as y$1 } from './projectionSupport-87ac6706.js';
import { H } from './QueryEngine-fd0ee569.js';
import { n, u, i as i$1 } from './clientSideDefaults-b49b5cc7.js';
import { y, u as u$2, d as d$1, c, h } from './sourceUtils-020e4cd5.js';
import { e } from './FieldsIndex-f71b4f3d.js';
import { i } from './fieldType-6799091f.js';
import { k as j } from './fieldUtils-22be41cd.js';
import './Message-70b34921.js';
import './Polyline-ccd8fb47.js';
import './JSONSupport-9346590f.js';
import './subclass-fe5fcf78.js';
import './Point-ee7951c3.js';
import './reader-fa0f173d.js';
import './OptimizedFeature-ccef5b1d.js';
import './OptimizedFeatureSet-be12a9b8.js';
import './Loadable-d16b3d7d.js';
import './jsonMap-e142bd84.js';
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
const x=I,T={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:I},q={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function R(e){return l(e)?null!=e.z:!!e.hasZ}function D(e){return l(e)?null!=e.m:!!e.hasM}class O{constructor(){this._queryEngine=null,this._nextObjectId=null;}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null;}async load(t$1){const i$2=[],{features:s$1}=t$1,r=this._inferLayerProperties(s$1,t$1.fields),n$2=t$1.fields||[],a=null!=t$1.hasM?t$1.hasM:r.hasM,p$1=null!=t$1.hasZ?t$1.hasZ:r.hasZ,h=!t$1.spatialReference&&!r.spatialReference,g=h?x:t$1.spatialReference||r.spatialReference,I=h?T:null,b=t$1.geometryType||r.geometryType,F=!b;let R=t$1.objectIdField||r.objectIdField,D=t$1.timeInfo;if(!F&&(h&&i$2.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!b))throw new s("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!R)throw new s("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&R!==r.objectIdField&&(i$2.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${R}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),R=r.objectIdField),R&&!r.objectIdField){let e=null;n$2.some((t=>t.name===R&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):n$2.unshift({alias:R,name:R,type:"esriFieldTypeOID",editable:!1,nullable:!1});}for(const l of n$2){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new s("feature-layer:invalid-field-name","field name is missing",{field:l});if(l.name===R&&(l.type="esriFieldTypeOID"),-1===i.jsonValues.indexOf(l.type))throw new s("feature-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l})}const O={};this._requiredFields=[];for(const e of n$2)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=j(e);e.nullable||void 0!==t?O[e.name]=t:this._requiredFields.push(e);}if(this._fieldsIndex=new e(n$2),this._createDefaultAttributes=n(O,R),D){if(D.startTimeField){const e=this._fieldsIndex.get(D.startTimeField);e?(D.startTimeField=e.name,e.type="esriFieldTypeDate"):D.startTimeField=null;}if(D.endTimeField){const e=this._fieldsIndex.get(D.endTimeField);e?(D.endTimeField=e.name,e.type="esriFieldTypeDate"):D.endTimeField=null;}if(D.trackIdField){const e=this._fieldsIndex.get(D.trackIdField);e?D.trackIdField=e.name:(D.trackIdField=null,i$2.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:D}}));}D.startTimeField||D.endTimeField||(i$2.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:D}}),D=null);}const w={warnings:i$2,featureErrors:[],layerDefinition:{...q,drawingInfo:u(b),templates:i$1(O),extent:I,geometryType:b,objectIdField:R,fields:n$2,hasZ:!!p$1,hasM:!!a,timeInfo:D},assignedObjectIds:{}};if(this._queryEngine=new H({fields:n$2,geometryType:b,hasM:a,hasZ:p$1,objectIdField:R,spatialReference:g,featureStore:new u$1({geometryType:b,hasM:a,hasZ:p$1}),timeInfo:D,cacheSpatialQueries:!0}),!s$1||!s$1.length)return this._nextObjectId=t,w;const S=n$1(R,s$1);return this._nextObjectId=S+1,await p(s$1,g),this._loadInitialFeatures(w,s$1)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([y(t,i),p(e.adds,t),p(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let s,r,n=null,a=null,l=null;for(const o of e){const e=o.geometry;if(e&&(n||(n=d(e)),a||(a=e.spatialReference),null==s&&(s=R(e)),null==r&&(r=D(e)),n&&a&&null!=s&&null!=r))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name);}return {geometryType:n,spatialReference:a,objectIdField:l,hasM:r,hasZ:s}}_loadInitialFeatures(e,i){const{geometryType:s,hasM:n,hasZ:a,objectIdField:l,spatialReference:o,featureStore:d$2}=this._queryEngine,u=[];for(const r of i){if(null!=r.uid&&(e.assignedObjectIds[r.uid]=-1),r.geometry&&s!==d(r.geometry)){e.featureErrors.push(u$2("Incorrect geometry type."));continue}const i=this._createDefaultAttributes(),n=d$1(this._fieldsIndex,i,r.attributes,this._requiredFields,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(i,r.attributes,!0),r.attributes=i,null!=r.uid&&(e.assignedObjectIds[r.uid]=r.attributes[l]),r.geometry&&(r.geometry=y$1(r.geometry,r.geometry.spatialReference,o)),u.push(r));}if(d$2.addMany(K([],u,s,a,n,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i];}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(c(e));this._queryEngine.featureStore.removeManyById(s);}return {fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,i){const{addResults:s}=e,{geometryType:n,hasM:a,hasZ:l,objectIdField:o,spatialReference:d$2,featureStore:u}=this._queryEngine,f=[];for(const r of i){if(r.geometry&&n!==d(r.geometry)){s.push(u$2("Incorrect geometry type."));continue}const i=this._createDefaultAttributes(),a=d$1(this._fieldsIndex,i,r.attributes,this._requiredFields);if(a)s.push(a);else {if(this._assignObjectId(i,r.attributes),r.attributes=i,null!=r.uid){const t=r.attributes[o];e.uidToObjectId[r.uid]=t;}r.geometry&&(r.geometry=y$1(h(r.geometry,d$2),r.geometry.spatialReference,d$2)),f.push(r),s.push(c(r.attributes[o]));}}u.addMany(K([],f,n,l,a,o));}_applyUpdateEdits({updateResults:e},i){const{geometryType:s,hasM:r,hasZ:l,objectIdField:o,spatialReference:d$2,featureStore:u}=this._queryEngine;for(const f of i){const{attributes:i,geometry:y}=f,c$1=i&&i[o];if(null==c$1){e.push(u$2(`Identifier field ${o} missing`));continue}if(!u.has(c$1)){e.push(u$2(`Feature with object id ${c$1} missing`));continue}const m=W(u.getFeature(c$1),s,l,r);if(y){if(s!==d(y)){e.push(u$2("Incorrect geometry type."));continue}m.geometry=y$1(h(y,d$2),y.spatialReference,d$2);}if(i){const t=d$1(this._fieldsIndex,m.attributes,i,this._requiredFields);if(t){e.push(t);continue}}u.add(J(m,s,l,r,o)),e.push(c(c$1));}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++;}}

export default O;
