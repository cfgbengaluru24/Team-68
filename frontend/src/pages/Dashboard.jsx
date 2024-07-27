import React, { useState } from 'react';
import BeneficiaryForm from '../components/BeneficiaryForm';
import SchemeList from '../components/SchemeList';
import { searchSchemes } from '../services/api';

const Dashboard = () => {
  const [schemes, setSchemes] = useState([]);

  const handleSearch = async (formData) => {
    const response = await searchSchemes(formData);
    setSchemes(response.data);
  };

  return (
    <div className="dashboard">
      <BeneficiaryForm onSearch={handleSearch} />
      <SchemeList schemes={schemes} />
    </div>
  );
};

export default Dashboard;
