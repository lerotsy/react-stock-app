import React, { useState } from 'react';
import './StockItem.css';
import StockDetailsModal from './StockDetailsModal.jsx';

const StockItem = ({ stock }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="stock-item" onClick={toggleModal}>
      <span className="stock-name">{stock.name}</span>
      <span className="stock-quantity">{stock.quantity} shares</span>
      <span className="stock-current-price">${stock.currentPrice.toFixed(2)}</span>
      <span className="stock-total-value">${(stock.currentPrice * stock.quantity).toFixed(2)}</span>
      <StockDetailsModal isOpen={isModalOpen} onRequestClose={toggleModal} stock={stock} />
    </div>
  );
};

export default StockItem;
