import React from 'react';
import './StockDetailsModal.css';
import PerformanceGraph from '../PerformanceGraph/PerformanceGraph.jsx';
import StockOrder from './StockOrder.jsx';

const StockDetailsModal = ({ isOpen, onRequestClose, stock }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onRequestClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{stock.name}  ({stock.quantity} units)</h2>
        <div className="stock-details-modal">
          <PerformanceGraph data={stock.graphData} />
          <StockOrder stock={stock} />
        </div>

        <button onClick={onRequestClose}>Close</button>
      </div>
    </div>
  );
};

export default StockDetailsModal;
