
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
import Footer from './greeting/footer';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from './product/product_show_container';
import CategoryContainer from './product/category_container';
import ProductCreateContainer from './product/product_create_container';
import ProductEditContainer from './product/product_edit_container';
import UserShowContainer from './user/user_show_container';
import SearchContainer from './search/search_container';
import CartContainer from './cart/cart_container';
const App = () => (
  <div className="whole-app">
    <div className="Not-Footer">
      <Modal />
      <header>
        <GreetingContainer />
      </header>
      <Switch>
        <Route exact path="/" component={ProductIndexContainer}/>
        <Route exact path="/product/:id" component={ProductShowContainer}/>
        <Route exact path="/category/:category" component={ CategoryContainer }/ >
          <ProtectedRoute exact path="/products/new"
            component={ ProductCreateContainer }/>
          <ProtectedRoute exact path="/products/:id/edit"
            component={ ProductEditContainer }/>
          <Route exact path="/users/:id/cart" component={ CartContainer }/ >
            <ProtectedRoute exact path="/users/:id" component={UserShowContainer}/>
            <Redirect to="/"/>
          </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
