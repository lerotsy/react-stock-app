import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const searchUrl = `${baseUrl}/search/${encodeURIComponent(searchTerm)}`;

    try {
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
      onSearchResult(data); // Pass search results to the parent component
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-box">
      <input
        type="text"
        placeholder="Search stocks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBox;
