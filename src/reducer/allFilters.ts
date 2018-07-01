import { FILTER } from '../constants'

interface IAction {
    type: string,
    payload?: string
}

const filtersDefault = {
    sparkling: {
        isSparkling: false
    },
    name: {
        nameLetter: ''
    }
}

export default (allFilters = filtersDefault, action: IAction) => {
    const { type, payload } = action
    if (type === FILTER.FILTER_BY_SPARKLING) {
        return {
            ...allFilters,
            sparkling: {
                isSparkling: payload
            }
        }
    }
    if (type === FILTER.FILTER_BY_NAME) {
        return {
            ...allFilters,
            name: {
                nameLetter: payload
            }
        }
    }

    return allFilters
}
