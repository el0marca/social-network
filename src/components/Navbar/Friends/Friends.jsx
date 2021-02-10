import React from 'react';
import s from './Friends.module.css'

const FriendsContent = (props) =>{
    return (
        <div className={s.wrapper}> <img src={props.img} alt={props.altImf} />
            <div>{props.name}</div> </div>
    )
}

const Friends = (props) => {
    return (
    props.friend.map(info=> <FriendsContent key={info.id} name={info.name} img={info.img} altImg={info.altImg}/>)
    )
}

export default Friends;