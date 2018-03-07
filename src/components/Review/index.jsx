import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Review from './Review'
import './style.css'
import { connect } from 'react-redux'


class ReviewList extends Component {
    static propTypes = {
        reviews: PropTypes.array
    }

    render() {
        const { reviews } = this.props
        const reviewList = reviews.map(review =>
            <li key={review.name} className="review-item" > <Review review = {review}/> </li>
        )
 
        return (
            <section>
                {reviewList}
            </section>
        )
    }

}

 function  mapStateToProps (state)  {
    return  {reviews: state.reviews}
 }

export default connect(mapStateToProps )(ReviewList)