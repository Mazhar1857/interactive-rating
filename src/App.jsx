import './App.css';
import GreetingPage from './component/GreetingPage';
import RatingPage from './component/RatingPage';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [rating, setRating] = useState(null);

  const handleRating = (rating) => {
    setRating(rating)
  }



  return (
    <div className='container'>
      <Routes>
        <Route path='/greet' element={<GreetingPage rating={rating} />} />
        <Route path='/' element={<RatingPage rating={handleRating} />} />
      </Routes>
    </div>
  )
}
import { Form } from 'react-router-dom';

export default App
