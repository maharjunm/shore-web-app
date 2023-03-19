import { combineReducers } from 'redux';
import Map from './Map/reducer';
import payment from './Payments/reducer';

export default combineReducers({
  Map,payment,
});
