import {combineReducers} from 'redux'
import cardReducers from './cards'
import allFilters from './allFilters'

export default  combineReducers({
    cards: cardReducers,
    allFilters
})
