import icon from './iconDouble.svg';

export default class ObjectModelPrimitive {
  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'CurrentLimitingReactorDouble',
      title: 'Токоограничивающий реактор сдвоенный',
      groups: ['Элементы электрических схем'],
    };
  }

  constructor(yFiles) {
    this.#yFiles = yFiles.default;
  }

  create() {
    const { Rect, SimpleNode, ImageNodeStyle } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, 80, 80);
    instance.style = new ImageNodeStyle(icon);

    instance.tag = {
      properties: {},
      initPorts: [
        {
          primitiveName: 'inPort1',
          type: ['IN', 'OUT'],
          portPosition: { x: 0, y: 0.47 },
          properties: {
            status: {
              expression: ``,
              type: 'expression',
            },
          },
        },
        {
          primitiveName: 'inPort2',
          type: ['IN', 'OUT'],
          portPosition: { x: 1, y: 0.47 },
          properties: {
            status: {
              expression: ``,
              type: 'expression',
            },
          },
        },
        {
          primitiveName: 'outPort1',
          type: ['IN', 'OUT'],
          portPosition: { x: 0.5, y: 0 },
          properties: {
            status: {
              expression: ``,
              type: 'expression',
            },
          },
        },
      ],
    };

    return instance;
  }
}