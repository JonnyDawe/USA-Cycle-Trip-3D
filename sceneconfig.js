import Map from "./_snowpack/pkg/@arcgis/core/Map.js";
import BaseElevationLayer from "./_snowpack/pkg/@arcgis/core/layers/BaseElevationLayer.js";
import ElevationLayer from "./_snowpack/pkg/@arcgis/core/layers/ElevationLayer.js";
import {sceneRouteLayer} from "./maplayers.js";
export let routeMap = new Map({
  basemap: "satellite",
  layers: [sceneRouteLayer],
  ground: "world-elevation"
});
let highlight;
export function setupSceneMapView(SceneView) {
  SceneView.when(async () => {
    let layerView = await SceneView.whenLayerView(sceneRouteLayer);
    SceneView.on("pointer-move", async (e) => {
      const {results} = await SceneView.hitTest(e);
      if (results && results.length > 0) {
        const {graphic} = results.find((x) => x.graphic.attributes.OBJECTID);
        if (highlight) {
          highlight.remove();
        }
        highlight = layerView.highlight(graphic);
      } else {
        if (highlight) {
          highlight.remove();
        }
      }
    });
    SceneView.on("click", async (e) => {
      const {results} = await SceneView.hitTest(e);
      if (results && results.length > 0) {
        const {graphic} = results.find((x) => x.graphic.attributes.OBJECTID);
        SceneView.goTo(graphic);
      }
    });
  });
}
const ExaggeratedElevationLayer = BaseElevationLayer.createSubclass({
  properties: {
    exaggeration: 5
  },
  load: function() {
    this._elevation = new ElevationLayer({
      url: "//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"
    });
    this.addResolvingPromise(this._elevation.load().then(() => {
      this.tileInfo = this._elevation.tileInfo;
      this.spatialReference = this._elevation.spatialReference;
      this.fullExtent = this._elevation.fullExtent;
    }));
    return this;
  },
  fetchTile: function(level, row, col, options) {
    return this._elevation.fetchTile(level, row, col, options).then(function(data) {
      const exaggeration = this.exaggeration;
      for (let i = 0; i < data.values.length; i++) {
        data.values[i] = data.values[i] * exaggeration;
      }
      return data;
    }.bind(this));
  }
});
