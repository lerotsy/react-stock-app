import React, { useState, useEffect } from 'react';
import Login from './components/UserManagement/Login';
import Header from './components/UserManagement/Header';
import PortfolioOverview from './components/Portfolio/PortfolioOverview';
import AuthService from './components/UserManagement/AuthService';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [portfolioData, setPortfolioData] = useState([]);
  const [graphData, setGraphData] = useState([]);

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

  const hottestStocksData = [
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
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      // will integrate reall backend API later
      setPortfolioData(samplePortfolioData);
      setGraphData(sampleGraphData);
    }
  }, []);

  const handleLoginSuccess = () => {
    setCurrentUser(AuthService.getCurrentUser());
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
          <Header user={currentUser} onLogout={handleLogout} />
          <PortfolioOverview portfolioData={portfolioData} hottestStocksData={hottestStocksData} graphData={graphData} />
        </>
      ) : (
        <Login onLogin={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
