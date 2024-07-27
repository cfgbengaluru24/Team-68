import React, { useState } from 'react';

const BeneficiaryForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    state: '',
    schemeType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Both">Both</option>
      </select>
      {/* <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" /> */}
      <input type="text" name="schemeType" value={formData.schemeType} onChange={handleChange} placeholder="Scheme Type" />
      <button type="submit">Search Schemes</button>
    </form>
  );
};

export default BeneficiaryForm;
