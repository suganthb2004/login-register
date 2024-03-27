import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    ownerEmail: "",
    rollNo: "",
    accessCode: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://20.244.56.144/test/register', formData);
      console.log("Registration successful:", response.data);
      // Handle successful registration
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration error
    }
  };

  return (
    <div>
      <h2>Register Company</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="ownerName">Owner Name:</label>
          <input type="text" id="ownerName" name="ownerName" value={formData.ownerName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="rollNo">Roll No:</label>
          <input type="text" id="rollNo" name="rollNo" value={formData.rollNo} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="ownerEmail">Owner Email:</label>
          <input type="email" id="ownerEmail" name="ownerEmail" value={formData.ownerEmail} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="accessCode">Access Code:</label>
          <input type="text" id="accessCode" name="accessCode" value={formData.accessCode} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;