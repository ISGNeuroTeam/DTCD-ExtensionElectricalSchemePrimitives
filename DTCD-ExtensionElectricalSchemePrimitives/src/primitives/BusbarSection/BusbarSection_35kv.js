import icon from './35kv.svg';

export default class ObjectModelPrimitive {

  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'BusbarSection_35kv',
      title: 'Секция шин 35 кВ',
      groups: ['Электрические схемы'],
    };
  }

  constructor(yFiles) {
    this.#yFiles = yFiles.default;
  }

  create() {
    const { Rect, SimpleNode, ShapeNodeStyle, ShapeNodeShape } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, 80, 4);
    instance.style = new ShapeNodeStyle({
      shape: ShapeNodeShape.RECTANGLE,
      fill: 'rgb(150, 75, 0)',
      stroke: '0px solid',
    });

    const initPorts = [];
    let prevOffset = 0;

    for (let index = 0; index < 15; index++) {
      const x = prevOffset + 0.065;
      prevOffset = x;
      initPorts.push({
        type: 'IN', portPosition: { x, y: 0.5 }
      });
    }

    instance.tag = { initPorts };

    return instance;
  }

}
