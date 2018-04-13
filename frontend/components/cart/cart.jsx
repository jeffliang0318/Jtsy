import React from "react";
import { withRouter } from "react-router-dom";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      load: true
    };
  }
  componentDidMount(){
    console.log("component did mount");

    this.props.fetchShoppingCartItems().then(() =>
      this.props.fetchUser(this.props.currentUser.id).then(() =>
        this.setState({load: false})
      )
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
              <h3>Price for each: ${ this.props.product[itemId].price }</h3>
              <strong>Quantity: {this.props.currentUser.total_price.price_per_item[itemId]/this.props.product[itemId].price}</strong>
              <strong>Total: ${this.props.currentUser.total_price.price_per_item[itemId]} </strong>
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
            <h3>{this.cart_items_quantity()} shopping cart items</h3>
            <ul className="cart-items">
              { this.cart() }
            </ul>
          </div>
        </div>
      </div>
    );
  }}
}

export default Cart;
