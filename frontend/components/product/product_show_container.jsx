import {connect} from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct, deleteProduct} from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.product[ownProps.match.params.id],
  currentUser: state.ui.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id)),
  removeProduct: id => dispatch(deleteProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
