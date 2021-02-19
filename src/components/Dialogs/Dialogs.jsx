import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Message/Message';

const Dialogs = (props) => {
    const messagesData= props.messagesData.map(d => <Messages key={d.id} message={d.message} />);
    const dialogsData= props.dialogsData.map(dialog => <Dialog name={dialog.name} key={dialog.id} img={dialog.img} />);

const onPostChange=(e)=>{
    let text=e.target.value
    props.updateNewMessageText(text)
};

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsWrapper}>
                {dialogsData}
            </div>
            <div className="messages">
                {messagesData}
                <div className={s.textArea}><textarea placeholder='Enter your message' onChange={onPostChange} value={props.newMessageText}></textarea>
                    <div>
                        <button onClick={()=>props.sendNewMessage()}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;