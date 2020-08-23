import React from 'react';

const Button = ({answer}) => (
    <button className='bg-white p-4 text-blue-800 font-semibold rounded shadow'>
        {answer}
    </button>
)

const Questionaire = ({ 
    checkAnswer,
    data: {question, correct_answer, incorrect_answers},
 }) => {
    const shuffledAnswers = [correct_answer, ...incorrect_answers];
    return (        
        <div>
            <div className='bg-white text-blue-800 p-10 rounded shadow-md'>
                <h2 
                className='text-2xl'
                dangerouslySetInnerHTML={{__html:question}}
                />
            </div>
        
            <div className='grid grid-cols-2 gap-6 mt-6'>
                <Button onClick={()=>checkAnswer(shuffledAnswers[0])} answer={shuffledAnswers[0]} />
                <Button onClick={()=>checkAnswer(shuffledAnswers[1])} answer={shuffledAnswers[1]} />
                <Button onClick={()=>checkAnswer(shuffledAnswers[2])} answer={shuffledAnswers[2]} />
                <Button onClick={()=>checkAnswer(shuffledAnswers[3])} answer={shuffledAnswers[3]} />
            </div>
        </div>
     )};

export default Questionaire;