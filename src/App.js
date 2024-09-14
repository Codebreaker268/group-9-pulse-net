import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import JobListings from './components/JobListings';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/ContactUs';
import Forum from './components/Forum';
// import AddJob from './components/AddJob';
import ApplicationList from './components/ApplictionList';
import EditApplication from './components/EditAppliction';
import Apply from './components/Apply';
import Department from './components/Department';
// import Profile from './components/Profile';
const App = () => {
  return (
    <Router>
      <div className="bg-dark text-white p-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">MyApp</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/job-listings">Job Listings</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/apply">Apply</Link>

              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/application-list">My Applications</Link>

              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/contact-us">Contact Us</Link>

              </li>
              {/* <li className="nav-item">
                <Link className='nav-link' to="/add-job">Add Job</Link>

              </li> */}
              <li className="nav-item">
                <Link className='nav-link' to="/forum">Forum</Link>

              </li>
              {/* <li className="nav-item">
                <Link className='nav-link' to="/edit-application">Edit Application</Link>

              </li> */}
              <li className="nav-item">
                <Link className='nav-link' to="/department">Departments</Link>

              </li>

              {/* <li className="nav-item">
                <Link className='nav-link' to="/profile">profile</Link>

              </li> */}
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job-listings" element={<JobListings />} />
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/apply" element={<Apply/>}/>
            {/* <Route path="/edit-application" element={<EditApplication/>}/> */}
            <Route path="/application-list" element={<ApplicationList/>}/>
            <Route path="/Forum" element={<Forum/>}/>
            <Route path="/department" element={<Department/>}/>
            <Route path="/edit-application/:applicationId" element={<EditApplication />} />
            {/* <Route path="/add-job" element={<AddJob/>}/> */}
            {/* <Route path="/profile" element={<Profile/>}/> */}

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
