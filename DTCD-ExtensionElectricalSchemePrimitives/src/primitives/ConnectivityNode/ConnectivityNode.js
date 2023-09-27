import icon from './icon.svg';

export default class ObjectModelPrimitive {
  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'ConnectivityNode',
      title: 'Отпайка',
      groups: ['Элементы электрических схем'],
    };
  }

  constructor(yFiles) {
    this.#yFiles = yFiles;
  }

  create() {
    const { Rect, SimpleNode, ShapeNodeStyle, ShapeNodeShape } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, 15, 15);

    instance.style = new ShapeNodeStyle({
      shape: ShapeNodeShape.ELLIPSE,
      fill: 'rgb(0, 0, 0)',
      stroke: '0px solid',
    });

    instance.tag = {
      properties: {},
      initPorts: [
        {
          primitiveName: 'inPort1',
          type: ['IN', 'OUT'],
          portPosition: { x: 0.5, y: 0 },
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
          portPosition: { x: 1, y: 0.5 },
          properties: {
            status: {
              expression: ``,
              type: 'expression',
            },
          },
        },
        {
          primitiveName: 'inPort3',
          type: ['IN', 'OUT'],
          portPosition: { x: 0.5, y: 1 },
          properties: {
            status: {
              expression: ``,
              type: 'expression',
            },
          },
        },
        {
          primitiveName: 'inPort4',
          type: ['IN', 'OUT'],
          portPosition: { x: 0, y: 0.5 },
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
