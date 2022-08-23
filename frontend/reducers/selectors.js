// Selecting videos from a genre
export const selectVideoGenres = (genre, videos) => {
    const correctVideos = genre.videoIds.map(videoId => {
        return videos[videoId];
    });

    return correctVideos;
};
