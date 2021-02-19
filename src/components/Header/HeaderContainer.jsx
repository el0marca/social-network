// import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthProfilePhoto, getAuthUserData } from '../../Reduce/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return (
            <Header {...this.props} />)
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isLogged: state.auth.isAuth,
    profilePhoto:state.auth.profilePhoto
})

export default connect(mapStateToProps, { setAuthUserData, setAuthProfilePhoto, getAuthUserData })(HeaderContainer)