import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

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
                    <NavLink to={`profile/${u.id}`}><img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" /></NavLink>
                    {u.followed ? <button disabled={props.isFollowing.some(id=>id===u.id)} onClick={() => {
                       props.toggleIsFollowing(true, u.id)
                       usersAPI.unfollow (u.id)
                        
                        .then(response => { if (response.data.resultCode === 0) { props.unfollowAC(u.id) };
                        props.toggleIsFollowing(false, u.id) })

                    }}>unfollow</button> :

                     <button disabled={props.isFollowing.some(id=>id===u.id)} onClick={() => { 
                        props.toggleIsFollowing(true, u.id)
                        usersAPI.follow (u.id)
                     
                     .then(response => { if (response.data.resultCode === 0) { props.followAC(u.id) };
                     props.toggleIsFollowing(false, u.id) }) 
                     
                     }}>follow</button>}
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