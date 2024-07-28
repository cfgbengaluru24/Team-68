import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BeneficiaryForm from '../components/BeneficiaryForm';
import SchemeList from '../components/SchemeList';

const Dashboard = () => {
  const [schemes, setSchemes] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (formData) => {
    try {
      const response = await fetch('http://localhost:4000/api/schemes/schemes', {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const respData = await response.json();
      console.log("Response is:", respData);
  
      // Ensure respData.data is an array of schemes
      const finalData = Array.isArray(respData.data) ? respData.data : [];
  
      // Filter schemes based on formData
      const filteredSchemes = finalData.filter((scheme) => {
        const matchesAge = formData.age === '' || parseInt(scheme.ageLimit, 10) >= parseInt(formData.age, 10);
        const matchesGender = formData.gender === '' || scheme.gender.toLowerCase() === formData.gender.toLowerCase();
        //const matchesState = formData.state === '' || (scheme.state && scheme.state.toLowerCase() === formData.state.toLowerCase());
        const matchesSchemeType = formData.schemeType === '' || (scheme.tags && scheme.tags.toLowerCase() === formData.schemeType.toLowerCase());
  
        return matchesAge && matchesGender && matchesSchemeType;
      });
  
      console.log("Filtered Schemes:", filteredSchemes);
      setSchemes(filteredSchemes);
    } catch (error) {
      console.error('Error fetching or filtering schemes:', error);
    }
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
