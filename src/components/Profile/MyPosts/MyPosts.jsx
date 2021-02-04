import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    const newPostElement = React.createRef();

    const onPostChange=()=>{
        let text = newPostElement.current.value;
        props.UpdateNewPostText(text)
    }
    const send=()=>{
        props.newPost();
    }
    const postsData=props.posts.map(post=><Post message={post.message} likesCount={post.likesCount}/>);
 
    return <div className={s.myPosts}>
            <div>
                <h3>My posts</h3>
                <textarea placeholder='enter your message' ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                <p><button onClick={send}>send</button></p>
            </div>
            <div className={s.item}>
                {postsData}
            </div>
        </div>
    }

// создаем const newPostElement = React.createRef(); =>
//  помещаем ref={newPostElement} в тег ввода(textarea, input и др.) 
// создаем const onPostChange=()=>{
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text)
    // } который следит за изменением в поле ввода и помещает его value в state =>
// к кнопке прикрекляем onClick={props.newPost}, который закрепляет сообщение newPostText в state 
  

export default MyPosts