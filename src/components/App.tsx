import React, { Component } from 'react'
import ReviewList from './Review'
import { Provider } from 'react-redux'
import store from '../store'

function TitileElem() {
    return <h1> Title text </h1>
}

class App extends Component {
    public componentDidMount() {
        const status = (response: any) => {
            if (response.status !== 200) {
                return Promise.reject(new Error(response.statusText))
            }
            return Promise.resolve(response)
        }
        const json = function(response: any) {
            return response.json()
        }
        fetch('http://www.mocky.io/v2/5b07c8b43200008e00700034', {
            method: 'post',
            body: 'test=1',
        })
            .then(status)
            .then(json)
            .then(data => {
                console.log('data', data)
            })
            .catch(function(error) {
                console.log('error', error)
            })
    }

    public render() {
        return (
            <React.Fragment>
                <TitileElem />
                <Provider store={store}>
                    <ReviewList />
                </Provider>
            </React.Fragment>
        )
    }
}

export default App
