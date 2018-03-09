import { DELETE_REVIEW } from '../constants'

export function deleteReview(id) {
    return {
        type: DELETE_REVIEW,
        payload: { id }
    }
}