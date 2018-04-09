import { fetchProduct, deleteProduct } from '../../actions/product_actions';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ProductDelete extends React.Component {
  render(){
    if (this.props.currentUserId === this.props.userId) {
      return (
        <div>
          <button onClick={ this.props.handleDelete }>
            Delete Product</button>
          <Link to={`/products/${this.props.productId}/edit`}>Update item</Link>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(ProductDelete);
