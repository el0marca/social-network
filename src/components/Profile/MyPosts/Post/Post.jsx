import React from 'react';
import s from './Post.module.css'

const Post = ({ message, likesCount }) => {
    return (
        <div className={s.item}>
            <div>
                <img src="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt="" />
                {message}
            </div>
            <span>Like {likesCount}</span>
        </div>
    )
}

export default Post