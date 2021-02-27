import React, { useEffect, useState } from 'react';
import s from './Status.module.css';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditmode = () => {
        this.setState(
            { editMode: true }
        )
    }
    deactivateEditmode = () => {
        this.setState(
            { editMode: false }
        )
        this.props.updateProfileStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value })
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }
    render() {
        return (
            <div>
                {(!this.state.editMode) && <div className={s.status} onDoubleClick={this.activateEditmode}>{this.props.status || 'your status'}</div>}
                {(this.state.editMode) && <div><input autoFocus={true} onBlur={this.deactivateEditmode} onChange={this.onStatusChange} value={this.state.status} /></div>}
            </div>
        )
    }
}

export default function StatusHook(props) {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    function activateEditmode() {
        setEditMode(true)
    }
    function deactivateEditmode() {
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    function changeStatus(e) {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => { setStatus(props.status) }, [props.status])

    return (
        <div>
            {(!editMode) && <div className={s.status} onDoubleClick={activateEditmode}>{props.status || 'your status'}</div>}
            {(editMode) && <div><input autoFocus={true} onBlur={deactivateEditmode} onChange={changeStatus} value={status} /></div>}
        </div>
    )
} 