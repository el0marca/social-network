import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://pngquant.org/Ducati_side_shadow-fs8.png" alt="1" />
        <div className={s.login}>{props.isLogged?'loged':<NavLink to='login'>login</NavLink>}</div>
    </header>
}

export default Header