import React from 'react';
import { Link } from 'react-router-dom';
const Greeting = ({ currentUser, logout, openModal, login }) => {

  const sessionLinks = () => (
    <nav className="nav-bar">
      <div className="left-nav">
        <Link to="/" className="header-link">
          <h1>Jtsy</h1>
        </Link>
        <div className="search-bar">
          <input type="text"></input>
          <button className="search-button">Search</button>
        </div>
      </div>
      <div className="login-signup">
        <Link className="sell-link" to='/products/new'>
          Sell on Jtsy
        </Link>
        <button
          onClick={() => login({email: "user@user.com", password: "123456"})}>
          DEMO</button>
        &nbsp;  &nbsp;
        <button onClick={() => openModal('login')}>Login</button>
        &nbsp;  &nbsp;
        <button onClick={() => openModal('signup')}>Register</button>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
    </nav>
  );
  const personalGreeting = () => (
      <nav className="nav-bar">
        <div className="left-nav">
          <Link to="/" className="header-link">
            <h1>Jtsy</h1>
          </Link>
          <div className="search-bar">
            <input type="text"></input>
            <button className="search-button">Search</button>
          </div>
        </div>
        <div className="loogedIn-user">
          <Link className="sell-link" to='/products/new'>
            Sell on Jtsy
          </Link>
          <Link to={`/users/${currentUser.id}`}>
            <div className="user-icon">
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              <span>You</span>
            </div>
          </Link>
          <button className="header-button" onClick={logout}>Log Out</button>
          <div className="cart-icon">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>Cart</span>
          </div>
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
