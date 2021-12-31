import React from 'react';
import './Tweet.css'

const Tweet = (props) => {
    return (
        <div >
            {props.twet.map((twet) => 
            <div className='tweetsDisplay'>
                <h4>{twet.name}. </h4>
                <p>{twet.tweet}. </p>
                <p>I am {twet.age} years old.</p>
            </div>
            )}
        </div>
    )
}

export default Tweet
