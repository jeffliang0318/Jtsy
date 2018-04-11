import * as APIUtil from '../util/shopping_cart_items_api_util';

export const RECEIVE_ALL_CART_ITEMS =  "RECEIVE_ALL_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

export const receiveCartItem = item => ({
  type: RECEIVE_CART_ITEM,
  item
});
export const receiveAllCartItems = items  => ({
  type: RECEIVE_ALL_CART_ITEMS,
  items
});

export const deleteCartItem = id => ({
  type: DELETE_CART_ITEM,
  id
});


export const fetchShoppingCartItems = () => dispatch => (
  APIUtil.fetchShoppingCartItems().then(
    items => dispatch(receiveAllCartItems(items)))
);
export const fetchShoppingCartItem = (id) => dispatch => (
  APIUtil.fetchShoppingCartItem(id).then(
    item => dispatch(receiveCartItem(item)))
);

export const createShoppingCartItem = item => dispatch => (
  APIUtil.createShoppingCartItem(item).then(
    createdItem => dispatch(receiveCartItem(createdItem))
  )
);

export const updateShoppingCartItem = item => dispatch => (
  APIUtil.updateShoppingCartItem(item).then(
    updatedItem => dispatch(receiveCartItem(updatedItem))
  )
);
export const deleteShoppingCartItem = id => dispatch => (
  APIUtil.deleteShoppingCartItem(id).then(
    item => dispatch(deleteCartItem(item.id))
  )
);
