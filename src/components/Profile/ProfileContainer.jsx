import React from 'react';
import Profile from './Profile';
import { getProfileStatus, updateProfileStatus, uploadUserProfile } from '../../Reduce/profileReducer';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../Hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 14920 }
    this.props.uploadUserProfile(userId)
    this.props.getProfileStatus(userId)
    
  }
  render() {
    return (
      <Profile {...this.props} />)
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status:state.profilePage.status
  }
}

export default compose(WithAuthRedirect,
  withRouter,
  connect(mapStateToProps, { uploadUserProfile, getProfileStatus, updateProfileStatus }))(ProfileContainer)