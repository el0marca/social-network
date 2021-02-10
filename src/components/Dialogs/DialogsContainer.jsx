import React from 'react';
import { connect } from 'react-redux';
import { newMessageActionCreator, updateNewMessageTextActionCreator } from '../../Reduce/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messages,
        dialogsData: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        newMessage: () => {
            dispatch(newMessageActionCreator())
        },
        postChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default SuperDialogsContainer;