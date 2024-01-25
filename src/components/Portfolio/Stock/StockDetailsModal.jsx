import React from 'react';
import './StockDetailsModal.css';
import PerformanceGraph from '../PerformanceGraph/PerformanceGraph.jsx';

const StockDetailsModal = ({ isOpen, onRequestClose, stock }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onRequestClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{stock.name} Performance</h2>
        <PerformanceGraph data={stock.graphData} />
        <button onClick={onRequestClose}>Close</button>
      </div>
    </div>
  );
};

export default StockDetailsModal;
