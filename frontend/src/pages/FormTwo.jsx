import React, { useState } from 'react';
import './Form.css'; // Add your styling here

const FormTwo = () => {
  const [formData, setFormData] = useState({
    phoneNumber: ''
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
      const response = await fetch('http://localhost:4000/api/schemes/details', {
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
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Pin Code</th>
            <th>Age</th>
            <th>School</th>
            <th>Working</th>
            <th>Scheme Name</th>
            <th>Aadhar Card</th>
            <th>Ration Card</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.address}</td>
              <td>{item.pinCode}</td>
              <td>{item.age}</td>
              <td>{item.school}</td>
              <td>{item.working}</td>
              <td>{item.schemeName}</td>
              <td>{item.aadharCard}</td>
              <td>{item.rationCard}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormTwo;
