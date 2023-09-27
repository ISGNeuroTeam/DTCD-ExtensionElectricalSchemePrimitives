import icon from './icon.svg';

export default class StationEE {
  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'eeStation',
      title: 'eeStation',
      groups: ['Объекты электрических схем'],
    };
  }

  constructor(yFiles) {
    this.#yFiles = yFiles;
  }

  create() {
    const { Rect, SimpleNode, ImageNodeStyle } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, 76, 91);
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
        primitiveName: 'inPort1',
        type: 'IN',
        portPosition: { x: 0.5, y: 0.0 },
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
