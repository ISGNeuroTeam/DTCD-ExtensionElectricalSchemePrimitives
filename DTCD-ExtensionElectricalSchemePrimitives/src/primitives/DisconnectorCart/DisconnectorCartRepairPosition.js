import icon from './repairPosition.svg';

export default class ObjectModelPrimitive {
  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'DisconnectorCartRepairPosition',
      title: 'Тележка разъединителя КРУ в ремонтном положении',
      groups: ['Элементы электрических схем'],
    };
  }

  constructor(yFiles) {
    this.#yFiles = yFiles;
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
          portPosition: { x: 0.5, y: 1 },
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
