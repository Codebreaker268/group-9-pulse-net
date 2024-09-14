// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/job-listing">Job Listings</Link></li>
        <li><Link to="/contact-us">Contact us</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/apply"> Aplly</Link></li>
        {/* <li><Link to="/profile">Profile</Link></li> */}
        <li><Link to="/application-list">My applicaions</Link></li>
        {/* <li><Link to="/edit-application"> Edit appliction</Link></li> */}
        <li><Link to="/departments"> Departments</Link></li>

      </ul>
      <style jsx>{`
        nav {
          background: #333;
          padding: 10px;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          display: inline;
          margin-right: 10px;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
