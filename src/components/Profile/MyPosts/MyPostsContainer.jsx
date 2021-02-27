import React from 'react';
import { connect } from 'react-redux';
import { updateNewPost } from '../../../Reduce/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {updateNewPost})(MyPosts)

export default MyPostsContainer