import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import Friends from './Friends/Friends'

const Navbar = (props) => {
  const info=props.friend.map(info=> <Friends name={info.name} img={info.img} altImg={info.altImg}/>)
  return <nav className={s.nav}>
    <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
    <div className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></div>
    <div className={s.item}><NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
    <div className={s.item}><NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
    <div className={s.wrapperSetting}><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></div>
    <div className={s.wrapperFriends}><NavLink to='/friends'> Friends <div className={s.friends}>{info}</div> </NavLink></div>
  </nav>
}


export default Navbar 