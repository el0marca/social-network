import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import profilePhoto from '../../../assets/images/user.jpg'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (<div className={s.preloader}><Preloader /></div>)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <img src="https://pbs.twimg.com/profile_banners/801011723478175744/1479811563/1500x500" alt="1" />
            </div>
            <div className={s.profileInfo}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large?props.profile.photos.large:profilePhoto} alt="1" />
                    <div>{props.profile.aboutMe}</div>
                </div>
                <div className={s.info}>
                    <h3>{props.profile.fullName}</h3>
                    <p>{props.profile.contacts.facebook ? <li> facebook: <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></li> : null}
                        {props.profile.contacts.website ? <li>website: {props.profile.contacts.website}</li> : null}
                        {props.profile.contacts.vk ? <li>vk: {props.profile.contacts.vk}</li> : null}
                        {props.profile.contacts.twitter ? <li>twitter: {props.profile.contacts.twitter}</li> : null}
                        {props.profile.contacts.instagram ? <li>instagram: {props.profile.contacts.instagram}</li> : null}
                        {props.profile.contacts.youtube ? <li>youtube: {props.profile.contacts.youtube}</li> : null}
                        {props.profile.contacts.github ? <li>github: {props.profile.contacts.github}</li> : null}
                        {props.profile.contacts.mainlink ? <li>mainlink: {props.profile.contacts.mainlink}</li> : null}
                    </p>
                    <p>{props.profile.lookingForAJob ? <li>В поисках работы: {props.profile.lookingForAJobDescription}</li> : null}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;