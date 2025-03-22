import React, { useState } from 'react';

const Quiz = ({ quizData }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="quiz">
      <h4>Quiz</h4>
      {quizData.map((question, qIndex) => (
        <div key={qIndex} className="quiz-question">
          <p>{question.question}</p>
          {question.options.map((option, oIndex) => (
            <label key={oIndex}>
              <input
                type="radio"
                name={`question-${qIndex}`}
                value={option}
                checked={selectedAnswers[qIndex] === option}
                onChange={() => handleAnswerChange(qIndex, option)}
                disabled={isSubmitted}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      {!isSubmitted ? (
        <button onClick={handleSubmit}>Submit Quiz</button>
      ) : (
        <div>
          <h5>Your Score: {calculateScore()} / {quizData.length}</h5>
        </div>
      )}
    </div>
  );
};

export default Quiz;
