import React from "react";
import { withRouter } from "react-router-dom";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { currencyRound } from '../../util/helpers';

class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      load: true
    };
  }
  componentDidMount(){

    this.props.fetchShoppingCartItems().then(() =>
      this.props.fetchUser(this.props.currentUser.id).then(() =>
        this.setState({load: false})
      )
    );
  }
  handleDelete(id){
    this.props.deleteShoppingCartItem(id).then(
      this.props.history.push(`/product/${id}`)
    );
  }
  cart_items_quantity() {
    const quantity = Object.keys(this.props.currentUser.shopping_cart_items).length;
    return quantity;
  }

  cart() {
    if (this.state.load) {
      return null;
    } else {
      return(
        this.props.currentUser.shopping_cart_items.map(itemId =>
          <div key={itemId}>
            <Link to={`/product/${itemId}`}
              className="sell-item">
              <li>
                <div className="cart-item-img-title">
                  <img src={this.props.product[itemId].img_url}>
                  </img>
                  <span>
                    {this.props.product[itemId].title}
                  </span>
                </div>
              </li>
            </Link>
            <div className="price-info">
              <h3>Price for each: { currencyRound.format(this.props.product[itemId].price) }</h3>
              <strong>Quantity: {this.props.currentUser.total_price.price_per_item[itemId]/this.props.product[itemId].price}</strong>
              <strong>Total: { currencyRound.format(this.props.currentUser.total_price.price_per_item[itemId])} </strong>
              <button className="remove-cart-item" onClick={ () => this.props.deleteShoppingCartItem(this.handleDelete(itemId))}>Remove</button>
            </div>
          </div>
        )
      );
    }
  }
  productCheck() {

  }
  render(){
    if (this.state.load) {
      return null;
    } else {
    const productItems = this.props.currentUser.product_ids.map(productId =>
      <div key={productId}>
        <Link to={`/product/${productId}`}
          className="sell-item">
          <li>
            <img src={this.props.product[productId].img_url}>
            </img>
            <span>
              {this.props.product[productId].title}
            </span>
          </li>
        </Link>
      </div>
    );

    return(
      <div className="user-info">
        <div className="user-detail">
        </div>
        <div className="products-and-carts">
          <div className="cart">
            <h3>{this.cart_items_quantity()} items in your cart</h3>
            <ul className="cart-items">
              { this.cart() }
            </ul>
          </div>
          <div className="check-out-section">
            <div className="check-out-box">
              <div className="cart-total-price">
              </div>
              <div className="check-out-button">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }}
}

export default Cart;
