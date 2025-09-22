import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price, status }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default ProductCard;
