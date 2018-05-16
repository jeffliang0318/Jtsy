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
        <div className="lds-ripple"><div></div><div></div></div>
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
                <div className='slogan-div'>
                  <strong className="slogan">Want to reduce downtime cost? Start here!</strong>
                </div>
                <div className="feature-container">
                <div className="feature">
                  <div className="feature-title">
                    <i className="fa fa-check" aria-hidden="true"> </i>
                      Lowest Price
                  </div>
                  <div>We have many varieties of food that you can choose among.</div>
                </div>
                <div className="feature">
                  <div className="feature-title">
                    <i className="fa fa-check" aria-hidden="true"> </i>
                      Highest Quality
                  </div>
                  <div>Buy food that is handcrafted from people who put their soul into the food.</div>
                </div>
                <div className="feature">
                  <div className="feature-title">
                    <i className="fa fa-check" aria-hidden="true"> </i>
                      Fastest Shipping
                  </div>
                  <div>We use a secure transaction with our latest technological advancements.</div>
                </div>
              </div>

                <hr></hr>
                <div className='slogan-div'>
                  <strong className="slogan">Most sold products!</strong>
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
