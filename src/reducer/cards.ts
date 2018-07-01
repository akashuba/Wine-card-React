import defaultCards from '../WinesBase'

interface IAction {
    type: string,
    payload: string
}

export default (cardsState = defaultCards, action: IAction) => {

    return cardsState
}
