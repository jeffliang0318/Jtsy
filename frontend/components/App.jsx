import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Jtsy</h1>
      </Link>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
