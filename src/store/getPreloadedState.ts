import { PartialRootState } from './configureStore';

import { initialMapState, MapState } from '../store/Map/reducer';
import { initialPaymentStatus, PaymentStatus } from '../store/Payments/reducer';

const getPreloadedMapState = (): MapState => {
  return {
    ...initialMapState,
  };
};

const getPreloadedPaymentStatus = (): PaymentStatus => {
  return {
    ...initialPaymentStatus,
  };
};

const getPreloadedState = (): PartialRootState => {
  return {
    Map: getPreloadedMapState(),
    Payment: getPreloadedPaymentStatus(),
  };
};

export default getPreloadedState;
