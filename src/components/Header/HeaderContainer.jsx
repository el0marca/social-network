import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../../Reduce/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then(response => { if (response.data.resultCode === 0) { this.props.setUserData(response.data.data, true) } }
        )
    }
    render() {
        return (
            <Header isLogged={this.props.isLogged} />)
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps, { setUserData })(HeaderContainer)