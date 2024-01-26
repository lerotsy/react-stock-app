import React from 'react';
import './StockItem.css';

const StockItem = ({ stock }) => {
  return (
    <div className="stock-item">
      <span className="stock-name">{stock.name}</span>
      <span className="stock-quantity">{stock.quantity} shares</span>
      <span className="stock-current-price">${stock.currentPrice.toFixed(2)}</span>
      <span className="stock-total-value">${(stock.currentPrice * stock.quantity).toFixed(2)}</span>
    </div>
  );
};

export default StockItem;
