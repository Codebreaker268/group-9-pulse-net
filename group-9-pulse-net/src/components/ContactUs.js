// src/components/ContactUs.js
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to JSON format
    const jsonData = JSON.stringify(formData, null, 2);
    setSubmittedData(jsonData);

    // Clear the form
    setFormData({
      fullName: '',
      email: '',
      mobile: ''
    });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <pre>{submittedData}</pre>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
