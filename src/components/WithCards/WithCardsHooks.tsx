import React, { useState, useEffect } from 'react'
import { Spinner } from '../Spinner/Spinner'
import { OneOrMore } from '../../types'
import { getWines } from '../../lib/getWines'

interface IProps {
    children?: OneOrMore<React.ReactNode>
    wineName?: string
}

export const WithCards = (props: IProps) => {
    const [load, setLoad] = useState(false)

    useEffect(() => {
        getWines(props.wineName).then(() => {
            setLoad(true)
        })
    }, [])
    return <div>{load ? props.children : <Spinner />}</div>
}
