import { connect } from "react-redux";
import { getVideos } from "../../actions/video_actions";
import VideoIndex from "./VideoIndex";


// for now just see if we can render all videos
const mapStateToProps = state => {
    videos: Object.values(state.entities.videos)
};

const mapDispatchToProps = dispatch => {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);