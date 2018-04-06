import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup,clearError } from '../../actions/session_actions';
import RegisterForm from './register_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Register',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearError: () => dispatch(clearError()),
    closeModal: () => dispatch(closeModal()),
    loginForm: (
      <button className='register-button'
        onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    registerForm:
        <span>Register</span>,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
