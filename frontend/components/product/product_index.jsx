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
                      Unique items
                  </div>
                  <div>We have many varieties of components that you can choose among.</div>
                </div>
                <div className="feature">
                  <div className="feature-title">
                    <i className="fa fa-check" aria-hidden="true"> </i>
                      Highest Quality
                  </div>
                  <div>Our return rate is 0%! Because their quality are too good.</div>
                </div>
                <div className="feature">
                  <div className="feature-title">
                    <i className="fa fa-check" aria-hidden="true"> </i>
                      Fastest Shipping
                  </div>
                  <div>Shipping starts when you click the check out button.</div>
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
