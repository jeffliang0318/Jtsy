import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct, deleteProduct } from '../../actions/product_actions';
import { fetchSeller } from '../../actions/session_actions';
import {
  fetchShoppingCartItem,
  fetchShoppingCartItems,
  createShoppingCartItem,
  deleteShoppingCartItem
 } from "../../actions/shopping_cart_item_actions";
const mapStateToProps = (state, ownProps) => ({
  product: state.entities.product[ownProps.match.params.id],
  currentUser: state.ui.session.currentUser,
  cart: state.entities.shoppingCart,
  seller: state.ui.seller
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  fetchSeller: (id) => dispatch(fetchSeller(id)),
  fetchShoppingCartItems: () => dispatch(fetchShoppingCartItems()),
  deleteShoppingCartItem: id => dispatch(deleteShoppingCartItem(id)),
  createShoppingCartItem: item => dispatch(createShoppingCartItem(item)),
  removeProduct: id => dispatch(deleteProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
