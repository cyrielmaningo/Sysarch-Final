import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { FaHome, FaUserAlt, FaSignOutAlt, FaCalendarAlt, FaHistory } from 'react-icons/fa'; // Import the history icon

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the opening and closing of the menu
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show a confirmation dialog before logging out
    const isConfirmed = window.confirm('Are you sure you want to logout?');
    if (isConfirmed) {
      // If confirmed, remove the token and navigate to login page
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Dashboard</h2>
        {/* Burger Menu Icon */}
        <button className="burger-icon" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>

      <ul className={`sidebar-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <button onClick={() => navigate('/dashboard')}>
            <FaHome className="menu-icon" /> Dashboard
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/profile')}>
            <FaUserAlt className="menu-icon" /> Profile
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/session')}>
            <FaCalendarAlt className="menu-icon" /> Session
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/session-history')}>
            <FaHistory className="menu-icon" /> Session History
          </button>
        </li>
        <br /><br /><br /><br /><br /><br /><br />
        {/* Logout button at the bottom */}
        <li className="logout">
          <button onClick={handleLogout} className="logout-button">
            <FaSignOutAlt className="menu-icon" /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
