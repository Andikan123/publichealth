import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="welcome-heading">Welcome to Our Public Health Platform</h1>
        <p className="description">Your journey to better health starts here.</p>

        <Link to="/courses">
          <button className="cta-button">Go to Course List</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
