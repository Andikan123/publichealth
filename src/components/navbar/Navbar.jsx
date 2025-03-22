import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp'; // Adjust the path if necessary

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Andikan Logo" className="logo-image" />
        <div className="logo-text">
          <span className="logo">Andikan</span>
          <span className="logo-sub">Public Health</span>
        </div>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Lessons</Link></li>
        <li><Link to="/quizzes">Quizzes</Link></li>
        <li><Link to="/videos">Videos</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
