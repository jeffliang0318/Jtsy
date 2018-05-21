
import { combineReducers } from 'redux';
import modal from './modal_reducer';
import session from './session_reducer';
import seller from './seller_reducer';

export default combineReducers({
  modal,
  session,
  seller
});
