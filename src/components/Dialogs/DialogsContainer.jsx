import React from 'react';
import { newMessageActionCreator, updateNewMessageTextActionCreator } from '../../Reduce/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState()
 
    const postChange=(text)=>{
        props.store.dispatch(updateNewMessageTextActionCreator(text))
}
    const newMessage=()=>{
    props.store.dispatch(newMessageActionCreator())
}
    return (
        <Dialogs postChange={postChange} newMessage={newMessage} messagesData = {state.dialogsPage.messages} dialogsData={state.dialogsPage.dialogs} newMessageText={state.dialogsPage.newMessageText}/>
    )
}

export default DialogsContainer