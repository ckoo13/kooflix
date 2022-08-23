import React from "react";
import { connect } from "react-redux";
import Browse from "./Browse";
import { getVideos, getVideo } from "../../actions/video_actions";
import { getGenres } from "../../actions/genre_actions";

const mapStateToProps = state => {
    return {
        videos: state.entities.videos,
        genres: state.entities.genres
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getVideos: () => dispatch(getVideos()),
        getGenres: () => dispatch(getGenres())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse)