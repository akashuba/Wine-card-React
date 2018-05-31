import * as React from 'react'
import { WineCard } from '../WineCard/WineCard'
import { ICard } from '../../types'
import '../style.css'

const Winelist = ({ wines, isSparkling }: any): React.ReactElement<ICard> => {
    if (isSparkling === true) {
        wines = wines.filter((card: ICard) => {
            return card.sparkling === 'Игристое'
        })
        console.log(isSparkling, wines)
    }
    const CardUnit = () =>
        wines.map((card: ICard, i: number) => {
            return (
                <WineCard
                    key={i}
                    name={card.name}
                    sugarContent={card.sugarContent}
                    colorType={card.colorType}
                    rating={card.rating}
                    sparkling={card.sparkling}
                    imgUrl={card.imgUrl}
                    colorText={card.colorText}
                    aromeText={card.aromeText}
                    tasteText={card.tasteText}
                    originText={card.originText}
                    priceText={card.priceText}
                    noteText={card.tasteText}
                    contributor={card.tasteText}
                />
            )
        })

    return (
        <section className="wine-cards">
            <CardUnit />
        </section>
    )
}

export default Winelist
