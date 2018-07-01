import {combineReducers} from 'redux'
import cardReducers from './cards'
import sparklingFilter from './sparklingFilter'
import filterByName from './filterByName'
import allFilters from './allFilters'

export default  combineReducers({
    cards: cardReducers,
    isSparkling: sparklingFilter,
    name: filterByName,
    allFilters
})
