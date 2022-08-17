import { RECEIVE_ALL_PROFILES, RECEIVE_PROFILE, OBLITERATE_PROFILE } from "../actions/profile_actions";

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_PROFILES:
            return action.profiles;
        case RECEIVE_PROFILE:
            nextState[action.profile.id] = action.profile;
            return nextState;
        case OBLITERATE_PROFILE:
            delete nextState[action.profileId];
            return nextState;
        default:
            return state;
    }
}

export default profilesReducer;