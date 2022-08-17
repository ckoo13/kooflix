import { combineReducers } from "redux";

import profilesReducer from "./profiles_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    profiles: profilesReducer
});

export default entitiesReducer