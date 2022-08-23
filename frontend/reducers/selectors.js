// Selecting videos from a genre
export const selectVideoGenres = (genre, videos) => {
    const correctVideos = genre.videoIds.map(videoId => {
        return videos[videoId];
    });

    return correctVideos;
};

export const selectShowsOrMovies = (videotype, videos) => {
    const sorted = Object.values(videos).filter((video) => {
      return video.video_type === videotype;
    });
  
    return sorted;
};
