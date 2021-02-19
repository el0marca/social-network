import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendNewMessage, updateNewMessageText } from '../../Reduce/dialogsReducer';
import { WithAuthRedirect } from '../Hoc/WithAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messages,
        dialogsData: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
    }
};


export default compose(
    connect(mapStateToProps, { sendNewMessage, updateNewMessageText }),
    WithAuthRedirect)(Dialogs)