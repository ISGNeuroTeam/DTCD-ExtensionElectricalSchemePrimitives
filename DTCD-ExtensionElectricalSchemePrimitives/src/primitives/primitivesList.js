import BusbarSections from './BusbarSection/list';
import ACLineSegments from './ACLineSegment/list';
import ACLineSegmentsCable from './ACLineSegmentCable/list';
import Breakers from './Breaker/list';
import PowerTransformers from './PowerTransformer/list';
import PotentialTransformers from './PotentialTransformer/list';
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
import SurgeArrester from './SurgeArrester/SurgeArrester';
import Arrester from './Arrester/Arrester';
import Fuse from './Fuse/Fuse';
import CurrentLimitingReactors from './CurrentLimitingReactor/list';
import ShuntReactors from './ShuntReactor/list';
import SynchronousCompensator from './SynchronousCompensator/SynchronousCompensator';
import CurrentTransformer from './CurrentTransformer/CurrentTransformer';
import eePrimitives from './eePrimitives/primitivesList';

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
  SurgeArrester,
  Arrester,
  Fuse,
  ...CurrentLimitingReactors,
  ...ShuntReactors,
  SynchronousCompensator,
  CurrentTransformer,
  ConnectivityNode,
  Generator,
  Engine,
  ...BusbarSections,
  ...ACLineSegments,
  ...ACLineSegmentsCable,
  ...eePrimitives,
];
