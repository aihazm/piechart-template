export default function picassoDefinition({
  layout,
}) {
  if (!layout.qHyperCube) {
    throw new Error('Layout is missing a hypercube');
  }
  return {
    scales: {
      c: {
        data: { extract: { field: 'qDimensionInfo/0' } }, type: 'color',
      },
    },
    components: [{
      type: 'legend-cat',
      scale: 'c',
    }, {
      key: 'p',
      type: 'pie',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            num: { field: 'qMeasureInfo/0' },
          },
        },
      },
      settings: {
        slice: {
          arc: { ref: 'num' },
          fill: { scale: 'c' },
          outerRadius: () => 0.9,
          strokeWidth: 1,
          stroke: 'rgba(255, 255, 255, 0.5)'
        },
      },
    }],
  };
}
