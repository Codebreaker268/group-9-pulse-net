import React, { useEffect, useState } from 'react';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/joblistings')
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h2>{job.Title}</h2>
            <p><strong>Requirement:</strong>{job.requirement}</p>
            <p><strong>Description:</strong>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
