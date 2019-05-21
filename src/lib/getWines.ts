import store from '../store'
import { getCardsByFetch } from '../AC'

export function getWines(wineName: string) {
    const url: string = !wineName
        ? `${process.env.REACT_APP_API}/api/wines`
        : `${process.env.REACT_APP_API}/api/wines/card-item/${wineName}`

    fetch(url, { method: 'GET' })
        .then(response => {
            if (response.status !== 200 && response.status !== 304) {
                return Promise.reject(new Error(response.statusText))
            }
            return Promise.resolve(response)
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                store.dispatch(getCardsByFetch(data))
            }
        })
        .catch(error => {
            console.warn(error)
        })
}
