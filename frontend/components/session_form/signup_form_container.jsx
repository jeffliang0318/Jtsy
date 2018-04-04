import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
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
    closeModal: () => dispatch(closeModal()),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Login
      </button>
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
