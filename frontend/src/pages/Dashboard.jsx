import React, { useState } from 'react';
import BeneficiaryForm from '../components/BeneficiaryForm';
import SchemeList from '../components/SchemeList';

const Dashboard = () => {
  const [schemes, setSchemes] = useState([]);

  const handleSearch = async (formData) => {
    const response = await fetch('http://localhost:4000/api/schemes/schemes', {
      method: 'GET',
    });
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
