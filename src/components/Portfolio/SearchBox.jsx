import React, { useState, useEffect } from 'react';
import './SearchBox.css'; // Ensure your CSS file is updated accordingly

const SearchBox = ({ onSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // Fetch search results whenever searchTerm changes
  useEffect(() => {

    // debugger
    if (searchTerm && searchTerm.length > 2) {
      // alert(searchTerm);
      // Perform the search
      const performSearch = async () => {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const searchUrl = `${baseUrl}/stock/search/${encodeURIComponent(searchTerm)}`;

        try {
          // const response = await fetch(searchUrl);
          const token = localStorage.getItem('token');
          const response = await fetch(searchUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          debugger
          if (!response.ok) throw new Error('Search failed');
          const data = await response.json();
          onSearchResult(data);
        } catch (error) {
          console.error("Error during search:", error);
          onSearchResult([]); // Clear results on error
        }
      };

      const delayDebounceFn = setTimeout(() => {
        performSearch();
      }, 300); // Debounce the search to avoid too many API calls

      return () => clearTimeout(delayDebounceFn);
    } else {
      // Clear results if searchTerm is empty
      onSearchResult([]);
    }
  }, [
    searchTerm
    // ,onSearchResult
  ]);

  const clearSearch = () => {
    setSearchTerm('');
    onSearchResult([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search stocks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {searchTerm && (
        <button onClick={clearSearch} className="clear-search-button">
          &times;
        </button>
      )}
      <div className="search-results">
        { results.length> 0 && (
          <ul className="results">
          {results.length > 0 &&
            results.map((result) => (
              <li key={result.id} className="search-item">
                {result.name}
              </li>
            ))}
            </ul>
        )}

      </div>
    </div>
  );
};

export default SearchBox;
