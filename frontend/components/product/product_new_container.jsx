import { connect } from 'react-redux';
import React from 'react';
import { createProduct, clearError } from '../../actions/productions';

const mapStateToProps = state => ({
  erroes: state.errors.session,
  formType: "Create"
});

const mapDispatchToProps = dispatch => {
  return {
    productForm: product => dispatch(createProduct(createProduct)),
    clearError: () => dispatch(clearError()),
  };
};
