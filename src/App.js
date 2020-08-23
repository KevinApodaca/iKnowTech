import React from 'react';

const TRIVIA_URL = 'https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple';
function App() {
  return <div className="container flex justify-center items-center h-screen">
      
        <div class="bg-white text-blue-600 p-4">The question is going to be here</div>

       <div>
          <div>Answer 1</div>
          <div>Answer 2</div>
          <div>Answer 3</div>
          <div>Answer 4</div>
       </div>
        

  </div>;
}

export default App;
