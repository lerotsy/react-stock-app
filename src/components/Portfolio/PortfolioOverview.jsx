import React from 'react';
import StockItem from './Stock/StockItem';
import PerformanceGraph from './PerformanceGraph/PerformanceGraph';
import './PortfolioOverview.css';

const PortfolioOverview = ({ portfolioData, hottestStocksData,  graphData }) => {
  return (
    <div className="portfolio-overview">
      <div className="stock-items-container">
        <div className="stock-items-wrapper">
          <h2>Portfolio Overview</h2>
          {portfolioData.map(stock => (
            <StockItem key={stock.id} stock={stock} />
          ))}
        </div>
      </div>
      <div className="performance-graph-container">
      {/*
        <PerformanceGraph data={graphData} />
        */}
      </div>
      <div className="hottest-stocks">
        <h2>Hottest Stocks</h2>
        {hottestStocksData.map(stock => (
          <StockItem key={stock.id} stock={stock} isHottestStock={true} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioOverview;
