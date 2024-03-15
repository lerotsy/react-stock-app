import React, { useState } from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results-container">
      {results.map((stock) => (
        <div key={stock.id} className="search-result-item">
          {/* Use link if you are using a router like React Router */}
          <a href={`/stock/${stock.symbol}`}>{stock.name}</a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;