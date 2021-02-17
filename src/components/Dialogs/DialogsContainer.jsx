import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendNewMessage, updateNewMessageText } from '../../Reduce/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messages,
        dialogsData: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         newMessage: () => {
//             dispatch(newMessageActionCreator())
//         },
//         postChange: (text) => {
//             dispatch(updateNewMessageTextActionCreator(text))
//         }
//     }
// }

const ContainerWithRouter=withRouter(Dialogs)

export const DialogsContainerWR = connect(mapStateToProps, {sendNewMessage, updateNewMessageText})(ContainerWithRouter)

