import React, { Component } from 'react'
import WineList from './WineList/WineList'
import Filter from './Filter/Filter'
import { connect } from 'react-redux'
import { ICard } from '../types'
import { getCardsByFetch } from '../AC'
import { Spinner } from './Spinner/Spinner'
import { WithCards } from './WithCards'

interface IProps {
    cards: ICard[]
    isSparkling: boolean
    nameLetter: string
    allFilters: any
    getCards: (cards: ICard[]) => void
}

class App extends Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        const { cards, allFilters } = this.props
        const cardResult = cards ? filterByInput(cards, allFilters) : []
        return (
            <React.Fragment>
                <div className="wine-cards-title-container">
                    <img src="./img/Wine_card.png" alt="" className="wine-cards-title" width="50%" height="50%" />
                </div>
                {cards && cards.length > 0 ? (
                    <div>
                        <Filter />
                        <WineList wines={cardResult} />
                    </div>
                ) : (
                    <Spinner />
                )}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state: IProps) {
    return {
        cards: state.cards,
        allFilters: state.allFilters,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    getCards: (cards: ICard[]) => dispatch(getCardsByFetch(cards)),
})

function filterByInput(cards: ICard[], filterOption: any) {
    return cards
        .filter(card => card.sparkling !== filterOption.sparkling.isSparkling)
        .filter(card => isMatching(card.name, filterOption.name.nameLetter))
        .filter(card => isMatching(card.colorType, filterOption.color.colorType))
        .filter(card => isMatching(card.sugarContent, filterOption.taste.tasteType))
}

function isMatching(full: string, chunk: string) {
    full = full.toLowerCase()
    chunk = chunk.toLowerCase()
    return full.indexOf(chunk) >= 0
}

const AppWithCards: any = WithCards(App)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppWithCards)
