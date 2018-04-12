import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/session_actions";
import UserShow from "./user_show";
import { fetchShoppingCartItems } from "../../actions/shopping_cart_item_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.ui.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchShoppingCartItems: () => dispatch(fetchShoppingCartItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
