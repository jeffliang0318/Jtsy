import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search';

const Greeting = ({ currentUser, logout, openModal, login, titles, productId }) => {

  const sessionLinks = () => (
    <div>
    <nav className="nav-bar">
      <div className="left-nav">
        <Link to="/" className="header-link">
          <h1>Jtsy</h1>
        </Link>
        <div className="search-bar">
          <SearchContainer titles={titles} productId={productId}/>
        </div>
      </div>
      <div className="login-signup">
        <Link className="sell-link" to='/products/new'>
          Sell on Jtsy
        </Link>
        <button onClick={() => openModal('signup')}>Register</button>
        &nbsp;  &nbsp;
        <button
          onClick={() => login({email: "user@user.com", password: "123456"})}>
          DEMO</button>
        &nbsp;  &nbsp;
        <button className="sign-in-button" onClick={() => openModal('login')}>Sign in</button>
      </div>
    </nav>
      <div className="category-bar">
        <Link to="/category/automation">Automation Components</Link>
        <Link to="/category/fasteners" >Fasteners</Link>
        <Link to="/category/materials">Materials</Link>
        <Link to="/category/wiring">Wiring Components</Link>
        <Link to="/category/processing">Processing Tools</Link>
        <Link to="/category/electrical">Electrical Components</Link>
      </div>
    </div>
  );

  const personalGreeting = () => (
    <div>
      <nav className="nav-bar">
        <div className="left-nav">
          <Link to="/" className="header-link">
            <h1>Jtsy</h1>
          </Link>
          <div className="search-bar">
            <SearchContainer titles={titles} productId={productId}/>
          </div>
        </div>
        <div className="loogedIn-user">
          <Link className="sell-link" to='/products/new'>
            Sell on Jtsy
          </Link>
          <Link className="home-icon-link" to="/">
            <div className="home-icon">
              <i className="fa fa-home" aria-hidden="true"></i>
              <span>Home</span>
            </div>
          </Link>
          <Link className="user-icon-link" to={`/currentUser/${currentUser.id}`}>
            <div className="user-icon">
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              <span>You</span>
            </div>
          </Link>
          <button className="header-button" onClick={ () => logout() }>Log Out</button>
          <div className="cart-icon">
            <Link to={`/users/${currentUser.id}/cart`}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="category-bar">
        <Link to="/category/automation">Automation Components</Link>
        <Link to="/category/fasteners" >Fasteners</Link>
        <Link to="/category/materials">Materials</Link>
        <Link to="/category/wiring">Wiring Components</Link>
        <Link to="/category/processing">Processing Tools</Link>
        <Link to="/category/electrical">Electrical Components</Link>
      </div>
    </div>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
