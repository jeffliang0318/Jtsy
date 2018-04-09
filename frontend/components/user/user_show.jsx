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
    return(
      <div className="user-info">
        <div className="user-detail">
          <h1>Hi, {this.props.user.name}</h1>
          <h2>email: {this.props.user.email}</h2>
        </div>
        <div className="user-sell-products">
          <ul>
            { productItems }
          </ul>
        </div>
        <div className="cart">
        </div>
      </div>
    );
  }
}

export default UserShow;
