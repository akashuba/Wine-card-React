import * as React from 'react'
import { WineCard } from '../WineCard/WineCard'

const Winelist = (wines: any) => {

    const cardItem = wines.map((card: any) => {
        return (
            card
        )
    })

    return (
        <WineCard cardItem={cardItem} />
    )
}

export default Winelist
