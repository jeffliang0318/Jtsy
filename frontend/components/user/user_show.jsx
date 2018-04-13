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

    this.props.fetchShoppingCartItems().then(() =>
      this.props.fetchUser(this.props.currentUser.id).then(() =>
        this.setState({load: false})
      )
    );
  }

  productCheck() {

  }
  render(){
    if (this.state.load) {
      return null;
    } else {

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
