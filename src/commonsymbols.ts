import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'

export const routeLayerRenderer = {
    type: 'unique-value', // autocasts as new UniqueValueRenderer()
    field: 'type',
    uniqueValueInfos: [
        {
            // All features with value of "North" will be blue
            value: 'A',
            symbol: LineSymbolGenerator([255, 0, 0]),
        },
        {
            // All features with value of "East" will be green
            value: 'B',
            symbol: LineSymbolGenerator([219, 242, 100]),
        },
    ],
} as __esri.RendererProperties

function LineSymbolGenerator(
    color: [number, number, number]
): __esri.SimpleLineSymbol {
    return new SimpleLineSymbol({
        style: 'solid',
        color,
        width: '4px',
    })
}
