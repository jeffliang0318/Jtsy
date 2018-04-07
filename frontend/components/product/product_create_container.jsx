import { connect } from 'react-redux';
import React from 'react';
import { createProduct, clearError } from '../../actions/product_actions';
import { openModal } from '../../actions/modal_actions';
import ProductCreate from "./product_create";

const mapStateToProps = (state) => ({
  errors: state.errors.product,
  formType: "Create product for sell",
  loggedIn: Boolean(state.ui.session.currentUser),
  currentUser: state.ui.session.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    productForm: product => dispatch(createProduct(product)),
    clearError: () => dispatch(clearError()),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate);
