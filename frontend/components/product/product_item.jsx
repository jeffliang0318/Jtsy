import React from 'react';
import { Link } from 'react-router-dom';
import { currencyRound } from '../../util/helpers';

const ProductItem = ({ product }) => {
  return (
    <div>
      <li className='product-index-item'>
        <Link to={`/product/${product.id}`}>
          <div className='product-item-container'>
            <div className='product-item-info'>
              <img src={product.img_url} height="100"></img>
              <span className="item-des">
                <strong className="item-title">{product.title}</strong>
              </span>
            </div>
            <div className="price-index-page">
              <strong className="item-price">{currencyRound.format(product.price)}</strong>
            </div>
          </div>
        </Link>
      </li>
    </div>
  );
};
export default ProductItem;
