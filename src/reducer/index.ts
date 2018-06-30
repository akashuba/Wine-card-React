import {combineReducers} from 'redux'
import cardReducers from './cards'
import sparklingFilter from './sparklingFilter'
import filterByName from './filterByName'

export default  combineReducers({
    cards: cardReducers,
    isSparkling: sparklingFilter,
    name: filterByName
})
