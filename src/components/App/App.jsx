import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Login from '../Login/Login'

function App(props) {
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
        <Route path='/login' render={()=> <Login/> }/>
      </div>
    </div>
  )
}

export default App  