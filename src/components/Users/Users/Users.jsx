import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount / 100; i++) {
        pages.push(i)
    }
    return (
        <div className={s.content}>
            <div>
                {pages.map((p) => { return <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && s.selectedPage}>{p}</span> })}
            </div>
            {props.users.map(u => {
                return <div className={s.wrapper}> <div className={s.ava}>
                    <NavLink to={`profile/${u.id}`}><img src={u.photos.small ? null : userPhoto} alt="avatar" /></NavLink>
                    {u.followed ? <button onClick={() => props.unfollowAC(u.id)}>follow</button> : <button onClick={() => props.followAC(u.id)}>unfollow</button>}
                </div>
                    <div className={s.info}>
                        <div>
                            <div className={s.name}>{u.name}</div>
                            <div className={s.status}>{u.status}</div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}


export default Users;