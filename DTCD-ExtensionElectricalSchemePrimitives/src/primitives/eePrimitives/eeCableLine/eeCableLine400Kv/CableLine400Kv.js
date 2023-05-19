import icon from './icon.svg';

export default class CableLine400Kv {
  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'eeCableLine400Kv',
      title: 'eeCableLine400Kv',
      groups: ['Объекты электрических схем'],
    };
  }

  constructor(yFiles) {
    this.#yFiles = yFiles.default;
  }

  create() {
    const { Rect, SimpleNode, ImageNodeStyle } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, 91, 91);
    instance.style = new ImageNodeStyle(icon);

    const properties = {
      "description": {
        "expression": "",
        "type": "expression",
        "status": "complete",
        "value": "",
      },
      "length": {
        "expression": "",
        "type": "expression",
        "status": "complete",
        "value": "",
      },
      "Name": {
        "expression": "",
        "type": "expression",
        "status": "complete",
        "value": "",
      },
      "object_type": {
        "expression": "",
        "type": "expression",
        "status": "complete",
        "value": "",
      },
      "zagruzka": {
        "expression": "",
        "type": "expression",
        "status": "complete",
        "value": "",
      },
      "current": {
        "expression": "",
        "type": "expression",
        "status": "complete",
        "value": "",
      },
      "kV": {
        "type": "expression",
        "expression": "",
        "status": "completed",
        "value": "",
      }
    };

    const initPorts = [
      {
        primitiveName: 'inPort1',
        type: 'IN',
        portPosition: { x: 0.5, y: 0 },
        properties: {
          status: {
            expression: ``,
            type: 'expression',
          },
        },
      },
      {
        primitiveName: 'outPort2',
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