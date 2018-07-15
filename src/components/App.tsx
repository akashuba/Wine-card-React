import React, { Component } from 'react'
import WineList from './WineList/WineList'
import Filter from './Filter/Filter'
import { connect } from 'react-redux'
import { ICard } from '../types'

interface IProps {
    cards: ICard[],
    isSparkling: boolean,
    nameLetter: string,
    allFilters: any
}

class App extends Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }
    public componentDidMount() {
        fetch('./winecardsJSON.json', {
            method: 'GET',
        })
            .then(response => {
                if (response.status !== 200 && response.status !== 304) {
                    return Promise.reject(new Error(response.statusText))
                }
                return Promise.resolve(response)
            })
            .then(response => response.json())
            .then(data => {
                console.log('fetch', data)
            })
            .catch(error => {
                console.warn(error)
            })
    }
    public render() {
        const { cards, allFilters } = this.props
        const cardResult = filterByInput(cards, allFilters)
        return (
            <React.Fragment>
                <Filter  />
                <WineList wines={cardResult} />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state: IProps) {
    return {
        cards: state.cards,
        allFilters: state.allFilters
    }
}

function filterByInput(cards: ICard[], filterOption: any) {
    return (cards.filter(card => card.sparkling !== filterOption.sparkling.isSparkling)
                 .filter(card => isMatching(card.name, filterOption.name.nameLetter))
                 .filter(card => isMatching(card.colorType, filterOption.color.colorType))
                 .filter(card => isMatching(card.sugarContent, filterOption.taste.tasteType))
    )
}

function isMatching(full: string, chunk: string) {
    full = full.toLowerCase()
    chunk = chunk.toLowerCase()
    return (full.indexOf(chunk) >= 0)
}

export default connect(mapStateToProps)(App)
