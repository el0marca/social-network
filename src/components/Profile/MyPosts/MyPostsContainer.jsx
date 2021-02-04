import React from 'react';
import { NewPostActionCreator, UpdateNewPostTextActionCreator } from '../../../Reduce/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props)=>{
    let state=props.store.getState();

    const UpdateNewPostText=(text)=>{
        props.store.dispatch(UpdateNewPostTextActionCreator(text))
    }
    const newPost=()=>{
        props.store.dispatch(NewPostActionCreator())
    }
 
    return (
        <MyPosts UpdateNewPostText={UpdateNewPostText} newPost={newPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/> 
    )
}    

export default MyPostsContainer;