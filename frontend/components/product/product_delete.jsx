import { fetchProduct, deleteProduct } from '../../actions/product_actions';
import React from 'react';
import {withRouter} from 'react-router-dom';

class ProductDelete extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount(){
    this.props.fetchProduct(this.props.productId);
  }
  handleDelete(e){
    e.preventDefault();
    const id = this.props.productId;
    this.props.removeProduct(id).then(() =>
    this.props.history.push('/'));
  }

  render(){
    if (this.props.currentUserId === this.props.userId) {
      return (
        <div>
          <button onClick={ this.handleDelete }>
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
