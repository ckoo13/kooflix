import React from "react";
import { connect } from "react-redux";
import Movies from "./Movies";
import { getVideos, getVideo } from "../../actions/video_actions";
import { getGenres } from "../../actions/genre_actions";

const mapStateToProps = state => {
    return {
        // Spider-Man Video Id
        video: state.entities.videos[12]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getVideos: () => dispatch(getVideos()),
        getGenres: () => dispatch(getGenres())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)