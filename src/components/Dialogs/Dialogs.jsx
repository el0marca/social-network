import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
const maxLength50 = maxLength(50);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessage' placeholder='Enter your message' component={Textarea} validate={[required, maxLength50]} />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const ReduxDialogsForm = reduxForm({ form: 'Dialog' })(DialogsForm)

const Dialogs = (props) => {
    const onSubmit = (formData) => { props.sendNewMessage(formData.newMessage) }
    const messagesData = props.messagesData.map(d => <Messages key={d.id} message={d.message} />);
    const dialogsData = props.dialogsData.map(dialog => <Dialog name={dialog.name} key={dialog.id} img={dialog.img} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsWrapper}>
                {dialogsData}
            </div>
            <div className="messages">
                {messagesData}
                <div className={s.textArea}>
                    <ReduxDialogsForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;