// fetch all genres
export const fetchGenres = () => {
    return $.ajax({
        url: '/api/genres',
        method: 'GET'
    })
};

// fetch one genre
export const fetchGenre = genreId => {
    return $.ajax({
        url: `/api/genres/${genreId}`,
        method: 'GET'
    })
};