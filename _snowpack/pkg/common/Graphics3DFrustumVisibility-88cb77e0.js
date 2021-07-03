import { e, p as p$1 } from './JSONSupport-9346590f.js';
import { u as u$1 } from './Handles-af859b7b.js';
import { d } from './watchUtils-06a91cc9.js';
import { y, n } from './subclass-fe5fcf78.js';
import './Message-70b34921.js';
import { p as p$3 } from './unitUtils-b17203be.js';
import { a2 as E, p as p$2 } from './SceneView-f849f26b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const h=1.2;let u=class extends p$1{constructor(){super(...arguments),this.suspended=!1,this.extent=null,this.extentIntersectionDirty=!0,this._isVisibleBelowSurface=!1,this.handles=new u$1,this.layerView=null,this.updating=!0;}setup(e){this.layerView=e,this.extentIntersection=new E({renderCoordsHelper:e.view.renderCoordsHelper});const t=e.view,s=t.basemapTerrain,r=t.resourceController.scheduler;this.handles.add([t.on("resize",(()=>this.viewChange())),t.state.watch("camera",(()=>this.viewChange()),!0),r.registerTask(p$2.FRUSTUM_VISIBILITY,this),s.on("elevation-bounds-change",(()=>this.elevationBoundsChange()))]),"local"===t.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([d(s,["opacity","wireframe"],(()=>this.updateIsVisibleBelowSurface())),d(t,"map.ground.navigationConstraint.type",(()=>this.updateIsVisibleBelowSurface()))]);}destroy(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null);}_setDirty(){this.updating||this._set("updating",!0);}setExtent(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty();}viewChange(){this._setDirty();}elevationBoundsChange(){this._setDirty(),this.extentIntersectionDirty=!0;}set isVisibleBelowSurface(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0;}updateIsVisibleBelowSurface(){const e=this.layerView.view,t=e.basemapTerrain,s="local"===e.viewingMode,i=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=s||!t.opaque||i;}updateExtentIntersection(){if(!this.extentIntersectionDirty)return;this.extentIntersectionDirty=!1;const e=this.layerView.view;let t;if(this._isVisibleBelowSurface)t=-.3*p$3(e.spatialReference).radius;else {const{min:s,max:i}=e.basemapTerrain.elevationBounds;t=s-Math.max(1,(i-s)*(h-1));}this.extentIntersection.update(this.extent,e.spatialReference,t);}get running(){return this.updating}runTask(){if(this._set("updating",!1),!this.extent)return void this._set("suspended",!1);this.updateExtentIntersection();const e=this.layerView.view.frustum,t=p$3(this.layerView.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t));}};e([y({readOnly:!0})],u.prototype,"suspended",void 0),e([y({readOnly:!0})],u.prototype,"updating",void 0),u=e([n("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],u);var p=u;

export { p };
