import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Menu = () => (
    <ul className="menu-route">
        <li className="menu-route__item">
            <Link to="/" className="menu-route__item-link" >Home</Link>
        </li>
        <li className="menu-route__item">
            <Link to="/about" className="menu-route__item-link">About</Link>
        </li>
    </ul>
)

export default Menu
