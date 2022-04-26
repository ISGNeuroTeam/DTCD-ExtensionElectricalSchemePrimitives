import icon from './6kv.svg';

export default class ObjectModelPrimitive {
  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'BusbarSection6kv',
      title: 'Секция шин 6 кВ',
      groups: ['Элементы электрических схем'],
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
      fill: 'rgb(0, 170, 0)',
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
