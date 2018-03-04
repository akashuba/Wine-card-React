import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReviewList from './Review'


class App extends Component {
    static propTypes = {
        reviews: PropTypes.array
    }

    render() {

        const { reviews } = this.props
        return (
            <React.Fragment >
                <ReviewList reviews={reviews} />
            </React.Fragment>
        )
    }
}




export default App;