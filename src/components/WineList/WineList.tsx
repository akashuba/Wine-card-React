import * as React from 'react'
import { WineCard } from '../WineCard/WineCard'
import { ICard } from '../../types'

const Winelist = ({ wines}: any): React.ReactElement<ICard> => {
    const CardUnit = () =>
        wines.map((card: ICard, i: number) => {
            return (
                <div key={i}>
                    <WineCard cardItem={card.name} />
                </div>
            )
        })

    return (
        <div>
            <CardUnit />
        </div>
    )
}

export default Winelist
