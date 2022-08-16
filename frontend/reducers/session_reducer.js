import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

//create default state for session
const _nullUser = {
    id: null
    // potentially fix logic to make the session slice of state refer to profile as key
};

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id}
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;

    }
}

export default sessionReducer;





