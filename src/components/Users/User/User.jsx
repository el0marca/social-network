import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../assets/images/user.jpg';

class User extends React.Component {
    unfollowUser = () => { this.props.unfollowUser(this.props.id) }
    followUser = () => { this.props.followUser(this.props.id) }
    

    render() {
        // const fff=(this.props.img)
        return ( 
            <div className={s.wrapper}>
                <div className={s.ava}><img src={this.props.img} alt="avatar" />
                    {this.props.followed ? <button onClick={this.unfollowUser}>follow</button> : <button onClick={this.followUser}>unfollow</button>}
                </div>
                <div className={s.info}>
                    <div>
                        <div className={s.name}>{this.props.fullName}</div>
                        <div className={s.status}>{this.props.status}</div>
                    </div>
                    <div className={s.location}>
                        <div className={s.country}>{this.props.country},</div>
                        {this.props.city}</div>
                </div>
            </div>
        )
    }
    
}

// const User = (props) => {
//         return (
//         <div className={s.wrapper}>
//             <div className={s.ava}><img src={props.img?null:userPhoto} alt="1" />
//                 {props.followed? <button onClick={()=>props.unfollowUser(props.id)}>follow</button>:<button onClick={(e)=>props.followUser(props.id)}>unfollow</button>}
//             </div>
//             <div className={s.info}>
//                 <div>
//                     <div className={s.name}>{props.fullName}</div>
//                     <div className={s.status}>{props.status}</div>
//                 </div>
//                 <div className={s.location}>
//                     <div className={s.country}>{props.country},</div>
//                     {props.city}</div>
//             </div>
//         </div>
//     )
// }

export default User;