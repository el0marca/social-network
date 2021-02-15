import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthProfilePhoto } from '../../Reduce/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`).then(response => this.props.setAuthProfilePhoto(response.data.photos))
            }
        }
        )
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

export default connect(mapStateToProps, { setAuthUserData, setAuthProfilePhoto })(HeaderContainer)