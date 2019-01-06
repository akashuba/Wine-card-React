import * as React from 'react'
import { ICard } from '../../types'
import '../style.css'
import { Link } from 'react-router-dom'

interface IWithRoute extends ICard {
    currentLocation?: string
}

const WineCard = ({
    name,
    sugarContent,
    sparkling,
    colorText,
    colorType,
    contributor,
    aromeText,
    rating,
    tasteText,
    originText,
    priceText,
    noteText,
    imgUrl,
    currentLocation
}: IWithRoute): React.ReactElement<IWithRoute> => {
    // backgroundImage: `url(${require(`${imgUrl}`)})`
    return (

        <div className={currentLocation && currentLocation.length > 0 ? 'card-container' : 'empty'} >
            {currentLocation && currentLocation.length > 0 ?
                <Link to="/" >
                    <div className="back-arrow-container" >
                        <div className="back-to-main-arrow" ></div>
                    </div>
                </Link>
                : null
            }
            <div className={currentLocation && currentLocation.length > 0 ?
                `card-item card-item-big` : `card-item `}>
                <div className={currentLocation && currentLocation.length > 0 ?
                    `card-img card-img-big` : `card-img `}
                    style={{ backgroundImage: `url(${imgUrl} )` }}>
                    <div className={`wine-color ${colorType}`} />
                    <div className="wine-raiting">&#9733;{rating}&#9733;</div>
                </div>
                <div className="text-content" >
                    <h3 className={currentLocation && currentLocation.length > 0 ?
                        `card-title card-title-big` : `card-title `}>{name}</h3>
                    <div className={currentLocation && currentLocation.length > 0 ?
                        `card-text card-text-big` : `card-text `}>
                        <p>
                            <span className="bold-text">Цвет: </span>
                            {colorText}
                        </p>
                        <p>
                            <span className="bold-text">Аромат: </span>
                            {aromeText}
                        </p>
                        <p>
                            <span className="bold-text">Вкус: </span>
                            {tasteText}
                        </p>
                        <p>
                            <span className="bold-text">{sparkling}</span>
                        </p>
                        <p className="visibility-hidden">
                            <span className="bold-text">{sugarContent}</span>
                        </p>
                        <p>
                            <span className="bold-text">Происхождение: </span>
                            {originText}
                        </p>
                        <p>
                            <span className="bold-text">Цена: </span>
                            {priceText} &#8381;
                        </p>
                        <p>
                            <span className="bold-text">Примечание: </span>
                            {noteText}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { WineCard }
