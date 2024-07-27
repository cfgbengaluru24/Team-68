import React, { useState } from 'react';
import BeneficiaryForm from '../components/BeneficiaryForm';
import SchemeList from '../components/SchemeList';

const Dashboard = () => {
  const [schemes, setSchemes] = useState([]);
  const handleSearch = async (formData) => {
    const response = await fetch('http://localhost:4000/api/schemes/schemes', {
      method: 'GET',
    });

    const respData = await response.json();

    const filteredSchemes = respData.filter(scheme => {
      return (
        (formData.age === '' || scheme.age === formData.age) &&
        (formData.gender === '' || scheme.gender === formData.gender) &&
        (formData.state === '' || scheme.state.toLowerCase() === formData.state.toLowerCase()) &&
        (formData.schemeType === '' || scheme.schemeType.toLowerCase() === formData.schemeType.toLowerCase())
      );
    });
    console.log(filteredSchemes);
    setSchemes(filteredSchemes);
  };

  return (
    <div className="dashboard">
      <BeneficiaryForm onSearch={handleSearch} />
      <SchemeList schemes={schemes} />
    </div>
  );
};

export default Dashboard;
