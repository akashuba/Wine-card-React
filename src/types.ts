export interface ICard {
    name: string
    sugarContent: string
    colorType: string
    rating: string
    sparkling: string
    imgUrl: string
    colorText: string
    aromeText: string
    tasteText: string
    originText: string
    priceText: string
    noteText: string
    contributor: string
}

export type OneOrMore<T> = T | T[]
