import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearError } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearError: () => dispatch(clearError()),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user)),
    loginForm: <span>Login</span>,
    registerForm: (
      <button className='signup-button'
        onClick={() => dispatch(openModal('signup'))}>
        Register
      </button>
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
