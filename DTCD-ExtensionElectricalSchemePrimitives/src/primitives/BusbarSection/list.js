import voltages from '../../utils/voltages';
import BusbarSection from './BusbarSection';
import baseIcon from './icon.svg';

const groups = ['Элементы электрических схем'];

export default voltages.map(({ val, color }) => {
  const name = `BusbarSection${val}kV`;
  const title = `Секция шин ${val} кВ`;
  const icon = baseIcon.replace('COLOR', color);

  const primitiveInfo = { name, title, icon, groups };

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

  return classBuilder(BusbarSection, primitiveInfo);
});
