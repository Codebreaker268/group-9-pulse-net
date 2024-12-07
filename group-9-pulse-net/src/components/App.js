// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./NavBar";
import Forum from "./Forum";
import ContactUs from "./ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/forum" element={<Forum />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
