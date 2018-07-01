import React, { Component } from 'react'
import '../style.css'
import { connect } from 'react-redux'
import { filterBySparkling, filterByName } from '../../AC'
// import cards from '../../reduce

interface IProps {
    isChecked: boolean,
    setCheck: () => void,
    filterBySparklingWines: (isChecked: boolean) => void,
    filterByNameProps: (nameLetter: string) => void
}

interface IState {
    sparkling: boolean
}

class Filter extends Component<IProps, IState> {
    private testInput: React.RefObject<HTMLInputElement>
    constructor(porps: IProps) {
        super(porps)
        this.state = {
            sparkling: false,
        }
        this.testInput = React.createRef()
    }

    public checkboxHandler = () => {
        this.setState({
            sparkling: !this.state.sparkling,
        })
    }

    public inputHandler = () => {
        console.log(this.testInput.current!.value)
    }

    public render() {
        const { filterBySparklingWines, filterByNameProps } = this.props
        return (
            <section className="selectors">
                <div className="winesColor">
                    <label htmlFor="color-selector" className="visibility-hidden">
                        Содержание сахара
                    </label>
                    <select name="color-selector" id="color-selector" className="selectors-arrow"
                    style={{ backgroundImage: `url(${require('../../img/icon-down-dir.svg')})` }} >
                        <option value="любое">цвет</option>
                        <option value="red">красное</option>
                        <option value="white">белое</option>
                        <option value="rose">розовое</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="taste-selector" className="visibility-hidden">
                        Содержание сахара
                    </label>
                    <select name="taste-selector" id="taste-selector" className="selectors-arrow"
                     style={{ backgroundImage: `url(${require('../../img/icon-down-dir.svg')})` }} >
                        <option value="любое">сладость / крепость</option>
                        <option value="Сухое">сухое</option>
                        <option value="Полусухое">полусухое</option>
                        <option value="Полусладкое">полусладкое</option>
                        <option value="Десертное полусладкое">десертное полусладкое</option>
                        <option value="Десертное сладкое">десертное сладкое</option>
                        <option value="Сладкое">сладкое</option>
                        <option value="Ликерное">ликерное</option>
                        <option value="Крепкое">крепкое</option>
                    </select>
                </div>
                <div className="sparkling-selector">
                    <input
                        type="checkbox"
                        name="sparkling-selector"
                        id="sparkling-selector"
                        value="Игристое"
                        className="visibility-hidden"
                        onChange={(e) => filterBySparklingWines(e.target.checked)}
                    />
                    <label htmlFor="sparkling-selector">
                        игристое
                        <div className="checkbox-view" />
                    </label>
                </div>
                <div>
                    <label htmlFor="search-string" className="visibility-hidden">
                        Поиск по названию
                    </label>
                    <input
                        type="text"
                        name="search-string"
                        id="search-string"
                        placeholder="Введите название вина"
                        ref={this.testInput}
                        onChange={(e) => filterByNameProps(e.target.value)}
                    />
                </div>
                <button type="button" className="add-button" aria-label="добавить вино">
                    ДОБАВИТЬ
                </button>
            </section>
        )
    }
}
const mapDispatchToProps = (dispatch: any) => ({
    filterBySparklingWines: (isChecked: boolean) => dispatch(filterBySparkling(isChecked)),
    filterByNameProps: (nameLetter: string) => dispatch(filterByName(nameLetter))
})

/* const mapStateToProps = (state: any) => {
    return {isSparkling: state.isSparkling}
} */

export default connect(null, mapDispatchToProps)(Filter)
