import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import './components/style.css'

const About = () => (
    <h1 className="about" >
        Приложение создается для обмена опытом и по выбору вин разных сортов и категорий.
         Использованы технологии: React, Redux, Typescript, PHP.
    </h1>
)

ReactDOM.render(
    <React.Fragment>
        <Router>
            <div className="page" >
                <Menu />
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    </React.Fragment>,
    document.getElementById('root'),
)
