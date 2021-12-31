import React from 'react';
import Tweet from './Tweet';
import './Tweets.css';



function Tweets() {
    const tweets = [
        { name: 'Wilson', age: 32, tweet: 'I am so hungry!' },
        { name: 'Erick', age: 18, tweet: 'I am happy!' },
        { name: 'Benard', age: 21, tweet: 'I am watching the video!' },
        { name: 'Zacharia', age: 81, tweet: 'I appriciated the application' },
        { name: 'Karia', age: 22, tweet: 'I like your website' },
        { name: 'Mapalala', age: 42, tweet: 'Merry christmas' },
        { name: 'Hulda', age: 60, tweet: 'Happy new year' },
        { name: 'Levis', age: 51, tweet: 'I like tennis' },
    ];
    return (
        <div className='tweets'>
            <h1>I have {tweets.length} tweets.</h1>
            <div className="twets">
                <Tweet twet={tweets} />
            </div>
       </div>
    );
}

export default Tweets
