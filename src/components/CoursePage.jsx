import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from './Data'; // Assuming you have course data here
import Quiz from './Quiz'; // Assuming you have the Quiz component as mentioned before

const CoursePage = () => {
  const { id } = useParams(); // Get the dynamic course ID from the URL
  const course = courses.find((course) => course.id === parseInt(id)); // Find the course by its ID

  if (!course) {
    return <div>Course not found</div>; // If course doesn't exist
  }

  return (
    <div className="course-page">
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      {/* Display the video if available */}
      {course.video && (
        <div className="lesson-video">
          <h4>Watch Lesson Video</h4>
          <video controls width="100%">
            <source src={course.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Display the notes/content */}
      {course.content && (
        <div className="notes-section">
          <h2>Course Notes</h2>
          <p>{course.content}</p>
        </div>
      )}

      {/* Display the quiz in a separate component */}
      {course.quiz && course.quiz.length > 0 && (
              <Quiz quizData={course.quiz} />
            )}
    </div>
  );
};

export default CoursePage;
