import React from 'react';
import ProductItem from './product_item';
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
    <div className='main'>
      <div className='product-index'>
        <ul className='product-index-items'>
          {products}
        </ul>
      </div>
    </div>
    );
  }
}

export default ProductIndex;
