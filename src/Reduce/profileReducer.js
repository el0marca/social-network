const SET_USER_PROFILE = 'SET_USER_PROFILE',
    NEW_POST = 'NEW_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [{
            id: '1',
            message: "It's your first post",
            likesCount: '15'
        },
        {
            id: '2',
            message: "It's your second post",
            likesCount: '38'
        },
        {
            id: '3',
            message: "It's your third post",
            likesCount: '26'
        },
        {
            id: '4',
            message: "It's your four post",
            likesCount: '67'
        }
    ],
    newPostText: "",
    profile: null
};

export const NewPostActionCreator = () => ({
    type: NEW_POST
});
export const UpdateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST:
            return {
                ...state, posts: [...state.posts, {
                    message: state.newPostText,
                    likesCount: 0
                }], newPostText: ''
            }
            case UPDATE_NEW_POST_TEXT:
                return {
                    ...state,
                    newPostText: action.newText
                }
                case SET_USER_PROFILE:
                    return {
                        ...state, profile: action.profile
                    }
                    default:
                        return state;
    }
};

export default profileReducer;