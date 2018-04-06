import React from 'react';

class ProductIndex extends React.Component {

  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    const products = this.props.products.map(product => {
      return (
        <h3>{product.img_url}</h3>
      );
    });

    return (
      <div>
        <ul>
          TEEHEE
          {products}
        </ul>
      </div>
    );
  }
}

export default ProductIndex;
