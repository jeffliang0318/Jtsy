import React from 'react';
import ProductItem from './product_item';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SimpleSlider from "../slideshow/simpleslider";
class ProductIndex extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      load: true
    };
  }
  componentDidMount(){
    this.props.fetchProducts().then(() =>
  this.setState({load: false}));
  }

  render(){
    if (this.state.load) {
      return (
        <h1>LOADING...</h1>
      );
    } else {
      const products = this.props.products.map(
        product => {
          return (
            <ProductItem key={product.id} product={ product }/>
          );
        });

        return (
          <div >
            <SimpleSlider/ >
              <div className='main'>
                <div >
                  <strong className="slogan">Want to reduce downtime cost? Start here!</strong>
                </div>
                <div className='product-index'>
                  <ul className='product-index-items'>
                    { products }
                  </ul>
                </div>
              </div>
            </div>
          );
    }
  }
}

export default ProductIndex;
