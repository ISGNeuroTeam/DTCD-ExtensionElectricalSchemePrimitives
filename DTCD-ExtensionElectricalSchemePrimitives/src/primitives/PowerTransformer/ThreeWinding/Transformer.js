import icon from './icon.svg';

export default class ObjectModelPrimitive {

  #yFiles;

  static getPrimitiveInfo() {
    return {
      icon,
      name: 'PowerTransformer_ThreeWinding',
      title: 'Трансформатор силовой 3-х обмоточный',
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
      initPorts: [
        { type: 'IN', portPosition: { x: 0.3, y: 1 } },
        { type: 'IN', portPosition: { x: 0.7, y: 1 } },
        { type: 'OUT', portPosition: { x: 0.5, y: 0 } },
      ],
    };

    return instance;
  }

}
