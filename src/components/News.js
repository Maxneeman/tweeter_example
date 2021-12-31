import React, { useState } from 'react';
import './News.css';

const News = () => {

    const [counter, setCounter] = useState(0);

    const increament = () => {
        setCounter((counter) => counter + 1);
    }

    return (
        <div className='Newas'>
            <input type="text" placeholder='Search Tweeter.'/>
            <div className="news">
                <p>{counter} </p>
                <button onClick={increament}>Increament</button>
            </div>
        </div>
    )
}

export default News
