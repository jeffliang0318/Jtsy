import {connect} from 'react-redux';
import Category from './category';
import {fetchCategory} from '../../actions/product_actions';

const mapStateToProps = state => ({
  products: Object.values(state.entities.product),
});


const mapDispatchToProps = dispatch => ({
  fetchCategory: category => dispatch(fetchCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
