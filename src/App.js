import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import JobListings from './components/JobListings';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/job-listings">Job Listings</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-listings" element={<JobListings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
