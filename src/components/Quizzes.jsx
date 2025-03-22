// src/QuizzesPage.jsx (updated)
import React, { useState, useEffect } from 'react';

import { courses } from './Data'; // Your courses data


// src/utils/getRandomQuestions.js
export const getRandomQuestions = (courses) => {
    // Combine all quizzes from each course
    const allQuestions = courses.reduce((acc, course) => {
      return acc.concat(course.quiz);
    }, []);
    
    // Randomly shuffle the questions array
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
  
    // Select 10 random questions
    return shuffledQuestions.slice(0, 10);
  };
  

const QuizzesPage = () => {
  const [questions, setQuestions] = useState([]);

  const loadRandomQuestions = () => {
    const randomQuestions = getRandomQuestions(courses);
    setQuestions(randomQuestions);
  };

  useEffect(() => {
    loadRandomQuestions();
  }, []); // Load random questions on initial mount

  return (
    <div className="quizzes-page">
      <h2>Random Quiz</h2>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        <div className="quiz-container">
          {questions.map((question, index) => (
            <div key={index} className="quiz-question">
              <p>{question.question}</p>
              <div className="quiz-options">
                {question.options.map((option, optionIndex) => (
                  <label key={optionIndex}>
                    <input type="radio" name={`question-${index}`} value={option} />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={loadRandomQuestions}>Play Again</button>
    </div>
  );
};

export default QuizzesPage;
