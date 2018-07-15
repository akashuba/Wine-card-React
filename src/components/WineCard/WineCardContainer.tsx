import React, { Component } from 'react'
import { WineCard } from './WineCard'
import { ICard } from '../../types'

class WineCardContainer extends Component<{}, ICard> {

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
    console.log(decodeURI( getLocation('hash').replace(/#\/card-item\//g, '').replace(/%20/g, ' ')))
    return (
      <WineCard  {...this.state} currentLocation={window.location.hash} />
    )
  }

}

function getLocation(part: any) {
  return window.location[part]
}

export { WineCardContainer }
