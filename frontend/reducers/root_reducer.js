import { combineReducers } from 'redux';
import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import product from './product_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  ui,
  product,
});

export default rootReducer;
