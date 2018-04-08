import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact, redirectModal }) => (
  <Route path={path} exact={exact} render={(props) => {
     if (loggedIn) {
      return <Component {...props} />;
    } else {
      redirectModal("login");
        return null;
    }
    }
  } />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.ui.session.currentUser)}
);

const mapDispatchToProps = dispatch => ({
  redirectModal: (modal) => dispatch(openModal(modal))
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));
