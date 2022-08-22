import { connect } from "react-redux";
import { getVideo } from "../../actions/video_actions";
import VideoPlayer from "./VideoPlayer";

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.videoid]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getVideo: videoId => dispatch(getVideo(videoId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)