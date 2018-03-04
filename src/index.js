import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Clock from './components/Clock';
import reviews from './reviews'

function tick() {
    ReactDOM.render(<Clock />, document.getElementById('clock'));
}

ReactDOM.render(<App reviews = {reviews} />, document.getElementById('root'));

setInterval(tick, 1000);
