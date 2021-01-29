import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import {PostMessage} from './redux/state';
import {updateNewMessageText} from './redux/state'

export const renderEntireTree=(state)=>{
    ReactDOM.render(
        <BrowserRouter>
          <App state={state} PostMessage={PostMessage} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,
        document.getElementById('root')
      );
}