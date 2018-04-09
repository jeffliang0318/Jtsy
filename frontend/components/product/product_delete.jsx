import { fetchProduct, deleteProduct } from '../../actions/product_actions';
import React from 'react';
import {withRouter} from 'react-router-dom';

class ProductDelete extends React.Component {
  render(){
    if (this.props.currentUserId === this.props.userId) {
      return (
        <div>
          <button onClick={ this.props.handleDelete }>
            Delete Product</button>
          <h3>productId{this.props.productId}</h3>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(ProductDelete);
