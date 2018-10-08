import {
  postUser,
  postSession,
  deleteSession
} from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: "RECEIVE_CURRENT_USER",
  currentUser
});

export const logoutCurrentUser = () => ({
  type: "LOGOUT_CURRENT_USER"
});

export const receiveErrors = (errors) => ({
  type: "RECEIVE_ERRORS",
  errors
});

export const signup = (user) => dispatch => {
  return postUser(user).then(user => dispatch(receiveCurrentUser(user)));
}

export const login = (user) => dispatch => {
  return postSession(user).then(user => dispatch(receiveCurrentUser(user)));
}

export const logout = () => dispatch => {
  return deleteSession().then(user => dispatch(logoutCurrentUser()));
}
