import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteReview } from '../../AC'

class Review extends Component {


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
    handleDelete = () => {
        console.log(this.props.review.id)
        this.props.deleteReviewDispatch(this.props.review.id)
    }

}

Review.propTypes = {
    review: PropTypes.object
}

export default connect(null, {deleteReviewDispatch: deleteReview} )(Review)