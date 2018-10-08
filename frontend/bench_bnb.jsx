import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  window.postUser = SessionUtil.postUser;
  window.postSession = SessionUtil.postSession;
  window.deleteSession = SessionUtil.deleteSession;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<h1>You're on REACT NOW my dude!!!111</h1>, root);
});