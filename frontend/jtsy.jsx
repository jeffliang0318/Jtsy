import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";
import {fetchProducts, createProduct} from "./actions/product_actions.js";
document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchProducts = fetchProducts;
  window.createProduct = createProduct;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
