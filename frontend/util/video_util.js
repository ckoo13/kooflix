// get videos
export const fetchVideos = () => {
    return $.ajax({
        url: '/api/videos',
        method: 'GET'
    })
};

// get a video
export const fetchVideo = videoId => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'GET'
    })
};