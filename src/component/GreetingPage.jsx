import React from 'react';
import './greetingPage.css';
import thankYou from '../assets/illustration-thank-you.svg'

function GreetingPage({ rating }) {
  return (
    <div className='greeting'>
      <img src={thankYou} alt="" className='grreting-img' />
      <p className='greeting-rate'>You selected {rating} out of 5</p>
      <h1 className='greeting-heading'>Thank you!</h1>
      <p className='greeting-message'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

export default GreetingPage
