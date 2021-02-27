import {
    stopSubmit
} from "redux-form";
import {
    usersAPI,
    auth
} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA',
    SET_USER_PROFILE_PHOTO = 'SET_USER_PROFILE_PHOTO';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    profilePhoto: null
}

export const setAuthUserData = (email, id, login, isAuth) => ({
    type: SET_USER_DATA,
    email,
    id,
    login,
    isAuth: isAuth
})

export const setAuthProfilePhoto = (photo) => ({
    type: SET_USER_PROFILE_PHOTO,
    photo
})

export const getAuthUserData = () => (dispatch) => {
      return auth.setAuth().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(response.data.email, response.data.id, response.data.login, true));
                usersAPI.getProfile(response.data.id)
                    .then(response => dispatch(setAuthProfilePhoto(response.photos)))
            }
        })
    }

export const login = (email, password, rememberMe) => (dispatch) => {
    auth.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                const message = response.messages.length > 0 ? response.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch) => {
    auth.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.email,
                    id: action.id,
                    login: action.login,
                    isAuth: action.isAuth
            }
            case SET_USER_PROFILE_PHOTO:
                return {
                    ...state, profilePhoto: action.photo
                }
                default:
                    return state
    }
}

export default authReducer