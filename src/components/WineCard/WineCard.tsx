import * as React from 'react'
import { ICard } from '../../types'
import '../style.css'

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
}: ICard): React.ReactElement<ICard> => {
    return (
        <div className="card-item">
            <div className="card-img" style={{ backgroundImage: `url(${require(`${imgUrl}`)})` }}>
                <div className={`wine-color ${colorType}`} />
                <div className="wine-raiting">&#9733;{rating}&#9733;</div>
            </div>
            <h3 className="card-title">{name}</h3>
            <div className="card-text">
                <p>
                    <span className="bold-text">Цвет:</span>
                    {colorText}
                </p>
                <p>
                    <span className="bold-text">Аромат:</span>
                    {aromeText}
                </p>
                <p>
                    <span className="bold-text">Вкус:</span>
                    {tasteText}
                </p>
                <p>
                    <span className="bold-text">{sparkling}</span>
                </p>
                <p className="visibility-hidden">
                    <span className="bold-text">{sugarContent}</span>
                </p>
                <p>
                    <span className="bold-text">Происхождение:</span>
                    {originText}
                </p>
                <p>
                    <span className="bold-text">Цена:</span>
                    {priceText} &#8381;
                </p>
                <p>
                    <span className="bold-text">Примечание:</span>
                    {noteText}
                </p>
            </div>
            {/*             <p className='more-info' data-parent={name}>
                Подробнее...
            </p> */}
        </div>
    )
}

export { WineCard }
