import axios from 'axios';
import React from 'react';
import User from './User/User';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) { axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&count=${this.props.currentPage}`).then(response => { this.props.setUsers(response.data.items) }) }
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`).then(response => { this.props.setUsers(response.data.items) })
    }

    // setCurrentPage=(p)=>{this.props.setCurrentPage(p)}

    render() {
        let pages = [];
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        const info = this.props.users.map(u => <User key={u.id} id={u.id} img={u.photos.large ? null : userPhoto} followed={u.followed} fullName={u.name} /* country={u.location.country} city={u.location.city}*/ status={u.status} unfollowUser={this.props.unfollowUser} followUser={this.props.followUser} />)
        return (
            <div>
                {pages.map((p) => { return <span onClick={() => this.onPageChanged(p)} className={this.props.currentPage === p && s.selectedPage}>{p}</span> })}
                <div className={s.content}>{info}</div>
            </div>
        )
    }
}
// const Users=(props)=>{   
//     if(props.users.length===0){axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{props.setUsers(response.data.items)})}
//     const info = props.users.map(u=><User key={u.id} id={u.id}  img={u.photos.small} followed={u.followed} fullName={u.name} /* country={u.location.country} city={u.location.city} status={u.status} */ unfollowUser={props.unfollowUser} followUser={props.followUser}/>)
//     return (
//         <div className={s.wrapper}>{info}</div>
//     )
// }

export default Users