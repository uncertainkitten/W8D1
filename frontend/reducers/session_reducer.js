import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const SessionReducer = (oldState = {id: null}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      Object.assign(newState, oldState);
      newState[id] = action.user.id;
      return newState;
    case LOGOUT_CURRENT_USER:
      Object.assign(newState, oldState);
      newState[id] = null;
      return newState;
    default:
      return oldState;
  }
}

export default SessionReducer;