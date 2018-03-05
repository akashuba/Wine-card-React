import {combineReducers} from 'redux'
import reviewsReducers from './reviews'

const allReducers = combineReducers({
    reviews: reviewsReducers
})

export default allReducers