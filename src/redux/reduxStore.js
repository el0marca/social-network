import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "../Reduce/authReducer";
import dialogsReducer from "../Reduce/dialogsReducer";
import profileReducer from "../Reduce/profileReducer";
import sidebarReducer from "../Reduce/sidebarReducer";
import usersReducer from "../Reduce/usersReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store;