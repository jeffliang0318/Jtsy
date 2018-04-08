import {connect} from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct, deleteProduct} from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.product[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);