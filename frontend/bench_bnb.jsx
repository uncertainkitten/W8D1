import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.postUser = SessionUtil.postUser;
  window.postSession = SessionUtil.postSession;
  window.deleteSession = SessionUtil.deleteSession;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>You're on REACT NOW my dude!!!111</h1>, root);
});