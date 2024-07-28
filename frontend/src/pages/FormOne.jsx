import React, { useState } from 'react';
import './Form.css'; // Add your styling here

const FormOne = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    newScheme: ''
  });

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
      const response = await fetch('http://localhost:5173/api/beneusers/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result.data);
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Schemes Availed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.schemeName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormOne;
