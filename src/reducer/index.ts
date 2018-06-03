import {combineReducers} from 'redux'
import cardReducers from './cards'
import sparklingFilter from './sparklingFilter'

export default  combineReducers({
    cards: cardReducers,
    isSparkling: sparklingFilter
})
