import {sceneRouteLayer} from "./maplayers.js";
import SpatialReference from "./_snowpack/pkg/@arcgis/core/geometry/SpatialReference.js";
import * as geometryEngine from "./_snowpack/pkg/@arcgis/core/geometry/geometryEngine.js";
import Point from "./_snowpack/pkg/@arcgis/core/geometry/Point.js";
export async function getAllRouteGeometry() {
  const query = sceneRouteLayer.createQuery();
  query.where = "1=1";
  query.returnZ = true;
  query.returnGeometry = true;
  query.outSpatialReference = SpatialReference.WebMercator;
  const {features} = await sceneRouteLayer.queryFeatures(query);
  console.log(features);
  let graphDataArray = features.map((graphic) => {
    const pathgeometry = graphic.geometry.paths.shift();
    let cumulativeDistance = 0;
    const graphDataElement = pathgeometry.map((element, index, array) => {
      switch (true) {
        case index === 0:
          return {distanceAlong: 0, height: element[2]};
        default:
          const prevElement = array[index - 1];
          let currentPoint = new Point({
            x: element[0],
            y: element[1],
            spatialReference: SpatialReference.WebMercator
          });
          let prevPoint = new Point({
            x: prevElement[0],
            y: prevElement[1],
            spatialReference: SpatialReference.WebMercator
          });
          let dist = geometryEngine.distance(prevPoint, currentPoint, "meters");
          cumulativeDistance += dist;
          return {
            distanceAlong: cumulativeDistance,
            height: element[2]
          };
      }
    });
    return graphDataElement;
  });
  console.log(graphDataArray);
}
