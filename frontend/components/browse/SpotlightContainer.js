import React from "react";
import { connect } from "react-redux";
import Spotlight from "./Spotlight";
import { getVideo } from "../../actions/video_actions";

// const mapStateToProps = state => {
//     return {
//         video: state.entities.videos[1]
//     }
// };

const mapDispatchToProps = dispatch => {
    return {
        getVideo: videoId => dispatch(getVideo(videoId))
    }
}

export default connect(mapDispatchToProps)(Spotlight)

