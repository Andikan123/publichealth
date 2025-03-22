// src/CourseList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from './components/Data'; // Import courses data

const CourseList = () => {
  return (
    <div className="course-list-page">
      <h1>Lectures</h1>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/course/${course.id}`} className="course-link">
              Go to Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
