import React, { Component } from 'react'
import { connect } from 'react-redux'


class Test extends Component {
    render() {
    
        const { reviews } = this.props
        const reviewList = reviews.map(review => 
                <p key = {review.name} >
                {review.name}
                </p>            
        )
        return (
       <div>
           {reviewList}
       </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reviews: state.reviews
    }
}

export default connect(mapStateToProps)(Test)