import icon from './iconLoadRegulation.svg';

export default class ObjectModelPrimitive {

  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'PowerTransformerThreeWindingLoadRegulation',
      title: 'Трансформатор силовой 3-х обмоточный с РПН',
      groups: ['Электрические схемы'],
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
          type: 'IN',
          portPosition: { x: 0.3, y: 1 },
          properties: {
            status: {
              expression: ``,
              type: 'expression',
            },
          },
        },
        {
          primitiveName: 'inPort2',
          type: 'IN',
          portPosition: { x: 0.7, y: 1 },
          properties: {
            status: {
              expression: ``,
              type: 'expression',
            },
          },
        },
        {
          primitiveName: 'outPort1',
          type: 'OUT',
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
