import React from "react";
import { connect } from "react-redux";
import Browse from "./Browse";
import { getVideos, getVideo } from "../../actions/video_actions";

const mapStateToProps = state => {
    return {
        video: state.entities.videos[1]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getVideos: () => dispatch(getVideos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse)