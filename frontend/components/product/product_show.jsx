import React from 'react';
import {withRouter} from 'react-router-dom';

class ProductShow extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.id);
  }

  render(){
    if (!this.props.product) return null;
    const {product, fetchProduct} = this.props;
    return(
      <div className='main-show'>
        <div className="left-column">
          <img src={product.img_url}/>
          <div className="description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="right-column">
          <div className="cart-info">
            <div className="product-info">
              <span className="title">Title{product.title}</span>
              <span className="price">${product.price}</span>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(ProductShow);
