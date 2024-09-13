import React from 'react';
import './Departments.css';

const departments = [
  {
    name: "Information Technology",
    description: "The IT department focuses on managing and developing the technical infrastructure of the company.",
    requirements: [
      "Proficiency in programming languages (e.g., Java, Python, etc.)",
      "Experience with system administration and networks",
      "Knowledge of cloud computing services",
      "Ability to troubleshoot software and hardware issues",
    ]
  },
  {
    name: "Marketing",
    description: "The marketing department handles the promotion and advertising strategies to increase the company's visibility and customer base.",
    requirements: [
      "Strong understanding of digital marketing tools",
      "Experience in social media management",
      "Excellent communication and content creation skills",
      "Knowledge of market research and analytics",
    ]
  },
  {
    name: "Human Resource",
    description: "Human Resource manages recruitment, employee relations, and ensures workplace compliance.",
    requirements: [
      "Experience in recruitment and talent acquisition",
      "Knowledge of labor laws and employee regulations",
      "Strong interpersonal and communication skills",
      "Ability to handle employee relations and conflict resolution",
    ]
  },
  {
    name: "Finance",
    description: "The finance department oversees financial planning, budgeting, and maintaining the company's financial health.",
    requirements: [
      "Strong analytical and financial skills",
      "Proficiency in financial software (e.g., QuickBooks, Excel)",
      "Knowledge of accounting principles and standards",
      "Ability to manage budgets and financial reports",
    ]
  },
  {
    name: "Accounts",
    description: "This department manages the day-to-day financial transactions, including invoicing, payroll, and account reconciliation.",
    requirements: [
      "Proficiency in bookkeeping and accounting software",
      "Strong organizational skills",
      "Experience with financial reconciliation",
      "Attention to detail and accuracy in financial reports",
    ]
  },
  {
    name: "Legal",
    description: "The legal department ensures the company's compliance with legal standards and handles contracts and litigation matters.",
    requirements: [
      "Law degree and professional legal certification",
      "Experience in corporate law and compliance",
      "Excellent negotiation and communication skills",
      "Knowledge of contract law and intellectual property",
    ]
  }
];

const DepartmentPage = () => {
  return (
    <div>
      <h1>Departments</h1>
      {departments.map((department, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{department.name}</h2>
          <p>{department.description}</p>
          <h3>Requirements:</h3>
          <ul>
            {department.requirements.map((requirement, idx) => (
              <li key={idx}>{requirement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DepartmentPage;
