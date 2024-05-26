import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">Discrete Math - By: Noah Sanderson</Link>
      </div>
    </nav>
  );
}

export default Navbar;
