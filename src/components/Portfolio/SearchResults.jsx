import React, { useState } from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  return (
    <ul className="search-results-container">
      {results.map((stock) => (
        <li key={stock.id} className="search-result-item">
          {/* Use link if you are using a router like React Router */}
          <a href={`/stock/${stock.symbol}`}>{stock.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
