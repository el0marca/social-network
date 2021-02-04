import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Message/Message';

const Dialogs = (props) => {
    const messagesData= props.messagesData.map(d => <Messages message={d.message} />);
    const dialogsData= props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} img={dialog.img} />);
 
    let newPostElement=React.createRef();

const onPostChange=()=>{
    let text=newPostElement.current.value;
    props.postChange(text);
};
const send=()=>{
    props.newMessage();
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsWrapper}>
                {dialogsData}
            </div>
            <div className="messages">
                {messagesData}
                <div className={s.textArea}><textarea placeholder='enter your message' onChange={onPostChange} value={props.newMessageText} ref={newPostElement}></textarea>
                    <div>
                        <button onClick={send}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;