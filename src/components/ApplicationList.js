import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch the list of applications
    fetch('https://json-server-template-po0m.onrender.com/applications')
      .then(response => response.json())
      .then(data => setApplications(data))
      .catch((error) => console.log('Error fetching applications:', error));
  }, []);

  return (
    <div>
      <h2>My Applications</h2>
      <ul className="list-group">
        {applications.map((application) => (
          <li key={application.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <p><strong>{application.name}</strong> - {application.jobId}</p>
            </div>
            <Link to={`/edit-application/${application.id}`} className="btn btn-primary btn-sm">Edit Application</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationList;
