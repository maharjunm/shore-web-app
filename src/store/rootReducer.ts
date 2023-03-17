import { combineReducers } from 'redux';
import Map from './Map/reducer';
import Payment from './Payments/reducer';

export default combineReducers({
  Map,Payment,
});
