import React, { useState } from 'react';
import './Form.css'; // Add your styling here
import { useNavigate } from 'react-router-dom';

const FormOne = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    newScheme: ''
  });

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/beneusers/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      const respData = await response.json();
      console.log(respData);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // const result = await response.json();
      navigate('/');
      // setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="newScheme"
          value={formData.newScheme}
          onChange={handleChange}
          placeholder="Scheme Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormOne;
