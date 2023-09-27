export default class ObjectModelPrimitive {
  #yFiles;
  #strokeColor;

  constructor(yFiles, strokeColor) {
    this.#yFiles = yFiles;
    this.#strokeColor = strokeColor;
  }

  create() {
    const { SimpleEdge, PolylineEdgeStyle } = this.#yFiles;

    const instance = new SimpleEdge();
    instance.style = new PolylineEdgeStyle({
      stroke: `1px ${this.#strokeColor}`,
    });

    return instance;
  }
}
