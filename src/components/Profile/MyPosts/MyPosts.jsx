import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = (props) => {
    const postsData=props.posts.map(post=><Post message={post.message} likesCount={post.likesCount}/>);
    return <div className={s.myPosts}>
        <form action="" method="post">
            <h3>My posts</h3>
            <textarea name="news" id="" cols="90" rows="4" placeholder='your news'></textarea>
            <p><button type='send'>send</button></p>
        </form>
        <div className={s.item}>
            {postsData}
        </div>
    </div>
}

export default MyPosts