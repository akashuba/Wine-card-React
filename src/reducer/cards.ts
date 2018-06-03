import defaultCards from '../WinesBase'

interface IAction {
    type: string,
    payload: string
}

export default (cardsState = defaultCards, action: IAction) => {
// const { type, payload } = action;

//     return reviewsState.filter(review => review.id !== payload.id );
            return cardsState
    }
