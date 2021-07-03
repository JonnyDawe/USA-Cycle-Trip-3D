import Map from '@arcgis/core/Map'
import BaseElevationLayer from '@arcgis/core/layers/BaseElevationLayer'
import ElevationLayer from '@arcgis/core/layers/ElevationLayer'
import { sceneRouteLayer } from './maplayers'
import { getAllRouteGeometry } from './elevationprofile'

export let routeMap = new Map({
    basemap: 'satellite',
    layers: [sceneRouteLayer],
    ground: 'world-elevation',
})

let highlight: __esri.Handle
export function setupSceneMapView(SceneView: __esri.SceneView) {
    SceneView.when(async () => {
        let layerView = await SceneView.whenLayerView(sceneRouteLayer)

        SceneView.on('pointer-move', async (e) => {
            const { results } = await SceneView.hitTest(e)

            if (results && results.length > 0) {
                const { graphic } = results.find(
                    (x) => x.graphic.attributes.OBJECTID
                )
                if (highlight) {
                    highlight.remove()
                }
                highlight = layerView.highlight(graphic)
            } else {
                if (highlight) {
                    highlight.remove()
                }
            }
        })

        SceneView.on('click', async (e) => {
            // getAllRouteGeometry()
            const { results } = await SceneView.hitTest(e)
            if (results && results.length > 0) {
                const { graphic } = results.find(
                    (x) => x.graphic.attributes.OBJECTID
                )

                SceneView.goTo(graphic)
            }
        })
    })
}

const ExaggeratedElevationLayer = (BaseElevationLayer as any).createSubclass({
    properties: {
        // exaggerates the actual elevations by 70x
        exaggeration: 5,
    },

    load: function () {
        this._elevation = new ElevationLayer({
            url:
                '//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
        })

        // wait for the elevation layer to load before resolving load()
        this.addResolvingPromise(
            this._elevation.load().then(() => {
                // get tileInfo, spatialReference and fullExtent from the elevation service
                // this is required for elevation services with a custom spatialReference
                this.tileInfo = this._elevation.tileInfo
                this.spatialReference = this._elevation.spatialReference
                this.fullExtent = this._elevation.fullExtent
            })
        )

        return this
    },

    // Fetches the tile(s) visible in the view
    fetchTile: function (level: any, row: any, col: any, options: any) {
        return this._elevation.fetchTile(level, row, col, options).then(
            function (data: { values: any }) {
                const exaggeration = this.exaggeration
                for (let i = 0; i < data.values.length; i++) {
                    data.values[i] = data.values[i] * exaggeration
                }

                return data
            }.bind(this)
        )
    },
})
