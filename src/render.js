import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

export const renderEntireTree=(state,post)=>{
    ReactDOM.render(
        <BrowserRouter>
          <App state={state} PostMessage={post}/>
        </BrowserRouter>,
        document.getElementById('root')
      );
}