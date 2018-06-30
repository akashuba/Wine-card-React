import { FILTER } from '../constants'

interface IAction {
    type: string,
    payload?: string
}

export default (name = '', action: IAction) => {
    const { type, payload } = action
    if (type === FILTER.FILTER_BY_NAME) {
        return payload
    }
    return name
}
