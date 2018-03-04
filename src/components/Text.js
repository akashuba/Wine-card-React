import React, {Component} from 'react';

class Text extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            isOpen: false
        }

    }
    render() {
        const { article } = this.props;
        const body = this.state.isOpen && <div> {article.text} </div>
        const button = <button onClick={this.handleClick} >
        {this.state.isOpen ? 'close' : 'open'}
        </button>
        return (
            <li>
                <h1>
                    {article.title}
                </h1>
                {button}
                <div>
                   {body}
                </div>   
            </li>
        )
    }
    handleClick = () => {
        console.log('clicked');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default Text;