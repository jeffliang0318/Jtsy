import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/session_actions";
import UserShow from "./user_show";
import { fetchShoppingCartItems } from "../../actions/shopping_cart_item_actions";

const mapStateToProps = state => {
  return {
    products: Object.values(state.ui.session.currentUser.products),
    priceItem: Object.values(state.ui.session.currentUser.shopping_cart_items),
    user: state.ui.session.currentUser,
    cartItems: Object.values(state.entities.shoppingCart.products)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchShoppingCartItems: () => dispatch(fetchShoppingCartItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
