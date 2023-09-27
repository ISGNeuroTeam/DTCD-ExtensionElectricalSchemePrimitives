import pluginMeta from './Plugin.Meta';
import primitivesList from './primitives/primitivesList';
import { ExtensionPlugin } from './../../DTCD-SDK';

export class ExtensionElectricalSchemePrimitives extends ExtensionPlugin {

  primitives = {};

  static getRegistrationMeta() {
    return pluginMeta;
  }

  static getExtensionInfo() {
    const result = [];
    primitivesList.forEach(primitive => {
      const primitiveInfo = primitive.getPrimitiveInfo();
      primitiveInfo.extensionName = this.getRegistrationMeta().name;
      primitiveInfo.primitiveName = primitiveInfo.name;
      result.push(primitiveInfo);
    });
    return result;
  }

  constructor() {
    super();

    const yFiles = this.getDependence('yfiles', 'esm', '2.5.0');

    primitivesList.forEach(PrimitiveClass => {
      const { name } = PrimitiveClass.getPrimitiveInfo();
      this.primitives[name] = PrimitiveClass.bind(null, yFiles);
    });
  }

}
