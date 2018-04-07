import React from 'react';
import { Link } from 'react-router-dom';
const Greeting = ({ currentUser, logout, openModal, login }) => {

  const sessionLinks = () => (
    <nav className="nav-bar">
      <Link to="/" className="header-link">
        <h1>Jtsy</h1>
      </Link>
      <div className="login-signup">
        <Link className="sell-link" to='/products'>
          Sell on Jtsy
        </Link>
        <button
          onClick={() => login({email: "user@user.com", password: "123456"})}>
          DEMO</button>
        &nbsp;  &nbsp;
        <button onClick={() => openModal('login')}>Login</button>
        &nbsp;  &nbsp;
        <button onClick={() => openModal('signup')}>Register</button>
      </div>
    </nav>
  );
  const personalGreeting = () => (
      <nav className="nav-bar">
        <Link to="/" className="header-link">
          <h1>Jtsy</h1>
        </Link>
        <div className="loogedIn-user">
          <Link className="sell-link" to='/products'>
            Sell on Jtsy
          </Link>
          <h2 className="header-name">Hi, {currentUser.name}!</h2>
          <button className="header-button" onClick={logout}>Log Out</button>
        </div>
      </nav>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
