import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Review extends Component {
    constructor() {
        super()
        this.handleDelete.bind(this)
    }

    handleDelete() {
        console.log('clicked')
    }
    render() {

        const { review } = this.props
        return (
            <React.Fragment>
                <p className="review-item-title" >
                    <b>
                        {review.name}
                    </b>
                    <button onClick={this.handleDelete} >
                        delete
                </button>
                </p>
                <p className="review-item-comment">
                    {review.comment}
                </p>
            </React.Fragment>
        )
    }
}

Review.propTypes = {
    review: PropTypes.object
}

export default Review