// src/CourseCard.jsx
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="featured-course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <a href={course.link}>Learn More</a>
    </div>
  );
};

export default CourseCard;
