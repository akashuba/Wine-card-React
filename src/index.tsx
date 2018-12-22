import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './components/style.css'
import { Provider } from 'react-redux'
import store from './store'
import WineCardContainer from './components/WineCard/WineCardContainer'
import { WithCards } from './components/WithCards'

ReactDOM.render(
    <React.Fragment>
        <Router>
            <div className="page">
                <Provider store={store}>
                    <WithCards>
                        <Route exact path="/" component={App} />
                        <Route path="/card-item/:name" component={WineCardContainer} />
                    </WithCards>
                </Provider>
            </div>
        </Router>
    </React.Fragment>,
    document.getElementById('root'),
)
