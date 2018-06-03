import { SPARKLING_FILTER } from '../constants'

interface IAction {
    type: string,
    payload?: string
}

export default (checkbox = false, action: IAction) => {
    const { type } = action
    if (type === SPARKLING_FILTER) {
        return !checkbox
    }
    return checkbox
}
