import { connect } from 'react-redux';
import { fetchProduct, updateProduct, clearError } from '../../actions/product_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';
import productUpdate from './product_edit';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.product,
  formType: "Save and continue",
  loggedIn: Boolean(state.ui.session.currentUser),
  currentUser: state.ui.session.currentUser,
  product: state.entities.product[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  updateProduct: data => dispatch(updateProduct(data)),
  fetchProduct: id => dispatch(fetchProduct(id)),
  clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(productUpdate);
