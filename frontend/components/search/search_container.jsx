import { connect } from 'react-redux';
import Search from './search';
import {fetchProducts} from '../../actions/product_actions';

const mapStateToProps = state => ({
  titles: Object.values(state.entities.product).map(product => product.title),
  productId: Object.values(state.entities.product).map(product => product.id),
});


const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
