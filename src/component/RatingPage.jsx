import React, { useState } from 'react';
import './ratingPage.css';
import starIcon from '../assets/icon-star.svg';
import { Link } from 'react-router-dom';

function RatingPage({ rating }) {
    const [checked, setChecked] = useState(null);
    const [url, setUrl] = useState(null)

    const handleRatingPoint = (rate) => {
        setChecked(rate);
        rating(rate)
        setUrl('/greet')
    }



    return (
        <div className='rating-page'>
            <img className='star-icon' src={starIcon} alt="" />
            <h1 className='rating-heading'>How did we do?</h1>
            <p className='rating-info'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</p>
            <div className='rating-point'>
                <button className={`${checked === 1 ? 'checked' : ''}`} onClick={() => handleRatingPoint(1)}>1</button>
                <button className={`${checked === 2 ? 'checked' : ''}`} onClick={() => handleRatingPoint(2)}>2</button>
                <button className={`${checked === 3 ? 'checked' : ''}`} onClick={() => handleRatingPoint(3)}>3</button>
                <button className={`${checked === 4 ? 'checked' : ''}`} onClick={() => handleRatingPoint(4)}>4</button>
                <button className={`${checked === 5 ? 'checked' : ''}`} onClick={() => handleRatingPoint(5)}>5</button>
            </div>
            <Link to={url}>
                <button className='rating-submit-button'>SUBMIT</button>
            </Link>

        </div>
    )
}

export default RatingPage
