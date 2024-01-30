# Stock Portfolio Management App - Frontend

This is the frontend portion of a stock portfolio management application. It provides an interface for users to interact with their portfolio, view market trends, and execute trades. Currently, the data presented is simulated and hardcoded for demonstration purposes. The backend API, responsible for actual data processing and storage, is planned to be developed and maintained in a separate repository at a later stage.


## Features

- **Authentication**: Simulated user authentication for demonstration purposes.
- **Hottest Stocks**: Displays stocks with the highest percentage increase for the day. The selection algorithm will be implemented in the backend at a later stage.
- **Graphs**: Visual representation of stock performance over time.
- **Buy/Sell Capability**: Interface for placing buy or sell stock orders. Actual trading functionality will be integrated once the backend is developed.

## Technologies Used

- **ReactJs**: Version 18.2.0.
- **Recharts**: Version 2.10.4 (A charting library I use for the graphs).

## Setup and Installation

Clone the repository and install the dependencies to run the app locally.

```bash
git clone https://github.com/your-username/stock-portfolio-app.git
cd stock-portfolio-app
npm install
npm start
```

The project should be running at http://localhost:3000/