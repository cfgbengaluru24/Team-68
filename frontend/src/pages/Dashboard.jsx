import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BeneficiaryForm from '../components/BeneficiaryForm';
import SchemeList from '../components/SchemeList';
import { searchSchemes } from '../services/api';

const Dashboard = () => {
  const [schemes, setSchemes] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (formData) => {
    const response = await searchSchemes(formData);
    setSchemes(response.data);
  };

  const handleNavigate = () => {
    navigate('/registration');
  };

  return (
    <div className="dashboard">
      <BeneficiaryForm onSearch={handleSearch} />
      <button onClick={handleNavigate}>Go to Registration</button>
      <SchemeList schemes={schemes} />
    </div>
  );
};

export default Dashboard;
