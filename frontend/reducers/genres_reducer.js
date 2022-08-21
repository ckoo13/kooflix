import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from "../actions/genre_actions";

const genresReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_GENRES:
            return action.genres;
        case RECEIVE_GENRE:
            nextState[action.genre.id] = action.genre;
            return nextState;
        default:
            return state;
    }
};

export default genresReducer