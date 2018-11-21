import { combineReducers } from 'redux'
import cardReducers from './cards'
import allFilters from './allFilters'
import error from './error'

export default combineReducers({
    cards: cardReducers,
    allFilters,
    error,
})
