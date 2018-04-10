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

  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    const products = this.props.products.map(
      product => {
        return (
          <ProductItem key={product.id} product={product}/>
        );
      });

    return (
    <div >
      <div className="category-bar">
        <Link to="">Automation Components</Link>
        <Link to="" >Fasteners</Link>
        <Link to="">Materials</Link>
        <Link to="">Wiring Components</Link>
        <Link to="">Processing Tools</Link>
        <Link to="">Electrical Components</Link>
      </div>
        <SimpleSlider/ >
      <div className='main'>
        <div >
          <strong className="slogan">Want to reduce downtime cost? Start from here!</strong>
        </div>
        <div className='product-index'>
          <ul className='product-index-items'>
            {products}
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default ProductIndex;
