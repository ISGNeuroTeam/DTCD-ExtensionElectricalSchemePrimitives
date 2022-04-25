import icon from './35kv.svg';

export default class ObjectModelPrimitive {
  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'BusbarSection35kv',
      title: 'Секция шин 35 кВ',
      groups: ['Электрические схемы'],
    };
  }

  constructor(yFiles) {
    this.#yFiles = yFiles.default;
  }

  create() {
    const { Rect, SimpleNode, ShapeNodeStyle, ShapeNodeShape } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, 400, 15);
    instance.style = new ShapeNodeStyle({
      shape: ShapeNodeShape.RECTANGLE,
      fill: 'rgb(150, 75, 0)',
      stroke: '0px solid',
    });

    const initPorts = [];
    let prevOffset = 0;

    for (let index = 0; index < 15; index++) {
      const x = prevOffset + 0.065;
      prevOffset = x;
      initPorts.push({
        primitiveName: `inPort${index + 1}`,
        type: 'IN',
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
