import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

//create a default state for session
//what we want to be returned if we don't have a current user
const _nullSession = {
    currentUser: null
}

//takes in a default state and the action we dispatch
export default (state = _nullSession, action) => {
    //so we don't accidentally mutate our state
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            //want to return currentUser as a new slice of state nested under the name currentUser
            //making a copy and assigning the object {currentUser: action.user}
            return Object.assign({}, {currentUser: action.user});
        case LOGOUT_CURRENT_USER:
            //returning the session with no currentUser
            return _nullSession;
        default:
            //if we don't receive anything just return state as before
            return state;
            break;
    }
}