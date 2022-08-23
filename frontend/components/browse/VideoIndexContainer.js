import { connect } from "react-redux";
import { getVideos } from "../../actions/video_actions";
import VideoIndex from "./VideoIndex";


// for now just see if we can render all videos
// const mapStateToProps = state => {
//     return {
//         videos: Object.values(state.entities.videos)
//     }
// };

const mapDispatchToProps = dispatch => {
    return {
        getVideos: () => dispatch(getVideos())
    }
};

export default connect(mapDispatchToProps)(VideoIndex);