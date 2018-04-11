import merge from 'lodash/merge';

import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM, DELETE_CART_ITEM} from
'../actions/shopping_cart_item_actions';

  const shoppingCartReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_ALL_CART_ITEMS:
        return action.items.cart;
      case RECEIVE_CART_ITEM:
        return merge({},oldState, {[action.item.product_id]: action.item});
      default:
        return oldState;

    }
  };

export default shoppingCartReducer;
