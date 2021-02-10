import React from 'react';
import { connect } from 'react-redux';
import { NewPostActionCreator, UpdateNewPostTextActionCreator } from '../../../Reduce/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state)=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps =(dispatch)=>{
    return {
        UpdateNewPostText: (text)=>{
            dispatch(UpdateNewPostTextActionCreator(text))
        },
        newPost: ()=>{
            dispatch(NewPostActionCreator())
        }
    }
}

const MyPostsContainer=connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer