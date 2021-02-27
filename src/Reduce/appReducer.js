import {
    getAuthUserData
} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initialized: false
}

const setInitiazedAC = () => ({
    type: SET_INITIALIZED
})

export const initializeApp = () => (dispatch) => {
    const promiss = dispatch(getAuthUserData())
    promiss.then(() => dispatch(setInitiazedAC()))
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
            default:
                return state
    }

}