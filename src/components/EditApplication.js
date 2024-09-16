import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditApplication = () => {
  const { applicationId } = useParams(); // Get application ID from URL
  const [application, setApplication] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the existing application data
    fetch(`https://json-server-template-po0m.onrender.com/applications/${applicationId}`)
      .then(response => response.json())
      .then(data => {
        setApplication(data);
        setName(data.name || '');
        setEmail(data.email || '');
        setEducation(data.education || '');
        setWorkExperience(data.workExperience || ''); // Initialize as a string
        setDateOfBirth(data.dateOfBirth || '');
      })
      .catch((error) => console.log('Error fetching application:', error));
  }, [applicationId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedApplication = {
      ...application,
      name,
      email,
      education: education.substring(0, 50),
      workExperience: String(workExperience).substring(0, 200), // Ensure it's a string
      dateOfBirth
    };

    fetch(`https://json-server-template-po0m.onrender.com/applications/${applicationId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedApplication)
    })
      .then(response => response.json())
      .then(() => {
        setMessage('Application updated successfully!');
        navigate('/application-list'); // Redirect to the list of applications
      })
      .catch(() => setMessage('Error updating the application'));
  };

  if (!application) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="education" className="form-label">Education:</label>
          <input
            type="text"
            id="education"
            className="form-control"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            maxLength="50"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="workExperience" className="form-label">Work Experience:</label>
          <textarea
            id="workExperience"
            className="form-control"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
            maxLength="200"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            className="form-control"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Application</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EditApplication;
