import * as React from 'react'
import { WineCard } from '../WineCard/WineCard'
import { ICard } from '../../types'
import '../style.css'
import { Link } from 'react-router-dom'

interface IProps {
    wines: ICard[],
}

const Winelist = ({ wines }: IProps): React.ReactElement<IProps> => {

    return (
        <section className="wine-cards">
            {wines.map((card: ICard, i: number) => (

                <Link key={card.name} to={{
                    pathname: `/card-item/${card.name}`,
                    // state: card,
                    // search: `?${card.name}`
                }} >
                    <WineCard
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
                        noteText={card.noteText}
                        contributor={card.tasteText}
                    />
                </Link>
            )
            )}
        </section>
    )
}

export default Winelist
