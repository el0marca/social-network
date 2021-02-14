import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import { setUserProfile } from '../../Reduce/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 2}
    // this.props.toggleIsUpload(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      // this.props.toggleIsUpload(false)
      this.props.setUserProfile(response.data)
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
