import { connect } from 'react-redux';
import React from 'react';
import { createProduct, clearError, fetchProducts
} from '../../actions/product_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/session_actions';
import ProductCreate from "./product_create";

const mapStateToProps = (state) => ({
  errors: state.errors.product,
  formType: "Save and continue",
  loggedIn: Boolean(state.ui.session.currentUser),
  currentUser: state.ui.session.currentUser.user
});

const mapDispatchToProps = dispatch => {
  return {
    productForm: product => dispatch(createProduct(product)),
    clearError: () => dispatch(clearError()),
    openModal: modal => dispatch(openModal(modal)),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate);
