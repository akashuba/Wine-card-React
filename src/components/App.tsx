import React, { Component } from 'react'
import ReviewList from './Review'
import WineList from './WineList/WineList'
import Filter from './Filter/Filter'
import { connect } from 'react-redux'

interface IState {
    isChecked: boolean
}

class App extends Component<any, IState> {
    constructor(cards: any) {
        super(cards)
        this.state = {
            isChecked: false,
        }
    }

    public setCheck = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        })
    }

    // public componentDidMount() {
    //     fetch('http://www.mocky.io/v2/5b07c8b43200008e00700034', {
    //         method: 'GET',
    //     })
    //         .then(response => {
    //             if (response.status !== 200) {
    //                 return Promise.reject(new Error(response.statusText))
    //             }
    //             return Promise.resolve(response)
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('fetch', data)
    //         })
    //         .catch(error => {
    //             console.warn(error)
    //         })
    // }

    public render() {
        const {cards} = this.props
        return (
            <React.Fragment>
                <ReviewList />
                <Filter isChecked={this.state.isChecked} setCheck={this.setCheck} />
                <WineList wines={cards} isSparkling={this.state.isChecked} />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state: any) {
    return { cards: state.cards }
}

export default connect(mapStateToProps)(App)
