import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPosts profilePage={props.profilePage} updateNewPostText={props.updateNewPostText} newPost={props.newPost}/>
    </div>)
}

export default Profile