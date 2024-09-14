import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Apply() {
  const [selectedJob, setSelectedJob] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !education || !workExperience || !dateOfBirth || !selectedJob) {
      setMessage('Please fill out all fields');
      return;
    }

    const application = {
      name,
      email,
      education,
      workExperience,
      dateOfBirth,
      jobId: selectedJob,
      status: 'submitted'
    };

    fetch('http://localhost:5000/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(application)
    })
      .then((response) => response.json())
      .then(() => {
        setMessage('Application submitted successfully!');
        // Clear form after submission
        setSelectedJob('');
        setName('');
        setEmail('');
        setEducation('');
        setWorkExperience('');
        setDateOfBirth('');
      })
      .catch(() => setMessage('Error submitting the application'));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Apply for a Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobSelect">Job:</label>
          <select
            id="jobSelect"
            className="form-control"
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
          >
            <option value="">Select a job</option>
            <option value="1">Legal Intern</option>
            <option value="2">Marketing Intern</option>
            <option value="3">IT Intern</option>
            <option value="4">Accountant</option>
            <option value="5">HR Intern</option>
            <option value="6">Finance Advisor</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="education">Education:</label>
          <input
            id="education"
            type="text"
            className="form-control"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="workExperience">Work Experience:</label>
          <input
            id="workExperience"
            type="text"
            className="form-control"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            id="dateOfBirth"
            type="date"
            className="form-control"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit Application</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
}

export default Apply;
