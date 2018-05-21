import merge from 'lodash/merge';

import {RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT} from '../actions/product_actions';

import { RECEIVE_CURRENT_USER, RECEIVE_SELLER } from '../actions/session_actions';

  const productReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_ALL_PRODUCTS:
        return action.products;
      case RECEIVE_PRODUCT:
        return merge({}, oldState, {[action.product.id]: action.product});
      case REMOVE_PRODUCT:
        let newState = merge({}, oldState);
        delete newState[action.id];
        return newState;
      case RECEIVE_CURRENT_USER:
          let product = action.payload.products;
          return merge({}, oldState, product);
      case RECEIVE_SELLER:
          product = action.payload.products;
          return merge({}, oldState, product);
      default:
        return oldState;

    }
  };

export default productReducer;
