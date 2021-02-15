const SET_USER_DATA = 'SET_USER_DATA',
      SET_USER_PROFILE_PHOTO = 'SET_USER_PROFILE_PHOTO';

let initialState = {
    id: null,
    login: null,
    email: null,
    isLogged: false,
    profilePhoto: null
}

export const setAuthUserData = (data) => ({
    type: SET_USER_DATA,
    data: data
})

export const setAuthProfilePhoto =(photo)=>({
    type: SET_USER_PROFILE_PHOTO,
    photo
})

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isLogged: true
            }
        case SET_USER_PROFILE_PHOTO:
            return {
                ...state, profilePhoto:action.photo
            }
            default:
                return state
    }
}

export default authReducer