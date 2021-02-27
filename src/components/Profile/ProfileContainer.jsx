import React from 'react';
import Profile from './Profile';
import { getProfileStatus, updateProfileStatus, uploadUserProfile } from '../../Reduce/profileReducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../Hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getProfile, getStatus } from '../../Reduce/profileSelector';
import { getAuthUserId, getIsAuth } from '../../Reduce/authSelector';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = this.props.authorizedUserId }
    if (!userId) { this.props.history.push('/login') }

    if (userId) {
      this.props.uploadUserProfile(userId)
      this.props.getProfileStatus(userId)
    }
  }
  render() {
    return (
      <Profile {...this.props} />)
  }
}
const mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getAuthUserId(state),
    isAuth: getIsAuth(state)
  }
}

export default compose(
  // WithAuthRedirect,
  withRouter,
  connect(mapStateToProps, { uploadUserProfile, getProfileStatus, updateProfileStatus }))(ProfileContainer)