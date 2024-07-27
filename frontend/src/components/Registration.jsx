import React, { useState } from 'react';

const Registration = () => {
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

  // name, gender, contactno, address, pincode, age, ininSchool, isisWorking, schemeName , aadhar, ration

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle form submission logic

    const response = await fetch('http://localhost:4000/api/beneusers/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input type="text" name="contactno" value={formData.contactno} onChange={handleChange} placeholder="Contact No" />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pin Code" />
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="inSchool" value={formData.inSchool} onChange={handleChange} placeholder="inSchool" />
      <input type="text" name="isWorking" value={formData.isWorking} onChange={handleChange} placeholder="Working" />
      <input type="text" name="schemeName" value={formData.schemeName} onChange={handleChange} placeholder="Scheme Name" />
      <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Aadhar Card" />
      <input type="text" name="ration" value={formData.ration} onChange={handleChange} placeholder="Ration Card" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
