import {routeMap, setupSceneMapView} from "./sceneconfig.js";
import SceneView from "./_snowpack/pkg/@arcgis/core/views/SceneView.js";
import {overviewMap, OverviewMapView} from "./overviewmapconfig.js";
let sceneView = new SceneView({
  map: routeMap,
  container: "viewDiv",
  extent: {
    xmin: -126.902,
    ymin: 23.848,
    xmax: -65.73,
    ymax: 50.15
  }
});
let overviewMapView = new OverviewMapView({
  map: overviewMap,
  container: "overviewDiv",
  constraints: {
    rotationEnabled: false
  },
  extent: {
    xmin: -126.902,
    ymin: 23.848,
    xmax: -65.73,
    ymax: 50.15
  },
  companionSceneView: sceneView
});
sceneView.when(() => {
  setupSceneMapView(sceneView);
  overviewMapView.setUp();
});
