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
      console.log("Response is : ", respData);
  
      // Assuming respData.data is an array of schemes
      const finalData = respData.data || [];
      console.log("Form Data:", formData);
      console.log("Scheme Data:", finalData);
      
      // Filter schemes based on formData
      const filteredSchemes = finalData.filter((scheme) => {
        return (
          (formData.age === '' || scheme.age <= parseInt(formData.age, 10)) &&
          (formData.gender === '' || scheme.gender === formData.gender) &&
          (formData.state === '' || scheme.state.toLowerCase() === formData.state.toLowerCase()) &&
          (formData.schemeType === '' || scheme.tags.toLowerCase() === formData.schemeType.toLowerCase())
        );
      });
  
      console.log(filteredSchemes);
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
