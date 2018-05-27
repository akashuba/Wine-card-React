import * as React from 'react'
import { WineCard } from '../WineCard/WineCard'

interface IWineList {
    wines: any
}

const Winelist = ({ wines, ...props }: IWineList): any => {
    const CardUnit = wines.map((card: any, i: any) => {
        return (
            <div key={i} >
                {card.name}
            </div>
        )
    })

    return (
        <div>
            <WineCard cardItem={CardUnit} />
        </div>
    )
}

export default Winelist
