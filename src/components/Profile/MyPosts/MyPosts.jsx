import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.my_posts}>
        <form action="" method="post">
            <h3>My posts</h3>
            <textarea name="news" id="" cols="90" rows="4" placeholder='your news'></textarea>
            <p><button type='send'>send</button></p>
        </form>
        <div className={s.item}>
            <Post message="It's your first post" likesCount='15'/>
            <Post message="It's your second post" likesCount='38'/>
            <Post message="It's your third post" likesCount='26'/>
            <Post message="It's your four post" likesCount='67'/>
        </div>
    </div>
}

export default MyPosts