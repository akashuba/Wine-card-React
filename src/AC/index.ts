import { FILTER } from '../constants'

export function filterBySparkling() {
    return {
        type: FILTER.FILTER_BY_SPARKLING,
    }
}

export function filterByName(nameLatter: string) {
    return {
        type: FILTER.FILTER_BY_NAME,
        payload: nameLatter
    }
}
