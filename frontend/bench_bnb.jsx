import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as sessionActions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  
  //Tests
  window.signup = sessionActions.signup;
  window.logout = sessionActions.logout;
  window.login = sessionActions.login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Test end

  ReactDOM.render(<Root store={store}/>, root);
});