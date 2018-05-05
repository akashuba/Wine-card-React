import { DELETE_REVIEW } from "../constants";

export function deleteReview(id) {
    return {
        payload: { id },
        type: DELETE_REVIEW,
    };

}
