import { connect } from "react-redux";
import { getVideo } from "../../actions/video_actions";
import Video from "./Video";

// const mapStateToProps = (state, ownProps) => {
//     return {
//         video: state.entities.videos[1]
//     }
// };

const mapDispatchToProps = dispatch => {
    return {
        getVideo: videoId => dispatch(getVideo(videoId))
    }
};

export default connect(mapDispatchToProps)(Video)