import { nodeResolve } from '@rollup/plugin-node-resolve';
import img from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

import { version } from './package.json';
import pluginMeta from './src/Plugin.Meta';


const watch = Boolean(process.env.ROLLUP_WATCH);

const pluginName = pluginMeta.name;
const outputFile = `${pluginName}.js`;
const outputDirectory = watch
  ? `./../../DTCD/server/plugins/DTCD-${pluginName}_${version}`
  : `./build`;

const plugins = [
  nodeResolve(),
  commonjs(),
  json(),
  img(),
];

export default {
  plugins,
  input: `./src/Plugin.js`,
  output: {
    file: `${outputDirectory}/${outputFile}`,
    format: 'esm',
    sourcemap: false,
  },
  watch: {
    include: ['./src/**/*'],
  },
};
