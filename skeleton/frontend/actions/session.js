import { postUser, postSession, deleteSession } from '../utils/session'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user,
    }
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

//thunk action creators
//currying pattern
export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

//taking in a user object from form
//then from thunk middleware it receives dispatch
export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));


//not taking in arguments but calling the deleteSession and dispatching our logoutCurrentUser
export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));
