import { routeMap, setupSceneMapView } from './sceneconfig'
import SceneView from '@arcgis/core/views/SceneView'
import { overviewMap, OverviewMapView } from './overviewmapconfig'

let sceneView = new SceneView({
    map: routeMap,
    container: 'viewDiv',
    extent: {
        xmin: -126.902,
        ymin: 23.848,
        xmax: -65.73,
        ymax: 50.15,
    },
})

let overviewMapView = new OverviewMapView({
    map: overviewMap,
    container: 'overviewDiv',
    constraints: {
        rotationEnabled: false,
    },
    extent: {
        xmin: -126.902,
        ymin: 23.848,
        xmax: -65.73,
        ymax: 50.15,
    },
    companionSceneView: sceneView,
})

sceneView.when(() => {
    setupSceneMapView(sceneView)
    overviewMapView.setUp()
})
