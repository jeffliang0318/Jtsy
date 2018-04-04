import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util';
import configureStore from "./store/store";
import {receiveCurrentUser} from "./actions/session_actions";
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveCurrentUser = receiveCurrentUser;
  ReactDOM.render(<h1>Welcome to Jtsy</h1>, root);
});
