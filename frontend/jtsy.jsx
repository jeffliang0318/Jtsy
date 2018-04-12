import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";
import {fetchProduct, createProduct} from "./actions/product_actions.js";
import { createShoppingCartItem } from "./actions/shopping_cart_item_actions.js";
document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { ui: {session: { currentUser: window.currentUser.user } } };
    store = configureStore(preloadedState);
    console.log(window.currentUser.user);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchProduct = fetchProduct;
  window.createShoppingCartItem = createShoppingCartItem;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
