import { connect } from "react-redux";
import { getVideo } from "../../actions/video_actions";
import { makeListItem, removeListItem } from '../../actions/list_actions';
import Video from "./Video";

const mapStateToProps = (state, ownProps) => {
    return {
        currentProfileId: state.session.currentProfile
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getVideo: videoId => dispatch(getVideo(videoId)),
        makeListItem: list => dispatch(makeListItem(list)),
        removeListItem: listId => dispatch(removeListItem(listId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Video)