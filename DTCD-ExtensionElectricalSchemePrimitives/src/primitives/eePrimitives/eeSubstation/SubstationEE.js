import icon from './icon.svg';

export default class SubstationEE {
  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'eeSubstation',
      title: 'eeSubstation',
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
      "kV_in": {
        "type": "expression",
        "expression": "",
        "status": "completed",
        "value": "",
      },
      "kV_out": {
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
    ];

    instance.tag = { properties, initPorts };

    return instance;
  }
}
