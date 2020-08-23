import React from 'react';

const Questionaire = ({ 
    showAnswers,
    checkAnswer,
    data: {question, correct_answer, incorrect_answers},
 }) => {
     /* Shuffling the answers around randomly */
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

    return (        
        <div className='flex flex-col'>
            <div className='bg-white text-blue-800 p-10 rounded shadow-md'>
                <h2 
                className='text-2xl'
                dangerouslySetInnerHTML={{__html:question}}
                />
            </div>
            <div className='grid grid-cols-2 gap-6 mt-6'>
                {shuffledAnswers.map((answer) => {
                    const textColor = showAnswers ? answer === correct_answer ? 'text-green-500' : 'text-red-500' : 'text-blue-600'
                    return (
                        <button
                            className={`bg-white p-4 ${textColor} font-semibold rounded shadow`}
                            onClick={()=>checkAnswer(answer)}
                            dangerouslySetInnerHTML={{__html: answer}}
                        />
                    );
                })}
            </div>
            {showAnswers && (
                <button className={`bg-blue-700 p-4 font-semibold rounded shadow ml-auto mt-6`}>
                   Next Question
               </button>
            )}
        </div>
     );
};

export default Questionaire;