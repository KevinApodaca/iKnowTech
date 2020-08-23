import React, { useState, useEffect } from 'react';
import { Questionaire } from './components';

const TRIVIA_URL = 'https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple';


function App() {

  /* Components of quiz game */
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(TRIVIA_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => 
        ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers
          ].sort(() => Math.random() - 0.5),
        }))

        setQuestions(questions);
      });
  }, []);



/* Verify correct and incorrect. Update the scores */
  const checkAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  };
  const fetchNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  }

  /* Body of the game */
  return questions.length > 0 ? (
    <div className='container'>
      {currentIndex >= questions.length ? (
        <h1 className='text-3xl text-white font-bold'>
          You scored {score} out of {questions.length}
        </h1>
      ) : (
        <Questionaire 
            data={questions[currentIndex]}
            showAnswers={showAnswers}
            checkAnswer={checkAnswer}
            fetchNextQuestion={fetchNextQuestion}
        />
      )}
    </div>
  ) : (
    <h2 className='text-2xl text-white font-bold'>Loading &nbsp;<i className="fa fa-hourglass-start"></i></h2>
  );
}
  

export default App;
