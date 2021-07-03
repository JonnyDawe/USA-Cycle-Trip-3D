import { a, s, G, g } from './promiseUtils-2ff2b194.js';
import { f as e$1, n } from './Message-70b34921.js';
import { d, I as I$1 } from './SpatialReference-843b1520.js';
import { X, e as ee } from './featureConversionUtils-3ad98dca.js';
import { u } from './FeatureStore-423b44b6.js';
import { y, p } from './projectionSupport-87ac6706.js';
import { H } from './QueryEngine-fd0ee569.js';
import { I, k } from './geojson-d55288bb.js';
import { d as d$1 } from './sourceUtils-020e4cd5.js';
import { K } from './wfsUtils-5b8dfefb.js';
import { e } from './FieldsIndex-f71b4f3d.js';
import './JSONSupport-9346590f.js';
import './subclass-fe5fcf78.js';
import './jsonUtils-f0a19240.js';
import './Polyline-ccd8fb47.js';
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
import './fieldUtils-22be41cd.js';
import './enumeration-7d0c165d.js';
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
import './_rollupPluginBabelHelpers-58331421.js';
import './Field-728fb193.js';
import './fieldType-6799091f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class w{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,r=await K(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await I(r),a(e);const a$1=k(r,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!d(this._queryEngine.spatialReference,I$1))for(const s of a$1)s.geometry&&(s.geometry=X(y(ee(s.geometry,this._queryEngine.geometryType,!1,!1),I$1,this._queryEngine.spatialReference)));let i=1;for(const s of a$1){const e={};d$1(this._fieldsIndex,e,s.attributes,null,!0),s.attributes=e,null==s.attributes[t]&&(s.objectId=s.attributes[t]=i++);}return a$1};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e$2,t){const{getFeatureUrl:a$1,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u$1,featureType:p,objectIdField:y,customParameters:l}=e$2;this._featureType=p,this._customParameters=l,this._getFeatureUrl=a$1,this._getFeatureOutputFormat=i,this._fieldsIndex=new e(o),await this._checkProjection(n),a(t),this._queryEngine=new H({fields:o,geometryType:u$1,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new u({geometryType:u$1,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(e$1(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}setCustomParameters(e){this._customParameters=e;}async refresh(){var r;return null==(r=this._snapshotTask)||r.abort(),this._snapshotTask=G(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),g(r)||n.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await p(I$1,t);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:t})}}}

export default w;
