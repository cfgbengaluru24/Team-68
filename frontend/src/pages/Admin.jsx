import React, { useState } from 'react';
import './Admin.css'; // Import custom CSS for styling
import { useNavigate } from 'react-router-dom';
// import AdminHeader from '../components/AdminDash';

const Admin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tags: '',
    description: '',
    date: '',
    heading: '',
    endDate: '',
    ageLimit: '',
    gender: ''
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
    // handle form submission logic
    console.log(formData);
    const response = await fetch('http://localhost:4000/api/schemes/schemes', {
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
    <div className="admin-page">
      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
        <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Date" />
        <input type="text" name="heading" value={formData.heading} onChange={handleChange} placeholder="Heading" />
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" />
        <input type="number" name="ageLimit" value={formData.ageLimit} onChange={handleChange} placeholder="Age Limit" />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Common">Both</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
