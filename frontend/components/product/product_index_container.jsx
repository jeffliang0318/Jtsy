import {connect} from 'react-redux';
import ProductIndex from './product_index';
import {fetchProducts} from '../../actions/product_actions';

const mapStateToProps = state => ({
  products: Object.values(state.entities.product),
});


const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
