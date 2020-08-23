import React, { useState, useEffect } from 'react';

const TRIVIA_URL = 'https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple';
function App() {

  /* Grab questions */
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(TRIVIA_URL).then((res) => res.json()).then((data) => {
      console.log(data);
    });
  }, []);

  return <div className='container'>
        <div className='bg-white text-blue-700 p-10 rounded-lg shadow-md'>
          <h2 className='text-2xl'>The question is going to be here and might be long lets see how it looks</h2>
          </div>

       <div className="grid grid-cols-2 gap-6 mt-4">
         <button className='bg-white p-4 text-blue-800 font-semibold rounded shadow'>
           Choice A
         </button>
         <button className='bg-white p-4 text-blue-800 font-semibold rounded shadow'>
           Choice B
         </button>
         <button className='bg-white p-4 text-blue-800 font-semibold rounded shadow'>
           Choice C
         </button>
         <button className='bg-white p-4 text-blue-800 font-semibold rounded shadow'>
           Choice D
         </button>
       </div>
        

  </div>;
}

export default App;
