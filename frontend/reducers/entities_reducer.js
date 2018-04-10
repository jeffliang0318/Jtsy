import { combineReducers } from 'redux';

import product from './product_reducer';
import shoppingCart from './shopping_cart_reducer';

export default combineReducers({
  product,
  shoppingCart
});
