import { init } from '@arcgis/core/core/watchUtils'
import Map from '@arcgis/core/Map'
import { overviewRouteLayer } from './maplayers'
import {
    property,
    subclass,
} from '@arcgis/core/core/accessorSupport/decorators'
import MapView from '@arcgis/core/views/MapView'

export const overviewMap = new Map({
    basemap: 'osm',
    layers: [overviewRouteLayer],
})

interface OverviewMapViewProperties extends __esri.MapViewProperties {
    companionSceneView: __esri.SceneView
}

@subclass('map.overview')
export class OverviewMapView extends MapView {
    public constructor(properties?: OverviewMapViewProperties) {
        super(properties)
        this.companionScene = properties.companionSceneView
        this.ui.components = []
    }

    public companionScene: __esri.SceneView

    public async setUp(): Promise<void> {
        this.when(() => {
            init(this.companionScene, 'extent', (extent) => {
                this.scale =
                    this.companionScene.scale *
                    4 *
                    Math.max(
                        this.companionScene.width / this.companionScene.width,
                        this.companionScene.height / this.companionScene.height
                    )

                this.center = this.companionScene.center
            })
        })

        this.popup.dockEnabled = true

        // stops propagation of default behavior when an event fires
        function stopEvtPropagation(event: Event) {
            event.stopPropagation()
        }

        // disable mouse wheel scroll zooming on the view
        this.on('mouse-wheel', stopEvtPropagation)

        // disable zooming via double-click on the view
        this.on('double-click', stopEvtPropagation)

        // disable zooming out via double-click + Control on the view
        this.on('double-click', ['Control'], stopEvtPropagation)

        // disables pinch-zoom and panning on the view
        this.on('drag', stopEvtPropagation)

        // disable the view's zoom box to prevent the Shift + drag
        // and Shift + Control + drag zoom gestures.
        this.on('drag', ['Shift'], stopEvtPropagation)
        this.on('drag', ['Shift', 'Control'], stopEvtPropagation)

        // prevents zooming with the + and - keys
        this.on('key-down', function (event) {
            const prohibitedKeys = [
                '+',
                '-',
                'Shift',
                '_',
                '=',
                'ArrowUp',
                'ArrowDown',
                'ArrowRight',
                'ArrowLeft',
            ]
            const keyPressed = event.key
            if (prohibitedKeys.indexOf(keyPressed) !== -1) {
                event.stopPropagation()
            }
        })
    }
}
