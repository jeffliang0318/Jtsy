import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct, deleteProduct } from '../../actions/product_actions';
import { updateShoppingCart, fetchShoppingCart } from "../../actions/shopping_cart_item_actions";
const mapStateToProps = (state, ownProps) => ({
  product: state.entities.product[ownProps.match.params.id],
  currentUser: state.ui.session.currentUser,
  cart: state.entities.shoopingCart
});

const mapDispatchToProps = dispatch => ({
  fetchShoppingCart: id => dispatch(fetchShoppingCart(id)),
  fetchProduct: id => dispatch(fetchProduct(id)),
  removeProduct: id => dispatch(deleteProduct(id)),
  updateShoppingCart: cart => dispatch(updateShoppingCart(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
