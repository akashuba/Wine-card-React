import React, { Component } from 'react'
import { WineCard } from './WineCard'
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
    const getCard = cards.filter((card) => card.name === getCardFromUrl())
    return (
      <React.Fragment >
        {getCard && getCard.length > 0 ?
          <WineCard  {...getCard[0]} currentLocation={window.location.hash} /> :
          <WineCard  {...this.state} currentLocation={window.location.hash} />
        }
      </React.Fragment >
    )
  }
}

function getCardFromUrl() {
  return decodeURI(window.location.hash.replace(/#\/card-item\//g, '').replace(/%20/g, ' '))
}

function mapStateToProps(state: IReduxProps) {
  return {
    cards: state.cards,
  }
}

export default connect(mapStateToProps)(WineCardContainer)
