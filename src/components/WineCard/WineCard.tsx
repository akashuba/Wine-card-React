import * as React from 'react'

interface IWinecar {
    cardItem: string
}

const WineCard = ({ cardItem, ...props }: IWinecar): React.ReactElement<IWinecar> => {
    console.log(cardItem)
    return (
        <React.Fragment>
            {cardItem}
        </React.Fragment>
    )
}

export { WineCard }
