import React from 'react';
import Profile from './Profile';
import { uploadUserProfile } from '../../Reduce/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 2}
    this.props.uploadUserProfile(userId)
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />)
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}
const ContainerWithRouter = withRouter(ProfileContainer)

export const ProfileContainerWR = connect(mapStateToProps, { uploadUserProfile })(ContainerWithRouter)
