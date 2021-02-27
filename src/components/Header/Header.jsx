import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css';
import user from '../../assets/images/user.jpg'

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://pngquant.org/Ducati_side_shadow-fs8.png" alt="1" />

        <div className={s.login}>{props.isAuth
            ? <div className={s.profilePhoto}>{!props.profilePhoto ? null
                : <img src={user} alt="avatar" />}{props.auth.login}
                <button onClick={props.logout}>logout</button>
            </div>
            : <NavLink to='login'>login</NavLink>}</div>
    </header>
}

export default Header