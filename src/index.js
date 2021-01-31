import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import state from './redux/state'
import {PostMessage} from './redux/state';
import {updateNewMessageText} from './redux/state';
import {updateNewPostText} from './redux/state';
import {newPost} from './redux/state';
import {subscribe} from './redux/state'
 
const renderEntireTree=()=>{
    ReactDOM.render(
        <BrowserRouter>
          <App state={state} PostMessage={PostMessage} updateNewMessageText={updateNewMessageText} updateNewPostText={updateNewPostText} newPost={newPost}/>
        </BrowserRouter>,
        document.getElementById('root')
      );
}
renderEntireTree();

subscribe(renderEntireTree);
