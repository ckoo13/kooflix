import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

//create default state for session
const _nullSession = {
    currentUser: null
    // potentially fix logic to make the session slice of state refer to profile as key
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {currentUser: action.currentUser.id})
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;

    }
}

export default sessionReducer;





