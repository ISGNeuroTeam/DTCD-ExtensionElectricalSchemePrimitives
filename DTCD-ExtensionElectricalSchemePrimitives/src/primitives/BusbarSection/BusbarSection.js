export default class ObjectModelPrimitive {
  #yFiles;
  #color;

  constructor(yFiles, color) {
    this.#yFiles = yFiles.default;
    this.#color = color;
  }

  create() {
    const { Rect, SimpleNode, ShapeNodeStyle, ShapeNodeShape } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, 400, 15);
    instance.style = new ShapeNodeStyle({
      shape: ShapeNodeShape.RECTANGLE,
      fill: this.#color,
      stroke: '0px solid',
    });

    const initPorts = [];
    let prevOffset = 0;

    for (let index = 0; index < 15; index++) {
      const x = prevOffset + 0.0625;
      prevOffset = x;
      initPorts.push({
        primitiveName: `inPort${index + 1}`,
        type: ['IN', 'OUT'],
        portPosition: { x, y: 0.5 },
        properties: {
          status: {
            expression: ``,
            type: 'expression',
          },
        },
      });
    }

    instance.tag = { properties: {}, initPorts };

    return instance;
  }
}
