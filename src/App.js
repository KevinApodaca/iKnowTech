import React, { useState, useEffect } from 'react';
import { Questionaire } from './components';

const TRIVIA_URL = 'https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple';
function App() {

  /* Grab questions */
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(TRIVIA_URL).then((res) => res.json()).then((data) => {
      setQuestions(data.results);
    });
  }, []);

  return questions.length > 0 ? (
    <div className='container'>
      <Questionaire data={questions[0]}/>
    </div>
  ) : (
    <h2 className='text-2xl text-white font-bold'>Loading<i className="fa fa-hourglass-start"></i></h2>
  );
}
  

export default App;
