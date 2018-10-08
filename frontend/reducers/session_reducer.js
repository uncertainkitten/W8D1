import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import {merge} from 'lodash';

const SessionReducer = (oldState = {id: null}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {id: action.currentUser.user.id})
    case LOGOUT_CURRENT_USER:
      return merge({}, oldState, {id: null});
    default:
      return oldState;
  }
}

export default SessionReducer;