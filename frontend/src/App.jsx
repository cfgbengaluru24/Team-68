import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Registration from './components/Registration';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
