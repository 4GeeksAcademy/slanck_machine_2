import React from 'react';
import './Card.css';

export default function Card({ product }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-name">{product.name}</h3>
        <p className="card-price">Price: {product.price}</p>
        <p className="card-quantity">Qty: {product.quantity}</p>
      </div>
    </div>
  );
}