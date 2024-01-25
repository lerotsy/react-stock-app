import React from 'react';
import StockItem from './Stock/StockItem';
import PerformanceGraph from './PerformanceGraph/PerformanceGraph';
import './PortfolioOverview.css';

const PortfolioOverview = ({ portfolioData, graphData }) => {
  return (
    <div className="portfolio-overview">
      <div className="stock-items-container">
        <div class="stock-items-wrapper">
          <h2>Portfolio Overview</h2>
          {portfolioData.map(stock => (
            <StockItem key={stock.id} stock={stock} />
          ))}
        </div>
      </div>
      <div className="performance-graph-container">
        <PerformanceGraph data={graphData} />
      </div>
    </div>
  );
};

export default PortfolioOverview;
