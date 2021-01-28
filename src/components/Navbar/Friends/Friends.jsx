import React from 'react';
import s from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={s.wrapper}> <img src={props.img} alt={props.altImf} />
            <div>{props.name}</div> </div>
    )
}

export default Friends;