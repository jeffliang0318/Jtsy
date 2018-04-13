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
    console.log("component did mount")

    this.props.fetchShoppingCartItems().then(() =>
      this.props.fetchUser(this.props.currentUser.id).then(() =>
        this.setState({load: false})
      )
    );
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
              <h3>Price for each: { this.props.product[itemId].price }</h3>
              <strong>Total {this.props.currentUser.total_price.price_per_item[itemId]} </strong>
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

      console.log(this.props.currentUser.product_ids)
      console.log(this.props.product)
    const productItems = this.props.currentUser.product_ids.map(productId =>
      <div className="each-item-in-user-show"key={productId}>
        <section>
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
        </section>
        <section className="sell-item-price-info">
          <span>Selling price for each item: {this.props.product[productId].price}</span>
        </section>
      </div>
    );

    return(
      <div className="user-info">
        <div className="user-detail">
          <h1>Hi, {this.props.currentUser.name}</h1>
          <h2>email: {this.props.currentUser.email}</h2>
        </div>
        <div className="products-and-carts">
          <div className="user-sell-products">
            <h3>Products to sell</h3>
            <span>{this.props.currentUser.product_ids.length} items in your shop</span>
            <ul className="products-for-sell">
              { productItems }
            </ul>
          </div>
        </div>
      </div>
    );
  }}
}

export default UserShow;
