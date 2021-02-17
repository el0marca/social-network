// import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthProfilePhoto, setAuthThunkCreator } from '../../Reduce/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthThunkCreator()
    }
    render() {
        return (
            <Header {...this.props} />)
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isLogged: state.auth.isLogged,
    profilePhoto:state.auth.profilePhoto
})

export default connect(mapStateToProps, { setAuthUserData, setAuthProfilePhoto, setAuthThunkCreator })(HeaderContainer)