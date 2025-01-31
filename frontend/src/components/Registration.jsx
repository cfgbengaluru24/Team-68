import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Import custom CSS for styling

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    contactno: '',
    address: '',
    pincode: '',
    age: 0,
    inSchool: '',
    isWorking: '',
    aadhar: '',
    ration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await fetch('http://localhost:4000/api/beneusers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    console.log(result);

    navigate('/');
  };

  return (
    <div className="registration-page">
      <form onSubmit={handleSubmit} className="registration-form">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Common">Common</option>
        </select>
        <input type="text" name="contactno" value={formData.contactno} onChange={handleChange} placeholder="Contact No" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pin Code" />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
        <input type="text" name="inSchool" value={formData.inSchool} onChange={handleChange} placeholder="In School" />
        <input type="text" name="isWorking" value={formData.isWorking} onChange={handleChange} placeholder="Working" />
        <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Aadhar Card" />
        <input type="text" name="ration" value={formData.ration} onChange={handleChange} placeholder="Ration Card" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
