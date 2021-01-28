import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={'/dialogs/' + props.id}>
                <img src={props.img} alt={props.altImg}/>
                {props.name} </NavLink>
        </div>
    )
}

export default Dialog