import * as React from 'react'
import { WineCard } from '../WineCard/WineCard'

/* interface IWineList {
    wines: any
} */

const Winelist = ({ wines, ...props }: any): any => {
    const CardUnit = () => ( wines.map((card: any, i: any) => {
        return (
            <div key={i} >
                <WineCard cardItem={card.name} />
            </div>
        )
    }))

    return (
        <div>
            <CardUnit />
        </div>
    )
}

export default Winelist
