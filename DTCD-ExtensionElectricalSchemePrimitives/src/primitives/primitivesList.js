import ACLineSegments from './ACLineSegment/list';
import Breakers from './Breaker/list';
import PowerTransformers from './PowerTransformer/list';
import PotentialTransformers from './PotentialTransformer/list';
import BusbarSection_6kv from './BusbarSection/BusbarSection_6kv';
import BusbarSection_35kv from './BusbarSection/BusbarSection_35kv';
import ConnectivityNode from './ConnectivityNode/ConnectivityNode';
import Generator from './Generator/Generator';
import Engine from './Engine/Engine';
import LoadBreakSwitches from './LoadBreakSwitch/list';
import Disconnectors from './Disconnector/list';
import GroundSwitches from './GroundSwitch/list';
import ShortCircuiters from './ShortCircuiter/list';
import Separators from './Separator/list';
import AutomaticBreakers from './AutomaticBreaker/list';
import BreakerCarts from './BreakerCart/list';
import DisconnectorCarts from './DisconnectorCart/list';
import AutoTransformers from './AutoTransformer/list';
import PetersenCoils from './PetersenCoil/list';
import WaveTrap from './WaveTrap/WaveTrap';
import ConnectionFilter from './ConnectionFilter/ConnectionFilter';
import Capacitor from './Capacitor/Capacitor';

export default [
  ...Breakers,
  ...LoadBreakSwitches,
  ...Disconnectors,
  ...GroundSwitches,
  ...ShortCircuiters,
  ...Separators,
  ...AutomaticBreakers,
  ...BreakerCarts,
  ...DisconnectorCarts,
  ...AutoTransformers,
  ...PowerTransformers,
  ...PetersenCoils,
  ...PotentialTransformers,
  WaveTrap,
  ConnectionFilter,
  Capacitor,
  BusbarSection_6kv,
  BusbarSection_35kv,
  ConnectivityNode,
  Generator,
  Engine,
  ...ACLineSegments,
];
