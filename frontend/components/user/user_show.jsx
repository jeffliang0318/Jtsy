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
  constructor(props){
    super(props);
    this.state = {
      load: true
    };
  }
  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.user.id);
    this.props.fetchShoppingCartItems().then(() =>
    this.setState({load: false})
  );
  }

  cart() {
    if (this.state.load) {
      return null;
    } else {
      return(
        this.props.currentUser.user.shopping_cart_items.map(itemId =>
          <div key={itemId}>
            <Link to={`/product/${itemId}`}
              className="sell-item">
              <li>
                <img src={this.props.currentUser.products[itemId].img_url}>
                </img>
                <span>
                  {this.props.currentUser.products[itemId].title}
                </span>
                <h3>{}</h3>
              </li>
            </Link>
          </div>
        )
      );
    }
  }

  render(){
    if (this.state.load) {
      return null;
    } else {
    const productItems = this.props.currentUser.user.product_ids.map(productId =>
      <div key={productId}>
        <Link to={`/product/${productId}`}
          className="sell-item">
          <li>
            <img src={this.props.currentUser.products[productId].img_url}>
            </img>
            <span>
              {this.props.currentUser.products[productId].title}
            </span>
          </li>
        </Link>
      </div>
    );

    return(
      <div className="user-info">
        <div className="user-detail">
          <h1>Hi, {this.props.currentUser.user.name}</h1>
          <h2>email: {this.props.currentUser.user.email}</h2>
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
              { this.cart() }
            </ul>
          </div>
        </div>
      </div>
    );
  }}
}

export default UserShow;
