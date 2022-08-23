import React from "react";
import { connect } from "react-redux";
import Shows from "./Shows";
import { getVideos, getVideo } from "../../actions/video_actions";
import { getGenres } from "../../actions/genre_actions";

const mapStateToProps = state => {
    return {
        // Hospital Playlist Id
        video: state.entities.videos[3]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getVideos: () => dispatch(getVideos()),
        getGenres: () => dispatch(getGenres())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shows)