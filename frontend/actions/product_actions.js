import * as APIUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CLEAR_PRODUCT_ERRORS = "CLEAR_PRODUCT_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const receiveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  id
});

export const clearError = () => ({
  type: CLEAR_PRODUCT_ERRORS
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const fetchProducts = () => dispatch => (
  APIUtil.fetchProducts().then(
    products => dispatch(receiveAllProducts(products)))
);

export const fetchProduct = id => dispatch => (
  APIUtil.fetchProduct(id).then(
    product => dispatch(receiveProduct(product)))
);

export const createProduct = product => dispatch => (
  APIUtil.createProduct(product).then(
    product => dispatch(receiveProduct(product))
  )
);

export const updateProduct = product => dispatch => (
  APIUtil.updateProduct(product).then(
    product => dispatch(receiveProduct(product))
  )
);

export const deleteProduct = id => dispatch => (
  APIUtil.deleteProduct(id).then(product => dispatch(removeProduct(product.id)))
);
