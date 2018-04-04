
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
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
        <h1>Jtsy</h1>
      </Link>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
