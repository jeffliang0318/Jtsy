
import { combineReducers } from 'redux';
import modal from './modal_reducer';
import session from './session_reducer';

export default combineReducers({
  modal,
  session
});
