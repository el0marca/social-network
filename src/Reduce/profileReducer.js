import {
    usersAPI
} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE',
    NEW_POST = 'NEW_POST',
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

const NewPostAC = (newPostText) => ({
    type: NEW_POST,
    newPostText,
});
const setUserProfileAC = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatusAC = (status) => ({
    type: SET_USER_PROFILE_STATUS,
    status
})

export const updateNewPost = (newPostText) => {
    return (dispatch) => {
        dispatch(NewPostAC(newPostText))
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
                    message: action.newPostText,
                    likesCount: 0
                }]
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