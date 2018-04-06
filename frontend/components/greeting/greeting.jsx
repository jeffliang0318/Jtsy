import React from 'react';
const Greeting = ({ currentUser, logout, openModal, login }) => {

  const sessionLinks = () => (
    <nav className="nav-bar">
      
      <div className="login-signup">
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
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.name}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
