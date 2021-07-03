import SimpleLineSymbol from "./_snowpack/pkg/@arcgis/core/symbols/SimpleLineSymbol.js";
export const routeLayerRenderer = {
  type: "unique-value",
  field: "type",
  uniqueValueInfos: [
    {
      value: "A",
      symbol: LineSymbolGenerator([255, 0, 0])
    },
    {
      value: "B",
      symbol: LineSymbolGenerator([219, 242, 100])
    }
  ]
};
function LineSymbolGenerator(color) {
  return new SimpleLineSymbol({
    style: "solid",
    color,
    width: "4px"
  });
}
