import React, { useState } from 'react'

import './Home.css'
import questions from '../questions/Question'
import Question from '../Components/Question'

const Home = () => {
  return (
    <div className='home'>
      <span>informações...</span>
      <div className='questions-info'>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    </div>
  )
}

export default Home
