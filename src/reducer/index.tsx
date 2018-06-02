import {combineReducers} from 'redux'
import reviewsReducers from './reviews'
import cardReducers from './cards'

export default  combineReducers({
    reviews: reviewsReducers,
    cards: cardReducers
})
