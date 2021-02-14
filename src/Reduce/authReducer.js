const SET_USER_DATA = 'SET_USER_DATA',
SET_LOGED='SET_LOGED'


let initialState = {
    id: null,
    login: null,
    email: null,
    isLogged: false
}

export const setUserData = (data, isLogged) => ({
    type: SET_USER_DATA,
    data: data,
    isLogged: isLogged
})


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isLogged: action.isLogged
            }
            default:
                return state
    }
}

export default authReducer