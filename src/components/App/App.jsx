import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import UsersContainer from '../Users/UsersContainer';
import  { ProfileContainerWR } from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';
import { DialogsContainerWR } from '../Dialogs/DialogsContainer';

function App(props) {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={()=> <ProfileContainerWR />} />
          <Route path='/dialogs/:userId?' render={()=><DialogsContainerWR/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' render={()=><UsersContainer/>}/> 
        </div>
      </div>
  )
}

export default App  