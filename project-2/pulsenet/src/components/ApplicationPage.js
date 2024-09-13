import React from 'react';
import { useParams } from 'react-router-dom';

function ApplicationPage() {
  const { department } = useParams();
  
  return (
    <div className="application-page">
      <h2>Application for {department.replace('-', ' ')}</h2>
      {/* Application form will go here */}
    </div>
  );
}

export default ApplicationPage;
