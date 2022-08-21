import { combineReducers } from "redux";

import profilesReducer from "./profiles_reducer";
import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer";
import genresReducer from "./genres_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    profiles: profilesReducer,
    videos: videosReducer,
    genres: genresReducer
});

export default entitiesReducer