import { DELETE_REVIEW } from '../constants'

export function deleteReview(id: number) {
    return {
        type: DELETE_REVIEW,
        payload: { id },
    }

}
