import React from "react";
import { connect } from "react-redux";
import Browse from "./Browse";
import { getVideos, getVideo } from "../../actions/video_actions";
import { getGenres } from "../../actions/genre_actions";
import { getAllLists } from "../../actions/list_actions";

const mapStateToProps = state => {
    return {
        videos: state.entities.videos,
        genres: state.entities.genres,
        lists: state.entities.lists
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getVideos: () => dispatch(getVideos()),
        getGenres: () => dispatch(getGenres()),
        getAllLists: () => dispatch(getAllLists())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse)