import Breakers from './Breaker/list';
import PowerTransformers from './PowerTransformer/list';
import PotentialTransformers from './PotentialTransformer/list';
import BusbarSection_6kv from './BusbarSection/BusbarSection_6kv';
import BusbarSection_35kv from './BusbarSection/BusbarSection_35kv';
import ConnectivityNode from './ConnectivityNode/ConnectivityNode';
import Generator from './Generator/Generator';
import Engine from './Engine/Engine';

export default [
  ...Breakers,
  ...PowerTransformers,
  ...PotentialTransformers,
  BusbarSection_6kv,
  BusbarSection_35kv,
  ConnectivityNode,
  Generator,
  Engine,
];
