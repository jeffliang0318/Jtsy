import merge from 'lodash/merge';

import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM, DELETE_CART_ITEM} from
'../actions/shopping_cart_item_actions';

  const initialState = {
    products: {},
    cart: {},

  };

  const shoppingCartReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_ALL_CART_ITEMS:
        return action.items;
      case RECEIVE_CART_ITEM:
        return merge({},oldState, {[action.item.product_id]: action.item});
      case DELETE_CART_ITEM:
        let newState = merge({}, oldState);
        delete newState[action.id];
        return  newState;
      default:
        return oldState;

    }
  };

export default shoppingCartReducer;
