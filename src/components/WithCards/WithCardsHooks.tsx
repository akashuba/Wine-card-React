import React, { useState, useEffect } from 'react'
import store from '../../store'
import { getCardsByFetch } from '../../AC'
import { Spinner } from '../Spinner/Spinner'
import { OneOrMore } from '../../types'

interface IProps {
    children?: OneOrMore<React.ReactNode>
    wineName?: string
}

export const WithCards = (props: IProps) => {
    const [load, setLoad] = useState(false)

    const url: string = !props.wineName
        ? `${process.env.REACT_APP_API}/api/wines`
        : `${process.env.REACT_APP_API}/api/wines/card-item/${props.wineName}`

    useEffect(() => {
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
                    setLoad(true)
                }
            })
            .catch(error => {
                console.warn(error)
            })
    }, [])
    return <div>{load ? props.children : <Spinner />}</div>
}
