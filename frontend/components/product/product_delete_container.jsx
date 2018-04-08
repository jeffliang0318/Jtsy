import { connect } from 'react-redux';
import { fetchProduct, deleteProduct } from '../../actions/product_actions';
import React from 'react';
import {withRouter} from 'react-router-dom';
import productDelete from './product_delete';


const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.ui.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  removeProduct: id => dispatch(deleteProduct(id)),
  fetchProduct: id => dispatch(fetchProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(productDelete);
