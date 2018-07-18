import { FILTER, CARDS } from '../constants'
import { ICard } from '../types'

export function filterBySparkling(isChecked: boolean) {
    return {
        type: FILTER.FILTER_BY_SPARKLING,
        payload: isChecked
    }
}

export function filterByName(nameLatter: string) {
    return {
        type: FILTER.FILTER_BY_NAME,
        payload: nameLatter
    }
}

export function filterByColor(color: string) {
    return {
        type: FILTER.FILTER_BY_COLOR,
        payload: color
    }
}

export function filterByTaste(taste: string) {
    return {
        type: FILTER.FILTER_BY_TASTE,
        payload: taste
    }
}

export function getCardsByFetch(cards: ICard[]) {
    return {
        type: CARDS.GET_CARDS_BY_FETCH,
        payload: cards
    }
}
