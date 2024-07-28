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
      const response = await fetch('http://localhost:4000/api/beneusers/findOne', {
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
      console.log(result);
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
              <td>{item.contactno}</td>
              <td>{item.address}</td>
              <td>{item.pincode}</td>
              <td>{item.age}</td>
              <td>{item.inSchool}</td>
              <td>{item.isWorking}</td>
              <td>{ item.schemeName.length===0 ? <p>Pending</p> : item.schemeName}</td>
              <td>{item.aadhar}</td>
              <td>{item.ration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormTwo;
