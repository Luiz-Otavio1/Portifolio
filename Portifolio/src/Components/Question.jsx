import React, { useState } from 'react';

const Question = ({ question }) => {
    const [answer, setAnswer] = useState(false);
    
    const answerSwitch = () => {
        setAnswer(!answer);
    };

  return (
    <div className='question' onClick={answerSwitch}>
        <div className='question-header'>
            <div className='icon'>{question.icon}</div>
            <p className='question-info'>{question.question}</p>
        </div>
        {answer && (
            <div className='answer'>
                <p className='awnser-info'>{question.answer}</p>
            </div>
        )}
    </div>
  )
}

export default Question;
