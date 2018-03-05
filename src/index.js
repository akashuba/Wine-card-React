import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Clock from './components/Clock'
import reviews from './reviews'
import { createStore } from 'redux'
import allReducers from './reducer'
import { Provider } from 'react-redux'
import Test from './components/test'

const store = createStore(allReducers)

function tick() {
    ReactDOM.render(<Clock />, document.getElementById('clock'));
}

ReactDOM.render(
    <React.Fragment>
        <App reviews={reviews} />
        <Provider store={store} >
    <div>
         <Test/>
    </div>
    </Provider>
    </React.Fragment>
    , document.getElementById('root'));

setInterval(tick, 1000);
