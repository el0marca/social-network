import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../Reduce/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 2}

    profileAPI.getProfile(userId).then(data => {
      this.props.setUserProfile(data)
    })
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
export default connect(mapStateToProps, { setUserProfile })(ContainerWithRouter)
