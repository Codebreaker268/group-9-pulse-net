import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './Apply.css';

function Apply() {
  const [selectedJob, setSelectedJob] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [educationList, setEducationList] = useState(['']);
  const [workExperienceList, setWorkExperienceList] = useState(['']);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [message, setMessage] = useState('');

  const handleAddEducation = () => {
    setEducationList([...educationList, '']);
  };

  const handleEducationChange = (index, value) => {
    const newList = [...educationList];
    newList[index] = value;
    setEducationList(newList);
  };

  const handleRemoveEducation = (index) => {
    const newList = educationList.filter((_, i) => i !== index);
    setEducationList(newList);
  };

  const handleAddWorkExperience = () => {
    setWorkExperienceList([...workExperienceList, '']);
  };

  const handleWorkExperienceChange = (index, value) => {
    const newList = [...workExperienceList];
    newList[index] = value;
    setWorkExperienceList(newList);
  };

  const handleRemoveWorkExperience = (index) => {
    const newList = workExperienceList.filter((_, i) => i !== index);
    setWorkExperienceList(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !educationList.length || !workExperienceList.length || !dateOfBirth || !selectedJob) {
      setMessage('Please fill out all fields');
      return;
    }

    const application = {
      name,
      email,
      education: educationList,
      workExperience: workExperienceList,
      dateOfBirth,
      jobId: selectedJob,
      status: 'submitted'
    };

    fetch('https://json-server-template-po0m.onrender.com/applications', {
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
        setEducationList(['']);
        setWorkExperienceList(['']);
        setDateOfBirth('');
      })
      .catch(() => setMessage('Error submitting the application'));
  };

  return (
    <div className="apply-container mt-5">
      <h2 className="apply-heading mb-4">Apply for a Job</h2>
      <form onSubmit={handleSubmit} className="apply-form">
        <div className="apply-form-group">
          <label htmlFor="jobSelect" className="apply-form-label">Job:</label>
          <select
            id="jobSelect"
            className="apply-form-control"
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

        <div className="apply-form-group">
          <label htmlFor="name" className="apply-form-label">Name:</label>
          <input
            id="name"
            type="text"
            className="apply-form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="apply-form-group">
          <label htmlFor="email" className="apply-form-label">Email:</label>
          <input
            id="email"
            type="email"
            className="apply-form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="apply-form-group">
          <label className="apply-form-label">Education:</label>
          {educationList.map((education, index) => (
            <div key={index} className="education-group">
              <input
                type="text"
                className="apply-form-control"
                value={education}
                onChange={(e) => handleEducationChange(index, e.target.value)}
                placeholder={`Education ${index + 1}`}
              />
              <button
                type="button"
                className="btn btn-danger btn-sm mt-2"
                onClick={() => handleRemoveEducation(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={handleAddEducation}
          >
            Add Education
          </button>
        </div>

        <div className="apply-form-group">
          <label className="apply-form-label">Work Experience:</label>
          {workExperienceList.map((workExperience, index) => (
            <div key={index} className="work-experience-group">
              <input
                type="text"
                className="apply-form-control"
                value={workExperience}
                onChange={(e) => handleWorkExperienceChange(index, e.target.value)}
                placeholder={`Work Experience ${index + 1}`}
              />
              <button
                type="button"
                className="btn btn-danger btn-sm mt-2"
                onClick={() => handleRemoveWorkExperience(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={handleAddWorkExperience}
          >
            Add Work Experience
          </button>
        </div>

        <div className="apply-form-group">
          <label htmlFor="dateOfBirth" className="apply-form-label">Date of Birth:</label>
          <input
            id="dateOfBirth"
            type="date"
            className="apply-form-control"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <button type="submit" className="apply-btn-primary">Submit Application</button>
      </form>
      {message && <div className="apply-alert apply-alert-info mt-3">{message}</div>}
    </div>
  );
}

export default Apply;
