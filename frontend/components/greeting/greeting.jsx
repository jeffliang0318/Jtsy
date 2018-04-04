import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;&nbsp;
    <Link to="/signup">Register</Link>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.name}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
