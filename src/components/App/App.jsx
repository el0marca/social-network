import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';

function App(props) {
  return (
    <BrowserRouter> 
      <div className='app-wrapper'>
        <Header />
        <Navbar friend={props.state.sidebar.friends}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={()=> <Profile profilePage={props.state.profilePage} updateNewPostText={props.updateNewPostText} newPost={props.newPost}/>} />
          <Route path='/dialogs' render={()=><Dialogs dialogsPage={props.state.dialogsPage} PostMessage={props.PostMessage} updateNewMessageText={props.updateNewMessageText}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App  