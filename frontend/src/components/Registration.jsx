import React, { useState } from 'react';
import './Registration.css'; // Import custom CSS for styling

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    contactNo: '',
    address: '',
    pinCode: '',
    age: '',
    school: '',
    working: '',
    schemeName: '',
    aadharCard: '',
    rationCard: ''
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
    // handle form submission logic
    console.log(formData);
  };

  return (
    <div className="registration-page">
      <form onSubmit={handleSubmit} className="registration-form">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} placeholder="Contact No" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder="Pin Code" />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
        <input type="text" name="school" value={formData.school} onChange={handleChange} placeholder="School" />
        <input type="text" name="working" value={formData.working} onChange={handleChange} placeholder="Working" />
        <input type="text" name="schemeName" value={formData.schemeName} onChange={handleChange} placeholder="Scheme Name" />
        <input type="text" name="aadharCard" value={formData.aadharCard} onChange={handleChange} placeholder="Aadhar Card" />
        <input type="text" name="rationCard" value={formData.rationCard} onChange={handleChange} placeholder="Ration Card" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
