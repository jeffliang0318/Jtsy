import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductDeleteContainer from './product_delete_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
class ProductShow extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = {
      id: null,
      items: []
    };
  }
  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.id);
    if (this.props.currentUser) {
      this.props.fetchShoppingCart(this.props.currentUser.id)
      .then( cart => this.setState(this.props.cart));
    }
  }

  handleDelete(e){
    e.preventDefault();
    this.props.removeProduct(this.props.product.id).then(
      this.props.history.push('/')
    );
  }
  handleAddToCart(e) {
    e.preventDefault();
    const productId = this.props.product.id;
    this.setState({id: this.props.currentUser.id ,items: [productId]}, () =>
    this.props.updateShoppingCart(this.state));
  }
  productDelete(){
    if (this.props.currentUser) {
      return (
        <ProductDeleteContainer userId={this.props.product.user_id}
          productId={this.props.product.id}
          handleDelete={this.handleDelete}
          />
      );
    }
  }
  addToCart(){
    if (this.props.currentUser) {
      if (this.props.currentUser.id !== this.props.product.user_id) {
        return (
          <button onClick={this.handleAddToCart}>Add to Cart</button>
        );
      }
    }
  }
  render(){
    return(
      (!this.props.product) ?
      <h1>...</h1> :
        (
      <div className='main-show'>
        <div className="left-column">
          <img className="product-img" src={this.props.product.img_url}/>
          <div className="description">
            <h2>Description</h2>
            <p>{this.props.product.description}</p>
          </div>
        </div>
        <div className="right-column">
          <div className="cart-info">
            <div className="product-info">
              <span className="title">Title{this.props.product.title}</span>
              <span className="price">${this.props.product.price}</span>
            </div>
            { this.addToCart() }
            { this.productDelete() }
            {(this.props.product.id)}
            {(this.props.product.user_id)}
          </div>
        </div>
      </div>
    )
  );
}
}

export default ProductShow;
