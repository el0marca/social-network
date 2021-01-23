import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return <div className={s.content}>
    <div className={s.header}>
    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
    </div>
    <div className={`${s.content} ${s.profile}`}>
      <img src="https://geo-media.beatport.com/image_size/300x300/49013d6b-8a63-4222-9822-cf0e689cfb43.jpg" alt="" />
      <div className={`${s.content} ${s.profile_info}`}>
        <h3>Dmitry K.</h3>
        <p>Date of birth: 2 january <br />
        City: Minsk <br />
        Education: BSU'11 <br />
        Web-site: https://it.kamasutra.com</p>
      </div>
    </div>
    <div>
      <MyPosts />
    </div>
  </div>
}

export default Profile