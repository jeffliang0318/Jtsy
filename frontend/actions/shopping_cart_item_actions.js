import * as APIUtil from '../util/shopping_cart_items_api_util';

export const RECEIVE_ALL_CARTS =  "RECEIVE_ALL_CARTS";
export const RECEIVE_CART = "RECEIVE_CART";

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
});
export const receiveAllCarts = carts  => ({
  type: RECEIVE_CART,
  carts
});

export const fetchShoppingCart = id => dispatch => (
  APIUtil.fetchShoppingCart(id).then(
    cart => dispatch(receiveCart(cart)))
);

export const createShoppingCart = id => dispatch => (
  APIUtil.createShoppingCart(id).then(
    cart => dispatch(receiveCart(cart))
  )
);

export const updateShoppingCart = cart => dispatch => (
  APIUtil.updateShoppingCart(cart).then(
    updatedCart => dispatch(receiveCart(updatedCart))
  )
);
