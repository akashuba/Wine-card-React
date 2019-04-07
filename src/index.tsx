import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './components/style.css'
import { Provider } from 'react-redux'
import store from './store'
import WineCardContainer from './components/WineCard/WineCardContainer'

ReactDOM.render(
    <React.Fragment>
        <Router>
            <Provider store={store}>
                <div className="page">
                    <Route exact path="/" component={App} />
                    <Route path="/card-item/:name" component={WineCardContainer} />
                </div>
            </Provider>
        </Router>
    </React.Fragment>,
    document.getElementById('root'),
)
