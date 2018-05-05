import {combineReducers} from 'redux'
import reviewsReducers from './reviews'

export default  combineReducers({
    reviews: reviewsReducers,
})
