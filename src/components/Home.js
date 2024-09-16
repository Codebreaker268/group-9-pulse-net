import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="home-background"></div>
      <div className="home-container">
        <h1>Welcome to Pulse Net</h1>
        <p>
          Pulse Net is the leading telecommunication network in the country and is a well-recognized giant in the industry even at a continental level.
        </p>
        <p>
          The main reason we have been able to rise through the ranks to attain such a high status as a company is because of our most valuable assets:
        </p>
        <p><strong>OUR EMPLOYEES</strong></p>
        <p>
          This website is meant for you who wants to become part of the family that is Pulse Net.
        </p>
        <p>
          You can view the various open slots at the job listing section and apply for employment at the job application section.
        </p>
        <p>
          The employment will be done purely based on merit where the most qualified applicant for the job will get it.
        </p>
        <div className="quick-links">
          <a href="/department">Explore Job Listings</a>
          <a href="/apply">Apply Now</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
