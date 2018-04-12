
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from './product/product_show_container';
import ProductCreateContainer from './product/product_create_container';
import ProductEditContainer from './product/product_edit_container';
import UserShowContainer from './user/user_show_container';
import SearchContainer from './search/search_container';
const App = () => (
  <div>
    <Modal />
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/" component={ProductIndexContainer}/>
      <Route exact path="/product/:id" component={ProductShowContainer}/>
      <ProtectedRoute exact path="/products/new"
        component={ ProductCreateContainer }/>
      <ProtectedRoute exact path="/products/:id/edit"
          component={ ProductEditContainer }/>
      <ProtectedRoute exact path="/users/:id" component={UserShowContainer}/>
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;
