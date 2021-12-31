import React from 'react';
import Nav from './Nav';
import News from './News';
import './App.css';
import Tweets from './Tweets';

const App = () => {
    return (
        <div className='container'>
            <Nav/>
            <Tweets/>
            <News/>
        </div>
    )
}

export default App
