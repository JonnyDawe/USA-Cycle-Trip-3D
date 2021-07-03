var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {init} from "./_snowpack/pkg/@arcgis/core/core/watchUtils.js";
import Map from "./_snowpack/pkg/@arcgis/core/Map.js";
import {overviewRouteLayer} from "./maplayers.js";
import {
  subclass
} from "./_snowpack/pkg/@arcgis/core/core/accessorSupport/decorators.js";
import MapView from "./_snowpack/pkg/@arcgis/core/views/MapView.js";
export const overviewMap = new Map({
  basemap: "osm",
  layers: [overviewRouteLayer]
});
export let OverviewMapView = class extends MapView {
  constructor(properties) {
    super(properties);
    this.companionScene = properties.companionSceneView;
    this.ui.components = [];
  }
  async setUp() {
    this.when(() => {
      init(this.companionScene, "extent", (extent) => {
        this.scale = this.companionScene.scale * 4 * Math.max(this.companionScene.width / this.companionScene.width, this.companionScene.height / this.companionScene.height);
        this.center = this.companionScene.center;
      });
    });
    this.popup.dockEnabled = true;
    function stopEvtPropagation(event) {
      event.stopPropagation();
    }
    this.on("mouse-wheel", stopEvtPropagation);
    this.on("double-click", stopEvtPropagation);
    this.on("double-click", ["Control"], stopEvtPropagation);
    this.on("drag", stopEvtPropagation);
    this.on("drag", ["Shift"], stopEvtPropagation);
    this.on("drag", ["Shift", "Control"], stopEvtPropagation);
    this.on("key-down", function(event) {
      const prohibitedKeys = [
        "+",
        "-",
        "Shift",
        "_",
        "=",
        "ArrowUp",
        "ArrowDown",
        "ArrowRight",
        "ArrowLeft"
      ];
      const keyPressed = event.key;
      if (prohibitedKeys.indexOf(keyPressed) !== -1) {
        event.stopPropagation();
      }
    });
  }
};
OverviewMapView = __decorate([
  subclass("map.overview")
], OverviewMapView);
