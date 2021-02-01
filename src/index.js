import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import store from './redux/reduxStore.js';
 
const renderEntireTree=()=>{
    ReactDOM.render(
        <BrowserRouter>
          <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
      );
}
renderEntireTree();

store.subscribe(renderEntireTree);