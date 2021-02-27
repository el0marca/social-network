import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import profilePhoto from '../../../assets/images/user.jpg'
import Status from './Status/Status';

class ProfileInfo extends React.Component {
    render() {
        if (!this.props.profile) {
            return (<div className={s.preloader}><Preloader /></div>)
        }
        return (
            <div className={s.wrapper}>
                <div className={s.header}>
                    <img src="https://pbs.twimg.com/profile_banners/801011723478175744/1479811563/1500x500" alt="1" />
                </div>
                <div className={s.profileInfo}>
                    <div className={s.avatar}>
                        <img src={this.props.profile.photos.large ? this.props.profile.photos.large : profilePhoto} alt="1" />                
                        <Status {...this.props}/>
                    </div>
                    <div className={s.info}>
                        <h3>{this.props.profile.fullName}</h3>
                        <div>{this.props.profile.aboutMe}</div>

                        <p>{this.props.profile.contacts.facebook ? <li> facebook: <a href={this.props.profile.contacts.facebook}>{this.props.profile.contacts.facebook}</a></li> : null}
                            {this.props.profile.contacts.website ? <li>website: {this.props.profile.contacts.website}</li> : null}
                            {this.props.profile.contacts.vk ? <li>vk: {this.props.profile.contacts.vk}</li> : null}
                            {this.props.profile.contacts.twitter ? <li>twitter: {this.props.profile.contacts.twitter}</li> : null}
                            {this.props.profile.contacts.instagram ? <li>instagram: {this.props.profile.contacts.instagram}</li> : null}
                            {this.props.profile.contacts.youtube ? <li>youtube: {this.props.profile.contacts.youtube}</li> : null}
                            {this.props.profile.contacts.github ? <li>github: {this.props.profile.contacts.github}</li> : null}
                            {this.props.profile.contacts.mainlink ? <li>mainlink: {this.props.profile.contacts.mainlink}</li> : null}
                        </p>
                        <p>{this.props.profile.lookingForAJob ? <li>В поисках работы: {this.props.profile.lookingForAJobDescription}</li> : null}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;