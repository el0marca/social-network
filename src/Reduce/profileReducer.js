let initialState = {
posts:[
{message:"It's your first post",likesCount:'15'},
{message:"It's your second post",likesCount:'38'},
{message:"It's your third post",likesCount:'26'},
{message:"It's your four post",likesCount:'67'}
],
newPostText: "What's happening"};


const profileReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'NEW-POST':
            let post={message:state.newPostText, likesCount:0};
            state.posts.push(post);
            state.newPostText='';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText=action.newText;
            return state;
        default: 
            return state;
        }
};

export default profileReducer;