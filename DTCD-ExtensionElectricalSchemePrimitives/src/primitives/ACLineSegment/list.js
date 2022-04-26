import ACLineSegment from './ACLineSegment';

import icon_6kv from './6kv.svg';
import icon_35kv from './35kv.svg';

const primitivesData = [
  {
    name: 'ACLineSegment6kv',
    title: 'Воздушная линия 6 кВ',
    color: 'rgb(0, 170, 0)',
    icon: icon_6kv,
  },
  {
    name: 'ACLineSegment35kv',
    title: 'Воздушная линия 35 кВ',
    color: 'rgb(150, 75, 0)',
    icon: icon_35kv,
  },
];

const groups = ['Элементы электрических схем'];

export default primitivesData.map(primitive => {
  const { name, title, color, icon } = primitive;
  const primitiveInfo = { icon, name, title, groups };

  const classBuilder = new Function('baseClass', 'info', `
    return class ${name} extends baseClass {
      static getPrimitiveInfo() {
        return info;
      }

      constructor(yFiles) {
        super(yFiles, '${color}');
      }
    }
  `);

  return classBuilder(ACLineSegment, primitiveInfo);
});
