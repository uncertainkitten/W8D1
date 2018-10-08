import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const SessionErrorsReducer = (oldState = {errors: []}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      Object.assign(newState, oldState);
      newState[errors] = action.errors;
      return newState;
    case RECEIVE_CURRENT_USER:
      Object.assign(newState, oldState);
      newState[errors] = [];
      return newState;
    default:
      return oldState;
  }
}

export default SessionErrorsReducer;