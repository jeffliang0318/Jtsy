import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/session_actions";
import Cart from "./cart";
import { fetchShoppingCartItems, deleteShoppingCartItem } from "../../actions/shopping_cart_item_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.ui.session.currentUser,
    product: state.entities.product,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchShoppingCartItems: () => dispatch(fetchShoppingCartItems()),
  deleteShoppingCartItem: (id) => dispatch(deleteShoppingCartItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
