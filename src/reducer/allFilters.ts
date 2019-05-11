import { FILTER } from '../constants'

interface IAction {
    type: string
    payload?: string
}

const filtersDefault = {
    sparkling: {
        isSparkling: '',
    },
    name: {
        nameLetter: '',
    },
    color: {
        colorType: '',
    },
    taste: {
        tasteType: '',
    },
}

export default (allFilters = filtersDefault, action: IAction) => {
    const { type, payload } = action
    if (type === FILTER.FILTER_BY_SPARKLING) {
        return {
            ...allFilters,
            sparkling: {
                isSparkling: payload ? false : '',
            },
        }
    }
    if (type === FILTER.FILTER_BY_NAME) {
        return {
            ...allFilters,
            name: {
                nameLetter: payload,
            },
        }
    }
    if (type === FILTER.FILTER_BY_COLOR) {
        return {
            ...allFilters,
            color: {
                colorType: payload,
            },
        }
    }
    if (type === FILTER.FILTER_BY_TASTE) {
        return {
            ...allFilters,
            taste: {
                tasteType: payload,
            },
        }
    }
    return allFilters
}
