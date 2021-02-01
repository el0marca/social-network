import { combineReducers, createStore } from "redux";
import dialogsReducer from "../Reduce/dialogsReducer";
import profileReducer from "../Reduce/profileReducer";
import sidebarReducer from "../Reduce/sidebarReducer";

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebar: sidebarReducer,
    }
)

let store = createStore(reducers);

export default store;
