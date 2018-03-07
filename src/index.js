import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Clock from './components/Clock'

function tick() {
    ReactDOM.render(<Clock />, document.getElementById('clock'));
}

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>
    , document.getElementById('root'));

setInterval(tick, 1000);
