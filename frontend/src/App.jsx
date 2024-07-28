import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Registration from './components/Registration';
import Admin from './pages/Admin';
import FormOne from './pages/FormOne'; // Import the new component
import FormTwo from './pages/FormTwo'; // Import the new component
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
          <Route path="/admin" element={<Admin />} />
          <Route path="/form-one" element={<FormOne />} /> {/* Add the new route */}
          <Route path="/form-two" element={<FormTwo />} /> {/* Add the new route */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
