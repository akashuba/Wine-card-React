// import defaultCards from '../WinesBase'
import { CARDS } from '../constants'
import { ICard } from '../types'

interface IAction {
    type: string,
    payload: string | ICard[]
}

export default (cardsState = [], action: IAction) => {
    const { type, payload } = action
    switch (type) {
        case CARDS.GET_CARDS_BY_FETCH:
            return payload
        default:
            return cardsState
    }
}
