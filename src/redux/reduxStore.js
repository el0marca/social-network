import { combineReducers, createStore } from "redux";
import dialogsReducer from "../Reduce/dialogsReducer";
import profileReducer from "../Reduce/profileReducer";
import sidebarReducer from "../Reduce/sidebarReducer";
import usersReducer from "../Reduce/usersReducer";

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
    }
)

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store=store;

export default store;