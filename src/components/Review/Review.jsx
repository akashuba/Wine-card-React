import React from 'react'
import PropTypes from 'prop-types'

function Review({ review }) {
    return (
        <React.Fragment>
            <p className="review-item-title" >
                <b>
                    {review.name}
                </b>
            </p>
            <p className="review-item-comment">
                {review.comment}
            </p>
        </React.Fragment>
    )

}

Review.propTypes = {
    review: PropTypes.object
}

export default Review