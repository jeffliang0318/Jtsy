import React from "react";
import { withRouter } from "react-router-dom";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

class UserShow extends React.Component {
  componentDidMount(){
    this.props.fetchUser(this.props.user.id);
    this.props.fetchShoppingCartItems();
  }
  totalPrice(){
    let total = 0;
    this.props.priceItem.forEach(function(item) {
      total += item.quantity * item.price;
    });
    return total;
  }
  render(){
    const productItems = this.props.products.map(product =>
      <div key={product.id}>
        <Link to={`/product/${product.id}`}
          className="sell-item">
          <li>
            <img src={product.img_url}>
            </img>
            <span>
              {product.title}
            </span>
          </li>
        </Link>
      </div>
    );

    const cartItems = this.props.cartItems.map(item =>
      <div key={item.id}>
        <Link to={`/product/${item.id}`}
          className="sell-item">
          <li>
            <img src={item.img_url}>
            </img>
            <span>
              {item.title}
            </span>
          </li>
        </Link>
      </div>
    );

    return(
      <div className="user-info">
        <div className="user-detail">
          <h1>Hi, {this.props.user.name}</h1>
          <h2>email: {this.props.user.email}</h2>
        </div>
        <div className="products-and-carts">
          <div className="user-sell-products">
            <h3>Products for sell</h3>
            <ul className="products-for-sell">
              { productItems }
            </ul>
          </div>
          <div className="cart">
            <h3>Shopping cart items</h3>
            <ul className="cart-items">
              { cartItems }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
