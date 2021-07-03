import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import LabelClass from '@arcgis/core/layers/support/LabelClass'
import { routeLayerRenderer } from './commonsymbols'

// Define elevationInfo and set it on the layer
const layerElevationInfo: __esri.FeatureLayerElevationInfo = {
    mode: 'relative-to-ground',
    offset: 2,
    featureExpressionInfo: {
        expression: '0',
    },
    unit: 'meters',
}

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
  
  `

const sceneRouteLabels = new LabelClass({
    symbol: {
        type: 'label-3d', // autocasts as new LabelSymbol3D()
        symbolLayers: [
            {
                type: 'text', // autocasts as new TextSymbol3DLayer()
                material: {
                    color: 'white',
                },
                halo: {
                    color: [0, 0, 0, 0.7],
                    size: 1,
                },
                size: 11,
            },
        ],
        // Labels need a small vertical offset that will be used by the callout
        verticalOffset: {
            screenLength: 50,
            maxWorldLength: 2000,
            minWorldLength: 30,
        },
        // The callout has to have a defined type (currently only line is possible)
        // The size, the color and the border color can be customized
        callout: {
            type: 'line', // autocasts as new LineCallout3D()
            size: 0.5,
            color: [0, 0, 0],
            border: {
                color: [255, 255, 255, 0.7],
            },
        },
    },
    labelPlacement: 'above-center',
    labelExpressionInfo: {
        expression: sceneRouteArcadeLabel,
    },
    maxScale: 0,
    minScale: 2500000,
} as any)

export const sceneRouteLayer: __esri.FeatureLayer = new FeatureLayer({
    url:
        'https://services6.arcgis.com/ujpPLfH38KAX8unh/arcgis/rest/services/USA_Coast_To_Coast_Route/FeatureServer',
    renderer: routeLayerRenderer,
    elevationInfo: layerElevationInfo,
    labelingInfo: [sceneRouteLabels],
})

export const overviewRouteLayer: __esri.FeatureLayer = new FeatureLayer({
    url:
        'https://services6.arcgis.com/ujpPLfH38KAX8unh/arcgis/rest/services/USA_Coast_To_Coast_Route/FeatureServer',
    renderer: routeLayerRenderer,
})
