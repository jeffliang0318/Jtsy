import { combineReducers } from 'redux';
import ui from './ui_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';

const rootReducer = combineReducers({
  entities,
  errors,
  ui
});

export default rootReducer;
