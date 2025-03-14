import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { addMessage, addPost, onPostChange, onMessageChange,subscribe } from './Data/state';
// import { rerenderTree } from "./render";
import store from "./Data/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  ); 
}

rerenderTree(store.getState()) 
store.subscribe(() =>{
  rerenderTree(store.getState()) 
})




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
