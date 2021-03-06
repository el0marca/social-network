// import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthProfilePhoto, logout } from '../../Reduce/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />)
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuth: state.auth.isAuth,
    profilePhoto:state.auth.profilePhoto
})

export default connect(mapStateToProps, { setAuthUserData, setAuthProfilePhoto, logout })(HeaderContainer)