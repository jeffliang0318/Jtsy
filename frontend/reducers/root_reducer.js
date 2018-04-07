import { combineReducers } from 'redux';
import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import product from './product_reducer';
import entities from './entities_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  ui
});

export default rootReducer;
