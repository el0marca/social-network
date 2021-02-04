import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import { Route } from 'react-router-dom';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import DialogsContainer from '../Dialogs/DialogsContainer';

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar  friend={props.store.getState().sidebar.friends} />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={()=> <Profile store={props.store} />} />
          <Route path='/dialogs' render={()=><DialogsContainer  store={props.store} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  )
}

export default App  