import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BeneficiaryForm from '../components/BeneficiaryForm';
import SchemeList from '../components/SchemeList';
import './Dashboard.css';

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
  
      const finalData = Array.isArray(respData.data) ? respData.data : [];
  
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
  

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      
      <div className="beneficiary-form">
        <BeneficiaryForm onSearch={handleSearch} />
      </div>
      <div className="navigation-buttons">
        <button onClick={() => handleNavigate('/registration')}>Go to Registration</button>
        <button onClick={() => handleNavigate('/form-one')}>Update availed schemes</button>
        <button onClick={() => handleNavigate('/form-two')}>Beneficiary Details</button>
      </div>
      <SchemeList schemes={schemes} />
    </div>
  );
};

export default Dashboard;


