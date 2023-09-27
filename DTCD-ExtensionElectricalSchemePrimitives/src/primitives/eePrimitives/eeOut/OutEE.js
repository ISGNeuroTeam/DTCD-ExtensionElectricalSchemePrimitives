import icon from './icon.svg';

export default class OutEE {
  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'eeOut',
      title: 'eeOut',
      groups: ['Объекты электрических схем'],
    };
  }

  constructor(yFiles) {
    this.#yFiles = yFiles;
  }

  create() {
    const { Rect, SimpleNode, ImageNodeStyle } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, 80, 90);
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
      "normallylnService": {
        "expression": "",
        "type": "expression",
      },
      "model": {
        "expression": "",
        "type": "expression",
      },
      "Name": {
        "type": "expression",
        "expression": "",
        "status": "completed",
        "value": "",
      },
      "zagruzka": {
        "type": "expression",
        "expression": "",
        "status": "completed",
        "value": "",
      },
      "current": {
        "type": "expression",
        "expression": "",
        "status": "completed",
        "value": "",
      },
      "kV": {
        "type": "expression",
        "expression": "",
        "status": "completed",
        "value": "",
      },
      "power": {
        "type": "expression",
        "expression": "",
        "status": "completed",
        "value": "",
      },
    };

    const initPorts = [
      {
        primitiveName: 'inoutPort',
        type: ['IN', 'OUT'],
        portPosition: { x: 0.5, y: 0.0 },
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
