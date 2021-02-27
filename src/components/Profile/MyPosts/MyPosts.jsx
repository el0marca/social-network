import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { maxLength, required } from '../../../utils/validators';
import s from './MyPosts.module.css'
import Post from './Post/Post';

    const maxLength50 = maxLength(50)

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter your message' name='newPostBody' type='post' component={Textarea} validate={[required, maxLength50]} />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}
const ReduxMyPostForm = reduxForm({ form: 'adPost' })(MyPostsForm)

const MyPosts = (props) => {
    const onSubmit = (formData) => props.updateNewPost(formData.newPostBody)
    const postsData = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);
    return (
        <div className={s.myPosts}>
            <div>
                <h3>My posts</h3>
                <ReduxMyPostForm onSubmit={onSubmit} {...props} />
            </div>
            <div className={s.item}>
                {postsData}
            </div>
        </div>)
}



export default MyPosts