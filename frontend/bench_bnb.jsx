import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {postSession} from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  
  //Tests
  window.postSession = postSession;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Test end

  ReactDOM.render(<Root store={store}/>, root);
});