import React from 'react';
import StockItem from './StockItem/StockItem';
import PerformanceGraph from './PerformanceGraph/PerformanceGraph';
import './PortfolioOverview.css';

const PortfolioOverview = ({ portfolioData, graphData }) => {
  return (
    <div className="portfolio-overview">
      <h2>Portfolio Overview</h2>
      <div className="stock-items">
        {portfolioData.map(stock => (
          <StockItem key={stock.id} stock={stock} />
        ))}
      </div>
      <PerformanceGraph data={graphData} />
    </div>
  );
};

export default PortfolioOverview;
