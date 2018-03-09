import defaultReviews from '../reviews'
import { DELETE_REVIEW } from '../constants'

export default (reviewsState = defaultReviews, action) => {
    const { type, payload } = action 

    switch (type) {
        case DELETE_REVIEW:
          return reviewsState.filter(review => review.id !== payload.id )

        default:
            return reviewsState
    }
   
}