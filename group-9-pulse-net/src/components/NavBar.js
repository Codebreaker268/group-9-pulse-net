import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;