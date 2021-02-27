import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Login from '../Login/Login'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../Reduce/authReducer';
import { initializeApp } from '../../Reduce/appReducer';
import Preloader from '../../common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  } 
  render() {
    if(!this.props.initialized) return <Preloader/>
     return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs/' render={() => <DialogsContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp, getAuthUserData
}))(App)
