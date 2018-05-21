import React from "react";
import { connect } from "react-redux";
import { fetchSeller } from "../../actions/session_actions";
import { fetchProducts } from "../../actions/product_actions";
import SellerShow from "./seller_show";
import { fetchShoppingCartItems } from "../../actions/shopping_cart_item_actions";

const mapStateToProps = state => {
  return {
    seller: state.ui.seller,
    product: state.entities.product,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSeller: (id) => dispatch(fetchSeller(id)),
  fetchShoppingCartItems: () => dispatch(fetchShoppingCartItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(SellerShow);
