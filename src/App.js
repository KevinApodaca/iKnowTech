import React, { useState, useEffect } from 'react';
import { Questionaire } from './components';

const TRIVIA_URL = 'https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple';


function App() {

  /* Components of quiz game */
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetch(TRIVIA_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);



/* Verify correct and incorrect. Update the scores */
  const checkAnswer = (answer) => {
    const newIndex = currentIndex + 1
    setCurrentIndex(currentIndex + 1);
    if (answer === questions[currentIndex].correct_answer){
      setScore(score + 1);
    }

    if (newIndex >= questions.length) {
      setGameOver(true);
    }
  };

  /* Body of the game */
  return gameOver ? (
    <h1 className='text-3xl text-white font-bold'>
      You got {score} out of {questions.length}
    </h1>
  ) : (
    questions.length > 0 ? (
    <div className='container'>
        <Questionaire 
          data={questions[currentIndex]} 
          checkAnswer={checkAnswer}
        />
    </div>
  ) : (
    <h2 className='text-2xl text-white font-bold'>Loading<i className="fa fa-hourglass-start"></i></h2>
  ));
}
  

export default App;
