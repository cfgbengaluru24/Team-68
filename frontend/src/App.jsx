import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
