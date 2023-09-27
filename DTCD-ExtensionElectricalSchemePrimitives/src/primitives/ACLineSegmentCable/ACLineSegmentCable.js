import getCustomEdgeArrow from './getCustomEdgeArrow';

export default class ObjectModelPrimitive {
  #yFiles;
  #strokeColor;

  constructor(yFiles, strokeColor) {
    this.#yFiles = yFiles;
    this.#strokeColor = strokeColor;
    this.customArrow = getCustomEdgeArrow(this.#yFiles)
  }

  create() {
    const { SimpleEdge, PolylineEdgeStyle } = this.#yFiles;

    const instance = new SimpleEdge();
    const arrow = new this.customArrow(this.#strokeColor);

    instance.style = new PolylineEdgeStyle({
      sourceArrow: arrow,
      targetArrow: arrow,
      stroke: `1px ${this.#strokeColor}`,
    });

    return instance;
  }
}
