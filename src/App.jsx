import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; // Importing Navbar component
import Home from './components/Home'; // Home page
import CoursePage from './components/CoursePage'; // Example for other pages
import CourseList from './CourseList';
import QuizzesPage from './components/Quizzes';
import Videos from './components/Videos';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar is fixed throughout the site */}
        <Navbar />

        {/* Main content */}
        <div className="main-content">
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/quizzes" element={<QuizzesPage />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/course/:id" element={<CoursePage />} />
            {/* Add more routes for different pages as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
