import {
    usersAPI
} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE',
    NEW_POST = 'NEW_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';

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
    profile: null,
    status: ''
};

const NewPostAC = () => ({
    type: NEW_POST
});
const UpdateNewPostTextAC = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
const setUserProfileAC = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatusAC = (status) => ({
    type: SET_USER_PROFILE_STATUS,
    status
})

export const sendNewPost = () => {
    return (dispatch) => {
        dispatch(NewPostAC())
    }
}

export const updatePostText = (text) => {
    return (dispatch) => {
        dispatch(UpdateNewPostTextAC(text))
    }
}


export const uploadUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfileAC(data))
        })
    }
}

export const getProfileStatus = (id) => {
    return (dispatch) => {
        usersAPI.getStatus(id).then(data => {
            dispatch(setStatusAC(data))
        })
    }
}

export const updateProfileStatus = (status) => (dispatch)=>  {
        usersAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
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
        case SET_USER_PROFILE_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
};

export default profileReducer;