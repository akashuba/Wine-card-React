import { FILTER } from '../constants'

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
