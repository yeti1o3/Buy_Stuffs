/* eslint-disable react/prop-types */
import {Rating } from '@mui/material';

const Product = ({ product }) => {
  return (
    <div className="product-card">
  <img className="product-image" src={product.thumbnail} alt="Product image"/>
  <div className="product-info">
    <h3 className="product-title">{product.title}</h3>
    <p className="product-price">${product.price}</p>
    <div className="product-rating">
      <Rating value={product.rating} readOnly/>
    </div>
  </div>
</div>
  );
};

export default Product;