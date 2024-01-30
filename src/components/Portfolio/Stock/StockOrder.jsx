import React, { useState } from 'react';
import './StockOrder.css';
import './StockDetailsModal';

const StockOrder = ({ stock }) => {
  const [orderType, setOrderType] = useState('buy');
  const [shares, setShares] = useState(0);

  const handleOrderTypeChange = (type) => {
    setOrderType(type);
  };

  const handleShareChange = (delta) => {
    setShares(Math.max(0, shares + delta)); // Prevent negative share count
  };

  const handleSubmit = () => {
    // will add backend logic lager
    console.log(`Order to ${orderType} ${shares} shares of ${stock.symbol}`);
  };

  return (
    <div className="order-form">
      <div className="order-type-toggle">
        <button
          onClick={() => handleOrderTypeChange('buy')}
          className={orderType === 'buy' ? 'active' : ''}
        >
          Buy
        </button>
        <button
          onClick={() => handleOrderTypeChange('sell')}
          className={orderType === 'sell' ? 'active' : ''}
        >
          Sell
        </button>
      </div>
      <div className="share-quantity">
        <button onClick={() => handleShareChange(1)}>+</button>
        <input type="text" value={shares} readOnly />
        <button onClick={() => handleShareChange(-1)}>-</button>
      </div>
      <button className='submit-order-button' onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default StockOrder;
