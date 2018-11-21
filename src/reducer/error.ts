import { ERROR } from '../constants'

interface IAction {
    type: string
    payload: string | null
}

export default (error: any, action: IAction) => {
    const { type, payload } = action
    switch (type) {
        case ERROR.FETCH_ERROR:
            return payload
        default:
            return false
    }
}
