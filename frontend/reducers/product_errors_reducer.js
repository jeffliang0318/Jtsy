import  {
  CLEAR_PRODUCT_ERRORS,
  RECEIVE_PRODUCT_ERRORS
} from '../actions/product_actions';

export default (state = [], action) =>{
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      return action.errors;
    case CLEAR_PRODUCT_ERRORS:
      return [];
    default:
      return state;

  }
};
