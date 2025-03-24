import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"; // Importing Navbar component
import Home from "./components/Home"; // Home page
import CoursePage from "./components/CoursePage"; // Example for other pages
import CourseList from "./CourseList";
import QuizzesPage from "./components/Quizzes";
import Videos from "./components/Videos";
import logo from "./assets/logo.webp";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {/* Navbar is fixed throughout the site */}
        <Navbar />
        <>
          <div className="toggle">
            <div className="logo-container">
              <img src={logo} alt="Andikan Logo" className="logo-image" />
              <div className="logo-text">
                <span className="logo">Andikan</span>
                <span className="logo-sub">First Aid</span>
              </div>
            </div>
            <button
              className="toggle-btn"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              ☰
            </button>
          </div>
         {
          isSidebarOpen && <div className="sidey">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Lessons</Link>
            </li>
            <li>
              <Link to="/quizzes">Quizzes</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
          </ul>
        </div>
         } 
        </>

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
