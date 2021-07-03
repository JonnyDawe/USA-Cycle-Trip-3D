import { sceneRouteLayer } from './maplayers'
import SpatialReference from '@arcgis/core/geometry/SpatialReference'
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine'
import Point from '@arcgis/core/geometry/Point'

export async function getAllRouteGeometry() {
    //fixes => corrupted data on day 4
    // fixes => some section have many paths - must iterate...

    const query = sceneRouteLayer.createQuery()
    query.where = '1=1'
    query.returnZ = true
    query.returnGeometry = true
    query.outSpatialReference = SpatialReference.WebMercator

    const { features } = await sceneRouteLayer.queryFeatures(query)
    console.log(features)

    let graphDataArray = features.map((graphic) => {
        const pathgeometry = (graphic.geometry as __esri.Polyline).paths.shift()

        let cumulativeDistance: number = 0
        const graphDataElement: {
            distanceAlong: number
            height: number
        }[] = pathgeometry.map((element, index, array) => {
            switch (true) {
                case index === 0:
                    return { distanceAlong: 0, height: element[2] }

                default:
                    const prevElement = array[index - 1]
                    let currentPoint = new Point({
                        x: element[0],
                        y: element[1],
                        spatialReference: SpatialReference.WebMercator,
                    })
                    let prevPoint = new Point({
                        x: prevElement[0],
                        y: prevElement[1],
                        spatialReference: SpatialReference.WebMercator,
                    })
                    let dist = geometryEngine.distance(
                        prevPoint,
                        currentPoint,
                        'meters'
                    )
                    cumulativeDistance += dist
                    return {
                        distanceAlong: cumulativeDistance,
                        height: element[2],
                    }
            }
        })
        return graphDataElement
    })

    console.log(graphDataArray)
}
