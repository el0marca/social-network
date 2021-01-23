import React from 'react';
import s from './Post.module.css'

const Post = ({ message, likesCount }) => {
    return (
        <div className={s.item}>
            <div>
                <img src="https://geo-media.beatport.com/image_size/300x300/49013d6b-8a63-4222-9822-cf0e689cfb43.jpg" alt="" />
                {message}
            </div>
            <span>Like {likesCount}</span>
        </div>
    )
}

export default Post