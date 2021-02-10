let initialState = {
    posts: [{id:'1',
            message: "It's your first post",
            likesCount: '15'
        },
        {   id:'2',
            message: "It's your second post",
            likesCount: '38'
        },
        {   id:'3',
            message: "It's your third post",
            likesCount: '26'
        },
        {   id:'4',
            message: "It's your four post",
            likesCount: '67'
        }
    ],
    newPostText: ""
};

export const NewPostActionCreator = () => ({
    type: 'NEW-POST'
});
export const UpdateNewPostTextActionCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
});

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW-POST':
            return {
                ...state, posts: [...state.posts, {
                    message: state.newPostText,
                    likesCount: 0
                }], newPostText: ''
            }
            case 'UPDATE-NEW-POST-TEXT':
                return {
                    ...state,
                    newPostText: action.newText
                }
                default:
                    return state;
    }
};

export default profileReducer;