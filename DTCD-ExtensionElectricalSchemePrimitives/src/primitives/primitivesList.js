import Breakers from './Breaker/list';
import PowerTransformers from './PowerTransformer/list';
import BusbarSection_6kv from './BusbarSection/BusbarSection_6kv';
import BusbarSection_35kv from './BusbarSection/BusbarSection_35kv';

export default [
  ...Breakers,
  ...PowerTransformers,
  BusbarSection_6kv,
  BusbarSection_35kv,
];
