import React, { Component } from 'react'
import ReviewList from './Review'
import { Provider } from 'react-redux'
import store from '../store'
import Wines from '../Wines'

function TitileElem() {
    return <h1> Title text </h1>
}

class App extends Component {

    public componentDidMount() {

        fetch('http://www.mocky.io/v2/5b07c8b43200008e00700034', {
            method: 'GET',
        })
            .then(response => {
                if (response.status !== 200) {
                    return Promise.reject(new Error(response.statusText))
                }
                console.log(response.status)
                return Promise.resolve(response)
            })
            .then(response => response.json())
            .then(data => { console.log('fetch', data) })
            .catch(error => { console.warn(error) })
    }

    public show = (log: any): void => {
        console.log(log)
    }

    public render() {
        return (
            <React.Fragment>
                <TitileElem />
                <Provider store={store}>
                    <ReviewList />
                </Provider>
                {this.show(Wines)}
            </React.Fragment>
        )
    }
}

export default App
