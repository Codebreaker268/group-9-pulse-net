import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home';
// import JobListings from './components/JobListings';
import ContactUs from './components/ContactUs';
import Forum from './components/Forum';
import ApplicationList from './components/ApplicationList'; // Import ApplicationList component
import EditApplication from './components/EditApplication'; // Import EditApplication component
import Apply from './components/Apply';
import Department from './components/Department';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage'; // Import SignupPage component


const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar component */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/application-list" element={<ApplicationList />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/department" element={<Department />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/edit-application/:applicationId" element={<EditApplication />} /> {/* Route for editing application */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
