import { FILTER } from '../constants'

interface IAction {
    type: string,
    payload?: string
}

export default (checkbox = false, action: IAction) => {
    const { type } = action
    if (type === FILTER.SPARKLING) {
        return !checkbox
    }
    return checkbox
}
