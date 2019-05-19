import React from 'react'
import store from '../../store'
import { getCardsByFetch } from '../../AC'

interface IProps {
    togglePopup: () => void
}

const WineAddPopup = ({ togglePopup }: IProps): React.ReactElement<IProps> => {
    return (
        <section className="add-wine-form-wrapper">
            <div className="add-wine-form">
                <h3 className="form-titile">Добавить карту</h3>
                <form
                    onSubmit={e => sendFormData(e, togglePopup)}
                    method="post"
                    encType="multipart/form-data"
                    name="addcard"
                >
                    <ul>
                        <li>
                            <label htmlFor="contributor">Представьтесь</label>
                            <input type="text" name="contributor" id="contributor" />
                        </li>
                        <li>
                            <label htmlFor="formName">Марка</label>
                            <input type="text" name="name" id="formName" placeholder="Cabernet" />
                        </li>
                        <li className="wineColor">
                            <label htmlFor="colorType">Цвет </label>
                            <select name="colorType" id="colorType" className="selectors-arrow">
                                <option value="red">красное</option>
                                <option value="white">белое</option>
                                <option value="rose">розовое</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="sugarContent">Содержание сахара</label>
                            <select name="sugarContent" id="sugarContent" className="selectors-arrow">
                                <option value="Сухое">сухое</option>
                                <option value="Полусухое">полусухое</option>
                                <option value="Полусладкое">полусладкое</option>
                                <option value="Десертное полусладкое">десертное полусладкое</option>
                                <option value="Десертное сладкое">десертное сладкое</option>
                                <option value="Сладкое">сладкое</option>
                                <option value="Ликерное">ликерное</option>
                                <option value="Крепкое">крепкое</option>
                            </select>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="sparkling"
                                id="sparkling"
                                value="Игристое"
                                className="form-sparkling-input visibility-hidden"
                            />
                            <label htmlFor="sparkling" className="form-sparkling-lable">
                                Игристое:
                                <div className="form-checkbox-view" />
                            </label>
                        </li>
                        <li>
                            <label htmlFor="formColorText">Цвет</label>
                            <input type="text" name="colorText" id="formColorText" />
                        </li>
                        <li>
                            <label htmlFor="aromeText">Аромат</label>
                            <input type="text" name="aromeText" id="aromeText" />
                        </li>
                        <li>
                            <label htmlFor="tasteText">Вкус</label>
                            <input type="text" name="tasteText" id="tasteText" />
                        </li>
                        <li>
                            <label htmlFor="originText">Происхождение</label>
                            <input type="text" name="originText" id="originText" placeholder="Италия" />
                        </li>
                        <li>
                            <label htmlFor="priceText">Цена &#8381;</label>
                            <input type="number" name="priceText" id="priceText" />
                        </li>
                        <li id="raiting-wrapper">
                            <label htmlFor="formRaiting"> Рейтинг</label>
                            <select name="formRaiting" id="formRaiting" className="selectors-arrow">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </li>
                        <li>
                            <div className="noteText-wraper">
                                <label htmlFor="noteText">Комментарии:</label>
                                <textarea name="noteText" id="noteText" />
                            </div>
                        </li>
                        <li id="file-button">
                            <label htmlFor="fileFild" className="fileFild">
                                ВЫБРАТЬ ФОТО
                            </label>
                            <input type="file" name="file" id="fileFild" className="visibility-hidden" />
                            <p className="file-text">(jpeg, png, bmp размер до 500 KB)</p>
                        </li>
                        <li>
                            <label htmlFor="formSubmit" />
                            <input type="submit" value="добавить" id="formSubmit" />
                        </li>
                    </ul>
                </form>
                <button type="button" aria-label="Закрыть форму" id="formClose" onClick={togglePopup} />
            </div>
        </section>
    )
}
// tslint:disable
const sendFormData = (e: any, togglePopup: any): any => {
    {
        const oData = new FormData(e.target)
        const oReq = new XMLHttpRequest()
        oReq.open('POST', `${process.env.REACT_APP_API}/api/wines/upload`, true)
        oReq.onload = function(oEvent) {
            if (oReq.status === 200) {
                console.log(oReq.responseText)
                fetch(`${process.env.REACT_APP_API}/api/wines`, { method: 'GET' })
                    .then(response => {
                        if (response.status !== 200 && response.status !== 304) {
                            return Promise.reject(new Error(response.statusText))
                        }
                        return Promise.resolve(response)
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data) {
                            store.dispatch(getCardsByFetch(data))
                        }
                    })
                    .catch(error => {
                        console.warn(error)
                    })
                // window.location.reload()
            } else {
                console.warn('Error ' + oReq.status + ' occurred when trying to upload your file')
            }
        }
        oReq.send(oData)
        e.preventDefault()
    }
}

export { WineAddPopup }
