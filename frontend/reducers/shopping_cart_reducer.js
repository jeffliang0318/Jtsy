import merge from 'lodash/merge';

import { RECEIVE_CART, RECEIVE_ALL_CARTS } from '../actions/shopping_cart_item_actions';

  const shoppingCartReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_ALL_CARTS:
        return action.carts;
      case RECEIVE_CART:
        return action.cart;
      default:
        return oldState;

    }
  };

export default shoppingCartReducer;
