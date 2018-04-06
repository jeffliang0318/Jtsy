import React from 'react';
import { Link } from 'react-router-dom';


const ProductItem = ({ product }) => {
  return (
    <li className='product-index-item'>
      <Link to={`/product/${product.id}`}>
        <img src={product.img_url} height="100"></img>
        <span className="item-des">
          <strong>{product.title}</strong>
          <strong>${product.price}</strong>
        </span>
      </Link>
    </li>);
};
export default ProductItem;
