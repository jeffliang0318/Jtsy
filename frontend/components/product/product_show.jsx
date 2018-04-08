import React from 'react';
import {withRouter} from 'react-router-dom';
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
  }
  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.id);
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
            <button>Add to Cart</button>
            <ProductDeleteContainer userId={this.props.product.user_id}
              productId={this.props.product.id}/>
            {(this.props.product.user_id)}
            {(this.props.product.id)}
            {Object.keys(this.props)}
          </div>
        </div>
      </div>
    )
  );
}

}

export default ProductShow;