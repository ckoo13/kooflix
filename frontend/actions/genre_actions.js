import { fetchGenres, fetchGenre } from "../util/genre_util"

// export constants
export const RECEIVE_ALL_GENRES = 'RECEIVE_ALL_GENRES';
export const RECEIVE_GENRE = 'RECEIVE_GENRE';

// regular action creators
export const receiveGenres = genres => {
    return {
        type: RECEIVE_ALL_GENRES,
        genres
    }
};

export const receiveGenre = genre => {
    return {
        type: RECEIVE_GENRE,
        genre
    }
};

// thunk action creators
export const getGenres = () => dispatch => fetchGenres()
    .then(genres => dispatch(receiveGenres(genres)));

export const getGenre = genreId => dispatch => fetchGenre(genreId)
    .then(genre => dispatch(receiveGenre(genre)));