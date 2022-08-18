import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_CURRENT_PROFILE } from "../actions/profile_actions";

//create default state for session
const _nullUser = {
    id: null,
    currentProfile: null
    // potentially fix logic to make the session slice of state refer to profile as key
};

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id}
        case RECEIVE_CURRENT_PROFILE:
            nextState.currentProfile = action.profileId
            return nextState;
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;

    }
}

export default sessionReducer;





