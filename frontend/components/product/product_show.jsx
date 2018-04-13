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
      cart_id: null,
      product_id: null,
      quantity: null,
      totalPrice: null
    };
  }
  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.id);
    if (this.props.currentUser) {
      this.props.fetchShoppingCartItems();
    }
  }

  handleDelete(e){
    e.preventDefault();
    this.props.removeProduct(this.props.product.id).then(
      this.props.history.push(`/`)
    );
  }
  handleAddToCart(e) {
    if (this.props.currentUser) {
      e.preventDefault();
      const productId = this.props.product.id;
      this.setState({cart_id: this.props.currentUser.shopping_cart_id ,
        product_id: this.props.product.id, quantity: 1, price: this.props.price }, () =>
        this.props.createShoppingCartItem(this.state).then(() =>
        this.props.history.push(`/users/${this.props.currentUser.id}/cart`)
      )
      );
    }
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
          <div className="add-to-cart-button">
            <button onClick={this.handleAddToCart}>Add to Cart</button>
          </div>
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
          <div className="sell-item-description">
            <h2>Component Detail</h2>
            <p>{this.props.product.description}</p>
          </div>
        </div>
        <div className="right-column">
          <div className="cart-info">
            <div className="product-info">
              <span className="title">{this.props.product.title}</span>
              <span className="price">${this.props.product.price}</span>
            </div>
            { this.addToCart() }
            { this.productDelete() }
            <div className="shipping-detail">
              <p>Shipping & returns</p>
              <br />
                <li>Ready to ship in 3-5 days.</li>
                <li>Made in Japan.</li>
                <li>Exceptions may apply. See return policy</li>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
}

export default ProductShow;
