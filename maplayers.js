import FeatureLayer from "./_snowpack/pkg/@arcgis/core/layers/FeatureLayer.js";
import LabelClass from "./_snowpack/pkg/@arcgis/core/layers/support/LabelClass.js";
import {routeLayerRenderer} from "./commonsymbols.js";
const layerElevationInfo = {
  mode: "relative-to-ground",
  offset: 2,
  featureExpressionInfo: {
    expression: "0"
  },
  unit: "meters"
};
const sceneRouteArcadeLabel = `
  var fullText = $feature.name
  console(fullText)
  if(Find("to", fullText) > 0){
      
    var textArray1 = Split(fullText, "to ", 2)
    var end = textArray1[1]
    var textArray2 = Split(textArray1[0], "- ", 2)
    var start = textArray2[0]
    var middle = textArray2[1]
    var newText = Concatenate ([start,TextFormatting.NewLine,middle, "to", TextFormatting.NewLine, end])
  
    return newText
  } else {
    return fullText
  }
  
  `;
const sceneRouteLabels = new LabelClass({
  symbol: {
    type: "label-3d",
    symbolLayers: [
      {
        type: "text",
        material: {
          color: "white"
        },
        halo: {
          color: [0, 0, 0, 0.7],
          size: 1
        },
        size: 11
      }
    ],
    verticalOffset: {
      screenLength: 50,
      maxWorldLength: 2e3,
      minWorldLength: 30
    },
    callout: {
      type: "line",
      size: 0.5,
      color: [0, 0, 0],
      border: {
        color: [255, 255, 255, 0.7]
      }
    }
  },
  labelPlacement: "above-center",
  labelExpressionInfo: {
    expression: sceneRouteArcadeLabel
  },
  maxScale: 0,
  minScale: 25e5
});
export const sceneRouteLayer = new FeatureLayer({
  url: "https://services6.arcgis.com/ujpPLfH38KAX8unh/arcgis/rest/services/USA_Coast_To_Coast_Route/FeatureServer",
  renderer: routeLayerRenderer,
  elevationInfo: layerElevationInfo,
  labelingInfo: [sceneRouteLabels]
});
export const overviewRouteLayer = new FeatureLayer({
  url: "https://services6.arcgis.com/ujpPLfH38KAX8unh/arcgis/rest/services/USA_Coast_To_Coast_Route/FeatureServer",
  renderer: routeLayerRenderer
});
