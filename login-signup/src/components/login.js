import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    companyName: '',
    clientID: '',
    clientSecret: '',
    ownerName: '',
    ownerEmail: '',
    rollNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request with formData
    fetch('http://20.244.56.144/test/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
      localStorage.setItem("token",data.access_token)
      // Handle response as needed
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name:</label><br />
        <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} /><br /><br />
        
        <label htmlFor="clientID">Client ID:</label><br />
        <input type="text" id="clientID" name="clientID" value={formData.clientID} onChange={handleChange} /><br /><br />
        
        <label htmlFor="clientSecret">Client Secret:</label><br />
        <input type="text" id="clientSecret" name="clientSecret" value={formData.clientSecret} onChange={handleChange} /><br /><br />
        
        <label htmlFor="ownerName">Owner Name:</label><br />
        <input type="text" id="ownerName" name="ownerName" value={formData.ownerName} onChange={handleChange} /><br /><br />
        
        <label htmlFor="ownerEmail">Owner Email:</label><br />
        <input type="email" id="ownerEmail" name="ownerEmail" value={formData.ownerEmail} onChange={handleChange} /><br /><br />
        
        <label htmlFor="rollNo">Roll No:</label><br />
        <input type="text" id="rollNo" name="rollNo" value={formData.rollNo} onChange={handleChange} /><br /><br />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;