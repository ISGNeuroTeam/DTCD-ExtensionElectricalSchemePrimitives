import icon from './icon.svg';

export default class PowerLineEE {
  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'eePowerLine',
      title: 'eePowerLine',
      groups: ['Объекты электрических схем'],
    };
  }

  constructor(yFiles) {
    this.#yFiles = yFiles;
  }

  create() {
    const { Rect, SimpleNode, ImageNodeStyle } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, 91, 91);
    instance.style = new ImageNodeStyle(icon);

    const properties = {
      "name": {
        "expression": "",
        "type": "expression",
      },
      "aliasName": {
        "expression": "",
        "type": "expression",
      },
      "description": {
        "expression": "",
        "type": "expression",
      },
      "length": {
        "expression": "",
        "type": "expression",
      },
    };

    const initPorts = [
      {
        primitiveName: 'inoutPortTop',
        type: ['IN', 'OUT'],
        portPosition: { x: 0.5, y: 0.0 },
        properties: {
          status: {
            expression: ``,
            type: 'expression',
          },
        },
      },
      {
        primitiveName: 'inoutPortLow',
        type: ['IN', 'OUT'],
        portPosition: { x: 0.5, y: 1.0 },
        properties: {
          status: {
            expression: ``,
            type: 'expression',
          },
        },
      },
      {
        primitiveName: 'inoutPortLeft',
        type: ['IN', 'OUT'],
        portPosition: { x: 0.0, y: 0.5 },
        properties: {
          status: {
            expression: ``,
            type: 'expression',
          },
        },
      },
      {
        primitiveName: 'inoutPortRight',
        type: ['IN', 'OUT'],
        portPosition: { x: 1.0, y: 0.5 },
        properties: {
          status: {
            expression: ``,
            type: 'expression',
          },
        },
      },
    ];

    instance.tag = { properties, initPorts };

    return instance;
  }
}
