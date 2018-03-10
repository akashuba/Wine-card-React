import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteReview } from '../../AC'
//import store from '../../store'

class Review extends Component {

    render() {
        const { review } = this.props
        return (
            <React.Fragment >
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

   this.props.deleteReviewDispatch(this.props.review.id)
/*         const action = deleteReview(this.props.review.id)
        store.dispatch(action) */
    } 

}

Review.propTypes = {
    review: PropTypes.object
}

export default connect(null, {deleteReviewDispatch: deleteReview} )(Review)
//export default Review


