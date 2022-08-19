import { fetchVideos, fetchVideo } from "../util/video_util";

// export constants
export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

// regular action creators
export const receiveVideos = videos => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    }
};

export const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
};

// thunk action creators
export const getVideos = () => dispatch => fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)));

export const getVideo = videoId => dispatch => fetchVideo(videoId)
    .then(video => dispatch(receiveVideo(video)));