import React from 'react';
import { Link } from 'react-router-dom';
import './Department.css';

const departments = [
  {
    name: "Information Technology",
    description: "The IT department manages our technology infrastructure and ensures all systems run smoothly.",
    requirements: "Experience with network systems, cybersecurity knowledge, and proficiency in programming languages.",
    vacancies: 5
  },
  {
    name: "Marketing",
    description: "The Marketing team promotes our brand and manages advertising campaigns to drive customer engagement.",
    requirements: "Strong communication skills, experience in digital marketing, and knowledge of market research.",
    vacancies: 3
  },
  {
    name: "Human Resource",
    description: "HR handles recruitment, employee relations, and ensures compliance with labor laws.",
    requirements: "Experience in HR management, knowledge of labor laws, and strong interpersonal skills.",
    vacancies: 2
  },
  {
    name: "Finance",
    description: "The Finance department manages budgeting, financial reporting, and investment strategies.",
    requirements: "Proficiency in financial software, experience with budgeting and forecasting, and strong analytical skills.",
    vacancies: 4
  },
  {
    name: "Accounts",
    description: "Accounts oversees daily transactions, manages accounts receivable and payable, and ensures accurate financial records.",
    requirements: "Experience with accounting software, attention to detail, and understanding of financial regulations.",
    vacancies: 3
  },
  {
    name: "Legal",
    description: "The Legal team provides legal guidance, manages contracts, and ensures compliance with regulations.",
    requirements: "A degree in law, experience with contract management, and strong analytical and negotiation skills.",
    vacancies: 2
  }
];

const Department = () => {
  return (
    <div className="department-container">
      <div className="department-header">
        <h1>DEPARTMENTS</h1>
      </div>
      <ul className="department-list">
        {departments.map((dept, index) => (
          <li key={index} className="department-item">
            <h2>{dept.name}</h2>
            <p><strong>Description:</strong> {dept.description}</p>
            <p><strong>Requirements:</strong> {dept.requirements}</p>
            <p><strong>Vacancies:</strong> {dept.vacancies}</p>
          </li>
        ))}
      </ul>
      <div className="apply-link">
        <Link to="/apply">Apply Now</Link>
      </div>
    </div>
  );
};

export default Department;
