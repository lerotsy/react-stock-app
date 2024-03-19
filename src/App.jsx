import React, { useState, useEffect } from 'react';
import Login from './components/UserManagement/Login';
import Header from './components/UserManagement/Header';
import PortfolioOverview from './components/Portfolio/PortfolioOverview';
import AuthService from './components/UserManagement/AuthService';
import './App.css';
import SearchBox from './components/Portfolio/SearchBox';
import SearchResults from './components/Portfolio/SearchResults';

const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true';
const baseUrl = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [portfolioData, setPortfolioData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [hottestStocksData, setHottestStocksData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);


  const handleSearchResult = (results) => {
    setSearchResults(results);
  };
  // Mock portfolio data
  const samplePortfolioData = [
    {
      id: 1,
      name: "AAPL",
      quantity: 10,
      currentPrice: 150,
      graphData: [
        { date: "2023-01-01", value: 130 },
        { date: "2023-01-15", value: 140 },
        { date: "2023-02-01", value: 155 },
      ],
    },
    {
      id: 2,
      name: "MSFT",
      quantity: 15,
      currentPrice: 250,
      graphData: [
        { date: "2023-01-01", value: 230 },
        { date: "2023-01-15", value: 240 },
        { date: "2023-02-01", value: 265 },
      ],
    },
  ];

  const sampleHottestStocksData = [
    {
      id: 1,
      symbol: "TSLA",
      name: "Tesla Inc",
      currentPrice: 1020.50,
      priceIncrease: 20.50,
      percentageIncrease: 2.05,
    },
    {
      id: 2,
      symbol: "AMZN",
      name: "Amazon.com Inc",
      currentPrice: 3050.30,
      priceIncrease: 50.30,
      percentageIncrease: 1.67,
    },
  ];


  // fake data, will be fed from API in the future
  const sampleGraphData = [
    { date: "2023-01-01", value: 1000 },
    { date: "2023-01-08", value: 1200 },
    { date: "2023-01-14", value: 1140 },
    { date: "2023-01-18", value: 1240 },
    { date: "2023-02-01", value: 1500 },
  ];

  useEffect(() => {
    if (useMockData) {
      setPortfolioData(samplePortfolioData);
      setGraphData(sampleGraphData);
    } else {
      // Fetch Portfolio Data
      const fetchPortfolioData = async () => {
        try {
          const token = localStorage.getItem('token');
          // const response = await fetch(`${baseUrl}/portfolio-data`);
          const response = await fetch(`${baseUrl}/portfolio-data`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          if (!response.ok) throw new Error('Failed to fetch portfolio data');
          const data = await response.json();
          setPortfolioData(data);
        } catch (error) {
          console.error("Error fetching portfolio data:", error);
        }
      };

      // Fetch Stock History
      // const fetchGraphData = async () => {
      //   try {
      //     const response = await fetch(`${baseUrl}/stockHistory`);
      //     if (!response.ok) throw new Error('Failed to fetch stock history');
      //     const data = await response.json();
      //     setGraphData(data);
      //   } catch (error) {
      //     console.error("Error fetching stock history:", error);
      //   }
      // };

      if (currentUser) {
        fetchPortfolioData();
        // fetchGraphData();
      }
    }
  }, [currentUser, useMockData]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userDetails = JSON.parse(user);
      setCurrentUser(userDetails);
      // will integrate reall backend API later
      // setPortfolioData(samplePortfolioData);
      // setGraphData(sampleGraphData);
    }
  }, []);

  const handleLoginSuccess = (userDetails) => {
    // setCurrentUser(AuthService.getCurrentUser());
    setCurrentUser(userDetails);
    localStorage.setItem('user', JSON.stringify(userDetails));
    // Mock setting portfolio data on login
    setPortfolioData(samplePortfolioData);
    setGraphData(sampleGraphData);
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    // Clear portfolio data on logout
    setPortfolioData([]);
    setGraphData([]);
  };

  return (
    <div className="App">
      {currentUser ? (
        <>
          <Header user={currentUser.username} onLogout={handleLogout} />
          <SearchBox onSearchResult={handleSearchResult} />
          {searchResults.length > 0 ? ( // Conditional rendering based on search results
            <SearchResults results={searchResults} />
          ) : (<></>) }
          <PortfolioOverview portfolioData={portfolioData} hottestStocksData={sampleHottestStocksData} graphData={graphData} />
        </>
      ) : (
        <Login onLogin={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
