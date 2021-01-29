import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <img src="https://www.softrew.ru/wp-content/cache/thumb/10/5e83bf23e42db10_810x260.png" alt="" />
            </div>
            <div className={s.profileInfo}>
                <div className={s.avatar}>
                    <img src="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt="" />
                </div>
                <div className={s.info}>
                    <h3>Dmitry K.</h3>
                    <p>Date of birth: 2 january <br />
                       City: Minsk <br />
                       Education: BSU'11 <br />
                       Web-site: https://it.kamasutra.com</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;