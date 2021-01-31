import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Message/Message';

// let messagesData = [{ id: 1, message: 'Lets go to do it' },
// { id: 2, message: 'Preview continue keep strong' },
// { id: 3, message: 'Awesome state buy' },
// { id: 4, message: 'Loading is true' }];


const Dialogs = (props) => {
    const messageData = props.dialogsPage.messages.map(d => <Messages message={d.message} />);
    const dialogsData = props.dialogsPage.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} img={dialog.img} />);
 
    let newPostElement=React.createRef();

    const send=()=>{
        props.PostMessage()
    }
    const onPostChange=()=>{
        let text=newPostElement.current.value;
        props.updateNewMessageText(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsWrapper}>
                {dialogsData}
            </div>
            <div className="messages">
                {messageData}
                <div className={s.textArea}><textarea onChange={onPostChange} value={props.dialogsPage.newMessageText} ref={newPostElement}></textarea>
                    <div>
                        <button onClick={send}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs