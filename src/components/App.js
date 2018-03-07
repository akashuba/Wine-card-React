import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReviewList from './Review'
import Counter from './Counter'
import Test from './test'
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
    static propTypes = {
        reviews: PropTypes.array
    }

    render() {

        const { reviews } = this.props
        return (
            <React.Fragment >
                <Counter />
                <ReviewList reviews={reviews} />
                <Provider store={store} >
                    <div>
                        <Test />
                    </div>
                </Provider>
            </React.Fragment>
        )
    }
}




export default App;