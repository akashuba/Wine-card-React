import React, { Component } from 'react'
import { WineCard } from './WineCard'
import { WithCards } from '../WithCards'
import { ICard } from '../../types'
import { connect } from 'react-redux'

interface IReduxProps {
    cards: ICard[]
}

type Props = IReduxProps
type State = ICard

class WineCardContainer extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: '',
            sugarContent: '',
            sparkling: '',
            colorText: '',
            colorType: '',
            contributor: '',
            aromeText: '',
            rating: '',
            tasteText: '',
            originText: '',
            priceText: '',
            noteText: '',
            imgUrl: '',
        }
    }

    public render() {
        const { cards } = this.props
        const getCard = cards ? cards.filter(card => card.name === getCardFromUrl()) : []
        return (
            <React.Fragment>
                {cards.length > 0 && getCard && getCard.length > 0 ? (
                    <WineCard {...getCard[0]} currentLocation={window.location.pathname} />
                ) : (
                        <WithCards wineName={getCardFromUrl()} >
                            {getCard && getCard.length > 0 ?
                                <WineCard {...getCard[0]} currentLocation={window.location.pathname} /> :
                                <WineCard {...this.state} currentLocation={window.location.pathname} />
                            }
                        </WithCards>
                    )}
            </React.Fragment>
        )
    }
}

function getCardFromUrl() {
    return decodeURI(window.location.pathname.replace(/\/card-item\//g, '').replace(/%20/g, ' '))
}

function mapStateToProps(state: IReduxProps) {
    return {
        cards: state.cards,
    }
}

export default connect(
    mapStateToProps,
    null,
)(WineCardContainer)
