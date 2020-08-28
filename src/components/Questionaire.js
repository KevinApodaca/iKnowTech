import React from 'react';

const Questionaire = ({ 
    fetchNextQuestion,
    showAnswers,
    checkAnswer,
    data: {question, correct_answer, answers},
 }) => {
    return (
        <div className='flex flex-col'>
            <div className='bg-white text-blue-800 p-10 rounded shadow-md'>
                <h2 
                className='text-2xl'
                dangerouslySetInnerHTML={{__html:question}}
                />
            </div>
            <div className='grid grid-cols-2 gap-6 mt-6'>
                {answers.map((answer) => {
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
                <button
                    onClick={fetchNextQuestion}
                    className={`bg-blue-700 p-4 font-semibold rounded shadow ml-auto mt-6`}>
                    Next Question
               </button>
            )}
            <h3 className='text-1xl text-center'>Made with <span role='img' aria-label='Love'>🧡</span> by Kevin Apodaca <i className="fa fa-github"><a href='https://github.com/KevinApodaca'></a></i></h3>
        </div>
     );
};

export default Questionaire;