import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// import { Router, Route, hashHistory } from 'react-router'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Filter from './components/Filter/Filter'

ReactDOM.render(
    <React.Fragment>
        <Router>
            <React.Fragment>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <Route exact path="/" component={App} />
                <Route path="/about" component={Filter} />
            </React.Fragment>
        </Router>
    </React.Fragment>,
    document.getElementById('root'),
)
