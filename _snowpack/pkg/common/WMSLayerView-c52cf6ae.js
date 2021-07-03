import { e } from './JSONSupport-9346590f.js';
import { s } from './promiseUtils-2ff2b194.js';
import { y, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { u } from './OperationalLayer-a01538e1.js';
import { l } from './ExportWMSImageParameters-e9aa4c34.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a=a=>{let i=class extends a{initialize(){this.exportImageParameters=new l({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s$1;if(!(p&&a&&i))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});const u=t.fetchFeatureInfo(p,a,i,m,n);return Promise.resolve(u?[u]:[])}};return e([y()],i.prototype,"exportImageParameters",void 0),e([y({readOnly:!0})],i.prototype,"exportImageVersion",null),e([y()],i.prototype,"layer",void 0),e([y(u)],i.prototype,"timeExtent",void 0),i=e([n("esri.layers.mixins.WMSLayerView")],i),i};

export { a };
