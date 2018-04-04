import { combineReducers } from 'redux';
import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  ui,
});

export default rootReducer;
