import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';

function App(props) {
  debugger
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar friend={props.state.sidebar.friends}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={()=> <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
          <Route path='/dialogs' render={()=><Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  )
}

export default App  