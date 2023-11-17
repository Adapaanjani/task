// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import your styles


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className={`navbar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="navbar-container">
        <div className={`navbar-toggle ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div
          className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
          onMouseEnter={() => setIsSidebarOpen(true)}
          onMouseLeave={() => setIsSidebarOpen(false)}
        >
          {/* Sidebar content goes here */}
          <Link to="/Page1">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/Form">Form</Link>
          {/* Add more sidebar links as needed */}
        </div>

        <div className="navbar-logo">
          <Link to="/">అŋɬɧąཞıక్షơ</Link>
        </div>

        <div className={`animated-search ${isSearchOpen ? 'open' : ''}`}>
      <input type="text" placeholder="Search..." />
      <FontAwesomeIcon
        icon={faSearch}
        className="search-icon"
        onClick={toggleSearch}
      />
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
